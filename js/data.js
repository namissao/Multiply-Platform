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
  'Jordan':      { lat: 30.5852, lng:    36.2384 },
  'Philippines': { lat: 12.8797, lng:   121.7740 },
  'Thailand':    { lat: 15.8700, lng:   100.9925 }
};

// ============================================================
// PROGRAM DATABASE — 37 programs
// ============================================================
const PROGRAMS_DB = [

  // ── MOBILIZAÇÃO (1–7 days) ──────────────────────────────

  {
    id: 1,
    name: 'Semana Missionária',
    country: 'Brazil',
    region: 'América do Sul',
    duration: DURATION.MOBILIZACAO,
    durationDetail: '1 semana',
    yearCreated: 2010,
    ageRange: '15–35',
    annualParticipants: 500,
    monthlyCost: null,
    objectives: 'Mobilização missionária local',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Mobilizing', 'Witnessing'],
    platformFocuses: ['Mobilization', 'Discipleship'],
    qualitySeal: false,
    lat: -14.235, lng: -51.9253
  },
  {
    id: 2,
    name: 'Visão Global',
    country: 'Brazil',
    region: 'América do Sul',
    duration: DURATION.MOBILIZACAO,
    durationDetail: '3–5 dias',
    yearCreated: 2008,
    ageRange: '18–40',
    annualParticipants: 300,
    monthlyCost: null,
    objectives: 'Despertar visão missionária transcultural',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Mobilizing', 'Extending'],
    platformFocuses: ['Mobilization', 'Cross-cultural'],
    qualitySeal: false,
    lat: -14.235, lng: -51.9253
  },
  {
    id: 3,
    name: 'Fim de Semana Missionário',
    country: 'Canada',
    region: 'América do Norte',
    duration: DURATION.MOBILIZACAO,
    durationDetail: '2–3 dias',
    yearCreated: 2012,
    ageRange: '16–45',
    annualParticipants: 200,
    monthlyCost: null,
    objectives: 'Mobilização de jovens para missões',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Mobilizing', 'Gathering'],
    platformFocuses: ['Mobilization'],
    qualitySeal: false,
    lat: 56.1304, lng: -106.3468
  },
  {
    id: 4,
    name: 'Missões em Foco',
    country: 'Canada',
    region: 'América do Norte',
    duration: DURATION.MOBILIZACAO,
    durationDetail: '1 semana',
    yearCreated: 2015,
    ageRange: '18–50',
    annualParticipants: 150,
    monthlyCost: null,
    objectives: 'Treinamento intensivo de mobilização',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Mobilizing', 'Connecting'],
    platformFocuses: ['Mobilization', 'Networking'],
    qualitySeal: false,
    lat: 56.1304, lng: -106.3468
  },
  {
    id: 5,
    name: 'Semana de Missão Urbana',
    country: 'Mexico',
    region: 'América Central',
    duration: DURATION.MOBILIZACAO,
    durationDetail: '1 semana',
    yearCreated: 2014,
    ageRange: '15–30',
    annualParticipants: 400,
    monthlyCost: null,
    objectives: 'Missão em contexto urbano',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Witnessing', 'Gathering'],
    platformFocuses: ['Discipleship', 'Church Planting'],
    qualitySeal: false,
    lat: 23.6345, lng: -102.5528
  },
  {
    id: 6,
    name: 'Campus Misionero',
    country: 'Mexico',
    region: 'América Central',
    duration: DURATION.MOBILIZACAO,
    durationDetail: '5 dias',
    yearCreated: 2016,
    ageRange: '18–28',
    annualParticipants: 250,
    monthlyCost: null,
    objectives: 'Mobilização em contexto universitário',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Mobilizing', 'Equipping'],
    platformFocuses: ['Mobilization', 'Leadership Development'],
    qualitySeal: false,
    lat: 23.6345, lng: -102.5528
  },
  {
    id: 7,
    name: 'Semana Misionera Guatemala',
    country: 'Guatemala',
    region: 'América Central',
    duration: DURATION.MOBILIZACAO,
    durationDetail: '1 semana',
    yearCreated: 2011,
    ageRange: '14–35',
    annualParticipants: 350,
    monthlyCost: null,
    objectives: 'Mobilização missionária local e regional',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Mobilizing', 'Witnessing'],
    platformFocuses: ['Mobilization', 'Church Planting'],
    qualitySeal: false,
    lat: 15.7835, lng: -90.2308
  },
  {
    id: 8,
    name: 'Visión 20/20',
    country: 'Colombia',
    region: 'América do Sul',
    duration: DURATION.MOBILIZACAO,
    durationDetail: '3 dias',
    yearCreated: 2017,
    ageRange: '18–40',
    annualParticipants: 180,
    monthlyCost: null,
    objectives: 'Visão para nações não alcançadas',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Extending', 'Partnering'],
    platformFocuses: ['Mobilization', 'Cross-cultural'],
    qualitySeal: false,
    lat: 4.5709, lng: -74.2973
  },
  {
    id: 9,
    name: 'Every Church Can',
    country: 'Brazil',
    region: 'América do Sul',
    duration: DURATION.MOBILIZACAO,
    durationDetail: '2–3 dias',
    yearCreated: 2013,
    ageRange: '25–60',
    annualParticipants: 600,
    monthlyCost: null,
    objectives: 'Capacitar igrejas locais para missões',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Mobilizing', 'Multiplying', 'Growing'],
    platformFocuses: ['Church Planting', 'Discipleship'],
    qualitySeal: true,
    lat: -14.235, lng: -51.9253
  },
  {
    id: 10,
    name: 'Every Church Can',
    country: 'Chile',
    region: 'América do Sul',
    duration: DURATION.MOBILIZACAO,
    durationDetail: '2–3 dias',
    yearCreated: 2015,
    ageRange: '25–60',
    annualParticipants: 300,
    monthlyCost: null,
    objectives: 'Capacitar igrejas locais para missões',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Mobilizing', 'Multiplying'],
    platformFocuses: ['Church Planting', 'Discipleship'],
    qualitySeal: false,
    lat: -35.675, lng: -71.543
  },

  // ── CURTO PRAZO (8 days – 1 month) ──────────────────────

  {
    id: 11,
    name: 'JUCUM Brasil',
    country: 'Brazil',
    region: 'América do Sul',
    duration: DURATION.CURTO,
    durationDetail: '2 semanas',
    yearCreated: 2000,
    ageRange: '17–35',
    annualParticipants: 800,
    monthlyCost: 1200,
    objectives: 'Treinamento missionário prático em campo',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Equipping', 'Extending', 'Witnessing'],
    platformFocuses: ['Missionary Training', 'Cross-cultural'],
    qualitySeal: true,
    lat: -14.235, lng: -51.9253
  },
  {
    id: 12,
    name: 'Projeto Moriah',
    country: 'Brazil',
    region: 'América do Sul',
    duration: DURATION.CURTO,
    durationDetail: '3–4 semanas',
    yearCreated: 2005,
    ageRange: '18–35',
    annualParticipants: 200,
    monthlyCost: 800,
    objectives: 'Treinamento missionário transcultural',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Extending', 'Multiplying', 'Equipping'],
    platformFocuses: ['Missionary Training', 'Cross-cultural'],
    qualitySeal: false,
    lat: -14.235, lng: -51.9253
  },
  {
    id: 13,
    name: 'Viaje Misionero',
    country: 'Mexico',
    region: 'América Central',
    duration: DURATION.CURTO,
    durationDetail: '2 semanas',
    yearCreated: 2009,
    ageRange: '16–30',
    annualParticipants: 150,
    monthlyCost: 600,
    objectives: 'Experiência missionária curta intensiva',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Witnessing', 'Equipping'],
    platformFocuses: ['Missionary Training', 'Discipleship'],
    qualitySeal: false,
    lat: 23.6345, lng: -102.5528
  },
  {
    id: 14,
    name: 'Expedición Misionera',
    country: 'Guatemala',
    region: 'América Central',
    duration: DURATION.CURTO,
    durationDetail: '2–3 semanas',
    yearCreated: 2012,
    ageRange: '18–35',
    annualParticipants: 120,
    monthlyCost: 700,
    objectives: 'Treinamento em contexto cultural diferente',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Extending', 'Partnering'],
    platformFocuses: ['Cross-cultural', 'Missionary Training'],
    qualitySeal: false,
    lat: 15.7835, lng: -90.2308
  },
  {
    id: 15,
    name: 'ACTION',
    country: 'Canada',
    region: 'América do Norte',
    duration: DURATION.CURTO,
    durationDetail: '1 mês',
    yearCreated: 1998,
    ageRange: '18–28',
    annualParticipants: 400,
    monthlyCost: 1500,
    objectives: 'Treinamento intensivo para missões transculturais',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Equipping', 'Extending', 'Mobilizing'],
    platformFocuses: ['Missionary Training', 'Cross-cultural', 'Leadership Development'],
    qualitySeal: true,
    lat: 56.1304, lng: -106.3468
  },
  {
    id: 16,
    name: 'ACTION',
    country: 'Panama',
    region: 'América Central',
    duration: DURATION.CURTO,
    durationDetail: '1 mês',
    yearCreated: 2008,
    ageRange: '18–28',
    annualParticipants: 200,
    monthlyCost: 1200,
    objectives: 'Treinamento intensivo para missões transculturais',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Equipping', 'Extending', 'Mobilizing'],
    platformFocuses: ['Missionary Training', 'Cross-cultural'],
    qualitySeal: false,
    lat: 8.538, lng: -80.7821
  },
  {
    id: 17,
    name: 'Treinamento de Curto Prazo Honduras',
    country: 'Honduras',
    region: 'América Central',
    duration: DURATION.CURTO,
    durationDetail: '3 semanas',
    yearCreated: 2013,
    ageRange: '18–40',
    annualParticipants: 90,
    monthlyCost: 500,
    objectives: 'Capacitação ministerial e missionária',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Equipping', 'Growing'],
    platformFocuses: ['Leadership Development', 'Church Planting'],
    qualitySeal: false,
    lat: 15.1999, lng: -86.2419
  },
  {
    id: 18,
    name: 'Programa Misionero Costa Rica',
    country: 'Costa Rica',
    region: 'América Central',
    duration: DURATION.CURTO,
    durationDetail: '1 mês',
    yearCreated: 2010,
    ageRange: '20–45',
    annualParticipants: 80,
    monthlyCost: 900,
    objectives: 'Treinamento missionário com foco em Ásia',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Extending', 'Equipping'],
    platformFocuses: ['Missionary Training', 'Cross-cultural'],
    qualitySeal: false,
    lat: 9.7489, lng: -83.7534
  },
  {
    id: 19,
    name: 'Envío Misionero Nicaragua',
    country: 'Nicaragua',
    region: 'América Central',
    duration: DURATION.CURTO,
    durationDetail: '2 semanas',
    yearCreated: 2014,
    ageRange: '18–35',
    annualParticipants: 60,
    monthlyCost: 400,
    objectives: 'Capacitação e envio missionário regional',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Mobilizing', 'Partnering'],
    platformFocuses: ['Mobilization', 'Networking'],
    qualitySeal: false,
    lat: 12.8654, lng: -85.2072
  },
  {
    id: 20,
    name: 'Treinamento Missionário El Salvador',
    country: 'El Salvador',
    region: 'América Central',
    duration: DURATION.CURTO,
    durationDetail: '3 semanas',
    yearCreated: 2015,
    ageRange: '18–40',
    annualParticipants: 70,
    monthlyCost: 450,
    objectives: 'Treinamento de líderes para missão local',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Equipping', 'Growing'],
    platformFocuses: ['Leadership Development'],
    qualitySeal: false,
    lat: 13.7942, lng: -88.8965
  },
  {
    id: 21,
    name: 'GPS — Generación Proclamando Salvación',
    country: 'Bolivia',
    region: 'América do Sul',
    duration: DURATION.CURTO,
    durationDetail: '2 semanas',
    yearCreated: 2015,
    ageRange: '18–35',
    annualParticipants: 120,
    monthlyCost: 500,
    objectives: 'Treinamento missionário para jovens com foco em evangelismo e discipulado',
    responsiblePerson: 'Daniel Mendoza',
    website: 'www.gps.bo',
    instagram: '@gpsmisiones',
    strategicFocuses: ['Witnessing', 'Equipping', 'Multiplying'],
    platformFocuses: ['Missionary Training', 'Discipleship'],
    qualitySeal: false,
    lat: -16.290, lng: -63.5887
  },
  {
    id: 22,
    name: 'Treinamento Chile',
    country: 'Chile',
    region: 'América do Sul',
    duration: DURATION.CURTO,
    durationDetail: '1 mês',
    yearCreated: 2016,
    ageRange: '18–35',
    annualParticipants: 100,
    monthlyCost: 700,
    objectives: 'Capacitação para missões locais e transculturais',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Equipping', 'Mobilizing'],
    platformFocuses: ['Missionary Training'],
    qualitySeal: false,
    lat: -35.675, lng: -71.543
  },
  {
    id: 23,
    name: 'Treinamento Paraguay',
    country: 'Paraguay',
    region: 'América do Sul',
    duration: DURATION.CURTO,
    durationDetail: '3 semanas',
    yearCreated: 2018,
    ageRange: '18–40',
    annualParticipants: 50,
    monthlyCost: 350,
    objectives: 'Treinamento ministerial e missionário',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Equipping', 'Growing'],
    platformFocuses: ['Leadership Development'],
    qualitySeal: false,
    lat: -23.443, lng: -58.4438
  },

  // ── MÉDIO PRAZO (1–6 months) ─────────────────────────────

  {
    id: 24,
    name: 'Escola de Missões Brasil',
    country: 'Brazil',
    region: 'América do Sul',
    duration: DURATION.MEDIO,
    durationDetail: '3 meses',
    yearCreated: 2003,
    ageRange: '20–45',
    annualParticipants: 80,
    monthlyCost: 1800,
    objectives: 'Formação missionária com base teológica e prática',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Equipping', 'Extending', 'Partnering'],
    platformFocuses: ['Missionary Training', 'Leadership Development', 'Cross-cultural'],
    qualitySeal: true,
    lat: -14.235, lng: -51.9253
  },
  {
    id: 25,
    name: 'Escola de Missões Canada',
    country: 'Canada',
    region: 'América do Norte',
    duration: DURATION.MEDIO,
    durationDetail: '4 meses',
    yearCreated: 2001,
    ageRange: '20–50',
    annualParticipants: 60,
    monthlyCost: 2500,
    objectives: 'Formação missionária completa com enfoque transcultural',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Equipping', 'Multiplying', 'Extending'],
    platformFocuses: ['Missionary Training', 'Cross-cultural', 'Sustainability'],
    qualitySeal: true,
    lat: 56.1304, lng: -106.3468
  },
  {
    id: 26,
    name: 'Programa de Formación USA',
    country: 'USA',
    region: 'América do Norte',
    duration: DURATION.MEDIO,
    durationDetail: '6 meses',
    yearCreated: 1999,
    ageRange: '22–55',
    annualParticipants: 50,
    monthlyCost: 3000,
    objectives: 'Treinamento de líderes para plantio de igrejas',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Equipping', 'Multiplying', 'Growing'],
    platformFocuses: ['Church Planting', 'Leadership Development'],
    qualitySeal: true,
    lat: 37.0902, lng: -95.7129
  },
  {
    id: 27,
    name: 'Escuela de Misiones Colombia',
    country: 'Colombia',
    region: 'América do Sul',
    duration: DURATION.MEDIO,
    durationDetail: '3 meses',
    yearCreated: 2007,
    ageRange: '18–40',
    annualParticipants: 70,
    monthlyCost: 1200,
    objectives: 'Formação de missionários para Oriente Médio e Ásia',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Extending', 'Equipping', 'Partnering'],
    platformFocuses: ['Missionary Training', 'Cross-cultural'],
    qualitySeal: false,
    lat: 4.5709, lng: -74.2973
  },
  {
    id: 28,
    name: 'Programa Oriente Médio',
    country: 'Jordan',
    region: 'Oriente Médio / Ásia',
    duration: DURATION.MEDIO,
    durationDetail: '4 meses',
    yearCreated: 2010,
    ageRange: '22–45',
    annualParticipants: 20,
    monthlyCost: 2000,
    objectives: 'Treinamento contextualizado para ministério em contexto islâmico',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Extending', 'Witnessing', 'Equipping'],
    platformFocuses: ['Cross-cultural', 'Missionary Training'],
    qualitySeal: true,
    lat: 30.5852, lng: 36.2384
  },
  {
    id: 29,
    name: 'Treinamento Chile Médio',
    country: 'Chile',
    region: 'América do Sul',
    duration: DURATION.MEDIO,
    durationDetail: '5 meses',
    yearCreated: 2014,
    ageRange: '20–45',
    annualParticipants: 40,
    monthlyCost: 1500,
    objectives: 'Formação de missionários transculturais',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Extending', 'Equipping'],
    platformFocuses: ['Missionary Training', 'Cross-cultural'],
    qualitySeal: false,
    lat: -35.675, lng: -71.543
  },
  {
    id: 30,
    name: 'Escola de Missões Mexico',
    country: 'Mexico',
    region: 'América Central',
    duration: DURATION.MEDIO,
    durationDetail: '3 meses',
    yearCreated: 2012,
    ageRange: '20–40',
    annualParticipants: 55,
    monthlyCost: 1100,
    objectives: 'Treinamento missionário com aplicação prática',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Equipping', 'Extending'],
    platformFocuses: ['Missionary Training'],
    qualitySeal: false,
    lat: 23.6345, lng: -102.5528
  },

  // ── LONGO PRAZO (6+ months) ──────────────────────────────

  {
    id: 31,
    name: 'Programa Longo Prazo USA',
    country: 'USA',
    region: 'América do Norte',
    duration: DURATION.LONGO,
    durationDetail: '1–2 anos',
    yearCreated: 1995,
    ageRange: '22–55',
    annualParticipants: 30,
    monthlyCost: 3500,
    objectives: 'Formação completa de missionários de carreira',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Equipping', 'Extending', 'Multiplying', 'Partnering'],
    platformFocuses: ['Missionary Training', 'Cross-cultural', 'Sustainability', 'Leadership Development'],
    qualitySeal: true,
    lat: 37.0902, lng: -95.7129
  },
  {
    id: 32,
    name: 'Programa Longo Prazo Philippines',
    country: 'Philippines',
    region: 'Oriente Médio / Ásia',
    duration: DURATION.LONGO,
    durationDetail: '1 ano',
    yearCreated: 2008,
    ageRange: '22–45',
    annualParticipants: 15,
    monthlyCost: 1800,
    objectives: 'Treinamento de líderes asiáticos para missão',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Equipping', 'Multiplying', 'Growing'],
    platformFocuses: ['Leadership Development', 'Church Planting'],
    qualitySeal: true,
    lat: 12.8797, lng: 121.774
  },
  {
    id: 33,
    name: 'Programa de Formação Canada',
    country: 'Canada',
    region: 'América do Norte',
    duration: DURATION.LONGO,
    durationDetail: '2 anos',
    yearCreated: 1990,
    ageRange: '22–55',
    annualParticipants: 25,
    monthlyCost: 4000,
    objectives: 'Formação completa para missão transcultural de longo prazo',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Equipping', 'Extending', 'Multiplying'],
    platformFocuses: ['Missionary Training', 'Cross-cultural', 'Leadership Development'],
    qualitySeal: true,
    lat: 56.1304, lng: -106.3468
  },
  {
    id: 34,
    name: 'Programa Longo Prazo Brasil',
    country: 'Brazil',
    region: 'América do Sul',
    duration: DURATION.LONGO,
    durationDetail: '1 ano',
    yearCreated: 2005,
    ageRange: '22–50',
    annualParticipants: 20,
    monthlyCost: 2200,
    objectives: 'Formação de missionários para povos não alcançados',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Extending', 'Equipping', 'Multiplying'],
    platformFocuses: ['Missionary Training', 'Cross-cultural', 'Sustainability'],
    qualitySeal: false,
    lat: -14.235, lng: -51.9253
  },

  // ── ADDITIONAL (from ACTION entries) ──────────────────────
  {
    id: 35,
    name: 'ACTION',
    country: 'USA',
    region: 'América do Norte',
    duration: DURATION.CURTO,
    durationDetail: '1 mês',
    yearCreated: 2000,
    ageRange: '18–28',
    annualParticipants: 300,
    monthlyCost: 1600,
    objectives: 'Treinamento intensivo para missões transculturais',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Equipping', 'Extending', 'Mobilizing'],
    platformFocuses: ['Missionary Training', 'Cross-cultural'],
    qualitySeal: false,
    lat: 37.0902, lng: -95.7129
  },
  {
    id: 36,
    name: 'ACTION',
    country: 'Philippines',
    region: 'Oriente Médio / Ásia',
    duration: DURATION.CURTO,
    durationDetail: '1 mês',
    yearCreated: 2012,
    ageRange: '18–30',
    annualParticipants: 150,
    monthlyCost: 900,
    objectives: 'Treinamento intensivo em contexto asiático',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Equipping', 'Extending'],
    platformFocuses: ['Missionary Training', 'Cross-cultural'],
    qualitySeal: false,
    lat: 12.8797, lng: 121.774
  },
  {
    id: 37,
    name: 'Treinamento Thailand',
    country: 'Thailand',
    region: 'Oriente Médio / Ásia',
    duration: DURATION.CURTO,
    durationDetail: '3 semanas',
    yearCreated: 2018,
    ageRange: '20–40',
    annualParticipants: 30,
    monthlyCost: 1100,
    objectives: 'Capacitação para missão em contexto budista',
    responsiblePerson: '',
    website: '',
    instagram: '',
    strategicFocuses: ['Extending', 'Witnessing'],
    platformFocuses: ['Cross-cultural', 'Missionary Training'],
    qualitySeal: false,
    lat: 15.87, lng: 100.9925
  }
];

// ============================================================
// DATA HELPERS
// ============================================================

function getAllPrograms() {
  const stored = localStorage.getItem('multiply_programs');
  if (stored) {
    try { return JSON.parse(stored); } catch(e) {}
  }
  return [...PROGRAMS_DB];
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
