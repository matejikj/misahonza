# Design & Motion Rules (Sculpted Light)

## Vizuální směr

- Světlý luxus, galerie/interiér, vzdušnost
- Warm off-white + pískové tóny + měkký kontrast
- Editorial layout, velké okraje, precizní alignment
- Produkt prezentovaný jako materiál/řemeslo, ne "stavebnina"

## Design tokeny (z draftu)

### Barvy

- `--bg: #F7F4EE`
- `--bg-soft: #F1EDE4`
- `--surface: #FFFFFF`
- `--text: #1E1D1A`
- `--text-muted: #6E6A63`
- `--line: #DDD6CA`
- `--accent: #B78C5A`
- `--accent-2: #8FA3A4`
- `--highlight: #E8DFCF`

### Typografie

- Display: `Fraunces` nebo `Cormorant`
- UI/Text: `Inter` / `Manrope` (nebo podobný čistý sans)
- Důraz na výrazný display kontrast + klidný body text

### Radius / stíny / spacing

- Radius: `10 / 16 / 24 / pill`
- Stíny jemné, bez "app" looku
- Container `1200px`, čitelný text `680px`
- Section spacing desktop `88-128px`, mobile `48-72px`

## Klíčové komponenty (must-have / highly relevant)

- Light Hero Canvas
- Floating Material Cards
- Use Case Chips
- Story Chapter sekce
- Inline technical facts / metadata
- Founders split
- FAQ accordion
- Minimal contact CTA panel

## Motion hierarchie (důležité)

### Wow momenty (max 2-3)

1. Material Stack
2. Light Sweep
3. Projects Flip

### Klidné motion patterny

- fade/blur-in vstup obrázků
- text reveal po řádcích
- crossfade při změně obsahu
- jemné hover microinterakce (shadow/scale)

## Motion pravidla

- Animace mají podporovat světlo/prostor, ne přebít obsah
- Nepoužívat příliš mnoho pinned sekcí (prakticky max 2 současně náročné momenty)
- FAQ a ostatní čtecí bloky bez scrubu/pinningu
- Vždy existuje čitelný statický fallback

## Responsivní pravidla

- Hero na mobile stack (text nad vizuálem)
- Složité desktop drag/pin chování vypnout nebo výrazně zjednodušit
- Sticky labels na mobile vypnout
- Surface grid / cards zjednodušit do 1-2 sloupců nebo carouselu
- Obrázky s konzistentním poměrem stran (4:5 / 3:4)
- Zachovat čistotu layoutu i při menším paddingu (16-20px)

## Přístupnost a čitelnost

- Kontrast textů na fotkách přes overlay
- CTA min výška 44px
- Motion není jediný nosič informace
- `prefers-reduced-motion` respektovat (bez scrub/pin efektů)

