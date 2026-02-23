# Agent Development Playbook

## Cíl

Zajistit, aby každý další agent měl rychlý a kompletní nástup do projektu bez ztráty kontextu.

## Start každého pracovního běhu

1. Přečti `agent/project-context/00-start-here.md`
2. Přečti `agent/workflow/current-status.md`
3. Otevři aktivní task v `agent/tasks/`
4. Zkontroluj `agent/workflow/decision-log.md` (nové změny scope/architektury)

## Během práce

- Drž se scope aktivního tasku; nerozšiřuj svévolně scope
- Pokud musíš změnit řešení (UX/tech), zapiš decision log
- Preferuj progresivní enhancement (obsah nejdřív, motion potom)
- U motion sekcí vždy udrž fallback variantu

## Po dokončení tasku / části tasku

- Aktualizuj `agent/workflow/current-status.md`
  - co je hotovo
  - co zbývá
  - blokery / rizika
  - další doporučený krok
- Pokud padlo důležité rozhodnutí, přidej záznam do `agent/workflow/decision-log.md`

## Kdy založit nový task

- Jen pokud se scope projektu rozšíří nad rámec 5 hlavních tasků
- Nový task musí mít jasný cíl, scope, AC a závislosti

