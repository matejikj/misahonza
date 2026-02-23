# Task 02: Hero + Materiály (stack) + Use Cases

## Cíl

Implementovat první část homepage, která vytváří emoci a představu: hero, wow materiálovou sekci a use-case přepínače.

## Scope

- Hero sekce:
  - headline, subheadline, 2 CTA, trust row
  - layout desktop/mobile dle wireframe
  - jemné vizuální pozadí (ambient gradient)
- Sticky header chování (transparent -> light panel po scrollu)
- Sekce Materiály:
  - datový model 4-6 typů povrchů
  - desktop sticky info panel + stack area
  - statický fallback / mobile varianta
- Use Cases sekce:
  - chips/tabs (4 use cases)
  - výměna obrázku + textu + 3 benefitů
  - přístupné ovládání (keyboard/focus)

## Motion úroveň v tomto tasku

- Lehké reveal/hover microinterakce ano
- Plný scroll-driven stack motion může být skeleton nebo první verze
- Pokud se motion odkládá, musí existovat funkční fallback připravený pro Task 03

## Acceptance Criteria

- Hero během prvního viewportu komunikuje nabídku, premium pocit a primární CTA
- Materiály jsou srozumitelně porovnatelné (název/popis/použití/tagy)
- Use Cases mění obsah bez reloadu a jsou použitelné klávesnicí
- Mobile layout respektuje zjednodušení (stack místo desktop chování)
- Sekce vizuálně drží styl `Sculpted Light`

## Závislosti

- `task-01` dokončen

