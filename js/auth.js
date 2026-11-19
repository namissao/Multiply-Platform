// ============================================================
// MULTIPLY PLATFORM — AUTHENTICATION (client-side PIN)
// Simple password gate for dashboard access.
// Change DASHBOARD_PASSWORD below to update the password.
// ============================================================

const DASHBOARD_PASSWORD = 'multiply2024';
const AUTH_KEY = 'multiply_auth_ok';
const AUTH_EXPIRY_HOURS = 8; // session expires after 8 hours

// ── CHECK IF ALREADY AUTHENTICATED ────────────────────────
function isAuthenticated() {
  try {
    const data = JSON.parse(sessionStorage.getItem(AUTH_KEY) || 'null');
    if (!data) return false;
    const ageMs = Date.now() - data.ts;
    return ageMs < AUTH_EXPIRY_HOURS * 3600 * 1000;
  } catch { return false; }
}

// ── MARK AS AUTHENTICATED ──────────────────────────────────
function setAuthenticated() {
  sessionStorage.setItem(AUTH_KEY, JSON.stringify({ ts: Date.now() }));
}

// ── LOGOUT ─────────────────────────────────────────────────
function logout() {
  sessionStorage.removeItem(AUTH_KEY);
  showLoginScreen();
}

// ── SHOW LOGIN SCREEN ──────────────────────────────────────
function showLoginScreen() {
  document.body.innerHTML = `
    <style>
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      body {
        font-family: 'Inter', 'Segoe UI', sans-serif;
        background: linear-gradient(135deg, #1A2745 0%, #2D3F6B 100%);
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .login-card {
        background: #fff;
        border-radius: 16px;
        padding: 48px 40px;
        width: 100%;
        max-width: 400px;
        box-shadow: 0 20px 60px rgba(0,0,0,.35);
        text-align: center;
      }
      .login-brand {
        font-size: .7rem;
        font-weight: 700;
        letter-spacing: .15em;
        color: #C9A84C;
        margin-bottom: 4px;
      }
      .login-title {
        font-size: 1.5rem;
        font-weight: 800;
        color: #1A2745;
        margin-bottom: 8px;
      }
      .login-sub {
        font-size: .85rem;
        color: #6B7FA5;
        margin-bottom: 32px;
      }
      .login-label {
        display: block;
        font-size: .75rem;
        font-weight: 600;
        color: #3D5080;
        text-align: left;
        margin-bottom: 6px;
        letter-spacing: .04em;
      }
      .login-input {
        width: 100%;
        padding: 12px 14px;
        border: 1.5px solid #d8dff0;
        border-radius: 8px;
        font-size: .95rem;
        font-family: inherit;
        color: #1A2745;
        outline: none;
        transition: border-color .2s;
        margin-bottom: 20px;
      }
      .login-input:focus { border-color: #4A6FA5; }
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
        transition: background .2s;
      }
      .login-btn:hover { background: #2D3F6B; }
      .login-error {
        color: #dc2626;
        font-size: .82rem;
        margin-top: 10px;
        display: none;
      }
      .login-footer {
        font-size: .75rem;
        color: #9BA8C0;
        margin-top: 24px;
      }
    </style>
    <div class="login-card">
      <div class="login-brand">MULTIPLY</div>
      <div class="login-title">Painel Administrativo</div>
      <div class="login-sub">Digite a senha para acessar o dashboard de programas.</div>
      <label class="login-label" for="login-pass">Senha de acesso</label>
      <input class="login-input" type="password" id="login-pass"
        placeholder="••••••••••"
        onkeydown="if(event.key==='Enter') tryLogin()"
        autofocus>
      <button class="login-btn" onclick="tryLogin()">Entrar no Dashboard</button>
      <div class="login-error" id="login-error">Senha incorreta. Tente novamente.</div>
      <div class="login-footer">Multiply Global Training Platform</div>
    </div>
  `;
}

function tryLogin() {
  const val = document.getElementById('login-pass')?.value || '';
  if (val === DASHBOARD_PASSWORD) {
    setAuthenticated();
    location.reload();
  } else {
    const err = document.getElementById('login-error');
    if (err) { err.style.display = 'block'; }
    const inp = document.getElementById('login-pass');
    if (inp) { inp.value = ''; inp.focus(); }
  }
}

// ── GATE: run before dashboard loads ──────────────────────
(function() {
  if (!isAuthenticated()) {
    document.addEventListener('DOMContentLoaded', showLoginScreen);
  }
})();
