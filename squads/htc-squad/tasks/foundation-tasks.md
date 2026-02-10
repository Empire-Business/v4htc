# Foundation Tasks - FASE 1

**Execution:** Serial (uma após a outra)
**Agent:** hormozi-agent (principal) + design-agent (tarefa 7)

---

## Task 1: structure-product
**Agent:** hormozi-agent
**Dependencies:** []
**Estimated:** 2-3 hours

### Objective
Estruturar o produto HTC completo com todas as funcionalidades e especificações.

### Steps

1. **Definir a Plataforma**
   - Área de Cursos
   - Área de Construção
   - Tutorial de Instalação
   - IA de Suporte

2. **Especificar Funcionalidades**
   - Gestão de usuários
   - Gestão de conteúdo
   - Gerador de arquivos markdown
   - Chat inteligente
   - Painel administrativo
   - Integrações (Hotmart, Open Router, Supabase, etc.)

3. **Documentar Integrações**
   - Open Router (IA)
   - Hotmart (pagamento)
   - Supabase (banco de dados)
   - Vimeo/YouTube/Panda (vídeos)
   - Webhooks

4. **Criar Documento de Produto**
   - Salvar em `HTC/01-Entrega/produto-completo.md`

### Deliverables
- [ ] Produto estruturado em documento .md
- [ ] Funcionalidades listadas
- [ ] Integrações documentadas
- [ ] Fluxo de usuário definido

---

## Task 2: define-offer-plans
**Agent:** hormozi-agent
**Dependencies:** [structure-product]
**Estimated:** 1-2 hours

### Objective
Definir oferta irresistível e 3 planos anuais (a partir de R$ 10k).

### Steps

1. **Criar a Oferta (Grand Slam Offer)**
   - Dream Outcome claro
   - Eliminar risco (garantias)
   - Stack de bônus
   - Escassez
   - Flexibilidade de pagamento

2. **Definir 3 Planos Anuais**
   - Nomenclatura CONSISTENTE (ex: Essencial, Profissional, Enterprise)
   - Valores (a partir de R$ 10k)
   - Claude Skills incluídas em cada plano
   - Manuais e mapas
   - Diferenciais
   - Limitações

3. **Documentar**
   - Salvar em `HTC/04-Planos/planos-anuais.md`

### Deliverables
- [ ] Oferta documentada
- [ ] 3 planos anuais detalhados
- [ ] Nomenclatura consistente
- [ ] Claude Skills mapeadas por plano

---

## Task 3: create-complete-course
**Agent:** hormozi-agent
**Dependencies:** [define-offer-plans]
**Estimated:** 4-6 hours

### Objective
Criar CURSO COMPLETO do Método High Ticket em arquivos .md.

### Steps

1. **Ler Transcripts_md/**
   - Estudar todo o conteúdo
   - Identificar módulos e aulas

2. **Estruturar o Curso**
   - Dividir em módulos
   - Criar aula por aula em .md
   - Adicionar exercícios e exemplos

3. **Enriquecer com Frameworks Hormozi**
   - Grand Slam Offer
   - Value Equation
   - Pricing Strategy
   - Sales Scripts

4. **Organizar Arquivos**
   - Criar estrutura de pastas
   - Nomear arquivos de forma lógica
   - Adicionar índice principal

5. **Salvar**
   - `HTC/01-Entrega/Cursos/metodo-high-ticket/`

### Deliverables
- [ ] Curso completo em .md
- [ ] Organizado em módulos/aulas
- [ ] Baseado em Transcripts_md/
- [ ] Enriquecido com frameworks
- [ ] Índice principal

---

## Task 4: create-claude-skills
**Agent:** hormozi-agent
**Dependencies:** [create-complete-course]
**Estimated:** 3-4 hours

### Objective
Criar 10 Claude Skills prontas em arquivos .zip.

### ⚠️ ANTES - Pesquisa Obrigatória
Pesquisar sobre:
- Como criar Claude Skills (documentação oficial)
- Estrutura de arquivos .zip
- Configuração de skills
- Instalação e uso

### Steps

1. **Criar Documentação de Como Criar Skills**
   - Salvar como referência
   - Seguir rigorosamente

2. **Criar Cada Skill (.zip)**

   **1. htc-ofertas-creator.zip**
   - Prompt configurado
   - Instruções de uso
   - Exemplos
   - Pastas auxiliares
   - MANUAL detalhado

   **2. htc-funnel-builder.zip**
   - (mesma estrutura)

   **3. htc-copywriter.zip**
   - (mesma estrutura)

   **4. htc-sales-script.zip**
   - (mesma estrutura)

   **5. htc-marketing-strategy.zip**
   - (mesma estrutura)

   **6. htc-lead-nurturing.zip**
   - (mesma estrutura)

   **7. htc-objection-handler.zip**
   - (mesma estrutura)

   **8. htc-pricing-strategy.zip**
   - (mesma estrutura)

   **9. htc-content-generator.zip**
   - (mesma estrutura)

   **10. htc-analytics-coach.zip**
   - (mesma estrutura)

3. **Criar Arquivos de Suporte**
   - `README-SKILLS.md` - lista das skills
   - `MAPA-USO-SKILLS.md` - guia de navegação

4. **Salvar**
   - `HTC/01-Entrega/Claude-Skills/`

### Deliverables
- [ ] 10 arquivos .zip prontos
- [ ] Cada skill com manual detalhado
- [ ] README-SKILLS.md
- [ ] MAPA-USO-SKILLS.md
- [ ] Documentação de criação de skills

---

## Task 5: create-installation-course
**Agent:** hormozi-agent
**Dependencies:** [create-claude-skills]
**Estimated:** 2-3 hours + pesquisa

### Objective
Criar CURSO COMPLETO DE INSTALAÇÃO Claude Code com GLM Coding Plan Z-AI.

### ⚠️ Pesquisa Obrigatória
Pesquisar sobre:
- GLM Coding Plan Z-AI (documentação oficial)
- Modelos GLM-4.7, GLM-4.6, GLM-4.5, GLM-4.5-Air
- Instalação e configuração

### Steps

1. **Pesquisar GLM Coding Plan**
   - Documentação Z-AI
   - Planos disponíveis (Lite, Pro, Max)
   - Modelos e limites
   - Instalação

2. **Criar Curso em .md**
   - Módulo 1: Introdução
   - Módulo 2: Preparação e Requisitos
   - Módulo 3: Instalação Completa
   - Módulo 4: Configuração com GLM
   - Módulo 5: Primeiros Passos
   - Módulo 6: Instalação de Skills
   - Módulo 7: Troubleshooting
   - Módulo 8: Dicas Avançadas

3. **Salvar**
   - `HTC/01-Entrega/Cursos/instalacao-claude-code/`

### Deliverables
- [ ] Curso completo em .md
- [ ] 8 módulos detalhados
- [ ] Passo a passo de instalação
- [ ] Troubleshooting completo
- [ ] Links úteis

---

## Task 6: create-app-builder-course
**Agent:** hormozi-agent
**Dependencies:** [create-installation-course]
**Estimated:** 4-5 horas + pesquisa

### Objective
Criar CURSO COMPLETO - Construindo Apps para o Negócio com Claude Code.

### ⚠️ Pesquisa Obrigatória
Pesquisar sobre:
- Vibecoding
- Claude Code para desenvolvimento
- Supabase MCP
- Lovable
- GitHub
- Vercel

### Steps

1. **Pesquisar Tecnologias**
   - Claude Code + PRD methodology
   - Supabase MCP server
   - Lovable.dev
   - GitHub team management
   - Vercel deploy

2. **Criar Curso em .md**
   - Metodologia: PRD Primeiro, Depois Escolha Sua Ferramenta
   - Dois caminhos: Claude Code vs Lovable
   - Módulos 1-9 conforme especificação

3. **Estrutura do Curso**
   - Módulo 1: O Que Você Vai Construir
   - Módulo 2: Criando o PRD
   - Módulo 3: Vibecoding com Claude Code
   - Módulo 4: Salvando no GitHub
   - Módulo 5: Colocando no Ar com Vercel
   - Módulo 6: Projeto Prático Completo
   - Módulo 7: Dicas e Truques Avançados
   - Módulo 8: Supabase - Banco de Dados
   - Módulo 9: Caminho 2 - Lovable

4. **Salvar**
   - `HTC/01-Entrega/Cursos/construindo-apps/`

### Deliverables
- [ ] Curso completo em .md
- [ ] 9 módulos detalhados
- [ ] Template de PRD incluído
- [ ] Prompts úteis
- [ ] Links e documentação

---

## Task 7: create-visual-identity
**Agent:** design-agent
**Dependencies:** [create-app-builder-course]
**Estimated:** 3-4 hours

### Objective
Criar identidade visual completa e consistente para HTC.

### ⚠️ CRÍTICO
Esta é a BASE para todos os materiais de marketing que vêm depois.

### Steps

1. **Definir a Marca**
   - Nome e variações
   - Posicionamento
   - Proposta de valor
   - Diferenciais

2. **Criar Identidade Visual**
   - Paleta de cores (principal, secundária, accent, neutral)
   - Tipografia (fontes, tamanhos, pesos)
   - Estilo: Liquid Glass / Glassmorphism
   - Tom de voz
   - Persona da marca

3. **Criar Guidelines**
   - Como usar a marca
   - Exemplos de aplicação
   - O que NÃO fazer

4. **Criar Design System**
   - Design tokens
   - Componentes base
   - Espaçamentos
   - Animações

5. **Salvar**
   - `HTC/05-Formatacao/identidade-visual/`

### Deliverables
- [ ] Paleta de cores completa
- [ ] Tipografia definida
- [ ] Brand guidelines
- [ ] Design system (tokens)
- [ ] Exemplos de aplicação

---

## Task 8: finalize-sales-scripts
**Agent:** hormozi-agent
**Dependencies:** [create-visual-identity]
**Estimated:** 2-3 hours

### Objective
Finalizar scripts de vendas aplicando a identidade visual.

### Steps

1. **Revisar Scripts Base**
   - Abordagem inicial
   - Qualificação
   - Apresentação
   - Objeções (50+)
   - Fechamento (10+ técnicas)
   - Follow-up

2. **Aplicar Identidade Visual**
   - Tom de voz da marca
   - Persona definida
   - Linguagem visual nos scripts

3. **Criar Documento Final**
   - Script completo com anotações
   - Objeções e respostas
   - Técnicas de fechamento
   - Sequências de follow-up

4. **Salvar**
   - `HTC/03-Vendas/scripts-de-vendas.md`

### Deliverables
- [ ] Script de vendas completo
- [ ] 50+ objeções tratadas
- [ ] 10+ técnicas de fechamento
- [ ] Sequências de follow-up
- [ ] Alinhado com identidade visual
