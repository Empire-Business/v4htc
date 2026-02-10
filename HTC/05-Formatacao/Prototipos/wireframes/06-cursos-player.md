# Wireframe: Player de Vídeo
## Área de Cursos - Player de Curso

**Versão:** 1.0
**Data:** Fevereiro 2026
**Layout:** Video Player + Sidebar de Conteúdo

---

## Descrição Geral

Player de vídeo com controles customizados, lista de aulas, materiais complementares, anotações e progresso. Layout imersivo focado na experiência de aprendizado.

---

## Layout Desktop

```
┌─────────────────────────────────────────────────────────────────────────┐
│ HEADER                                   [← Voltar aos Cursos]          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│ ┌────────────────────────────────────────────────────────┐              │
│ │                                                        │              │
│ │                   VIDEO PLAYER                         │              │
│ │                   [▶ ||] ━━━━━●━━━━━ 12:34 / 45:20     │              │
│ │                                                        │              │
│ └────────────────────────────────────────────────────────┘              │
│                                                                         │
│ ┌──────────────────────────────────┬────────────────────────────────┐  │
│ │                                  │                                │  │
│ │  Informações da Aula             │   CONTEÚDO DO CURSO            │  │
│ │  ─────────────────────           │   ─────────────────────        │  │
│ │                                  │                                │  │
│ │  Aula 12: useEffect Avançado     │   Módulo 1: Introdução         │  │
│ │                                  │     ✓ 1. Bem-vindo             │  │
│ │  Nesta aula você vai aprender:   │     ✓ 2. Configuração          │  │
│ │  • Regras de dependência         │     ✓ 3. Primeiro componente   │  │
│ │  • Cleanup functions             │                                │  │
│ │  • Otimizações de performance    │   Módulo 2: Hooks Básicos      │  │
│ │                                  │     ✓ 4. useState              │  │
│ │  [📝 Anotações] [💬 Dúvidas]      │     ✓ 5. useEffect             │  │
│ │                                  │     → 6. useMemo (atual)       │  │
│ │  MATERIAIS COMPLEMENTARES        │     ○ 7. useCallback           │  │
│ │  ─────────────────────           │     ○ 8. useRef                │  │
│ │  📄 Slides da aula               │                                │  │
│ │  📁 Código de exemplo            │   Módulo 3: Hooks Avançados    │  │
│ │  🔗 Links úteis                  │     ○ 9. useContext            │  │
│ │                                  │     ○ 10. useReducer           │  │
│ │  AULA ANTERIOR    PRÓXIMA AULA   │     ○ 11. Custom Hooks         │  │
│ │  ← useState        useMemo →     │                                │  │
│ └──────────────────────────────────┴────────────────────────────────┘  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Video Player Component

```html
<div class="video-player-container">
  <div class="video-wrapper">
    <video
      id="course-video"
      class="video-element"
      poster="/video-poster.jpg"
      controlsList="nodownload"
    >
      <source src="/course-video.mp4" type="video/mp4" />
      <track
        kind="captions"
        src="/captions.vtt"
        srclang="pt"
        label="Português"
      />
    </video>

    <!-- Custom Controls Overlay -->
    <div class="video-controls-overlay">
      <!-- Center Play Button (when paused) -->
      <button class="center-play-button" aria-label="Reproduzir">
        <Icon name="play" size="extra-large" />
      </button>

      <!-- Bottom Controls Bar -->
      <div class="controls-bar glass-bar">
        <div class="controls-left">
          <button class="control-button" aria-label="Reproduzir/Pausar">
            <Icon name="play" />
          </button>
          <button class="control-button" aria-label="Retroceder 10s">
            <Icon name="rotate-ccw" />
            <span>10</span>
          </button>
          <button class="control-button" aria-label="Avançar 10s">
            <Icon name="rotate-cw" />
            <span>10</span>
          </button>
          <div class="volume-control">
            <button class="control-button" aria-label="Volume">
              <Icon name="volume-2" />
            </button>
            <input
              type="range"
              class="volume-slider"
              min="0"
              max="100"
              value="80"
            />
          </div>
          <div class="time-display">
            <span class="current-time">12:34</span>
            <span class="time-separator">/</span>
            <span class="total-time">45:20</span>
          </div>
        </div>

        <div class="controls-center">
          <div class="progress-bar-container">
            <div class="progress-bar">
              <div class="progress-buffered" style="width: 45%"></div>
              <div class="progress-played" style="width: 28%"></div>
              <input
                type="range"
                class="progress-input"
                min="0"
                max="100"
                value="28"
              />
            </div>
            <!-- Chapter Markers -->
            <div class="chapter-markers">
              <button
                class="chapter-marker"
                style="left: 0%"
                title="Introdução"
              ></button>
              <button
                class="chapter-marker"
                style="left: 25%"
                title="Conceitos"
              ></button>
              <button
                class="chapter-marker"
                style="left: 60%"
                title="Exemplos"
              ></button>
            </div>
          </div>
        </div>

        <div class="controls-right">
          <button class="control-button" aria-label="Legendas">
            <Icon name="subtitle" />
          </button>
          <button class="control-button" aria-label="Velocidade">
            <span>1x</span>
          </button>
          <button class="control-button" aria-label="Picture-in-Picture">
            <Icon name="picture-in-picture" />
          </button>
          <button class="control-button" aria-label="Tela cheia">
            <Icon name="maximize" />
          </button>
        </div>
      </div>
    </div>

    <!-- Keyboard Shortcuts Hint -->
    <div class="shortcuts-hint glass-hint">
      <span>Space: Play/Pause</span>
      <span>←/→: ±10s</span>
      <span>↑/↓: Volume</span>
      <span>F: Fullscreen</span>
    </div>
  </div>
</div>
```

---

## Lesson Info Panel

```html
<div class="lesson-info">
  <div class="lesson-header">
    <div class="lesson-breadcrumb">
      <a href="/cursos">Cursos</a>
      <Icon name="chevron-right" size="small" />
      <a href="/cursos/react">React Avançado</a>
      <Icon name="chevron-right" size="small" />
      <span>Módulo 2</span>
    </div>
    <h1 class="lesson-title">
      Aula 12: useEffect Avançado
    </h1>
    <div class="lesson-meta">
      <span class="meta-item">
        <Icon name="clock" />
        45 min
      </span>
      <span class="meta-item">
        <Icon name="eye" />
        2.4k visualizações
      </span>
      <span class="meta-item">
        <Icon name="calendar" />
        Atualizado há 2 dias
      </span>
    </div>
  </div>

  <div class="learning-objectives glass-card">
    <h3>
      <Icon name="target" />
      Nesta aula você vai aprender
    </h3>
    <ul>
      <li>Regras de dependência do useEffect</li>
      <li>Cleanup functions para evitar memory leaks</li>
      <li>Otimizações de performance</li>
      <li>Padrões avançados de efeitos</li>
    </ul>
  </div>

  <div class="lesson-actions">
    <button class="button button-outline" id="notes-button">
      <Icon name="file-text" />
      Anotações
      <span class="badge">3</span>
    </button>
    <button class="button button-outline" id="questions-button">
      <Icon name="message-circle" />
      Dúvidas
      <span class="badge">12</span>
    </button>
    <button class="button button-outline" id="download-button">
      <Icon name="download" />
      Materiais
    </button>
  </div>

  <div class="materials-section">
    <h3>Materiais Complementares</h3>
    <div class="materials-list">
      <a href="/slides.pdf" class="material-item glass-card">
        <Icon name="file-text" />
        <div class="material-info">
          <span class="material-name">Slides da aula</span>
          <span class="material-size">2.4 MB</span>
        </div>
        <Icon name="download" />
      </a>
      <a href="/code.zip" class="material-item glass-card">
        <Icon name="code" />
        <div class="material-info">
          <span class="material-name">Código de exemplo</span>
          <span class="material-size">156 KB</span>
        </div>
        <Icon name="download" />
      </a>
      <a href="/links.md" class="material-item glass-card">
        <Icon name="link" />
        <div class="material-info">
          <span class="material-name">Links úteis</span>
          <span class="material-size">12 recursos</span>
        </div>
        <Icon name="external-link" />
      </a>
    </div>
  </div>

  <div class="lesson-navigation">
    <button class="button button-outline nav-prev">
      <Icon name="arrow-left" />
      Anterior
      <span class="lesson-name">useState</span>
    </button>
    <button class="button button-primary nav-next">
      Próxima
      <span class="lesson-name">useMemo</span>
      <Icon name="arrow-right" />
    </button>
  </div>
</div>
```

---

## Course Content Sidebar

```html
<aside class="course-sidebar">
  <div class="sidebar-header">
    <h2>Conteúdo do Curso</h2>
    <button class="collapse-button" aria-label="Recolher sidebar">
      <Icon name="chevron-right" />
    </button>
  </div>

  <div class="course-progress">
    <div class="progress-header">
      <span>Seu progresso</span>
      <span class="progress-percentage">45%</span>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" style="width: 45%"></div>
    </div>
    <span class="progress-text">24 de 52 aulas concluídas</span>
  </div>

  <div class="modules-list">
    <!-- Module 1 (Completed) -->
    <div class="module-item completed">
      <button class="module-header" aria-expanded="true">
        <div class="module-icon completed">
          <Icon name="check" />
        </div>
        <div class="module-info">
          <span class="module-number">Módulo 1</span>
          <span class="module-title">Introdução ao React</span>
        </div>
        <Icon name="chevron-down" class="module-chevron" />
      </button>
      <div class="module-lessons">
        <a href="/lesson/1" class="lesson-item completed">
          <Icon name="check-circle" />
          <span>1. Bem-vindo ao curso</span>
          <span class="lesson-duration">5:20</span>
        </a>
        <a href="/lesson/2" class="lesson-item completed">
          <Icon name="check-circle" />
          <span>2. Configuração do ambiente</span>
          <span class="lesson-duration">12:45</span>
        </a>
        <!-- More lessons -->
      </div>
    </div>

    <!-- Module 2 (In Progress) -->
    <div class="module-item active">
      <button class="module-header" aria-expanded="true">
        <div class="module-icon active">
          <span>2</span>
        </div>
        <div class="module-info">
          <span class="module-number">Módulo 2</span>
          <span class="module-title">Hooks Básicos</span>
        </div>
        <Icon name="chevron-down" class="module-chevron" />
      </button>
      <div class="module-lessons">
        <a href="/lesson/4" class="lesson-item completed">
          <Icon name="check-circle" />
          <span>4. useState</span>
          <span class="lesson-duration">18:30</span>
        </a>
        <a href="/lesson/5" class="lesson-item completed">
          <Icon name="check-circle" />
          <span>5. useEffect</span>
          <span class="lesson-duration">22:15</span>
        </a>
        <div class="lesson-item current">
          <Icon name="play-circle" />
          <span>6. useMemo (atual)</span>
          <span class="lesson-duration">25:00</span>
          <span class="current-badge">Assistindo</span>
        </div>
        <a href="/lesson/7" class="lesson-item">
          <Icon name="circle" />
          <span>7. useCallback</span>
          <span class="lesson-duration">20:45</span>
        </a>
      </div>
    </div>

    <!-- Module 3 (Locked) -->
    <div class="module-item locked">
      <button class="module-header" aria-expanded="false">
        <div class="module-icon locked">
          <Icon name="lock" />
        </div>
        <div class="module-info">
          <span class="module-number">Módulo 3</span>
          <span class="module-title">Hooks Avançados</span>
        </div>
        <Icon name="chevron-right" class="module-chevron" />
      </button>
    </div>
  </div>
</aside>
```

---

## Notes Panel (Slide-out)

```html
<div class="notes-panel glass-panel" id="notes-panel">
  <div class="panel-header">
    <h3>
      <Icon name="file-text" />
      Minhas Anotações
    </h3>
    <button class="close-panel" aria-label="Fechar">
      <Icon name="x" />
    </button>
  </div>

  <div class="notes-editor">
    <textarea
      class="notes-textarea"
      placeholder="Digite suas anotações aqui... (Markdown suportado)"
    ></textarea>
    <div class="notes-toolbar">
      <button class="toolbar-btn" title="Negrito">
        <Icon name="bold" />
      </button>
      <button class="toolbar-btn" title="Itálico">
        <Icon name="italic" />
      </button>
      <button class="toolbar-btn" title="Lista">
        <Icon name="list" />
      </button>
      <button class="toolbar-btn" title="Código">
        <Icon name="code" />
      </button>
      <div class="timestamp-btn" title="Inserir timestamp">
        <Icon name="clock" />
        12:34
      </div>
    </div>
  </div>

  <div class="notes-timeline">
    <h4>Anotações salvas</h4>
    <div class="timeline-item">
      <span class="timestamp">05:20</span>
      <p>useEffect recebe dois parâmetros: função de efeito e array de dependências</p>
    </div>
    <div class="timeline-item">
      <span class="timestamp">12:45</span>
      <p>Cleanup function é retornada no useEffect para limpar efeitos anteriores</p>
    </div>
    <div class="timeline-item">
      <span class="timestamp">18:30</span>
      <p>Array de dependências vazio = executa apenas uma vez (mount)</p>
    </div>
  </div>

  <button class="button button-primary save-notes">
    <Icon name="save" />
    Salvar Anotações
  </button>
</div>
```

---

## Questions/Comments Panel

```html
<div class="comments-panel glass-panel">
  <div class="panel-header">
    <h3>
      <Icon name="message-circle" />
      Dúvidas e Discussões
    </h3>
    <span class="comments-count">12 comentários</span>
  </div>

  <div class="new-comment">
    <div class="user-avatar">
      <img src="/user-avatar.jpg" alt="Seu avatar" />
    </div>
    <div class="comment-input-wrapper">
      <textarea
        class="comment-input"
        placeholder="Digite sua dúvida ou comentário..."
      ></textarea>
      <div class="comment-actions">
        <button class="button button-primary button-sm">
          Publicar
        </button>
      </div>
    </div>
  </div>

  <div class="comments-list">
    <!-- Comment with timestamp link -->
    <div class="comment-item">
      <img src="/avatar1.jpg" alt="Avatar" class="comment-avatar" />
      <div class="comment-content">
        <div class="comment-header">
          <span class="comment-author">Maria Santos</span>
          <span class="comment-date">Há 2 horas</span>
          <a href="#t=5:20" class="comment-timestamp">
            <Icon name="link" />
            05:20
          </a>
        </div>
        <p class="comment-text">
          Excelente explicação sobre as regras de dependência! Ficou muito claro.
        </p>
        <div class="comment-actions">
          <button class="comment-action like">
            <Icon name="thumbs-up" />
            <span>24</span>
          </button>
          <button class="comment-action reply">
            <Icon name="message-circle" />
            Responder
          </button>
        </div>
      </div>
    </div>

    <!-- Instructor reply -->
    <div class="comment-item instructor-reply">
      <img src="/instructor-avatar.jpg" alt="Avatar" class="comment-avatar" />
      <div class="comment-content">
        <div class="comment-header">
          <span class="comment-author instructor">João Silva</span>
          <span class="comment-badge instructor">Instrutor</span>
          <span class="comment-date">Há 1 hora</span>
        </div>
        <p class="comment-text">
          Obrigado, Maria! Fico feliz que tenha ajudado. Se tiver mais dúvidas, é só chamar!
        </p>
      </div>
    </div>
  </div>
</div>
```

---

## Speed Control Menu

```html
<div class="speed-menu glass-dropdown">
  <div class="speed-header">
    <span>Velocidade de reprodução</span>
  </div>
  <div class="speed-options">
    <button class="speed-option" data-speed="0.5">0.5x</button>
    <button class="speed-option" data-speed="0.75">0.75x</button>
    <button class="speed-option active" data-speed="1">Normal</button>
    <button class="speed-option" data-speed="1.25">1.25x</button>
    <button class="speed-option" data-speed="1.5">1.5x</button>
    <button class="speed-option" data-speed="1.75">1.75x</button>
    <button class="speed-option" data-speed="2">2x</button>
  </div>
</div>
```

---

## Completion Modal

```html
<div class="completion-modal glass-modal">
  <div class="modal-content">
    <div class="success-animation">
      <div class="confetti"></div>
      <div class="checkmark">
        <Icon name="check-circle" size="extra-large" />
      </div>
    </div>
    <h2>Aula Concluída!</h2>
    <p>Parabéns! Você completou "useEffect Avançado"</p>

    <div class="completion-stats glass-card">
      <div class="stat">
        <span class="value">45:20</span>
        <span class="label">Tempo assistido</span>
      </div>
      <div class="stat">
        <span class="value">100%</span>
        <span class="label">Completude</span>
      </div>
      <div class="stat">
        <span class="value">+50</span>
        <span class="label">XP ganho</span>
      </div>
    </div>

    <div class="completion-actions">
      <button class="button button-outline" id="next-lesson">
        Próxima Aula
        <Icon name="arrow-right" />
      </button>
      <button class="button button-primary" id="take-quiz">
        Fazer Quiz
        <Icon name="help-circle" />
      </button>
    </div>
  </div>
</div>
```

---

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| Space / K | Play/Pause |
| ← | Retroceder 10s |
| → | Avançar 10s |
| ↑ | Aumentar volume |
| ↓ | Diminuir volume |
| F | Tela cheia |
| M | Mutar/Desmutar |
| J | Retroceder 10s |
| L | Avançar 10s |
| N | Ativar/desativar anotações |
| C | Ativar/desativar legendas |
| < | Diminuir velocidade |
| > | Aumentar velocidade |

---

## Próximos Arquivos

- [07-construcao-templates.md](./07-construcao-templates.md)
- [08-tutorial-instalacao.md](./08-tutorial-instalacao.md)
- [09-suporte-ia.md](./09-suporte-ia.md)
