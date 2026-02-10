# Marketing & Finalization Tasks - FASE 3 & 4

**FASE 3:** Marketing (Parallel)
**FASE 4:** Finalização (Serial)

---

# MARKETING TASKS (Parallel)

## Task 10: create-marketing-materials
**Agent:** russel-brunson-agent
**Dependencies:** [create-sales-funnel]
**Estimated:** 6-8 hours

### Objective
Criar todos os materiais de marketing restantes.

### Steps

#### 1. Criativos - Reels
- 20 roteiros de reels
- Hooks virais
- CTAs fortes
- Storytelling visual

#### 2. Criativos Estáticos
- Posts para feed (30)
- Artes para stories (50)
- Criativos para ads (10)

#### 3. Conteúdo Orgânico
- Posts para redes sociais (LinkedIn, Instagram)
- Artigos para blog (10)
- Conteúdo educativo

#### 4. Narrativa de Marca
- Storytelling da marca HTC
- Narrativa de venda
- Comunicação integrada

### Deliverables
- [ ] 20 roteiros de reels
- [ ] 30 posts para feed
- [ ] 50 artes de stories
- [ ] 10 criativos para ads
- [ ] 10 artigos de blog
- [ ] Narrativa de marca documentada
- [ ] Guidelines de tom de voz

### Organization
```
HTC/02-Marketing/
├── criativos/
│   ├── reels/
│   ├── estaticos/
│   └── ads/
├── conteudo-organico/
│   ├── social-media/
│   └── blog/
└── narrativa-marca.md
```

---

## Task 11: create-platform-prototypes
**Agent:** design-agent
**Dependencies:** [create-sales-funnel]
**Estimated:** 4-6 hours

### Objective
Criar protótipos completos da plataforma HTC.

### Steps

#### 1. Wireframes de Todas as Telas
- Login/Cadastro
- Dashboard principal
- Área de Cursos
- Área de Construção
- Tutorial de Instalação
- IA de Suporte
- Painel Administrativo

#### 2. Fluxos de Usuário
- Onboarding
- Navegação principal
- Fluxos de compra
- Fluxos de acesso

#### 3. Componentes Reutilizáveis
- Botões
- Cards
- Formulários
- Modais
- Navegação

#### 4. Interactive Prototype
- Criar no Figma
- Testar fluxos
- Documentar interações

### Deliverables
- [ ] Wireframes de todas as telas
- [ ] Fluxos de usuário documentados
- [ ] Biblioteca de componentes
- [ ] Protótipo interativo

### Organization
```
HTC/05-Formatacao/Prototipos/
├── wireframes/
├── fluxos-usuario/
├── componentes/
└── prototipo-figma/
```

---

## Task 12: create-sales-slides
**Agent:** slides-agent
**Dependencies:** [create-sales-funnel]
**Estimated:** 3-4 hours

### Objective
Criar slides de apresentação de vendas do HTC.

### Steps

#### 1. Estrutura dos Slides
1. Hook Slide
2. Problem Slide
3. Solution Slide
4. Product Reveal
5. Features & Benefits
6. Social Proof
7. Offer Stack
8. Guarantee
9. CTA
10. FAQ

#### 2. Criar Slides
- Design seguindo identidade visual
- Animações suaves
- Navegação intuitiva

#### 3. Notas do Apresentador
- Script para cada slide
- Timing
- Pistas visuais

### Deliverables
- [ ] Apresentação completa (slides)
- [ ] Notas do apresentador
- [ ] Versões exportáveis (PDF, PPT, HTML)

### Organization
```
HTC/03-Vendas/
└── apresentacao-vendas/
    ├── slides/
    ├── notas/
    └── exports/
```

---

# FINALIZATION TASKS (Serial)

## Task 13: compile-materials
**Agent:** hormozi-agent
**Dependencies:** []
**Estimated:** 2-3 hours

### Objective
Compilar e organizar TODOS os materiais criados.

### Steps

#### 1. Revisar Tudo
- Verificar que todos os deliveráveis estão completos
- Validar consistência entre documentos
- Checar que a identidade visual foi aplicada

#### 2. Organizar Estrutura Final
```
HTC/
├── 01-Entrega/
│   ├── produto-completo.md
│   ├── Cursos/
│   │   ├── metodo-high-ticket/
│   │   ├── instalacao-claude-code/
│   │   └── construindo-apps/
│   └── Claude-Skills/
│       ├── *.zip (10 skills)
│       ├── README-SKILLS.md
│       └── MAPA-USO-SKILLS.md
├── 02-Marketing/
│   ├── Funil/
│   ├── criativos/
│   ├── conteudo-organico/
│   └── narrativa-marca.md
├── 03-Vendas/
│   ├── fluxo-vendas.md
│   ├── scripts-de-vendas.md
│   └── apresentacao-vendas/
├── 04-Planos/
│   └── planos-anuais.md
└── 05-Formatacao/
    ├── identidade-visual/
    ├── prototipos/
    ├── funcionalidades.md
    ├── ux.md
    └── especificacoes-tecnicas.md
```

#### 3. Criar Índice Principal
- README.md geral
- Mapa de navegação
- Checklist final

### Deliverables
- [ ] Tudo organizado em pastas hierárquicas
- [ ] README.md principal
- [ ] Mapa de navegação
- [ ] Checklist final validado

---

## Task 14: execute-prd
**Agent:** prd-agent
**Dependencies:** [compile-materials]
**Estimated:** 4-6 hours

### Objective
Executar PRD completo seguindo PRD-GEN.md.

### Steps

#### 1. Ler PRD-GEN.md
- Entender a estrutura exigida
- Seguir rigorosamente

#### 2. Criar PRD Completo
- Document Overview
- Product Vision
- Functional Requirements
- Non-Functional Requirements
- Technical Specifications
- UX/UI Specifications
- Implementation Plan

#### 3. Documentar Conhecimento dos Agentes
Especificar que os agentes da plataforma sabem sobre:
- Método High Ticket
- Instalação Claude Code com GLM
- PRD-Primeiro + Vibecoding
- Supabase MCP
- Lovable

### Deliverables
- [ ] PRD completo seguindo PRD-GEN.md
- [ ] Documentação técnica final
- [ ] Especificação de conhecimento dos agentes

### Organization
```
HTC/06-PRD/
└── prd-completo.md
```

---

## Task 15: create-visualization-app
**Agent:** prd-agent
**Dependencies:** [execute-prd]
**Estimated:** 4-6 hours

### Objective
Criar aplicação Next.js para visualização de todo o planejamento.

### Steps

#### 1. Criar Estrutura do App
- Next.js + shadcn/ui
- Rotas para cada seção
- Sistema de navegação

#### 2. Implementar Funcionalidades
- Exibir todos os arquivos .md
- Busca em tempo real
- Menu lateral com estrutura
- Links únicos para cada arquivo
- Responsividade

#### 3. Preparar Deploy
- Configurar para Vercel
- Testar localmente
- Criar instruções de deploy

### Deliverables
- [ ] Código da aplicação
- [ ] Busca funcional
- [ ] Navegação intuitiva
- [ ] Instruções de deploy
- [ ] (Opcional) URL funcional

### Organization
```
HTC-App/
├── app/
├── components/
├── lib/
├── public/
└── README-DEPLOY.md
```

---

## Summary

**FASE 3 - Parallel:**
- Task 10: russel-brunson-agent → Marketing materials
- Task 11: design-agent → Platform prototypes
- Task 12: slides-agent → Sales slides

**FASE 4 - Serial:**
- Task 13: hormozi-agent → Compile all materials
- Task 14: prd-agent → Execute PRD
- Task 15: prd-agent → Create visualization app

---

## Final Checklist

Antes de considerar o projeto completo:

- [ ] Curso completo em .md ✓
- [ ] 10 Claude Skills .zip ✓
- [ ] Curso Instalação Claude Code ✓
- [ ] Curso Construção de Apps ✓
- [ ] Funil completo detalhado ✓
- [ ] Materiais de marketing ✓
- [ ] Scripts de vendas ✓
- [ ] 3 planos anuais ✓
- [ ] Identidade visual ✓
- [ ] Protótipos ✓
- [ ] Slides de vendas ✓
- [ ] PRD executado ✓
- [ ] App de visualização ✓
- [ ] TUDO organizado em HTC/ ✓
- [ ] Arquivos em .md ✓
- [ ] Conteúdo didático ✓

---

**PROJETO COMPLETO! 🚀**
