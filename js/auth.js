// ============================================================
// MULTIPLY PLATFORM — AUTENTICAÇÃO
// Login com e-mail + senha. Apenas admins cadastrados acessam.
// Para adicionar/remover admins, edite ADMIN_USERS abaixo.
// ============================================================

const ADMIN_USERS = [
  { email: 'admin@multiply.org',   password: 'multiply2024' },
  { email: 'comunic.namissao@gmail.com', password: 'multiply2024' }
  // Adicione mais admins aqui:
  // { email: 'outro@email.com', password: 'outrasenha' },
];

const AUTH_SESSION_KEY = 'multiply_admin_session';

// ── VERIFICAR SE ESTÁ AUTENTICADO ──────────────────────────
function isAuthenticated() {
  try {
    const data = JSON.parse(sessionStorage.getItem(AUTH_SESSION_KEY) || 'null');
    if (!data || !data.email || !data.ts) return false;
    const ageMs = Date.now() - data.ts;
    return ageMs < 8 * 3600 * 1000; // expira em 8 horas
  } catch { return false; }
}

function getAuthEmail() {
  try {
    const data = JSON.parse(sessionStorage.getItem(AUTH_SESSION_KEY) || 'null');
    return data?.email || '';
  } catch { return ''; }
}

// ── MARCAR COMO AUTENTICADO ────────────────────────────────
function setAuthenticated(email) {
  sessionStorage.setItem(AUTH_SESSION_KEY, JSON.stringify({ email, ts: Date.now() }));
}

// ── LOGOUT ─────────────────────────────────────────────────
function logout() {
  sessionStorage.removeItem(AUTH_SESSION_KEY);
  location.reload();
}

// ── TELA DE LOGIN ──────────────────────────────────────────
function showLoginScreen() {
  document.body.innerHTML = `
    <style>
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        font-family: 'Inter', 'Segoe UI', sans-serif;
        background: linear-gradient(135deg, #1A2745 0%, #2D3F6B 60%, #1A2745 100%);
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
      }
      .login-wrap {
        width: 100%;
        max-width: 420px;
      }
      .login-brand-row {
        text-align: center;
        margin-bottom: 28px;
      }
      .login-brand {
        font-size: .7rem;
        font-weight: 700;
        letter-spacing: .2em;
        color: #C9A84C;
      }
      .login-brand-name {
        font-size: 1.3rem;
        font-weight: 800;
        color: #fff;
        margin-top: 4px;
      }
      .login-card {
        background: #fff;
        border-radius: 16px;
        padding: 40px 36px 36px;
        box-shadow: 0 24px 60px rgba(0,0,0,.4);
      }
      .login-title {
        font-size: 1.25rem;
        font-weight: 800;
        color: #1A2745;
        margin-bottom: 6px;
      }
      .login-sub {
        font-size: .82rem;
        color: #6B7FA5;
        margin-bottom: 28px;
        line-height: 1.5;
      }
      .login-label {
        display: block;
        font-size: .75rem;
        font-weight: 600;
        color: #3D5080;
        margin-bottom: 6px;
        letter-spacing: .04em;
      }
      .login-input {
        width: 100%;
        padding: 11px 14px;
        border: 1.5px solid #d8dff0;
        border-radius: 8px;
        font-size: .92rem;
        font-family: inherit;
        color: #1A2745;
        outline: none;
        transition: border-color .2s, box-shadow .2s;
        margin-bottom: 16px;
        background: #fafbfd;
      }
      .login-input:focus {
        border-color: #4A6FA5;
        box-shadow: 0 0 0 3px rgba(74,111,165,.12);
        background: #fff;
      }
      .login-btn {
        width: 100%;
        padding: 13px;
        background: #1A2745;
        color: #fff;
        border: none;
        border-radius: 8px;
        font-size: .95rem;
        font-weight: 700;
        font-family: inherit;
        cursor: pointer;
        transition: background .2s, transform .1s;
        margin-top: 4px;
      }
      .login-btn:hover { background: #2D3F6B; }
      .login-btn:active { transform: scale(.98); }
      .login-error {
        background: #fff5f5;
        border: 1px solid #feb2b2;
        color: #c53030;
        font-size: .82rem;
        border-radius: 8px;
        padding: 10px 14px;
        margin-top: 14px;
        display: none;
      }
      .login-footer {
        text-align: center;
        font-size: .72rem;
        color: rgba(255,255,255,.4);
        margin-top: 20px;
      }
      .login-restricted {
        display: flex;
        align-items: center;
        gap: 8px;
        background: rgba(201,168,76,.12);
        border: 1px solid rgba(201,168,76,.3);
        border-radius: 8px;
        padding: 10px 14px;
        margin-bottom: 24px;
        font-size: .78rem;
        color: #8a6a1f;
      }
    </style>
    <div class="login-wrap">
      <div class="login-brand-row">
        <div class="login-brand">MULTIPLY</div>
        <div class="login-brand-name">Global Training Platform</div>
      </div>
      <div class="login-card">
        <div class="login-title">Painel Administrativo</div>
        <div class="login-sub">Acesso restrito a administradores autorizados.</div>
        <div class="login-restricted">
          🔒 Área protegida — somente usuários cadastrados podem acessar.
        </div>
        <label class="login-label" for="login-email">E-mail</label>
        <input class="login-input" type="email" id="login-email"
          placeholder="seu@email.com"
          onkeydown="if(event.key==='Enter') document.getElementById('login-pass').focus()">
        <label class="login-label" for="login-pass">Senha</label>
        <input class="login-input" type="password" id="login-pass"
          placeholder="••••••••"
          onkeydown="if(event.key==='Enter') tryLogin()">
        <button class="login-btn" onclick="tryLogin()">Entrar no Dashboard</button>
        <div class="login-error" id="login-error">E-mail ou senha incorretos. Verifique e tente novamente.</div>
      </div>
      <div class="login-footer">© Multiply — Plataforma Global de Treinamento</div>
    </div>
  `;
  // Auto-focus email
  setTimeout(() => document.getElementById('login-email')?.focus(), 100);
}

function tryLogin() {
  const email = (document.getElementById('login-email')?.value || '').trim().toLowerCase();
  const pass  = document.getElementById('login-pass')?.value || '';
  const match = ADMIN_USERS.find(u => u.email.toLowerCase() === email && u.password === pass);

  if (match) {
    setAuthenticated(email);
    location.reload();
  } else {
    const err = document.getElementById('login-error');
    if (err) err.style.display = 'block';
    const inp = document.getElementById('login-pass');
    if (inp) { inp.value = ''; inp.focus(); }
  }
}

// ── GATE: executa antes do dashboard carregar ──────────────
(function() {
  if (!isAuthenticated()) {
    // Aguarda DOM estar pronto para substituir
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', showLoginScreen);
    } else {
      showLoginScreen();
    }
  }
})();
