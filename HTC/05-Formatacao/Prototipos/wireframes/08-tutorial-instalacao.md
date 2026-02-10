# Wireframe: Tutorial de Instalação
## Onboarding - Tutorial Interativo

**Versão:** 1.0
**Data:** Fevereiro 2026
**Layout:** Step-by-Step Wizard com Checklist

---

## Descrição Geral

Tutorial de instalação interativo com passo a passo guiado, vídeos demonstrativos, checklist de progresso e suporte integrado.

---

## Layout Desktop

```
┌─────────────────────────────────────────────────────────────────────────┐
│ HEADER                                  [← Sair do Tutorial]             │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │                       PROGRESS BAR                                 │ │
│  │  ████████████░░░░░░░░░░░░ 60% (3 de 5 passos concluídos)          │ │
│  └───────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│  ┌───────────────────────────┬─────────────────────────────────────┐   │
│  │                           │                                     │   │
│  │   VIDEO TUTORIAL          │      PASSO ATUAL                    │   │
│  │   ─────────────           │      ──────────────                 │   │
│  │                           │                                     │   │
│  │   ┌───────────────────┐   │    Passo 4: Configurar Variáveis   │   │
│  │   │                   │   │    de Ambiente                     │   │
│  │   │   [Video Player]  │   │                                     │   │
│  │   │                   │   │    Neste passo você vai:           │   │
│  │   │   ▶ ||            │   │    • Criar arquivo .env            │   │
│  │   │   ━━━━━●━━━━━     │   │    • Configurar API keys          │   │
│  │   │   03:45 / 12:30   │   │    • Testar configuração          │   │
│  │   │                   │   │                                     │   │
│  │   └───────────────────┘   │                                     │   │
│  │                           │    ┌─────────────────────────────┐ │   │
│  │   [Transcrição] [Notas]    │    │ 📝 Instruções Detalhadas   │ │   │
│  │                           │    │                             │ │   │
│  │   Capítulos:               │    │ 1. Crie o arquivo .env:     │ │   │
│  │   • 0:00 Introdução        │    │                            │ │   │
│  │   • 1:30 Pré-requisitos    │    │    touch .env             │ │   │
│  │   • 3:45 Configuração      │    │                            │ │   │
│  │   • 8:20 Testes            │    │ 2. Adicione as variáveis:  │ │   │
│  │                           │    │                            │ │   │
│  │                           │    │    API_KEY=your_key        │ │   │
│  │   [Assistir novamente]     │    │    DATABASE_URL=...        │ │   │
│  │                           │    │                            │ │   │
│  │                           │    └─────────────────────────────┘ │   │
│  │                           │                                     │   │
│  │                           │    [❓ Precisa de ajuda?]          │   │
│  │                           │                                     │   │
│  └───────────────────────────┴─────────────────────────────────────┘   │
│                                                                         │
│  CHECKLIST DE PROGRESSO                                                  │
│  ┌─────────────────────────────────────────────────────────────────┐    │
│  │ ✓ Passo 1: Instalar Node.js                                     │    │
│  │ ✓ Passo 2: Clonar repositório                                   │    │
│  │ ✓ Passo 3: Instalar dependências                                │    │
│  │ → Passo 4: Configurar variáveis (atual)                         │    │
│  │ ○ Passo 5: Executar aplicação                                   │    │
│  └─────────────────────────────────────────────────────────────────┘    │
│                                                                         │
│  [← Anterior]    [Marcar como Concluído]    [Próximo →]              │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Step-by-Step Component

```html
<div class="tutorial-container">
  <!-- Progress Overview -->
  <div class="progress-overview glass-card">
    <div class="progress-header">
      <h3>Seu Progresso</h3>
      <span class="progress-text">3 de 5 passos concluídos</span>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" style="width: 60%"></div>
    </div>
    <div class="progress-stats">
      <div class="stat">
        <Icon name="clock" />
        <span>15 min restantes</span>
      </div>
      <div class="stat">
        <Icon name="check-circle" />
        <span>3 concluídos</span>
      </div>
    </div>
  </div>

  <!-- Current Step -->
  <div class="current-step glass-card">
    <div class="step-header">
      <div class="step-number">
        <span class="number">4</span>
        <span class="total">/5</span>
      </div>
      <h2>Configurar Variáveis de Ambiente</h2>
      <div class="step-difficulty">
        <span class="difficulty easy">Fácil</span>
        <span class="duration">5 min</span>
      </div>
    </div>

    <div class="step-content">
      <!-- Video Section -->
      <div class="video-section">
        <div class="video-wrapper">
          <video
            poster="/video-poster.jpg"
            class="tutorial-video"
          >
            <source src="/tutorial-step4.mp4" type="video/mp4" />
          </video>
          <div class="video-controls">
            <button class="control-btn" aria-label="Play/Pause">
              <Icon name="play" />
            </button>
            <div class="progress-bar">
              <div class="progress-fill" style="width: 30%"></div>
            </div>
            <span class="time-display">03:45 / 12:30</span>
          </div>
        </div>

        <div class="video-chapters">
          <h4>Capítulos</h4>
          <button class="chapter-item active" data-time="0">
            <span class="chapter-time">0:00</span>
            <span class="chapter-title">Introdução</span>
          </button>
          <button class="chapter-item" data-time="90">
            <span class="chapter-time">1:30</span>
            <span class="chapter-title">Pré-requisitos</span>
          </button>
          <button class="chapter-item" data-time="225">
            <span class="chapter-time">3:45</span>
            <span class="chapter-title">Configuração</span>
          </button>
          <button class="chapter-item" data-time="500">
            <span class="chapter-time">8:20</span>
            <span class="chapter-title">Testes</span>
          </button>
        </div>
      </div>

      <!-- Instructions Section -->
      <div class="instructions-section">
        <div class="learning-objectives">
          <h4>
            <Icon name="target" />
            O que você vai aprender
          </h4>
          <ul>
            <li>Criar arquivo .env</li>
            <li>Configurar API keys</li>
            <li>Testar configuração</li>
          </ul>
        </div>

        <div class="step-instructions">
          <h4>
            <Icon name="list-ordered" />
            Instruções Detalhadas
          </h4>

          <div class="instruction-step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h5>Crie o arquivo .env</h5>
              <p>No diretório raiz do projeto, crie um arquivo chamado <code>.env</code></p>
              <div class="code-block">
                <pre><code>touch .env</code></pre>
                <button class="copy-btn" aria-label="Copiar código">
                  <Icon name="copy" />
                </button>
              </div>
            </div>
          </div>

          <div class="instruction-step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h5>Adicione as variáveis de ambiente</h5>
              <p>Copie e cole as seguintes variáveis no seu arquivo .env:</p>
              <div class="code-block">
                <pre><code># API Configuration
API_KEY=your_api_key_here
API_URL=https://api.example.com

# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/db

# Environment
NODE_ENV=development</code></pre>
                <button class="copy-btn" aria-label="Copiar código">
                  <Icon name="copy" />
                </button>
              </div>
            </div>
          </div>

          <div class="instruction-step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h5>Teste a configuração</h5>
              <p>Execute o comando para verificar se as variáveis foram carregadas:</p>
              <div class="code-block">
                <pre><code>npm run env:test</code></pre>
                <button class="copy-btn" aria-label="Copiar código">
                  <Icon name="copy" />
                </button>
              </div>

              <div class="success-box glass-box">
                <Icon name="check-circle" />
                <div>
                  <strong>Sucesso!</strong>
                  <p>Variáveis de ambiente configuradas corretamente.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="help-section">
          <button class="help-trigger">
            <Icon name="help-circle" />
            Precisa de ajuda?
          </button>
          <div class="help-content">
            <h5>Perguntas Frequentes</h5>
            <details class="faq-item">
              <summary>Onde encontro minha API key?</summary>
              <p>Você pode encontrar sua API key no dashboard da plataforma...</p>
            </details>
            <details class="faq-item">
              <summary>Posso usar um arquivo .env.local?</summary>
              <p>Sim, você pode usar .env.local para configurações locais...</p>
            </details>
            <button class="chat-support-btn">
              <Icon name="message-circle" />
              Falar com suporte
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Step Actions -->
    <div class="step-actions">
      <button class="button button-outline" id="prev-step">
        <Icon name="arrow-left" />
        Anterior
      </button>
      <button class="button button-success" id="mark-complete">
        <Icon name="check-circle" />
        Marcar como Concluído
      </button>
      <button class="button button-primary" id="next-step">
        Próximo
        <Icon name="arrow-right" />
      </button>
    </div>
  </div>
</div>
```

---

## Checklist Progresso

```html
<div class="checklist-panel glass-card">
  <div class="checklist-header">
    <h3>Checklist de Instalação</h3>
    <button class="reset-btn" aria-label="Resetar progresso">
      <Icon name="refresh-cw" />
    </button>
  </div>

  <div class="checklist-items">
    <div class="checklist-item completed">
      <div class="item-checkbox">
        <input type="checkbox" checked disabled />
        <Icon name="check" />
      </div>
      <div class="item-content">
        <h4>Instalar Node.js</h4>
        <p>Faça download e instale a versão LTS do Node.js</p>
        <span class="completion-time">Concluído há 10 min</span>
      </div>
      <button class="item-action review-btn">
        <Icon name="eye" />
        Revisar
      </button>
    </div>

    <div class="checklist-item completed">
      <div class="item-checkbox">
        <input type="checkbox" checked disabled />
        <Icon name="check" />
      </div>
      <div class="item-content">
        <h4>Clonar Repositório</h4>
        <p>Faça clone do repositório do projeto</p>
        <span class="completion-time">Concluído há 8 min</span>
      </div>
      <button class="item-action review-btn">
        <Icon name="eye" />
        Revisar
      </button>
    </div>

    <div class="checklist-item completed">
      <div class="item-checkbox">
        <input type="checkbox" checked disabled />
        <Icon name="check" />
      </div>
      <div class="item-content">
        <h4>Instalar Dependências</h4>
        <p>Execute npm install para instalar os pacotes</p>
        <span class="completion-time">Concluído há 5 min</span>
      </div>
      <button class="item-action review-btn">
        <Icon name="eye" />
        Revisar
      </button>
    </div>

    <div class="checklist-item active">
      <div class="item-checkbox">
        <input type="checkbox" />
      </div>
      <div class="item-content">
        <h4>Configurar Variáveis de Ambiente</h4>
        <p>Crie e configure o arquivo .env</p>
        <span class="current-badge">Em progresso</span>
      </div>
      <button class="item-action help-btn">
        <Icon name="help-circle" />
        Ajuda
      </button>
    </div>

    <div class="checklist-item">
      <div class="item-checkbox">
        <input type="checkbox" disabled />
      </div>
      <div class="item-content">
        <h4>Executar Aplicação</h4>
        <p>Inicie o servidor de desenvolvimento</p>
        <span class="locked-badge">Bloqueado</span>
      </div>
    </div>
  </div>

  <div class="checklist-footer">
    <div class="progress-summary">
      <span>Progresso:</span>
      <div class="progress-bar">
        <div class="progress-fill" style="width: 60%"></div>
      </div>
      <span>60%</span>
    </div>
    <button class="button button-primary" id="continue-btn">
      Continuar Instalação
    </button>
  </div>
</div>
```

---

## Completion Celebration

```html
<div class="completion-modal glass-modal">
  <div class="modal-content">
    <div class="celebration">
      <div class="confetti"></div>
      <div class="success-icon">
        <Icon name="trophy" size="extra-large" />
      </div>
    </div>

    <h2>Instalação Concluída!</h2>
    <p>Parabéns! Você completou todos os passos da instalação.</p>

    <div class="completion-stats glass-card">
      <div class="stat-item">
        <span class="stat-value">5</span>
        <span class="stat-label">Passos</span>
      </div>
      <div class="stat-item">
        <span class="stat-value">25min</span>
        <span class="stat-label">Tempo total</span>
      </div>
      <div class="stat-item">
        <span class="stat-value">100%</span>
        <span class="stat-label">Completo</span>
      </div>
    </div>

    <div class="next-steps glass-card">
      <h4>Próximos Passos</h4>
      <ul>
        <li>
          <Icon name="play-circle" />
          Iniciar o servidor: <code>npm run dev</code>
        </li>
        <li>
          <Icon name="book-open" />
          Explorar a documentação
        </li>
        <li>
          <Icon name="code" />
          Começar a desenvolver
        </li>
      </ul>
    </div>

    <div class="completion-actions">
      <button class="button button-outline" id="view-docs">
        <Icon name="book-open" />
        Ver Documentação
      </button>
      <button class="button button-primary" id="start-app">
        <Icon name="rocket" />
        Iniciar Aplicação
      </button>
    </div>
  </div>
</div>
```

---

## Próximos Arquivos

- [09-suporte-ia.md](./09-suporte-ia.md)
- [10-admin-dashboard.md](./10-admin-dashboard.md)
- [11-componentes-reutilizaveis.md](../componentes/README.md)
