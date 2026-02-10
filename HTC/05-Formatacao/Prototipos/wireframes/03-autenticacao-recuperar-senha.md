# Wireframe: Recuperação de Senha
## Autenticação - Tela de Recuperação de Senha

**Versão:** 1.0
**Data:** Fevereiro 2026
**Layout:** Centered Glass Card

---

## Descrição Geral

Fluxo de recuperação de senha em 3 etapas: solicitação, confirmação do código enviado ao email, e nova senha. Design minimalista com foco em clareza e segurança.

---

## Layout Responsivo

### Desktop (1280px+)
```
┌─────────────────────────────────────────────────────────────────────┐
│                            HEADER NAVEGAÇÃO                          │
│  [Logo HTC] [Recursos] [Preços] [Sobre] [Login Button]              │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                        BACKGROUND AURORA                             │
│                   (Gradiente suave animado)                          │
│                                                                     │
│                              ┌─────────────────────────────┐       │
│                              │                             │       │
│                              │       GLASS CARD            │       │
│                              │                             │       │
│                              │    [Icon: Lock/Rotate]      │       │
│                              │                             │       │
│                              │  "Esqueceu sua senha?"     │       │
│                              │  "Digite seu email para     │       │
│                              │   receber as instruções"   │       │
│                              │                             │       │
│                              │  ┌───────────────────────┐ │       │
│                              │  │                       │ │       │
│                              │  │  Email Input          │ │       │
│                              │  │  seu@email.com       │ │       │
│                              │  │                       │ │       │
│                              │  └───────────────────────┘ │       │
│                              │                             │       │
│                              │  [Enviar Instruções]       │       │
│                              │                             │       │
│                              │  ─────────────────────    │       │
│                              │                             │       │
│                              │  [← Voltar para o login]   │       │
│                              │                             │       │
│                              └─────────────────────────────┘       │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Mobile (< 768px)
```
┌─────────────────────────────────────────────────────────────────────┐
│                      HEADER MOBILE                                    │
│                    [← Voltar]      Recuperar Senha                    │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                        GLASS CARD                                    │
│                                                                     │
│                       [Icon: Lock - 64px]                            │
│                                                                     │
│                     Esqueceu sua senha?                              │
│                  Digite seu email abaixo                             │
│                                                                     │
│                       ┌────────────────────┐                        │
│                       │                    │                        │
│                       │   Email            │                        │
│                       └────────────────────┘                        │
│                                                                     │
│                      [Enviar Instruções]                             │
│                                                                     │
│                    ← Voltar para o login                            │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Fluxo de Recuperação

### Etapa 1: Solicitação

**Glass Card Container:**
```css
.glass-card-password-reset {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
  border-radius: 24px;
  padding: 48px;
  max-width: 440px;
  width: 100%;
  margin: 0 auto;
}
```

**Conteúdo:**

1. **Header**
   ```html
   <div class="reset-header">
     <div class="reset-icon">
       <Icon name="lock-rotate" size="large" />
     </div>
     <h2 class="reset-title">Esqueceu sua senha?</h2>
     <p class="reset-subtitle">
       Sem problemas. Digite seu email e enviaremos instruções para redefinir sua senha.
     </p>
   </div>
   ```

   **Styles:**
   ```css
   .reset-header {
     text-align: center;
     margin-bottom: 32px;
   }

   .reset-icon {
     width: 64px;
     height: 64px;
     margin: 0 auto 24px;
     background: linear-gradient(
       135deg,
       rgba(37, 99, 235, 0.1) 0%,
       rgba(139, 92, 246, 0.1) 100%
     );
     border-radius: 50%;
     display: flex;
     align-items: center;
     justify-content: center;
     color: var(--color-primary);
   }

   .reset-title {
     font-size: 1.875rem;
     font-weight: 700;
     color: var(--color-text-primary);
     margin-bottom: 12px;
   }

   .reset-subtitle {
     font-size: 1rem;
     color: var(--color-text-secondary);
     line-height: 1.6;
   }
   ```

2. **Formulário**
   ```html
   <form class="reset-form" id="reset-request-form">
     <div class="input-group">
       <label class="input-label" for="reset-email">
         Email
       </label>
       <input
         type="email"
         id="reset-email"
         name="email"
         placeholder="seu@email.com"
         class="glass-input"
         autocomplete="email"
         required
       />
       <div class="input-validation">
         <Icon name="check" class="success-icon hidden" />
         <Icon name="error" class="error-icon hidden" />
         <span class="validation-message"></span>
       </div>
     </div>

     <button type="submit" class="button button-primary button-lg">
       <span>Enviar Instruções</span>
       <Icon name="paper-plane" />
     </button>
   </form>
   ```

3. **Link de Retorno**
   ```html
   <div class="reset-footer">
     <a href="/login" class="back-link">
       <Icon name="arrow-left" />
       Voltar para o login
     </a>
   </div>
   ```

### Etapa 2: Confirmação do Código

**Estado: Email Enviado**

```html
<div class="reset-confirmation">
  <div class="success-animation">
    <div class="checkmark-circle">
      <Icon name="check" size="extra-large" />
    </div>
  </div>

  <h2>Email Enviado!</h2>
  <p class="confirmation-text">
    Enviamos as instruções para <strong>joao@exemplo.com</strong>.
    O código expira em 15 minutos.
  </p>

  <div class="code-info glass-card">
    <div class="info-item">
      <Icon name="clock" />
      <div>
        <strong>Expira em:</strong>
        <span id="countdown">15:00</span>
      </div>
    </div>
    <div class="info-item">
      <Icon name="envelope" />
      <div>
        <strong>Verifique:</strong>
        Caixa de entrada e spam
      </div>
    </div>
  </div>

  <div class="confirmation-actions">
    <button class="button button-primary" id="open-email">
      <Icon name="external-link" />
      Abrir Email
    </button>
    <button class="button button-ghost" id="resend-code">
      Reenviar código
      <span class="resend-timer">(30s)</span>
    </button>
  </div>

  <a href="/login" class="back-link">
    <Icon name="arrow-left" />
    Voltar para o login
  </a>
</div>
```

**Countdown Timer:**
```javascript
function startCountdown(duration, display) {
  let timer = duration, minutes, seconds;

  const interval = setInterval(() => {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    display.textContent = minutes + ':' + seconds;

    if (--timer < 0) {
      clearInterval(interval);
      showResendButton();
    }
  }, 1000);
}
```

**Input do Código (quando usuário clica em email recebido):**

```html
<div class="code-verification">
  <h3>Digite o código</h3>
  <p class="subtitle">Insira o código de 6 dígitos enviado ao seu email</p>

  <div class="code-inputs">
    <input
      type="text"
      inputmode="numeric"
      maxlength="1"
      class="code-input"
      data-index="0"
      autofocus
    />
    <input
      type="text"
      inputmode="numeric"
      maxlength="1"
      class="code-input"
      data-index="1"
    />
    <input
      type="text"
      inputmode="numeric"
      maxlength="1"
      class="code-input"
      data-index="2"
    />
    <div class="code-divider"></div>
    <input
      type="text"
      inputmode="numeric"
      maxlength="1"
      class="code-input"
      data-index="3"
    />
    <input
      type="text"
      inputmode="numeric"
      maxlength="1"
      class="code-input"
      data-index="4"
    />
    <input
      type="text"
      inputmode="numeric"
      maxlength="1"
      class="code-input"
      data-index="5"
    />
  </div>

  <button class="button button-primary button-lg" id="verify-code">
    Verificar Código
  </button>

  <div class="resend-section">
    <span>Não recebeu?</span>
    <button class="link-button" id="resend-code">Reenviar código</button>
  </div>
</div>
```

**Code Input Styles:**
```css
.code-inputs {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin: 32px 0;
}

.code-input {
  width: 48px;
  height: 64px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.18);
  border-radius: 12px;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  color: var(--color-text-primary);
  transition: all 0.3s ease;
}

.code-input:focus {
  background: rgba(255, 255, 255, 0.7);
  border-color: rgba(37, 99, 235, 0.5);
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
  outline: none;
}

.code-input.filled {
  border-color: var(--color-success);
}

.code-input.error {
  border-color: var(--color-error);
  animation: shake 0.5s ease-in-out;
}

.code-divider {
  width: 8px;
  height: 2px;
  background: rgba(255, 255, 255, 0.18);
  align-self: center;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-8px); }
  75% { transform: translateX(8px); }
}
```

**Code Input Logic:**
```javascript
const codeInputs = document.querySelectorAll('.code-input');

codeInputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    const value = e.target.value;

    if (!/^\d*$/.test(value)) {
      e.target.value = '';
      return;
    }

    if (value.length === 1 && index < codeInputs.length - 1) {
      codeInputs[index + 1].focus();
    }

    if (value.length === 1) {
      e.target.classList.add('filled');
    } else {
      e.target.classList.remove('filled');
    }

    checkAllFilled();
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      codeInputs[index - 1].focus();
    }
  });

  input.addEventListener('paste', (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);

    if (/^\d+$/.test(pastedData)) {
      pastedData.split('').forEach((char, i) => {
        if (codeInputs[i]) {
          codeInputs[i].value = char;
          codeInputs[i].classList.add('filled');
        }
      });
      codeInputs[Math.min(pastedData.length, 5)].focus();
      checkAllFilled();
    }
  });
});

function checkAllFilled() {
  const allFilled = Array.from(codeInputs).every(
    input => input.value.length === 1
  );

  if (allFilled) {
    verifyCode();
  }
}
```

### Etapa 3: Nova Senha

**Formulário de Redefinição:**

```html
<div class="new-password-form">
  <div class="form-header">
    <div class="success-icon">
      <Icon name="unlock" size="large" />
    </div>
    <h2>Redefinir Senha</h2>
    <p>Crie uma nova senha segura para sua conta</p>
  </div>

  <form id="reset-password-form">
    <div class="input-group">
      <label class="input-label" for="new-password">
        Nova Senha
      </label>
      <div class="password-input-wrapper">
        <input
          type="password"
          id="new-password"
          name="new_password"
          placeholder="Mínimo 8 caracteres"
          class="glass-input"
          autocomplete="new-password"
          required
          minlength="8"
        />
        <button class="password-toggle" aria-label="Mostrar senha">
          <Icon name="eye" />
        </button>
      </div>
      <div class="password-requirements">
        <div class="requirement" data-validate="length">
          <Icon name="circle" class="requirement-icon" />
          <span>Mínimo 8 caracteres</span>
        </div>
        <div class="requirement" data-validate="uppercase">
          <Icon name="circle" class="requirement-icon" />
          <span>Uma letra maiúscula</span>
        </div>
        <div class="requirement" data-validate="number">
          <Icon name="circle" class="requirement-icon" />
          <span>Um número</span>
        </div>
        <div class="requirement" data-validate="special">
          <Icon name="circle" class="requirement-icon" />
          <span>Um caractere especial</span>
        </div>
      </div>
    </div>

    <div class="input-group">
      <label class="input-label" for="confirm-password">
        Confirmar Nova Senha
      </label>
      <div class="password-input-wrapper">
        <input
          type="password"
          id="confirm-password"
          name="confirm_password"
          placeholder="Digite a senha novamente"
          class="glass-input"
          autocomplete="new-password"
          required
        />
        <button class="password-toggle" aria-label="Mostrar senha">
          <Icon name="eye" />
        </button>
      </div>
      <div class="input-validation">
        <span class="validation-message"></span>
      </div>
    </div>

    <button type="submit" class="button button-primary button-lg">
      <Icon name="check-circle" />
      Redefinir Senha
    </button>
  </form>

  <a href="/login" class="back-link">
    <Icon name="arrow-left" />
    Voltar para o login
  </a>
</div>
```

**Password Validation:**
```javascript
function validatePasswordMatch() {
  const newPassword = document.getElementById('new-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;
  const confirmInput = document.getElementById('confirm-password');
  const messageContainer = confirmInput.nextElementSibling;

  if (confirmPassword && newPassword !== confirmPassword) {
    confirmInput.classList.add('error');
    confirmInput.classList.remove('success');
    messageContainer.innerHTML = '<span class="error">As senhas não coincidem</span>';
    return false;
  } else if (confirmPassword && newPassword === confirmPassword) {
    confirmInput.classList.remove('error');
    confirmInput.classList.add('success');
    messageContainer.innerHTML = '<span class="success">Senhas coincidem</span>';
    return true;
  }

  return false;
}
```

### Etapa 4: Sucesso

**Tela de Sucesso:**

```html
<div class="reset-success">
  <div class="success-animation">
    <div class="checkmark-circle">
      <svg class="checkmark" viewBox="0 0 52 52">
        <circle class="checkmark-circle-bg" cx="26" cy="26" r="25" fill="none"/>
        <path class="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
      </svg>
    </div>
  </div>

  <h2>Senha Redefinida!</h2>
  <p>Sua senha foi redefinida com sucesso.</p>

  <div class="success-info glass-card">
    <p>Você já pode fazer login com sua nova senha.</p>
  </div>

  <button class="button button-primary button-lg" id="go-to-login">
    <Icon name="log-in" />
    Fazer Login
  </button>

  <div class="countdown">
    Redirecionando em <span id="redirect-countdown">5</span> segundos...
  </div>
</div>
```

**Success Animation:**
```css
@keyframes scaleIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes drawCheck {
  0% {
    stroke-dashoffset: 100;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

.checkmark-circle {
  width: 80px;
  height: 80px;
  margin: 0 auto 24px;
  position: relative;
  animation: scaleIn 0.5s ease-out;
}

.checkmark-circle-bg {
  stroke: var(--color-success);
  stroke-width: 2;
}

.checkmark-check {
  stroke: var(--color-success);
  stroke-width: 3;
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: drawCheck 0.5s ease-out 0.3s forwards;
}
```

---

## Estados de Loading

### Loading Spinner

```html
<button class="button button-primary button-lg loading">
  <span class="loading-spinner"></span>
  <span>Enviando...</span>
</button>
```

### Skeleton Loading (para tela de confirmação)

```html
<div class="skeleton-confirmation">
  <div class="skeleton-icon"></div>
  <div class="skeleton-title"></div>
  <div class="skeleton-text"></div>
  <div class="skeleton-card"></div>
  <div class="skeleton-button"></div>
</div>
```

```css
@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}

.skeleton-confirmation > * {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  background-size: 1000px 100%;
  animation: shimmer 2s infinite;
  border-radius: 8px;
}

.skeleton-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 24px;
  border-radius: 50%;
}

.skeleton-title {
  width: 200px;
  height: 32px;
  margin: 0 auto 12px;
}

.skeleton-text {
  width: 300px;
  height: 16px;
  margin: 0 auto;
}

.skeleton-card {
  width: 100%;
  height: 120px;
  margin: 32px 0;
  border-radius: 16px;
}

.skeleton-button {
  width: 100%;
  height: 48px;
  border-radius: 12px;
}
```

---

## Tratamento de Erros

### Email Não Encontrado

```html
<div class="error-state">
  <div class="error-icon">
    <Icon name="alert-circle" size="large" />
  </div>
  <h3>Email não encontrado</h3>
  <p>Não encontramos uma conta associada a este email.</p>

  <div class="error-actions">
    <button class="button button-outline" id="try-again">
      Tentar outro email
    </button>
    <a href="/cadastro" class="button button-primary">
      Criar uma conta
    </a>
  </div>
</div>
```

### Código Inválido/Expirado

```html
<div class="error-state">
  <div class="error-icon">
    <Icon name="alert-triangle" size="large" />
  </div>
  <h3>Código inválido</h3>
  <p>O código que você inseriu é inválido ou expirou.</p>

  <div class="error-actions">
    <button class="button button-outline" id="try-code-again">
      Tentar novamente
    </button>
    <button class="button button-primary" id="request-new-code">
      Solicitar novo código
    </button>
  </div>
</div>
```

### Link Expirado

```html
<div class="error-state">
  <div class="error-icon">
    <Icon name="clock" size="large" />
  </div>
  <h3>Link expirado</h3>
  <p>O link de redefinição expirou. Solicite um novo.</p>

  <button class="button button-primary" id="new-reset-link">
    Solicitar novo link
  </button>
</div>
```

---

## Responsividade

### Mobile Adjustments

```css
@media (max-width: 767px) {
  .glass-card-password-reset {
    padding: 32px 24px;
    border-radius: 24px 24px 0 0;
    margin: 0;
    max-width: 100%;
  }

  .code-inputs {
    gap: 8px;
  }

  .code-input {
    width: 40px;
    height: 56px;
    font-size: 1.25rem;
  }

  .password-requirements {
    grid-template-columns: 1fr;
  }

  .confirmation-actions {
    flex-direction: column;
  }

  .confirmation-actions .button {
    width: 100%;
  }
}
```

---

## Acessibilidade

### ARIA Labels

```html
<form
  role="form"
  aria-label="Formulário de recuperação de senha"
  novalidate
>

  <input
    type="email"
    id="reset-email"
    name="email"
    aria-label="Endereço de email"
    aria-required="true"
    aria-invalid="false"
    aria-describedby="email-help"
  />

  <div id="email-help" class="input-hint">
    Enviaremos as instruções para este email
  </div>

  <button
    type="submit"
    aria-label="Enviar instruções de recuperação de senha"
  >
    Enviar Instruções
  </button>
</form>
```

### Focus Management

```javascript
// Focus on email input when page loads
window.addEventListener('load', () => {
  document.getElementById('reset-email').focus();
});

// Focus on first code input when verification screen loads
const codeScreen = document.getElementById('code-verification');
if (codeScreen) {
  const observer = new MutationObserver(() => {
    if (codeScreen.classList.contains('active')) {
      document.querySelector('.code-input').focus();
    }
  });
  observer.observe(codeScreen, { attributes: true });
}

// Announce errors to screen readers
function announceError(message) {
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'alert');
  announcement.setAttribute('aria-live', 'assertive');
  announcement.className = 'sr-only';
  announcement.textContent = message;
  document.body.appendChild(announcement);

  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 5000);
}
```

---

## Copywriting

### Textos (Português)

**Etapa 1:**
- Título: "Esqueceu sua senha?"
- Subtítulo: "Sem problemas. Digite seu email e enviaremos instruções."
- Placeholder: "seu@email.com"
- Button: "Enviar Instruções"
- Footer: "← Voltar para o login"

**Etapa 2:**
- Título: "Email Enviado!"
- Texto: "Enviamos as instruções para [email]. O código expira em 15 minutos."
- Button: "Abrir Email"
- Resend: "Reenviar código (30s)"
- Footer: "← Voltar para o login"

**Etapa 3:**
- Título: "Redefinir Senha"
- Subtítulo: "Crie uma nova senha segura"
- Label 1: "Nova Senha"
- Label 2: "Confirmar Nova Senha"
- Button: "Redefinir Senha"
- Footer: "← Voltar para o login"

**Etapa 4:**
- Título: "Senha Redefinida!"
- Texto: "Sua senha foi redefinida com sucesso."
- Info: "Você já pode fazer login com sua nova senha."
- Button: "Fazer Login"
- Countdown: "Redirecionando em 5 segundos..."

### Textos (English)

**Step 1:**
- Title: "Forgot your password?"
- Subtitle: "No problem. Enter your email and we'll send you instructions."
- Placeholder: "your@email.com"
- Button: "Send Instructions"
- Footer: "← Back to login"

**Step 2:**
- Title: "Email Sent!"
- Text: "We've sent the instructions to [email]. Code expires in 15 minutes."
- Button: "Open Email"
- Resend: "Resend code (30s)"
- Footer: "← Back to login"

**Step 3:**
- Title: "Reset Password"
- Subtitle: "Create a new secure password"
- Label 1: "New Password"
- Label 2: "Confirm New Password"
- Button: "Reset Password"
- Footer: "← Back to login"

**Step 4:**
- Title: "Password Reset!"
- Text: "Your password has been successfully reset."
- Info: "You can now log in with your new password."
- Button: "Log In"
- Countdown: "Redirecting in 5 seconds..."

---

## Próximos Arquivos

- [04-dashboard-principal.md](./04-dashboard-principal.md)
- [05-cursos-lista.md](./05-cursos-lista.md)
- [06-cursos-player.md](./06-cursos-player.md)
