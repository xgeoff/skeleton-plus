
# skeleton-plus.css

**Skeleton-plus.css** is a tiny, opt-in enhancement layer for
[Skeleton CSS](http://getskeleton.com/).

It adds subtle polish, motion, and a small set of HTML-first UI primitives
— without introducing a framework, build step, or JavaScript dependency.

> Skeleton gives you structure.  
> Skeleton-plus gives it finish.

---

## Goals

Skeleton-plus.css is intentionally small and boring (in a good way).

It exists to:

- Add visual polish to Skeleton’s defaults
- Provide gentle micro-interactions
- Offer a few common UI primitives (cards, badges, alerts)
- Stay readable, hackable, and removable
- Work in static HTML with zero tooling

If removing `skeleton-plus.css` makes a page *less polished* but not *broken*,
then it’s doing its job.

---

## Non-Goals

Skeleton-plus.css does **not**:

- Replace Skeleton
- Define layouts or grids
- Introduce a component system
- Require JavaScript
- Assume SPAs, JSX, or build tools
- Enforce design tokens or theming systems

---

## Installation

Load Skeleton first, then Skeleton-plus.

```html
<link rel="stylesheet" href="skeleton.css">
<link rel="stylesheet" href="skeleton-plus.css">
````

No JavaScript required.

---

## Design Principles

1. **HTML-first**
   Uses semantic HTML elements. Classes decorate behavior and appearance.

2. **Opt-in**
   No global overrides. No surprise styling.

3. **Tiny**
   Target size: ≤ 10 KB uncompressed.

4. **Composable**
   Classes stack cleanly. No magic selectors.

5. **Accessible by default**
   Visible focus states. Respects `prefers-reduced-motion`.

---

## Naming Conventions

* Base classes use simple nouns: `.btn`, `.card`, `.alert`
* Variants use `--`: `.btn--primary`
* State classes use `.is-*`: `.is-loading`, `.is-open`
* No JavaScript hooks or data attributes required

---

## Features

### Buttons

Enhances Skeleton buttons with subtle depth and interaction.

```html
<button class="btn">Default</button>
<button class="btn btn--primary">Primary</button>
<button class="btn btn--secondary">Secondary</button>
<button class="btn btn--danger">Danger</button>
<button class="btn btn--ghost">Ghost</button>
```

**Behavior**

* Soft elevation at rest
* Slight lift on hover
* Pressed active state
* Clear keyboard focus ring

**States**

```html
<button class="btn is-disabled" disabled>Disabled</button>
<button class="btn is-loading">Loading</button>
```

---

### Forms

Light polish for Skeleton inputs.

```html
<input type="text" class="input">
<textarea class="input"></textarea>
```

**Validation states**

```html
<input class="input is-error">
<input class="input is-success">
```

* Soft focus glow
* Clear success/error indication
* No validation logic included

---

### Cards

Simple content containers.

```html
<div class="card">
  <h5>Title</h5>
  <p>Body content</p>
</div>
```

**Variants**

```html
<div class="card card--flat"></div>
<div class="card card--raised"></div>
<div class="card card--interactive"></div>
```

* `card--interactive` responds to hover
* Padding remains Skeleton-compatible

---

### Badges

Inline, unobtrusive labels.

```html
<span class="badge">Default</span>
<span class="badge badge--info">Info</span>
<span class="badge badge--success">Success</span>
<span class="badge badge--warning">Warning</span>
```

---

### Alerts

Non-dismissable message blocks.

```html
<div class="alert">Neutral alert</div>
<div class="alert alert--info">Info</div>
<div class="alert alert--success">Success</div>
<div class="alert alert--error">Error</div>
```

No JavaScript included.

---

## Motion & Interaction

* Transition duration: **120–180ms**
* Easing: `ease-out`
* Limited to:

    * `transform`
    * `box-shadow`
    * `opacity`

### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
  }
}
```

---

## Optional Widgets (CSS-First)

### Disclosure

```html
<details class="disclosure">
  <summary>More</summary>
  <p>Hidden content</p>
</details>
```

Uses native `<details>` behavior. No JS required.

---

### Modal (Progressive Enhancement)

```html
<div class="modal is-open">
  <div class="modal__content">
    ...
  </div>
</div>
```

* Hidden by default
* `.is-open` controls visibility
* JavaScript optional and external

---

## Theming

Skeleton-plus ships a default “Slate” palette and example overrides (`data-theme="midnight"`, `data-theme="forest"`) in `skeleton-plus.css`. The catalog fixture toggles themes by setting `data-theme` on `<html>` via a tiny helper, so every component updates automatically because they read from shared CSS variables.

**Add your own theme**

1. Define overrides for your variant:

```css
[data-theme="sunrise"] {
  --sp-bg: #fff7ed;
  --sp-text: #4a2511;
  --sp-text-muted: #7c3b1c;
  --sp-border: #fed7aa;
  --sp-accent: #f97316;
  --sp-accent-hover: #ea580c;
  --sp-shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.12);
  --sp-shadow-md: 0 6px 12px -2px rgb(0 0 0 / 0.18);
}
```

2. Toggle it (pattern used in `tests/fixtures/catalog.html`):

```js
document.documentElement.setAttribute('data-theme', 'sunrise');
```

All components will adopt the new palette; no component markup changes are required.

---

## Browser Support

* Modern evergreen browsers
* No IE support
* Graceful degradation acceptable

---

## Versioning

* Semantic Versioning
* No breaking changes before `1.0`
* Deprecated classes remain for one minor version

---

## Philosophy

Skeleton-plus.css is not a framework.

It is a **finishing layer** — a small amount of care applied at the end.

If you find yourself wanting:

* state management
* complex components
* design systems
* JavaScript APIs

You probably want something else.


## License

MIT

## Testing

Playwright exercises every widget documented above using `tests/fixtures/index.html` (which loads `tests/vendor/skeleton.css` before `skeleton-plus.css` so the fixtures mirror a real page). Run the suite with `npm run test:playwright` (or add `--headed` for manual inspection). The tests verify button states, form focus/error/success styles, cards, badges, alerts, disclosure behavior, modal shell visibility, and the reduced-motion guard.
