# Homepage Spec (sekce, obsah, UX logika)

## Psychologický tok stránky

Emoce -> Představa -> Důvěra -> Jistota -> Akce

## Sekce 0-10 (produkční pořadí)

## 0) Sticky Header

- Logo + navigace (`Povrchy / Realizace / Proces / O nás / FAQ`)
- CTA: `Konzultace`
- Chování: transparentní nahoře, po scrollu světlý blur panel + hairline border
- Mobile: burger, zjednodušené CTA

## 1) Hero (Atmosféra a příslib)

- Headline: "Povrchy, které změní světlo v atmosféru."
- Subheadline: luxusní betonové/dekorativní stěrky, čisté/klidné/nadčasové interiéry
- 2 CTA: konzultace + realizace
- Trust řádek: ruční realizace / zakázkový přístup / region
- Motion: jemný parallax, line reveal textu, velmi jemný light drift

## 2) Materiály (Stack stěrek) - wow #1

- 4-6 typů povrchů ve formě sample cards
- Levý sticky panel s aktivními metadaty
- Pravá část animovaný stack reveal (pin + scroll)
- Každá karta: název, popis, použití, tagy/parametry
- Mobile fallback: carousel / stacked list bez pinningu

## 3) Use Cases (chips + image swap)

- Přepínače: obývací prostory / koupelny / schodiště-chodby / komerční interiéry
- 1 hlavní fotka + 3 stručné benefity podle aktivního use case
- Motion: crossfade + lehký posun, soft highlight chipu

## 4) Light Sweep (makro textura) - wow #2

- Velký detail povrchu a práce se světlem v čase dne
- Mikro stavy: ráno / denní světlo / večer
- Motion: světelný pás (gradient mask), scroll-driven
- Mobile fallback: kratší sekce bez pin, zjednodušená animace

## 5) Vybrané realizace (Flip gallery) - wow #3

- Kurátorsky 3 realizace
- Pinned zóna s kartou, která se otáčí na ose Y a střídá projekty
- Metadata: název projektu, lokalita, typ povrchu, 1 insight
- Progress `01 / 03`
- Mobile fallback: swipe carousel bez 3D flipu/pinu

## 6) Proces spolupráce

- 4-5 kroků: konzultace -> výběr -> příprava -> aplikace -> předání/údržba
- Cíl: snížení nejistoty a vysvětlení průběhu
- Desktop: sticky intro + seznam kroků + měnící se vizuál
- Mobile: jednoduchý stack/accordion

## 7) Důvěra / hodnoty / reference

- 4 value blocks (zakázkový přístup, detail, materiály, komunikace)
- Čísla (roky, realizace, regiony)
- 1-2 reference
- Motion decentní (fade-up, jemný count-up)

## 8) O společnících

- Split layout 2 profily + role
- Krátké texty (výběr a konzultace vs realizace a technické provedení)
- Společná filozofie (quote)
- Cíl: lidskost + důvěra

## 9) FAQ + péče

- FAQ accordion (odolnost, koupelna, údržba, délka realizace, výběr, cena)
- Bez efektní motion; priorita je čitelnost
- Mini CTA pod FAQ

## 10) Finální CTA / kontakt

- Klidné zakončení s jasnou akcí
- Primární + sekundární CTA
- Kontaktní info (telefon, email, region, SLA odpovědi)
- Cíl: pozvat do prvního kroku, ne "tvrdý prodej"

## Povinné UX zásady napříč sekcemi

- Po každém wow momentu následuje klidnější informační sekce
- Text stručný (headline + krátký odstavec + max 3 body)
- CTA opakovat jemně (hero, po realizacích, finále, volitelně po procesu)

