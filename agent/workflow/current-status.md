# Current Status (živý stav projektu)

## Stav projektu

- Fáze: `Task 01 completed (foundation)`
- Aktivní task: `Žádný (připraveno na Task 02)`
- Poslední update: `2026-02-23`

## Hotovo

- Vytvořen agentní kontext a backlog 5 tasků v `agent/`
- Implementován nový Astro + Tailwind scaffold
- Vytvořena statická homepage kostra se sekcemi 0-10 (header, hero, materiály, use cases, light sweep fallback, realizace fallback, proces, trust, společníci, FAQ, finální CTA, footer)
- Zavedena centrální data vrstva `src/data/homepage.ts` a základní design tokeny v `src/styles/global.css`

## Další doporučený krok

- Pokračovat `agent/tasks/task-02-hero-materials-usecases.md`

## Blokery / otevřené otázky

- Doplnit reálná jména společníků, region působnosti, kontakty, referenční čísla a fotografie
- Potvrdit finální fonty (display + UI) a assety pro realizace/textury

## Poznámky pro dalšího agenta

- Draft copy je kvalitní a dostatečný pro první implementaci; lze začít s placeholder obsahem a později upravit.
- Motion efekty držet v mezích definovaných wow-momentů (nepřetížit homepage).
- `Task 01` je implementovaný staticky; interaktivita/motion jsou zatím pouze vizuální fallback preview a poznámky pro další tasky.
