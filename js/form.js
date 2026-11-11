// ============================================================
// MULTIPLY PLATFORM — FORM LOGIC + i18n (7 languages)
// ============================================================

// ── TRANSLATIONS ──────────────────────────────────────────────
const TRANSLATIONS = {
  'pt-BR': {
    lang: 'pt-BR',
    langName: 'Português',
    title: 'Plataforma Global de Treinamento',
    subtitle: 'Multiply — Rede Global',
    heroTitle: 'Formulário de Afiliação',
    heroSubtitle: 'Registre seu programa de treinamento na Plataforma Global de Treinamento da Multiply.',
    sidebarTitle: 'Por que se afiliar?',
    sidebarItems: [
      'Visibilidade global na rede Multiply',
      'Conexão com outros programas e líderes',
      'Acesso ao Selo de Qualidade da Plataforma',
      'Suporte na cooperação e intercâmbio de estudantes',
      'Alinhamento com o Mapa Estratégico Missionário'
    ],
    // Steps
    step1: 'Identificação', step1desc: 'Dados básicos do programa',
    step2: 'Detalhes', step2desc: 'Perfil e alcance',
    step3: 'Alinhamento', step3desc: 'Conexão estratégica',
    step4: 'Contato', step4desc: 'Responsável',
    // Section titles
    sec1: 'Identificação do Programa',
    sec2: 'Perfil do Programa',
    sec3: 'Alinhamento Estratégico',
    sec4: 'Responsável e Contato',
    // Field labels
    name:         'Nome do Programa',
    namePh:       'Ex: GPS – Generación Proclamando Salvación',
    country:      'País',
    region:       'Região',
    duration:     'Duração do Programa',
    durationOpt:  ['Selecione...', 'Mobilização (1–7 dias)', 'Curto Prazo (8 dias – 1 mês)', 'Médio Prazo (1–6 meses)', 'Longo Prazo (6+ meses)'],
    yearCreated:  'Ano de Criação',
    yearPh:       'Ex: 2015',
    ageRange:     'Faixa Etária dos Participantes',
    agePh:        'Ex: 18–35',
    participants: 'Participantes por Ano (estimado)',
    participantsPh: 'Ex: 120',
    monthlyCost:  'Custo Mensal por Estudante (USD)',
    costPh:       'Ex: 500',
    objectives:   'Objetivos e Descrição do Programa',
    objectivesPh: 'Descreva brevemente os objetivos, metodologia e foco do programa...',
    strategicMap: 'Alinhamento com o Mapa Estratégico (selecione todos que se aplicam)',
    platformFocus:'Focos da Plataforma (selecione todos que se aplicam)',
    responsible:  'Nome do Responsável',
    responsiblePh:'Nome completo',
    email:        'E-mail de Contato',
    emailPh:      'email@exemplo.com',
    website:      'Site do Programa',
    websitePh:    'www.seuprograma.org',
    instagram:    'Instagram',
    instagramPh:  '@seuprograma',
    // Buttons
    btnSubmit:   'Enviar Solicitação',
    btnClear:    'Limpar',
    btnBack:     '← Voltar',
    btnNext:     'Próximo →',
    // Success
    successTitle: 'Solicitação Enviada!',
    successMsg:   'Obrigado por registrar seu programa. Entraremos em contato em breve.',
    successBtn:   'Voltar ao início',
    // Required
    required: 'Campos com * são obrigatórios',
    // Validation
    valRequired: 'Este campo é obrigatório',
    valEmail:    'E-mail inválido',
  },

  'es': {
    lang: 'es',
    langName: 'Español',
    title: 'Plataforma Global de Entrenamiento',
    subtitle: 'Multiply — Red Global',
    heroTitle: 'Formulario de Afiliación',
    heroSubtitle: 'Registra tu programa de entrenamiento en la Plataforma Global de Entrenamiento de Multiply.',
    sidebarTitle: '¿Por qué afiliarse?',
    sidebarItems: [
      'Visibilidad global en la red Multiply',
      'Conexión con otros programas y líderes',
      'Acceso al Sello de Calidad de la Plataforma',
      'Apoyo en cooperación e intercambio de estudiantes',
      'Alineación con el Mapa Estratégico Misionero'
    ],
    step1: 'Identificación', step1desc: 'Datos básicos del programa',
    step2: 'Detalles', step2desc: 'Perfil y alcance',
    step3: 'Alineamiento', step3desc: 'Conexión estratégica',
    step4: 'Contacto', step4desc: 'Responsable',
    sec1: 'Identificación del Programa',
    sec2: 'Perfil del Programa',
    sec3: 'Alineamiento Estratégico',
    sec4: 'Responsable y Contacto',
    name:         'Nombre del Programa',
    namePh:       'Ej: GPS – Generación Proclamando Salvación',
    country:      'País',
    region:       'Región',
    duration:     'Duración del Programa',
    durationOpt:  ['Seleccionar...', 'Movilización (1–7 días)', 'Corto Plazo (8 días – 1 mes)', 'Mediano Plazo (1–6 meses)', 'Largo Plazo (6+ meses)'],
    yearCreated:  'Año de Creación',
    yearPh:       'Ej: 2015',
    ageRange:     'Rango de Edad de los Participantes',
    agePh:        'Ej: 18–35',
    participants: 'Participantes por Año (estimado)',
    participantsPh: 'Ej: 120',
    monthlyCost:  'Costo Mensual por Estudiante (USD)',
    costPh:       'Ej: 500',
    objectives:   'Objetivos y Descripción del Programa',
    objectivesPh: 'Describe brevemente los objetivos, metodología y enfoque del programa...',
    strategicMap: 'Alineación con el Mapa Estratégico (selecciona todos los que apliquen)',
    platformFocus:'Enfoques de la Plataforma (selecciona todos los que apliquen)',
    responsible:  'Nombre del Responsable',
    responsiblePh:'Nombre completo',
    email:        'Correo de Contacto',
    emailPh:      'email@ejemplo.com',
    website:      'Sitio Web del Programa',
    websitePh:    'www.tuprograma.org',
    instagram:    'Instagram',
    instagramPh:  '@tuprograma',
    btnSubmit:   'Enviar Solicitud',
    btnClear:    'Limpiar',
    btnBack:     '← Volver',
    btnNext:     'Siguiente →',
    successTitle: '¡Solicitud Enviada!',
    successMsg:   'Gracias por registrar tu programa. Te contactaremos pronto.',
    successBtn:   'Volver al inicio',
    required: 'Los campos con * son obligatorios',
    valRequired: 'Este campo es obligatorio',
    valEmail:    'Correo inválido',
  },

  'en': {
    lang: 'en',
    langName: 'English',
    title: 'Global Training Platform',
    subtitle: 'Multiply — Global Network',
    heroTitle: 'Affiliation Form',
    heroSubtitle: 'Register your training program in the Multiply Global Training Platform.',
    sidebarTitle: 'Why affiliate?',
    sidebarItems: [
      'Global visibility within the Multiply network',
      'Connection with other programs and leaders',
      'Access to the Platform Quality Seal',
      'Support for student cooperation and exchange',
      'Alignment with the Mission Strategic Map'
    ],
    step1: 'Identification', step1desc: 'Basic program data',
    step2: 'Details', step2desc: 'Profile and reach',
    step3: 'Alignment', step3desc: 'Strategic connection',
    step4: 'Contact', step4desc: 'Program leader',
    sec1: 'Program Identification',
    sec2: 'Program Profile',
    sec3: 'Strategic Alignment',
    sec4: 'Contact Information',
    name:         'Program Name',
    namePh:       'E.g. GPS – Generation Proclaiming Salvation',
    country:      'Country',
    region:       'Region',
    duration:     'Program Duration',
    durationOpt:  ['Select...', 'Mobilization (1–7 days)', 'Short-Term (8 days – 1 month)', 'Medium-Term (1–6 months)', 'Long-Term (6+ months)'],
    yearCreated:  'Year Founded',
    yearPh:       'E.g. 2015',
    ageRange:     'Participant Age Range',
    agePh:        'E.g. 18–35',
    participants: 'Annual Participants (estimated)',
    participantsPh: 'E.g. 120',
    monthlyCost:  'Monthly Cost per Student (USD)',
    costPh:       'E.g. 500',
    objectives:   'Program Objectives and Description',
    objectivesPh: 'Briefly describe the objectives, methodology and focus of the program...',
    strategicMap: 'Alignment with Strategic Map (select all that apply)',
    platformFocus:'Platform Focuses (select all that apply)',
    responsible:  'Program Leader Name',
    responsiblePh:'Full name',
    email:        'Contact Email',
    emailPh:      'email@example.com',
    website:      'Program Website',
    websitePh:    'www.yourprogram.org',
    instagram:    'Instagram',
    instagramPh:  '@yourprogram',
    btnSubmit:   'Submit Application',
    btnClear:    'Clear',
    btnBack:     '← Back',
    btnNext:     'Next →',
    successTitle: 'Application Submitted!',
    successMsg:   'Thank you for registering your program. We will be in touch soon.',
    successBtn:   'Back to home',
    required: 'Fields marked with * are required',
    valRequired: 'This field is required',
    valEmail:    'Invalid email',
  },

  'fr': {
    lang: 'fr',
    langName: 'Français',
    title: 'Plateforme Mondiale de Formation',
    subtitle: 'Multiply — Réseau Mondial',
    heroTitle: "Formulaire d'Affiliation",
    heroSubtitle: 'Enregistrez votre programme de formation sur la Plateforme Mondiale de Formation de Multiply.',
    sidebarTitle: 'Pourquoi s'affilier?',
    sidebarItems: [
      'Visibilité mondiale dans le réseau Multiply',
      'Connexion avec d'autres programmes et leaders',
      'Accès au Sceau de Qualité de la Plateforme',
      'Soutien pour la coopération et les échanges',
      'Alignement avec la Carte Stratégique Missionnaire'
    ],
    step1: 'Identification', step1desc: 'Données de base',
    step2: 'Détails', step2desc: 'Profil et portée',
    step3: 'Alignement', step3desc: 'Connexion stratégique',
    step4: 'Contact', step4desc: 'Responsable',
    sec1: 'Identification du Programme',
    sec2: 'Profil du Programme',
    sec3: 'Alignement Stratégique',
    sec4: 'Responsable et Contact',
    name:         'Nom du Programme',
    namePh:       'Ex: GPS – Génération Proclamant le Salut',
    country:      'Pays',
    region:       'Région',
    duration:     'Durée du Programme',
    durationOpt:  ['Sélectionner...', 'Mobilisation (1–7 jours)', 'Court Terme (8 jours – 1 mois)', 'Moyen Terme (1–6 mois)', 'Long Terme (6+ mois)'],
    yearCreated:  'Année de Création',
    yearPh:       'Ex: 2015',
    ageRange:     'Tranche d'Âge des Participants',
    agePh:        'Ex: 18–35',
    participants: 'Participants par An (estimé)',
    participantsPh: 'Ex: 120',
    monthlyCost:  'Coût Mensuel par Étudiant (USD)',
    costPh:       'Ex: 500',
    objectives:   'Objectifs et Description du Programme',
    objectivesPh: 'Décrivez brièvement les objectifs, la méthodologie et le focus du programme...',
    strategicMap: 'Alignement avec la Carte Stratégique (sélectionnez tout ce qui s'applique)',
    platformFocus:'Axes de la Plateforme (sélectionnez tout ce qui s'applique)',
    responsible:  'Nom du Responsable',
    responsiblePh:'Nom complet',
    email:        'Email de Contact',
    emailPh:      'email@exemple.com',
    website:      'Site Web du Programme',
    websitePh:    'www.votreprogramme.org',
    instagram:    'Instagram',
    instagramPh:  '@votreprogramme',
    btnSubmit:   'Soumettre la Demande',
    btnClear:    'Effacer',
    btnBack:     '← Retour',
    btnNext:     'Suivant →',
    successTitle: 'Demande Soumise!',
    successMsg:   'Merci d'avoir enregistré votre programme. Nous vous contacterons bientôt.',
    successBtn:   'Retour à l'accueil',
    required: 'Les champs avec * sont obligatoires',
    valRequired: 'Ce champ est obligatoire',
    valEmail:    'Email invalide',
  },

  'de': {
    lang: 'de',
    langName: 'Deutsch',
    title: 'Globale Trainingsplattform',
    subtitle: 'Multiply — Globales Netzwerk',
    heroTitle: 'Antragsformular',
    heroSubtitle: 'Registrieren Sie Ihr Trainingsprogramm auf der Globalen Trainingsplattform von Multiply.',
    sidebarTitle: 'Warum affiliieren?',
    sidebarItems: [
      'Weltweite Sichtbarkeit im Multiply-Netzwerk',
      'Verbindung mit anderen Programmen und Leitern',
      'Zugang zum Qualitätssiegel der Plattform',
      'Unterstützung bei Kooperation und Studentenaustausch',
      'Ausrichtung an der Missionarischen Strategiekarte'
    ],
    step1: 'Identifikation', step1desc: 'Grunddaten des Programms',
    step2: 'Details', step2desc: 'Profil und Reichweite',
    step3: 'Ausrichtung', step3desc: 'Strategische Verbindung',
    step4: 'Kontakt', step4desc: 'Verantwortlicher',
    sec1: 'Programmidentifikation',
    sec2: 'Programmprofil',
    sec3: 'Strategische Ausrichtung',
    sec4: 'Kontaktinformationen',
    name:         'Programmname',
    namePh:       'Bsp: GPS – Generation Proclaiming Salvation',
    country:      'Land',
    region:       'Region',
    duration:     'Programmdauer',
    durationOpt:  ['Auswählen...', 'Mobilisierung (1–7 Tage)', 'Kurzfristig (8 Tage – 1 Monat)', 'Mittelfristig (1–6 Monate)', 'Langfristig (6+ Monate)'],
    yearCreated:  'Gründungsjahr',
    yearPh:       'Bsp: 2015',
    ageRange:     'Altersgruppe der Teilnehmer',
    agePh:        'Bsp: 18–35',
    participants: 'Jährliche Teilnehmer (geschätzt)',
    participantsPh: 'Bsp: 120',
    monthlyCost:  'Monatliche Kosten pro Student (USD)',
    costPh:       'Bsp: 500',
    objectives:   'Programmziele und Beschreibung',
    objectivesPh: 'Beschreiben Sie kurz die Ziele, Methodik und Schwerpunkt des Programms...',
    strategicMap: 'Ausrichtung an der Strategiekarte (alle zutreffenden auswählen)',
    platformFocus:'Plattformschwerpunkte (alle zutreffenden auswählen)',
    responsible:  'Name des Verantwortlichen',
    responsiblePh:'Vollständiger Name',
    email:        'Kontakt-E-Mail',
    emailPh:      'email@beispiel.de',
    website:      'Programm-Website',
    websitePh:    'www.ihrprogramm.de',
    instagram:    'Instagram',
    instagramPh:  '@ihrprogramm',
    btnSubmit:   'Antrag Einreichen',
    btnClear:    'Löschen',
    btnBack:     '← Zurück',
    btnNext:     'Weiter →',
    successTitle: 'Antrag Eingereicht!',
    successMsg:   'Vielen Dank für die Registrierung Ihres Programms. Wir werden uns bald melden.',
    successBtn:   'Zurück zur Startseite',
    required: 'Felder mit * sind erforderlich',
    valRequired: 'Dieses Feld ist erforderlich',
    valEmail:    'Ungültige E-Mail',
  },

  'th': {
    lang: 'th',
    langName: 'ภาษาไทย',
    title: 'แพลตฟอร์มการฝึกอบรมระดับโลก',
    subtitle: 'Multiply — เครือข่ายระดับโลก',
    heroTitle: 'แบบฟอร์มการสมัครสมาชิก',
    heroSubtitle: 'ลงทะเบียนโปรแกรมการฝึกอบรมของคุณในแพลตฟอร์มการฝึกอบรมระดับโลกของ Multiply',
    sidebarTitle: 'ทำไมต้องสมัครสมาชิก?',
    sidebarItems: [
      'การมองเห็นระดับโลกในเครือข่าย Multiply',
      'การเชื่อมต่อกับโปรแกรมและผู้นำอื่นๆ',
      'การเข้าถึงตราประทับคุณภาพของแพลตฟอร์ม',
      'การสนับสนุนความร่วมมือและการแลกเปลี่ยนนักศึกษา',
      'การจัดแนวกับแผนที่ยุทธศาสตร์มิชชันนารี'
    ],
    step1: 'การระบุตัวตน', step1desc: 'ข้อมูลพื้นฐานของโปรแกรม',
    step2: 'รายละเอียด', step2desc: 'โปรไฟล์และการเข้าถึง',
    step3: 'การจัดแนว', step3desc: 'การเชื่อมต่อเชิงกลยุทธ์',
    step4: 'ติดต่อ', step4desc: 'ผู้รับผิดชอบ',
    sec1: 'การระบุตัวตนของโปรแกรม',
    sec2: 'โปรไฟล์โปรแกรม',
    sec3: 'การจัดแนวเชิงกลยุทธ์',
    sec4: 'ข้อมูลติดต่อ',
    name:         'ชื่อโปรแกรม',
    namePh:       'เช่น GPS – รุ่นประกาศข่าวความรอด',
    country:      'ประเทศ',
    region:       'ภูมิภาค',
    duration:     'ระยะเวลาโปรแกรม',
    durationOpt:  ['เลือก...', 'การระดมพล (1–7 วัน)', 'ระยะสั้น (8 วัน – 1 เดือน)', 'ระยะกลาง (1–6 เดือน)', 'ระยะยาว (6+ เดือน)'],
    yearCreated:  'ปีที่ก่อตั้ง',
    yearPh:       'เช่น 2015',
    ageRange:     'ช่วงอายุของผู้เข้าร่วม',
    agePh:        'เช่น 18–35',
    participants: 'ผู้เข้าร่วมต่อปี (ประมาณ)',
    participantsPh: 'เช่น 120',
    monthlyCost:  'ค่าใช้จ่ายรายเดือนต่อนักศึกษา (USD)',
    costPh:       'เช่น 500',
    objectives:   'วัตถุประสงค์และคำอธิบายโปรแกรม',
    objectivesPh: 'อธิบายวัตถุประสงค์ วิธีการ และจุดเน้นของโปรแกรมโดยย่อ...',
    strategicMap: 'การจัดแนวกับแผนที่เชิงกลยุทธ์ (เลือกทั้งหมดที่ใช้งาน)',
    platformFocus:'จุดเน้นของแพลตฟอร์ม (เลือกทั้งหมดที่ใช้งาน)',
    responsible:  'ชื่อผู้รับผิดชอบ',
    responsiblePh:'ชื่อเต็ม',
    email:        'อีเมลติดต่อ',
    emailPh:      'email@example.com',
    website:      'เว็บไซต์โปรแกรม',
    websitePh:    'www.yourprogram.org',
    instagram:    'Instagram',
    instagramPh:  '@yourprogram',
    btnSubmit:   'ส่งคำขอ',
    btnClear:    'ล้าง',
    btnBack:     '← กลับ',
    btnNext:     'ถัดไป →',
    successTitle: 'ส่งคำขอแล้ว!',
    successMsg:   'ขอบคุณที่ลงทะเบียนโปรแกรมของคุณ เราจะติดต่อกลับในเร็วๆ นี้',
    successBtn:   'กลับสู่หน้าหลัก',
    required: 'ช่องที่มี * จำเป็นต้องกรอก',
    valRequired: 'ช่องนี้จำเป็นต้องกรอก',
    valEmail:    'อีเมลไม่ถูกต้อง',
  },

  'ja': {
    lang: 'ja',
    langName: '日本語',
    title: 'グローバルトレーニングプラットフォーム',
    subtitle: 'Multiply — グローバルネットワーク',
    heroTitle: '加盟申請フォーム',
    heroSubtitle: 'MultiplyのグローバルトレーニングプラットフォームにトレーニングプログラムをE登録してください。',
    sidebarTitle: 'なぜ加盟するのか？',
    sidebarItems: [
      'Multiplyネットワークでの世界的な認知度',
      '他のプログラムやリーダーとのつながり',
      'プラットフォーム品質シールへのアクセス',
      '学生の協力と交流へのサポート',
      'ミッション戦略マップとの整合性'
    ],
    step1: '識別', step1desc: 'プログラムの基本データ',
    step2: '詳細', step2desc: 'プロフィールとリーチ',
    step3: '整合性', step3desc: '戦略的つながり',
    step4: '連絡先', step4desc: '担当者',
    sec1: 'プログラムの識別',
    sec2: 'プログラムプロフィール',
    sec3: '戦略的整合性',
    sec4: '連絡先情報',
    name:         'プログラム名',
    namePh:       '例: GPS – 救いを宣言する世代',
    country:      '国',
    region:       '地域',
    duration:     'プログラム期間',
    durationOpt:  ['選択...', '動員（1〜7日）', '短期（8日〜1ヶ月）', '中期（1〜6ヶ月）', '長期（6ヶ月以上）'],
    yearCreated:  '設立年',
    yearPh:       '例: 2015',
    ageRange:     '参加者の年齢層',
    agePh:        '例: 18〜35',
    participants: '年間参加者数（推定）',
    participantsPh: '例: 120',
    monthlyCost:  '学生一人あたりの月額費用（USD）',
    costPh:       '例: 500',
    objectives:   'プログラムの目標と説明',
    objectivesPh: 'プログラムの目標、方法論、焦点を簡単に説明してください...',
    strategicMap: '戦略マップとの整合性（該当するものをすべて選択）',
    platformFocus:'プラットフォームの焦点（該当するものをすべて選択）',
    responsible:  '担当者名',
    responsiblePh:'フルネーム',
    email:        '連絡先メール',
    emailPh:      'email@example.com',
    website:      'プログラムウェブサイト',
    websitePh:    'www.yourprogram.org',
    instagram:    'Instagram',
    instagramPh:  '@yourprogram',
    btnSubmit:   '申請を提出する',
    btnClear:    'クリア',
    btnBack:     '← 戻る',
    btnNext:     '次へ →',
    successTitle: '申請が送信されました！',
    successMsg:   'プログラムを登録していただきありがとうございます。近日中にご連絡いたします。',
    successBtn:   'ホームに戻る',
    required: '*のついたフィールドは必須です',
    valRequired: 'このフィールドは必須です',
    valEmail:    '無効なメールアドレス',
  }
};

// ── COUNTRIES LIST (Spanish LATAM names + English) ────────────
const COUNTRIES_LIST = [
  'Bolivia', 'Brasil / Brazil', 'Canada', 'Chile', 'Colombia',
  'Costa Rica', 'El Salvador', 'Estados Unidos / USA',
  'Filipinas / Philippines', 'Guatemala', 'Honduras',
  'Japón / Japan', 'Jordania / Jordan', 'México / Mexico',
  'Nicaragua', 'Panamá / Panama', 'Paraguay', 'Tailandia / Thailand',
  'Other / Otro'
];

const REGIONS_LIST = [
  'América do Norte / North America',
  'América Central / Central America',
  'América do Sul / South America',
  'Europa / Europe',
  'África / Africa',
  'Oriente Médio / Middle East',
  'Ásia / Asia',
  'Oceania'
];

// ── FORM STATE ─────────────────────────────────────────────────
let currentLang = 'es';
let currentStep = 1;
const TOTAL_STEPS = 4;

function getLang() {
  return TRANSLATIONS[currentLang] || TRANSLATIONS['es'];
}

// ── RENDER LANGUAGE BUTTONS ────────────────────────────────────
function renderLangBar() {
  const bar = document.getElementById('lang-bar');
  if (!bar) return;
  bar.innerHTML = Object.keys(TRANSLATIONS).map(code => {
    const t = TRANSLATIONS[code];
    return `<button class="lang-btn ${code === currentLang ? 'active' : ''}"
      onclick="switchLang('${code}')">${t.langName}</button>`;
  }).join('');
}

function switchLang(code) {
  currentLang = code;
  renderAll();
}

// ── RENDER ALL ─────────────────────────────────────────────────
function renderAll() {
  renderLangBar();
  renderSidebar();
  renderFormContent();
  updateStepIndicator();
}

function renderSidebar() {
  const t = getLang();
  const el = document.getElementById('sidebar-content');
  if (!el) return;
  el.innerHTML = `
    <div class="hero-eyebrow">Multiply</div>
    <h2>${t.heroTitle}</h2>
    <p style="color:rgba(255,255,255,.75);font-size:.9rem;margin-top:4px">${t.heroSubtitle}</p>
    <div style="border-top:1px solid rgba(255,255,255,.1);padding-top:24px;margin-top:8px">
      <div style="font-size:.8rem;font-weight:600;color:var(--gold);letter-spacing:.08em;margin-bottom:14px">${t.sidebarTitle}</div>
      <ul style="list-style:none;display:flex;flex-direction:column;gap:12px">
        ${t.sidebarItems.map(item => `
          <li style="display:flex;gap:10px;align-items:flex-start">
            <span style="color:var(--gold);margin-top:2px;flex-shrink:0">✦</span>
            <span style="font-size:.85rem;color:rgba(255,255,255,.8);line-height:1.4">${item}</span>
          </li>`).join('')}
      </ul>
    </div>
    <div id="step-indicator" style="margin-top:auto"></div>
  `;
  renderStepIndicator();
}

function renderStepIndicator() {
  const t = getLang();
  const el = document.getElementById('step-indicator');
  if (!el) return;
  const steps = [
    { num: 1, name: t.step1, desc: t.step1desc },
    { num: 2, name: t.step2, desc: t.step2desc },
    { num: 3, name: t.step3, desc: t.step3desc },
    { num: 4, name: t.step4, desc: t.step4desc },
  ];
  el.innerHTML = `
    <div style="border-top:1px solid rgba(255,255,255,.1);padding-top:24px">
      <div class="form-steps">
        ${steps.map(s => {
          const st = s.num < currentStep ? 'done' : s.num === currentStep ? 'active' : 'pending';
          return `<div class="form-step-item">
            <div class="form-step-dot ${st}">${s.num < currentStep ? '✓' : s.num}</div>
            <div class="form-step-info">
              <div class="step-name" style="${s.num === currentStep ? '' : 'opacity:.6'}">${s.name}</div>
              <div class="step-desc">${s.desc}</div>
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>
  `;
}

function updateStepIndicator() {
  renderStepIndicator();
}

// ── RENDER FORM CONTENT ────────────────────────────────────────
function renderFormContent() {
  const t = getLang();
  const main = document.getElementById('form-main');
  if (!main) return;

  if (currentStep === 1) {
    main.innerHTML = renderStep1(t);
  } else if (currentStep === 2) {
    main.innerHTML = renderStep2(t);
  } else if (currentStep === 3) {
    main.innerHTML = renderStep3(t);
  } else if (currentStep === 4) {
    main.innerHTML = renderStep4(t);
  }

  restoreFormValues();
  attachCheckboxListeners();
}

function renderStep1(t) {
  return `
    <div class="form-section-title">${t.sec1}</div>
    <div class="form-group">
      <label class="form-label">${t.name} <span class="required">*</span></label>
      <input type="text" id="f-name" class="form-input" placeholder="${t.namePh}" data-key="name">
      <span class="form-error" id="err-name" style="color:#e53e3e;font-size:.775rem;display:none"></span>
    </div>
    <div class="form-grid-2">
      <div class="form-group">
        <label class="form-label">${t.country} <span class="required">*</span></label>
        <select id="f-country" class="form-input form-select" data-key="country">
          <option value="">—</option>
          ${COUNTRIES_LIST.map(c => `<option value="${c}">${c}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">${t.region} <span class="required">*</span></label>
        <select id="f-region" class="form-input form-select" data-key="region">
          <option value="">—</option>
          ${REGIONS_LIST.map(r => `<option value="${r}">${r}</option>`).join('')}
        </select>
      </div>
    </div>
    <div class="form-grid-2">
      <div class="form-group">
        <label class="form-label">${t.duration} <span class="required">*</span></label>
        <select id="f-duration" class="form-input form-select" data-key="duration">
          ${t.durationOpt.map((opt, i) => `<option value="${i === 0 ? '' : ['','mobilizacao','curto','medio','longo'][i]}">${opt}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">${t.yearCreated}</label>
        <input type="number" id="f-year" class="form-input" placeholder="${t.yearPh}" min="1900" max="2026" data-key="yearCreated">
      </div>
    </div>
    <div style="display:flex;gap:16px;justify-content:flex-end;margin-top:24px;padding-top:20px;border-top:1px solid var(--border)">
      <button class="btn btn-primary" onclick="goStep(2)">${t.btnNext}</button>
    </div>
  `;
}

function renderStep2(t) {
  return `
    <div class="form-section-title">${t.sec2}</div>
    <div class="form-grid-2">
      <div class="form-group">
        <label class="form-label">${t.ageRange}</label>
        <input type="text" id="f-age" class="form-input" placeholder="${t.agePh}" data-key="ageRange">
      </div>
      <div class="form-group">
        <label class="form-label">${t.participants}</label>
        <input type="number" id="f-participants" class="form-input" placeholder="${t.participantsPh}" data-key="annualParticipants">
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">${t.monthlyCost}</label>
      <input type="number" id="f-cost" class="form-input" placeholder="${t.costPh}" data-key="monthlyCost">
    </div>
    <div class="form-group">
      <label class="form-label">${t.objectives} <span class="required">*</span></label>
      <textarea id="f-objectives" class="form-input form-textarea" rows="4" placeholder="${t.objectivesPh}" data-key="objectives"></textarea>
    </div>
    <div style="display:flex;gap:16px;justify-content:space-between;margin-top:24px;padding-top:20px;border-top:1px solid var(--border)">
      <button class="btn btn-outline" onclick="goStep(1)">${t.btnBack}</button>
      <button class="btn btn-primary" onclick="goStep(3)">${t.btnNext}</button>
    </div>
  `;
}

function renderStep3(t) {
  const strategic = ['Mobilizing','Connecting','Witnessing','Gathering','Equipping','Growing','Multiplying','Partnering','Extending'];
  const platform  = ['Discipleship','Missionary Training','Church Planting','Cross-cultural','Leadership Development','Mobilization','Sustainability','Networking'];
  return `
    <div class="form-section-title">${t.sec3}</div>
    <div class="form-group">
      <label class="form-label">${t.strategicMap}</label>
      <div class="checkbox-grid" id="strategic-checks">
        ${strategic.map((s, i) => `
          <label class="checkbox-item" id="sm-${i}">
            <input type="checkbox" value="${s}" class="strategic-check"> ${i+1}. ${s}
          </label>`).join('')}
      </div>
    </div>
    <div class="form-group" style="margin-top:20px">
      <label class="form-label">${t.platformFocus}</label>
      <div class="checkbox-grid" id="platform-checks">
        ${platform.map((p, i) => `
          <label class="checkbox-item" id="pf-${i}">
            <input type="checkbox" value="${p}" class="platform-check"> ${p}
          </label>`).join('')}
      </div>
    </div>
    <div style="display:flex;gap:16px;justify-content:space-between;margin-top:24px;padding-top:20px;border-top:1px solid var(--border)">
      <button class="btn btn-outline" onclick="goStep(2)">${t.btnBack}</button>
      <button class="btn btn-primary" onclick="goStep(4)">${t.btnNext}</button>
    </div>
  `;
}

function renderStep4(t) {
  return `
    <div class="form-section-title">${t.sec4}</div>
    <div class="form-group">
      <label class="form-label">${t.responsible} <span class="required">*</span></label>
      <input type="text" id="f-responsible" class="form-input" placeholder="${t.responsiblePh}" data-key="responsiblePerson">
    </div>
    <div class="form-group">
      <label class="form-label">${t.email} <span class="required">*</span></label>
      <input type="email" id="f-email" class="form-input" placeholder="${t.emailPh}" data-key="email">
      <span class="form-error" id="err-email" style="color:#e53e3e;font-size:.775rem;display:none"></span>
    </div>
    <div class="form-grid-2">
      <div class="form-group">
        <label class="form-label">${t.website}</label>
        <input type="text" id="f-website" class="form-input" placeholder="${t.websitePh}" data-key="website">
      </div>
      <div class="form-group">
        <label class="form-label">${t.instagram}</label>
        <input type="text" id="f-instagram" class="form-input" placeholder="${t.instagramPh}" data-key="instagram">
      </div>
    </div>
    <div style="display:flex;gap:16px;justify-content:space-between;margin-top:24px;padding-top:20px;border-top:1px solid var(--border)">
      <button class="btn btn-outline" onclick="goStep(3)">${getLang().btnBack}</button>
      <button class="btn btn-primary btn-lg" onclick="submitForm()">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
        </svg>
        ${getLang().btnSubmit}
      </button>
    </div>
  `;
}

// ── FORM DATA PERSISTENCE (across steps) ──────────────────────
const formData = {};

function saveFormValues() {
  document.querySelectorAll('[data-key]').forEach(el => {
    formData[el.dataset.key] = el.value;
  });
  // Save checkboxes
  const strategic = [...document.querySelectorAll('.strategic-check:checked')].map(c => c.value);
  const platform  = [...document.querySelectorAll('.platform-check:checked')].map(c => c.value);
  if (strategic.length) formData.strategicFocuses = strategic;
  if (platform.length)  formData.platformFocuses  = platform;
}

function restoreFormValues() {
  document.querySelectorAll('[data-key]').forEach(el => {
    if (formData[el.dataset.key] !== undefined) {
      el.value = formData[el.dataset.key];
    }
  });
  // Restore checkboxes
  if (formData.strategicFocuses) {
    document.querySelectorAll('.strategic-check').forEach(c => {
      c.checked = formData.strategicFocuses.includes(c.value);
      c.closest('.checkbox-item').classList.toggle('checked', c.checked);
    });
  }
  if (formData.platformFocuses) {
    document.querySelectorAll('.platform-check').forEach(c => {
      c.checked = formData.platformFocuses.includes(c.value);
      c.closest('.checkbox-item').classList.toggle('checked', c.checked);
    });
  }
}

function attachCheckboxListeners() {
  document.querySelectorAll('.checkbox-item input').forEach(inp => {
    inp.addEventListener('change', () => {
      inp.closest('.checkbox-item').classList.toggle('checked', inp.checked);
    });
  });
}

// ── STEP NAVIGATION ────────────────────────────────────────────
function goStep(step) {
  saveFormValues();
  if (step > currentStep && !validateCurrentStep()) return;
  currentStep = step;
  renderFormContent();
  renderStepIndicator();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function validateCurrentStep() {
  const t = getLang();
  let valid = true;

  if (currentStep === 1) {
    const name = document.getElementById('f-name');
    if (!name || !name.value.trim()) {
      showError('err-name', t.valRequired);
      valid = false;
    } else {
      hideError('err-name');
    }
  }

  if (currentStep === 4) {
    const email = document.getElementById('f-email');
    if (!email || !email.value.trim()) {
      showError('err-email', t.valRequired);
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      showError('err-email', t.valEmail);
      valid = false;
    } else {
      hideError('err-email');
    }
  }

  return valid;
}

function showError(id, msg) {
  const el = document.getElementById(id);
  if (el) { el.textContent = msg; el.style.display = 'block'; }
}

function hideError(id) {
  const el = document.getElementById(id);
  if (el) { el.style.display = 'none'; }
}

// ── SUBMIT ─────────────────────────────────────────────────────
function submitForm() {
  saveFormValues();
  if (!validateCurrentStep()) return;

  const program = {
    ...formData,
    duration: formData.duration || 'curto',
    annualParticipants: parseInt(formData.annualParticipants) || 0,
    monthlyCost: parseFloat(formData.monthlyCost) || null,
    yearCreated: parseInt(formData.yearCreated) || null,
    qualitySeal: false,
    strategicFocuses: formData.strategicFocuses || [],
    platformFocuses:  formData.platformFocuses  || [],
  };

  // Save to localStorage
  if (typeof addProgram === 'function') {
    addProgram(program);
  } else {
    const existing = JSON.parse(localStorage.getItem('multiply_programs') || 'null') || [];
    program.id = Date.now();
    existing.push(program);
    localStorage.setItem('multiply_programs', JSON.stringify(existing));
  }

  showSuccess();
}

function showSuccess() {
  const t = getLang();
  const main = document.getElementById('form-main');
  if (!main) return;
  main.innerHTML = `
    <div class="success-page fade-up">
      <div class="success-icon">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M20 6L9 17l-5-5"/>
        </svg>
      </div>
      <h2 style="color:var(--navy)">${t.successTitle}</h2>
      <p style="color:var(--text-mid);text-align:center;max-width:40ch">${t.successMsg}</p>
      <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;margin-top:8px">
        <a href="dashboard.html" class="btn btn-navy">${t.successBtn}</a>
        <button class="btn btn-outline" onclick="resetForm()">+ Novo programa</button>
      </div>
    </div>
  `;
}

function resetForm() {
  Object.keys(formData).forEach(k => delete formData[k]);
  currentStep = 1;
  renderFormContent();
  renderStepIndicator();
}

// ── INIT ───────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Try to detect browser language
  const browserLang = navigator.language || 'es';
  if (browserLang.startsWith('pt')) currentLang = 'pt-BR';
  else if (browserLang.startsWith('fr')) currentLang = 'fr';
  else if (browserLang.startsWith('de')) currentLang = 'de';
  else if (browserLang.startsWith('th')) currentLang = 'th';
  else if (browserLang.startsWith('ja')) currentLang = 'ja';
  else if (browserLang.startsWith('es')) currentLang = 'es';
  else currentLang = 'en';

  renderAll();
});
