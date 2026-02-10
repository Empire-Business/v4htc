# HTC Squad - High Ticket Club

**Versão:** 1.0.0
**Criado em:** 2026-02-09
**Domínio:** high-ticket-marketing-product-launch

---

## Descrição

Squad especializado em criar e formatar o produto **HTC (High Ticket Club)** - uma plataforma completa que ensina estratégia High Ticket PRÁTICA para empresas com ofertas high-ticket e tempo limitado.

## Visão Geral do Produto

### HTC (High Ticket Club)

Plataforma que ensina pessoas a rodarem uma **estratégia High Ticket** de forma PRÁTICA.

#### Estrutura da Plataforma

1. **Área de Cursos**
   - Totalmente catalogada e organizada
   - Usuário assiste e conhece o método High Ticket

2. **Área de Construção**
   - Usuário responde perguntas pré-montadas do método
   - Plataforma **GERA ARQUIVOS MARKDOWN** para baixar
   - Arquivos prontos para **instalar no Claude Code** (skills, plugins, etc.)

3. **Tutorial de Instalação**
   - Tutorial dentro da plataforma
   - Arquivos para baixar com instalação básica

4. **IA de Suporte**
   - Tira dúvidas sobre o método
   - Tira dúvidas sobre como usar o Claude Code
   - Deve saber TUDO sobre ambos

#### Integrações Técnicas

- **Open Router** - Alimenta a IA (modelo configurável via admin)
- **Hotmart** - Venda + liberação automática de acesso
- **Supabase** - Banco de dados
- **Vimeo/YouTube/Panda Vídeos** - Aceita links de vídeos de qualquer plataforma
- **Webhooks** - Sistema próprio para enviar/receber informações

---

## Agentes

### 1. hormozi-agent (Lead)
**Especialidade:** Ofertas, produto e vendas (Alex Hormozi style)

**Responsabilidades:**
- Estruturar produto completo (plataforma, entrega, funcionalidades)
- Definir oferta e os 3 planos anuais
- Criar CURSO COMPLETO escrito em .md
- Criar 10 CLAUDE SKILLS prontas (.zip)
- Criar CURSO DE INSTALAÇÃO Claude Code (GLM Coding Plan Z-AI)
- Criar CURSO DE CONSTRUÇÃO DE APPS (PRD-Primeiro + Vibecoding)
- Scripts de vendas

### 2. russel-brunson-agent (Marketing Lead)
**Especialidade:** Marketing e funis de venda (Russell Brunson style)

**Responsabilidades:**
- Criar FUNIL COMPLETO DETALHADO
- Diagrama visual do funil
- Copy de todas as páginas
- Sequências de e-mail
- Scripts de follow-up
- Métricas e KPIs
- Demais materiais de marketing

### 3. design-agent (Design Lead)
**Especialidade:** Identidade visual e protótipos

**Responsabilidades:**
- Criar identidade visual completa
- Protótipos da plataforma
- Sistema de design (design tokens)

### 4. slides-agent (Content Specialist)
**Especialidade:** Slides e apresentações

**Responsabilidades:**
- Criar slides de apresentação de vendas

### 5. prd-agent (Documentation Specialist)
**Especialidade:** Documentação técnica

**Responsabilidades:**
- Executar PRD completo seguindo PRD-GEN.md
- Criar aplicação de visualização

---

## Fases de Execução

### FASE 1 - Fundação (Serial)

1. **hormozi-agent** → Estrutura produto completo
2. **hormozi-agent** → Define oferta e 3 planos anuais
3. **hormozi-agent** → Cria CURSO COMPLETO escrito .md
4. **hormozi-agent** → Cria 10 CLAUDE SKILLS .zip
5. **hormozi-agent** → Pesquisa e cria CURSO INSTALAÇÃO Claude Code
6. **hormozi-agent** → Pesquisa e cria CURSO CONSTRUÇÃO APPS
7. **design-agent** → Cria identidade visual completa ⚠️ **CRÍTICO**
8. **hormozi-agent** → Com base na ID visual, finaliza scripts de vendas

### FASE 2 - Funis de Venda (Prioridade MÁXIMA)

9. **russel-brunson-agent** → Cria FUNIL COMPLETO DETALHADO

### FASE 3 - Marketing (Paralelo)

10. **russel-brunson-agent** → Demais materiais de marketing
11. **design-agent** → Protótipos da plataforma
12. **slides-agent** → Slides de vendas

### FASE 4 - Finalização (Serial)

13. Compilar e organizar TODOS os materiais
14. **prd-agent** → Executa PRD final
15. **prd-agent** → Criar aplicação de visualização

---

## Entregáveis

### 1. Entrega - Conteúdo
- [ ] Curso completo em .md (Método High Ticket)
- [ ] 10 Claude Skills prontas (.zip)
- [ ] Curso de Instalação Claude Code (GLM Z-AI)
- [ ] Curso de Construção de Apps (PRD + Vibecoding)

### 2. Marketing
- [ ] Funil de venda completo detalhado
- [ ] Copy de páginas
- [ ] Sequências de e-mail
- [ ] Scripts de WhatsApp
- [ ] Criativos (reels, estáticos, stories)
- [ ] Conteúdo orgânico
- [ ] Narrativa de marca

### 3. Vendas
- [ ] Fluxo de vendas completo
- [ ] Script de vendas
- [ ] Slides de apresentação

### 4. Planos
- [ ] 3 planos anuais (a partir de R$ 10k)

### 5. Formatação de Produto
- [ ] Identidade visual completa
- [ ] Funcionalidades documentadas
- [ ] UX definida
- [ ] Especificações técnicas

### 6. PRD
- [ ] PRD executado seguindo PRD-GEN.md

### 7. Aplicação
- [ ] App de visualização (Next.js) deployável no Vercel

---

## Público-Alvo

- Empresas maiores que **já têm funcionários** atuando nas áreas
- Empresários com **ofertas High Ticket**
- Times que precisam **alavancar negócios** com IA
- Pessoas com **tempo limitado** que precisam de soluções práticas

---

## Design System

- **Estilo:** Liquid Glass / Glassmorphism (Apple-inspired)
- **Modernas e elegante**
- **Responsivo** (mobile, tablet, desktop)

---

## Referências

- `PRD-GEN.md` - Instruções para executar o PRD
- `MAAS-HTC-Completo.md` - Metodologia completa
- `Transcripts/` - Arquivos para entendimento profundo
- `Transcripts_md/` - Versão .md dos Transcripts

---

## Como Usar Este Squad

1. **Revise a estrutura** do squad.yaml
2. **Personalize os agentes** em `agents/`
3. **Ajuste as tarefas** em `tasks/`
4. **Execute as fases** em ordem
5. **Valide os entregáveis** usando os checklists

---

**Versão:** 1.0.0
**Atualizado em:** 2026-02-09
