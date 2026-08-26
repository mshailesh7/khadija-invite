# Khadija Wadgama — Digital Invitation

An interactive, mobile-first digital invitation welcoming **Khadija Wadgama** —
Monday, 24 August 2026 · Hotel Mina International.

The layout, type scale, colour palette, section order and animation behaviour are
modelled on the [Blossom & Oud](https://webgencyinvitations.com/blossomoud)
template by [Webgency Invitations](https://webgencyinvitations.com).

## What was matched

| Aspect | Value taken from the reference |
| --- | --- |
| Background | `#f9e6d4` warm cream |
| Accent | `#866739` gold (`#876836`, `#ac9778` for secondary) |
| Body text | `#2a2a2a` / `#454545` |
| Script face | Imperial Script (the reference's script weight) |
| Numerals & dates | Ovo |
| Body copy | Cormorant Garamond Light (stands in for GT Super Display Light, which is commercial) |
| Section headings | 41px script in gold, above a line divider |
| Content column | 440px, centred |
| Reveals | `fadeinup` (20/40/50px), `zoomin` (0.15), `fadein`, ~2s |
| Cover | Panels released in four directions on tap |
| Timeline | Medallion travels the rail and rotates with scroll |
| Loops | Breathing scale on ornaments, pendulum swing on the closing motif |

Decorative art (seal, medallion, dividers, sprigs, arch) is drawn as original
inline SVG rather than copying the reference's image assets, so nothing here is
licensed from a third party.

## Sections

Cover → Hero → Invitation card → Countdown → Order of the day → Where →
Dress code → RSVP → Closing

## Customising

All copy lives in `src/data/invitation.ts` — name, parents, date, countdown
target, timeline, venue link, palette swatches and RSVP options.

Colours and fonts are defined in `tailwind.config.js` and `src/index.css`.

## Running

```bash
npm install
npm run dev
```

Then open the printed local URL. `npm run build` produces a static bundle in
`dist/` that can be hosted anywhere.

## Notes

- The RSVP form is UI-only; wire `Rsvp` in `src/components/Sections.tsx` to a
  backend, Google Form or Formspree endpoint to collect responses.
- Ambient sound is synthesised in the browser (`src/lib/useMusicBox.ts`), so no
  audio file ships with the project. It starts only after the guest taps to open,
  which keeps browser autoplay policies happy.
