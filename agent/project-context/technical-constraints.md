# Technical Constraints & Architecture (Astro + Tailwind + islands)

## Preferovaný stack

- `Astro` (SEO, statické HTML, low-JS baseline)
- `Tailwind CSS`
- `GSAP + ScrollTrigger` pouze ve vybraných islands
- `Lenis` jemně a ideálně jen na homepage (pokud nepřináší problémy)

## Proč tento stack (shrnutí)

- Content-heavy homepage s vysokým důrazem na LCP/INP
- Interaktivita jen tam, kde dává obchodní hodnotu
- Snadný static-first fallback bez JS

## Doporučené islands komponenty

- `HeroMotionIsland` (volitelně, pokud bude intro animace)
- `MaterialStackIsland`
- `LightSweepIsland`
- `ProjectsFlipIsland`
- `ProcessStepsIsland` (nebo malý controller pro active state)

Zbytek preferovat jako čisté Astro komponenty.

## Načítání islands (doporučení)

- Hero motion: `client:load` jen pokud je nutný intro efekt
- Ostatní animované sekce: `client:visible`
- Neanimované sekce: bez klientského JS

## Výkon a fallbacky (must-have)

- Hero image priorita, ostatní lazy + `sizes`
- AVIF/WebP + srcset přes Astro image pipeline
- Pinned heavy sekce držet pod kontrolou (materiály + realizace)
- Fallback bez motion:
  - Material stack -> statické karty / jednoduchý carousel
  - Flip gallery -> běžný slider/list 3 realizací
  - Light sweep -> statický texture panel + textové stavy

## Přístupnost / progresivní enhancement

- Obsah musí být textově v DOM
- `prefers-reduced-motion`: vypnout scrub/pinning a složité transformace
- Ovládání tabs/chips a FAQ klávesnicí
- Zachovat fokus styly a čitelné hit area

## Technické body pro implementaci motion

- 3D flip: `perspective`, `transform-style: preserve-3d`, `backface-visibility`
- Sticky panely primárně CSS (`position: sticky`)
- Masky/overlaye přes CSS pseudo-elementy (kde to jde)
- GSAP použít cíleně, ne globálně na celý layout

