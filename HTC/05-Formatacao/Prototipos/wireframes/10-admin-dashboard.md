# Wireframe: Painel Administrativo
## Admin - Dashboard Principal

**Versão:** 1.0
**Data:** Fevereiro 2026
**Layout:** Admin Sidebar + Dashboard com Analytics

---

## Descrição Geral

Painel administrativo completo com gestão de usuários, conteúdo, analytics e configurações do sistema. Layout focado em produtividade e visualização de dados.

---

## Layout Desktop

```
┌─────────┬─────────────────────────────────────────────────────────────┐
│ ADMIN   │ HEADER                                                      │
│ SIDEBAR │ [Admin Panel]  [Search]  [Notifications]  [Admin Profile]  │
│         ├─────────────────────────────────────────────────────────────┤
│         │                                                             │
│         │ ┌───────────────────────────────────────────────────────┐  │
│         │ │  DASHBOARD OVERVIEW                                    │  │
│         │ │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐     │  │
│         │ │  │ 12,458  │ │  1.2M   │ │  98.5%  │ │  R$ 297K│     │  │
│         │ │  │Usuários │ │Receita  │ │Uptime   │ │MRR      │     │  │
│         │ │  │  +12%   │ │  +8%    │ │         │ │  +15%   │     │  │
│         │ │  └─────────┘ └─────────┘ └─────────┘ └─────────┘     │  │
│         │ └───────────────────────────────────────────────────────┘  │
│         │                                                             │
│         │ ┌───────────────────────────────┬─────────────────────────┐ │
│         │ │  Revenue Chart                │  User Growth           │ │
│         │ │  [Line Chart]                 │  [Bar Chart]           │ │
│         │ └───────────────────────────────┴─────────────────────────┘ │
│         │                                                             │
│         │ ┌───────────────────────────────────────────────────────┐  │
│         │ │  Recent Activity                                      │  │
│         │ │  ┌─────────────────────────────────────────────────┐  │  │
│         │ │  │ 🆕 New user: joao@email.com                     │  │  │
│         │ │  │ 💰 Payment: R$ 297.00 (Pro Plan)                │  │  │
│         │ │  │ 📚 Course completed: React Avançado             │  │  │
│         │ │  │ ⚠️ Alert: Server load above 80%                 │  │  │
│         │ │  └─────────────────────────────────────────────────┘  │  │
│         │ └───────────────────────────────────────────────────────┘  │
│         │                                                             │
└─────────┴─────────────────────────────────────────────────────────────┘
```

---

## Admin Sidebar

```html
<aside class="admin-sidebar glass-panel">
  <div class="sidebar-header">
    <div class="admin-logo">
      <img src="/admin-logo.svg" alt="HTC Admin" />
      <span>Admin Panel</span>
    </div>
    <button class="collapse-sidebar" aria-label="Recolher sidebar">
      <Icon name="chevrons-left" />
    </button>
  </div>

  <nav class="admin-nav">
    <div class="nav-section">
      <h4 class="section-title">Principal</h4>
      <ul class="nav-list">
        <li class="nav-item active">
          <a href="/admin/dashboard" class="nav-link">
            <Icon name="layout-dashboard" />
            <span>Dashboard</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="/admin/analytics" class="nav-link">
            <Icon name="bar-chart-2" />
            <span>Analytics</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="nav-section">
      <h4 class="section-title">Gestão</h4>
      <ul class="nav-list">
        <li class="nav-item">
          <a href="/admin/users" class="nav-link">
            <Icon name="users" />
            <span>Usuários</span>
            <span class="badge">12,458</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="/admin/courses" class="nav-link">
            <Icon name="book-open" />
            <span>Cursos</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="/admin/content" class="nav-link">
            <Icon name="file-text" />
            <span>Conteúdo</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="/admin/subscriptions" class="nav-link">
            <Icon name="credit-card" />
            <span>Assinaturas</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="nav-section">
      <h4 class="section-title">Sistema</h4>
      <ul class="nav-list">
        <li class="nav-item">
          <a href="/admin/support" class="nav-link">
            <Icon name="message-square" />
            <span>Suporte</span>
            <span class="badge badge-warning">24</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="/admin/settings" class="nav-link">
            <Icon name="settings" />
            <span>Configurações</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="/admin/logs" class="nav-link">
            <Icon name="file-text" />
            <span>Logs</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>

  <div class="sidebar-footer">
    <a href="/" class="back-to-site">
      <Icon name="external-link" />
      Ver site
    </a>
    <button class="logout-btn">
      <Icon name="log-out" />
      Sair
    </button>
  </div>
</aside>
```

---

## Dashboard Stats Cards

```html
<div class="stats-grid">
  <div class="stat-card glass-card">
    <div class="stat-header">
      <div class="stat-icon stat-blue">
        <Icon name="users" />
      </div>
      <div class="stat-trend positive">
        <Icon name="trending-up" />
        <span>+12%</span>
      </div>
    </div>
    <div class="stat-value">12,458</div>
    <div class="stat-label">Usuários Ativos</div>
    <div class="stat-footer">
      <span class="stat-change">+1,234 este mês</span>
    </div>
  </div>

  <div class="stat-card glass-card">
    <div class="stat-header">
      <div class="stat-icon stat-green">
        <Icon name="dollar-sign" />
      </div>
      <div class="stat-trend positive">
        <Icon name="trending-up" />
        <span>+8%</span>
      </div>
    </div>
    <div class="stat-value">R$ 1.2M</div>
    <div class="stat-label">Receita Total</div>
    <div class="stat-footer">
      <span class="stat-change">+R$ 97K este mês</span>
    </div>
  </div>

  <div class="stat-card glass-card">
    <div class="stat-header">
      <div class="stat-icon stat-purple">
        <Icon name="activity" />
      </div>
      <div class="stat-trend neutral">
        <span>—</span>
      </div>
    </div>
    <div class="stat-value">98.5%</div>
    <div class="stat-label">Uptime</div>
    <div class="stat-footer">
      <span class="stat-change">99.9% meta</span>
    </div>
  </div>

  <div class="stat-card glass-card">
    <div class="stat-header">
      <div class="stat-icon stat-orange">
        <Icon name="repeat" />
      </div>
      <div class="stat-trend positive">
        <Icon name="trending-up" />
        <span>+15%</span>
      </div>
    </div>
    <div class="stat-value">R$ 297K</div>
    <div class="stat-label">MRR</div>
    <div class="stat-footer">
      <span class="stat-change">+R$ 39K este mês</span>
    </div>
  </div>
</div>
```

---

## Analytics Charts

```html
<div class="charts-grid">
  <!-- Revenue Chart -->
  <div class="chart-card glass-card">
    <div class="chart-header">
      <h3>Receita</h3>
      <div class="chart-controls">
        <select class="chart-period glass-select">
          <option>Últimos 7 dias</option>
          <option selected>Últimos 30 dias</option>
          <option>Últimos 90 dias</option>
          <option>Este ano</option>
        </select>
        <button class="chart-export" aria-label="Exportar dados">
          <Icon name="download" />
        </button>
      </div>
    </div>
    <div class="chart-container">
      <canvas id="revenue-chart"></canvas>
    </div>
    <div class="chart-footer">
      <div class="chart-legend">
        <span class="legend-item">
          <span class="legend-color" style="background: #2563EB;"></span>
          Assinaturas
        </span>
        <span class="legend-item">
          <span class="legend-color" style="background: #8B5CF6;"></span>
          Cursos
        </span>
        <span class="legend-item">
          <span class="legend-color" style="background: #F59E0B;"></span>
          Outros
        </span>
      </div>
    </div>
  </div>

  <!-- User Growth Chart -->
  <div class="chart-card glass-card">
    <div class="chart-header">
      <h3>Crescimento de Usuários</h3>
      <div class="chart-controls">
        <select class="chart-period glass-select">
          <option>Últimos 7 dias</option>
          <option selected>Últimos 30 dias</option>
          <option>Últimos 90 dias</option>
        </select>
      </div>
    </div>
    <div class="chart-container">
      <canvas id="users-chart"></canvas>
    </div>
    <div class="chart-footer">
      <div class="chart-summary">
        <span class="summary-item">
          <strong>+1,234</strong> novos usuários
        </span>
        <span class="summary-item">
          <strong>12%</strong> taxa de conversão
        </span>
      </div>
    </div>
  </div>
</div>
```

---

## Users Management Table

```html
<div class="users-table-container glass-card">
  <div class="table-header">
    <h3>Gestão de Usuários</h3>
    <div class="table-actions">
      <div class="search-bar">
        <Icon name="search" />
        <input
          type="search"
          placeholder="Buscar usuários..."
          class="search-input"
        />
      </div>
      <select class="filter-select glass-select">
        <option value="all">Todos os planos</option>
        <option value="free">Gratuito</option>
        <option value="pro">Pro</option>
        <option value="elite">Elite</option>
      </select>
      <button class="button button-primary">
        <Icon name="plus" />
        Novo Usuário
      </button>
    </div>
  </div>

  <div class="table-wrapper">
    <table class="users-table">
      <thead>
        <tr>
          <th>
            <input type="checkbox" class="select-all" />
          </th>
          <th>Usuário</th>
          <th>Email</th>
          <th>Plano</th>
          <th>Status</th>
          <th>Cursos</th>
          <th>Último Acesso</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-row">
          <td>
            <input type="checkbox" class="row-select" />
          </td>
          <td>
            <div class="user-cell">
              <img src="/avatar1.jpg" alt="Avatar" />
              <div>
                <span class="user-name">João Silva</span>
                <span class="user-id">#12345</span>
              </div>
            </div>
          </td>
          <td>joao@email.com</td>
          <td>
            <span class="plan-badge pro">Pro</span>
          </td>
          <td>
            <span class="status-badge active">Ativo</span>
          </td>
          <td>12 cursos</td>
          <td>Há 2 horas</td>
          <td>
            <div class="row-actions">
              <button class="action-btn" aria-label="Ver detalhes">
                <Icon name="eye" />
              </button>
              <button class="action-btn" aria-label="Editar">
                <Icon name="edit-2" />
              </button>
              <button class="action-btn" aria-label="Mais ações">
                <Icon name="more-vertical" />
              </button>
            </div>
          </td>
        </tr>
        <!-- More rows -->
      </tbody>
    </table>
  </div>

  <div class="table-footer">
    <div class="table-info">
      <span>Mostrando 1-10 de 12,458 usuários</span>
    </div>
    <div class="table-pagination">
      <button class="pagination-btn" disabled>
        <Icon name="chevron-left" />
      </button>
      <button class="pagination-btn active">1</button>
      <button class="pagination-btn">2</button>
      <button class="pagination-btn">3</button>
      <span class="pagination-ellipsis">...</span>
      <button class="pagination-btn">1246</button>
      <button class="pagination-btn">
        <Icon name="chevron-right" />
      </button>
    </div>
  </div>
</div>
```

---

## Content Management

```html
<div class="content-management glass-card">
  <div class="content-header">
    <h3>Gestão de Conteúdo</h3>
    <div class="content-tabs">
      <button class="tab-btn active">Cursos</button>
      <button class="tab-btn">Módulos</button>
      <button class="tab-btn">Aulas</button>
      <button class="tab-btn">Materiais</button>
    </div>
    <button class="button button-primary">
      <Icon name="plus" />
      Novo Curso
    </button>
  </div>

  <div class="content-grid">
    <!-- Course Card -->
    <div class="course-management-card glass-card">
      <div class="card-thumbnail">
        <img src="/course-thumb.jpg" alt="Course" />
        <div class="card-overlay">
          <button class="overlay-btn" aria-label="Editar">
            <Icon name="edit-2" />
          </button>
          <button class="overlay-btn" aria-label="Preview">
            <Icon name="eye" />
          </button>
        </div>
      </div>
      <div class="card-body">
        <h4 class="card-title">React Avançado</h4>
        <div class="card-meta">
          <span>24 aulas</span>
          <span>12h de conteúdo</span>
          <span>2.4k alunos</span>
        </div>
        <div class="card-stats">
          <div class="stat">
            <span class="label">Completude</span>
            <span class="value">78%</span>
          </div>
          <div class="stat">
            <span class="label">Avaliação</span>
            <span class="value">4.8 ⭐</span>
          </div>
        </div>
        <div class="card-actions">
          <button class="button button-outline button-sm">
            <Icon name="edit-2" />
            Editar
          </button>
          <button class="button button-ghost button-sm">
            <Icon name="bar-chart-2" />
            Analytics
          </button>
        </div>
      </div>
    </div>
    <!-- More course cards -->
  </div>
</div>
```

---

## System Settings

```html
<div class="settings-panel glass-card">
  <div class="settings-header">
    <h3>Configurações do Sistema</h3>
  </div>

  <div class="settings-sections">
    <!-- General Settings -->
    <div class="settings-section">
      <h4>Configurações Gerais</h4>
      <div class="setting-item">
        <div class="setting-info">
          <label>Modo Manutenção</label>
          <p>Ativar modo de manutenção do site</p>
        </div>
        <div class="setting-control">
          <label class="toggle-switch">
            <input type="checkbox" />
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>
      <div class="setting-item">
        <div class="setting-info">
          <label>Registros Novos Usuários</label>
          <p>Permitir novos registros</p>
        </div>
        <div class="setting-control">
          <label class="toggle-switch">
            <input type="checkbox" checked />
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>
    </div>

    <!-- Email Settings -->
    <div class="settings-section">
      <h4>Configurações de Email</h4>
      <div class="setting-item">
        <div class="setting-info">
          <label>SMTP Host</label>
        </div>
        <div class="setting-control">
          <input type="text" class="glass-input" value="smtp.example.com" />
        </div>
      </div>
      <div class="setting-item">
        <div class="setting-info">
          <label>SMTP Port</label>
        </div>
        <div class="setting-control">
          <input type="number" class="glass-input" value="587" />
        </div>
      </div>
      <button class="button button-outline button-sm">
        <Icon name="send" />
        Testar Email
      </button>
    </div>

    <!-- Payment Settings -->
    <div class="settings-section">
      <h4>Configurações de Pagamento</h4>
      <div class="setting-item">
        <div class="setting-info">
          <label>Gateway de Pagamento</label>
        </div>
        <div class="setting-control">
          <select class="glass-select">
            <option>Stripe</option>
            <option>PayPal</option>
            <option>PagSeguro</option>
          </select>
        </div>
      </div>
      <div class="setting-item">
        <div class="setting-info">
          <label>API Key</label>
        </div>
        <div class="setting-control">
          <input type="password" class="glass-input" value="sk_test_***" />
        </div>
      </div>
    </div>
  </div>

  <div class="settings-footer">
    <button class="button button-outline">
      Cancelar
    </button>
    <button class="button button-primary">
      <Icon name="save" />
      Salvar Alterações
    </button>
  </div>
</div>
```

---

## Próximos Arquivos

- [../componentes/README.md](../componentes/README.md)
- [../fluxos-usuario/README.md](../fluxos-usuario/README.md)
- [../INDEX.md](../INDEX.md)
