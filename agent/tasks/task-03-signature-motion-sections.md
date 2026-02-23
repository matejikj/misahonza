# Task 03: Signature motion sekce (Light Sweep + Realizace Flip)

## Cíl

Přidat hlavní wow motion momenty s progresivním enhancementem a fallbacky: Light Sweep textura a Flip galerie realizací. Volitelně dokončit plný motion pro Material Stack.

## Scope

- GSAP/ScrollTrigger integrace do islands komponent
- (Volitelně) Lenis integrace pouze pro homepage a jemný smooth scroll
- `LightSweepIsland`
  - scroll-driven light sweep gradient/maska
  - textové stavy ráno/den/večer
  - mobile/reduced-motion fallback
- `ProjectsFlipIsland`
  - 3 realizace, progress `01/03`
  - desktop pin + rotationY flip
  - mobile fallback carousel/list
- Dokončení `MaterialStackIsland` scroll motion (pokud v Task 02 zatím nebylo)

## Technické požadavky

- `client:visible` pro motion islands pod foldem
- Žádná ztráta obsahu při vypnutém JS
- `prefers-reduced-motion` vypíná scrub/pin a zobrazí statickou variantu
- Pinning a transformace nesmí rozbíjet layout na mobilech

## Acceptance Criteria

- 2-3 wow momenty fungují plynule na desktopu a nepůsobí přehnaně
- Mobile verze zachovává obsah a čitelnost bez těžkého 3D/pin chování
- Reduced-motion mód je explicitně ošetřen
- Neběží zbytečný JS mimo animované sekce

## Závislosti

- `task-01`, `task-02` dokončeny

