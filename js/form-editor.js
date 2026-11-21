// ============================================================
// MULTIPLY PLATFORM — EDITOR DE PERGUNTAS DO FORMULÁRIO
// Permite adicionar, editar, reordenar e remover perguntas
// do formulário de afiliação, direto no dashboard.
// As perguntas customizadas ficam salvas no localStorage.
// ============================================================

const FORM_QUESTIONS_KEY = 'multiply_form_questions';

// Tipos de campo disponíveis
const FIELD_TYPES = {
  text:     'Texto curto',
  textarea: 'Texto longo',
  number:   'Número',
  email:    'E-mail',
  select:   'Lista suspensa',
  checkbox: 'Múltipla escolha',
};

// ── CARREGAR PERGUNTAS ─────────────────────────────────────
function loadFormQuestions() {
  try {
    const saved = localStorage.getItem(FORM_QUESTIONS_KEY);
    if (saved) return JSON.parse(saved);
  } catch {}
  return getDefaultQuestions();
}

function saveFormQuestions(questions) {
  localStorage.setItem(FORM_QUESTIONS_KEY, JSON.stringify(questions));
}

function getDefaultQuestions() {
  return [
    { id: 'q1', step: 1, label: 'Nome do Programa', type: 'text', placeholder: 'Ex: GPS – Generación Proclamando Salvación', required: true, key: 'name' },
    { id: 'q2', step: 1, label: 'Países de Atuação', type: 'countries', options: [], required: true, key: 'countries' },
    { id: 'q3', step: 1, label: 'Região', type: 'select', options: ['América do Norte / North America','América Central / Central America','América do Sul / South America','Europa / Europe','África / Africa','Oriente Médio / Middle East','Ásia / Asia','Oceania'], required: true, key: 'region' },
    { id: 'q4', step: 1, label: 'Duração do Programa', type: 'select', options: ['Curto Prazo (até 1 mês)','Médio Prazo (1–6 meses)','Longo Prazo (6+ meses)'], required: true, key: 'duration' },
    { id: 'q5', step: 1, label: 'Ano de Criação', type: 'number', placeholder: 'Ex: 2015', required: false, key: 'yearCreated' },
    { id: 'q6', step: 2, label: 'Faixa Etária dos Participantes', type: 'text', placeholder: 'Ex: 18–35', required: false, key: 'ageRange' },
    { id: 'q7', step: 2, label: 'Participantes por Ano (estimado)', type: 'number', placeholder: 'Ex: 120', required: false, key: 'annualParticipants' },
    { id: 'q8', step: 2, label: 'Custo Mensal por Estudante (USD)', type: 'number', placeholder: 'Ex: 500', required: false, key: 'monthlyCost' },
    { id: 'q9', step: 2, label: 'Objetivos e Descrição do Programa', type: 'textarea', placeholder: 'Descreva brevemente os objetivos, metodologia e foco do programa...', required: true, key: 'objectives' },
    { id: 'q10', step: 3, label: 'Alinhamento com o Mapa Estratégico', type: 'checkbox', options: ['Mobilizing','Connecting','Witnessing','Gathering','Equipping','Growing','Multiplying','Partnering','Extending'], required: false, key: 'strategicFocuses' },
    { id: 'q11', step: 3, label: 'Focos da Plataforma', type: 'checkbox', options: ['Discipleship','Missionary Training','Church Planting','Cross-cultural','Leadership Development','Mobilization','Sustainability','Networking'], required: false, key: 'platformFocuses' },
    { id: 'q12', step: 4, label: 'Nome do Responsável', type: 'text', placeholder: 'Nome completo', required: true, key: 'responsiblePerson' },
    { id: 'q13', step: 4, label: 'E-mail de Contato', type: 'email', placeholder: 'email@exemplo.com', required: true, key: 'email' },
    { id: 'q14', step: 4, label: 'Site do Programa', type: 'text', placeholder: 'www.seuprograma.org', required: false, key: 'website' },
    { id: 'q15', step: 4, label: 'Instagram', type: 'text', placeholder: '@seuprograma', required: false, key: 'instagram' },
  ];
}

// ── ABRIR MODAL DO EDITOR ──────────────────────────────────
function openFormEditor() {
  const questions = loadFormQuestions();
  const steps = { 1: 'Etapa 1 — Identificação', 2: 'Etapa 2 — Detalhes', 3: 'Etapa 3 — Alinhamento', 4: 'Etapa 4 — Contato' };

  const html = `
    <div id="fe-backdrop" style="
      position:fixed;inset:0;background:rgba(10,18,40,.7);z-index:9999;
      display:flex;align-items:flex-start;justify-content:center;
      overflow-y:auto;padding:40px 20px;">
      <div style="
        background:#fff;border-radius:16px;width:100%;max-width:780px;
        box-shadow:0 24px 60px rgba(0,0,0,.35);overflow:hidden;">

        <!-- Header -->
        <div style="background:#1A2745;padding:24px 28px;display:flex;align-items:center;justify-content:space-between">
          <div>
            <div style="font-size:.7rem;font-weight:700;letter-spacing:.15em;color:#C9A84C">MULTIPLY</div>
            <h2 style="color:#fff;font-size:1.1rem;font-weight:700;margin-top:4px">Editor de Perguntas do Formulário</h2>
          </div>
          <button onclick="closeFormEditor()" style="background:rgba(255,255,255,.1);border:none;color:#fff;border-radius:8px;padding:8px 12px;cursor:pointer;font-size:.85rem">✕ Fechar</button>
        </div>

        <!-- Body -->
        <div style="padding:28px">
          <div style="background:#f0f4ff;border:1px solid #d0daf5;border-radius:8px;padding:12px 16px;margin-bottom:24px;font-size:.82rem;color:#3D5080;line-height:1.5">
            💡 Arraste para reordenar, edite os rótulos e clique <strong>Salvar alterações</strong>. As mudanças aparecem no formulário público imediatamente.
          </div>

          <div id="fe-questions-list">
            ${renderEditorList(questions, steps)}
          </div>

          <!-- Add question -->
          <div style="border:2px dashed #d0daf5;border-radius:10px;padding:20px;margin-top:16px;text-align:center">
            <div style="font-size:.85rem;color:#6B7FA5;margin-bottom:12px">Adicionar nova pergunta</div>
            <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center">
              ${Object.entries(FIELD_TYPES).map(([type, label]) =>
                `<button onclick="addQuestion('${type}')" style="
                  padding:7px 14px;border:1.5px solid #d0daf5;border-radius:7px;
                  background:#fff;color:#3D5080;font-size:.8rem;font-weight:600;
                  cursor:pointer;font-family:inherit;transition:all .15s"
                  onmouseover="this.style.borderColor='#4A6FA5';this.style.color='#1A2745'"
                  onmouseout="this.style.borderColor='#d0daf5';this.style.color='#3D5080'">
                  + ${label}
                </button>`).join('')}
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div style="padding:16px 28px 24px;display:flex;gap:12px;justify-content:flex-end;border-top:1px solid #edf0f8">
          <button onclick="resetFormQuestions()" style="
            padding:10px 20px;border:1.5px solid #d0daf5;border-radius:8px;
            background:#fff;color:#6B7FA5;font-size:.88rem;font-weight:600;
            cursor:pointer;font-family:inherit">
            ↺ Restaurar padrão
          </button>
          <button onclick="saveEditorChanges()" style="
            padding:10px 24px;border:none;border-radius:8px;
            background:#1A2745;color:#fff;font-size:.88rem;font-weight:700;
            cursor:pointer;font-family:inherit">
            ✓ Salvar alterações
          </button>
        </div>
      </div>
    </div>`;

  document.body.insertAdjacentHTML('beforeend', html);
  document.getElementById('fe-backdrop').addEventListener('click', e => {
    if (e.target.id === 'fe-backdrop') closeFormEditor();
  });
}

function renderEditorList(questions, steps) {
  const byStep = { 1: [], 2: [], 3: [], 4: [] };
  questions.forEach(q => byStep[q.step]?.push(q));

  return Object.entries(steps).map(([stepNum, stepName]) => {
    const qs = byStep[stepNum] || [];
    return `
      <div style="margin-bottom:24px">
        <div style="font-size:.7rem;font-weight:700;letter-spacing:.1em;color:#C9A84C;margin-bottom:10px;text-transform:uppercase">${stepName}</div>
        ${qs.map(q => renderQuestionRow(q)).join('')}
      </div>`;
  }).join('');
}

function renderQuestionRow(q) {
  return `
    <div class="fe-row" data-id="${q.id}" style="
      border:1.5px solid #e8edf8;border-radius:10px;padding:14px 16px;
      margin-bottom:8px;background:#fff;display:flex;align-items:center;gap:12px">
      <div style="color:#b0bad0;font-size:1.1rem;cursor:grab;flex-shrink:0">⠿</div>
      <div style="flex:1;min-width:0">
        <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
          <input
            class="fe-label-input"
            data-id="${q.id}"
            value="${escHtml(q.label)}"
            style="
              flex:1;min-width:140px;border:1.5px solid #e8edf8;border-radius:6px;
              padding:6px 10px;font-size:.88rem;font-family:inherit;color:#1A2745;
              font-weight:600;outline:none;background:#fafbfd"
            onfocus="this.style.borderColor='#4A6FA5'"
            onblur="this.style.borderColor='#e8edf8'">
          <span style="
            font-size:.72rem;padding:3px 8px;border-radius:5px;
            background:#f0f4ff;color:#4A6FA5;font-weight:600;flex-shrink:0">
            ${FIELD_TYPES[q.type] || q.type}
          </span>
          ${q.required ? '<span style="font-size:.72rem;padding:3px 8px;border-radius:5px;background:#fff5e6;color:#b87333;font-weight:600;flex-shrink:0">Obrigatório</span>' : ''}
        </div>
        ${q.placeholder ? `<div style="font-size:.75rem;color:#9BA8C0;margin-top:4px">Exemplo: ${escHtml(q.placeholder)}</div>` : ''}
        ${q.options ? `<div style="font-size:.75rem;color:#9BA8C0;margin-top:4px">Opções: ${q.options.slice(0,3).join(', ')}${q.options.length > 3 ? '...' : ''}</div>` : ''}
      </div>
      <div style="display:flex;gap:6px;flex-shrink:0">
        <button onclick="editQuestion('${q.id}')" style="
          padding:6px 10px;border:1.5px solid #d0daf5;border-radius:6px;
          background:#fff;color:#4A6FA5;font-size:.8rem;cursor:pointer;font-family:inherit"
          title="Editar">✎</button>
        <button onclick="toggleRequired('${q.id}')" style="
          padding:6px 10px;border:1.5px solid #d0daf5;border-radius:6px;
          background:#fff;color:#b87333;font-size:.8rem;cursor:pointer;font-family:inherit"
          title="${q.required ? 'Tornar opcional' : 'Tornar obrigatório'}">
          ${q.required ? '✱' : '○'}</button>
        <button onclick="removeQuestion('${q.id}')" style="
          padding:6px 10px;border:1.5px solid #fecaca;border-radius:6px;
          background:#fff;color:#dc2626;font-size:.8rem;cursor:pointer;font-family:inherit"
          title="Remover">✕</button>
      </div>
    </div>`;
}

function escHtml(s) {
  return (s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ── AÇÕES DO EDITOR ────────────────────────────────────────
function addQuestion(type) {
  const questions = loadFormQuestions();
  const newQ = {
    id: 'q_' + Date.now(),
    step: 4,
    label: 'Nova pergunta',
    type,
    placeholder: type === 'number' ? 'Ex: 0' : 'Digite aqui...',
    required: false,
    key: 'custom_' + Date.now(),
    options: type === 'select' || type === 'checkbox' ? ['Opção 1', 'Opção 2', 'Opção 3'] : undefined
  };
  questions.push(newQ);
  saveFormQuestions(questions);
  refreshEditorList();
  // Abrir edição imediatamente
  setTimeout(() => editQuestion(newQ.id), 100);
}

function removeQuestion(id) {
  if (!confirm('Remover esta pergunta do formulário?')) return;
  const questions = loadFormQuestions().filter(q => q.id !== id);
  saveFormQuestions(questions);
  refreshEditorList();
}

function toggleRequired(id) {
  const questions = loadFormQuestions();
  const q = questions.find(x => x.id === id);
  if (q) q.required = !q.required;
  saveFormQuestions(questions);
  refreshEditorList();
}

function editQuestion(id) {
  const questions = loadFormQuestions();
  const q = questions.find(x => x.id === id);
  if (!q) return;

  const stepOpts = [1,2,3,4].map(n =>
    `<option value="${n}" ${q.step == n ? 'selected' : ''}>Etapa ${n}</option>`).join('');

  const optionsHtml = (q.type === 'select' || q.type === 'checkbox')
    ? `<div style="margin-top:16px">
        <label style="${labelStyle}">Opções (uma por linha)</label>
        <textarea id="fe-edit-options" style="${inputStyle};min-height:100px" rows="5">${(q.options||[]).join('\n')}</textarea>
      </div>`
    : '';

  const labelStyle = 'display:block;font-size:.75rem;font-weight:600;color:#3D5080;margin-bottom:5px;letter-spacing:.04em';
  const inputStyle = 'width:100%;padding:9px 12px;border:1.5px solid #d8dff0;border-radius:7px;font-size:.88rem;font-family:inherit;color:#1A2745;outline:none;box-sizing:border-box';

  const modal = document.createElement('div');
  modal.id = 'fe-edit-modal';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(10,18,40,.75);z-index:10000;display:flex;align-items:center;justify-content:center;padding:20px';
  modal.innerHTML = `
    <div style="background:#fff;border-radius:14px;width:100%;max-width:500px;box-shadow:0 24px 60px rgba(0,0,0,.4)">
      <div style="background:#1A2745;padding:20px 24px;border-radius:14px 14px 0 0;display:flex;justify-content:space-between;align-items:center">
        <h3 style="color:#fff;font-size:1rem;font-weight:700">Editar Pergunta</h3>
        <button onclick="document.getElementById('fe-edit-modal').remove()" style="background:rgba(255,255,255,.1);border:none;color:#fff;border-radius:6px;padding:5px 10px;cursor:pointer">✕</button>
      </div>
      <div style="padding:24px;display:flex;flex-direction:column;gap:14px">
        <div>
          <label style="${labelStyle}">Rótulo da pergunta *</label>
          <input id="fe-edit-label" value="${escHtml(q.label)}" style="${inputStyle}">
        </div>
        <div>
          <label style="${labelStyle}">Texto de exemplo (placeholder)</label>
          <input id="fe-edit-ph" value="${escHtml(q.placeholder||'')}" style="${inputStyle}">
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
          <div>
            <label style="${labelStyle}">Etapa do formulário</label>
            <select id="fe-edit-step" style="${inputStyle}">${stepOpts}</select>
          </div>
          <div>
            <label style="${labelStyle}">Obrigatório?</label>
            <select id="fe-edit-req" style="${inputStyle}">
              <option value="false" ${!q.required?'selected':''}>Não</option>
              <option value="true" ${q.required?'selected':''}>Sim</option>
            </select>
          </div>
        </div>
        ${(q.type === 'select' || q.type === 'checkbox') ? `
        <div>
          <label style="${labelStyle}">Opções (uma por linha)</label>
          <textarea id="fe-edit-options" style="${inputStyle};min-height:90px" rows="5">${(q.options||[]).join('\n')}</textarea>
        </div>` : ''}
      </div>
      <div style="padding:0 24px 24px;display:flex;gap:10px;justify-content:flex-end">
        <button onclick="document.getElementById('fe-edit-modal').remove()" style="padding:9px 18px;border:1.5px solid #d0daf5;border-radius:7px;background:#fff;color:#6B7FA5;font-size:.85rem;font-weight:600;cursor:pointer;font-family:inherit">Cancelar</button>
        <button onclick="saveQuestionEdit('${id}')" style="padding:9px 20px;border:none;border-radius:7px;background:#1A2745;color:#fff;font-size:.85rem;font-weight:700;cursor:pointer;font-family:inherit">Salvar</button>
      </div>
    </div>`;
  document.body.appendChild(modal);
  setTimeout(() => document.getElementById('fe-edit-label')?.focus(), 50);
}

function saveQuestionEdit(id) {
  const questions = loadFormQuestions();
  const q = questions.find(x => x.id === id);
  if (!q) return;

  q.label    = document.getElementById('fe-edit-label')?.value || q.label;
  q.placeholder = document.getElementById('fe-edit-ph')?.value || '';
  q.step     = parseInt(document.getElementById('fe-edit-step')?.value) || q.step;
  q.required = document.getElementById('fe-edit-req')?.value === 'true';

  const optEl = document.getElementById('fe-edit-options');
  if (optEl) {
    q.options = optEl.value.split('\n').map(s => s.trim()).filter(Boolean);
  }

  saveFormQuestions(questions);
  document.getElementById('fe-edit-modal')?.remove();
  refreshEditorList();
}

function saveEditorChanges() {
  // Also save any inline label edits
  const questions = loadFormQuestions();
  document.querySelectorAll('.fe-label-input').forEach(inp => {
    const id = inp.dataset.id;
    const q = questions.find(x => x.id === id);
    if (q) q.label = inp.value;
  });
  saveFormQuestions(questions);

  // Show success toast
  const toast = document.createElement('div');
  toast.style.cssText = 'position:fixed;bottom:28px;right:28px;background:#1A2745;color:#fff;padding:12px 20px;border-radius:10px;font-size:.88rem;font-weight:600;z-index:99999;box-shadow:0 8px 24px rgba(0,0,0,.3)';
  toast.textContent = '✓ Alterações salvas com sucesso!';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

function resetFormQuestions() {
  if (!confirm('Restaurar todas as perguntas para o padrão? As perguntas customizadas serão perdidas.')) return;
  saveFormQuestions(getDefaultQuestions());
  refreshEditorList();
}

function refreshEditorList() {
  const questions = loadFormQuestions();
  const steps = { 1: 'Etapa 1 — Identificação', 2: 'Etapa 2 — Detalhes', 3: 'Etapa 3 — Alinhamento', 4: 'Etapa 4 — Contato' };
  const listEl = document.getElementById('fe-questions-list');
  if (listEl) listEl.innerHTML = renderEditorList(questions, steps);
}

function closeFormEditor() {
  document.getElementById('fe-backdrop')?.remove();
}
