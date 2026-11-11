// ============================================================
// MULTIPLY PLATFORM — DASHBOARD LOGIC
// Charts via Chart.js, Map via Leaflet
// ============================================================

// ── STATE ─────────────────────────────────────────────────────
let allPrograms = [];
let filteredPrograms = [];
let charts = {};
let map = null;
let markers = [];

const COLORS = {
  mobilizacao: '#6366f1',
  curto:       '#4A6FA5',
  medio:       '#C9A84C',
  longo:       '#1A2745'
};

const DURATION_LABELS = {
  mobilizacao: 'Movilización',
  curto:       'Corto Plazo',
  medio:       'Mediano Plazo',
  longo:       'Largo Plazo'
};

// ── INIT ───────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  allPrograms = getAllPrograms();
  filteredPrograms = [...allPrograms];
  populateFilters();
  renderDashboard();
});

// ── FILTERS ───────────────────────────────────────────────────
function populateFilters() {
  const countries = [...new Set(allPrograms.map(p => p.country).filter(Boolean))].sort();
  const regions   = [...new Set(allPrograms.map(p => p.region).filter(Boolean))].sort();

  const fCountry = document.getElementById('filter-country');
  const fRegion  = document.getElementById('filter-region');

  if (fCountry) {
    fCountry.innerHTML = '<option value="">Todos los países</option>' +
      countries.map(c => `<option value="${c}">${c}</option>`).join('');
  }
  if (fRegion) {
    fRegion.innerHTML = '<option value="">Todas las regiones</option>' +
      regions.map(r => `<option value="${r}">${r}</option>`).join('');
  }
}

function applyFilters() {
  const dur     = document.getElementById('filter-duration')?.value || '';
  const country = document.getElementById('filter-country')?.value  || '';
  const region  = document.getElementById('filter-region')?.value   || '';
  const search  = document.getElementById('filter-search')?.value.toLowerCase() || '';
  const seal    = document.getElementById('filter-seal')?.value     || '';

  filteredPrograms = allPrograms.filter(p => {
    if (dur     && p.duration !== dur) return false;
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
  setInner('stat-total',    s.total);
  setInner('stat-mob',      s.byDuration.mobilizacao.length);
  setInner('stat-curto',    s.byDuration.curto.length);
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

// ── DONUT CHART (duration distribution) ───────────────────────
function renderDonutChart() {
  const ctx = document.getElementById('chart-donut');
  if (!ctx) return;

  const dur = ['mobilizacao','curto','medio','longo'];
  const data = dur.map(d => filteredPrograms.filter(p => p.duration === d).length);
  const labels = dur.map(d => DURATION_LABELS[d]);
  const colors = dur.map(d => COLORS[d]);

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

// ── BAR CHART (programs by country) ───────────────────────────
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
        label: 'Programas',
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
        x: {
          grid: { display: false },
          ticks: { font: { size: 10, family: 'Inter' }, color: '#3D5080' }
        },
        y: {
          beginAtZero: true,
          ticks: { stepSize: 1, font: { size: 10 }, color: '#6B7FA5' },
          grid: { color: 'rgba(0,0,0,.05)' }
        }
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

  if (filteredPrograms.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;padding:32px;color:var(--text-light)">No hay programas con los filtros seleccionados.</td></tr>`;
    return;
  }

  tbody.innerHTML = filteredPrograms.map(p => `
    <tr>
      <td class="td-name">${p.name}</td>
      <td class="td-country">${p.country || '—'}</td>
      <td><span class="badge badge-${p.duration}">${DURATION_LABELS[p.duration] || p.duration}</span></td>
      <td>${p.yearCreated || '—'}</td>
      <td>${p.ageRange || '—'}</td>
      <td>${p.annualParticipants ? p.annualParticipants.toLocaleString() : '—'}</td>
      <td>
        <button class="seal-toggle ${p.qualitySeal ? 'has-seal' : ''}"
          onclick="handleToggleSeal(${p.id})" title="Toggle quality seal">
          ${p.qualitySeal ? '★' : '☆'} Sello
        </button>
      </td>
      <td style="display:flex;gap:6px">
        <button class="btn-icon" onclick="showProgramModal(${p.id})" title="Ver detalle">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        </button>
        <button class="btn-icon" onclick="exportProgramPDF(getAllPrograms().find(x=>x.id==${p.id}))" title="Exportar PDF">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        </button>
      </td>
    </tr>`).join('');
}

// ── SEAL TOGGLE ────────────────────────────────────────────────
function handleToggleSeal(id) {
  const p = toggleQualitySeal(id);
  if (!p) return;
  // Update in filteredPrograms too
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

  document.getElementById('modal-title').textContent    = p.name;
  document.getElementById('modal-country').textContent  = p.country || '—';
  document.getElementById('modal-region').textContent   = p.region  || '—';
  document.getElementById('modal-duration').textContent = DURATION_LABELS[p.duration] || p.duration;
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
    ? '<span class="badge badge-seal">★ Sello de Calidad</span>'
    : '<span style="color:var(--text-light);font-size:.85rem">Sin sello aún</span>';

  const focuses = (p.strategicFocuses || []);
  document.getElementById('modal-strategic').innerHTML = focuses.length
    ? focuses.map(f => `<span class="badge" style="background:#f4f6fa;color:var(--text-mid)">${f}</span>`).join(' ')
    : '<span style="color:var(--text-light);font-size:.85rem">—</span>';

  // PDF button
  document.getElementById('modal-pdf-btn').onclick = () => exportProgramPDF(p);
  // Seal toggle
  document.getElementById('modal-seal-btn').onclick = () => { handleToggleSeal(p.id); showProgramModal(p.id); };

  document.getElementById('modal-backdrop').classList.add('open');
}

function closeModal() {
  document.getElementById('modal-backdrop').classList.remove('open');
}

// Close on backdrop click
document.addEventListener('DOMContentLoaded', () => {
  const backdrop = document.getElementById('modal-backdrop');
  if (backdrop) {
    backdrop.addEventListener('click', e => {
      if (e.target === backdrop) closeModal();
    });
  }
});

// ── WORLD MAP (Leaflet) ────────────────────────────────────────
function renderMap() {
  const container = document.getElementById('world-map');
  if (!container) return;

  if (!window.L) return; // Leaflet not loaded

  // Init map
  if (!map) {
    map = L.map('world-map', {
      center: [15, -40],
      zoom: 2,
      zoomControl: true,
      scrollWheelZoom: false
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '© OpenStreetMap contributors, © CARTO',
      subdomains: 'abcd',
      maxZoom: 10
    }).addTo(map);
  }

  // Clear existing markers
  markers.forEach(m => map.removeLayer(m));
  markers = [];

  // Group by lat/lng (country)
  const byCoords = {};
  filteredPrograms.forEach(p => {
    const key = `${p.lat},${p.lng}`;
    if (p.lat && p.lng) {
      if (!byCoords[key]) byCoords[key] = { lat: p.lat, lng: p.lng, programs: [] };
      byCoords[key].programs.push(p);
    }
  });

  Object.values(byCoords).forEach(group => {
    const count = group.programs.length;
    const dur   = group.programs[0].duration; // color by first program's duration
    const color = COLORS[dur] || '#4A6FA5';
    const size  = count === 1 ? 10 : count <= 3 ? 14 : count <= 7 ? 18 : 24;

    const icon = L.divIcon({
      className: '',
      html: `<div style="
        width:${size*2}px;height:${size*2}px;border-radius:50%;
        background:${color};border:2px solid rgba(255,255,255,.8);
        display:flex;align-items:center;justify-content:center;
        color:#fff;font-size:${size > 12 ? '10' : '8'}px;font-weight:700;
        box-shadow:0 2px 8px rgba(0,0,0,.4);cursor:pointer;
        transition:transform .15s">${count > 1 ? count : ''}</div>`,
      iconSize: [size*2, size*2],
      iconAnchor: [size, size]
    });

    const names = group.programs.map(p =>
      `<div style="padding:4px 0;border-bottom:1px solid rgba(255,255,255,.1)">
        <strong>${p.name}</strong><br>
        <span style="font-size:11px;opacity:.8">${DURATION_LABELS[p.duration]}</span>
      </div>`
    ).join('');

    const popup = L.popup({ maxWidth: 240, className: 'map-popup' }).setContent(`
      <div style="font-family:Inter,sans-serif;padding:4px;min-width:180px">
        <div style="font-weight:700;color:#1A2745;margin-bottom:8px">${group.programs[0].country}</div>
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

// Close export menu on click outside
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
