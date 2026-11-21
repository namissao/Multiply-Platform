// ============================================================
// MULTIPLY GLOBAL TRAINING PLATFORM — DATA LAYER
// Edit this file to add, update or remove programs.
// Each program follows the schema below.
// ============================================================

// Duration categories
const DURATION = {
  MOBILIZACAO: 'mobilizacao',   // 1–7 days
  CURTO:       'curto',         // 8 days – 1 month
  MEDIO:       'medio',         // 1–6 months
  LONGO:       'longo'          // 6+ months
};

// Strategic map focuses (Multiply Mission Strategic Map)
const STRATEGIC_FOCUSES = [
  'Mobilizing',    // 1
  'Connecting',    // 2
  'Witnessing',    // 3
  'Gathering',     // 4
  'Equipping',     // 5
  'Growing',       // 6
  'Multiplying',   // 7
  'Partnering',    // 8
  'Extending'      // 9
];

// Platform priority focuses
const PLATFORM_FOCUSES = [
  'Discipleship',
  'Missionary Training',
  'Church Planting',
  'Cross-cultural',
  'Leadership Development',
  'Mobilization',
  'Sustainability',
  'Networking'
];

// Country coordinates for world map
const COUNTRY_COORDS = {
  'Canada':      { lat: 56.1304, lng: -106.3468 },
  'USA':         { lat: 37.0902, lng:  -95.7129 },
  'Mexico':      { lat: 23.6345, lng:  -102.5528 },
  'Guatemala':   { lat: 15.7835, lng:   -90.2308 },
  'Honduras':    { lat: 15.1999, lng:   -86.2419 },
  'El Salvador': { lat: 13.7942, lng:   -88.8965 },
  'Nicaragua':   { lat: 12.8654, lng:   -85.2072 },
  'Costa Rica':  { lat:  9.7489, lng:   -83.7534 },
  'Panama':      { lat:  8.5380, lng:   -80.7821 },
  'Colombia':    { lat:  4.5709, lng:   -74.2973 },
  'Brazil':      { lat: -14.235, lng:   -51.9253 },
  'Chile':       { lat: -35.675, lng:   -71.5430 },
  'Bolivia':     { lat: -16.290, lng:   -63.5887 },
  'Paraguay':    { lat: -23.443, lng:   -58.4438 },
  'Jordan':        { lat: 30.5852, lng:   36.2384 },
  'Philippines':   { lat: 12.8797, lng:  121.7740 },
  'Thailand':      { lat: 15.8700, lng:  100.9925 },
  'Middle East':   { lat: 29.3117, lng:   47.4818 }
};

// ============================================================
// PROGRAM DATABASE — dados reais da Plataforma Multiply
// Fonte: GLOBAL TRAINING PLATFORM - 06-11-26
// ============================================================
const PROGRAMS_DB = [

  // ── MOBILIZAÇÃO (1–7 dias) ─────────────────────────────
  // Programa #1 — SOAR (4 variações)

  {
    id: 1,
    name: 'SOAR EUA',
    country: 'USA',
    region: 'América do Norte',
    duration: DURATION.MOBILIZACAO,
    durationDetail: '2 a 4 dias',
    yearCreated: 1988,
    ageRange: null,
    annualParticipants: null,
    monthlyCost: null,
    objectives: 'Líderes que caminham em missão',
    responsiblePerson: null,
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: 37.0902, lng: -95.7129
  },
  {
    id: 2,
    name: 'SOAR Winnipeg',
    country: 'Canada',
    region: 'América do Norte',
    duration: DURATION.MOBILIZACAO,
    durationDetail: '2 a 4 dias',
    yearCreated: 1999,
    ageRange: null,
    annualParticipants: 1000,
    monthlyCost: 450,
    objectives: 'Líderes que caminham em missão',
    responsiblePerson: 'Tammy',
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: 56.1304, lng: -106.3468
  },
  {
    id: 3,
    name: 'SOAR Manitoba',
    country: 'Canada',
    region: 'América do Norte',
    duration: DURATION.MOBILIZACAO,
    durationDetail: '2 a 4 dias',
    yearCreated: 1999,
    ageRange: null,
    annualParticipants: null,
    monthlyCost: null,
    objectives: 'Líderes que caminham em missão',
    responsiblePerson: 'Tammy + líderes MB',
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: 56.1304, lng: -106.3468
  },
  {
    id: 4,
    name: 'SOAR Saskatoon',
    country: 'Canada',
    region: 'América do Norte',
    duration: DURATION.MOBILIZACAO,
    durationDetail: '2 a 4 dias',
    yearCreated: 1999,
    ageRange: null,
    annualParticipants: null,
    monthlyCost: null,
    objectives: 'Líderes que caminham em missão',
    responsiblePerson: 'Ryan/Terri Epp',
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: 56.1304, lng: -106.3468
  },

  // Programa #2 — FOCUS
  {
    id: 5,
    name: 'FOCUS',
    country: 'Canada',
    region: 'América do Norte',
    duration: DURATION.MEDIO,
    durationDetail: '6 meses',
    yearCreated: 2021,
    ageRange: '22 a 70',
    annualParticipants: 13,
    monthlyCost: 3000,
    objectives: 'Pessoas chamadas a servir a missão',
    responsiblePerson: 'Carol Letkeman',
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: 56.1304, lng: -106.3468
  },

  // Programa #3 — ACTION (3 variações)
  {
    id: 6,
    name: 'ACTION',
    country: 'Canada',
    region: 'América do Norte',
    duration: DURATION.LONGO,
    durationDetail: '8 meses',
    yearCreated: 1990,
    ageRange: '18 a 24',
    annualParticipants: 18,
    monthlyCost: 5000,
    objectives: 'Jovens cristãos de igrejas locais',
    responsiblePerson: 'Ryan/Terri Epp',
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: 56.1304, lng: -106.3468
  },
  {
    id: 7,
    name: 'ACTION',
    country: 'Panama',
    region: 'América Central',
    duration: DURATION.LONGO,
    durationDetail: '8 meses',
    yearCreated: 1994,
    ageRange: '18 a 24',
    annualParticipants: null,
    monthlyCost: 5000,
    objectives: 'Jovens cristãos de igrejas locais',
    responsiblePerson: 'Ryan/Terri Epp',
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: 8.538, lng: -80.7821
  },

  // Programa #4 — ANTIOCH SCHOOL
  {
    id: 9,
    name: 'ANTIOCH SCHOOL',
    country: 'Middle East',
    region: 'Oriente Médio / Norte da África',
    duration: DURATION.MOBILIZACAO,
    durationDetail: '5 a 7 dias',
    yearCreated: 2025,
    ageRange: null,
    annualParticipants: 40,
    monthlyCost: null,
    objectives: 'Pastores e líderes que desejam se mover em missão',
    responsiblePerson: 'Nascer Qahtani',
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: 29.3117, lng: 47.4818
  },

  // Programa #5 — Escola Lucas 10
  {
    id: 10,
    name: 'Escola Lucas 10',
    country: 'Canada',
    region: 'América do Norte',
    duration: DURATION.MOBILIZACAO,
    durationDetail: '3 dias',
    yearCreated: 2025,
    ageRange: null,
    annualParticipants: 100,
    monthlyCost: 0,
    objectives: 'Cristãos de igrejas locais',
    responsiblePerson: 'Derek Parenteau',
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: 56.1304, lng: -106.3468
  },

  // Programa #6 — DMM
  {
    id: 11,
    name: 'DMM',
    country: 'Canada',
    region: 'América do Norte',
    duration: DURATION.MOBILIZACAO,
    durationDetail: '5 a 7 dias',
    yearCreated: 1997,
    ageRange: null,
    annualParticipants: 20,
    monthlyCost: 500,
    objectives: 'Cristãos com visão e compromisso na missão',
    responsiblePerson: 'Derek Parenteau',
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: 56.1304, lng: -106.3468
  },

  // Programa #7 — ADIME MAS
  {
    id: 12,
    name: 'ADIME MAS',
    country: 'Mexico',
    region: 'América do Norte',
    duration: DURATION.CURTO,
    durationDetail: '3 semanas',
    yearCreated: 2007,
    ageRange: '18+',
    annualParticipants: 11,
    monthlyCost: 316,
    objectives: 'Mobilizar pessoas para a grande missão',
    responsiblePerson: 'Jorge Enrique Guzmán Ríos',
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: 23.6345, lng: -102.5528
  },

  // Programa #8 — HADIME RAÍCES
  {
    id: 13,
    name: 'HADIME RAÍCES',
    country: 'Mexico',
    region: 'América do Norte',
    duration: DURATION.MEDIO,
    durationDetail: '6 meses',
    yearCreated: 2007,
    ageRange: '20+',
    annualParticipants: 12,
    monthlyCost: 380,
    objectives: 'Jovens adultos dispostos a servir a missão',
    responsiblePerson: 'Tomas Vidal',
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: 23.6345, lng: -102.5528
  },

  // Programa #9 — ZOE PURA VIDA
  {
    id: 14,
    name: 'ZOE PURA VIDA',
    country: 'Costa Rica',
    region: 'América Central',
    duration: DURATION.MOBILIZACAO,
    durationDetail: '1 semana',
    yearCreated: 2025,
    ageRange: '16 a 25',
    annualParticipants: 100,
    monthlyCost: 120,
    objectives: 'Grupos de jovens de igrejas locais',
    responsiblePerson: 'Danilo Ventura',
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: 9.7489, lng: -83.7534
  },

  // Programa #10 — ZOE PURA VIDA Adolescentes
  {
    id: 15,
    name: 'ZOE PURA Adolescentes',
    country: 'Costa Rica',
    region: 'América Central',
    duration: DURATION.MOBILIZACAO,
    durationDetail: '1 semana',
    yearCreated: 2026,
    ageRange: '12 a 15',
    annualParticipants: 60,
    monthlyCost: 120,
    objectives: 'Grupos de adolescentes de igrejas',
    responsiblePerson: 'Danilo Ventura',
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: 9.7489, lng: -83.7534
  },

  // Programa #11 — ZOE PURA VIDA Crianças
  {
    id: 16,
    name: 'ZOE PURA VIDA Crianças',
    country: 'Costa Rica',
    region: 'América Central',
    duration: DURATION.MOBILIZACAO,
    durationDetail: '3 dias',
    yearCreated: 2026,
    ageRange: '8 a 11',
    annualParticipants: 60,
    monthlyCost: 50,
    objectives: 'Crianças e professores de igrejas',
    responsiblePerson: 'Danilo Ventura',
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: 9.7489, lng: -83.7534
  },

  // Programa #12 — DMI MEXICO
  {
    id: 17,
    name: 'DMI - MEXICO',
    country: 'Mexico',
    region: 'América do Norte',
    duration: DURATION.MOBILIZACAO,
    durationDetail: '5 dias',
    yearCreated: 2002,
    ageRange: null,
    annualParticipants: 955,
    monthlyCost: null,
    objectives: 'Cristãos dispostos a evangelizar pessoas',
    responsiblePerson: 'Victor Davila',
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: 23.6345, lng: -102.5528
  },

  // Programa #13 — ESLA
  {
    id: 18,
    name: 'ESLA',
    country: 'Brazil',
    region: 'América do Sul',
    duration: DURATION.MEDIO,
    durationDetail: '6 meses',
    yearCreated: 2018,
    ageRange: '18+',
    annualParticipants: 20,
    monthlyCost: 316,
    objectives: 'Líderes vocacionados ao Ministério',
    responsiblePerson: 'Emerson Cardoso',
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: -14.235, lng: -51.9253
  },

  // Programa #14 — DIP
  {
    id: 19,
    name: 'DIP',
    country: 'Brazil',
    region: 'América do Sul',
    duration: DURATION.LONGO,
    durationDetail: '11 meses',
    yearCreated: 2017,
    ageRange: '18 a 26',
    annualParticipants: 15,
    monthlyCost: 255,
    objectives: 'Jovens que desejam ter uma experiência missionária',
    responsiblePerson: 'Emerson Cardoso',
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: -14.235, lng: -51.9253
  },

  // Programa #15 — ZOE Mega Vida
  {
    id: 20,
    name: 'ZOE Mega Vida',
    country: 'Brazil',
    region: 'América do Sul',
    duration: DURATION.CURTO,
    durationDetail: '20 dias',
    yearCreated: 2016,
    ageRange: '17+',
    annualParticipants: 2200,
    monthlyCost: 138,
    objectives: 'Jovens que desejam doar suas férias para missão',
    responsiblePerson: 'Muniz Cardoso',
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: -14.235, lng: -51.9253
  },

  // Programa #16 — ZOE Disciples
  {
    id: 21,
    name: 'ZOE Disciples',
    country: 'Brazil',
    region: 'América do Sul',
    duration: DURATION.CURTO,
    durationDetail: '10 dias',
    yearCreated: 2024,
    ageRange: '12 a 16',
    annualParticipants: 90,
    monthlyCost: 118,
    objectives: 'Adolescentes de igrejas locais',
    responsiblePerson: 'Muniz Cardoso',
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: -14.235, lng: -51.9253
  },

  // Programa #17 — ZOE Kids
  {
    id: 22,
    name: 'ZOE Kids',
    country: 'Brazil',
    region: 'América do Sul',
    duration: DURATION.MOBILIZACAO,
    durationDetail: '5 dias',
    yearCreated: 2017,
    ageRange: '4 a 11',
    annualParticipants: 60,
    monthlyCost: 89,
    objectives: 'Crianças membros de igrejas locais',
    responsiblePerson: 'Muniz Cardoso',
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: -14.235, lng: -51.9253
  },

  // Programa #18 — EVERY CHURCH CAN (Brasil / América Latina)
  {
    id: 23,
    name: 'EVERY CHURCH CAN',
    country: 'Brazil',
    region: 'América do Sul',
    duration: DURATION.MOBILIZACAO,
    durationDetail: '2 dias',
    yearCreated: 2023,
    ageRange: null,
    annualParticipants: 6500,
    monthlyCost: null,
    objectives: 'Igrejas e convenções de igrejas',
    responsiblePerson: 'Emerson Cardoso',
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: -14.235, lng: -51.9253
  },

  // Programa #19 — METANOIA
  {
    id: 24,
    name: 'METANOIA',
    country: 'Brazil',
    region: 'América do Sul',
    duration: DURATION.CURTO,
    durationDetail: '15 dias',
    yearCreated: 2015,
    ageRange: '15 a 25',
    annualParticipants: 1500,
    monthlyCost: 293,
    objectives: 'Jovens que desejam ter uma experiência missionária',
    responsiblePerson: 'Elise Esau / Osmar Morales',
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: -14.235, lng: -51.9253
  },

  // Programa #20 — RADICAIS
  {
    id: 25,
    name: 'RADICAIS',
    country: 'Brazil',
    region: 'América do Sul',
    duration: DURATION.MEDIO,
    durationDetail: '3 meses',
    yearCreated: 2023,
    ageRange: '18+',
    annualParticipants: 4,
    monthlyCost: 250,
    objectives: 'Jovens que já têm experiência missionária',
    responsiblePerson: 'Emerson Cardoso',
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: -14.235, lng: -51.9253
  },

  // Programa #21 — DMI COLOMBIA
  {
    id: 29,
    name: 'DMI COLOMBIA',
    country: 'Colombia',
    region: 'América do Sul',
    duration: DURATION.CURTO,
    durationDetail: '15 dias',
    yearCreated: 2012,
    ageRange: '15+',
    annualParticipants: 2000,
    monthlyCost: 18000,
    objectives: 'Cristãos de igrejas locais',
    responsiblePerson: 'Jose Prada',
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: 4.5709, lng: -74.2973
  },

  // Programa #25 — DMI PANAMA
  {
    id: 30,
    name: 'DMI PANAMA',
    country: 'Panama',
    region: 'América Central',
    duration: DURATION.CURTO,
    durationDetail: '2 semanas',
    yearCreated: 1986,
    ageRange: '6+',
    annualParticipants: 960,
    monthlyCost: 9000,
    objectives: 'Cristãos de igrejas locais',
    responsiblePerson: 'Marco Aurelio',
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: 8.538, lng: -80.7821
  },

  // Programa #26 — DMI Costa Rica
  {
    id: 31,
    name: 'DMI Costa Rica',
    country: 'Costa Rica',
    region: 'América Central',
    duration: DURATION.CURTO,
    durationDetail: '2 semanas',
    yearCreated: 1986,
    ageRange: '6+',
    annualParticipants: 820,
    monthlyCost: 8500,
    objectives: 'Cristãos de igrejas locais',
    responsiblePerson: 'Marco Aurelio',
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: 9.7489, lng: -83.7534
  },

  // Programa #27 — DMI NICARAGUA
  {
    id: 32,
    name: 'DMI NICARAGUA',
    country: 'Nicaragua',
    region: 'América Central',
    duration: DURATION.CURTO,
    durationDetail: '2 semanas',
    yearCreated: 1986,
    ageRange: '6+',
    annualParticipants: 1620,
    monthlyCost: 8500,
    objectives: 'Cristãos de igrejas locais',
    responsiblePerson: 'Marco Aurelio',
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: 12.8654, lng: -85.2072
  },

  // Programa #28 — DMI HONDURAS
  {
    id: 33,
    name: 'DMI HONDURAS',
    country: 'Honduras',
    region: 'América Central',
    duration: DURATION.CURTO,
    durationDetail: '2 semanas',
    yearCreated: 1986,
    ageRange: '6+',
    annualParticipants: 972,
    monthlyCost: 8000,
    objectives: 'Cristãos de igrejas locais',
    responsiblePerson: 'Marco Aurelio',
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: 15.1999, lng: -86.2419
  },

  // Programa #29 — DMI EL SALVADOR
  {
    id: 34,
    name: 'DMI EL SALVADOR',
    country: 'El Salvador',
    region: 'América Central',
    duration: DURATION.CURTO,
    durationDetail: '2 semanas',
    yearCreated: 1986,
    ageRange: '6+',
    annualParticipants: 802,
    monthlyCost: 8500,
    objectives: 'Cristãos de igrejas locais',
    responsiblePerson: 'Marco Aurelio',
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: 13.7942, lng: -88.8965
  },

  // Programa #30 — DMI GUATEMALA
  {
    id: 35,
    name: 'DMI GUATEMALA',
    country: 'Guatemala',
    region: 'América Central',
    duration: DURATION.CURTO,
    durationDetail: '2 semanas',
    yearCreated: 1986,
    ageRange: '6+',
    annualParticipants: 873,
    monthlyCost: 8500,
    objectives: 'Cristãos de igrejas locais',
    responsiblePerson: 'Marco Aurelio',
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: 15.7835, lng: -90.2308
  },

  // Programa #31 — Escola T. Intertribal Yavisa
  {
    id: 36,
    name: 'Escola T. Intertribal Yavisa',
    country: 'Panama',
    region: 'América Central',
    duration: DURATION.MEDIO,
    durationDetail: '6 meses',
    yearCreated: 2005,
    ageRange: '18 a 70',
    annualParticipants: 15,
    monthlyCost: 200,
    objectives: 'Líderes membros de igrejas locais',
    responsiblePerson: 'Dalecio / Oberlin Mepaquito',
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: 8.538, lng: -80.7821
  },

  // Programa #29 — EVERY CHURCH CAN Chile
  {
    id: 39,
    name: 'EVERY CHURCH CAN',
    country: 'Chile',
    region: 'América do Sul',
    duration: DURATION.MOBILIZACAO,
    durationDetail: '2 a 4 dias',
    yearCreated: 2025,
    ageRange: '14+',
    annualParticipants: 380,
    monthlyCost: null,
    objectives: 'Pastores e líderes cristãos',
    responsiblePerson: 'Emerson Cardoso',
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: -35.675, lng: -71.543
  },

  // Programa #35 — GPS Bolivia
  {
    id: 40,
    name: 'GPS',
    country: 'Bolivia',
    region: 'América do Sul',
    duration: DURATION.CURTO,
    durationDetail: '3 a 30 dias',
    yearCreated: 2009,
    ageRange: '15 a 30',
    annualParticipants: 135,
    monthlyCost: 100,
    objectives: 'Jovens e membros de igrejas locais',
    responsiblePerson: 'Estevan Gonzales',
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: -16.290, lng: -63.5887
  },

  // Programa #33 — Imersión (Paraguay)
  {
    id: 41,
    name: 'Imersión',
    country: 'Paraguay',
    region: 'América do Sul',
    duration: DURATION.CURTO,
    durationDetail: '10 a 30 dias',
    yearCreated: 2025,
    ageRange: '18+',
    annualParticipants: 160,
    monthlyCost: 160,
    objectives: 'Membros de igrejas que desejam evangelizar e fazer discípulos',
    responsiblePerson: 'Rodrigo L. Pereira',
    website: '',
    instagram: '',
    strategicFocuses: [],
    platformFocuses: [],
    qualitySeal: false,
    lat: -23.443, lng: -58.4438
  }
];

// ============================================================
// DATA HELPERS
// ============================================================

// Versão do seed — incrementar sempre que PROGRAMS_DB mudar
const SEED_VERSION = 4;

function getAllPrograms() {
  // Se a versão do seed mudou, descarta localStorage e recarrega com dados novos
  const storedVersion = parseInt(localStorage.getItem('multiply_seed_version') || '0', 10);
  if (storedVersion < SEED_VERSION) {
    const seed = [...PROGRAMS_DB];
    localStorage.setItem('multiply_programs', JSON.stringify(seed));
    localStorage.setItem('multiply_seed_version', String(SEED_VERSION));
    return seed;
  }

  const stored = localStorage.getItem('multiply_programs');
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch(e) {}
  }
  // Nothing valid in localStorage — seed with real data
  const seed = [...PROGRAMS_DB];
  localStorage.setItem('multiply_programs', JSON.stringify(seed));
  localStorage.setItem('multiply_seed_version', String(SEED_VERSION));
  return seed;
}

function savePrograms(programs) {
  localStorage.setItem('multiply_programs', JSON.stringify(programs));
}

function addProgram(program) {
  const programs = getAllPrograms();
  program.id = Date.now();
  programs.push(program);
  savePrograms(programs);
  return program;
}

function updateProgram(id, updates) {
  const programs = getAllPrograms();
  const idx = programs.findIndex(p => p.id == id);
  if (idx !== -1) {
    programs[idx] = { ...programs[idx], ...updates };
    savePrograms(programs);
    return programs[idx];
  }
  return null;
}

function toggleQualitySeal(id) {
  const programs = getAllPrograms();
  const idx = programs.findIndex(p => p.id == id);
  if (idx !== -1) {
    programs[idx].qualitySeal = !programs[idx].qualitySeal;
    savePrograms(programs);
    return programs[idx];
  }
  return null;
}

function getStats(programs) {
  const all = programs || getAllPrograms();
  const byDuration = {
    mobilizacao: all.filter(p => p.duration === DURATION.MOBILIZACAO),
    curto:       all.filter(p => p.duration === DURATION.CURTO),
    medio:       all.filter(p => p.duration === DURATION.MEDIO),
    longo:       all.filter(p => p.duration === DURATION.LONGO)
  };
  const countByCountry = {};
  all.forEach(p => {
    countByCountry[p.country] = (countByCountry[p.country] || 0) + 1;
  });
  return {
    total: all.length,
    byDuration,
    countByCountry,
    withSeal: all.filter(p => p.qualitySeal).length,
    totalParticipants: all.reduce((s, p) => s + (p.annualParticipants || 0), 0)
  };
}

// Export
if (typeof module !== 'undefined') {
  module.exports = { PROGRAMS_DB, DURATION, STRATEGIC_FOCUSES, PLATFORM_FOCUSES, COUNTRY_COORDS,
    getAllPrograms, savePrograms, addProgram, updateProgram, toggleQualitySeal, getStats };
}
