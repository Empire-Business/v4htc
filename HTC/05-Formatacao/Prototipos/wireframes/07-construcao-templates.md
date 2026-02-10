# Wireframe: Área de Construção
## Área de Construção - Seleção de Templates

**Versão:** 1.0
**Data:** Fevereiro 2026
**Layout:** Grid de Templates com Preview

---

## Descrição Geral

Área de construção onde o usuário seleciona templates de projeto, gera arquivos markdown, vê preview em tempo real e faz download dos arquivos gerados.

---

## Layout Desktop

```
┌─────────────────────────────────────────────────────────────────────────┐
│ HEADER                                                  [← Voltar]      │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌───────────────────────────────────────────────────────────────────┐ │
│  │                       HERO SECTION                                 │ │
│  │  🏗️ Construa Seu Projeto                                         │ │
│  │  Escolha um template, configure e faça download dos arquivos       │ │
│  └───────────────────────────────────────────────────────────────────┘ │
│                                                                         │
│  FILTERS E BUSCA                                                        │
│  [Buscar templates...] [Framework▼] [Tipo▼] [Complexidade▼]           │
│                                                                         │
│  TEMPLATES GRID                                                         │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐            │
│  │  🚀 Landing    │  │  📱 Mobile     │  │  🛒 E-commerce │            │
│  │  Page         │  │  App          │  │               │            │
│  │                │  │                │  │               │            │
│  │  [Preview]     │  │  [Preview]     │  │  [Preview]     │            │
│  │  React + TS    │  │  React Native │  │  Next.js      │            │
│  │  ⭐ 4.9        │  │  ⭐ 4.8        │  │  ⭐ 4.7        │            │
│  │  [Use Template]│  │  [Use Template]│  │  [Use Template]│            │
│  └────────────────┘  └────────────────┘  └────────────────┘            │
│                                                                         │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐            │
│  │  🎨 Portfolio  │  │  📊 Dashboard  │  │  🔄 SaaS       │            │
│  │                │  │                │  │               │            │
│  │  [Preview]     │  │  [Preview]     │  │  [Preview]     │            │
│  │  Vue 3 + TS    │  │  Angular      │  │  React + Node  │            │
│  │  ⭐ 4.9        │  │  ⭐ 4.6        │  │  ⭐ 4.8        │            │
│  │  [Use Template]│  │  [Use Template]│  │  [Use Template]│            │
│  └────────────────┘  └────────────────┘  └────────────────┘            │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Template Card Component

```html
<div class="template-card glass-card">
  <div class="template-preview">
    <img src="/template-preview.jpg" alt="Template preview" />
    <div class="preview-overlay">
      <button class="preview-button" aria-label="Ver preview">
        <Icon name="eye" />
        Preview ao vivo
      </button>
    </div>
    <div class="template-badges">
      <span class="badge badge-popular">Popular</span>
      <span class="badge badge-new">Novo</span>
    </div>
  </div>

  <div class="template-body">
    <div class="template-header">
      <h3 class="template-title">Landing Page moderna</h3>
      <div class="template-rating">
        <Icon name="star" class="filled" />
        <span>4.9</span>
        <span class="rating-count">(128)</span>
      </div>
    </div>

    <p class="template-description">
      Landing page moderna com animações suaves, otimizada para conversão e SEO-friendly.
    </p>

    <div class="template-tech">
      <span class="tech-tag">React 18</span>
      <span class="tech-tag">TypeScript</span>
      <span class="tech-tag">Tailwind</span>
    </div>

    <div class="template-features">
      <span class="feature-item">
        <Icon name="check" />
        Responsivo
      </span>
      <span class="feature-item">
        <Icon name="check" />
        Dark Mode
      </span>
      <span class="feature-item">
        <Icon name="check" />
        Animações
      </span>
    </div>

    <div class="template-meta">
      <span class="meta-item">
        <Icon name="download" />
        2.4k downloads
      </span>
      <span class="meta-item">
        <Icon name="clock" />
        Atualizado há 2 dias
      </span>
    </div>

    <div class="template-actions">
      <button class="button button-outline" id="demo-btn">
        <Icon name="play" />
        Ver Demo
      </button>
      <button class="button button-primary" id="use-template">
        <Icon name="download" />
        Usar Template
      </button>
    </div>
  </div>
</div>
```

---

## Gerador de Markdown

```html
<div class="markdown-generator glass-panel">
  <div class="panel-header">
    <h3>
      <Icon name="file-code" />
      Gerador de Arquivos Markdown
    </h3>
    <button class="close-panel">
      <Icon name="x" />
    </button>
  </div>

  <div class="generator-content">
    <div class="form-section">
      <label>Nome do Projeto</label>
      <input type="text" class="glass-input" placeholder="Meu Projeto" />
    </div>

    <div class="form-section">
      <label>Descrição</label>
      <textarea class="glass-input" placeholder="Descrição do projeto..."></textarea>
    </div>

    <div class="form-section">
      <label>Tecnologias</label>
      <div class="tags-input">
        <input type="text" placeholder="Adicionar tecnologia..." />
        <div class="tags-list">
          <span class="tag">React <button class="remove-tag">×</button></span>
          <span class="tag">TypeScript <button class="remove-tag">×</button></span>
        </div>
      </div>
    </div>

    <div class="form-section">
      <label>Estrutura do Projeto</label>
      <div class="structure-builder">
        <div class="structure-item">
          <Icon name="folder" />
          <span>src</span>
        </div>
        <div class="structure-item nested">
          <Icon name="folder" />
          <span>components</span>
        </div>
        <div class="structure-item nested">
          <Icon name="file-code" />
          <span>App.tsx</span>
        </div>
        <button class="add-item-btn">
          <Icon name="plus" />
          Adicionar item
        </button>
      </div>
    </div>

    <div class="preview-section">
      <label>Preview do Markdown</label>
      <div class="markdown-preview glass-card">
        <pre><code># Meu Projeto

Descrição do projeto...

## Tecnologias

- React
- TypeScript

## Estrutura

\`\`\`
src/
├── components/
└── App.tsx
\`\`\`</code></pre>
      </div>
    </div>
  </div>

  <div class="generator-actions">
    <button class="button button-outline" id="copy-btn">
      <Icon name="copy" />
      Copiar Markdown
    </button>
    <button class="button button-primary" id="download-btn">
      <Icon name="download" />
      Download .md
    </button>
  </div>
</div>
```

---

## Preview em Tempo Real

```html
<div class="live-preview-container">
  <div class="preview-header">
    <h3>Preview ao Vivo</h3>
    <div class="preview-controls">
      <button class="device-toggle active" data-device="desktop">
        <Icon name="monitor" />
      </button>
      <button class="device-toggle" data-device="tablet">
        <Icon name="tablet" />
      </button>
      <button class="device-toggle" data-device="mobile">
        <Icon name="smartphone" />
      </button>
      <button class="url-toggle" id="open-new-tab">
        <Icon name="external-link" />
        Abrir em nova aba
      </button>
    </div>
  </div>

  <div class="preview-frame-wrapper">
    <div class="preview-frame desktop">
      <iframe
        src="/preview/landing-page"
        title="Preview ao vivo"
        class="preview-iframe"
      ></iframe>
    </div>
  </div>

  <div class="preview-code">
    <div class="code-header">
      <span>HTML/CSS/JS gerado</span>
      <button class="copy-code-btn">
        <Icon name="copy" />
        Copiar código
      </button>
    </div>
    <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html lang="pt-BR"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;Landing Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header class="hero"&gt;
    &lt;h1&gt;Bem-vindo&lt;/h1&gt;
  &lt;/header&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
  </div>
</div>
```

---

## Download de Arquivos

```html
<div class="download-modal glass-modal">
  <div class="modal-content">
    <div class="modal-header">
      <h2>Download dos Arquivos</h2>
      <button class="close-modal">
        <Icon name="x" />
      </button>
    </div>

    <div class="download-options">
      <div class="option-group">
        <h3>Formato do Download</h3>
        <div class="radio-group">
          <label class="radio-option">
            <input type="radio" name="format" value="zip" checked />
            <span>ZIP (todos os arquivos)</span>
          </label>
          <label class="radio-option">
            <input type="radio" name="format" value="individual" />
            <span>Arquivos individuais</span>
          </label>
        </div>
      </div>

      <div class="option-group">
        <h3>Arquivos Incluídos</h3>
        <div class="checkbox-group">
          <label class="checkbox-option">
            <input type="checkbox" checked />
            <span>index.html</span>
          </label>
          <label class="checkbox-option">
            <input type="checkbox" checked />
            <span>styles.css</span>
          </label>
          <label class="checkbox-option">
            <input type="checkbox" checked />
            <span>app.js</span>
          </label>
          <label class="checkbox-option">
            <input type="checkbox" />
            <span>README.md</span>
          </label>
          <label class="checkbox-option">
            <input type="checkbox" />
            <span>package.json</span>
          </label>
        </div>
      </div>

      <div class="option-group">
        <h3>Configurações Adicionais</h3>
        <div class="checkbox-group">
          <label class="checkbox-option">
            <input type="checkbox" checked />
            <span>Minificar CSS</span>
          </label>
          <label class="checkbox-option">
            <input type="checkbox" />
            <span>Minificar JS</span>
          </label>
          <label class="checkbox-option">
            <input type="checkbox" />
            <span>Incluir source maps</span>
          </label>
        </div>
      </div>
    </div>

    <div class="download-summary glass-card">
      <div class="summary-item">
        <span>Tamanho estimado:</span>
        <strong>2.4 MB</strong>
      </div>
      <div class="summary-item">
        <span>Arquivos:</span>
        <strong>12 arquivos</strong>
      </div>
    </div>

    <div class="download-actions">
      <button class="button button-outline" id="cancel-download">
        Cancelar
      </button>
      <button class="button button-primary" id="confirm-download">
        <Icon name="download" />
        Baixar Arquivos
      </button>
    </div>
  </div>
</div>
```

---

## Próximos Arquivos

- [08-tutorial-instalacao.md](./08-tutorial-instalacao.md)
- [09-suporte-ia.md](./09-suporte-ia.md)
- [10-admin-dashboard.md](./10-admin-dashboard.md)
