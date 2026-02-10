# MAPA DE NAVEGAÇÃO - HTC SKILLS

## Guia Completo: Como Navegar e Usar as Skills HTC

## Índice Rápido

- [Estrutura das Skills](#estrutura-das-skills)
- [Árvore de Decisão Rápida](#árvore-de-decisão-rápida)
- [Navegação por Nível de Experiência](#navegação-por-nível-de-experiência)
- [Guia Detalhado por Skill](#guia-detalhado-por-skill)
- [Fluxos de Trabalho Completos](#fluxos-de-trabalho-completos)
- [Mapa Visual de Arquivos](#mapa-visual-de-arquivos)

---

## Estrutura das Skills

### Visão Geral da Nova Estrutura

Cada skill HTC segue uma **estrutura robusta e padronizada** que permite:

1. **Aprendizado progressivo** - Do básico ao avançado
2. **Reutilização** - Templates e exemplos prontos
3. **Profundidade** - Referências e conceitos completos
4. **Qualidade** - Checklists de validação
5. **Contexto** - Prompts para diferentes situações

### Componentes da Estrutura

```
┌─────────────────────────────────────────────────────────────┐
│                    ESTRUTURA DA SKILL                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  📄 README.md      - Visão geral rápida                     │
│  🎯 SKILL.md       - Prompt principal da IA                 │
│  📖 MANUAL.md      - Instruções detalhadas                  │
│                                                             │
│  📁 examples/      - 5+ exemplos reais                      │
│  📁 templates/     - 3+ templates prontos                   │
│  📁 references/    - Frameworks e conceitos                 │
│  📁 workflows/     - Fluxos por nível                       │
│  📁 prompts/       - Variações de contexto                  │
│  📁 checklists/    - Garantia de qualidade                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Como Navegar nos Componentes

| Componente | Quando Usar | O Que Encontrar |
|------------|-------------|-----------------|
| **README.md** | Primeira vez na skill | Visão geral, propósito, exemplo rápido |
| **SKILL.md** | Entender como a IA funciona | Instruções para o Claude, frameworks |
| **MANUAL.md** | Aprender a usar | Passo a passo, parâmetros, dicas |
| **examples/** | Precisar de inspiração | Casos reais, exemplos práticos |
| **templates/** | Quer rapidez | Modelos prontos para preencher |
| **references/** | Aprofundar conhecimento | Frameworks, conceitos, teoria |
| **workflows/** | Processo completo | Passos do iniciante ao avançado |
| **prompts/** | Contexto específico | Variações por situação/nicho |
| **checklists/** | Validar qualidade | Listas de verificação |

---

## Árvore de Decisão Rápida

### Encontre a Skill Certa em 3 Passos

```
INÍCIO
  │
  ▼
QUAL SEU OBJETIVO PRINCIPAL?
  │
  ├─ CRIAR algo novo?
  │  ├─ Oferta/produto High Ticket ──→ htc-ofertas-creator
  │  ├─ Funil de vendas ────────────→ htc-funnel-builder
  │  └─ Conteúdo de marketing ──────→ htc-content-generator
  │
  ├─ VENDER mais?
  │  ├─ Copy de vendas ─────────────→ htc-copywriter
  │  ├─ Script de vendas ───────────→ htc-sales-script
  │  └─ Lidar com objeções ─────────→ htc-objection-handler
  │
  ├─ NUTRIR leads?
  │  └─ Sequências de email ────────→ htc-lead-nurturing
  │
  ├─ ESTRATEGIA?
  │  ├─ Plano de marketing ─────────→ htc-marketing-strategy
  │  ├─ Precificação ───────────────→ htc-pricing-strategy
  │  └─ Analisar métricas ──────────→ htc-analytics-coach
  │
  └─ NÃO TEM CERTEZA?
     └─ Comece com: htc-content-generator
```

### Mapa de Uso Rápido por Situação

| Situação | Skill Principal | Skills Secundárias |
|----------|-----------------|-------------------|
| **Lançando nova oferta** | htc-ofertas-creator | htc-pricing-strategy, htc-funnel-builder |
| **Preciso vender mais** | htc-copywriter | htc-sales-script, htc-objection-handler |
| **Tráfego baixo** | htc-content-generator | htc-marketing-strategy, htc-lead-nurturing |
| **Taxa de conversão baixa** | htc-analytics-coach | htc-objection-handler, htc-copywriter |
| **Não tenho tempo** | htc-lead-nurturing | htc-content-generator, htc-marketing-strategy |
| **Quero escalar** | htc-marketing-strategy | htc-analytics-coach, htc-funnel-builder |
| **Preciso de script** | htc-sales-script | htc-objection-handler, htc-copywriter |

---

## Navegação por Nível de Experiência

### Nível Iniciante

**Objetivo:** Começar a usar as skills rapidamente

**Passo 1: Escolha uma skill para começar**
```
Recomendadas para iniciantes:
1. htc-content-generator - Criar conteúdo básico
2. htc-copywriter - Escrever primeiras copies
3. htc-lead-nurturing - Configurar emails básicos
```

**Passo 2: Leia o README.md**
- Entenda o propósito
- Veja um exemplo rápido
- Saiba quando usar

**Passo 3: Consulte o MANUAL.md**
- Aprenda a sintaxe básica
- Entenda os parâmetros
- Veja dicas de uso

**Passo 4: Use um template**
- Vá em `templates/`
- Escolha um template simples
- Preencha os campos em [COLCHETES]
- Execute

**Exemplo de fluxo iniciante:**
```
1. Abre htc-content-generator/README.md
2. Lê sobre a skill
3. Abre templates/template-post-linkedin.md
4. Preenche: [SEU TÓPICO], [SEU NICHO], [SEU CTA]
5. Executa: /htc-content-generator Usar template com...
```

---

### Nível Intermediário

**Objetivo:** Usar as skills com mais eficiência

**Passo 1: Consulte examples/**
- Encontre um exemplo similar ao seu caso
- Entenda a estrutura
- Adapte para sua necessidade

**Passo 2: Explore references/**
- Entenda os frameworks utilizados
- Aprenda conceitos fundamentais
- Aprofunde conhecimentos

**Passo 3: Use prompts/ por contexto**
- Escolha o prompt para seu contexto específico
- Adapte para sua situação
- Combine com exemplos

**Passo 4: Siga workflows/intermediario.md**
- Processe mais complexos
- Combine múltiplas skills
- Otimize resultados

**Exemplo de fluxo intermediário:**
```
1. Abre htc-copywriter/examples/landing-page-avancada.md
2. Estuda a estrutura
3. Consulta references/framework-pas.md
4. Usa prompts/contexto-landing-page.md
5. Adapta para seu nicho
6. Executa com contexto completo
```

---

### Nível Avançado

**Objetivo:** Maximizar resultados das skills

**Passo 1: Estude workflows/avancado.md**
- Combine múltiplas skills
- Otimize processos
- Crie fluxos personalizados

**Passo 2: Utilize checklists/**
- Valide qualidade de outputs
- Garanta melhores práticas
- Identifique oportunidades de melhoria

**Passo 3: Combine tudo**
- Misture templates, exemplos e prompts
- Adapte referências para seu contexto
- Crie sua própria biblioteca

**Passo 4: Iteração e otimização**
- Teste variações
- Analise resultados
- Otimize continuamente

**Exemplo de fluxo avançado:**
```
1. Segue workflow avançado de lançamento
2. Combina 5+ skills em sequência
3. Usa checklists para validar cada etapa
4. Cria templates personalizados
5. Documenta casos de sucesso
6. Otimiza com base em métricas
```

---

## Guia Detalhado por Skill

### 1. htc-ofertas-creator

**Propósito:** Criar ofertas High Ticket irresistíveis

**Quando usar:**
- Criando uma nova oferta High Ticket
- Otimizando ofertas existentes
- Estruturando programas de consulting
- Precificando serviços premium

**Arquivos-chave:**
```
htc-ofertas-creator/
├── README.md                          # Comece aqui
├── MANUAL.md                          # Instruções detalhadas
├── examples/
│   ├── oferta-basica.md              # Primeira oferta
│   ├── oferta-completa.md            # Oferta completa
│   ├── oferta-tiers.md               # Múltiplos níveis
│   └── caso-sucesso-consulting.md    # Exemplo real
├── templates/
│   ├── template-oferta-rapida.md     # Resultado rápido
│   └── template-oferta-completa.md   # Resultado completo
├── references/
│   ├── framework-7-elementos.md      # Entenda o framework
│   └── pricing-psychology.md         # Psicologia de preço
└── workflows/
    └── intermediario.md              # Fluxo otimizado
```

**Comando típico:**
```
/htc-ofertas-creator Usar template oferta-completa para programa de coaching executivo de 16 semanas, público-alvo: diretores de vendas SaaS, preço: R$15.000, incluir: value stack, 3 bônus, garantia de 30 dias.
```

---

### 2. htc-funnel-builder

**Propósito:** Construir funis de venda completos

**Quando usar:**
- Planejando um novo funil
- Otimizando funis existentes
- Criando páginas de vendas
- Configurando sequências de nutrição

**Arquivos-chave:**
```
htc-funnel-builder/
├── README.md
├── MANUAL.md
├── examples/
│   ├── funil-webinar.md              # Funil de webinar
│   ├── funil-aplicacao.md            # Funil de aplicação
│   └── funil-vsl.md                  # Funil de VSL
├── templates/
│   ├── template-funnel-completo.md   # Funil completo
│   └── template-pagina-vendas.md     # Página de vendas
├── references/
│   ├── framework-funnel.md           # Framework de funil
│   └── metricas-funnel.md            # Métricas essenciais
└── workflows/
    ├── iniciante.md                  # Primeiro funil
    └── avancado.md                   # Otimização
```

**Comando típico:**
```
/htc-funnel-builder Seguindo example funil-webinar.md, criar funil para programa de R$10k, incluir: landing page, página de registro, sequência de 3 emails, página de vendas.
```

---

### 3. htc-copywriter

**Propósito:** Escrever copies de vendas persuasivas

**Quando usar:**
- Escrevendo páginas de vendas
- Criando sequências de email
- Desenvolvendo anúncios
- Escrevendo scripts de VSL

**Arquivos-chave:**
```
htc-copywriter/
├── README.md
├── MANUAL.md
├── examples/
│   ├── landing-page-basica.md        # LP simples
│   ├── landing-page-avancada.md      # LP completa
│   ├── sequencia-email.md            # Emails
│   └── anuncio-facebook.md           # Anúncios
├── templates/
│   ├── template-landing-page.md      # LP pronta
│   └── template-email-venda.md       # Email de venda
├── references/
│   ├── framework-pas.md              # PAS
│   ├── framework-aida.md             # AIDA
│   └── gatilhos-psicologicos.md      # Gatilhos
├── prompts/
│   ├── contexto-landing-page.md
│   └── contexto-email.md
└── checklists/
    └── checklist-copy.md             # Valide sua copy
```

**Comando típico:**
```
/htc-copywriter Seguindo template-landing-page.md com contexto de emagrecimento, nicho: mulheres 35-50 anos, promessa: 8kg em 60 dias, incluir: framework PAS, 3 gatilhos, 7 bullets.
```

---

### 4. htc-sales-script

**Propósito:** Criar scripts de vendas e fechamento

**Quando usar:**
- Preparando para calls de vendas
- Treinando equipe de vendas
- Criando scripts para webinars
- Planejando fechamento de propostas

**Arquivos-chave:**
```
htc-sales-script/
├── README.md
├── MANUAL.md
├── examples/
│   ├── script-call-basico.md         # Call simples
│   ├── script-call-avancado.md       # Call completa
│   └── script-webinar.md             # Webinar
├── templates/
│   ├── template-call-vendas.md       # Call completa
│   └── template-follow-up.md         # Follow-up
├── references/
│   ├── estrutura-call.md             # Estrutura da call
│   └── tecnicas-fechamento.md        # Técnicas
└── prompts/
    └── contexto-call-quentente.md
```

**Comando típico:**
```
/htc-sales-script Criar script para call de R$25.000 usando template-call-vendas.md, lead já expressou interesse mas disse "preciso pensar", incluir: rapport, perguntas SPIN, 3 técnicas de fechamento.
```

---

### 5. htc-marketing-strategy

**Propósito:** Planejar estratégias de marketing completas

**Quando usar:**
- Iniciando marketing de negócio High Ticket
- Escalando esforços de marketing
- Entrando em novos mercados
- Planejando campanhas sazonais

**Arquivos-chave:**
```
htc-marketing-strategy/
├── README.md
├── MANUAL.md
├── examples/
│   ├── plano-marketing-6-meses.md    # Plano semestral
│   └── plano-lancamento.md           # Lançamento
├── templates/
│   ├── template-plano-marketing.md   # Plano completo
│   └── template-alocacao-budget.md   # Orçamento
├── references/
│   ├── canais-marketing.md           # Canais disponíveis
│   └── kpis-essenciais.md            # KPIs
└── workflows/
    └── avancado.md                   # Estratégia avançada
```

**Comando típico:**
```
/htc-marketing-strategy Usar template-plano-marketing.md para consulting de 6 meses, orçamento: R$20k/mês, foco: LinkedIn + Email marketing, objetivo: 30 leads/mês.
```

---

### 6. htc-lead-nurturing

**Propósito:** Nutrir leads e criar sequências de follow-up

**Quando usar:**
- Construindo lista de email
- Criando sequências de automação
- Planejando follow-up pós-webinar
- Nutrindo leads frios

**Arquivos-chave:**
```
htc-lead-nurturing/
├── README.md
├── MANUAL.md
├── examples/
│   ├── sequencia-boas-vindas.md      # Welcome
│   ├── sequencia-pos-webinar.md      # Pós-webinar
│   └── reengajamento-leads.md        # Reengajar
├── templates/
│   ├── template-sequencia-7-emails.md
│   └── template-follow-up.md
├── references/
│   ├── framework-nurturing.md        # Nurturing
│   └── automacoes-essenciais.md      # Automações
└── workflows/
    └── intermediario.md
```

**Comando típico:**
```
/htc-lead-nurturing Criar sequência de 7 emails usando template, leads que baixaram PDF mas não compraram, programa de R$8.000, incluir: 3 stories, 2 casos, 2 CTAs.
```

---

### 7. htc-objection-handler

**Propósito:** Lidar com objeções de vendas

**Quando usar:**
- Preparando para calls de vendas
- Criando páginas de FAQ
- Treinando equipe em objeções
- Otimizando páginas de vendas

**Arquivos-chave:**
```
htc-objection-handler/
├── README.md
├── MANUAL.md
├── examples/
│   ├── objecoes-comuns.md            # 10 objeções
│   ├── respostas-objecoes.md         # Respostas
│   └── faq-completo.md               # FAQ
├── templates/
│   ├── template-resposta-objecao.md
│   └── template-faq.md
├── references/
│   ├── psicologia-objecoes.md        # Psicologia
│   └── tecnica-reframe.md            # Reframe
└── prompts/
    └── contexto-call-vendas.md
```

**Comando típico:**
```
/htc-objection-handler Como responder "é muito caro" em call de R$15.000, usando tecnica-reframe, incluir: 3 âncoras de valor, 2 comparações, 1 alternativa.
```

---

### 8. htc-pricing-strategy

**Propósito:** Definir precificação e planos de pagamento

**Quando usar:**
- Lançando nova oferta
- Restruturando preços
- Criando planos de pagamento
- Aumentando preços

**Arquivos-chave:**
```
htc-pricing-strategy/
├── README.md
├── MANUAL.md
├── examples/
│   ├── precificacao-basica.md        # Preço simples
│   ├── precificacao-tiers.md         # Múltiplos níveis
│   └── aumento-preco.md              # Aumento
├── templates/
│   ├── template-estrutura-precos.md
│   └── template-planos-pagamento.md
├── references/
│   ├── pricing-psychology.md
│   └── value-stacks.md
└── checklists/
    └── checklist-precificacao.md
```

**Comando típico:**
```
/htc-pricing-strategy Definir precificação para programa de 12 semanas, usando template, criar 3 tiers (R$5k/10k/15k), cada tier com value stack calculado.
```

---

### 9. htc-content-generator

**Propósito:** Gerar conteúdo de marketing

**Quando usar:**
- Criando conteúdo para LinkedIn/Instagram
- Escrevendo newsletters semanais
- Produzindo vídeos e reels
- Planejando calendário editorial

**Arquivos-chave:**
```
htc-content-generator/
├── README.md
├── MANUAL.md
├── examples/
│   ├── posts-linkedin.md             # Posts LinkedIn
│   ├── posts-instagram.md            # Instagram
│   └── newsletter-semanal.md         # Newsletter
├── templates/
│   ├── template-post-linkedin.md
│   ├── template-reel-instagram.md
│   └── template-newsletter.md
├── references/
│   ├── pilares-conteudo.md           # 5 pilares
│   └── calendario-editorial.md       # Calendário
└── workflows/
    └── iniciante.md
```

**Comando típico:**
```
/htc-content-generator Criar 5 posts de LinkedIn usando template, pilares: autoridade + resultado + prova, nicho: consulting financeiro, CTA: agendamento.
```

---

### 10. htc-analytics-coach

**Propósito:** Analisar métricas e otimizar resultados

**Quando usar:**
- Analisando performance de campanhas
- Criando dashboards de métricas
- Otimizando taxas de conversão
- Tomando decisões baseadas em dados

**Arquivos-chave:**
```
htc-analytics-coach/
├── README.md
├── MANUAL.md
├── examples/
│   ├── analise-funnel.md             # Análise de funil
│   ├── dashboard-kpis.md              # Dashboard
│   └── teste-ab.md                   # Teste A/B
├── templates/
│   ├── template-dashboard.md
│   └── template-relatorio-mensal.md
├── references/
│   ├── kpis-essenciais.md
│   └── metricas-conversao.md
└── checklists/
    └── checklist-analise.md
```

**Comando típico:**
```
/htc-analytics-coach Analisar métricas: tráfego 10k, conversão 2%, ticket 8k, CPA 300, usando template-relatorio, identificar: 3 oportunidades de otimização.
```

---

## Fluxos de Trabalho Completos

### Fluxo 1: Lançamento de Nova Oferta

**Objetivo:** Criar e lançar uma oferta High Ticket do zero

**Fases:**

#### Fase 1: Criação da Oferta
```
Skill: htc-ofertas-creator
Arquivo: workflows/iniciante.md
Tempo: 30-60 minutos

1. Usar template-oferta-rapida.md
2. Definir público e promessa
3. Calcular value stack
4. Criar bônus estratégicos
5. Estruturar garantia
```

#### Fase 2: Precificação
```
Skill: htc-pricing-strategy
Arquivo: templates/template-estrutura-precos.md
Tempo: 30 minutos

1. Definir preço base
2. Criar tiers (Silver/Gold/Platinum)
3. Configurar planos de pagamento
4. Validar com checklist
```

#### Fase 3: Funil de Vendas
```
Skill: htc-funnel-builder
Arquivo: examples/funnel-webinar.md
Tempo: 60-90 minutos

1. Desenhar mapa do funil
2. Criar páginas
3. Configurar sequências de email
4. Definir métricas
```

#### Fase 4: Copywriting
```
Skill: htc-copywriter
Arquivo: templates/template-landing-page.md
Tempo: 90-120 minutos

1. Escrever landing page
2. Criar sequência de emails
3. Desenvolver anúncios
4. Validar com checklist
```

#### Fase 5: Script de Vendas
```
Skill: htc-sales-script
Arquivo: templates/template-call-vendas.md
Tempo: 45-60 minutos

1. Criar script de call
2. Preparar respostas para objeções
3. Configurar follow-up
```

#### Fase 6: Estratégia de Marketing
```
Skill: htc-marketing-strategy
Arquivo: workflows/intermediario.md
Tempo: 60 minutos

1. Definir canais
2. Alocar orçamento
3. Planejar cronograma
4. Configurar KPIs
```

#### Fase 7: Validação Final
```
Skill: htc-analytics-coach
Arquivo: checklists/checklist-pre-lancamento.md
Tempo: 30 minutos

1. Validar todos os componentes
2. Configurar tracking
3. Preparar dashboard
4. Definir otimizações
```

**Tempo total estimado:** 6-8 horas

**Comando integrado:**
```
/htc-ofertas-creator Criar oferta completa para coaching 12 semanas
→ /htc-pricing-strategy Definir 3 tiers para esta oferta
→ /htc-funnel-builder Desenhar funil de webinar
→ /htc-copywriter Escrever copy das páginas
→ /htc-sales-script Criar script de vendas
→ /htc-marketing-strategy Planejar lançamento
→ /htc-analytics-coach Configurar métricas
```

---

### Fluxo 2: Otimização de Conversões

**Objetivo:** Melhorar taxa de conversão de funil existente

**Fases:**

#### Fase 1: Análise Atual
```
Skill: htc-analytics-coach
Arquivo: references/metricas-conversao.md
Tempo: 45 minutos

1. Analisar métricas atuais
2. Identificar gargalos
3. Comparar com benchmarks
4. Listar oportunidades
```

#### Fase 2: Identificação de Objeções
```
Skill: htc-objection-handler
Arquivo: examples/objecoes-comuns.md
Tempo: 30 minutos

1. Mapear objeções comuns
2. Analysar feedback de clientes
3. Identificar padrões
4. Priorizar objeções
```

#### Fase 3: Otimização de Copy
```
Skill: htc-copywriter
Arquivo: prompts/contexto-otimizacao.md
Tempo: 60-90 minutos

1. Reescrever headlines
2. Ajustar bullets de benefícios
3. Incluir prova social adicional
4. Fortalecer CTAs
```

#### Fase 4: Ajuste de Funil
```
Skill: htc-funnel-builder
Arquivo: workflows/avancado.md
Tempo: 60 minutos

1. Otimizar sequências de email
2. Ajustar páginas do funil
3. Melhorar fluxo de navegação
4. Testar variações
```

#### Fase 5: Melhoria de Nurturing
```
Skill: htc-lead-nurturing
Arquivo: examples/reengajamento-leads.md
Tempo: 45 minutos

1. Otimizar sequências existentes
2. Criar novos touchpoints
3. Segmentar lista melhor
4. Personalizar comunicações
```

**Tempo total estimado:** 4-5 horas

---

### Fluxo 3: Crescimento de Audience

**Objetivo:** Crescer audience e engajamento

**Fases:**

#### Fase 1: Estratégia de Conteúdo
```
Skill: htc-marketing-strategy
Arquivo: templates/plano-conteudo.md
Tempo: 60 minutos

1. Definir pilares de conteúdo
2. Identificar canais prioritários
3. Criar calendário editorial
4. Definir frequência de postagem
```

#### Fase 2: Geração de Conteúdo
```
Skill: htc-content-generator
Arquivo: templates/template-post-linkedin.md
Tempo: 90-120 minutos (por mês)

1. Gerar posts para LinkedIn
2. Criar conteúdo para Instagram
3. Escrever newsletters
4. Produzir scripts de vídeo
```

#### Fase 3: Copywriting Avançado
```
Skill: htc-copywriter
Arquivo: prompts/contexto-newsletter.md
Tempo: 60 minutos

1. Escrever newsletter semanal
2. Criar sequências de nutricção
3. Desenvolver lead magnets
```

#### Fase 4: Automação de Nurturing
```
Skill: htc-lead-nurturing
Arquivo: templates/sequencia-boas-vindas.md
Tempo: 45 minutos

1. Configurar sequência de boas-vindas
2. Automatizar segmentação
3. Criar fluxos de nurturing
```

#### Fase 5: Análise de Engagement
```
Skill: htc-analytics-coach
Arquivo: checklists/checklist-engagement.md
Tempo: 30 minutos

1. Monitorar métricas de engagement
2. Analisar performance de conteúdo
3. Ajustar estratégia baseado em dados
4. Otimizar continuamente
```

**Tempo total estimado:** 5-6 horas (inicial) + 2-3 horas/mês

---

## Mapa Visual de Arquivos

### Navegação Visual por Diretório

```
CLAUDE-SKILLS/
│
├── 📄 README-SKILLS.md              # Comece AQUI
├── 📄 MAPA-USO-SKILLS.md            # Você está AQUI
├── 📄 SUMARIO-EXECUTIVO.md          # Visão geral
│
└── 📁 [10 Skills]/                  cada uma com estrutura completa:
    │
    └── 📁 htc-[nome-skill]/
        │
        ├── 📄 README.md             ⭐ Comece aqui
        │   └── O que faz, quando usar, exemplo rápido
        │
        ├── 📄 SKILL.md              🤖 Prompt da IA
        │   └── Instruções para o Claude
        │
        ├── 📄 MANUAL.md             📖 Guia completo
        │   └── Passo a passo detalhado
        │
        ├── 📁 examples/             💡 Inspiração
        │   ├── exemplo-basico.md    # Primeiros passos
        │   ├── exemplo-intermediario.md  # Próximo nível
        │   ├── exemplo-avancado.md   # Casos complexos
        │   └── caso-sucesso-*.md     # Exemplos reais
        │
        ├── 📁 templates/            📋 Modelos prontos
        │   ├── template-rapido.md   # Resultado imediato
        │   ├── template-completo.md # Resultado detalhado
        │   └── template-especifico.md   # Casos particulares
        │
        ├── 📁 references/           📚 Teoria e conceitos
        │   ├── conceitos.md         # Fundamentos
        │   ├── frameworks.md        # Frameworks utilizados
        │   ├── melhores-praticas.md # O que funciona
        │   └── casos-sucesso.md     # Exemplos de sucesso
        │
        ├── 📁 workflows/            🔄 Fluxos de trabalho
        │   ├── iniciante.md         # Começando
        │   ├── intermediario.md     # Otimizando
        │   └── avancado.md          # Dominando
        │
        ├── 📁 prompts/              🎯 Por contexto
        │   ├── contexto-webinar.md  # Para webinars
        │   ├── contexto-call.md     # Para calls
        │   ├── contexto-email.md    # Para emails
        │   └── contexto-[nichos].md # Por nicho
        │
        └── 📁 checklists/           ✅ Qualidade
            ├── checklist-pre.md     # Antes de usar
            ├── checklist-pos.md     # Validação
            └── checklist-qualidade.md   # Garantia
```

### Legenda de Navegação

| Ícone | Significado | Quando Usar |
|-------|-------------|-------------|
| ⭐ | Ponto de partida | Primeira vez na skill |
| 🤖 | Configuração da IA | Entender como funciona |
| 📖 | Documentação completa | Aprender profundamente |
| 💡 | Ideias e inspiração | Precisa de exemplos |
| 📋 | Modelos prontos | Quer rapidez |
| 📚 | Teoria e conceitos | Aprofundar conhecimento |
| 🔄 | Processos completos | Fluxos de trabalho |
| 🎯 | Contexto específico | Situações particulares |
| ✅ | Validação | Garantir qualidade |

---

## Dicas de Navegação

### Dica 1: Siga o Fluxo Natural

**Para iniciantes:**
```
README.md → MANUAL.md → templates/ → examples/
```

**Para intermediários:**
```
examples/ → references/ → prompts/ → workflows/intermediario.md
```

**Para avançados:**
```
workflows/avancado.md → checklists/ → Combinações personalizadas
```

### Dica 2: Use Busca Rápida

Procurando algo específico?

| Precisa de... | Vá para... |
|---------------|------------|
| Resultado rápido | templates/template-rapido.md |
| Entender como funciona | references/conceitos.md |
| Ver exemplo real | examples/caso-sucesso-*.md |
| Processo completo | workflows/ |
| Situação específica | prompts/contexto-*.md |
| Garantir qualidade | checklists/ |

### Dica 3: Combine Arquivos

**Exemplo de combinação poderosa:**
```
1. Comece com: templates/template-rapido.md
2. Adapte com: examples/caso-sucesso.md
3. Aprofunde com: references/frameworks.md
4. Contextualize com: prompts/contexto-seu-nicho.md
5. Valide com: checklists/checklist-qualidade.md
```

### Dica 4: Crie Sua Biblioteca

**Organize seus melhores outputs:**
```
MEUS-TEMPLATES/
├── ofertas-criadas/
├── funis-construidos/
├── copies-escritas/
└── scripts-usados/
```

---

## Solução de Problemas

### Problema: Não sei por onde começar

**Solução:**
1. Abra `README-SKILLS.md` (este arquivo)
2. Vá para [Árvore de Decisão Rápida](#árvore-de-decisão-rápida)
3. Identifique seu objetivo principal
4. Siga para a skill indicada
5. Comece pelo `README.md` da skill

### Problema: Output não é satisfatório

**Solução:**
1. Consulte `examples/` para ver exemplos reais
2. Use `templates/` para estruturar melhor
3. Adicione mais contexto ao comando
4. Consulte `references/` para entender frameworks
5. Use `prompts/` para contexto específico

### Problema: Quero um processo completo

**Solução:**
1. Vá para [Fluxos de Trabalho Completos](#fluxos-de-trabalho-completos)
2. Escolha o fluxo adequado
3. Siga cada fase sequencialmente
4. Use os arquivos recomendados em cada fase

### Problema: Preciso garantir qualidade

**Solução:**
1. Use `checklists/` antes de finalizar
2. Valide com `workflows/intermediario.md`
3. Compare com `examples/caso-sucesso.md`
4. Refine com base em `references/melhores-praticas.md`

---

## Recursos Adicionais

### Documentação Oficial
- [Claude Skills Documentation](https://code.claude.com/docs/en/skills)
- [How to Create Custom Skills](https://support.claude.com/en/articles/12512198-how-to-create-custom-skills)

### Documentação HTC
- **README-SKILLS.md** - Documentação completa das skills
- **SUMARIO-EXECUTIVO.md** - Visão geral da entrega

### Comunidade
- Grupo exclusivo para usuários das skills
- Compartilhamento de resultados
- Melhores práticas
- Suporte peer-to-peer

---

## Checklist de Uso

### Primeira Vez Usando Skills?

- [ ] Li o README-SKILLS.md
- [ ] Identifiquei meu objetivo principal
- [ ] Escolhi a skill adequada
- [ ] Li o README.md da skill
- [ ] Consultei o MANUAL.md
- [ ] Escolhi um template para começar
- [ ] Executei meu primeiro comando
- [ ] Revisei o resultado
- [ ] Explorei examples/ para melhorar

### Usando Skills Regularmente?

- [ ] Tenho meus templates favoritos
- [ ] Consulto examples/ regularmente
- [ ] Sigo workflows/ para processos
- [ ] Uso checklists/ para validar
- [ ] Adapto prompts/ por contexto
- [ ] Combino múltiplas skills
- [ ] Documento meus casos de sucesso
- [ ] Otimizo com base em resultados

---

## Próximos Passos

### Para Iniciantes
1. Comece com **htc-content-generator**
2. Use templates simples
3. Consulte examples/ básicos
4. Evolua gradualmente

### Para Intermediários
1. Combine **htc-copywriter** + **htc-funnel-builder**
2. Siga workflows/intermediario.md
3. Use prompts/ por contexto
4. Otimize continuamente

### Para Avançados
1. Domine **htc-analytics-coach**
2. Combine 5+ skills em fluxos
3. Crie templates personalizados
4. Documente e otimize

---

**Versão:** 2.0
**Última Atualização:** Fevereiro 2026
**Criado por:** HTC Lead Architect
**Estrutura:** Robust Skill Framework v2.0
