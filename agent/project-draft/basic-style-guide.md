# Návrh: **Sculpted Light**

**Pocit:** světlý, galerie/interiér, vzdušný, moderní řemeslo
**Vhodné pro:** designové rezidence, showroomy, klienty co chtějí “clean luxury”

---

## 1) 10 bodů, které definují vzhled a dojem

1. **Světlý luxus** – off-white, pískové tóny, jemné stíny.
2. **Pocit galerie** – hodně bílé plochy, velké okraje, čisté kompozice.
3. **Povrch jako umění** – stěrka prezentovaná jako “sochařský materiál”.
4. **Soft kontrast** – žádná tvrdá černá, spíš teplé šedé.
5. **Editorial layout** – velké titulky, menší popisky, precizní alignment.
6. **Organické tvary v detailech** – jemné masky/oblouky inspirované stěrkou.
7. **Fotografie s denním světlem** – interiéry, stěny, detaily, ruce řemeslníka.
8. **Microcopy a popisky** – “Povrch / odolnost / textura / vhodné do …”.
9. **Vizuální lehkost i přes technický produkt** – méně “stavba”, více “interiér”.
10. **Emoce přes světlo a texturu** – důraz na atmosféru prostoru.

---

## 2) Design tokeny (konkrétně)

### Barvy

```txt
--bg: #F7F4EE         // hlavní warm white
--bg-soft: #F1EDE4
--surface: #FFFFFF
--text: #1E1D1A
--text-muted: #6E6A63
--line: #DDD6CA
--accent: #B78C5A     // jemná terakota / bronz
--accent-2: #8FA3A4   // desaturovaná šalvěj
--highlight: #E8DFCF  // hover plochy
```

### Typografie

* **Display:** `Fraunces` / `Cormorant` (měkčí, elegantní)
* **Text/UI:** `Inter` / `Söhne` style / `Manrope`

#### Scale (desktop)

```txt
display-xl: 68/72
display-lg: 52/58
h1: 40/46
h2: 30/38
h3: 22/30
body-lg: 18/30
body: 16/26
small: 14/22
label: 12/16 uppercase
```

### Radius

```txt
--radius-sm: 10px
--radius-md: 16px
--radius-lg: 24px
--radius-pill: 999px
```

### Shadow

```txt
--shadow-soft: 0 8px 24px rgba(30,29,26,.06)
--shadow-card: 0 16px 38px rgba(30,29,26,.08)
--shadow-floating: 0 24px 60px rgba(30,29,26,.10)
```

### Spacing

```txt
4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128
Container max: 1200px
Readable text: 680px
Section padding Y: 88–128px desktop / 48–72px mobile
```

---

## 3) Klíčové komponenty + chování

1. **Light Hero Canvas**
   Velká světlá plocha s headline + subtitulem + jedním “signature” vizuálem.

2. **Floating Material Cards**
   Karty povrchů s mini vzorkem textury; při hoveru se jemně zvednou.

3. **Mood Gallery Carousel**
   Horizontální carousel interiérů (island), swipe-friendly, desktop s drag.

4. **Surface Library Grid**
   Katalog typů stěrek (mat, cloud, stone, polished…); filtrace podle stylu.

5. **Use Cases Chips**
   Přepínače “Koupelna / Obývák / Komerce / Schodiště” mění zobrazené projekty.

6. **Story Chapter Section**
   Sekce po kapitolách (Světlo, Struktura, Dotek, Trvanlivost) s velkým vizuálem.

7. **Inline Technical Facts**
   Malé informační boxy (voděodolnost, údržba, tloušťka vrstvy) přímo v toku.

8. **Founders Portrait Split**
   Dva společníci v čistém split layoutu, každý s krátkým profilem.

9. **Sample Kit CTA**
   Jemně zvýrazněná karta “Objednat vzorník / konzultaci”.

10. **Testimonial Marquee (slow)**
    Pomalý horizontální běh referencí/log klientů (volitelně, decentně).

11. **FAQ + Care Guide**
    FAQ doplněné o “jak pečovat o povrch”.

12. **Contact Form Minimal**
    4–5 polí, čisté labely nahoře, jasná primární akce.

13. **Sticky Section Label**
    Na desktopu vlevo malý sticky label názvu kapitoly (“03 / Trvanlivost”).

14. **Image Caption System**
    Každá fotka má kurátorský popisek – působí editorial.

15. **Footer with Material Swatch**
    Footer doplněný o mini vzorky povrchů jako vizuální podpis.

---

## 4) Motion / efekty – co kde a jak působí

* **Lenis smooth scroll** jen na homepage (jemné, ne “gumové”).
* **Fade/blur-in** u fotografií při vstupu do viewportu (krátce, čistě).
* **Scroll-reveal text lines** u chapter sekcí.
* **Carousel drag momentum** (GSAP Draggable nebo custom) – plynulé, jemné.
* **Chips filter transition** – crossfade + lehký reposition (FLIP).
* **Parallax světla/textur** pouze na hero a 1 galerii.
* **Micro-interakce tlačítek** – subtle scale 0.98 při click, shadow shift.

**Mood:** lehké, elegantní, “gallery-like” – animace mají podporovat světlo a prostor.

---

## 5) Responsivita – co se mění na mobilu

1. **Hero**: headline přes 3–4 řádky, vizuál pod textem (ne vedle).
2. **Carousel**: 1 karta na šířku, silný swipe; vypnout složitý drag desktop behavior.
3. **Surface Library**: z gridu 4 sloupce na 2 sloupce.
4. **Sticky labels**: vypnout, nahradit textovým oddělovačem sekce.
5. **Technical facts**: seskupit do accordionů, aby nebyl dlouhý “wall of info”.
6. **Founders split**: stack nad sebe, stejné CTA po každém bloku.
7. **Typografie**: méně kontrastní scale, body line-height ~1.6–1.75.
8. **Spacing**: zachovat čistotu, ale snížit horizontální padding (16–20px).
9. **Obrázky**: pevný poměr stran (4:5 / 3:4) kvůli konzistenci layoutu.
10. **CTA**: sticky bottom CTA může fungovat (“Nezávazná konzultace”).

---

## 6) Prompt pro ukázkový obrázek (Nano Banana)

**Prompt 2 – Sculpted Light**

```txt
Bright luxury homepage design for a decorative plaster and concrete finishes studio, warm off-white and sand color palette, gallery-style editorial layout, soft natural daylight, refined typography with elegant serif headlines and minimal sans-serif UI text, premium interior photography, material texture swatches, spacious white space, calm sophisticated mood, modern European interior design aesthetic, photorealistic website mockup, clean and airy, subtle premium shadows
```
