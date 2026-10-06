// Site behaviour: smooth scroll, time-bound content, menu dialog, floating
// masthead, print mounting, click-to-play video, copy buttons, lightbox,
// contact form.
(() => {
  const root = document.documentElement;
  root.classList.add("reveal-on");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const live = document.getElementById("live");
  const announce = (message) => {
    if (!live) return;
    live.textContent = "";
    requestAnimationFrame(() => (live.textContent = message));
  };

  /* ---------- Smooth scroll (Lenis) ---------- */
  // Skipped for reduced motion or if the CDN script failed; native scrolling
  // (with CSS scroll-behavior) takes over in both cases.
  const lenis = window.Lenis && !reduceMotion.matches
    ? new window.Lenis({ autoRaf: true, lerp: 0.09, stopInertiaOnNavigate: true, allowNestedScroll: true })
    : null;

  // Same-page anchors: Lenis scrolls, and focus moves to the target so the
  // skip link and keyboard users land where the page now shows.
  const pagePath = (path) => path.replace(/index\.html$/, "");
  document.addEventListener("click", (event) => {
    if (!lenis || event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest("a[href*='#']");
    if (!link) return;
    const url = new URL(link.href);
    if (!url.hash || url.origin !== location.origin || pagePath(url.pathname) !== pagePath(location.pathname)) return;
    const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
    if (!target) return;
    event.preventDefault();
    // Lenis already honours html { scroll-padding-top }, so no extra offset.
    lenis.scrollTo(target);
    history.pushState(null, "", url.hash);
    if (!target.matches("a[href], button, input, select, textarea, [tabindex]")) target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  });

  /* ---------- Time-bound content ---------- */
  const now = Date.now();
  document.querySelectorAll("[data-expires]").forEach((el) => {
    if (now > Date.parse(el.dataset.expires)) el.remove();
  });
  // Whole calendar days in Houston, so "In 31 days" means the same thing on
  // every clock: Oct 6 to Nov 6 is 31, whatever the hour.
  const houstonDay = (time) => {
    const [y, m, d] = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Chicago", year: "numeric", month: "2-digit", day: "2-digit" })
      .format(time).split("-").map(Number);
    return Date.UTC(y, m - 1, d) / 86_400_000;
  };
  document.querySelectorAll("[data-countdown]").forEach((el) => {
    const days = houstonDay(Date.parse(el.dataset.countdown)) - houstonDay(now);
    if (days > 1) el.textContent = `In ${days} days`;
    else if (days === 1) el.textContent = "Tomorrow";
    else if (days === 0) el.textContent = "Tonight";
  });

  /* ---------- Menu dialog ---------- */
  const menu = document.getElementById("site-menu");
  const openers = document.querySelectorAll("[data-menu-open]");
  const inertBefore = new Map();
  let trigger = null;

  const setExpanded = (value) => openers.forEach((b) => b.setAttribute("aria-expanded", String(value)));

  function openMenu(button) {
    trigger = button;
    menu.hidden = false;
    // Everything outside the dialog goes inert, which keeps focus inside it.
    for (const el of document.body.children) {
      if (el === menu || el.tagName === "SCRIPT") continue;
      inertBefore.set(el, el.inert);
      el.inert = true;
    }
    root.classList.add("menu-open");
    lenis?.stop();
    setExpanded(true);
    requestAnimationFrame(() => requestAnimationFrame(() => menu.classList.add("is-open")));
    menu.querySelector(".menu__list a")?.focus();
  }

  function closeMenu({ restoreFocus = true } = {}) {
    if (menu.hidden) return;
    menu.classList.remove("is-open");
    inertBefore.forEach((was, el) => (el.inert = was));
    inertBefore.clear();
    root.classList.remove("menu-open");
    lenis?.start();
    setExpanded(false);
    setTimeout(() => (menu.hidden = true), reduceMotion.matches ? 0 : 400);
    if (restoreFocus) trigger?.focus();
  }

  if (menu) {
    openers.forEach((button) => button.addEventListener("click", () => openMenu(button)));
    menu.querySelector("[data-menu-close]")?.addEventListener("click", () => closeMenu());
    menu.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
    menu.addEventListener("click", (event) => {
      const link = event.target.closest("a[href]");
      if (link) closeMenu({ restoreFocus: false });
    });
  }

  /* ---------- Masthead: glassine backing once the page has moved ---------- */
  const header = document.querySelector("[data-header]");
  if (header && "IntersectionObserver" in window) {
    const sentinel = document.createElement("div");
    sentinel.setAttribute("aria-hidden", "true");
    sentinel.style.cssText = "position:absolute;top:0;left:0;width:1px;height:120px;pointer-events:none";
    document.body.prepend(sentinel);
    new IntersectionObserver(([entry]) => header.classList.toggle("is-stuck", !entry.isIntersecting)).observe(sentinel);
  }

  /* ---------- Mounting: prints settle as they reach the reader ---------- */
  const revealables = document.querySelectorAll("[data-mount]");
  if ("IntersectionObserver" in window && !reduceMotion.matches) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 }
    );
    revealables.forEach((el) => io.observe(el));
  } else {
    revealables.forEach((el) => el.classList.add("is-in"));
  }

  /* ---------- Click-to-play video ---------- */
  document.querySelectorAll("[data-video]").forEach((card) => {
    const button = card.querySelector("button");
    button?.addEventListener("click", () => {
      const poster = card.querySelector("img");
      const video = document.createElement("video");
      video.src = card.dataset.video;
      video.controls = true;
      video.playsInline = true;
      video.preload = "auto";
      if (poster) video.poster = poster.currentSrc || poster.src;
      video.setAttribute("aria-label", card.dataset.label || "Video");
      card.replaceChildren(video);
      video.focus();
      video.play().catch(() => {});
    });
  });

  /* ---------- Copy to clipboard ---------- */
  document.querySelectorAll("[data-copy]").forEach((button) => {
    const label = button.querySelector("[data-copy-label]");
    const original = label?.textContent;
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(button.dataset.copy);
        if (label) label.textContent = "Copied";
        announce(`${button.dataset.copy} copied to clipboard`);
        setTimeout(() => label && (label.textContent = original), 2200);
      } catch {
        announce(`Copy failed. The address is ${button.dataset.copy}`);
      }
    });
  });

  /* ---------- Gallery lightbox ---------- */
  const lightbox = document.querySelector("[data-lightbox]");
  if (lightbox && typeof lightbox.showModal === "function") {
    const items = [...document.querySelectorAll("[data-lightbox-item]")];
    const caption = lightbox.querySelector("[data-lightbox-caption]");
    const image = document.createElement("img");
    caption.before(image);
    const count = lightbox.querySelector("[data-lightbox-count]");
    let index = 0;

    const show = (i) => {
      index = (i + items.length) % items.length;
      const item = items[index];
      const thumb = item.querySelector("img");
      image.src = item.dataset.full;
      image.alt = thumb.alt;
      caption.textContent = thumb.alt;
      count.textContent = `${index + 1} of ${items.length}`;
    };

    items.forEach((item, i) =>
      item.addEventListener("click", () => {
        show(i);
        lightbox.showModal();
        lenis?.stop();
      })
    );
    lightbox.addEventListener("close", () => lenis?.start());
    lightbox.querySelector("[data-prev]").addEventListener("click", () => show(index - 1));
    lightbox.querySelector("[data-next]").addEventListener("click", () => show(index + 1));
    lightbox.querySelector("[data-close]").addEventListener("click", () => lightbox.close());
    lightbox.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") show(index - 1);
      if (event.key === "ArrowRight") show(index + 1);
    });
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) lightbox.close();
    });
  }

  /* ---------- Contact form: composes an email in the visitor's mail app ---------- */
  const form = document.querySelector("[data-mailto-form]");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    let firstInvalid = null;
    form.querySelectorAll("[required]").forEach((field) => {
      const valid = field.checkValidity();
      const error = document.getElementById(`${field.id}-error`);
      field.setAttribute("aria-invalid", String(!valid));
      if (error) error.textContent = valid ? "" : field.dataset.error;
      if (!valid && !firstInvalid) firstInvalid = field;
    });
    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    const data = new FormData(form);
    const topic = form.querySelector("#topic");
    const subject = `${topic.selectedOptions[0].textContent}: message from ${data.get("name")}`;
    const body = `${data.get("message")}\n\n${data.get("name")}\n${data.get("email")}`;
    const status = form.querySelector(".form__status");
    status.textContent = `Opening your email app to send this to ${data.get("topic")}. If nothing opens, write to that address directly.`;
    window.location.href = `mailto:${data.get("topic")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
})();
