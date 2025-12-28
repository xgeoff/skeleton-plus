Perfect choice. Cards + buttons are the **visual language setters**.
If these feel right, everything else will fall into place.

Below is a **Codex-ready replacement spec** for **buttons and cards only**.
This is written explicitly to fix the two problems you observed:

* *“They’re technically different but visually identical”*
* *“This adds almost no attractiveness”*

You can hand this to Codex verbatim.

---

# skeleton-plus.css

## Revised Spec — Buttons & Cards (v0.2 Draft)

> This spec **replaces** the Buttons and Cards sections from v0.1.
> All other components remain unchanged.

---

## Visual Intent (Read This First)

Skeleton-plus is allowed to be **visibly opinionated** in small ways.

For buttons and cards, this means:

* Clear depth hierarchy
* Perceptible contrast between variants
* Soft, tactile surfaces
* Modern, calm aesthetic (not flat, not loud)

If two variants are difficult to distinguish when viewed side-by-side,
the implementation is **incorrect**, even if the CSS differs.

---

## Global Primitives (Required)

### Depth Scale

Implement a shared depth vocabulary:

```css
:root {
  --sp-radius: 6px;

  --sp-shadow-1: 0 1px 2px rgba(0,0,0,0.08);
  --sp-shadow-2: 0 4px 8px rgba(0,0,0,0.12);
  --sp-shadow-3: 0 10px 20px rgba(0,0,0,0.16);
}
```

All button and card elevation **must** use this scale.

---

## Buttons

### Base Button (`.btn`)

Skeleton buttons should feel:

* solid
* touchable
* slightly elevated

#### Required styling

* Border radius: `--sp-radius`
* Default elevation: `--sp-shadow-1`
* Background: subtle vertical gradient (very low contrast)
* Transition:

    * `transform`
    * `box-shadow`
    * `background-color`

#### Interaction behavior

* `:hover`

    * Elevation → `--sp-shadow-2`
    * `transform: translateY(-1px)`
* `:active`

    * Elevation → `--sp-shadow-1`
    * `transform: translateY(0)`
* `:focus-visible`

    * Clearly visible focus ring (not color-only)

The button must look **clearly interactive** even without hover.

---

### Button Variants

Variants must be **immediately distinguishable** by color and surface.

#### `.btn--primary`

* Uses `--sp-accent`
* Darker gradient than base
* White or near-white text

#### `.btn--secondary`

* Neutral gray surface
* Visible border
* No gradient or very subtle one

#### `.btn--danger`

* Uses `--sp-danger`
* Slightly stronger shadow than base to convey risk

#### `.btn--ghost`

* Transparent background
* No shadow at rest
* Shadow appears on hover only

> Variants must not differ solely by border color.

---

### Button States

#### Disabled (`.is-disabled`, `[disabled]`)

* Flat (no shadow)
* Reduced opacity
* Cursor: `not-allowed`
* No hover or active effects

#### Loading (`.is-loading`)

* Slight opacity reduction
* Cursor: `progress`
* No spinner or pseudo-elements

---

## Cards

Cards establish **spatial hierarchy** and should feel like
“surfaces placed on a page.”

### Base Card (`.card`)

#### Required styling

* Background: solid (white or near-white)
* Border radius: `--sp-radius`
* Elevation: `--sp-shadow-1`
* Subtle border (very low contrast)

The base card should already feel elevated relative to the page.

---

### Card Variants

Variants must be **visually obvious at a glance**.

#### `.card--flat`

* No shadow
* Border remains
* Clearly flatter than base card

#### `.card--raised`

* Elevation: `--sp-shadow-2`
* No transform
* Clearly deeper than base card

#### `.card--interactive`

* Elevation at rest: `--sp-shadow-1`
* On hover:

    * Elevation → `--sp-shadow-3`
    * `transform: translateY(-2px)`
* Cursor: `pointer`

Hovering an interactive card must feel **noticeably different**
from hovering a non-interactive card.

---

### Visual Acceptance Criteria (Critical)

When rendered together:

```html
<div class="card card--flat"></div>
<div class="card"></div>
<div class="card card--raised"></div>
<div class="card card--interactive"></div>
```

A human reviewer must be able to:

* identify which card is which **without labels**
* perceive a clear depth progression from flat → interactive

If not, increase contrast until this is true.

---

## Constraints (Reaffirmed)

* No layout rules (no widths, grids, or positioning)
* No JavaScript
* No CSS animations (transitions only)
* No design token expansion beyond what’s defined here
* Must remain consistent with Skeleton typography and spacing

---

## Codex Implementation Notes

* Prefer fewer rules with stronger effect over many subtle ones
* Avoid micro-differences (e.g., 1px vs 2px shadows)
* Readability and perceptibility matter more than restraint here
* This is the *visual identity* of skeleton-plus

---

## Definition of Done

* Buttons feel clickable even at rest
* Card variants are clearly distinguishable
* Visual changes are obvious but calm
* Removing `skeleton-plus.css` noticeably reduces polish

---

If you want, next I can:

* sit in Codex’s chair and **predict exactly how it will implement this**
* help you tune the shadow values for light/dark backgrounds
* or extend this same “visual delta” thinking to alerts and badges

This was the right move.
