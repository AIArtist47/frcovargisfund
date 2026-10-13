---
name: Fr. C.O. Vargis Scholarship Fund
description: The parish's own family album, mounted print by print on light gray leaves.
colors:
  g100: "#f8f9fa"
  g200: "#e9ecef"
  g300: "#dee2e6"
  g400: "#ced4da"
  g500: "#adb5bd"
  g600: "#6c757d"
  g700: "#495057"
  g800: "#343a40"
  g900: "#212529"
typography:
  display:
    fontFamily: "Montserrat, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.5rem + 3.9vw, 4.75rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Montserrat, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 1.35rem + 2.2vw, 3.125rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Montserrat, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.05rem + 0.8vw, 1.75rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "Mukta, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.1875rem, 1.1rem + 0.45vw, 1.4375rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Mukta, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1.02rem + 0.2vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.62
  label:
    fontFamily: "Mukta, Segoe UI, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
  pencil:
    fontFamily: "Kalam, Segoe Print, Bradley Hand, cursive"
    fontSize: "clamp(1.0625rem, 1rem + 0.3vw, 1.25rem)"
    fontWeight: 300
    lineHeight: 1.3
  site-title:
    fontFamily: "EB Garamond, Garamond, Georgia, serif"
    fontSize: "26px"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "0.03em"
    textTransform: "uppercase"
rounded:
  sm: "3px"
  lg: "16px"
  full: "999px"
spacing:
  gutter: "clamp(1rem, 4.5vw, 3rem)"
  grid-gap: "clamp(1.25rem, 3vw, 2.5rem)"
  leaf-y: "clamp(4.5rem, 3rem + 7vw, 9.5rem)"
  row-y: "1.4rem"
components:
  button-cloth:
    backgroundColor: "{colors.g900}"
    textColor: "{colors.g100}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "0.65rem 1.2rem 0.6rem"
    height: "48px"
  button-cloth-hover:
    backgroundColor: "{colors.g800}"
  button-study:
    backgroundColor: "{colors.g700}"
    textColor: "{colors.g100}"
    rounded: "{rounded.sm}"
    padding: "0.65rem 1.2rem 0.6rem"
    height: "48px"
  button-study-hover:
    backgroundColor: "{colors.g800}"
  button-paper:
    backgroundColor: "{colors.g100}"
    textColor: "{colors.g900}"
    rounded: "{rounded.sm}"
    padding: "0.65rem 1.2rem 0.6rem"
    height: "48px"
  button-paper-hover:
    backgroundColor: "{colors.g200}"
  button-compact:
    height: "44px"
    padding: "0.65rem 1rem 0.6rem"
  cta-pill:
    backgroundColor: "{colors.g100}"
    rounded: "{rounded.full}"
    padding: "0.375rem"
  cta-pill-give:
    backgroundColor: "{colors.g900}"
    textColor: "{colors.g100}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    padding: "0.7rem 1.35rem 0.65rem"
    height: "48px"
  cta-pill-give-hover:
    backgroundColor: "{colors.g800}"
  cta-pill-study:
    textColor: "{colors.g900}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    padding: "0.7rem 1.35rem 0.65rem"
    height: "48px"
  cta-pill-study-hover:
    backgroundColor: "{colors.g200}"
  print-frame:
    backgroundColor: "{colors.g300}"
    rounded: "{rounded.lg}"
    padding: "0"
  print-slot:
    backgroundColor: "{colors.g200}"
    textColor: "{colors.g600}"
    typography: "{typography.pencil}"
    rounded: "{rounded.lg}"
  field-input:
    backgroundColor: "{colors.g100}"
    textColor: "{colors.g900}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 0.9rem"
    height: "50px"
  nav-link:
    textColor: "{colors.g800}"
    typography: "{typography.body}"
    height: "44px"
---

# Design System: Fr. C.O. Vargis Scholarship Fund

## Overview

**Creative North Star: "The Parish Album"**

The site is the parish's own family album. Each page is a light gray leaf; photographs are mounted on it unframed, square to the page with a soft 16px corner, and captioned underneath in pencil. The people Fr. Vargis raised are the proof, so the system's job is to present real photographs with the care of a kept album rather than the gloss of a campaign.

Everything is drawn from nine neutral gray steps; photographs are the only source of color on any page. Depth is physical and quiet: a photograph lands flat on the leaf, bookcloth panels carry a woven texture, and a glassine interleaf lays over the page when the menu opens. Density is generous: wide leaves, a 12-column grid with asymmetric splits, nothing centered by default. One motion moment, mounting, gives the album its life; every other transition is a short state change.

Information that elsewhere would become cards, stat tiles or price boxes is written into the album as ruled register rows: hairline-separated lines of label and text, the way a parish ledger records it.

**Key Characteristics:**
- Nine-step neutral gray palette, nothing else; photographs keep their own color.
- Montserrat Bold headings, Mukta text, Kalam pencil captions, and the site title in EB Garamond.
- Unframed photographs with a soft 16px corner (client-pinned); an empty slot with initials where a photograph is missing.
- One fully round hero pill (client decision, 2026-10-13): a bookcloth Donate half in g900 beside a paper "I'm a student" half.
- Ruled register rows instead of cards.
- One authored motion: mounting. Static under reduced motion.

## Colors

A pinned, fully neutral scale: cool grays from paper (g100) to ink (g900), with tone and texture doing the work color usually does.

### Primary
- **Bookcloth Black** (g900): the Donate half of the hero pill, the primary Donate button, the dinner notice strip, all headings and pencil-accent captions, focus rings, form error state. The darkest step is the fund's voice.

### Secondary
- **Bookcloth Slate** (g700): study-cloth leaves and the study facing page, the default pencil caption color on light leaves, dim supporting text (`--pencil-dim`).

### Neutral
- **Album Leaf** (g100): page ground, the Donorbox container, paper buttons, form fields, text on cloth.
- **Alternate Leaf** (g200): alternating leaves, empty-slot fill, paper-button hover.
- **Hairline** (g300): rules between rows, Donorbox container ring, photo placeholder fill, soft text on cloth.
- **Strong Rule** (g400): rule above a register, empty-slot inset ring, scrollbar thumb, emphasis inside cloth headings.
- **Underline Gray** (g500): resting link underlines and form-field strokes.
- **Large-Type Gray** (g600): emphasis phrases inside display and headline type, slot initials, current-page marker. Large text only.
- **Body Ink** (g800): running text, cloth hover state, selection background.

### Named Rules
**The Nine Grays Rule.** UI color comes only from the nine steps; translucency is allowed only as an alpha of g100 or g900 (glassine, cloth rules, shadows). Anything with a hue belongs to a photograph.

**The Large-Type Gray Rule.** g600 holds 3:1 on the leaf, not 4.5:1. It colors display and headline emphasis, 2rem+ initials, and decoration; never body copy, captions or controls.

**The Neutral Emphasis Rule.** Where a heading needs emphasis, the phrase steps down to g600 on light leaves and to g400 on cloth. Emphasis is a tonal step, never a hue.

## Typography

**Display Font:** Montserrat 700 (with Segoe UI, system-ui)
**Body Font:** Mukta 400/500/600 (with Segoe UI, system-ui)
**Hand Font:** Kalam 300 (with Segoe Print, Bradley Hand, cursive)

**Character:** A firm geometric sans sets every heading; a warm, wide-apertured text face carries reading; a light handwritten face writes the captions and margin notes as if in pencil beside the prints.

### Hierarchy
- **Display** (700, clamp 2.5 to 4.75rem, 1.08, -0.025em): one per page, the leaf's title; balanced wrapping.
- **Headline** (700, clamp 1.875 to 3.125rem, 1.08, -0.025em): leaf headings; the colophon signature and menu names use the same face at their own sizes.
- **Title** (700, clamp 1.25 to 1.75rem, 1.15, -0.015em): gathering entries, degree schools, board member names.
- **Lead** (400, clamp 1.1875 to 1.4375rem, 1.5): the line under a display title, capped at 40ch; also long-form reading bodies.
- **Body** (400, clamp 1.0625 to 1.1875rem, 1.62): running text, 62ch measure. Weight 600 for strong text and controls, 500 for links.
- **Label** (400, 0.9375rem): dates, detail lines, hints; tabular figures for dates and prices.
- **Pencil** (Kalam 300, clamp 1.0625 to 1.25rem, 1.3): print captions, margin notes, menu notes, the colophon line, entry states.

### Named Rules
**The Montserrat Bold Rule.** Every heading is Montserrat at weight 700 (client-pinned). The one exception is the site title, also client-pinned: "The Father C.O. Vargis / Scholarship Fund" in EB Garamond 400, uppercase, 26px, two lines, in the masthead, menu and colophon. It scales to clamp(14px, 3.9vw, 26px) only below 722px. Montserrat 600 is loaded only for the contact inbox addresses, which are links, not headings.

**The Pencil Rule.** Kalam is for writing about a thing (captions, notes, states), never for headings, controls or paragraphs.

## Layout

A centered wrap of `min(100% - 2 × gutter, --wrap-max)` (1280px) over a 12-column grid. Leaves stack vertically with `leaf-y` block padding; plain leaves are separated by a g300 hairline, alternate leaves switch to g200, cloth leaves to bookcloth. Compositions are asymmetric: text on 5 to 7 columns, prints on 3 to 6, with the gap column left empty; the facing-pages spread, 5/7 split and 4/7 dinner arrangement recur. Text measure is 62ch for prose and 40ch for leads.

Prints in groups are deliberately unaligned: the family register staggers every second, third and fourth print downward (0.75 to 3rem), pairs are unequal (5fr/4fr) and bottom-aligned.

**Home frontispiece.** At 900px and up the icon painting fills the right 64% of the hero, masked into the leaf at its left and bottom and running to the hero’s lower edge; nothing is mounted over it (the young Vargis portrait and its caption were removed by client decision, 2026-10-13). The copy takes the left six columns. Below 900px the painting becomes a full-width art band (62vw, max 460px) fading at its bottom, and the copy follows it with `clamp(1.5rem, 6vw, 2.25rem)` of top padding.

**Hero pill.** The two front actions sit in one inline pill under the frontispiece lead (margin-top `clamp(2rem, 4vw, 2.75rem)`), never wrapping; below 380px its halves tighten to 0.95rem inline padding.

**Breakpoints observed:** 380px (hero pill padding), 480px (masthead gap, board rows), 600px (menu label, album 2 columns, pairs), 700px (entries, rows), 800px (tiers, inboxes), 900px (main two-column collapse), 1000px (desktop nav, album 3 columns, donate split).

## Elevation & Depth

Depth is physical, not interface chrome. The leaf carries a fixed fibrous paper grain (5% multiply). Photographs sit flat on it with no resting shadow; while mounting they arrive lifted and the shadow dissolves as they land. Bookcloth gets depth from a woven SVG-noise texture plus a soft drop. Overlays are glassine: translucent g100 with a heavy blur, so the leaf beneath stays visible.

### Shadow Vocabulary
- **Rest** (`--rest`, per container): none on a photograph (`0 0 0 transparent`); an inset 1px g400 ring on an empty slot; a 1px g300 outer ring on the Donorbox container. Mounting composes over it and settles back to it.
- **Lifted** (`0 34px 46px -22px rgb(33 37 41 / 0.32), 0 8px 14px rgb(33 37 41 / 0.08)`): a photograph before it lands; the lightbox image.
- **Cloth drop** (`0 8px 18px -10px rgb(33 37 41 / 0.45)` on cloth buttons; `0 6px 14px -8px rgb(33 37 41 / 0.5)` on the pill's Donate half): bookcloth lying on the leaf.
- **Pill float** (`0 0 0 1px g300, 0 14px 30px -18px rgb(33 37 41 / 0.45)`): the hero pill's hairline ring and soft drop.

### Named Rules
**The Soft Paper Rule.** All shadows are blurred and negatively spread, cast by paper and cloth on paper. Nothing casts a hard offset block.

**The Glassine Rule.** Anything that covers the page (menu, sticky masthead, lightbox backdrop) is translucent and blurred, never an opaque panel.

## Shapes

Two radii and one exception. Cards and photo containers take one 16px radius (`--radius`, client-pinned 2026-10-06): every print frame and empty slot, the lightbox image and the Donorbox container; video is clipped to it by the print frame. Controls stay near-square at 3px: buttons, the film play button, form fields, menu buttons and the skip link. The single exception is the home hero pill, fully round at 999px (container, both halves and their focus outline; client decision, 2026-10-13); no other control takes it. Photographs are unframed: no border, mat, triangular tabs or rotation, and captions sit level beneath them. Rules are 1px hairlines; margin notes use a dashed g400 rule. Criteria lists are marked with a short 1px dash, not a bullet glyph.

## Components

### Buttons
Bookcloth and paper: tactile, quiet, never shouting.
- **Shape:** near-square (3px), 48px tall (44px compact in the masthead).
- **Cloth (primary):** g900 with the weave texture and g100 text, Mukta 600 1rem. Used for Donate and the main action of a leaf.
- **Study:** the same cloth in g700, for scholar-side actions.
- **Paper:** g100 with a g400 ring and soft drop, for secondary actions on cloth or leaf.
- **Hover / Focus:** cloth lifts one step (g800); paper goes to g200; the trailing arrow icon slides 3px. Press sinks 1px. Focus is the global 2px g900 outline at 3px offset, switched to g100 inside cloth and the notice strip so it never disappears on a dark ground.
- **Ink link:** underlined text link (g500 underline, 0.3em offset) with a trailing arrow, 44px tall; underline darkens to g900 on hover (on cloth: g100 text, half-opacity g100 underline that turns solid). `ink-link--button` gives a `<button>` the same look, for actions that must not compete with a page’s primary button (Copy address).

### Hero pill
The home page's two front actions in one pill (`nav.cta-pill`, "Start here"; client decision, 2026-10-13). The container is inline-flex with a 0.25rem gap and 0.375rem padding, fully round (999px), glassine g100 at 88% with a 10px blur, a 1px g300 ring and a soft 0 14px 30px -18px drop. Two 48px links inside, Mukta 600, no wrapping, padding 0.7rem 1.35rem 0.65rem, each 999px round with a trailing arrow:
- **Donate** (give half, to donate-now): g900 bookcloth with the weave, g100 text, an inset 8% g100 ring and a small cloth drop; hover lifts to g800.
- **I'm a student** (study half, to for-scholars): transparent on the pill, g900 text; hover g200.
- **Hover / Press / Focus:** the arrow slides 3px; press sinks 1px; the focus outline keeps the pill radius. Below 380px the halves tighten to 0.95rem inline padding.

### Spread (facing pages)
The home page’s two doors in full: two equal bookcloth pages (give g900, study g700) meeting at a spine, where the study page takes a 3.5rem g900 shade and the give page a 1px g100 edge at 7%. Outside edges align to the page wrap (`max(gutter, (100cqw - wrap-max) / 2)` via a container query unit); the inner gutter either side of the spine is `clamp(2rem, 4vw, 4.5rem)`; block padding `clamp(4rem, 2.5rem + 6vw, 7.5rem)`. Both pages share five subgrid rows (title, lead, note, actions, list) so headings bottom-align and notes, buttons and lists sit on common lines. Hierarchy per page: Montserrat h2, a 46ch lead, a Kalam note (“Give by card…” / “Applications are closed…”), exactly one paper button (Give online / Who qualifies) with at most an ink link beside it, then the quieter list (ways, or dash-marked criteria) under a g400 rule. Below 900px the pages stack and the rows flow in the same order.

### Prints and Slots
The signature component. A print is an unframed photograph: the image fills a frame clipped to the 16px radius (overflow hidden, isolated), with a g300 placeholder fill while it loads, no border, no resting shadow and no rotation, and a level pencil caption beneath. Aspect ratios: portrait 4:5, tall 3:4, landscape 4:3, wide 16:10, square. A video print sits inside the same rounded frame, shows a poster with a centered paper play button (48px, 3px) and swaps to native controls on click. On donate, the Donorbox form sits in a print frame filled g100 with a 1px g300 outer ring, 16px radius and no padding. In the gallery lightbox the image takes the same radius on a g300 fill with the lifted shadow.

A **slot** is an honest empty space for a photograph: a 4:5 g200 fill with an inset 1px g400 ring and the 16px radius, the person's initials in Kalam g600 at the centre, captioned like any other print. Use it wherever a photograph does not exist; never substitute a stock or generated image.

### Registers (ways, tiers, programme, entries, rows, degrees, inboxes)
Ruled lists in the album's ledger voice. A g400 rule above, g300 hairlines between, roughly 1 to 1.5rem block padding per row, label and value in a grid.
- **Ways** (ways to give): bold name, small detail line, an action at the right.
- **Tiers** (sponsorships): name, tabular price in g900 600, what it includes; three columns from 800px. Never priced cards.
- **Programme**: a definition list, 7rem dim label column beside the value.
- **Entries** (gatherings): date / Montserrat title with subline / pencil state, collapsing to one column below 700px.
- **Notes**: margin notes in pencil separated by a dashed rule.

### Inputs / Fields
- **Style:** g100 field, 1px g500 stroke, 3px corner, 50px minimum height; label above in Mukta 600 g900; hint in label size, g700.
- **Focus:** stroke disappears and the 2px g900 outline takes over at 1px offset.
- **Error:** stroke and a 1px inset ring in g900 plus a bold g900 message; the error is carried by weight and text, never by a hue.

### Navigation
- **Masthead:** sticky; transparent at the top, then glassine (g100 at 86%, 14px blur) with a hairline once the page moves. Site title in EB Garamond (see the Montserrat Bold Rule). Desktop links from 1140px up, so they never crowd the two-line title; in Mukta 500 g800, current page underlined 2px in g600. Compact cloth Donate and a two-line menu button, with Donate yielding to the menu below 360px.
- **Menu:** a full-screen glassine interleaf dialog. Large Montserrat names with a pencil note beside each, staggered settle-in (40ms steps). Everything outside it is made inert while open; Escape closes and focus returns to the trigger.
- **Notice strip:** a cloth band above the masthead for the next gathering, 44px tall, retiring itself after the date.

### Colophon
The footer is a signed page: the Last Supper art band masked into the leaf top and bottom, a Montserrat signature line overlapping it with a pencil line beneath, then a ruled four-column grid of links (44px targets) and a base line. Every page except Events, Sips for Scholarship and 404 (client decisions, 2026-10-12/13) sets `"frieze": false` in its page header: the build drops the blocks marked `<!-- frieze -->` in the footer partial (art band, signature, art credit) and adds `colophon--plain`, so the footer opens directly on the link grid below a full-width 1px rule.

### Motion: Mounting
The one authored moment. As a print enters the viewport (IntersectionObserver, 8% bottom margin), a photograph starts raised (translateY(-12px), 1.025 scale, the lifted shadow over its rest shadow) and settles flat (no transform, rest shadow only) over 1.1s on `cubic-bezier(0.19, 1, 0.22, 1)`, staggered 110ms per index; its caption then writes on left to right by clip-path over 1.2s. Prints are always visible; if script fails the hook is dropped after 2.5s. Under reduced motion every photograph is placed flat at rest and all transitions collapse. Smooth scrolling is Lenis (pinned 1.3.26, loaded with SRI), skipped under reduced motion.

## Do's and Don'ts

### Do:
- **Do** take every UI color from g100 to g900; translucency only as alphas of g100 or g900.
- **Do** set every heading in Montserrat 700.
- **Do** keep g600 to large type and decoration; use g700 or darker for anything at body size.
- **Do** mount photographs unframed, level, with the 16px radius and a pencil caption.
- **Do** keep 16px for cards and photo containers and 3px for controls; the 999px hero pill is the only fully round shape.
- **Do** use an empty slot with initials where a person has no photograph.
- **Do** write lists of facts, prices and dates as ruled register rows.
- **Do** keep every interactive target at least 44px tall and show the 2px g900 focus outline.
- **Do** make overlays glassine and make the page behind them inert.
- **Do** keep mounting as the only orchestrated motion and make it static under reduced motion.

### Don't:
- **Don't** introduce a hue for accents, states or emphasis; emphasis is a tonal step.
- **Don't** use cards, stat tiles, impact counters or priced boxes; write the facts into the register.
- **Don't** put a small tracked label above a heading.
- **Don't** fill a missing photograph with stock, generated or placeholder imagery.
- **Don't** set body copy, captions or controls in g600.
- **Don't** use Kalam for headings, buttons or paragraphs.
- **Don't** use hard offset shadows or opaque overlay panels.
- **Don't** frame photographs: no border, mat, triangular tabs, resting shadow or rotation.
