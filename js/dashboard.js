// ============================================================
// MULTIPLY PLATFORM — DASHBOARD LOGIC
// Charts via Chart.js, Map via Leaflet
// ============================================================

// ── TRANSLATIONS (PT-BR / ES / EN) ────────────────────────
const DASH_LANGS = {
  'pt-BR': {
    title: 'Painel de Programas',
    subtitle: 'Visualize, filtre e exporte dados dos programas de treinamento da rede Multiply.',
    eyebrow: 'Plataforma Global de Treinamento',
    statTotal: 'Programas', statCountries: 'Países', statPart: 'Participantes/ano', statSeal: 'Com Selo',
    tileShort: 'Curto Prazo', tileMed: 'Médio Prazo', tileLong: 'Longo Prazo',
    filterSearch: 'Buscar programa', filterSearchPh: 'Nome, país ou objetivo...',
    filterDuration: 'Duração', filterAll: 'Todas', filterShort: 'Curto Prazo', filterMed: 'Médio Prazo', filterLong: 'Longo Prazo',
    filterCountry: 'País', filterAllC: 'Todos', filterRegion: 'Região', filterAllR: 'Todas',
    filterSeal: 'Selo de Qualidade', filterSealAll: 'Todos', filterSealYes: 'Com Selo', filterSealNo: 'Sem Selo',
    btnClear: 'Limpar', btnExport: 'Exportar', btnAdd: 'Adicionar',
    chartDuration: 'Distribuição por Duração', chartCountry: 'Programas por País',
    strategic: 'Mapa Estratégico Multiply', mapTitle: 'Mapa Global de Programas',
    tableTitle: 'Lista de Programas', colProgram: 'Programa', colCountry: 'País',
    colDuration: 'Duração', colYear: 'Ano', colAge: 'Idade', colPart: 'Part./Ano',
    colSeal: 'Selo', colActions: 'Ações',
    noResults: 'Nenhum programa encontrado com os filtros selecionados.',
    loading: 'Carregando...',
    notice: 'Os dados são salvos localmente no seu navegador. Para adicionar novos programas use o',
    noticeLink: 'formulário de afiliação',
    notice2: '. Para sincronizar com um banco de dados real, integre com uma API backend.',
    modalPais: 'País', modalRegion: 'Região', modalDur: 'Duração', modalYear: 'Ano fundado',
    modalAge: 'Faixa etária', modalPart: 'Participantes/ano', modalCost: 'Custo mensal',
    modalResp: 'Responsável', modalWeb: 'Site', modalIg: 'Instagram', modalObj: 'Objetivos',
    modalStrategic: 'Mapa Estratégico', modalToggleSeal: '★ Alternar Selo',
    modalExportPDF: 'Exportar PDF', modalClose: 'Fechar',
    sealYes: '★ Selo de Qualidade', sealNo: 'Ainda sem selo',
    logout: 'Sair',
    legendShort: 'Curto', legendMed: 'Médio', legendLong: 'Longo',
    durShort: 'Curto Prazo (até 1 mês)', durMed: 'Médio Prazo (1–6 meses)', durLong: 'Longo Prazo (6+ meses)',
  },
  'es': {
    title: 'Panel de Programas',
    subtitle: 'Visualiza, filtra y exporta datos de los programas de entrenamiento de la red Multiply.',
    eyebrow: 'Plataforma Global de Entrenamiento',
    statTotal: 'Programas', statCountries: 'Países', statPart: 'Participantes/año', statSeal: 'Con Sello',
    tileShort: 'Corto Plazo', tileMed: 'Mediano Plazo', tileLong: 'Largo Plazo',
    filterSearch: 'Buscar programa', filterSearchPh: 'Nombre, país u objetivo...',
    filterDuration: 'Duración', filterAll: 'Todas', filterShort: 'Corto Plazo', filterMed: 'Mediano Plazo', filterLong: 'Largo Plazo',
    filterCountry: 'País', filterAllC: 'Todos', filterRegion: 'Región', filterAllR: 'Todas',
    filterSeal: 'Sello de Calidad', filterSealAll: 'Todos', filterSealYes: 'Con Sello', filterSealNo: 'Sin Sello',
    btnClear: 'Limpiar', btnExport: 'Exportar', btnAdd: 'Agregar',
    chartDuration: 'Distribución por Duración', chartCountry: 'Programas por País',
    strategic: 'Mapa Estratégico Multiply', mapTitle: 'Mapa Global de Programas',
    tableTitle: 'Lista de Programas', colProgram: 'Programa', colCountry: 'País',
    colDuration: 'Duración', colYear: 'Año', colAge: 'Edad', colPart: 'Part./Año',
    colSeal: 'Sello', colActions: 'Acciones',
    noResults: 'No hay programas con los filtros seleccionados.',
    loading: 'Cargando...',
    notice: 'Los datos se guardan localmente en tu navegador. Para agregar nuevos programas usa el',
    noticeLink: 'formulario de afiliación',
    notice2: '. Para sincronizar con una base de datos real, integra con una API backend.',
    modalPais: 'País', modalRegion: 'Región', modalDur: 'Duración', modalYear: 'Año fundado',
    modalAge: 'Rango de edad', modalPart: 'Participantes/año', modalCost: 'Costo mensual',
    modalResp: 'Responsable', modalWeb: 'Sitio web', modalIg: 'Instagram', modalObj: 'Objetivos',
    modalStrategic: 'Mapa Estratégico', modalToggleSeal: '★ Toggle Sello',
    modalExportPDF: 'Exportar PDF', modalClose: 'Cerrar',
    sealYes: '★ Sello de Calidad', sealNo: 'Sin sello aún',
    logout: 'Salir',
    legendShort: 'Corto', legendMed: 'Mediano', legendLong: 'Largo',
    durShort: 'Corto Plazo (hasta 1 mes)', durMed: 'Mediano Plazo (1–6 meses)', durLong: 'Largo Plazo (6+ meses)',
  },
  'en': {
    title: 'Programs Dashboard',
    subtitle: 'View, filter and export data from Multiply network training programs.',
    eyebrow: 'Global Training Platform',
    statTotal: 'Programs', statCountries: 'Countries', statPart: 'Participants/year', statSeal: 'With Seal',
    tileShort: 'Short Term', tileMed: 'Medium Term', tileLong: 'Long Term',
    filterSearch: 'Search program', filterSearchPh: 'Name, country or objective...',
    filterDuration: 'Duration', filterAll: 'All', filterShort: 'Short Term', filterMed: 'Medium Term', filterLong: 'Long Term',
    filterCountry: 'Country', filterAllC: 'All', filterRegion: 'Region', filterAllR: 'All',
    filterSeal: 'Quality Seal', filterSealAll: 'All', filterSealYes: 'With Seal', filterSealNo: 'Without Seal',
    btnClear: 'Clear', btnExport: 'Export', btnAdd: 'Add',
    chartDuration: 'Distribution by Duration', chartCountry: 'Programs by Country',
    strategic: 'Multiply Strategic Map', mapTitle: 'Global Programs Map',
    tableTitle: 'Programs List', colProgram: 'Program', colCountry: 'Country',
    colDuration: 'Duration', colYear: 'Year', colAge: 'Age', colPart: 'Part./Year',
    colSeal: 'Seal', colActions: 'Actions',
    noResults: 'No programs match the selected filters.',
    loading: 'Loading...',
    notice: 'Data is saved locally in your browser. To add new programs use the',
    noticeLink: 'affiliation form',
    notice2: '. To sync with a real database, integrate with a backend API.',
    modalPais: 'Country', modalRegion: 'Region', modalDur: 'Duration', modalYear: 'Year founded',
    modalAge: 'Age range', modalPart: 'Participants/year', modalCost: 'Monthly cost',
    modalResp: 'Responsible', modalWeb: 'Website', modalIg: 'Instagram', modalObj: 'Objectives',
    modalStrategic: 'Strategic Map', modalToggleSeal: '★ Toggle Seal',
    modalExportPDF: 'Export PDF', modalClose: 'Close',
    sealYes: '★ Quality Seal', sealNo: 'No seal yet',
    logout: 'Logout',
    legendShort: 'Short', legendMed: 'Medium', legendLong: 'Long',
    durShort: 'Short Term (up to 1 month)', durMed: 'Medium Term (1–6 months)', durLong: 'Long Term (6+ months)',
  }
};

// ── STATE ─────────────────────────────────────────────────────
let allPrograms = [];
let filteredPrograms = [];
let charts = {};
let map = null;
let markers = [];
let currentLang = 'pt-BR';

// Duration: mobilizacao is merged into curto
const COLORS = {
  mobilizacao: '#4A6FA5',  // same as curto (merged)
  curto:       '#4A6FA5',
  medio:       '#C9A84C',
  longo:       '#1A2745'
};

function getDurLabel(dur) {
  const t = DASH_LANGS[currentLang];
  if (dur === 'mobilizacao' || dur === 'curto') return t.durShort;
  if (dur === 'medio') return t.durMed;
  if (dur === 'longo') return t.durLong;
  return dur || '—';
}

// ── INIT ───────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Language from localStorage or browser
  const saved = localStorage.getItem('dash_lang');
  const browser = navigator.language;
  if (saved && DASH_LANGS[saved]) currentLang = saved;
  else if (browser.startsWith('pt')) currentLang = 'pt-BR';
  else if (browser.startsWith('es')) currentLang = 'es';
  else if (browser.startsWith('en')) currentLang = 'en';
  else currentLang = 'pt-BR';

  allPrograms = getAllPrograms();
  filteredPrograms = [...allPrograms];

  // Show logged-in admin email in header
  const emailBadge = document.getElementById('admin-email-badge');
  if (emailBadge && typeof getAuthEmail === 'function') {
    emailBadge.textContent = getAuthEmail();
  }

  renderLangBar();
  applyTranslations();
  populateFilters();
  renderDashboard();
});

// ── LANGUAGE ───────────────────────────────────────────────────
function switchDashLang(code) {
  currentLang = code;
  localStorage.setItem('dash_lang', code);
  applyTranslations();
  populateFilters();
  renderDashboard();
  renderLangBar();
}

function renderLangBar() {
  const bar = document.getElementById('dash-lang-bar');
  if (!bar) return;
  const langs = [['pt-BR','PT'], ['es','ES'], ['en','EN']];
  bar.innerHTML = langs.map(([code, label]) =>
    `<button class="lang-btn ${currentLang === code ? 'active' : ''}" onclick="switchDashLang('${code}')">${label}</button>`
  ).join('');
}

function applyTranslations() {
  const t = DASH_LANGS[currentLang];
  if (!t) return;

  // Hero
  setText('hero-eyebrow', t.eyebrow);
  setText('hero-title', t.title);
  setText('hero-subtitle', t.subtitle);
  setText('stat-label-total', t.statTotal);
  setText('stat-label-countries', t.statCountries);
  setText('stat-label-part', t.statPart);
  setText('stat-label-seal', t.statSeal);

  // Stat tiles
  setText('tile-label-curto', t.tileShort);
  setText('tile-label-medio', t.tileMed);
  setText('tile-label-longo', t.tileLong);

  // Filters
  setText('label-search', t.filterSearch);
  setAttr('filter-search', 'placeholder', t.filterSearchPh);
  setText('label-duration', t.filterDuration);
  setFilterOptions('filter-duration', [
    ['', t.filterAll],
    ['curto', t.filterShort],
    ['medio', t.filterMed],
    ['longo', t.filterLong],
  ]);
  setText('label-country', t.filterCountry);
  setText('label-region', t.filterRegion);
  setText('label-seal', t.filterSeal);
  setFilterOptions('filter-seal', [
    ['', t.filterSealAll],
    ['yes', t.filterSealYes],
    ['no', t.filterSealNo],
  ]);
  setText('btn-clear', t.btnClear);
  setText('btn-export', t.btnExport);
  setText('btn-add', t.btnAdd);

  // Chart headings
  setText('card-title-donut', t.chartDuration);
  setText('card-title-bar', t.chartCountry);
  setText('card-title-strategic', t.strategic);
  setText('card-title-map', t.mapTitle);
  setText('card-title-table', t.tableTitle);

  // Table headers
  setText('th-program', t.colProgram);
  setText('th-country', t.colCountry);
  setText('th-duration', t.colDuration);
  setText('th-year', t.colYear);
  setText('th-age', t.colAge);
  setText('th-part', t.colPart);
  setText('th-seal', t.colSeal);
  setText('th-actions', t.colActions);

  // Map legend
  setText('legend-short', t.legendShort);
  setText('legend-med', t.legendMed);
  setText('legend-long', t.legendLong);

  // Notice
  const notice = document.getElementById('notice-text');
  if (notice) {
    notice.innerHTML = `${t.notice} <a href="index.html" style="font-weight:600">${t.noticeLink}</a>${t.notice2}`;
  }

  // Modal labels
  setText('modal-label-country', t.modalPais);
  setText('modal-label-region', t.modalRegion);
  setText('modal-label-dur', t.modalDur);
  setText('modal-label-year', t.modalYear);
  setText('modal-label-age', t.modalAge);
  setText('modal-label-part', t.modalPart);
  setText('modal-label-cost', t.modalCost);
  setText('modal-label-resp', t.modalResp);
  setText('modal-label-web', t.modalWeb);
  setText('modal-label-ig', t.modalIg);
  setText('modal-label-obj', t.modalObj);
  setText('modal-label-strategic', t.modalStrategic);
  setText('modal-toggle-seal-btn', t.modalToggleSeal);
  setText('modal-pdf-btn-label', t.modalExportPDF);
  setText('modal-close-btn', t.modalClose);
  setText('btn-logout', t.logout);
}

function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

function setAttr(id, attr, val) {
  const el = document.getElementById(id);
  if (el) el.setAttribute(attr, val);
}

function setFilterOptions(id, options) {
  const el = document.getElementById(id);
  if (!el) return;
  const current = el.value;
  el.innerHTML = options.map(([v, l]) => `<option value="${v}">${l}</option>`).join('');
  el.value = current;
}

// ── FILTERS ───────────────────────────────────────────────────
function populateFilters() {
  const t = DASH_LANGS[currentLang];
  const countries = [...new Set(allPrograms.map(p => p.country).filter(Boolean))].sort();
  const regions   = [...new Set(allPrograms.map(p => p.region).filter(Boolean))].sort();

  const fCountry = document.getElementById('filter-country');
  const fRegion  = document.getElementById('filter-region');

  if (fCountry) {
    const cur = fCountry.value;
    fCountry.innerHTML = `<option value="">${t.filterAllC}</option>` +
      countries.map(c => `<option value="${c}">${c}</option>`).join('');
    fCountry.value = cur;
  }
  if (fRegion) {
    const cur = fRegion.value;
    fRegion.innerHTML = `<option value="">${t.filterAllR}</option>` +
      regions.map(r => `<option value="${r}">${r}</option>`).join('');
    fRegion.value = cur;
  }
}

function applyFilters() {
  const dur     = document.getElementById('filter-duration')?.value || '';
  const country = document.getElementById('filter-country')?.value  || '';
  const region  = document.getElementById('filter-region')?.value   || '';
  const search  = document.getElementById('filter-search')?.value.toLowerCase() || '';
  const seal    = document.getElementById('filter-seal')?.value     || '';

  filteredPrograms = allPrograms.filter(p => {
    // mobilizacao merged into curto
    const effDur = p.duration === 'mobilizacao' ? 'curto' : p.duration;
    if (dur && effDur !== dur) return false;
    if (country && p.country  !== country) return false;
    if (region  && p.region   !== region) return false;
    if (seal === 'yes' && !p.qualitySeal) return false;
    if (seal === 'no'  &&  p.qualitySeal) return false;
    if (search && !p.name?.toLowerCase().includes(search) &&
                  !p.country?.toLowerCase().includes(search) &&
                  !p.objectives?.toLowerCase().includes(search)) return false;
    return true;
  });

  renderDashboard();
}

function clearFilters() {
  ['filter-duration','filter-country','filter-region','filter-seal'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const s = document.getElementById('filter-search');
  if (s) s.value = '';
  filteredPrograms = [...allPrograms];
  renderDashboard();
}

// ── RENDER ALL ─────────────────────────────────────────────────
function renderDashboard() {
  renderStats();
  renderDonutChart();
  renderBarChart();
  renderTable();
  renderMap();
  renderStrategicAlignment();
}

// ── STAT TILES ─────────────────────────────────────────────────
function renderStats() {
  const s = getStats(filteredPrograms);
  // Merge mobilizacao into curto
  const curtoCount = s.byDuration.curto.length + s.byDuration.mobilizacao.length;
  setInner('stat-total',    s.total);
  setInner('stat-curto',    curtoCount);
  setInner('stat-medio',    s.byDuration.medio.length);
  setInner('stat-longo',    s.byDuration.longo.length);
  setInner('stat-seal',     s.withSeal);
  setInner('stat-part',     s.totalParticipants.toLocaleString());
  setInner('stat-countries', Object.keys(s.countByCountry).length);
}

function setInner(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

// ── DONUT CHART ────────────────────────────────────────────────
function renderDonutChart() {
  const ctx = document.getElementById('chart-donut');
  if (!ctx) return;
  const t = DASH_LANGS[currentLang];

  // Merge mobilizacao into curto
  const curtoCount = filteredPrograms.filter(p => p.duration === 'curto' || p.duration === 'mobilizacao').length;
  const medioCount = filteredPrograms.filter(p => p.duration === 'medio').length;
  const longoCount = filteredPrograms.filter(p => p.duration === 'longo').length;

  const data   = [curtoCount, medioCount, longoCount];
  const labels = [t.tileShort, t.tileMed, t.tileLong];
  const colors = ['#4A6FA5', '#C9A84C', '#1A2745'];

  if (charts.donut) charts.donut.destroy();
  charts.donut = new Chart(ctx, {
    type: 'doughnut',
    data: { labels, datasets: [{ data, backgroundColor: colors, borderWidth: 2, borderColor: '#fff' }] },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '62%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: { font: { size: 11, family: 'Inter' }, padding: 12, usePointStyle: true, pointStyleWidth: 8 }
        },
        tooltip: {
          callbacks: {
            label: ctx => {
              const total = data.reduce((a,b) => a+b, 0);
              const pct = total > 0 ? ((ctx.parsed / total) * 100).toFixed(1) : 0;
              return ` ${ctx.label}: ${ctx.parsed} (${pct}%)`;
            }
          }
        }
      }
    }
  });
}

// ── BAR CHART ──────────────────────────────────────────────────
function renderBarChart() {
  const ctx = document.getElementById('chart-bar');
  if (!ctx) return;

  const countByCountry = {};
  filteredPrograms.forEach(p => {
    if (p.country) countByCountry[p.country] = (countByCountry[p.country] || 0) + 1;
  });

  const sorted = Object.entries(countByCountry).sort((a, b) => b[1] - a[1]).slice(0, 12);
  const labels = sorted.map(([k]) => k);
  const data   = sorted.map(([,v]) => v);

  if (charts.bar) charts.bar.destroy();
  charts.bar = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: DASH_LANGS[currentLang].statTotal,
        data,
        backgroundColor: data.map((_, i) => i % 2 === 0 ? '#1A2745' : '#4A6FA5'),
        borderRadius: 4,
        borderSkipped: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false }, ticks: { font: { size: 10, family: 'Inter' }, color: '#3D5080' } },
        y: { beginAtZero: true, ticks: { stepSize: 1, font: { size: 10 }, color: '#6B7FA5' }, grid: { color: 'rgba(0,0,0,.05)' } }
      }
    }
  });
}

// ── STRATEGIC ALIGNMENT ────────────────────────────────────────
function renderStrategicAlignment() {
  const container = document.getElementById('strategic-alignment');
  if (!container) return;

  const focuses = ['Mobilizing','Connecting','Witnessing','Gathering','Equipping','Growing','Multiplying','Partnering','Extending'];
  const counts  = focuses.map(f => filteredPrograms.filter(p => (p.strategicFocuses||[]).includes(f)).length);
  const max     = Math.max(...counts, 1);

  container.innerHTML = focuses.map((f, i) => `
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
      <span style="width:28px;height:28px;border-radius:50%;background:var(--navy);color:#fff;font-size:.7rem;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0">${i+1}</span>
      <div style="flex:1">
        <div style="font-size:.8rem;font-weight:600;color:var(--text);margin-bottom:3px">${f}</div>
        <div style="background:#f0f2f8;border-radius:4px;height:8px;overflow:hidden">
          <div style="height:100%;background:var(--soft);border-radius:4px;width:${(counts[i]/max*100).toFixed(0)}%;transition:width .4s ease"></div>
        </div>
      </div>
      <span style="font-size:.8rem;font-weight:700;color:var(--navy);width:20px;text-align:right">${counts[i]}</span>
    </div>`).join('');
}

// ── PROGRAM TABLE ──────────────────────────────────────────────
function renderTable() {
  const tbody = document.getElementById('programs-tbody');
  if (!tbody) return;
  const t = DASH_LANGS[currentLang];

  if (filteredPrograms.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;padding:32px;color:var(--text-light)">${t.noResults}</td></tr>`;
    return;
  }

  tbody.innerHTML = filteredPrograms.map(p => `
    <tr>
      <td class="td-name">${p.name}</td>
      <td class="td-country">${p.country || '—'}</td>
      <td><span class="badge badge-${p.duration === 'mobilizacao' ? 'curto' : p.duration}">${getDurLabel(p.duration)}</span></td>
      <td>${p.yearCreated || '—'}</td>
      <td>${p.ageRange || '—'}</td>
      <td>${p.annualParticipants ? p.annualParticipants.toLocaleString() : '—'}</td>
      <td>
        <button class="seal-toggle ${p.qualitySeal ? 'has-seal' : ''}"
          onclick="handleToggleSeal(${p.id})" title="Toggle quality seal">
          ${p.qualitySeal ? '★' : '☆'} Selo
        </button>
      </td>
      <td style="display:flex;gap:6px;align-items:center">
        <button class="btn-icon" onclick="showProgramModal(${p.id})" title="Ver detalhes">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        </button>
        <button class="btn-icon" onclick="showEditModal(${p.id})" title="Editar programa" style="color:var(--gold)">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
        </button>
        <button class="btn-icon" onclick="exportProgramPDF(getAllPrograms().find(x=>x.id==${p.id}))" title="Exportar PDF">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        </button>
      </td>
    </tr>`).join('');

  // Update count label
  const count = document.getElementById('table-count');
  if (count) count.textContent = `${filteredPrograms.length} programa${filteredPrograms.length !== 1 ? 's' : ''}`;
}

// ── SEAL TOGGLE ────────────────────────────────────────────────
function handleToggleSeal(id) {
  const p = toggleQualitySeal(id);
  if (!p) return;
  const idx = filteredPrograms.findIndex(x => x.id == id);
  if (idx !== -1) filteredPrograms[idx] = p;
  const aidx = allPrograms.findIndex(x => x.id == id);
  if (aidx !== -1) allPrograms[aidx] = p;
  renderTable();
  renderStats();
}

// ── PROGRAM MODAL ──────────────────────────────────────────────
function showProgramModal(id) {
  const p = allPrograms.find(x => x.id == id);
  if (!p) return;
  const t = DASH_LANGS[currentLang];

  document.getElementById('modal-title').textContent    = p.name;
  document.getElementById('modal-country').textContent  = p.country || '—';
  document.getElementById('modal-region').textContent   = p.region  || '—';
  document.getElementById('modal-duration').textContent = getDurLabel(p.duration);
  document.getElementById('modal-year').textContent     = p.yearCreated || '—';
  document.getElementById('modal-age').textContent      = p.ageRange || '—';
  document.getElementById('modal-part').textContent     = p.annualParticipants ? p.annualParticipants.toLocaleString() : '—';
  document.getElementById('modal-cost').textContent     = p.monthlyCost ? '$' + p.monthlyCost : '—';
  document.getElementById('modal-resp').textContent     = p.responsiblePerson || '—';
  document.getElementById('modal-web').textContent      = p.website  || '—';
  document.getElementById('modal-ig').textContent       = p.instagram || '—';
  document.getElementById('modal-obj').textContent      = p.objectives || '—';

  const sealEl = document.getElementById('modal-seal');
  sealEl.innerHTML = p.qualitySeal
    ? `<span class="badge badge-seal">${t.sealYes}</span>`
    : `<span style="color:var(--text-light);font-size:.85rem">${t.sealNo}</span>`;

  const focuses = (p.strategicFocuses || []);
  document.getElementById('modal-strategic').innerHTML = focuses.length
    ? focuses.map(f => `<span class="badge" style="background:#f4f6fa;color:var(--text-mid)">${f}</span>`).join(' ')
    : '<span style="color:var(--text-light);font-size:.85rem">—</span>';

  document.getElementById('modal-pdf-btn').onclick = () => exportProgramPDF(p);
  document.getElementById('modal-seal-btn').onclick = () => { handleToggleSeal(p.id); showProgramModal(p.id); };

  document.getElementById('modal-backdrop').classList.add('open');
}

function closeModal() {
  document.getElementById('modal-backdrop').classList.remove('open');
}

// ── EDIT MODAL ─────────────────────────────────────────────────
const STRATEGIC_OPTS = ['Mobilizing','Connecting','Witnessing','Gathering','Equipping','Growing','Multiplying','Partnering','Extending'];
const PLATFORM_OPTS  = ['Discipleship','Missionary Training','Church Planting','Cross-cultural','Leadership Development','Mobilization','Sustainability','Networking'];

function showEditModal(id) {
  const p = allPrograms.find(x => x.id == id);
  if (!p) return;

  const aiSection = p.aiAnalysis ? `
    <div style="background:#f0f4ff;border:1px solid #c5d3f5;border-radius:8px;padding:14px;margin-bottom:16px">
      <div style="font-size:.75rem;font-weight:700;color:#4A6FA5;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px">
        🤖 Categorização automática pela IA
      </div>
      <div style="font-size:.8rem;color:#3a4a6b;line-height:1.6">${p.aiAnalysis}</div>
    </div>` : '';

  const strategicChecks = STRATEGIC_OPTS.map(s => {
    const checked = (p.strategicFocuses || []).includes(s) ? 'checked' : '';
    return `<label style="display:flex;align-items:center;gap:6px;font-size:.8rem;padding:4px 0">
      <input type="checkbox" value="${s}" class="edit-strategic-check" ${checked}> ${s}
    </label>`;
  }).join('');

  const platformChecks = PLATFORM_OPTS.map(s => {
    const checked = (p.platformFocuses || []).includes(s) ? 'checked' : '';
    return `<label style="display:flex;align-items:center;gap:6px;font-size:.8rem;padding:4px 0">
      <input type="checkbox" value="${s}" class="edit-platform-check" ${checked}> ${s}
    </label>`;
  }).join('');

  // Custom "other" values
  const smOther = (p.strategicFocuses || []).filter(v => !STRATEGIC_OPTS.includes(v)).join(', ');
  const pfOther = (p.platformFocuses  || []).filter(v => !PLATFORM_OPTS.includes(v)).join(', ');

  document.getElementById('edit-modal-body').innerHTML = `
    ${aiSection}
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px">
      <div>
        <label class="filter-label" style="margin-bottom:3px">Nome do Programa *</label>
        <input id="ep-name" class="form-input" value="${escHtml(p.name || '')}" style="width:100%">
      </div>
      <div>
        <label class="filter-label" style="margin-bottom:3px">País *</label>
        <input id="ep-country" class="form-input" value="${escHtml(p.country || '')}" style="width:100%" list="edit-country-datalist">
        <datalist id="edit-country-datalist"></datalist>
      </div>
      <div>
        <label class="filter-label" style="margin-bottom:3px">Região</label>
        <input id="ep-region" class="form-input" value="${escHtml(p.region || '')}" style="width:100%">
      </div>
      <div>
        <label class="filter-label" style="margin-bottom:3px">Duração</label>
        <select id="ep-duration" class="form-input" style="width:100%">
          <option value="mobilizacao" ${p.duration==='mobilizacao'?'selected':''}>Mobilização (1–7 dias)</option>
          <option value="curto"       ${p.duration==='curto'?'selected':''}>Curto Prazo (até 1 mês)</option>
          <option value="medio"       ${p.duration==='medio'?'selected':''}>Médio Prazo (1–6 meses)</option>
          <option value="longo"       ${p.duration==='longo'?'selected':''}>Longo Prazo (6+ meses)</option>
        </select>
      </div>
      <div>
        <label class="filter-label" style="margin-bottom:3px">Ano de Fundação</label>
        <input id="ep-year" class="form-input" type="number" value="${p.yearCreated || ''}" style="width:100%">
      </div>
      <div>
        <label class="filter-label" style="margin-bottom:3px">Faixa Etária</label>
        <input id="ep-age" class="form-input" value="${escHtml(p.ageRange || '')}" style="width:100%">
      </div>
      <div>
        <label class="filter-label" style="margin-bottom:3px">Participantes/ano</label>
        <input id="ep-part" class="form-input" type="number" value="${p.annualParticipants || ''}" style="width:100%">
      </div>
      <div>
        <label class="filter-label" style="margin-bottom:3px">Custo Mensal (USD)</label>
        <input id="ep-cost" class="form-input" type="number" value="${p.monthlyCost || ''}" style="width:100%">
      </div>
      <div>
        <label class="filter-label" style="margin-bottom:3px">Responsável</label>
        <input id="ep-resp" class="form-input" value="${escHtml(p.responsiblePerson || '')}" style="width:100%">
      </div>
      <div>
        <label class="filter-label" style="margin-bottom:3px">E-mail</label>
        <input id="ep-email" class="form-input" type="email" value="${escHtml(p.email || '')}" style="width:100%">
      </div>
      <div>
        <label class="filter-label" style="margin-bottom:3px">Website</label>
        <input id="ep-web" class="form-input" value="${escHtml(p.website || '')}" style="width:100%">
      </div>
      <div>
        <label class="filter-label" style="margin-bottom:3px">Instagram</label>
        <input id="ep-ig" class="form-input" value="${escHtml(p.instagram || '')}" style="width:100%">
      </div>
    </div>
    <div style="margin-bottom:16px">
      <label class="filter-label" style="margin-bottom:3px">Objetivos / Descrição</label>
      <textarea id="ep-obj" class="form-input" rows="4" style="width:100%;resize:vertical">${escHtml(p.objectives || '')}</textarea>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:12px">
      <div>
        <label class="filter-label" style="margin-bottom:6px">Mapa Estratégico</label>
        <div style="background:#f9fafb;border:1px solid var(--border);border-radius:6px;padding:10px">
          ${strategicChecks}
          <label style="display:flex;align-items:center;gap:6px;font-size:.8rem;padding:4px 0">
            <input type="checkbox" id="edit-sm-other-chk" ${smOther?'checked':''}
              onchange="document.getElementById('edit-sm-other').style.display=this.checked?'block':'none'">
            Outro
          </label>
          <input id="edit-sm-other" class="form-input" placeholder="Especifique..." value="${escHtml(smOther)}"
            style="display:${smOther?'block':'none'};margin-top:4px;font-size:.8rem">
        </div>
      </div>
      <div>
        <label class="filter-label" style="margin-bottom:6px">Focos do Programa</label>
        <div style="background:#f9fafb;border:1px solid var(--border);border-radius:6px;padding:10px">
          ${platformChecks}
          <label style="display:flex;align-items:center;gap:6px;font-size:.8rem;padding:4px 0">
            <input type="checkbox" id="edit-pf-other-chk" ${pfOther?'checked':''}
              onchange="document.getElementById('edit-pf-other').style.display=this.checked?'block':'none'">
            Outro
          </label>
          <input id="edit-pf-other" class="form-input" placeholder="Especifique..." value="${escHtml(pfOther)}"
            style="display:${pfOther?'block':'none'};margin-top:4px;font-size:.8rem">
        </div>
      </div>
    </div>`;

  // Populate country datalist
  if (typeof COUNTRIES_LIST !== 'undefined') {
    document.getElementById('edit-country-datalist').innerHTML =
      COUNTRIES_LIST.map(c => `<option value="${c}">`).join('');
  }

  document.getElementById('edit-save-btn').onclick   = () => saveEditModal(id);
  document.getElementById('edit-delete-btn').onclick = () => confirmDeleteProgram(id);

  // Add AI button to footer
  const footer = document.querySelector('#edit-modal-backdrop .modal-footer');
  if (footer && !document.getElementById('ai-reanalyze-btn')) {
    const aiBtn = document.createElement('button');
    aiBtn.id = 'ai-reanalyze-btn';
    aiBtn.className = 'btn btn-outline btn-sm';
    aiBtn.style.cssText = 'color:#4A6FA5;border-color:#4A6FA5';
    aiBtn.textContent = '🤖 Categorizar com IA';
    aiBtn.onclick = () => reAnalyzeWithAI(id);
    footer.insertBefore(aiBtn, footer.querySelector('.btn-outline'));
  } else if (document.getElementById('ai-reanalyze-btn')) {
    document.getElementById('ai-reanalyze-btn').onclick = () => reAnalyzeWithAI(id);
  }

  document.getElementById('edit-modal-backdrop').classList.add('open');
}

function closeEditModal() {
  document.getElementById('edit-modal-backdrop').classList.remove('open');
}

function escHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function saveEditModal(id) {
  const programs = getAllPrograms();
  const idx = programs.findIndex(x => x.id == id);
  if (idx === -1) return;

  const smOther = document.getElementById('edit-sm-other-chk')?.checked
    ? (document.getElementById('edit-sm-other')?.value.trim() || '') : '';
  const pfOther = document.getElementById('edit-pf-other-chk')?.checked
    ? (document.getElementById('edit-pf-other')?.value.trim() || '') : '';

  const strategic = [...document.querySelectorAll('.edit-strategic-check:checked')].map(c => c.value);
  if (smOther) strategic.push(smOther);
  const platform  = [...document.querySelectorAll('.edit-platform-check:checked')].map(c => c.value);
  if (pfOther) platform.push(pfOther);

  programs[idx] = {
    ...programs[idx],
    name:               document.getElementById('ep-name').value.trim()   || programs[idx].name,
    country:            document.getElementById('ep-country').value.trim(),
    region:             document.getElementById('ep-region').value.trim(),
    duration:           document.getElementById('ep-duration').value,
    yearCreated:        parseInt(document.getElementById('ep-year').value) || programs[idx].yearCreated,
    ageRange:           document.getElementById('ep-age').value.trim(),
    annualParticipants: parseInt(document.getElementById('ep-part').value) || 0,
    monthlyCost:        parseFloat(document.getElementById('ep-cost').value) || 0,
    responsiblePerson:  document.getElementById('ep-resp').value.trim(),
    email:              document.getElementById('ep-email').value.trim(),
    website:            document.getElementById('ep-web').value.trim(),
    instagram:          document.getElementById('ep-ig').value.trim(),
    objectives:         document.getElementById('ep-obj').value.trim(),
    strategicFocuses:   strategic,
    platformFocuses:    platform,
    updatedAt:          new Date().toISOString(),
  };

  localStorage.setItem('multiply_programs', JSON.stringify(programs));
  allPrograms = programs;
  applyFilters();
  closeEditModal();
  showToast('Programa atualizado com sucesso!');
}

function confirmDeleteProgram(id) {
  const p = allPrograms.find(x => x.id == id);
  if (!p) return;
  if (!confirm(`Excluir o programa "${p.name}"?\n\nEssa ação não pode ser desfeita.`)) return;
  const programs = getAllPrograms().filter(x => x.id != id);
  localStorage.setItem('multiply_programs', JSON.stringify(programs));
  allPrograms = programs;
  applyFilters();
  closeEditModal();
  showToast('Programa excluído.');
}

// ── AI SETTINGS ────────────────────────────────────────────────
function openAiSettings() {
  const key = localStorage.getItem('multiply_anthropic_key') || '';
  const input = document.getElementById('ai-key-input');
  if (input) input.value = key;
  const status = document.getElementById('ai-key-status');
  if (status) {
    status.innerHTML = key
      ? `<span style="color:#2d8a4e">✓ Chave configurada (${key.substring(0,10)}...)</span>`
      : `<span style="color:var(--text-light)">Nenhuma chave configurada. A IA não irá categorizar automaticamente.</span>`;
  }
  document.getElementById('ai-settings-backdrop').classList.add('open');
}

function saveAiKey() {
  const key = (document.getElementById('ai-key-input')?.value || '').trim();
  if (key) {
    localStorage.setItem('multiply_anthropic_key', key);
    showToast('Chave API salva com sucesso!');
  } else {
    localStorage.removeItem('multiply_anthropic_key');
    showToast('Chave API removida.');
  }
  document.getElementById('ai-settings-backdrop').classList.remove('open');
}

// ── AI RE-ANALYZE from edit modal ──────────────────────────────
async function reAnalyzeWithAI(id) {
  const p = allPrograms.find(x => x.id == id);
  if (!p) return;
  const apiKey = localStorage.getItem('multiply_anthropic_key');
  if (!apiKey) {
    alert('Configure a chave da API Anthropic primeiro (botão 🤖 IA no cabeçalho).');
    return;
  }

  const btn = document.getElementById('ai-reanalyze-btn');
  if (btn) { btn.textContent = '⏳ Analisando...'; btn.disabled = true; }

  const STRATEGIC = ['Mobilizing','Connecting','Witnessing','Gathering','Equipping','Growing','Multiplying','Partnering','Extending'];
  const PLATFORM  = ['Discipleship','Missionary Training','Church Planting','Cross-cultural','Leadership Development','Mobilization','Sustainability','Networking'];

  const prompt = `You are an assistant for the Multiply Global Training Platform, a network connecting missionary training programs worldwide.

Analyze this program and provide:
1. **Strategic Map alignment** (1-3 items from): ${STRATEGIC.join(', ')}
2. **Program focuses** (1-4 items from): ${PLATFORM.join(', ')}
3. **Duration**: mobilizacao (1-7 days), curto (up to 1 month), medio (1-6 months), or longo (6+ months)
4. **Brief analysis** (2-3 sentences in Portuguese)

Program:
- Name: ${p.name}
- Country: ${p.country || 'not specified'}
- Region: ${p.region || 'not specified'}
- Duration: ${p.duration}
- Age: ${p.ageRange || 'not specified'}
- Participants/year: ${p.annualParticipants || 'not specified'}
- Objectives: ${p.objectives || 'not specified'}

Respond ONLY with valid JSON:
{"strategicFocuses":["..."],"platformFocuses":["..."],"duration":"...","analysis":"..."}`;

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5',
        max_tokens: 512,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await res.json();
    const text = data.content?.[0]?.text || '';
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('No JSON');

    const ai = JSON.parse(jsonMatch[0]);

    // Update checkboxes in edit modal
    if (ai.strategicFocuses) {
      document.querySelectorAll('.edit-strategic-check').forEach(c => {
        c.checked = ai.strategicFocuses.includes(c.value);
      });
    }
    if (ai.platformFocuses) {
      document.querySelectorAll('.edit-platform-check').forEach(c => {
        c.checked = ai.platformFocuses.includes(c.value);
      });
    }
    if (ai.duration) {
      const sel = document.getElementById('ep-duration');
      if (sel) sel.value = ai.duration;
    }

    // Show analysis
    const aiSection = document.querySelector('#edit-modal-body > div[style*="background:#f0f4ff"]');
    const analysisHtml = `
      <div style="background:#f0f4ff;border:1px solid #c5d3f5;border-radius:8px;padding:14px;margin-bottom:16px">
        <div style="font-size:.75rem;font-weight:700;color:#4A6FA5;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px">
          🤖 Análise da IA
        </div>
        <div style="font-size:.8rem;color:#3a4a6b;line-height:1.6">${ai.analysis || ''}</div>
      </div>`;
    if (aiSection) {
      aiSection.outerHTML = analysisHtml;
    } else {
      document.getElementById('edit-modal-body').insertAdjacentHTML('afterbegin', analysisHtml);
    }

    // Save analysis to localStorage
    const programs = getAllPrograms();
    const idx = programs.findIndex(x => x.id == id);
    if (idx !== -1) {
      programs[idx].aiAnalysis = ai.analysis;
      programs[idx].aiStatus = 'done';
      localStorage.setItem('multiply_programs', JSON.stringify(programs));
    }

    showToast('Análise da IA concluída!');
  } catch(e) {
    showToast('Erro ao chamar a IA. Verifique a chave da API.');
  } finally {
    if (btn) { btn.textContent = '🤖 Categorizar com IA'; btn.disabled = false; }
  }
}

function showToast(msg) {
  let toast = document.getElementById('dash-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'dash-toast';
    toast.style.cssText = 'position:fixed;bottom:24px;right:24px;background:#1A2745;color:#fff;padding:12px 20px;border-radius:8px;font-size:.875rem;z-index:9999;box-shadow:0 4px 16px rgba(0,0,0,.3);transition:opacity .3s';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.style.opacity = '0', 2800);
}

document.addEventListener('DOMContentLoaded', () => {
  const backdrop = document.getElementById('modal-backdrop');
  if (backdrop) {
    backdrop.addEventListener('click', e => {
      if (e.target === backdrop) closeModal();
    });
  }
  const editBackdrop = document.getElementById('edit-modal-backdrop');
  if (editBackdrop) {
    editBackdrop.addEventListener('click', e => {
      if (e.target === editBackdrop) closeEditModal();
    });
  }
});

// ── WORLD MAP (Leaflet + OpenStreetMap) ───────────────────────
function renderMap() {
  const container = document.getElementById('world-map');
  if (!container || !window.L) return;

  if (!map) {
    map = L.map('world-map', {
      center: [15, -40],
      zoom: 2,
      zoomControl: true,
      scrollWheelZoom: false
    });

    // OpenStreetMap — sem API key necessária
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 10
    }).addTo(map);
  }

  markers.forEach(m => map.removeLayer(m));
  markers = [];

  const byCoords = {};
  filteredPrograms.forEach(p => {
    let lat = p.lat, lng = p.lng;
    // If no coords stored, resolve from country name via normalizeCountry()
    if ((!lat || !lng) && p.country && typeof normalizeCountry === 'function') {
      const canonical = normalizeCountry(p.country);
      if (canonical && COUNTRY_COORDS[canonical]) {
        lat = COUNTRY_COORDS[canonical].lat;
        lng = COUNTRY_COORDS[canonical].lng;
      }
    }
    const key = `${lat},${lng}`;
    if (lat && lng) {
      if (!byCoords[key]) byCoords[key] = { lat, lng, programs: [] };
      byCoords[key].programs.push(p);
    }
  });

  Object.values(byCoords).forEach(group => {
    const count = group.programs.length;
    const dur   = group.programs[0].duration === 'mobilizacao' ? 'curto' : group.programs[0].duration;
    const color = COLORS[dur] || '#4A6FA5';
    const size  = count === 1 ? 10 : count <= 3 ? 14 : count <= 7 ? 18 : 24;

    const icon = L.divIcon({
      className: '',
      html: `<div style="
        width:${size*2}px;height:${size*2}px;border-radius:50%;
        background:${color};border:2px solid rgba(255,255,255,.9);
        display:flex;align-items:center;justify-content:center;
        color:#fff;font-size:${size > 12 ? '10' : '8'}px;font-weight:700;
        box-shadow:0 2px 8px rgba(0,0,0,.3);cursor:pointer;">${count > 1 ? count : ''}</div>`,
      iconSize: [size*2, size*2],
      iconAnchor: [size, size]
    });

    const names = group.programs.map(p =>
      `<div style="padding:4px 0;border-bottom:1px solid #eee">
        <strong style="font-size:12px">${p.name}</strong><br>
        <span style="font-size:11px;color:#6B7FA5">${getDurLabel(p.duration)}</span>
      </div>`
    ).join('');

    const popup = L.popup({ maxWidth: 240 }).setContent(`
      <div style="font-family:Inter,sans-serif;padding:4px;min-width:180px">
        <div style="font-weight:700;color:#1A2745;margin-bottom:8px;font-size:13px">${group.programs[0].country}</div>
        ${names}
      </div>`);

    const marker = L.marker([group.lat, group.lng], { icon }).addTo(map);
    marker.bindPopup(popup);
    markers.push(marker);
  });
}

// ── EXPORT MENU ────────────────────────────────────────────────
function toggleExportMenu() {
  const menu = document.getElementById('export-dropdown');
  if (menu) menu.classList.toggle('open');
}

document.addEventListener('click', e => {
  if (!e.target.closest('.export-menu')) {
    document.getElementById('export-dropdown')?.classList.remove('open');
  }
});

function doExport(format) {
  document.getElementById('export-dropdown')?.classList.remove('open');
  if (format === 'csv')  exportCSV(filteredPrograms);
  if (format === 'json') exportJSON(filteredPrograms);
  if (format === 'tsv')  exportTSV(filteredPrograms);
  if (format === 'pdf')  exportPDF(filteredPrograms);
}
