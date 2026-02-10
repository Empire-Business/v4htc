# Wireframe: IA de Suporte
## Suporte - Chat com IA

**Versão:** 1.0
**Data:** Fevereiro 2026
**Layout:** Chat Interface com Sidebar de Histórico

---

## Descrição Geral

Interface de chat com IA de suporte incluindo entrada de texto e voz, histórico de conversas, sugestões rápidas e contexto do usuário.

---

## Layout Desktop

```
┌─────────────────────────────────────────────────────────────────────────┐
│ HEADER                                                 [← Voltar]      │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌──────────────┬──────────────────────────────────────────────────┐   │
│  │              │                                                  │   │
│  │  HISTÓRICO   │              CHAT AREA                           │   │
│  │              │                                                  │   │
│  │  Conversas   │  ┌────────────────────────────────────────────┐  │   │
│  │  ─────────   │  │                                             │  │   │
│  │              │  │  🤖 HTC Assistant                           │  │   │
│  │  [Nova]      │  │  Online • Responde em segundos              │  │   │
│  │              │  └────────────────────────────────────────────┘  │   │
│  │  Ontem       │                                                  │   │
│  │  ─────────── │  ┌────────────────────────────────────────────┐  │   │
│  │  📝 React    │  │                                             │  │   │
│  │  Hooks...    │  │  👤 Usuário                                 │  │   │
│  │              │  │                                             │  │   │
│  │  Segunda     │  │  Como faço para usar o useEffect           │  │   │
│  │  ─────────── │  │  com arrays de dependências?               │  │   │
│  │  🔧 Bug...   │  │                                             │  │   │
│  │              │  │  14:32                                       │  │   │
│  │  ─────────── │  └────────────────────────────────────────────┘  │   │
│  │              │                                                  │   │
│  │              │  ┌────────────────────────────────────────────┐  │   │
│  │              │  │                                             │  │   │
│  │              │  │  🤖 HTC Assistant                           │  │   │
│  │              │  │                                             │  │   │
│  │              │  │  Para usar o useEffect com arrays de       │  │   │
│  │              │  │  dependências:                              │  │   │
│  │              │  │                                             │  │   │
│  │              │  │  ```javascript                              │  │   │
│  │              │  │  useEffect(() => {                          │  │   │
│  │              │  │    // effect logic                          │  │   │
│  │              │  │  }, [dep1, dep2]); // array de deps         │  │   │
│  │              │  │  ```                                        │  │   │
│  │              │  │                                             │  │   │
│  │              │  │  Isso ajuda? 😊                              │  │   │
│  │              │  │                                             │  │   │
│  │              │  │  14:32                                       │  │   │
│  │              │  └────────────────────────────────────────────┘  │   │
│  │              │                                                  │   │
│  │              │  ┌────────────────────────────────────────────┐  │   │
│  │              │  │  👤 Usuário (digitando...)                  │  │   │
│  │              │  └────────────────────────────────────────────┘  │   │
│  │              │                                                  │   │
│  │              │  ┌────────────────────────────────────────────┐  │   │
│  │              │  │  [🎤]  Digite sua mensagem...    [📎] [➤]  │  │   │
│  │              │  └────────────────────────────────────────────┘  │   │
│  │              │                                                  │   │
│  │              │  Sugestões: [useEffect] [useState] [Hooks]      │   │
│  └──────────────┴──────────────────────────────────────────────────┘   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Chat Interface

```html
<div class="chat-container">
  <!-- Chat Header -->
  <div class="chat-header glass-header">
    <div class="assistant-info">
      <div class="assistant-avatar">
        <img src="/ai-avatar.png" alt="HTC Assistant" />
        <span class="online-indicator"></span>
      </div>
      <div class="assistant-details">
        <h3>HTC Assistant</h3>
        <div class="assistant-status">
          <span class="status-dot online"></span>
          <span>Online</span>
          <span class="response-time">Responde em segundos</span>
        </div>
      </div>
    </div>
    <div class="header-actions">
      <button class="action-btn" aria-label="Limpar chat" title="Limpar conversa">
        <Icon name="trash-2" />
      </button>
      <button class="action-btn" aria-label="Exportar" title="Exportar conversa">
        <Icon name="download" />
      </button>
      <button class="action-btn" aria-label="Configurações" title="Configurações">
        <Icon name="settings" />
      </button>
    </div>
  </div>

  <!-- Messages Area -->
  <div class="messages-area">
    <!-- Welcome Message -->
    <div class="message system">
      <div class="message-content glass-card">
        <Icon name="info" />
        <div>
          <strong>Início da conversa</strong>
          <p>Terça-feira, 9 de Fevereiro de 2026</p>
        </div>
      </div>
    </div>

    <!-- Assistant Welcome -->
    <div class="message assistant">
      <div class="message-avatar">
        <img src="/ai-avatar.png" alt="HTC Assistant" />
      </div>
      <div class="message-content">
        <div class="message-bubble glass-bubble">
          <p>Olá! 👋 Eu sou o HTC Assistant, sua IA de suporte.</p>
          <p>Posso ajudar você com:</p>
          <ul>
            <li>Dúvidas sobre cursos e conteúdos</li>
            <li>Problemas técnicos</li>
            <li>Orientação sobre instalação</li>
            <li>Conceitos de programação</li>
          </ul>
          <p>Como posso ajudar hoje?</p>
        </div>
        <div class="message-time">14:30</div>
      </div>
    </div>

    <!-- User Message -->
    <div class="message user">
      <div class="message-content">
        <div class="message-bubble">
          <p>Como faço para usar o useEffect com arrays de dependências?</p>
        </div>
        <div class="message-time">14:32</div>
        <div class="message-actions">
          <button class="action-btn" aria-label="Copiar">
            <Icon name="copy" />
          </button>
          <button class="action-btn" aria-label="Editar">
            <Icon name="edit-2" />
          </button>
        </div>
      </div>
    </div>

    <!-- Assistant Response with Code -->
    <div class="message assistant">
      <div class="message-avatar">
        <img src="/ai-avatar.png" alt="HTC Assistant" />
      </div>
      <div class="message-content">
        <div class="message-bubble glass-bubble">
          <p>Para usar o <code>useEffect</code> com arrays de dependências:</p>

          <div class="code-block">
            <div class="code-header">
              <span>JavaScript</span>
              <button class="copy-btn" aria-label="Copiar código">
                <Icon name="copy" />
                Copiar
              </button>
            </div>
            <pre><code>useEffect(() => {
  // seu efeito aqui
  console.log('Effect executado');

  return () => {
    // cleanup function
    console.log('Cleanup executado');
  };
}, [dep1, dep2]); // array de dependências</code></pre>
          </div>

          <p><strong>Pontos importantes:</strong></p>
          <ul>
            <li>O efeito roda quando qualquer dependência muda</li>
            <li>Array vazio <code>[]</code> = roda apenas uma vez (mount)</li>
            <li>Sem array = roda em toda renderização</li>
          </ul>

          <p>Isso ajuda? 😊</p>
        </div>

        <!-- Quick Actions -->
        <div class="message-actions">
          <button class="action-btn like" aria-label="Gostei">
            <Icon name="thumbs-up" />
            <span>Útil</span>
          </button>
          <button class="action-btn dislike" aria-label="Não gostei">
            <Icon name="thumbs-down" />
            <span>Não útil</span>
          </button>
          <button class="action-btn copy" aria-label="Copiar resposta">
            <Icon name="copy" />
            <span>Copiar</span>
          </button>
        </div>

        <div class="message-time">14:32</div>
      </div>
    </div>

    <!-- Typing Indicator -->
    <div class="message assistant typing">
      <div class="message-avatar">
        <img src="/ai-avatar.png" alt="HTC Assistant" />
      </div>
      <div class="message-content">
        <div class="typing-indicator glass-bubble">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </div>
    </div>
  </div>

  <!-- Input Area -->
  <div class="chat-input-area">
    <!-- Quick Suggestions -->
    <div class="quick-suggestions">
      <button class="suggestion-chip">
        <Icon name="lightbulb" />
        Como usar useEffect
      </button>
      <button class="suggestion-chip">
        <Icon name="lightbulb" />
        Diferença useState e useRef
      </button>
      <button class="suggestion-chip">
        <Icon name="lightbulb" />
        Otimizar performance
      </button>
    </div>

    <!-- Input Wrapper -->
    <div class="input-wrapper glass-card">
      <button class="voice-input-btn" aria-label="Entrada de voz">
        <Icon name="mic" />
      </button>

      <div class="text-input-wrapper">
        <textarea
          class="chat-input"
          placeholder="Digite sua mensagem..."
          rows="1"
        ></textarea>
        <div class="input-actions">
          <button class="action-btn" aria-label="Anexar arquivo">
            <Icon name="paperclip" />
          </button>
          <button class="action-btn" aria-label="Emoji">
            <Icon name="smile" />
          </button>
        </div>
      </div>

      <button class="send-btn" aria-label="Enviar mensagem">
        <Icon name="send" />
      </button>
    </div>

    <div class="input-footer">
      <span class="footer-text">
        <Icon name="info" />
        HTC Assistant pode cometer erros. Verifique informações importantes.
      </span>
    </div>
  </div>
</div>
```

---

## Sidebar de Histórico

```html
<aside class="chat-sidebar glass-panel">
  <div class="sidebar-header">
    <h3>Histórico</h3>
    <button class="new-chat-btn" aria-label="Nova conversa">
      <Icon name="plus" />
      Nova Conversa
    </button>
  </div>

  <div class="search-section">
    <div class="search-wrapper">
      <Icon name="search" class="search-icon" />
      <input
        type="search"
        placeholder="Buscar conversas..."
        class="search-input"
      />
    </div>
  </div>

  <div class="conversations-list">
    <!-- Today -->
    <div class="conversation-group">
      <div class="group-header">Hoje</div>
      <button class="conversation-item active">
        <div class="conversation-icon">
          <Icon name="message-square" />
        </div>
        <div class="conversation-info">
          <span class="conversation-title">React Hooks</span>
          <span class="conversation-preview">useEffect com dependências</span>
        </div>
        <span class="conversation-time">14:32</span>
      </button>
    </div>

    <!-- Yesterday -->
    <div class="conversation-group">
      <div class="group-header">Ontem</div>
      <button class="conversation-item">
        <div class="conversation-icon">
          <Icon name="code" />
        </div>
        <div class="conversation-info">
          <span class="conversation-title">Bug no TypeScript</span>
          <span class="conversation-preview">Erro de compilação</span>
        </div>
        <span class="conversation-time">18:45</span>
      </button>
    </div>

    <!-- Last Week -->
    <div class="conversation-group">
      <div class="group-header">Semana Passada</div>
      <button class="conversation-item">
        <div class="conversation-icon">
          <Icon name="help-circle" />
        </div>
        <div class="conversation-info">
          <span class="conversation-title">Instalação</span>
          <span class="conversation-preview">Configurar ambiente</span>
        </div>
        <span class="conversation-time">Seg</span>
      </button>
      <button class="conversation-item">
        <div class="conversation-icon">
          <Icon name="book" />
        </div>
        <div class="conversation-info">
          <span class="conversation-title">Conceitos Node.js</span>
          <span class="conversation-preview">Streams e Buffers</span>
        </div>
        <span class="conversation-time">Dom</span>
      </button>
    </div>
  </div>

  <!-- User Context -->
  <div class="user-context glass-card">
    <div class="context-header">
      <h4>Seu Contexto</h4>
      <button class="edit-context" aria-label="Editar contexto">
        <Icon name="edit-2" />
      </button>
    </div>
    <div class="context-info">
      <div class="context-item">
        <Icon name="code" />
        <span>Nível: Intermediário</span>
      </div>
      <div class="context-item">
        <Icon name="book-open" />
        <span>Cursos: 12 ativos</span>
      </div>
      <div class="context-item">
        <Icon name="target" />
        <span>Foco: React/Next.js</span>
      </div>
    </div>
  </div>
</aside>
```

---

## Voice Input Interface

```html
<div class="voice-input-overlay" id="voice-overlay">
  <div class="voice-modal glass-modal">
    <div class="voice-content">
      <h3>Ouvindo...</h3>
      <p>Fale sua pergunta ou comando</p>

      <div class="voice-visualizer">
        <div class="wave-animation">
          <span class="wave"></span>
          <span class="wave"></span>
          <span class="wave"></span>
          <span class="wave"></span>
          <span class="wave"></span>
        </div>
      </div>

      <div class="voice-transcript glass-card">
        <p id="transcript-text">Como faço para...</p>
      </div>

      <div class="voice-actions">
        <button class="button button-outline" id="cancel-voice">
          <Icon name="x" />
          Cancelar
        </button>
        <button class="button button-danger" id="stop-voice">
          <Icon name="mic-off" />
          Parar
        </button>
      </div>

      <div class="voice-tips">
        <p>Dicas: Fale claro e perto do microfone</p>
      </div>
    </div>
  </div>
</div>
```

---

## Mobile Layout

```
┌──────────────────────────────────────────────┐
│ HEADER                                       │
│ [☰] HTC Assistant                    [⋮]     │
├──────────────────────────────────────────────┤
│                                              │
│ MESSAGES (Full Width)                        │
│ ┌────────────────────────────────────────┐  │
│ │ 🤖 Olá! Como posso ajudar?             │  │
│ └────────────────────────────────────────┘  │
│ ┌────────────────────────────────────────┐  │
│ │ 👤 Como usar useEffect?                │  │
│ └────────────────────────────────────────┘  │
│ ┌────────────────────────────────────────┐  │
│ │ 🤖 [Code example]                      │  │
│ └────────────────────────────────────────┘  │
│                                              │
│ INPUT AREA                                  │
│ ┌────────────────────────────────────────┐  │
│ │ [🎤] Digite sua mensagem...      [➤]  │  │
│ └────────────────────────────────────────┘  │
│ Sugestões: [useEffect] [useState]          │
│                                              │
└──────────────────────────────────────────────┘
```

---

## Próximos Arquivos

- [10-admin-dashboard.md](./10-admin-dashboard.md)
- [11-componentes-reutilizaveis.md](../componentes/README.md)
- [../fluxos-usuario/README.md](../fluxos-usuario/README.md)
