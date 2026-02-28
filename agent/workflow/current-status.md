# Current Status (živý stav projektu)

## Stav projektu

- Fáze: `Task 05 completed (polish/a11y/seo/performance)`
- Aktivní task: `Žádný (homepage připravena pro review)`
- Poslední update: `2026-02-23`

## Hotovo

- Vytvořen agentní kontext a backlog 5 tasků v `agent/`
- Implementován nový Astro + Tailwind scaffold
- Vytvořena statická homepage kostra se sekcemi 0-10 (header, hero, materiály, use cases, light sweep fallback, realizace fallback, proces, trust, společníci, FAQ, finální CTA, footer)
- Zavedena centrální data vrstva `src/data/homepage.ts` a základní design tokeny v `src/styles/global.css`
- Implementován scroll-reactive sticky header (transparent -> light panel)
- Hero vizuálně doladěn o ambient pozadí a detail side panel
- Materiály: desktop interaktivní stack preview + sticky detail panel, mobile fallback list
- Use Cases: přístupné tabs (klik + klávesnice) s dynamickou změnou obsahu a image labelu
- Přidána motion infrastruktura s lazy load `GSAP/ScrollTrigger` (`src/scripts/motion/*`)
- Light Sweep sekce: scroll-driven světelný sweep + state highlighting na desktopu s mobile/reduced-motion fallbackem
- Realizace: desktop flip gallery s pinningem a progress/metadaty + fallback grid pro mobile/reduced-motion/no-JS
- Process sekce: desktop sticky intro + aktivní krok highlight, mobile accordion fallback
- Trust sekce: doplněný konverzní CTA panel navazující na důvěrové argumenty
- Founders sekce: osobnější framing a role-based highlight tagy
- FAQ sekce: doplněná Care Guide karta vedle FAQ akordeonu
- Finální CTA sekce: jasně formulovaný „první krok“, klikatelné kontaktní údaje a konzistentní akce
- Layout SEO polish: canonical/OG/Twitter metadata + robots + theme-color
- A11y polish: skip link, zlepšená mobilní navigace bez JS placeholderu, 44px hit-area pro klíčové akce
- Reduced-motion polish: globální fallback pravidla pro animace/transition + smooth-scroll disable
- Performance polish: desktop-only inicializace Material stack JS a zachování no-JS fallbacků

## Další doporučený krok

- Klientský review průchod (obsah, brand assety, reálné kontaktní údaje)

## Blokery / otevřené otázky

- Doplnit reálná jména společníků, region působnosti, kontakty, referenční čísla a fotografie
- Potvrdit finální fonty (display + UI) a assety pro realizace/textury

## Poznámky pro dalšího agenta

- Draft copy je kvalitní a dostatečný pro první implementaci; lze začít s placeholder obsahem a později upravit.
- Motion efekty držet v mezích definovaných wow-momentů (nepřetížit homepage).
- `Task 01` je implementovaný staticky; interaktivita/motion jsou zatím pouze vizuální fallback preview a poznámky pro další tasky.
- `Task 02` používá lehký inline JS pro header, materials a use-cases; GSAP/ScrollTrigger zatím není zaveden.
- `Task 03` používá lazy init přes `IntersectionObserver` + dynamické importy motion modulů (prakticky `client:visible` chování bez framework integrace).
- `Task 04` drží druhou polovinu homepage conversion-first: průběh spolupráce, důvěra, lidský kontext a jasné CTA na první krok.
- `Task 05` doplnil produkční minimum pro SEO/a11y/reduced-motion; doporučené další ověření je ruční QA na cílových zařízeních a Lighthouse kontrola v CI.
