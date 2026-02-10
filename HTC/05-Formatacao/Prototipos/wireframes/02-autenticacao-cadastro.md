# Wireframe: Cadastro
## Autenticação - Tela de Cadastro

**Versão:** 1.0
**Data:** Fevereiro 2026
**Layout:** Multi-step Form com Glass Cards

---

## Descrição Geral

Formulário de cadastro em múltiplas etapas (multi-step wizard) com progress indicator, validação em tempo real e UX otimizada. Design mantém a estética Liquid Glass com foco em conversão.

---

## Layout Responsivo

### Desktop (1280px+)
```
┌─────────────────────────────────────────────────────────────────────┐
│                            HEADER NAVEGAÇÃO                          │
│  [Logo HTC] [Recursos] [Preços] [Sobre] [Login Button]              │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                        PROGRESS INDICATOR                           │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐            │
│  │    1     │  │    2     │  │    3     │  │    4     │            │
│  │  DADOS   │  │  CONTA   │  │  PLANO   │  │  FINAL   │            │
│  │  PESSOAIS│  │          │  │          │  │          │            │
│  │   ●      │  │   ○      │  │   ○      │  │   ○      │            │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘            │
│  ───────────────────────────────────────────────────────            │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                          GLASS CARD                                  │
│                    (Conteúdo Dinâmico por Step)                      │
│                                                                     │
│  STEP 1: DADOS PESSOAIS                                             │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐  │
│  │  Nome Completo                                               │  │
│  │  ┌───────────────────────────────────────────────────────┐  │  │
│  │  │                                                       │  │  │
│  │  └───────────────────────────────────────────────────────┘  │  │
│  │                                                              │  │
│  │  Email                                                       │  │
│  │  ┌───────────────────────────────────────────────────────┐  │  │
│  │  │                                                       │  │  │
│  │  └───────────────────────────────────────────────────────┘  │  │
│  │                                                              │  │
│  │  WhatsApp                                                   │  │
│  │  ┌───────────────────────────────────────────────────────┐  │  │
│  │  │ +55 (11) 99999-9999                                   │  │  │
│  │  └───────────────────────────────────────────────────────┘  │  │
│  └─────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ┌────────────────────┐                    ┌────────────────────┐  │
│  │    Voltar          │                    │    Continuar       │  │
│  │   (Desabilitado)   │                    │    →              │  │
│  └────────────────────┘                    └────────────────────┘  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Tablet (768px - 1279px)
```
┌─────────────────────────────────────────────────────────────────────┐
│                      PROGRESS INDICATOR (COMPACT)                    │
│  [● Dados Pessoais] — [○ Conta] — [○ Plano] — [○ Final]             │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                          GLASS CARD                                   │
│                        Formulário Step Atual                          │
└─────────────────────────────────────────────────────────────────────┘
```

### Mobile (< 768px)
```
┌─────────────────────────────────────────────────────────────────────┐
│                      HEADER MOBILE                                    │
│                    [← Voltar]      Cadastro (1/4)                    │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                        PROGRESS BAR (TOP)                            │
│  ████████░░░░░░░░░░░░░░ 25%                                          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                        GLASS CARD (FULL WIDTH)                       │
│                        Formulário Mobile                              │
│                                                                     │
│  Nome Completo                                                      │
│  [────────────────────]                                             │
│                                                                     │
│  Email                                                              │
│  [────────────────────]                                             │
│                                                                     │
│  WhatsApp                                                           │
│  [+55 ───────] [━━━━━━━━━━]                                         │
│                                                                     │
│                        ┌────────────────────┐                        │
│                        │    Continuar       │                        │
│                        │        →           │                        │
│                        └────────────────────┘                        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Estrutura do Multi-Step Form

### Step 1: Dados Pessoais

**Campos:**

1. **Nome Completo**
   ```html
   <div class="input-group">
     <label class="input-label">
       Nome Completo
       <span class="required">*</span>
     </label>
     <input
       type="text"
       name="nome"
       placeholder="João Silva"
       class="glass-input"
       autocomplete="name"
       required
       minlength="3"
     />
     <div class="input-hint">
       Mínimo 3 caracteres
     </div>
   </div>
   ```

2. **Email**
   ```html
   <div class="input-group">
     <label class="input-label">
       Email
       <span class="required">*</span>
     </label>
     <input
       type="email"
       name="email"
       placeholder="joao@exemplo.com"
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
   ```

3. **WhatsApp**
   ```html
   <div class="input-group">
     <label class="input-label">
       WhatsApp
       <span class="required">*</span>
       <span class="info-icon" title="Usaremos para envio de conteúdos">
         <Icon name="info" />
       </span>
     </label>
     <div class="phone-input-wrapper">
       <select class="country-code glass-select">
         <option value="+55">+55</option>
         <option value="+1">+1</option>
         <option value="+351">+351</option>
       </select>
       <input
         type="tel"
         name="whatsapp"
         placeholder="(11) 99999-9999"
         class="glass-input"
         autocomplete="tel"
         required
       />
     </div>
     <div class="input-hint">
       Formatado automaticamente
     </div>
   </div>
   ```

   **Phone Input Styles:**
   ```css
   .phone-input-wrapper {
     display: flex;
     gap: 12px;
   }

   .country-code {
     width: 80px;
     background: rgba(255, 255, 255, 0.5);
     backdrop-filter: blur(10px);
     border: 1px solid rgba(255, 255, 255, 0.18);
     border-radius: 12px;
     padding: 12px 8px;
     font-size: 16px;
     cursor: pointer;
   }

   .phone-input-wrapper .glass-input {
     flex: 1;
   }
   ```

### Step 2: Configurações da Conta

**Campos:**

1. **Senha**
   ```html
   <div class="input-group">
     <label class="input-label">
       Senha
       <span class="required">*</span>
     </label>
     <div class="password-input-wrapper">
       <input
         type="password"
         name="senha"
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
   ```

   **Password Requirements Styles:**
   ```css
   .password-requirements {
     margin-top: 16px;
     display: grid;
     grid-template-columns: 1fr 1fr;
     gap: 8px;
   }

   .requirement {
     display: flex;
     align-items: center;
     gap: 8px;
     font-size: 0.875rem;
     color: var(--color-text-secondary);
     transition: all 0.3s ease;
   }

   .requirement.valid {
     color: var(--color-success);
   }

   .requirement-icon {
     width: 16px;
     height: 16px;
     border-radius: 50%;
     border: 2px solid currentColor;
   }

   .requirement.valid .requirement-icon {
     background: currentColor;
     border-color: currentColor;
   }
   ```

2. **Confirmar Senha**
   ```html
   <div class="input-group">
     <label class="input-label">
       Confirmar Senha
       <span class="required">*</span>
     </label>
     <div class="password-input-wrapper">
       <input
         type="password"
         name="confirmar_senha"
         placeholder="Digite a senha novamente"
         class="glass-input"
         autocomplete="new-password"
         required
       />
       <button class="password-toggle" aria-label="Mostrar senha">
         <Icon name="eye" />
       </button>
     </div>
   </div>
   ```

3. **Termos de Uso**
   ```html
   <div class="terms-checkbox">
     <label class="checkbox-label">
       <input
         type="checkbox"
         name="termos"
         class="checkbox"
         required
       />
       <span>
         Eu li e concordo com os
         <a href="/termos" target="_blank">Termos de Uso</a>
         e
         <a href="/privacidade" target="_blank">Política de Privacidade</a>
       </span>
     </label>
   </div>
   ```

### Step 3: Escolha do Plano

**Layout de Planos:**

```html
<div class="plans-grid">
  <!-- Plano Gratuito -->
  <div class="plan-card glass-card">
    <div class="plan-header">
      <h3 class="plan-name">Gratuito</h3>
      <div class="plan-price">
        <span class="price">R$ 0</span>
        <span class="period">/mês</span>
      </div>
    </div>
    <ul class="plan-features">
      <li class="feature included">
        <Icon name="check" />
        <span>Acesso a 1 curso básico</span>
      </li>
      <li class="feature included">
        <Icon name="check" />
        <span>Comunidade pública</span>
      </li>
      <li class="feature excluded">
        <Icon name="x" />
        <span>Certificados</span>
      </li>
      <li class="feature excluded">
        <Icon name="x" />
        <span>Suporte prioritário</span>
      </li>
    </ul>
    <button class="button button-outline" data-plan="free">
      Selecionar
    </button>
  </div>

  <!-- Plano Pro -->
  <div class="plan-card glass-card plan-featured">
    <div class="plan-badge">Mais Popular</div>
    <div class="plan-header">
      <h3 class="plan-name">Pro</h3>
      <div class="plan-price">
        <span class="price">R$ 97</span>
        <span class="period">/mês</span>
      </div>
    </div>
    <ul class="plan-features">
      <li class="feature included">
        <Icon name="check" />
        <span>Acesso a todos os cursos</span>
      </li>
      <li class="feature included">
        <Icon name="check" />
        <span>Comunidade VIP</span>
      </li>
      <li class="feature included">
        <Icon name="check" />
        <span>Certificados</span>
      </li>
      <li class="feature included">
        <Icon name="check" />
        <span>Suporte prioritário</span>
      </li>
    </ul>
    <button class="button button-primary" data-plan="pro">
      Selecionar
    </button>
  </div>

  <!-- Plano Elite -->
  <div class="plan-card glass-card">
    <div class="plan-header">
      <h3 class="plan-name">Elite</h3>
      <div class="plan-price">
        <span class="price">R$ 297</span>
        <span class="period">/mês</span>
      </div>
    </div>
    <ul class="plan-features">
      <li class="feature included">
        <Icon name="check" />
        <span>Tudo do Pro</span>
      </li>
      <li class="feature included">
        <Icon name="check" />
        <span>Mentorias mensais</span>
      </li>
      <li class="feature included">
        <Icon name="check" />
        <span>Projetos práticos</span>
      </li>
      <li class="feature included">
        <Icon name="check" />
        <span>Suporte dedicado</span>
      </li>
    </ul>
    <button class="button button-outline" data-plan="elite">
      Selecionar
    </button>
  </div>
</div>
```

**Plan Card Styles:**
```css
.plans-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: 32px 0;
}

.plan-card {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 16px;
  padding: 24px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.plan-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.plan-card.selected {
  background: rgba(37, 99, 235, 0.1);
  border: 2px solid rgba(37, 99, 235, 0.5);
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
}

.plan-featured {
  background: linear-gradient(
    135deg,
    rgba(37, 99, 235, 0.1) 0%,
    rgba(139, 92, 246, 0.1) 100%
  );
}

.plan-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(
    135deg,
    #F59E0B 0%,
    #F97316 100%
  );
  color: white;
  padding: 4px 16px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}

.plan-header {
  text-align: center;
  margin-bottom: 24px;
}

.plan-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 16px;
}

.plan-price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 4px;
}

.price {
  font-size: 3rem;
  font-weight: 800;
  color: var(--color-primary);
}

.period {
  font-size: 1rem;
  color: var(--color-text-secondary);
}

.plan-features {
  list-style: none;
  margin: 24px 0;
}

.feature {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 0.9375rem;
}

.feature.included {
  color: var(--color-text-primary);
}

.feature.excluded {
  color: var(--color-text-tertiary);
  text-decoration: line-through;
  opacity: 0.6;
}

.feature .icon {
  width: 20px;
  height: 20px;
}

.feature.included .icon {
  color: var(--color-success);
}

.feature.excluded .icon {
  color: var(--color-text-tertiary);
}
```

### Step 4: Finalização

**Resumo da Conta:**

```html
<div class="signup-summary">
  <div class="summary-header">
    <div class="success-icon">
      <Icon name="check-circle" size="large" />
    </div>
    <h2>Tudo Pronto!</h2>
    <p>Revise suas informações antes de criar sua conta</p>
  </div>

  <div class="summary-content glass-card">
    <div class="summary-section">
      <h3>Dados Pessoais</h3>
      <div class="summary-item">
        <span class="label">Nome:</span>
        <span class="value">João Silva</span>
      </div>
      <div class="summary-item">
        <span class="label">Email:</span>
        <span class="value">joao@exemplo.com</span>
      </div>
      <div class="summary-item">
        <span class="label">WhatsApp:</span>
        <span class="value">+55 (11) 99999-9999</span>
      </div>
    </div>

    <div class="summary-divider"></div>

    <div class="summary-section">
      <h3>Plano Selecionado</h3>
      <div class="plan-summary">
        <div class="plan-info">
          <span class="plan-name">Pro</span>
          <span class="plan-price">R$ 97/mês</span>
        </div>
        <div class="plan-badge">Selecionado</div>
      </div>
    </div>

    <div class="summary-divider"></div>

    <div class="summary-section">
      <h3>Próximos Passos</h3>
      <ul class="next-steps">
        <li>
          <Icon name="mail" />
          <span>Confirme seu email</span>
        </li>
        <li>
          <Icon name="user-plus" />
          <span>Complete seu perfil</span>
        </li>
        <li>
          <Icon name="book-open" />
          <span>Inicie seu primeiro curso</span>
        </li>
      </ul>
    </div>
  </div>

  <div class="summary-actions">
    <button class="button button-outline">
      <Icon name="edit" />
      Editar informações
    </button>
    <button class="button button-primary button-lg">
      <Icon name="rocket" />
      Criar minha conta
    </button>
  </div>
</div>
```

---

## Componentes Específicos

### Progress Indicator

**Desktop (Step Circles):**
```html
<div class="progress-indicator">
  <div class="step active" data-step="1">
    <div class="step-circle">
      <span class="step-number">1</span>
      <Icon name="check" class="step-icon hidden" />
    </div>
    <span class="step-label">Dados Pessoais</span>
  </div>
  <div class="step-line"></div>
  <div class="step" data-step="2">
    <div class="step-circle">
      <span class="step-number">2</span>
      <Icon name="check" class="step-icon hidden" />
    </div>
    <span class="step-label">Conta</span>
  </div>
  <div class="step-line"></div>
  <div class="step" data-step="3">
    <div class="step-circle">
      <span class="step-number">3</span>
      <Icon name="check" class="step-icon hidden" />
    </div>
    <span class="step-label">Plano</span>
  </div>
  <div class="step-line"></div>
  <div class="step" data-step="4">
    <div class="step-circle">
      <span class="step-number">4</span>
      <Icon name="check" class="step-icon hidden" />
    </div>
    <span class="step-label">Finalizar</span>
  </div>
</div>
```

**Styles:**
```css
.progress-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  padding: 48px 0;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  position: relative;
}

.step-circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--color-text-secondary);
  transition: all 0.3s ease;
}

.step.active .step-circle {
  background: rgba(37, 99, 235, 0.8);
  border-color: rgba(37, 99, 235, 0.8);
  color: white;
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
}

.step.completed .step-circle {
  background: rgba(34, 197, 94, 0.8);
  border-color: rgba(34, 197, 94, 0.8);
  color: white;
}

.step.completed .step-number {
  display: none;
}

.step.completed .step-icon {
  display: block;
}

.step-icon {
  display: none;
}

.step-label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text-secondary);
  text-align: center;
}

.step.active .step-label {
  color: var(--color-primary);
  font-weight: 600;
}

.step-line {
  width: 80px;
  height: 2px;
  background: rgba(255, 255, 255, 0.18);
  margin: 0 -8px;
  position: relative;
  top: -24px;
}

.step.completed + .step-line {
  background: var(--color-success);
}
```

**Mobile (Progress Bar):**
```css
@media (max-width: 767px) {
  .progress-indicator {
    display: none;
  }

  .mobile-progress {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px 0;
  }

  .progress-bar {
    width: 100%;
    height: 4px;
    background: rgba(255, 255, 255, 0.18);
    border-radius: 2px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(
      90deg,
      #2563EB 0%,
      #8B5CF6 100%
    );
    border-radius: 2px;
    transition: width 0.5s ease;
  }

  .progress-text {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    text-align: center;
  }
}
```

### Navigation Buttons

```html
<div class="form-navigation">
  <button
    type="button"
    class="button button-outline"
    data-action="prev"
    disabled
  >
    <Icon name="arrow-left" />
    Voltar
  </button>
  <button
    type="submit"
    class="button button-primary button-lg"
    data-action="next"
  >
    Continuar
    <Icon name="arrow-right" />
  </button>
</div>
```

**Styles:**
```css
.form-navigation {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 32px;
}

.form-navigation .button {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.form-navigation .button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
```

---

## Validação e UX

### Real-time Validation

**Email Validation:**
```javascript
// Validate on blur
emailInput.addEventListener('blur', () => {
  validateEmail(emailInput);
});

// Validate on input (after blur)
emailInput.addEventListener('input', debounce(() => {
  if (emailInput.dataset.touched) {
    validateEmail(emailInput);
  }
}, 300));

function validateEmail(input) {
  const email = input.value;
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  input.dataset.touched = true;
  input.dataset.valid = isValid;

  if (isValid) {
    showSuccess(input);
    checkEmailAvailability(email);
  } else {
    showError(input, 'Email inválido');
  }
}

async function checkEmailAvailability(email) {
  const isAvailable = await api.checkEmail(email);

  if (!isAvailable) {
    showError(emailInput, 'Este email já está cadastrado');
  }
}
```

**Phone Auto-format:**
```javascript
phoneInput.addEventListener('input', (e) => {
  let value = e.target.value.replace(/\D/g, '');

  if (value.length > 11) value = value.slice(0, 11);

  if (value.length > 2) {
    value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
  }
  if (value.length > 9) {
    value = `${value.slice(0, 9)}-${value.slice(9)}`;
  }

  e.target.value = value;
});
```

### Password Strength Indicator

```javascript
passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  const strength = calculateStrength(password);

  updateStrengthIndicator(strength);
  updateRequirements(password);
});

function calculateStrength(password) {
  let score = 0;

  if (password.length >= 8) score += 25;
  if (/[A-Z]/.test(password)) score += 25;
  if (/[0-9]/.test(password)) score += 25;
  if (/[^A-Za-z0-9]/.test(password)) score += 25;

  return score;
}

function updateStrengthIndicator(strength) {
  const bar = document.querySelector('.strength-bar');
  const text = document.querySelector('.strength-text');

  bar.style.width = `${strength}%`;

  if (strength <= 25) {
    bar.style.background = 'var(--color-error)';
    text.textContent = 'Fraca';
  } else if (strength <= 50) {
    bar.style.background = 'var(--color-warning)';
    text.textContent = 'Razoável';
  } else if (strength <= 75) {
    bar.style.background = '#EAB308';
    text.textContent = 'Média';
  } else {
    bar.style.background = 'var(--color-success)';
    text.textContent = 'Forte';
  }
}
```

---

## Animações de Transição

### Step Transition

```css
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideOutLeft {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-40px);
  }
}

.step-form {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.step-form.entering {
  animation: slideInRight 0.5s ease-out;
}

.step-form.leaving {
  animation: slideOutLeft 0.5s ease-out;
}
```

### Plan Selection Animation

```css
@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4);
  }
  50% {
    box-shadow: 0 0 0 20px rgba(37, 99, 235, 0);
  }
}

.plan-card.selected {
  animation: pulse 1s ease-out;
}
```

---

## Responsividade

### Tablet Adjustments

```css
@media (max-width: 1279px) {
  .plans-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .plan-card:last-child {
    grid-column: span 2;
  }
}
```

### Mobile Adjustments

```css
@media (max-width: 767px) {
  .plans-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .plan-card:last-child {
    grid-column: span 1;
  }

  .password-requirements {
    grid-template-columns: 1fr;
  }

  .form-navigation {
    flex-direction: column-reverse;
  }

  .form-navigation .button {
    width: 100%;
  }
}
```

---

## Copywriting

### Textos (Português)

**Títulos de Step:**
- Step 1: "Vamos começar"
- Step 2: "Crie sua senha"
- Step 3: "Escolha seu plano"
- Step 4: "Tudo pronto!"

**Subtítulos:**
- Step 1: "Digite seus dados pessoais para criar sua conta"
- Step 2: "Configure suas credenciais de acesso"
- Step 3: "Selecione o plano ideal para você"
- Step 4: "Revise suas informações antes de continuar"

**Botões:**
- "Criar minha conta"
- "Concluir cadastro"
- "Ir para o dashboard"

**Mensagens de Sucesso:**
- "Conta criada com sucesso!"
- "Bem-vindo ao HTC!"
- "Redirecionando para o dashboard..."

---

## Próximos Arquivos

- [03-autenticacao-recuperar-senha.md](./03-autenticacao-recuperar-senha.md)
- [04-dashboard-principal.md](./04-dashboard-principal.md)
- [05-cursos-lista.md](./05-cursos-lista.md)
