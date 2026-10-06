// Dev server: builds once, serves dist/, and rebuilds whenever src/ changes.
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { watch } from "node:fs";
import { join, extname, normalize, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "./build.mjs";

const root = dirname(fileURLToPath(import.meta.url));
const DIST = join(root, "dist");
const PORT = Number(process.env.PORT) || 4173;
const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".json": "application/json",
};

await build();

let timer;
watch(join(root, "src"), { recursive: true }, () => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    build().then(() => console.log("rebuilt")).catch((err) => console.error(err.message));
  }, 80);
});

createServer(async (req, res) => {
  let rel = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  if (rel.endsWith("/")) rel += "index.html";
  const file = normalize(join(DIST, rel));
  if (!file.startsWith(DIST)) return res.writeHead(403).end();
  try {
    const body = await readFile(file);
    res.writeHead(200, { "Content-Type": TYPES[extname(file)] ?? "application/octet-stream", "Cache-Control": "no-store" });
    res.end(body);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("Not found");
  }
}).listen(PORT, () => console.log(`Serving dist/ at http://localhost:${PORT}`));
