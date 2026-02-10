# Protótipos HTC
## Plataforma High Ticket Code - Protótipos e Design System

**Versão:** 1.0
**Data:** Fevereiro 2026
**Status:** Completo

---

## Visão Geral

Este diretório contém todos os protótipos detalhados da plataforma HTC, seguindo a identidade visual Liquid Glass/Glassmorphism definida anteriormente.

**Estrutura de Diretórios:**

```
Prototipos/
├── wireframes/           # Wireframes detalhados de cada tela
├── fluxos-usuario/       # Diagramas de fluxo de usuário
├── componentes/          # Biblioteca de componentes reutilizáveis
├── prototipo-figma/      # Protótipos visuais no Figma (futuro)
└── INDEX.md             # Este arquivo
```

---

## Wireframes Criados

### 1. Autenticação (3 telas)

#### [01-autenticacao-login.md](./wireframes/01-autenticacao-login.md)
- **Descrição:** Tela de login com email/senha e OAuth
- **Layout:** Centered Split Screen
- **Componentes:**
  - Split layout com branding visual
  - Elementos glassmorphism flutuantes
  - Formulário de login
  - Botões OAuth (Google, GitHub)
  - Validação em tempo real
  - Password strength indicator

#### [02-autenticacao-cadastro.md](./wireframes/02-autenticacao-cadastro.md)
- **Descrição:** Multi-step form de cadastro
- **Layout:** Glass Card com Progress Indicator
- **Componentes:**
  - Progress indicator (desktop/mobile)
  - Multi-step wizard (4 etapas)
  - Validação de senha em tempo real
  - Seleção de planos com cards comparativos
  - Resumo final antes de criar conta

#### [03-autenticacao-recuperar-senha.md](./wireframes/03-autenticacao-recuperar-senha.md)
- **Descrição:** Fluxo de recuperação de senha
- **Layout:** Centered Glass Card
- **Etapas:**
  1. Solicitação (email)
  2. Confirmação do código
  3. Nova senha
  4. Sucesso
- **Componentes:**
  - Input de código com 6 dígitos
  - Countdown timer
  - Password requirements
  - Animações de sucesso/erro

### 2. Dashboard (1 tela)

#### [04-dashboard-principal.md](./wireframes/04-dashboard-principal.md)
- **Descrição:** Dashboard principal do aluno
- **Layout:** Sidebar Navigation + Main Content
- **Componentes:**
  - Sidebar com navegação
  - Header com search e profile
  - Hero stats cards
  - Continue learning card
  - Recent courses grid
  - Subscription status card
  - Notification badges

### 3. Área de Cursos (2 telas)

#### [05-cursos-lista.md](./wireframes/05-cursos-lista.md)
- **Descrição:** Listagem de todos os cursos
- **Layout:** Sidebar Filters + Grid de Cursos
- **Componentes:**
  - Filters sidebar (categorias, nível, duração)
  - Search bar com keyboard shortcut
  - Course cards com preview
  - Sort options
  - Pagination
  - Empty states

#### [06-cursos-player.md](./wireframes/06-cursos-player.md)
- **Descrição:** Player de vídeo para cursos
- **Layout:** Video Player + Sidebar Conteúdo
- **Componentes:**
  - Video player customizado
  - Lista de aulas do módulo
  - Learning objectives
  - Materiais complementares
  - Panel de anotações
  - Comments/questions
  - Keyboard shortcuts
  - Completion modal

### 4. Área de Construção (1 tela)

#### [07-construcao-templates.md](./wireframes/07-construcao-templates.md)
- **Descrição:** Seleção de templates e gerador de arquivos
- **Layout:** Grid de Templates + Preview Panel
- **Componentes:**
  - Template cards com preview
  - Filtros por framework/tipo
  - Gerador de markdown
  - Preview em tempo real
  - Download de arquivos (ZIP)
  - Configurações de exportação

### 5. Tutorial de Instalação (1 tela)

#### [08-tutorial-instalacao.md](./wireframes/08-tutorial-instalacao.md)
- **Descrição:** Tutorial interativo passo a passo
- **Layout:** Step-by-Step Wizard
- **Componentes:**
  - Progress bar de conclusão
  - Video tutorials com capítulos
  - Instruções detalhadas com código
  - Checklist de progresso
  - FAQ e help section
  - Celebration modal ao completar

### 6. IA de Suporte (1 tela)

#### [09-suporte-ia.md](./wireframes/09-suporte-ia.md)
- **Descrição:** Interface de chat com IA
- **Layout:** Chat Interface + Sidebar Histórico
- **Componentes:**
  - Chat bubbles com markdown
  - Code blocks com syntax highlighting
  - Voice input com visualizador
  - Quick suggestions
  - Histórico de conversas
  - User context panel
  - Typing indicators

### 7. Painel Administrativo (1 tela)

#### [10-admin-dashboard.md](./wireframes/10-admin-dashboard.md)
- **Descrição:** Dashboard administrativo completo
- **Layout:** Admin Sidebar + Analytics
- **Componentes:**
  - Stats cards com trends
  - Analytics charts (receita, usuários)
  - Users management table
  - Content management cards
  - System settings panel
  - Real-time notifications
  - Export options

---

## Fluxos de Usuário

### [fluxo-onboarding.md](./fluxos-usuario/fluxo-onboarding.md)

Diagramas detalhados dos principais fluxos:

1. **Onboarding (Primeiro Acesso)**
   - Bem-vindas
   - Tour guiado
   - Seleção de interesses
   - Configuração de perfil
   - Celebração final

2. **Navegação Principal**
   - Dashboard
   - Cursos
   - Construir
   - Tutorial
   - Suporte

3. **Compra (Upgrade de Plano)**
   - Página de preços
   - Checkout
   - Pagamento
   - Confirmação

4. **Acesso ao Conteúdo**
   - Seleção de curso
   - Player de vídeo
   - Anotações e dúvidas
   - Conclusão e certificado

---

## Biblioteca de Componentes

### [README.md](./componentes/README.md)

Componentes reutilizáveis documentados:

1. **Botões**
   - Primary, Secondary, Outline, Ghost
   - Tamanhos: sm, md, lg, xl
   - Estados: loading, success, error, disabled

2. **Cards**
   - Course card
   - Progress card
   - Skill card
   - Stats card

3. **Formulários**
   - Inputs (text, email, password, phone)
   - Textareas
   - Selects
   - Checkboxes e Radios
   - Validation states

4. **Modais**
   - Confirm modal
   - Info modal
   - Form modal
   - Loading modal

5. **Navegação**
   - Header
   - Sidebar
   - Footer
   - Breadcrumb

---

## Especificações Técnicas

### Responsividade

**Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1279px
- Desktop: 1280px+

**Layouts:**
- Mobile: Stacked, full-width
- Tablet: Collapsed sidebar, 2-column grids
- Desktop: Full sidebar, 3-4 column grids

### Animações

**Durações:**
- Fast: 150ms (micro-interações)
- Base: 300ms (transições padrão)
- Slow: 500ms (mudanças de estado)

**Easing:**
- Default: cubic-bezier(0.4, 0, 0.2, 1)
- Smooth: cubic-bezier(0.4, 0, 0.2, 1)
- Sharp: cubic-bezier(0.4, 0, 0.6, 1)

### Performance

**Otimizações:**
- Lazy loading de imagens
- Code splitting por rota
- Skeleton screens durante carregamento
- Debounce em inputs e search
- Virtual scroll para listas longas

### Acessibilidade

**WCAG 2.1 AA:**
- Contraste mínimo 4.5:1
- Focus indicators visíveis
- ARIA labels em elementos interativos
- Keyboard navigation completa
- Screen reader support

---

## Design Tokens Utilizados

Todos os componentes utilizam os design tokens definidos em:

- **[design-tokens.md](../identidade-visual/design-tokens.md)**

### Tokens Principais

```css
/* Cores Primárias */
--color-primary: #2563EB;
--color-primary-hover: #1D4ED8;
--color-primary-light: #EFF6FF;

/* Glass Effect */
--glass-bg: rgba(255, 255, 255, 0.7);
--glass-border: rgba(255, 255, 255, 0.18);
--blur-glass: 20px;

/* Tipografia */
--font-sans: 'Inter', sans-serif;
--font-size-base: 1rem;
--font-size-lg: 1.125rem;

/* Border Radius */
--radius-btn: 12px;
--radius-card: 16px;
--radius-modal: 24px;

/* Sombras */
--shadow-glass-sm: 0 2px 8px rgba(0, 0, 0, 0.05);
--shadow-glass-md: 0 4px 16px rgba(0, 0, 0, 0.08);
--shadow-glass-lg: 0 8px 32px rgba(0, 0, 0, 0.12);
```

---

## Próximos Passos

### Implementação

1. **Setup do Projeto**
   - Configurar Next.js/React
   - Instalar Tailwind CSS
   - Configurar design tokens

2. **Componentes Base**
   - Implementar biblioteca de componentes
   - Criar Storybook/Docz
   - Documentar props e variants

3. **Páginas**
   - Implementar wireframes em ordem de prioridade
   - Começar por autenticação
   - Seguir para dashboard
   - Finalizar com áreas específicas

4. **Integrações**
   - Backend API
   - Serviços de terceiros
   - Analytics e tracking

### Testes

- **Unit Tests:** Componentes isolados
- **Integration Tests:** Fluxos de usuário
- **E2E Tests:** Casos críticos (login, compra)
- **Accessibility Tests:** WCAG compliance
- **Performance Tests:** Lighthouse, Web Vitals

---

## Referências

### Design System

- [Identidade Visual INDEX](../identidade-visual/INDEX.md)
- [Design Tokens](../identidade-visual/design-tokens.md)
- [Estilo Liquid Glass](../identidade-visual/estilo-liquid-glass.md)

### Documentação Técnica

- [Componentes README](./componentes/README.md)
- [Fluxos de Usuário](./fluxos-usuario/fluxo-onboarding.md)

### Externas

- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Headless UI](https://headlessui.com)

---

## Contato

**Design Lead:** HTC Team
**Data:** Fevereiro 2026
**Versão:** 1.0

---

**Status do Projeto:**

- [x] Autenticação (3 telas)
- [x] Dashboard (1 tela)
- [x] Cursos (2 telas)
- [x] Construção (1 tela)
- [x] Tutorial (1 tela)
- [x] Suporte IA (1 tela)
- [x] Admin (1 tela)
- [x] Fluxos de Usuário
- [x] Biblioteca de Componentes

**Total:** 10 wireframes + 4 fluxos + biblioteca completa
