# Biblioteca de Componentes
## Componentes Reutilizáveis - HTC Platform

**Versão:** 1.0
**Data:** Fevereiro 2026

---

## Índice de Componentes

1. **Botões** (Buttons)
2. **Cards** (Course, Progress, Skill)
3. **Formulários** (Inputs, Selects, Textareas)
4. **Modais** (Confirmar, Informativo)
5. **Navegação** (Header, Sidebar, Footer)

---

## 1. Botões (Buttons)

### Variantes

#### Primary Button

```html
<button class="button button-primary">
  <span>Entrar</span>
  <Icon name="arrow-right" />
</button>
```

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
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.button-primary:hover {
  background: rgba(37, 99, 235, 0.9);
  box-shadow: 0 6px 24px rgba(37, 99, 235, 0.3);
  transform: translateY(-1px);
}

.button-primary:active {
  transform: translateY(0);
}

.button-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
```

#### Secondary Button

```css
.button-secondary {
  background: rgba(139, 92, 246, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 4px 16px rgba(139, 92, 246, 0.2);
  border-radius: 12px;
  color: white;
  /* Resto similar ao primary */
}
```

#### Outline Button

```css
.button-outline {
  background: transparent;
  border: 2px solid rgba(37, 99, 235, 0.5);
  border-radius: 12px;
  color: var(--color-primary);
  padding: 14px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button-outline:hover {
  background: rgba(37, 99, 235, 0.1);
  border-color: rgba(37, 99, 235, 0.8);
}
```

#### Ghost Button

```css
.button-ghost {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  color: white;
  padding: 14px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.button-ghost:hover {
  background: rgba(255, 255, 255, 0.2);
}
```

### Tamanhos

```css
.button-sm {
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 10px;
}

.button-md {
  padding: 14px 24px;
  font-size: 16px;
  border-radius: 12px;
}

.button-lg {
  padding: 18px 32px;
  font-size: 18px;
  border-radius: 14px;
}

.button-xl {
  padding: 24px 40px;
  font-size: 20px;
  border-radius: 16px;
}
```

### Estados

```css
/* Loading State */
.button.loading {
  pointer-events: none;
  position: relative;
  color: transparent;
}

.button.loading::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  top: 50%;
  left: 50%;
  margin-left: -8px;
  margin-top: -8px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Success State */
.button.success {
  background: rgba(34, 197, 94, 0.8);
  border-color: rgba(34, 197, 94, 0.5);
}

/* Error State */
.button.error {
  background: rgba(239, 68, 68, 0.8);
  border-color: rgba(239, 68, 68, 0.5);
}
```

---

## 2. Cards (Course, Progress, Skill)

### Course Card

```html
<div class="course-card glass-card">
  <div class="course-thumbnail">
    <img src="/course-thumb.jpg" alt="Course" />
    <div class="course-overlay">
      <button class="play-overlay">
        <Icon name="play-circle" size="large" />
      </button>
    </div>
  </div>
  <div class="course-body">
    <div class="course-category">React</div>
    <h3 class="course-title">React Avançado</h3>
    <div class="course-meta">
      <span><Icon name="clock" /> 12h</span>
      <span><Icon name="play-circle" /> 48 aulas</span>
    </div>
    <div class="course-progress">
      <div class="progress-bar">
        <div class="progress-fill" style="width: 75%"></div>
      </div>
      <span class="progress-text">75% completo</span>
    </div>
  </div>
</div>
```

```css
.course-card {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.course-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
}

.course-thumbnail {
  position: relative;
  width: 100%;
  height: 180px;
}

.course-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.course-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.course-card:hover .course-overlay {
  opacity: 1;
}

.play-overlay {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: none;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.play-overlay:hover {
  transform: scale(1.1);
}

.course-body {
  padding: 20px;
}

.course-category {
  color: var(--color-primary);
  font-size: 0.8125rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.course-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 12px;
}

.course-meta {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
}

.course-meta span {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.8125rem;
  color: var(--color-text-tertiary);
}

.progress-bar {
  width: 100%;
  height: 6px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #2563EB, #8B5CF6);
  border-radius: 3px;
  transition: width 0.5s ease;
}

.progress-text {
  font-size: 0.75rem;
  color: var(--color-text-tertiary);
  margin-top: 6px;
  display: block;
}
```

### Progress Card

```html
<div class="progress-card glass-card">
  <div class="progress-header">
    <div class="progress-icon">
      <Icon name="trophy" />
    </div>
    <div class="progress-info">
      <h3>Seu Progresso</h3>
      <p>Continue sua jornada</p>
    </div>
  </div>
  <div class="progress-stats">
    <div class="stat">
      <span class="value">75%</span>
      <span class="label">Completo</span>
    </div>
    <div class="stat">
      <span class="value">12</span>
      <span class="label">Cursos</span>
    </div>
  </div>
</div>
```

### Skill Card

```html
<div class="skill-card glass-card">
  <div class="skill-icon">
    <Icon name="code" />
  </div>
  <h4 class="skill-name">React</h4>
  <div class="skill-level">
    <div class="level-bar">
      <div class="level-fill" style="width: 85%"></div>
    </div>
    <span class="level-text">Avançado</span>
  </div>
  <div class="skill-projects">
    <span>12 projetos completados</span>
  </div>
</div>
```

---

## 3. Formulários (Inputs, Selects, Textareas)

### Glass Input

```html
<div class="input-group">
  <label class="input-label" for="email">
    Email
    <span class="required">*</span>
  </label>
  <input
    type="email"
    id="email"
    name="email"
    placeholder="seu@email.com"
    class="glass-input"
    required
  />
  <div class="input-hint">Digite seu email cadastrado</div>
  <div class="input-error hidden">Email inválido</div>
</div>
```

```css
.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
}

.input-label {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--color-text-primary);
  display: flex;
  align-items: center;
  gap: 4px;
}

.required {
  color: var(--color-error);
}

.glass-input {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 12px;
  padding: 12px 16px;
  font-size: 16px;
  font-family: inherit;
  color: var(--color-text-primary);
  transition: all 0.3s ease;
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

.glass-input.error {
  border-color: var(--color-error);
}

.glass-input.success {
  border-color: var(--color-success);
}

.input-hint {
  font-size: 0.8125rem;
  color: var(--color-text-tertiary);
}

.input-error {
  font-size: 0.8125rem;
  color: var(--color-error);
  display: flex;
  align-items: center;
  gap: 4px;
}

.input-error.hidden {
  display: none;
}
```

### Textarea

```css
.glass-textarea {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 12px;
  padding: 12px 16px;
  font-size: 16px;
  font-family: inherit;
  color: var(--color-text-primary);
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
}
```

### Select

```css
.glass-select {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 12px;
  padding: 12px 16px;
  font-size: 16px;
  font-family: inherit;
  color: var(--color-text-primary);
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml...");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 40px;
}

.glass-select:focus {
  background: rgba(255, 255, 255, 0.7);
  border: 2px solid rgba(37, 99, 235, 0.5);
  outline: none;
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
}
```

---

## 4. Modais (Confirmar, Informativo)

### Glass Modal

```html
<div class="modal-overlay" id="modal-overlay">
  <div class="glass-modal" role="dialog" aria-labelledby="modal-title">
    <div class="modal-header">
      <h2 id="modal-title">Título do Modal</h2>
      <button class="modal-close" aria-label="Fechar modal">
        <Icon name="x" />
      </button>
    </div>
    <div class="modal-body">
      <p>Conteúdo do modal...</p>
    </div>
    <div class="modal-footer">
      <button class="button button-outline">Cancelar</button>
      <button class="button button-primary">Confirmar</button>
    </div>
  </div>
</div>
```

```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  position: fixed;
  inset: 0;
  z-index: 1040;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.glass-modal {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  border-radius: 24px;
  max-width: 480px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
}

.modal-close {
  background: transparent;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease;
}

.modal-close:hover {
  background: rgba(0, 0, 0, 0.05);
}

.modal-body {
  padding: 24px;
}

.modal-footer {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  padding: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.18);
}
```

---

## 5. Navegação (Header, Sidebar, Footer)

### Header Componente

```html
<header class="glass-header">
  <div class="header-container">
    <div class="header-left">
      <a href="/" class="header-logo">
        <img src="/logo.svg" alt="HTC" />
      </a>
      <nav class="header-nav">
        <a href="/cursos" class="nav-link">Cursos</a>
        <a href="/construir" class="nav-link">Construir</a>
        <a href="/tutorial" class="nav-link">Tutorial</a>
      </nav>
    </div>
    <div class="header-right">
      <div class="header-search">
        <Icon name="search" />
        <input type="search" placeholder="Buscar..." />
      </div>
      <button class="header-icon" aria-label="Notificações">
        <Icon name="bell" />
      </button>
      <div class="header-profile">
        <img src="/avatar.jpg" alt="Avatar" />
      </div>
    </div>
  </div>
</header>
```

```css
.glass-header {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-nav {
  display: flex;
  gap: 32px;
}

.nav-link {
  color: var(--color-text-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--color-primary);
}
```

---

## Animações

### Fade In Up

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

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}
```

### Scale In

```css
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-scale-in {
  animation: scaleIn 0.3s ease-out;
}
```

---

## Tokens de Componentes

```css
:root {
  /* Border Radius */
  --radius-btn: 12px;
  --radius-card: 16px;
  --radius-input: 12px;
  --radius-modal: 24px;

  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.12);

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 300ms ease;
  --transition-slow: 500ms ease;
}
```

---

## Próximos Arquivos

- [../INDEX.md](../INDEX.md)
- [../../identidade-visual/INDEX.md](../../identidade-visual/INDEX.md)
