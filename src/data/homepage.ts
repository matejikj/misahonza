export type Cta = {
  label: string;
  href: string;
};

export type MaterialItem = {
  name: string;
  description: string;
  suitableFor: string;
  tags: string[];
  tone: string;
  image: string;
};

export type UseCase = {
  name: string;
  description: string;
  bullets: string[];
  imageLabel: string;
  image: string;
};

export type ProjectItem = {
  title: string;
  insight: string;
  location: string;
  surface: string;
  imageLabel: string;
  image: string;
  brief: string;
  solution: string;
  lightEffect: string;
};

export type ProcessStep = {
  title: string;
  description: string;
  image: string;
};

export type ValueCard = {
  title: string;
  description: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type Founder = {
  name: string;
  role: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const homepageData = {
  nav: [
    { label: "Povrchy", href: "#materials" },
    { label: "Realizace", href: "#projects" },
    { label: "Proces", href: "#process" },
    { label: "O nás", href: "#founders" },
    { label: "FAQ", href: "#faq" },
  ],
  hero: {
    eyebrow: "Stěrky KF design",
    title: "Povrchy, které změní světlo v atmosféru.",
    subtitle:
      "Luxusní betonové a dekorativní stěrky pro interiéry, které působí čistě, klidně a nadčasově.",
    primaryCta: { label: "Nezávazná konzultace", href: "#contact" },
    secondaryCta: { label: "Prohlédnout realizace", href: "#projects" },
    trustPoints: ["Ruční realizace", "Zakázkový výběr povrchu", "Praha a okolí"],
    helperText:
      "Pomůžeme s výběrem povrchu, odstínu i vhodného řešení pro konkrétní prostor.",
  },
  materials: {
    title: "Povrchy, které mají charakter",
    intro:
      "Každý typ stěrky pracuje jinak se světlem, strukturou i atmosférou prostoru. Vybereme takový povrch, který bude fungovat vizuálně i prakticky.",
    cta: { label: "Domluvit výběr povrchu", href: "#contact" },
    items: [
      {
        name: "Jemná betonová stěrka",
        description: "Sametově matný povrch s jemnou kresbou.",
        suitableFor: "Obývací prostory, ložnice, pracovny",
        tags: ["Klidný výraz", "Jemná textura", "Nadčasový vzhled"],
        tone: "Warm Sand",
        image: "/images/povrchy/jemna-betonova-sterka.jpeg",
      },
      {
        name: "Strukturovaná betonová stěrka",
        description: "Výraznější charakter povrchu s hlubší texturou a stínováním.",
        suitableFor: "Akcentní stěny, haly, komerční interiéry",
        tags: ["Výrazný detail", "Silná atmosféra", "Designový efekt"],
        tone: "Stone Shadow",
        image: "/images/povrchy/strukturovana-betonova-sterka.jpeg",
      },
      {
        name: "Dekorativní cloud efekt",
        description: "Měkký, živý povrch s jemnými přechody tónů.",
        suitableFor: "Reprezentativní interiéry, ložnice, showroomy",
        tags: ["Práce se světlem", "Elegantní přechody", "Prémiový dojem"],
        tone: "Cloud Ivory",
        image: "/images/povrchy/dekorativni-cloud-efekt.jpeg",
      },
      {
        name: "Hladký minerální finish",
        description: "Čistý, subtilní povrch s velmi jemnou strukturou.",
        suitableFor: "Minimalistické interiéry, kuchyně, moderní byty",
        tags: ["Minimalismus", "Jemný odraz", "Čisté linie"],
        tone: "Mineral White",
        image: "/images/povrchy/hladky-mineralni-finish.jpeg",
      },
      {
        name: "Povrch do koupelen",
        description: "Dekorativní řešení navržené pro prostředí s vyšší vlhkostí.",
        suitableFor: "Koupelny, sprchové zóny, wellness",
        tags: ["Praktické řešení", "Elegantní vzhled", "Snadná údržba"],
        tone: "Wet Stone",
        image: "/images/povrchy/povrch-do-koupelen.jpeg",
      },
      {
        name: "Zakázkový dekorativní povrch",
        description: "Individuální řešení podle prostoru, stylu a atmosféry.",
        suitableFor: "Atypické projekty, architektonické realizace",
        tags: ["Na míru", "Kurátorský výběr", "Osobní přístup"],
        tone: "Custom Blend",
        image: "/images/povrchy/zakazkovy-dekorativni-povrch.jpeg",
      },
    ] satisfies MaterialItem[],
  },
  useCases: {
    title: "Navržené pro skutečné prostory",
    intro:
      "Jiný povrch funguje v koupelně, jiný v obývacím prostoru. Vybíráme podle světla, provozu i celkové atmosféry interiéru.",
    items: [
      {
        name: "Obývací prostory",
        description:
          "Povrch, který doplní prostor bez zbytečné dominance a přitom mu dá charakter.",
        bullets: [
          "Jemná textura bez rušivého efektu",
          "Příjemná práce se světlem během dne",
          "Vhodné pro moderní i přírodní interiéry",
        ],
        imageLabel: "Obývací prostor / jemná stěrka",
        image: "/images/prostory/obyvaci-prostor.jpeg",
      },
      {
        name: "Koupelny",
        description:
          "Dekorativní povrchy, které fungují i v náročnějším prostředí a působí čistě a luxusně.",
        bullets: [
          "Řešení pro vlhké prostory",
          "Čistý vzhled bez zbytečných přechodů",
          "Praktická údržba",
        ],
        imageLabel: "Koupelna / dekorativní povrch",
        image: "/images/prostory/koupelna.jpeg",
      },
      {
        name: "Schodiště a chodby",
        description:
          "Odolné a dobře navržené řešení pro frekventovaná místa se sjednocením ploch.",
        bullets: [
          "Odolný povrch pro provoz",
          "Vizuální sjednocení prostoru",
          "Precizní napojení detailů",
        ],
        imageLabel: "Schodiště / chodba / detail napojení",
        image: "/images/prostory/schodiste-chodba.jpeg",
      },
      {
        name: "Komerční interiéry",
        description:
          "Povrch vytváří první dojem a musí reprezentovat značku přirozeně i dlouhodobě.",
        bullets: [
          "Prémiový vizuální dojem",
          "Řešení podle charakteru značky",
          "Důraz na detail a konzistenci",
        ],
        imageLabel: "Showroom / vstupní zóna",
        image: "/images/prostory/komercni-interier.jpeg",
      },
    ] satisfies UseCase[],
  },
  lightSweep: {
    title: "Povrch, který žije se světlem",
    description:
      "Dekorativní stěrka není jen barva. Je to materiál, který se během dne proměňuje podle světla, úhlu pohledu a struktury prostoru.",
    states: [
      "Ráno: jemný, měkký odraz",
      "Denní světlo: zvýraznění struktury",
      "Večer: klidný, hlubší tón",
    ],
    cta: { label: "Chci vidět vhodné varianty", href: "#contact" },
  },
  projects: {
    title: "Vybrané realizace",
    intro:
      "Každý prostor má jinou světelnost, proporce i rytmus. Proto pracujeme s povrchem vždy v kontextu konkrétního interiéru.",
    ctas: [
      { label: "Zobrazit další realizace", href: "#contact" },
      { label: "Nezávazně popsat projekt", href: "#contact" },
    ] satisfies Cta[],
    items: [
      {
        title: "Privátní vila · koupelna",
        insight:
          "Jemně strukturovaný povrch pro měkký odraz světla a čistou návaznost detailů.",
        location: "Praha",
        surface: "Dekorativní stěrka / jemná textura",
        imageLabel: "Vila / koupelna / denní světlo",
        image: "/images/realizace/vila-koupelna.jpeg",
        brief: "Luxusní koupelna s požadavkem na sjednocení ploch bez rušivých přechodů.",
        solution: "Jemná dekorativní stěrka v teplém neutrálním tónu s precizní návazností detailů.",
        lightEffect: "Ranní světlo vytváří měkký saténový odraz a večer povrch působí klidněji.",
      },
      {
        title: "Městský byt · obývací stěna",
        insight: "Subtilní betonová stěrka jako klidný základ prostoru s denním světlem.",
        location: "Brno",
        surface: "Betonová stěrka / hladký finish",
        imageLabel: "Byt / obývací stěna / měkké světlo",
        image: "/images/realizace/byt-obyvaci-stena.jpeg",
        brief: "Dominantní stěna měla působit čistě, ale ne ploše a bez výrazného efektu.",
        solution: "Hladký minerální finish s jemnou kresbou, který drží minimalistický charakter.",
        lightEffect: "Boční denní světlo odhalí subtilní strukturu, večer stěna vizuálně ztiší prostor.",
      },
      {
        title: "Showroom · vstupní zóna",
        insight:
          "Výraznější struktura pro reprezentativní první dojem a charakter značky.",
        location: "Praha",
        surface: "Dekorativní strukturovaný povrch",
        imageLabel: "Showroom / vstupní zóna / detail",
        image: "/images/realizace/showroom-vstup.jpeg",
        brief: "Vstupní zóna potřebovala silný první dojem a materiálový podpis značky.",
        solution: "Strukturovaný dekorativní povrch s vyšší plasticitou a kontrolovaným kontrastem.",
        lightEffect: "Akcentní nasvětlení zdůrazňuje reliéf a v pohybu návštěvníka mění hloubku stěny.",
      },
    ] satisfies ProjectItem[],
  },
  process: {
    title: "Jak probíhá spolupráce",
    intro:
      "Od prvního výběru po finální detail. Jasně, přehledně a s důrazem na výsledek v konkrétním prostoru.",
    cta: { label: "Domluvit úvodní konzultaci", href: "#contact" },
    steps: [
      {
        title: "Konzultace prostoru",
        description:
          "Projdeme typ prostoru, styl interiéru, očekávání i praktické požadavky.",
        image: "/images/spoluprace/konzultace-prostoru.jpeg",
      },
      {
        title: "Výběr povrchu a tónu",
        description:
          "Navrhneme vhodné varianty podle světla, charakteru prostoru a způsobu použití.",
        image: "/images/spoluprace/vyber-povrchu-a-tonu.jpeg",
      },
      {
        title: "Příprava podkladu",
        description:
          "Kvalitní výsledek stojí na správné přípravě. Hlídáme technický základ i detaily.",
        image: "/images/spoluprace/priprava-podkladu.jpeg",
      },
      {
        title: "Aplikace a řemeslné zpracování",
        description:
          "Realizace probíhá s důrazem na čistotu práce, návaznosti a finální vzhled.",
        image: "/images/spoluprace/aplikace-a-zpracovani.jpeg",
      },
      {
        title: "Předání a doporučení péče",
        description:
          "Předáme hotový povrch a doporučíme, jak o něj správně pečovat.",
        image: "/images/spoluprace/predani-a-pece.jpeg",
      },
    ] satisfies ProcessStep[],
  },
  trust: {
    title: "Proč nám klienti svěřují svůj prostor",
    intro:
      "Po estetice přichází jistota. Důležité je, aby výsledek byl kvalitní a celý průběh spolupráce srozumitelný.",
    values: [
      {
        title: "Zakázkový přístup",
        description:
          "Každý prostor řešíme individuálně. Neprodáváme univerzální řešení.",
      },
      {
        title: "Důraz na detail",
        description:
          "Rohy, napojení, přechody a finální kresba povrchu rozhodují o výsledku.",
      },
      {
        title: "Ověřené materiály",
        description:
          "Pracujeme s materiály a postupy, které dávají dlouhodobě smysl.",
      },
      {
        title: "Čistá komunikace",
        description:
          "Vysvětlíme možnosti, doporučíme řešení a držíme se domluveného postupu.",
      },
    ] satisfies ValueCard[],
    metrics: [
      { value: "8+ let", label: "zkušeností" },
      { value: "120+", label: "realizací" },
      { value: "Praha / Brno", label: "regiony" },
    ] satisfies Metric[],
    testimonials: [
      {
        quote:
          "Výsledek působí přesně tak, jak jsme chtěli – čistě, klidně a prémiově. Oceňujeme detail i průběh realizace.",
        author: "Majitelka bytu, Praha",
      },
      {
        quote:
          "Skvělá domluva, jasný postup a perfektní provedení. Povrch dělá celý prostor.",
        author: "Majitel showroomu, Brno",
      },
    ],
  },
  founders: {
    title: "Za každým povrchem stojí konkrétní přístup",
    intro:
      "Jsme dva společníci, kteří spojují cit pro prostor s poctivým řemeslem. Na každé realizaci je pro nás důležitý výsledek i způsob, jakým k němu dojdeme.",
    people: [
      {
        name: "Jan",
        role: "Výběr povrchů, návrh řešení, konzultace",
        description:
          "Pomáhá klientům najít povrch, který bude fungovat dlouhodobě – vizuálně i prakticky.",
      },
      {
        name: "Michal",
        role: "Realizace, technické provedení, detail",
        description:
          "Hlídá kvalitu provedení od přípravy po finální detail, který dělá rozdíl.",
      },
    ] satisfies Founder[],
    quote: "Povrch má prostoru dodat charakter – ne ho přehlušit.",
    cta: { label: "Napsat nám o projektu", href: "#contact" },
  },
  faq: {
    title: "Časté otázky",
    intro: "To nejdůležitější, co klienti řeší před rozhodnutím.",
    cta: {
      label: "Poslat fotky prostoru a získat orientační návrh řešení",
      href: "#contact",
    },
    items: [
      {
        question: "Jak odolné jsou dekorativní stěrky?",
        answer:
          "Odolnost závisí na typu povrchu a konkrétním použití. Vždy doporučíme řešení podle místa realizace a očekávaného provozu.",
      },
      {
        question: "Hodí se stěrka i do koupelny?",
        answer:
          "Ano, existují vhodná řešení i pro vlhké prostory. Důležité je správné navržení skladby a kvalitní provedení detailů.",
      },
      {
        question: "Jak je to s údržbou?",
        answer:
          "Údržba bývá jednoduchá a závisí na typu povrchu. Po realizaci doporučíme konkrétní způsob péče.",
      },
      {
        question: "Jak dlouho trvá realizace?",
        answer:
          "Termín závisí na rozsahu a připravenosti prostoru. Po úvodní konzultaci umíme určit realistický postup i časový rámec.",
      },
      {
        question: "Dá se vybrat povrch předem?",
        answer:
          "Ano. Výběr řešíme podle stylu interiéru, světla a způsobu použití prostoru, včetně tonalit a variant.",
      },
      {
        question: "Kolik to stojí?",
        answer:
          "Cena se odvíjí od typu povrchu, rozsahu ploch, detailů a stavu podkladu. Nejrychlejší je poslat základní informace nebo fotografie prostoru.",
      },
    ] satisfies FaqItem[],
  },
  contact: {
    title: "Domluvme povrch, který bude fungovat ve vašem prostoru.",
    description:
      "Ozvěte se nám s krátkým popisem projektu nebo pošlete fotografie prostoru. Navrhneme vhodný typ povrchu, doporučíme postup a domluvíme další krok.",
    primaryCta: { label: "Nezávazná poptávka", href: "mailto:info@zakdesign.cz" },
    secondaryCta: {
      label: "Poslat inspiraci / fotky prostoru",
      href: "mailto:info@zakdesign.cz?subject=Inspirace%20a%20fotky%20prostoru",
    },
    details: [
      { label: "Showroom", value: "📍Slavičín - po telefonické domluvě 🤳🏻" },
      { label: "☎️ Telefon", value: "+420 776 726 111" },
      { label: "📨 E-mail", value: "info@zakdesign.cz" },
    ],
  },
  footer: {
    brand: "Stěrky KF design",
    note:
      "Luxusní betonové a dekorativní stěrky s důrazem na světlo, texturu a řemeslný detail.",
    swatches: ["Cloud Ivory", "Warm Sand", "Mineral White", "Stone Shadow"],
  },
} as const;
