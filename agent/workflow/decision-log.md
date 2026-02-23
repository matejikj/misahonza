# Decision Log

Zapisuj pouze rozhodnutí, která mění scope, UX tok, technický přístup nebo prioritizaci.

## 2026-02-23

- Vytvořena základní agentní struktura (`project-context`, `tasks`, `workflow`) nad referenčními drafty v `agent/project-draft/`.
- Implementace rozdělena do 5 tasků podle logiky: foundation -> první polovina homepage -> wow motion -> důvěra/konverze -> QA/polish.
- `Task 01` implementován jako nový Astro + Tailwind static-first scaffold se všemi homepage sekcemi ve fallback/stationary variantě; motion logika zůstává plánovaná pro `task-02` a `task-03`.
