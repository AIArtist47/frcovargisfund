// Static build: wraps each page in src/pages with the shared head, header and
// footer partials, expands {{tokens}} and {{icon:name}}, and copies assets to dist/.
import { readFile, writeFile, readdir, mkdir, cp, rm } from "node:fs/promises";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const SRC = join(root, "src");
const OUT = join(root, "dist");
const SITE = "https://www.frcovargisfund.org";

// Media still lives on the current Weebly host. Point these at local folders
// once the photos and videos are migrated.
const TOKENS = {
  B: "https://www.frcovargisfund.org/uploads/7/3/6/0/73609127/",
  V: "https://www.frcovargisfund.org/uploads/b/73609127-938330056247901116/",
  year: String(new Date().getFullYear()),
};

const svg = (body, size = 14) =>
  `<svg class="icon" width="${size}" height="${size}" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">${body}</svg>`;

const ICONS = {
  arrow: svg('<path d="M2.5 8h10.5M9 3.5 13.5 8 9 12.5" stroke="currentColor" stroke-width="1.5"/>'),
  external: svg('<path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" stroke="currentColor" stroke-width="1.5"/>'),
  play: svg('<path d="M5 3.2v9.6L12.8 8z" fill="currentColor"/>', 12),
  copy: svg('<rect x="5.5" y="5.5" width="8" height="8" rx="1.5" stroke="currentColor" stroke-width="1.4"/><path d="M10.5 3.5V3A1.5 1.5 0 0 0 9 1.5H4A1.5 1.5 0 0 0 2.5 3v5A1.5 1.5 0 0 0 4 9.5h.5" stroke="currentColor" stroke-width="1.4"/>'),
  plus: svg('<path d="M8 2.5v11M2.5 8h11" stroke="currentColor" stroke-width="1.5"/>'),
  close: svg('<path d="m3.5 3.5 9 9m0-9-9 9" stroke="currentColor" stroke-width="1.5"/>', 16),
  prev: svg('<path d="M10 3 5 8l5 5" stroke="currentColor" stroke-width="1.5"/>', 16),
  next: svg('<path d="m6 3 5 5-5 5" stroke="currentColor" stroke-width="1.5"/>', 16),
};

function expand(html, vars) {
  return html
    .replace(/\{\{icon:([\w-]+)\}\}/g, (_, name) => {
      if (!ICONS[name]) throw new Error(`Unknown icon: ${name}`);
      return ICONS[name];
    })
    .replace(/\{\{(\w+)\}\}/g, (match, key) => (key in vars ? vars[key] : match));
}

const partial = (name) => readFile(join(SRC, "partials", `${name}.html`), "utf8");

export async function build() {
  const [head, header, footer] = await Promise.all(["head", "header", "footer"].map(partial));
  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });
  await cp(join(SRC, "assets"), join(OUT, "assets"), { recursive: true });

  const files = (await readdir(join(SRC, "pages"))).filter((f) => f.endsWith(".html"));
  for (const file of files) {
    const raw = await readFile(join(SRC, "pages", file), "utf8");
    const match = raw.match(/^<!--\s*page\s*(\{[\s\S]*?\})\s*-->\s*/);
    if (!match) throw new Error(`${file}: missing <!-- page {...} --> header`);
    const meta = JSON.parse(match[1]);
    const body = raw.slice(match[0].length);

    if (meta.raw) {
      await writeFile(join(OUT, file), expand(body, TOKENS));
      continue;
    }

    const path = file === "index.html" ? "" : file;
    const vars = {
      ...TOKENS,
      title: meta.title,
      description: meta.description,
      url: `${SITE}/${path}`,
      ogImage: expand(meta.ogImage ?? "{{V}}media3_372.jpg", TOKENS),
      headExtra: meta.headExtra ?? "",
      // Pages served at arbitrary paths (404) need a base so relative assets resolve.
      base: meta.base ? `<base href="${meta.base}">` : "",
      bodyExtra: (meta.scripts ?? []).map((s) => `<script src="${s}" defer></script>`).join("\n"),
    };
    const nav = meta.nav
      ? header.replaceAll(`data-nav="${meta.nav}"`, `data-nav="${meta.nav}" aria-current="page"`)
      : header;
    const page = `${head}\n<body>\n${nav}\n<main id="main" tabindex="-1">\n${body}\n</main>\n${footer}\n</body>\n</html>\n`;
    await writeFile(join(OUT, file), expand(page, vars));
  }
  return files.length;
}

if (resolve(process.argv[1] ?? "") === fileURLToPath(import.meta.url)) {
  const count = await build();
  console.log(`Built ${count} pages -> dist/`);
}
