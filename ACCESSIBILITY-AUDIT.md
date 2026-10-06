# Inclusive interaction audit

Scope: all 10 pages of the redesign, tested on the local build at 1024px, 375px and 320px,
light and dark mode. Method: real keyboard Tab/Escape presses, scripted target measurement on
every interactive element, form and dialog behaviour checks, and a code review of motion handling.

## 1. Summary

**Rating: strong (AA-ready for interaction), with one content blocker.**

- No keyboard traps, every focus stop shows a 2px ring (6.3:1 on the canvas, 7.4:1 on the night band).
- No horizontal scrolling at 320px on any page (WCAG 1.4.10 reflow).
- All interactive targets are at least 44 x 44px after fixes (inline links in body copy are exempt).
- All motion is opt-in via `prefers-reduced-motion: no-preference`.
- **Blocker (content, not code):** the four videos have no captions or transcripts (WCAG 1.2.2).

## 2. Input method matrix

| Task | Keyboard | Mouse | Touch | Voice / switch |
|---|---|---|---|---|
| Navigate (header, menu, footer) | Yes, skip link first, menu traps focus, Esc closes, focus returns | Yes | Yes, 44px | Yes, all controls have visible names |
| Donate (card, Venmo, Zelle copy) | Yes | Yes | Yes | Yes, "Copy address" is announced as copied |
| Buy dinner tickets / sponsor | Yes | Yes | Yes | Yes |
| Play a video | Yes, focus moves to the player | Yes | Yes | Yes, each Play button has a unique name |
| Browse the gallery | Yes, arrow keys, Esc, buttons | Yes, click backdrop to close | Yes, buttons (no swipe needed) | Yes, "Next photograph" / "Previous photograph" |
| Read board bios | Yes, native disclosure | Yes | Yes | Yes |
| Contact form | Yes, errors focus the first invalid field | Yes | Yes | Yes, labels visible, autocomplete set |

## 3. Issue list

| # | Severity | Input / users | Issue | Status |
|---|---|---|---|---|
| 1 | Critical (content) | Deaf and hard-of-hearing users | Videos have no captions or transcripts | **Open.** Needs WebVTT caption files from the Fund |
| 2 | Minor | Touch, motor | Wordmarks 32px tall, island wordmark 26px, footer links 36px, contact emails 41px | Fixed, all now at least 44px |
| 3 | Minor | Touch | Footer "Zelle" link 32px wide | Fixed, relabelled "Give by Zelle" |
| 4 | Minor | Voice control | Three video buttons all named "Play" | Fixed, names now include the question |
| 5 | Minor | VoiceOver / Safari | Styled lists (`list-style: none`) lose list semantics | Fixed, `role="list"` added |
| 6 | Minor | Print | Content not yet scrolled into view printed blank | Fixed, print stylesheet forces it visible |
| 7 | Minor | Screen readers | Lightbox image had an empty `src` | Fixed, image created on open |
| 8 | Info | Everyone | Donation form is a third-party Donorbox iframe | Titled iframe plus a direct "Give on Donorbox" fallback link |

## 4. Already in place (verified)

- Skip link, landmarks, one `h1` per page, logical heading order.
- Menu: `role="dialog"`, `aria-modal`, `aria-expanded` on both triggers, background `inert`, Esc to close, focus restored.
- Floating nav is `inert` while hidden, so it never appears in the tab order off-screen.
- `scroll-padding-top` keeps focused elements clear of the floating nav (WCAG 2.4.11).
- Form: visible labels, specific error text tied with `aria-describedby`, `aria-invalid`, `role="status"` result message.
- Copy button: visible "Copied" state plus a polite live-region announcement.
- Status is never color-only: tags carry text ("Upcoming", "Past", "Applications closed"); the current page is marked by underline or italic plus `aria-current`.
- Motion: reveals, card drift, menu stagger and smooth scroll are all disabled under reduced motion; the drift is scroll-linked CSS (no scroll listeners) and capped at 70px.
- Videos never autoplay; playback is always user-initiated.

## 5. Prioritised fixes remaining

1. **Captions for the four videos** (unblocks deaf and hard-of-hearing visitors, and anyone watching muted). Add `<track kind="captions">` files; `main.js` creates the `<video>` element, so it is a small change once the `.vtt` files exist.
2. Replace the two missing board headshots and the 204px photo of Jessy Kuruvilla (quality, not access).
