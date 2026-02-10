# Wireframe: Login
## Autenticação - Tela de Login

**Versão:** 1.0
**Data:** Fevereiro 2026
**Layout:** Centered Split Screen

---

## Descrição Geral

Tela de autenticação principal com layout dividido: área de branding visual com gradientes e glassmorphism à esquerda, e formulário de login à direita. Design inspirado em interfaces premium modernas (Apple, Linear).

---

## Layout Responsivo

### Desktop (1280px+)
```
┌─────────────────────────────────────────────────────────────────────┐
│                            HEADER NAVEGAÇÃO                          │
│  [Logo HTC] [Recursos] [Preços] [Sobre] [Login Button]              │
└─────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────┬─────────────────────────────────┐
│                                  │                                 │
│        LADO ESQUERDO             │       LADO DIREITO              │
│      (50% da largura)            │      (50% da largura)           │
│                                  │                                 │
│  ┌──────────────────────────┐   │   ┌─────────────────────────┐  │
│  │                          │   │   │                         │  │
│  │    GRADIENT AURORA       │   │   │     GLASS CARD          │  │
│  │   com elementoss         │   │   │    (Formulário)         │  │
│  │   glassmorphism          │   │   │                         │  │
│  │   flutuantes             │   │   │  "Bem-vindo de volta"  │  │
│  │                          │   │   │                         │  │
│  │  [Logo Grande]           │   │   │  [Email Input]          │  │
│  │                          │   │   │  [Password Input]      │  │
│  │  "Transforme            │   │   │  [Manter conectado]     │  │
│  │   ideias em             │   │   │  [Esqueci a senha]      │  │
│  │   código"               │   │   │                         │  │
│  │                          │   │   │  [Entrar Button]       │  │
│  │  ┌────┐ ┌────┐ ┌────┐   │   │   │                         │  │
│  │  │glass│glass│glass│   │   │   │  ─────────────────────  │  │
│  │  │card │card │card │   │   │   │                         │  │
│  │  └────┘ └────┘ └────┘   │   │   │  [Google OAuth]        │  │
│  │                          │   │   │  [GitHub OAuth]        │  │
│  └──────────────────────────┘   │   │                         │  │
│                                  │   │  Não tem conta?        │  │
│                                  │   │  [Criar conta]         │  │
│                                  │   └─────────────────────────┘  │
│                                  │                                 │
└──────────────────────────────────┴─────────────────────────────────┘
```

### Tablet (768px - 1279px)
```
┌─────────────────────────────────────────────────────────────────────┐
│                         HEADER MOBILE                                │
│                    [Logo HTC]          [Menu Hamburguer]             │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                        LADO ESQUERDO                                  │
│                    (40% da largura)                                  │
│                  Gradiente Aurora                                     │
│                  Elementos Glass                                     │
│                  [Logo Grande]                                       │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                        LADO DIREITO                                   │
│                    (60% da largura)                                   │
│                  Glass Card com Formulário                            │
└─────────────────────────────────────────────────────────────────────┘
```

### Mobile (< 768px)
```
┌─────────────────────────────────────────────────────────────────────┐
│                         HEADER MOBILE                                │
│                    [Logo HTC]          [Menu Icon]                   │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                        HERO SECTION                                  │
│                    Gradiente Aurora                                   │
│                    Logo HTC (medium)                                  │
│                    Tagline                                             │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                        GLASS CARD                                   │
│                        Formulário de Login                           │
│                                                                     │
│  "Bem-vindo de volta"                                               │
│                                                                     │
│  [Email]                                                            │
│  [Password]                                                         │
│  [Manter conectado]    [Esqueci a senha]                            │
│                                                                     │
│  [Entrar - Primary Button]                                          │
│                                                                     │
│  ──────────────────────                                             │
│                                                                     │
│  [Google OAuth]                                                     │
│  [GitHub OAuth]                                                     │
│                                                                     │
│  Não tem conta? [Criar conta]                                       │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Elementos Detalhados

### Lado Esquerdo - Branding

**Background:**
- Gradiente aurora animado (135deg)
- Cores: Primary Blue (#2563EB) → Purple (#8B5CF6) → Coral (#F97316)
- Animação sutil de movimento (8s ease-in-out infinite)
- Elementos glassmorphism flutuantes (3-5 cards)

**Elementos Glass Flutuantes:**
```
Card 1 (superior esquerda):
  - Tamanho: 120x80px
  - Glass: rgba(255, 255, 255, 0.1) + blur(10px)
  - Border: 1px solid rgba(255, 255, 255, 0.2)
  - Animação: float suave (3s)
  - Ícone: Code/Development

Card 2 (centro):
  - Tamanho: 100x100px
  - Glass: rgba(255, 255, 255, 0.15) + blur(15px)
  - Border: 1px solid rgba(255, 255, 255, 0.25)
  - Animação: float suave (4s, delay 1s)
  - Ícone: Rocket/Launch

Card 3 (inferior direita):
  - Tamanho: 140x90px
  - Glass: rgba(255, 255, 255, 0.12) + blur(12px)
  - Border: 1px solid rgba(255, 255, 255, 0.22)
  - Animação: float suave (3.5s, delay 0.5s)
  - Ícone: Chart/Analytics
```

**Logo Grande:**
- Posição: Centro-left
- Tamanho: 200px (desktop), 150px (tablet), 120px (mobile)
- Efeito: Glow sutil com drop-shadow
- Animação: Pulse suave

**Tagline:**
- Texto: "Transforme ideias em código"
- Font: Plus Jakarta Sans Bold
- Tamanho: 2.5rem (desktop), 2rem (tablet), 1.5rem (mobile)
- Cor: White com text-shadow para legibilidade
- Posição: Abaixo do logo, left-aligned

**Subtagline:**
- Texto: "A plataforma definitiva para desenvolvedores high-ticket"
- Font: Inter Regular
- Tamanho: 1.125rem (desktop), 1rem (tablet), 0.875rem (mobile)
- Cor: rgba(255, 255, 255, 0.8)

### Lado Direito - Formulário

**Glass Card Container:**
```css
.glass-card-login {
  /* Background */
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);

  /* Border */
  border: 1px solid rgba(255, 255, 255, 0.18);

  /* Shadow */
  box-shadow:
    0 8px 32px 0 rgba(31, 38, 135, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.18);

  /* Radius */
  border-radius: 24px;

  /* Spacing */
  padding: 48px;

  /* Size */
  max-width: 480px;
  width: 100%;
}
```

**Header do Card:**

1. **Título Principal**
   - Texto: "Bem-vindo de volta"
   - Font: Plus Jakarta Sans Bold
   - Tamanho: 2rem (32px)
   - Cor: var(--color-text-primary, #0F172A)
   - Margin bottom: 8px

2. **Subtítulo**
   - Texto: "Entre na sua conta para continuar"
   - Font: Inter Regular
   - Tamanho: 1rem (16px)
   - Cor: var(--color-text-secondary, #475569)
   - Margin bottom: 32px

**Formulário:**

1. **Email Input**
   ```html
   <div class="input-group">
     <label class="input-label">Email</label>
     <input
       type="email"
       placeholder="seu@email.com"
       class="glass-input"
       autocomplete="email"
       required
     />
     <div class="input-error hidden">
       Email inválido
     </div>
   </div>
   ```

   **Glass Input Styles:**
   ```css
   .glass-input {
     background: rgba(255, 255, 255, 0.5);
     backdrop-filter: blur(10px);
     border: 1px solid rgba(255, 255, 255, 0.18);
     border-radius: 12px;
     padding: 12px 16px;
     font-size: 16px;
     font-family: Inter, sans-serif;
     color: #1E3A8A;
     transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
   }

   .glass-input:focus {
     background: rgba(255, 255, 255, 0.7);
     border: 2px solid rgba(37, 99, 235, 0.5);
     outline: none;
     box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
   }

   .glass-input::placeholder {
     color: rgba(71, 85, 105, 0.5);
   }
   ```

   **Estados:**
   - Default: border-opacity 0.18
   - Focus: border-color primary, box-shadow
   - Error: border-color error, error message visible
   - Success: border-color success, check icon

2. **Password Input**
   ```html
   <div class="input-group">
     <label class="input-label">Senha</label>
     <div class="password-input-wrapper">
       <input
         type="password"
         placeholder="••••••••"
         class="glass-input"
         autocomplete="current-password"
         required
       />
       <button class="password-toggle" aria-label="Mostrar senha">
         <Icon name="eye" />
       </button>
     </div>
   </div>
   ```

   **Password Toggle Button:**
   - Posição: Absolute right
   - Background: transparent
   - Border: none
   - Color: var(--color-text-secondary)
   - Hover: color primary
   - Icon: Eye/EyeOff

3. **Lembrar / Esqueci Senha**
   ```html
   <div class="form-actions">
     <label class="checkbox-label">
       <input type="checkbox" class="checkbox" />
       <span>Manter conectado</span>
     </label>
     <a href="/recuperar-senha" class="forgot-password">
       Esqueci a senha
     </a>
   </div>
   ```

   **Styles:**
   - Layout: Space between (flex)
   - Checkbox: Custom glass checkbox
   - Link: Color primary, hover underline

4. **Primary Button - Entrar**
   ```html
   <button type="submit" class="button button-primary button-lg">
     <span>Entrar</span>
     <Icon name="arrow-right" />
   </button>
   ```

   **Primary Button Styles:**
   ```css
   .button-primary {
     background: rgba(37, 99, 235, 0.8);
     backdrop-filter: blur(10px);
     border: 1px solid rgba(255, 255, 255, 0.18);
     box-shadow: 0 4px 16px rgba(37, 99, 235, 0.2);
     border-radius: 12px;
     color: white;
     padding: 14px 24px;
     font-size: 16px;
     font-weight: 600;
     cursor: pointer;
     transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
     width: 100%;
   }

   .button-primary:hover {
     background: rgba(37, 99, 235, 0.9);
     box-shadow: 0 6px 24px rgba(37, 99, 235, 0.3);
     transform: translateY(-1px);
   }

   .button-primary:active {
     transform: translateY(0);
   }
   ```

**Divider:**
```html
<div class="divider">
  <div class="divider-line"></div>
  <span class="divider-text">ou continue com</span>
  <div class="divider-line"></div>
</div>
```

**OAuth Buttons:**

1. **Google OAuth**
   ```html
   <button class="button button-oauth">
     <Icon name="google" className="oauth-icon" />
     <span>Google</span>
   </button>
   ```

   **OAuth Button Styles:**
   ```css
   .button-oauth {
     background: rgba(255, 255, 255, 0.5);
     backdrop-filter: blur(10px);
     border: 1px solid rgba(255, 255, 255, 0.18);
     border-radius: 12px;
     color: #1E3A8A;
     padding: 12px 16px;
     font-size: 15px;
     font-weight: 500;
     cursor: pointer;
     transition: all 0.3s ease;
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: center;
     gap: 12px;
   }

   .button-oauth:hover {
     background: rgba(255, 255, 255, 0.7);
     transform: translateY(-1px);
   }
   ```

2. **GitHub OAuth**
   - Mesma estrutura do Google
   - Icon: GitHub logo
   - Text: "GitHub"

**Footer do Card:**
```html
<p class="card-footer">
  Não tem uma conta?
  <a href="/cadastro" class="link-primary">Criar conta</a>
</p>
```

---

## Componentes Específicos

### Glass Checkbox

```css
.checkbox-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.checkbox {
  appearance: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.checkbox:checked {
  background: rgba(37, 99, 235, 0.8);
  border-color: rgba(37, 99, 235, 0.8);
  background-image: url("data:image/svg+xml...");
}

.checkbox:focus {
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}
```

### Link com Underline Animado

```css
.link-primary {
  color: var(--color-primary, #2563EB);
  text-decoration: none;
  position: relative;
  font-weight: 600;
}

.link-primary::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary, #2563EB);
  transition: width 0.3s ease;
}

.link-primary:hover::after {
  width: 100%;
}
```

---

## Estados de Interação

### Focus States

1. **Input Focus**
   - Border: 2px solid primary (rgba(37, 99, 235, 0.5))
   - Box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1)
   - Background: rgba(255, 255, 255, 0.7)
   - Animação: transition 0.3s ease

2. **Button Focus**
   - Box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.2)
   - Border: 2px solid primary

### Hover States

1. **Primary Button Hover**
   - Background: rgba(37, 99, 235, 0.9)
   - Box-shadow: 0 6px 24px rgba(37, 99, 235, 0.3)
   - Transform: translateY(-1px)

2. **OAuth Button Hover**
   - Background: rgba(255, 255, 255, 0.7)
   - Transform: translateY(-1px)

### Active States

1. **Button Active**
   - Transform: translateY(0)
   - Box-shadow: reduzido

2. **Input Active**
   - Estado mantido do focus

### Loading States

```html
<button class="button button-primary button-lg loading">
  <span class="loading-spinner"></span>
  <span>Entrando...</span>
</button>
```

```css
@keyframes spin {
  to { transform: rotate(360deg); }
}

.loading-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

.button.loading {
  pointer-events: none;
  opacity: 0.8;
}
```

---

## Validação de Formulário

### Email Validation

**States:**
1. **Default**
   - Border: 1px solid rgba(255, 255, 255, 0.18)
   - No icon

2. **Valid Email**
   - Border: 1px solid var(--color-success, #22C55E)
   - Success icon visible (right)
   - Message: hidden

3. **Invalid Email**
   - Border: 1px solid var(--color-error, #EF4444)
   - Error icon visible (right)
   - Message: "Email inválido" (visible, color error)

**Real-time Validation:**
- Validate on blur
- Validate on input (after first blur)
- Debounce: 300ms

### Password Validation

**Requirements (show on focus):**
```
Password Strength:
  ✓ Mínimo 8 caracteres
  ✓ Uma letra maiúscula
  ✓ Um número
  ✓ Um caractere especial
```

**Strength Indicator:**
```html
<div class="password-strength">
  <div class="strength-bar"></div>
  <span class="strength-text">Média</span>
</div>
```

**Levels:**
- Fraca: red (0-25%)
- Razoável: orange (25-50%)
- Média: yellow (50-75%)
- Forte: green (75-100%)

---

## Animações

### Page Load Animation

```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.glass-card-login {
  animation: fadeInUp 0.6s ease-out;
}

.input-group {
  animation: fadeInUp 0.6s ease-out;
  animation-fill-mode: both;
}

.input-group:nth-child(1) { animation-delay: 0.1s; }
.input-group:nth-child(2) { animation-delay: 0.2s; }
```

### Floating Cards Animation

```css
@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(2deg);
  }
}

.glass-float-card {
  animation: float 3s ease-in-out infinite;
}
```

---

## Responsividade Completa

### Breakpoints

| Breakpoint | Largura Esquerda | Largura Direita | Padding Card |
|------------|------------------|-----------------|--------------|
| Desktop (1280px+) | 50% | 50% | 48px |
| Tablet (768-1279px) | 40% | 60% | 32px |
| Mobile (<768px) | 100% (hero) | 100% | 24px |

### Mobile Adjustments

```css
@media (max-width: 767px) {
  .glass-card-login {
    border-radius: 24px 24px 0 0;
    padding: 32px 24px;
    margin: 0;
    max-width: 100%;
  }

  .glass-card-login {
    animation: slideUp 0.5s ease-out;
  }

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
}
```

---

## Acessibilidade

### ARIA Labels

```html
<form
  role="form"
  aria-label="Formulário de login"
  novalidate
>
  <input
    type="email"
    id="email"
    name="email"
    aria-label="Endereço de email"
    aria-required="true"
    aria-invalid="false"
    aria-describedby="email-error"
  />
  <div
    id="email-error"
    class="input-error"
    role="alert"
    aria-live="polite"
  >
    Email inválido
  </div>
</form>
```

### Keyboard Navigation

- Tab: Navigate through fields
- Enter: Submit form
- Space: Toggle checkbox
- Escape: Close modal (if in modal)

### Focus Management

1. **On Load**: Focus on email input
2. **After Submit**: Focus on first error or success message
3. **Tab Order**: Logical order (email → password → checkbox → submit)

---

## Copywriting

### Textos (Português)

**Título:** "Bem-vindo de volta"
**Subtítulo:** "Entre na sua conta para continuar"
**Email Label:** "Email"
**Email Placeholder:** "seu@email.com"
**Password Label:** "Senha"
**Password Placeholder:** "••••••••"
**Checkbox:** "Manter conectado"
**Forgot Password:** "Esqueci a senha"
**Button:** "Entrar"
**Divider:** "ou continue com"
**Google Button:** "Google"
**GitHub Button:** "GitHub"
**Footer:** "Não tem uma conta?"
**Create Account:** "Criar conta"

### Textos (English)

**Title:** "Welcome back"
**Subtitle:** "Sign in to your account to continue"
**Email Label:** "Email"
**Email Placeholder:** "your@email.com"
**Password Label:** "Password"
**Password Placeholder:** "••••••••"
**Checkbox:** "Keep me signed in"
**Forgot Password:** "Forgot password?"
**Button:** "Sign in"
**Divider:** "or continue with"
**Google Button:** "Google"
**GitHub Button:** "GitHub"
**Footer:** "Don't have an account?"
**Create Account:** "Create account"

---

## Variações

### Modal Login Version

Para login em modal (sem redirecionar):

```css
.glass-modal-overlay {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  position: fixed;
  inset: 0;
  z-index: 1050;
}

.glass-modal-login {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  border-radius: 24px;
  max-width: 480px;
  width: 90%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 48px;
}
```

---

## Próximos Arquivos

- [02-autenticacao-cadastro.md](./02-autenticacao-cadastro.md)
- [03-autenticacao-recuperar-senha.md](./03-autenticacao-recuperar-senha.md)
- [04-dashboard-principal.md](./04-dashboard-principal.md)
