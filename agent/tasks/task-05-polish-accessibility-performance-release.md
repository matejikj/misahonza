# Task 05: Polish, responsive fallbacky, a11y, SEO, performance

## Cíl

Dotáhnout homepage do produkčně použitelného stavu: výkon, přístupnost, responzivní detaily, SEO metadata a finální vizuální polish.

## Scope

- Responsive QA všech sekcí (desktop/tablet/mobile)
- Reduced-motion QA a fallbacky všech motion sekcí
- Performance audit a optimalizace
  - image loading / `sizes`
  - omezení JS a lazy islands
  - kontrola těžkých animací
- SEO a obsahové minimum
  - title/meta/OG
  - správná heading hierarchie
  - textový obsah v DOM
- A11y QA
  - keyboard navigace
  - focus states
  - kontrast
  - hit areas
- Vizuální polish
  - spacing, alignment, shadow consistency, caption system, hover states

## Výstupy

- Stabilní homepage připravená pro klientské review
- Seznam známých kompromisů / TODO (pokud nějaké zůstanou)
- Aktualizovaný `current-status.md` + `decision-log.md`

## Acceptance Criteria

- Stránka je použitelná a čitelná při:
  - vypnutém JS
  - reduced motion
  - mobile viewportech
- Nejsou zjevné layout breaky u pinned/fallback sekcí
- SEO/a11y minimum je splněno
- Výkon odpovídá static-first přístupu Astro (bez zbytečných globálních skriptů)

## Závislosti

- `task-01` až `task-04` dokončeny

