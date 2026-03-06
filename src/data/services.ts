export const BOOKSY_URL = 'https://booksy.com/pl-pl/328910_strefa-zmian_salon-kosmetyczny_15608_poznan';

export const services = [
  {
    name: 'Stylizacja rzęs',
    slug: 'rzesy',
    description: 'Przedłużanie i uzupełnianie rzęs metodą 1:1 oraz objętościową (2D-6D) dla naturalnego lub wyrazistego efektu. Oferuję także lifting rzęs z koloryzacją, który podkręca i wzmacnia naturalne rzęsy.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>`,
    image: '/images/portfolio-lashes.jpg',
    details: {
      treatments: [
        {
          name: 'Nowa aplikacja',
          description: 'Trwa około 2 godzin. Podczas konsultacji dobieram skręt, długość, grubość oraz efekt stylizacji tak, aby spełnić Twoje oczekiwania i jednocześnie zachować zdrowie naturalnych rzęs.',
        },
        {
          name: 'Uzupełnienie',
          description: 'Zalecane co około 3 tygodnie, aby utrzymać estetykę i trwałość stylizacji. Nie wykonuję uzupełnień po innych stylistkach - nie jestem w stanie zagwarantować trwałości oraz bezpieczeństwa aplikacji, której nie wykonywałam osobiście.',
        },
        {
          name: 'Lifting rzęs',
          description: 'Zabieg polega na uniesieniu i podkręceniu naturalnych rzęs bez ich przedłużania. Efekt utrzymuje się kilka tygodni, rzęsy można normalnie tuszować. Bezpieczna częstotliwość: co 6-8 tygodni.',
        },
      ],
      contraindications: [
        'Aktywne stany zapalne oczu (np. jęczmień, zapalenie spojówek)',
        'Świeże zabiegi okulistyczne',
        'Bardzo osłabione, zniszczone naturalne rzęsy',
        'Alergia na cyjanoakrylan lub inne składniki kleju',
        'Niekontrolowane łzawienie oczu',
        'Trichotillomania',
      ],
    },
  },
  {
    name: 'Stylizacja paznokci',
    slug: 'paznokcie',
    description: 'Manicure hybrydowy, żelowy, tytanowy oraz zdobienia artystyczne. Używam sprawdzonych produktów, które gwarantują trwałość do 3 tygodni. Każda stylizacja dobierana jest indywidualnie do kształtu płytki i Twoich preferencji.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7"><path d="M12 22c1-3 4-5 4-10a4 4 0 0 0-8 0c0 5 3 7 4 10z"/><path d="M10 12h4"/></svg>`,
    image: '/images/portfolio-nails.jpg',
    details: {
      treatments: [
        {
          name: 'Manicure hybrydowy',
          description: 'Idealny dla naturalnej długości paznokci. Zapewnia estetyczny i trwały efekt na kilka tygodni.',
        },
        {
          name: 'Manicure żelowy',
          description: 'Wykonywany przy użyciu twardszego produktu - żelu. Jest trwalszy i polecany szczególnie przy paznokciach dłuższych, wymagających wzmocnienia lub przedłużenia.',
        },
        {
          name: 'Manicure tytanowy',
          description: 'Doskonała alternatywa dla osób uczulonych na klasyczne produkty hybrydowe. Nie wymaga utwardzania w lampie, wzmacnia naturalną płytkę i zapewnia trwały, elegancki efekt.',
        },
      ],
      contraindications: [
        'Grzybica paznokci',
        'Otwarte rany wokół paznokci',
        'Alergie na UV lub substancje chemiczne',
      ],
    },
  },
  {
    name: 'Stylizacja brwi',
    slug: 'brwi',
    description: 'Laminacja brwi, henna pudrowa i klasyczna, regulacja i depilacja woskiem - idealna oprawa oczu dopasowana do rysów Twojej twarzy. Efekt utrzymuje się nawet do 6 tygodni.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7"><path d="M3 8c3-3 7-3 9-1s6 0 9-3"/><path d="M3 16c3-3 7-3 9-1s6 0 9-3"/></svg>`,
    details: {
      treatments: [
        {
          name: 'Henna pudrowa',
          description: 'Wykonywana przy użyciu produktów na bazie naturalnych składników. Barwi włos oraz skórę, tworząc efekt delikatnego makijażu i optycznego wypełnienia. Idealna, jeśli masz ubytki w łuku brwiowym lub chcesz wyraźniejszy efekt.',
        },
        {
          name: 'Henna klasyczna (farbka)',
          description: 'Barwi głównie włos, daje subtelniejszy, naturalny efekt.',
        },
        {
          name: 'Laminacja brwi',
          description: 'Zabieg polega na zmiękczeniu struktury włosa i nadaniu mu nowego kierunku oraz formy. Polecana przy brwiach niesfornych, rosnących w dół lub trudnych do ułożenia. Bezpieczna częstotliwość: co 6-8 tygodni.',
        },
        {
          name: 'Regulacja woskiem',
          description: 'Precyzyjne nadanie kształtu brwiom za pomocą wosku, zapewniające schludny i trwały efekt.',
        },
      ],
      contraindications: [
        'Choroby skóry w okolicy brwi',
        'Świeże peelingi chemiczne',
        'Alergie na hennę lub nadtlenek wodoru',
      ],
    },
  },
  {
    name: 'Pedicure',
    slug: 'pedicure',
    description: 'Pedicure kosmetyczny i podologiczny z dbałością o każdy detal - pielęgnacja stóp, opracowanie paznokci i skórek oraz malowanie hybrydą. Zdrowe, zadbane stopy przez cały rok.',
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7"><path d="M7 21h10"/><path d="M12 3v18"/><path d="M8 6c0-1 1-3 4-3s4 2 4 3-1 2-4 3-4 2-4 3 1 3 4 3 4-2 4-3"/></svg>`,
    details: {
      treatments: [
        {
          name: 'Pedicure kosmetyczny',
          description: 'Obejmuje opracowanie skóry stóp i płytki paznokcia. Możesz zdecydować się na wykończenie malowaniem hybrydowym lub pozostawić paznokcie w naturalnej, zadbanej wersji.',
        },
        {
          name: 'Malowanie hybrydowe stóp',
          description: 'Oddzielna usługa dla osób, które chcą jedynie odświeżyć kolor.',
        },
        {
          name: 'Pedicure podologiczny',
          description: 'Zabieg skoncentrowany na usunięciu zrogowaceń przy użyciu skalpela i profesjonalnych narzędzi podologicznych. Polecany przy problemie twardej, pękającej skóry pięt.',
        },
      ],
      contraindications: [
        'Otwarte rany na stopach',
        'Aktywna grzybica',
        'Cukrzyca (wymaga zaświadczenia lekarskiego)',
      ],
    },
  },
];
