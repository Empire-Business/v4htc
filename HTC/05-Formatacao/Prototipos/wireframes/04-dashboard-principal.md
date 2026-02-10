# Wireframe: Dashboard Principal
## Dashboard - Tela Principal

**Versão:** 1.0
**Data:** Fevereiro 2026
**Layout:** Sidebar Navigation + Main Content Area

---

## Descrição Geral

Dashboard principal com visão geral do progresso do aluno, acesso rápido aos cursos, status da assinatura, notificações e suporte rápido. Layout com sidebar fixa e área de conteúdo dinâmica.

---

## Layout Responsivo

### Desktop (1280px+)
```
┌─────────────────────────────────────────────────────────────────────────────┐
│  SIDEBAR    │                    HEADER                                     │
│   (FIXO)    │  [Logo HTC]        [Search] [Notifs] [Profile]               │
│             ├─────────────────────────────────────────────────────────────┤
│             │                                                              │
│  ┌────────┐ │  ┌──────────────────────────────────────────────────────┐  │
│  │  Logo  │ │  │              BREADCRUMB                               │  │
│  │  HTC   │ │  │  Dashboard > Meu Progresso                           │  │
│  └────────┘ │  └──────────────────────────────────────────────────────┘  │
│             │                                                              │
│  ─────────── │  ┌──────────────────────────────────────────────────────┐  │
│             │  │                                                         │  │
│  [🏠 Home]   │  │                    HERO STATS                          │  │
│             │  │  ┌───────────┐ ┌───────────┐ ┌───────────┐           │  │
│  [📚 Cursos] │  │  │           │ │           │ │           │           │  │
│             │  │  │  Cursos   │ │  Certif.  │ │   Horas   │           │  │
│  [🔨 Build]  │  │  │    12     │ │     3     │ │    48h    │           │  │
│             │  │  │   ativos   │ │ obtidos   │ │ estudo   │           │  │
│  [🎓 Tutor]  │  │  │           │ │           │ │           │           │  │
│             │  │  └───────────┘ └───────────┘ └───────────┘           │  │
│  [💬 Suporte] │  │                                                         │  │
│             │  └──────────────────────────────────────────────────────┘  │
│  ─────────── │                                                              │
│             │  ┌──────────────────────────────────────────────────────┐  │
│  SETTINGS    │  │                    CONTINUE LEARNING                 │  │
│             │  │  ┌────────────────────────────────────────────────┐ │  │
│  [⚙️ Config] │  │  │  Course Card - Continue Watching              │ │  │
│  [🚪 Logout] │  │  │  ┌──────────────────────────────────────────┐│ │  │
│             │  │  │  │                                           ││ │  │
└─────────────┘  │  │  │  [Thumbnail]               [Progress 75%]││ │  │
                  │  │  │                                           ││ │  │
                  │  │  │  React Avançado - Hooks & Context        ││ │  │
                  │  │  │                                           ││ │  │
                  │  │  │  [Continue Watching]                     ││ │  │
                  │  │  └──────────────────────────────────────────┘│ │  │
                  │  └────────────────────────────────────────────────┘ │  │
                  │                                                       │
                  │  ┌───────────────────────────────────────────────┐  │
                  │  │                   RECENT COURSES              │  │
                  │  │  ┌────────┐ ┌────────┐ ┌────────┐           │  │
                  │  │  │        │ │        │ │        │           │  │
                  │  │  │ Card 1 │ │ Card 2 │ │ Card 3 │           │  │
                  │  │  └────────┘ └────────┘ └────────┘           │  │
                  │  └───────────────────────────────────────────────┘  │
                  │                                                       │
                  └───────────────────────────────────────────────────────┘
```

### Tablet (768px - 1279px)
```
┌─────────────────────────────────────────────────────────────────────────┐
│  HEADER COMPACT                                                          │
│  [Menu] [Logo HTC]          [Search] [Notifs] [Profile]                 │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  SIDEBAR COLLAPSED (ICON ONLY)     MAIN CONTENT                          │
│  ┌────────┐                         ┌───────────────────────────────┐  │
│  │  Logo  │                         │  Hero Stats (Compact)         │  │
│  └────────┘                         └───────────────────────────────┘  │
│  ───────────                                                             │
│  [🏠]                                                                    │
│  [📚]                         ┌───────────────────────────────┐          │
│  [🔨]                         │  Continue Learning            │          │
│  [🎓]                         └───────────────────────────────┘          │
│  [💬]                                                                    │
│  ───────────                                                             │
│  [⚙️]                         ┌───────────────────────────────┐          │
│  [🚪]                         │  Recent Courses               │          │
│                               └───────────────────────────────┘          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Mobile (< 768px)
```
┌─────────────────────────────────────────────────────────────────────────┐
│  HEADER MOBILE                                                           │
│  [☰] Logo HTC                    [Search] [Notifs] [Avatar]              │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │                          HERO STATS                               │ │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐                             │ │
│  │  │  12     │ │   3     │ │  48h    │                             │ │
│  │  │ Cursos  │ │Certif.  │ │ Horas   │                             │ │
│  │  └─────────┘ └─────────┘ └─────────┘                             │ │
│  └───────────────────────────────────────────────────────────────────┘ │
│                                                                          │
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │                      CONTINUE LEARNING                            │ │
│  │  ┌─────────────────────────────────────────────────────────────┐  │ │
│  │  │ [Thumbnail]                                        [75%]     │  │ │
│  │  │ React Avançado - Hooks & Context                             │  │ │
│  │  │                                                     [▶ Play] │  │ │
│  │  └─────────────────────────────────────────────────────────────┘  │ │
│  └───────────────────────────────────────────────────────────────────┘ │
│                                                                          │
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │                        RECENT COURSES                              │ │
│  │  ┌─────────────────────────────────────────────────────────────┐  │ │
│  │  │ [Thumb]  Course Name                              [Progress]│  │ │
│  │  ├─────────────────────────────────────────────────────────────┤  │ │
│  │  │ [Thumb]  Course Name                              [Progress]│  │ │
│  │  ├─────────────────────────────────────────────────────────────┤  │ │
│  │  │ [Thumb]  Course Name                              [Progress]│  │ │
│  │  └─────────────────────────────────────────────────────────────┘  │ │
│  └───────────────────────────────────────────────────────────────────┘ │
│                                                                          │
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │                      SUBSCRIPTION STATUS                          │ │
│  │  Pro Plan - Active until Dec 31, 2026                            │ │
│  │                                          [Upgrade to Elite →]     │ │
│  └───────────────────────────────────────────────────────────────────┘ │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Componentes Detalhados

### Sidebar Navigation

**Container:**
```css
.sidebar {
  width: 260px;
  height: 100vh;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-right: 1px solid rgba(255, 255, 255, 0.18);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.sidebar.collapsed {
  width: 80px;
}
```

**Logo Section:**
```html
<div class="sidebar-logo">
  <a href="/dashboard" class="logo-link">
    <img src="/logo-htc.svg" alt="HTC" class="logo-icon" />
    <span class="logo-text">HTC</span>
  </a>
</div>
```

**Navigation Items:**
```html
<nav class="sidebar-nav">
  <ul class="nav-list">
    <li class="nav-item">
      <a href="/dashboard" class="nav-link active" data-page="dashboard">
        <span class="nav-icon">
          <Icon name="home" />
        </span>
        <span class="nav-label">Dashboard</span>
        <span class="nav-badge">3</span>
      </a>
    </li>
    <li class="nav-item">
      <a href="/cursos" class="nav-link" data-page="courses">
        <span class="nav-icon">
          <Icon name="book-open" />
        </span>
        <span class="nav-label">Cursos</span>
      </a>
    </li>
    <li class="nav-item">
      <a href="/construir" class="nav-link" data-page="build">
        <span class="nav-icon">
          <Icon name="hammer" />
        </span>
        <span class="nav-label">Construir</span>
        <span class="nav-indicator new">Novo</span>
      </a>
    </li>
    <li class="nav-item">
      <a href="/tutorial" class="nav-link" data-page="tutorial">
        <span class="nav-icon">
          <Icon name="graduation-cap" />
        </span>
        <span class="nav-label">Tutorial</span>
      </a>
    </li>
    <li class="nav-item">
      <a href="/suporte" class="nav-link" data-page="support">
        <span class="nav-icon">
          <Icon name="message-circle" />
        </span>
        <span class="nav-label">Suporte IA</span>
        <span class="nav-badge">5</span>
      </a>
    </li>
  </ul>

  <div class="nav-divider"></div>

  <ul class="nav-list nav-list-secondary">
    <li class="nav-item">
      <a href="/configuracoes" class="nav-link" data-page="settings">
        <span class="nav-icon">
          <Icon name="settings" />
        </span>
        <span class="nav-label">Configurações</span>
      </a>
    </li>
    <li class="nav-item">
      <button class="nav-link nav-logout" data-action="logout">
        <span class="nav-icon">
          <Icon name="log-out" />
        </span>
        <span class="nav-label">Sair</span>
      </button>
    </li>
  </ul>
</nav>
```

**Nav Link Styles:**
```css
.nav-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 12px;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  background: rgba(37, 99, 235, 0.1);
  color: var(--color-primary);
  transform: translateX(4px);
}

.nav-link.active {
  background: rgba(37, 99, 235, 0.15);
  color: var(--color-primary);
  font-weight: 600;
}

.nav-link.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 60%;
  background: var(--color-primary);
  border-radius: 0 4px 4px 0;
}

.nav-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.nav-label {
  flex: 1;
  white-space: nowrap;
}

.nav-badge {
  background: var(--color-error);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 10px;
}

.nav-indicator.new {
  background: linear-gradient(135deg, #F59E0B, #F97316);
  color: white;
  font-size: 0.625rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 10px;
  text-transform: uppercase;
}
```

### Header

**Container:**
```html
<header class="dashboard-header">
  <div class="header-left">
    <button class="sidebar-toggle" id="sidebar-toggle" aria-label="Toggle sidebar">
      <Icon name="menu" />
    </button>
    <div class="header-logo-mobile">
      <img src="/logo-htc.svg" alt="HTC" />
    </div>
  </div>

  <div class="header-center">
    <div class="search-bar">
      <Icon name="search" class="search-icon" />
      <input
        type="search"
        placeholder="Buscar cursos, tutoriais..."
        class="search-input"
      />
      <kbd class="search-shortcut">⌘K</kbd>
    </div>
  </div>

  <div class="header-right">
    <button class="header-icon-button" aria-label="Notificações">
      <Icon name="bell" />
      <span class="notification-badge">3</span>
    </button>
    <button class="header-icon-button" aria-label="Mensagens">
      <Icon name="message-square" />
      <span class="notification-badge">5</span>
    </button>
    <div class="header-profile">
      <button class="profile-trigger" aria-expanded="false">
        <img
          src="/avatar-placeholder.jpg"
          alt="Avatar"
          class="profile-avatar"
        />
        <div class="profile-info">
          <span class="profile-name">João Silva</span>
          <span class="profile-plan">Pro</span>
        </div>
        <Icon name="chevron-down" class="profile-chevron" />
      </button>
      <div class="profile-dropdown glass-dropdown">
        <div class="dropdown-header">
          <img src="/avatar-placeholder.jpg" alt="Avatar" />
          <div>
            <div class="dropdown-name">João Silva</div>
            <div class="dropdown-email">joao@exemplo.com</div>
          </div>
        </div>
        <div class="dropdown-divider"></div>
        <a href="/perfil" class="dropdown-item">
          <Icon name="user" />
          Meu Perfil
        </a>
        <a href="/configuracoes" class="dropdown-item">
          <Icon name="settings" />
          Configurações
        </a>
        <a href="/assinatura" class="dropdown-item">
          <Icon name="credit-card" />
          Assinatura
        </a>
        <div class="dropdown-divider"></div>
        <button class="dropdown-item dropdown-logout">
          <Icon name="log-out" />
          Sair
        </button>
      </div>
    </div>
  </div>
</header>
```

**Header Styles:**
```css
.dashboard-header {
  height: 64px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 999;
}

.header-left,
.header-center,
.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.header-center {
  flex: 1;
  max-width: 480px;
}

.search-bar {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
}

.search-input {
  width: 100%;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 12px;
  padding: 10px 40px 10px 40px;
  font-size: 0.9375rem;
  color: var(--color-text-primary);
  transition: all 0.3s ease;
}

.search-input:focus {
  background: rgba(255, 255, 255, 0.7);
  border-color: rgba(37, 99, 235, 0.5);
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
  outline: none;
}

.search-icon {
  position: absolute;
  left: 12px;
  color: var(--color-text-tertiary);
  pointer-events: none;
}

.search-shortcut {
  position: absolute;
  right: 12px;
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 2px 6px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--color-text-tertiary);
}

.header-icon-button {
  position: relative;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
  border-radius: 10px;
  color: var(--color-text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.header-icon-button:hover {
  background: rgba(0, 0, 0, 0.05);
  color: var(--color-primary);
}

.notification-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  background: var(--color-error);
  color: white;
  font-size: 0.625rem;
  font-weight: 700;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### Hero Stats Cards

```html
<div class="hero-stats">
  <div class="stat-card glass-card">
    <div class="stat-icon stat-icon-blue">
      <Icon name="book-open" />
    </div>
    <div class="stat-content">
      <div class="stat-value">12</div>
      <div class="stat-label">Cursos Ativos</div>
      <div class="stat-change positive">
        <Icon name="trending-up" />
        +2 este mês
      </div>
    </div>
  </div>

  <div class="stat-card glass-card">
    <div class="stat-icon stat-icon-green">
      <Icon name="award" />
    </div>
    <div class="stat-content">
      <div class="stat-value">3</div>
      <div class="stat-label">Certificados</div>
      <div class="stat-change positive">
        <Icon name="trending-up" />
        +1 este mês
      </div>
    </div>
  </div>

  <div class="stat-card glass-card">
    <div class="stat-icon stat-icon-purple">
      <Icon name="clock" />
    </div>
    <div class="stat-content">
      <div class="stat-value">48h</div>
      <div class="stat-label">Horas de Estudo</div>
      <div class="stat-change positive">
        <Icon name="trending-up" />
        +12h esta semana
      </div>
    </div>
  </div>
</div>
```

**Stat Card Styles:**
```css
.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 32px;
}

.stat-card {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  gap: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
}

.stat-icon {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.stat-icon-blue {
  background: rgba(37, 99, 235, 0.1);
  color: var(--color-primary);
}

.stat-icon-green {
  background: rgba(34, 197, 94, 0.1);
  color: var(--color-success);
}

.stat-icon-purple {
  background: rgba(139, 92, 246, 0.1);
  color: var(--color-secondary);
}

.stat-value {
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-text-primary);
  line-height: 1;
  margin-bottom: 4px;
}

.stat-label {
  font-size: 0.9375rem;
  color: var(--color-text-secondary);
  margin-bottom: 8px;
}

.stat-change {
  font-size: 0.8125rem;
  display: flex;
  align-items: center;
  gap: 4px;
}

.stat-change.positive {
  color: var(--color-success);
}

.stat-change.negative {
  color: var(--color-error);
}
```

### Continue Learning Card

```html
<div class="continue-learning">
  <div class="section-header">
    <h2 class="section-title">Continue Assistindo</h2>
    <a href="/cursos" class="section-link">
      Ver todos
      <Icon name="arrow-right" />
    </a>
  </div>

  <div class="continue-card glass-card">
    <div class="continue-thumbnail">
      <img src="/course-thumbnail.jpg" alt="Curso" />
      <div class="continue-overlay">
        <button class="play-button" aria-label="Reproduzir">
          <Icon name="play" size="large" />
        </button>
      </div>
      <div class="continue-progress-time">
        Resta 12:34
      </div>
    </div>

    <div class="continue-content">
      <div class="continue-meta">
        <span class="continue-badge">Em progresso</span>
        <span class="continue-category">React</span>
      </div>

      <h3 class="continue-title">
        React Avançado - Hooks Customizados e Context API
      </h3>

      <p class="continue-description">
        Aprenda a criar hooks personalizados e gerenciar estado global com Context API
      </p>

      <div class="continue-progress">
        <div class="progress-bar">
          <div class="progress-fill" style="width: 75%"></div>
        </div>
        <div class="progress-stats">
          <span>75% completo</span>
          <span>12 de 16 aulas</span>
        </div>
      </div>

      <div class="continue-actions">
        <button class="button button-primary">
          <Icon name="play" />
          Continuar
        </button>
        <button class="button button-outline" aria-label="Adicionar aos favoritos">
          <Icon name="bookmark" />
        </button>
      </div>
    </div>
  </div>
</div>
```

**Continue Card Styles:**
```css
.continue-card {
  display: flex;
  gap: 24px;
  padding: 0;
  overflow: hidden;
}

.continue-thumbnail {
  position: relative;
  width: 320px;
  flex-shrink: 0;
}

.continue-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.continue-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.continue-thumbnail:hover .continue-overlay {
  opacity: 1;
}

.play-button {
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.play-button:hover {
  transform: scale(1.1);
  background: white;
}

.continue-progress-time {
  position: absolute;
  bottom: 12px;
  left: 12px;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  color: white;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.8125rem;
  font-weight: 600;
}

.continue-content {
  flex: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
}

.continue-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.continue-badge {
  background: rgba(37, 99, 235, 0.1);
  color: var(--color-primary);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}

.continue-category {
  color: var(--color-text-tertiary);
  font-size: 0.8125rem;
}

.continue-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: 8px;
}

.continue-description {
  color: var(--color-text-secondary);
  font-size: 0.9375rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.progress-bar {
  width: 100%;
  height: 6px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 8px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #2563EB, #8B5CF6);
  border-radius: 3px;
  transition: width 0.5s ease;
}

.progress-stats {
  display: flex;
  justify-content: space-between;
  font-size: 0.8125rem;
  color: var(--color-text-tertiary);
  margin-bottom: 20px;
}

.continue-actions {
  display: flex;
  gap: 12px;
  margin-top: auto;
}
```

### Recent Courses Grid

```html
<div class="recent-courses">
  <div class="section-header">
    <h2 class="section-title">Cursos Recentes</h2>
    <a href="/cursos" class="section-link">
      Ver todos
      <Icon name="arrow-right" />
    </a>
  </div>

  <div class="courses-grid">
    <!-- Course Card 1 -->
    <div class="course-card glass-card">
      <div class="course-thumbnail">
        <img src="/course-1.jpg" alt="Curso" />
        <div class="course-level">Intermediário</div>
      </div>
      <div class="course-body">
        <div class="course-category">
          <Icon name="code" />
          TypeScript
        </div>
        <h3 class="course-title">
          TypeScript para React
        </h3>
        <div class="course-meta">
          <span class="course-duration">
            <Icon name="clock" />
            8h de conteúdo
          </span>
          <span class="course-lessons">
            <Icon name="play-circle" />
            24 aulas
          </span>
        </div>
        <div class="course-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width: 45%"></div>
          </div>
          <span class="progress-text">45% completo</span>
        </div>
      </div>
    </div>

    <!-- Course Card 2 -->
    <div class="course-card glass-card">
      <!-- Similar structure -->
    </div>

    <!-- Course Card 3 -->
    <div class="course-card glass-card">
      <!-- Similar structure -->
    </div>
  </div>
</div>
```

**Course Card Styles:**
```css
.courses-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

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

.course-level {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}

.course-body {
  padding: 20px;
}

.course-category {
  display: inline-flex;
  align-items: center;
  gap: 6px;
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
  line-height: 1.4;
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

.course-progress {
  margin-top: auto;
}

.progress-text {
  display: block;
  font-size: 0.75rem;
  color: var(--color-text-tertiary);
  margin-top: 6px;
}
```

### Subscription Status Card

```html
<div class="subscription-card glass-card">
  <div class="subscription-header">
    <div class="subscription-icon">
      <Icon name="crown" />
    </div>
    <div>
      <h3 class="subscription-plan">Plano Pro</h3>
      <p class="subscription-status">Ativo até 31 Dez 2026</p>
    </div>
  </div>

  <div class="subscription-features">
    <div class="feature-item included">
      <Icon name="check" />
      <span>Acesso ilimitado aos cursos</span>
    </div>
    <div class="feature-item included">
      <Icon name="check" />
      <span>Certificados inclusos</span>
    </div>
    <div class="feature-item included">
      <Icon name="check" />
      <span>Suporte prioritário</span>
    </div>
  </div>

  <div class="subscription-actions">
    <button class="button button-outline">
      Gerenciar Assinatura
    </button>
    <button class="button button-primary">
      Fazer Upgrade
      <Icon name="arrow-right" />
    </button>
  </div>
</div>
```

---

## Responsividade

### Tablet Adjustments

```css
@media (max-width: 1279px) {
  .sidebar {
    width: 80px;
  }

  .sidebar:not(.collapsed) .nav-label,
  .sidebar:not(.collapsed) .nav-badge,
  .sidebar:not(.collapsed) .nav-indicator {
    display: none;
  }

  .sidebar.collapsed {
    width: 80px;
  }

  .hero-stats {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  .stat-card {
    padding: 16px;
  }

  .courses-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

### Mobile Adjustments

```css
@media (max-width: 767px) {
  .sidebar {
    transform: translateX(-100%);
  }

  .sidebar.mobile-open {
    transform: translateX(0);
  }

  .hero-stats {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  .stat-card {
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    text-align: center;
  }

  .stat-icon {
    width: 40px;
    height: 40px;
  }

  .stat-value {
    font-size: 1.5rem;
  }

  .continue-card {
    flex-direction: column;
  }

  .continue-thumbnail {
    width: 100%;
    height: 200px;
  }

  .courses-grid {
    grid-template-columns: 1fr;
  }

  .search-bar {
    display: none;
  }
}
```

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

.stat-card {
  animation: fadeInUp 0.6s ease-out backwards;
}

.stat-card:nth-child(1) { animation-delay: 0.1s; }
.stat-card:nth-child(2) { animation-delay: 0.2s; }
.stat-card:nth-child(3) { animation-delay: 0.3s; }
```

---

## Copywriting

### Section Titles
- "Continue Assistindo"
- "Cursos Recentes"
- "Seu Progresso"
- "Status da Assinatura"

### Empty States
- "Você ainda não iniciou nenhum curso"
- "Comece sua jornada de aprendizado agora!"
- [Explorar Cursos]

---

## Próximos Arquivos

- [05-cursos-lista.md](./05-cursos-lista.md)
- [06-cursos-player.md](./06-cursos-player.md)
- [07-construcao-templates.md](./07-construcao-templates.md)
