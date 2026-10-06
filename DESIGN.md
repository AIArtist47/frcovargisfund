# Design system — Fr. C.O. Vargis Scholarship Fund

Design language mirrored from the "16th Hole" private-members-club reference
(bone canvas, editorial serif with a highlighted italic phrase, quiet sans UI,
staggered rounded photo cards), then fitted to a scholarship nonprofit.

## Token map (reference → site)

```
Colors (light)
  --canvas           #edebe1   page background (reference bone/cream)
  --canvas-raised    #f3f1e9   raised bands
  --surface          #f8f7f2   card cores
  --highlight        #dfdac5   box behind the italic phrase ("not distant.")
  --ink              #1e1d17   headlines + body (never pure black)
  --ink-soft         #3b3a31   long-form body
  --muted            #5f5d53   secondary text (5.3:1 on canvas)
  --hairline         ink @ 12%  dividers
  --accent           #8a3b2e   oxblood, from the vestments in the photography;
                               focus rings + tiny spot use only (6.3:1 on canvas)
  --night            #1e1d17   dark "evening" band (the anniversary dinner)

Colors (dark, prefers-color-scheme) — same roles, warm espresso
  canvas #15140f · surface #201e18 · ink #ece9dc · muted #a9a697 · accent #e39a86

Typography
  Serif (display, headings)   Newsreader, optical sizing on, weight 400,
                              tracking -0.02 to -0.028em, line-height 1.04-1.1
  Sans (UI, body)             Geist 400/500/600
  Mono (dates, meta)          Geist Mono 400/500, tabular figures
  Eyebrow                     12px, uppercase, 0.16em tracking (reference "PRIVATE MEMBERS CLUB")
  Scale (fluid clamp)         12 / 14 / 16-17 / 18-21 / 22-28 / 28-40 / 36-60 / 42-84px

Spacing & shape
  Gutter        clamp(16px, 4vw, 40px)
  Section y     clamp(88px, 4rem + 7vw, 160px)
  Max width     1240px (text measure 54-64ch)
  Radius        6px buttons (reference white button) · 10px photo cards · 16px bezel shells
  Shadows       effectively none; hairline rings + one ultra-diffuse lift on hover

Components
  Button light  white, 6px radius, hairline ring (reference "Approach the club")
  Button dark   ink fill; trailing arrow nested in its own chip (button-in-button)
  Bezel         outer shell (ink @ 4.5%, hairline, 6px padding, 16px radius)
                around an inner core (10px radius, inset top highlight)
  Photo strip   5 cards, bottom-aligned, heights 0.8 / 1.08 / 1.28 / 1.1 / 1.0 x width,
                bleeding off both edges and clipped by the hero's bottom edge
  Mark          italic serif on --highlight, 4px radius, box-decoration-break: clone

Motion
  Easing        cubic-bezier(.16,1,.3,1) out · cubic-bezier(.32,.72,0,1) spring
  Reveal        18px rise + fade, 80ms stagger, IntersectionObserver only
  Strip         scroll-linked drift via animation-timeline (no scroll listeners)
  Smooth scroll  Lenis 1.3.26 (jsDelivr, SRI-pinned), lerp 0.09. Honors scroll-padding-top
                 (96px) so anchors clear the floating nav; same-page anchors also move focus.
                 Paused while the menu or lightbox is open. Falls back to native scroll.
  Reduced motion disables all of the above
```

## Home hero backdrop

The original site's banner (icon of Christ blessing the children, 1395x908) sits behind the title.

```
Structure    .hero__stage (isolated) > .hero__backdrop (absolute, z -1) + centered text column.
             Backdrop runs from the hero top to just behind the tops of the photo cards,
             so the cards rise in front of the painting's faded tail (.strip is z 1).
Hierarchy    Painting = ambient layer. Reverse vignette: canvas veil densest behind the text
             (0.80 core / 0.62 mid / 0.36 edge), so the haloed figures at the sides stay visible.
Color        All veils use --canvas-rgb (the site's primary canvas color) with alpha.
             Top: 0-11% feather from solid canvas so it never reads as a hard-edged banner.
             Bottom half: eased fade, 50% transparent -> 92% solid (stops .1/.28/.5/.72/.9/1),
             no visible start line. Painting filter: saturate(.85) sepia(.12).
Contrast     Worst case = black pixel under the veil. Veil >= 0.6 wherever text sits:
             headline >= 4:1 (needs 3:1), eyebrow >= 5:1, lead switched from --muted to
             --ink-soft to hold >= 5.8:1. The highlighted phrase keeps its opaque box.
Responsive   < 760px: wider veil ellipse (95% x 70%) because the title spans the full width.
Dark mode    Same layers on the espresso canvas; veil 0.84 / 0.70 / 0.46 and painting
             brightness(.78) so cream text keeps contrast.
Motion       One-time 2.4s settle (scale 1.06 -> 1, fade in); off under reduced motion.
```

## Footer frieze

The Last Supper (hand-colored print, Boston Public Library on Unsplash, Unsplash License,
8000x2683) runs full-bleed at the top of the shared footer, bookending the hero icon.

```
Size         height clamp(220px, 30vw, 440px), object-position 49% 60% (Jesus centered).
Blend        Top 0-20% feathered from canvas; bottom half eased into solid canvas (same stops
             as the hero). Same --art-filter, so it follows dark mode automatically.
Overlap      The footer sign rises clamp(3rem, 7.5vw, 6.5rem) into the faded lower edge.
Loading      loading="lazy", srcset 800-3200w via Unsplash's auto=format (WebP/AVIF).
Motion       Scroll-linked settle (scale 1.1 -> 1) via animation-timeline: view(); off under
             reduced motion. Credit line in the footer bottom row.
```

## Rules

- One primary action per view. "Donate" is always reachable (header, island nav, menu, footer).
- Color is scarce: oxblood appears only on focus rings, the notice dot and the closed tag.
- Photography runs through a light warm filter so decades-old prints sit together; hover restores full color.
- Every interactive target is at least 44px tall.
- No emoji, no stock imagery, no pill-shaped primary buttons, no heavy shadows.

## Source content

All copy, names, prices, dates and links come from the live site (frcovargisfund.org),
lightly edited for clarity. Media is hot-linked from the current Weebly host via the
`B` and `V` tokens in `build.mjs`; change those two values when assets move.
