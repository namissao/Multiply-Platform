// ============================================================
// MULTIPLY PLATFORM — EXPORT FUNCTIONS
// Supports: CSV, JSON, Excel-like TSV, PDF (print dialog)
// ============================================================

// ── CSV EXPORT ─────────────────────────────────────────────────
function exportCSV(programs) {
  const headers = [
    'ID','Name','Country','Region','Duration','Year Created',
    'Age Range','Annual Participants','Monthly Cost (USD)',
    'Objectives','Responsible','Website','Instagram',
    'Strategic Focuses','Platform Focuses','Quality Seal'
  ];

  const rows = programs.map(p => [
    p.id,
    `"${(p.name||'').replace(/"/g,'""')}"`,
    p.country || '',
    p.region  || '',
    p.duration || '',
    p.yearCreated || '',
    p.ageRange || '',
    p.annualParticipants || '',
    p.monthlyCost || '',
    `"${(p.objectives||'').replace(/"/g,'""')}"`,
    `"${(p.responsiblePerson||'').replace(/"/g,'""')}"`,
    p.website || '',
    p.instagram || '',
    `"${(p.strategicFocuses||[]).join('; ')}"`,
    `"${(p.platformFocuses||[]).join('; ')}"`,
    p.qualitySeal ? 'Yes' : 'No'
  ].join(','));

  const csv = [headers.join(','), ...rows].join('\n');
  downloadFile(csv, 'multiply-programs.csv', 'text/csv;charset=utf-8;');
}

// ── JSON EXPORT ────────────────────────────────────────────────
function exportJSON(programs) {
  const json = JSON.stringify(programs, null, 2);
  downloadFile(json, 'multiply-programs.json', 'application/json');
}

// ── TSV (Excel-compatible) ─────────────────────────────────────
function exportTSV(programs) {
  const headers = [
    'Name','Country','Region','Duration','Year','Age Range',
    'Annual Participants','Monthly Cost','Objectives',
    'Responsible','Website','Instagram','Quality Seal'
  ];

  const rows = programs.map(p => [
    p.name || '',
    p.country || '',
    p.region || '',
    p.duration || '',
    p.yearCreated || '',
    p.ageRange || '',
    p.annualParticipants || '',
    p.monthlyCost || '',
    (p.objectives || '').replace(/\t/g, ' ').replace(/\n/g, ' '),
    p.responsiblePerson || '',
    p.website || '',
    p.instagram || '',
    p.qualitySeal ? 'Yes' : 'No'
  ].join('\t'));

  const tsv = [headers.join('\t'), ...rows].join('\n');
  downloadFile(tsv, 'multiply-programs.tsv', 'text/tab-separated-values;charset=utf-8;');
}

// ── PRINT / PDF ────────────────────────────────────────────────
function exportPDF(programs, filters) {
  // Build a print-optimized HTML page and open it
  const html = buildPrintHTML(programs, filters);
  const win = window.open('', '_blank');
  win.document.write(html);
  win.document.close();
  setTimeout(() => win.print(), 600);
}

function buildPrintHTML(programs, filters) {
  const now = new Date().toLocaleDateString('es-LA', { year:'numeric', month:'long', day:'numeric' });
  const rows = programs.map(p => `
    <tr>
      <td><strong>${p.name}</strong></td>
      <td>${p.country}</td>
      <td>${getDurationLabel(p.duration)}</td>
      <td>${p.yearCreated || '—'}</td>
      <td>${p.ageRange || '—'}</td>
      <td>${p.annualParticipants || '—'}</td>
      <td>${p.qualitySeal ? '★ Sello' : '—'}</td>
    </tr>`).join('');

  const stats = getStats(programs);

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Multiply — Programas de Entrenamiento</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, sans-serif; font-size: 10pt; color: #1A2745; padding: 24px; }
    .header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #1A2745; }
    .header h1 { font-size: 16pt; color: #1A2745; }
    .header .meta { font-size: 8pt; color: #666; text-align: right; }
    .stats { display: flex; gap: 24px; margin-bottom: 20px; }
    .stat { background: #f4f6fa; padding: 10px 16px; border-radius: 6px; text-align: center; }
    .stat .num { font-size: 20pt; font-weight: 700; color: #1A2745; }
    .stat .lbl { font-size: 7pt; color: #666; }
    table { width: 100%; border-collapse: collapse; font-size: 9pt; }
    th { background: #1A2745; color: #fff; padding: 8px 10px; text-align: left; }
    td { padding: 7px 10px; border-bottom: 1px solid #dde3ef; }
    tr:nth-child(even) { background: #f8f9fb; }
    @media print {
      @page { margin: 1.5cm; size: A4 landscape; }
      body { padding: 0; }
    }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <div style="font-size:8pt;color:#C9A84C;font-weight:600;letter-spacing:.08em">MULTIPLY — PLATAFORMA GLOBAL DE ENTRENAMIENTO</div>
      <h1>Programas de Entrenamiento</h1>
    </div>
    <div class="meta">Generado: ${now}<br>Total: ${programs.length} programas</div>
  </div>
  <div class="stats">
    <div class="stat"><div class="num">${stats.total}</div><div class="lbl">Total</div></div>
    <div class="stat"><div class="num">${stats.byDuration.mobilizacao.length}</div><div class="lbl">Movilización</div></div>
    <div class="stat"><div class="num">${stats.byDuration.curto.length}</div><div class="lbl">Corto Plazo</div></div>
    <div class="stat"><div class="num">${stats.byDuration.medio.length}</div><div class="lbl">Mediano Plazo</div></div>
    <div class="stat"><div class="num">${stats.byDuration.longo.length}</div><div class="lbl">Largo Plazo</div></div>
    <div class="stat"><div class="num">${stats.withSeal}</div><div class="lbl">Con Sello</div></div>
  </div>
  <table>
    <thead>
      <tr>
        <th>Programa</th><th>País</th><th>Duración</th>
        <th>Año</th><th>Edad</th><th>Part./Año</th><th>Sello</th>
      </tr>
    </thead>
    <tbody>${rows}</tbody>
  </table>
</body>
</html>`;
}

// ── SINGLE PROGRAM PDF ─────────────────────────────────────────
function exportProgramPDF(program) {
  const html = buildProgramHTML(program);
  const win = window.open('', '_blank');
  win.document.write(html);
  win.document.close();
  setTimeout(() => win.print(), 600);
}

function buildProgramHTML(p) {
  const focuses = (p.strategicFocuses || []).map(f => `<span style="background:#f4f6fa;padding:3px 8px;border-radius:4px;font-size:9pt">${f}</span>`).join(' ');
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${p.name}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, sans-serif; color: #1A2745; padding: 32px; }
    .header { background: #1A2745; color: #fff; padding: 24px 28px; border-radius: 8px; margin-bottom: 24px; }
    .header h1 { font-size: 18pt; }
    .header .sub { color: rgba(255,255,255,.7); font-size: 10pt; margin-top: 4px; }
    .seal { display:inline-block; background:#C9A84C; color:#1A2745; padding:4px 12px; border-radius:20px; font-size:9pt; font-weight:700; margin-top:8px; }
    .grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:20px; }
    .field { background:#f4f6fa; padding:12px 16px; border-radius:6px; }
    .field .label { font-size:8pt; color:#6B7FA5; font-weight:600; letter-spacing:.05em; margin-bottom:4px; }
    .field .value { font-size:11pt; font-weight:600; color:#1A2745; }
    .section-title { font-size:8pt; font-weight:700; color:#C9A84C; letter-spacing:.1em; margin:20px 0 10px; border-bottom:1px solid #f0e8cc; padding-bottom:6px; }
    @media print { @page { margin:1.5cm; } body { padding: 0; } }
  </style>
</head>
<body>
  <div class="header">
    <div style="font-size:8pt;color:#C9A84C;font-weight:600;letter-spacing:.1em">MULTIPLY — PLATAFORMA GLOBAL DE ENTRENAMIENTO</div>
    <h1>${p.name}</h1>
    <div class="sub">${p.country} · ${getDurationLabel(p.duration)}</div>
    ${p.qualitySeal ? '<div class="seal">★ Sello de Calidad</div>' : ''}
  </div>
  <div class="grid">
    <div class="field"><div class="label">PAÍS</div><div class="value">${p.country || '—'}</div></div>
    <div class="field"><div class="label">REGIÓN</div><div class="value">${p.region || '—'}</div></div>
    <div class="field"><div class="label">DURACIÓN</div><div class="value">${getDurationLabel(p.duration)}</div></div>
    <div class="field"><div class="label">AÑO FUNDADO</div><div class="value">${p.yearCreated || '—'}</div></div>
    <div class="field"><div class="label">RANGO DE EDAD</div><div class="value">${p.ageRange || '—'}</div></div>
    <div class="field"><div class="label">PARTICIPANTES/AÑO</div><div class="value">${p.annualParticipants || '—'}</div></div>
    <div class="field"><div class="label">COSTO MENSUAL (USD)</div><div class="value">${p.monthlyCost ? '$'+p.monthlyCost : '—'}</div></div>
    <div class="field"><div class="label">RESPONSABLE</div><div class="value">${p.responsiblePerson || '—'}</div></div>
  </div>
  ${p.objectives ? `<div class="section-title">OBJETIVOS</div><p style="font-size:10pt;line-height:1.6;color:#3D5080">${p.objectives}</p>` : ''}
  ${p.strategicFocuses?.length ? `<div class="section-title">ALINEAMIENTO ESTRATÉGICO</div><div style="display:flex;flex-wrap:wrap;gap:6px">${focuses}</div>` : ''}
  ${p.website || p.instagram ? `
    <div class="section-title">CONTACTO</div>
    <div style="display:flex;gap:16px;font-size:10pt">
      ${p.website ? `<span>🌐 ${p.website}</span>` : ''}
      ${p.instagram ? `<span>📷 ${p.instagram}</span>` : ''}
    </div>` : ''}
</body>
</html>`;
}

// ── UTILS ──────────────────────────────────────────────────────
function getDurationLabel(dur) {
  const labels = {
    mobilizacao: 'Movilización (1–7 días)',
    curto:       'Corto Plazo (hasta 1 mes)',
    medio:       'Mediano Plazo (1–6 meses)',
    longo:       'Largo Plazo (6+ meses)'
  };
  return labels[dur] || dur || '—';
}

function downloadFile(content, filename, mime) {
  const blob = new Blob(['﻿' + content], { type: mime });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}
