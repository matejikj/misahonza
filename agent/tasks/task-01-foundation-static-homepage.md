# Task 01: Foundation + statická homepage kostra

## Cíl

Založit technický základ (Astro + Tailwind), design tokeny a statickou homepage strukturu se všemi sekcemi 0-10 bez pokročilé motion logiky.

## Scope

- Inicializace projektu ve zvoleném stacku
- Tailwind setup + tokeny (`colors`, spacing, radii, shadows, typography)
- Globální layout (container, grid, section spacing)
- Základní stránky/komponenty pro sekce homepage
- Napojení statického copy (placeholdery dle draftů)
- Sticky header základ (bez finální motion)
- Footer základ

## Doporučená struktura kódu

- `src/layouts/MainLayout.astro`
- `src/pages/index.astro`
- `src/components/home/*` (sekce 0-10)
- `src/styles/*` nebo Tailwind theme config
- `src/data/homepage.ts` (obsah a data sekcí)

## Acceptance Criteria

- Homepage renderuje všechny sekce ve správném pořadí
- Obsah je čitelný a odpovídá draftům (headline, CTA, sekce)
- Design tokeny jsou centrálně definované a používané napříč komponentami
- Layout je responzivní alespoň na základní úrovni (desktop/tablet/mobile)
- Bez JS je stránka funkční a smysluplná

## Mimo scope

- GSAP/Lenis animace
- Pokročilé scroll pinning sekce
- Finální performance tuning

## Závislosti

- Číst: `agent/project-context/*`

