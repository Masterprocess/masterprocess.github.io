---
title: "Design-System Charter"
date: "2024-06-01"
---

# Zoe Rackley Personal Design-System Charter (v1)

> **Purpose**  
> A single source of truth that every later design or engineering decision references.

---

## 0 · Discovery & Scope

| Category               | Decisions & Rationale                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Open Items                                                                                        |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **Initial scope**      | _Surfaces_: Portfolio (home, about, featured work) and Blog (MDX posts & tag pages).<br>_Audience_: recruiters, peers, friends, tech-curious visitors.<br>_Ownership_: solo-maintained (Zoe); collaborators possible later.                                                                                                                                                                                                                                                                                                                        | —                                                                                                 |
| **Future scope**       | Interactive AI/Data demos (client-side; long-lived public APIs).<br>Spin-off microsites leveraging same design system.                                                                                                                                                                                                                                                                                                                                                                                                                             | Identify “first demo” concept so primitives anticipate it.                                        |
| **Success criteria**   | 1. **Functional** – portfolio + blog shipped.<br>2. **Maintainable** – zero-config GitHub Pages deploy; automated dependency updates; tokens drive all theming.<br>3. **Accessible** – WCAG 2.2 AA baseline; full keyboard support; `prefers-reduced-motion` handled.<br>4. **Visually impressive** – Dracula-inspired dark mode + modern-poster layout; deliberate geometry; performant complex animations (≤ 80 ms main-thread).<br>5. **Playground-ready** – flexible enough for ADHD-fuelled experiments.<br>_De-prioritised_: aggressive SEO. | • Choose two objective health checks (e.g., Lighthouse ≥ 90 “Accessibility”, JS bundle < 300 kB). |
| **Guiding principles** | • _Form follows function, then delights._<br>• Geometric clarity over ornament.<br>• Dark-mode first (Dracula palette), light optional.<br>• Animation aids comprehension or delight—never slows UX.                                                                                                                                                                                                                                                                                                                                               | Draft one-pager elaborating these principles (Layer 1).                                           |
| **Workflow**           | Git flow: `main` (live) ← `design-system/*` feature branches.<br>PR checklist: token diff, a11y scan, optional Percy screenshot diff.<br>Roles: Designer / Dev / PM / QA = Zoe.                                                                                                                                                                                                                                                                                                                                                                    | Decide if Storybook deploys per-PR or only on release tags.                                       |

---

## Immediate Next Steps

1. **Commit this charter** to the repo at `docs/charter.md`.
2. Draft the _Guiding Principles & Ethos_ one-pager (Layer 1).
3. Define & automate the two “health-check” metrics noted above.

---
