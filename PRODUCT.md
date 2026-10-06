# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, served equally (confirmed): the site needs two clear front doors from the first screen.

- **Supporters.** The Houston parish community around St. Stephen's and the wider Malankara Orthodox
  community, alumni, families and sponsors. Jobs: give (card, Venmo, Zelle), buy tickets for or sponsor
  the annual Sips for Scholarship dinner, learn who Fr. C.O. Vargis is, meet the board, get in touch.
- **Scholars and their families.** First-generation college students in India (initial focus Kerala)
  whose families live below the poverty line, seeking funding for a professional degree. Jobs: understand
  who qualifies and what the scholarship covers, see whether applications are open, ask the scholarship team.

## Product Purpose

The Father C.O. Vargis Scholarship Fund funds full-ride professional degrees (focus on STEM) for
under-privileged, first-generation students in India, and is building a lasting, self-sustaining fund so
that support can continue in perpetuity. Success: more scholars funded, gifts and dinner tickets for
supporters, and qualified applications when the window is open.

## Positioning

A living legacy, family-run (confirmed). A small fund run by the people Fr. C.O. Vargis raised (his
godsons, his niece, parishioners who grew up in his care), carrying a living priest's conviction that one
education can lift an entire family out of poverty. Personal, not institutional.

## Operating Context

- The annual Sips for Scholarship dinner is the main fundraising ritual. 10th Anniversary Dinner: Friday,
  November 6, 2026, doors 6:30 pm, Hotel ZaZa Houston (Museum District, Grapevine Ballroom, 5701 Main St),
  $275 per guest; Scholar Sponsor $4,000 and Host a Table $2,400 (tables of eight). Tickets via Stripe.
- Casino Night ("High Rollers for Higher Education"), May 8, 2026, The Motorclub, Houston: past event.
- Giving: Donorbox campaign `end-generational-poverty` (preferred), Venmo @FrCOVargisFund,
  Zelle finance@frcovargisfund.org. Registered 501(c)(3).
- Applications open in windows; currently closed. Contact: scholarship@frcovargisfund.org.
- Contacts: president@ (general, volunteering), scholarship@ (scholarships, sponsorship),
  finance@ (gifts, Zelle). Mailing address 13133 Old Richmond Rd., Houston, TX 77099. Facebook page.

## Capabilities and Constraints

- Static site: `src/pages` + `src/partials`, dependency-free Node build (`build.mjs`) to `dist/`.
- Deployed on Vercel from GitHub `AIArtist47/frcovargisfund`; a push to `main` deploys production.
- Page file names must stay (they match the old Weebly site): index, about-father-vargis, for-scholars,
  events, sips-for-scholarship, casino-night, board-of-directors, gallery, donate-now, contact;
  event-gallery redirects to events.html#recap.
- Media is hot-linked from the Weebly host; the footer art comes from Unsplash.
- No backend: the contact form composes an email in the visitor's mail app.
- Dinner promotions expire automatically after November 6, 2026.
- Lenis smooth scrolling must remain (confirmed).

## Brand Commitments

- Name: The Father C.O. Vargis Scholarship Fund (short: Fr. C.O. Vargis Scholarship Fund).
  Fr. Vargis is affectionately "Vargis Achen".
- Binding assets (confirmed): the hero icon painting of Christ blessing the children (original site
  banner), the Last Supper footer art, all existing photography and video, all page URLs and content.
- Voice: warm and plain; reverent without preaching; specific facts over slogans.
- Palette (pinned by the client, 2026-10-06): the nine-step neutral gray scale #F8F9FA, #E9ECEF, #DEE2E6,
  #CED4DA, #ADB5BD, #6C757D, #495057, #343A40, #212529, and no other colors (photographs keep their own).
- Header typeface (pinned by the client, 2026-10-06): Montserrat Bold for all headings.
- Site title (pinned by the client, 2026-10-06): "THE FATHER C.O. VARGIS SCHOLARSHIP FUND" in EB Garamond,
  regular weight, uppercase, 26px (scaled down only where a phone header cannot fit it).
- Photographs and cards (pinned by the client, 2026-10-06): photographs unframed (no photo corners, borders
  or tilt) and a 16px corner radius on every card and photo container.

## Evidence on Hand

- Facts: more than 20 students sent to university; ten years of the dinner; Fr. Vargis earned seven
  degrees, the last a doctorate at 65; scholars' degrees include nursing, pharmacy and computer engineering;
  50+ years a priest, 20+ years vicar of St. Stephen's, founding vicar of Houston's first Orthodox parish.
- Content: Fr. Vargis biography and degree list; eight board bios; three recorded interviews with
  Fr. Vargis; 2025 dinner recap video; ten gallery photographs; event details; giving channels.
- Absent, never to be fabricated: scholar testimonials, scholar names or photos, financial reports or
  amounts raised, an EIN, a phone number, headshots for Dr. Toby Thomas and Thomas Daniel, video captions.

## Product Principles

1. Two front doors: supporters and scholars each find their path from the first screen.
2. Personal over institutional: real people, real names and real photographs are the proof.
3. Truth only: no invented numbers, quotes, testimonials or claims.
4. Giving is effortless: Donate is reachable everywhere and every channel is spelled out.
5. Time-aware: the next gathering surfaces itself, then retires itself.

## Accessibility & Inclusion

WCAG 2.2 AA with 44px minimum targets and full reduced-motion support (standard set in
`ACCESSIBILITY-AUDIT.md`). Inferred, not confirmed: many supporters are older parishioners, and many
scholar families browse on phones in India, so readable type and light pages matter.
