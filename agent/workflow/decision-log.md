# Decision Log

Zapisuj pouze rozhodnutí, která mění scope, UX tok, technický přístup nebo prioritizaci.

## 2026-02-23

- Vytvořena základní agentní struktura (`project-context`, `tasks`, `workflow`) nad referenčními drafty v `agent/project-draft/`.
- Implementace rozdělena do 5 tasků podle logiky: foundation -> první polovina homepage -> wow motion -> důvěra/konverze -> QA/polish.
- `Task 01` implementován jako nový Astro + Tailwind static-first scaffold se všemi homepage sekcemi ve fallback/stationary variantě; motion logika zůstává plánovaná pro `task-02` a `task-03`.
- `Task 02` implementován bez GSAP: sticky header scroll state, interaktivní desktop materials stack preview (pre-motion) a přístupné use-case tabs přes inline JS. GSAP scroll-driven motion zůstává v `Task 03`.
- `Task 03` implementován s `GSAP + ScrollTrigger` lazy-loaded přes izolované motion moduly (`src/scripts/motion/*`). Místo framework islands je použité `IntersectionObserver` + dynamic import (ekvivalent `client:visible` pro vanilla Astro sekce).
- `Task 04` dokončen jako conversion layer druhé poloviny homepage: process sticky+active step (desktop) s mobile accordion fallbackem, trust CTA panel, founders humanized framing, FAQ + Care Guide a finální CTA orientované na „první krok“.
- `Task 05` dokončen: přidáno SEO minimum (canonical + OG/Twitter + robots), a11y minimum (skip link, mobile nav, touch target sizing), reduced-motion globální fallback a performance omezení zbytečného JS na mobile (materials desktop-only init).
