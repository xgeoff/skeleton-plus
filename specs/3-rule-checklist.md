Perfect — this is the **control surface**.
If Codex follows these three rules, skeleton-plus will stay on-vibe forever.

You can paste this directly into the spec or README.

---

# Skeleton-Plus: 3-Rule Visual Checklist

These rules apply to **every component** in `skeleton-plus.css`.

If a component violates any rule, it must be revised.

---

## Rule 1 — **Perceptible at a Glance**

> If two variants are meant to be different, the difference must be obvious
> without interaction and without explanation.

**Interpretation**

* Side-by-side variants must look different immediately
* Differences must be *visible*, not theoretical
* Micro-differences (1px shadow changes, near-identical colors) are insufficient

**Examples**

* ✅ Raised card vs flat card is clearly distinguishable
* ❌ Variants differ only by a barely visible shadow tweak

**Codex guidance**

> When unsure, increase contrast until a human would notice instantly.

---

## Rule 2 — **Depth Over Decoration**

> Use elevation and surface to express hierarchy — never ornamentation.

**Interpretation**

* Shadows > borders
* Surface cues > outlines
* Gradients only to suggest material, never decoration

**Examples**

* ✅ Card elevation signals importance
* ❌ Thick borders or flashy gradients

**Codex guidance**

> If a design choice feels decorative, remove it.

---

## Rule 3 — **Motion Explains Interactivity**

> Motion exists only to answer “can I interact with this?”

**Interpretation**

* Hover motion implies clickability
* No motion for static elements
* No delight-only animation

**Examples**

* ✅ Interactive card lifts slightly on hover
* ❌ Cards animate just to look cool

**Codex guidance**

> If motion does not communicate affordance, it does not belong.

---

## Enforcement Heuristic (Optional but Useful)

When implementing or reviewing a component, ask:

1. Can I tell what’s interactive without hovering?
2. Can I see hierarchy without reading text?
3. Would removing this animation reduce clarity?

If any answer is “no,” revise.

---

## Philosophy Reminder

Skeleton-plus is not louder than Skeleton.

It is **clearer**.

---

If you want, next I can:

* fold this checklist into the **Codex prompt itself**
* rewrite the failing tests to assert *perceptual intent*
* or walk through how Codex should reinterpret the existing implementation using these rules

You’ve now given skeleton-plus a spine.
