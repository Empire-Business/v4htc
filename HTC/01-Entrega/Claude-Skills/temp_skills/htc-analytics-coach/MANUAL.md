# MANUAL DE USO - htc-analytics-coach

## Sobre Esta Skill

A **htc-analytics-coach** é sua especialista em análise de métricas e KPIs para negócios High Ticket. Ela ajuda a interpretar dados, identificar oportunidades de otimização e transformar números em decisões estratégicas que aumentam conversão e ticket médio.

## Como Usar

### Sintaxe Básica
```
/htc-analytics-coach [solicitação]
```

### Exemplos de Uso

**Exemplo 1: Análise de Funil**
```
/htc-analytics-coach Analisar meu funil de vendas high ticket:
- 1.000 leads entraram no mês
- 200 agendaram sessão estratégica (20%)
- 80 compareceram (40% no-show)
- 32 fecharam (40% conversão)

Identificar onde estou perdendo dinheiro e sugerir melhorias com priorização.
```

**Exemplo 2: Diagnóstico de Conversão**
```
/htc-analytics-coach Minha taxa de conversão de sessão está em 25% (deveria ser 40%+).
Te trago os últimos 10 scripts de vendas gravados.
Analisa padrões, erros comuns e sugere melhoria imediata.
```

**Exemplo 3: Otimização de Tráfego**
```
/htc-analytics-coach Estou rodando anúncios no Facebook:
- CPM: R$15
- CTR: 1,2%
- CPC: R$1,25
- Custo por Agendamento: R$45
- Ticket médio: R$5.000

Calcula ROI, métricas saudáveis e sugere otimizações.
```

**Exemplo 4: Análise de Cohort**
```
/htc-analytics-coach Analisar performance por fonte de tráfego:
- Instagram Stories: 50 agendamentos, 20 fechamentos
- Facebook Ads: 30 agendamentos, 5 fechamentos
- Webinário: 40 agendamentos, 15 fechamentos

Qual canal priorizar e por quê?
```

**Exemplo 5: Projeção de Receita**
```
/htc-analytics-coach Com base nos últimos 3 meses:
- Mês 1: R$60k em vendas
- Mês 2: R$75k em vendas
- Mês 3: R$90k em vendas

Projeta receita do próximo trimestre considerando sazonalidade e capacidade.
```

## O Que Você Vai Receber

### Estrutura da Resposta

**1. Diagnóstico dos Números**
- Análise de cada métrica
- Comparação com benchmarks do mercado High Ticket
- Identificação de anomalias e oportunidades

**2. Análise de Fricção**
- Onde está gargalo (awareness, agendamento, comparecimento, fechamento)
- Custo de cada fricção em R$
- Priorização de correções

**3. Projeções e Scenarios**
- Melhor cenário possível (otimizações aplicadas)
- Pior cenário (tendência atual)
- Cenário realista (melhorias moderadas)

**4. Ações Recomendadas**
- Top 3 ações imediatas (esta semana)
- Top 3 ações de médio prazo (este mês)
- Investimento vs Retorno esperado

**5. KPIs para Acompanhamento**
- 5 métricas-chave para monitorar diariamente/semanalmente
- Metas realistas baseadas em baseline atual
- Alertas e gatilhos de ação

## Melhores Práticas

### 1. Seja Específico com os Números

**Ruim:**
```
/htc-analytics-coach Minhas vendas estão baixas. O que fazer?
```

**Bom:**
```
/htc-analytics-coach Minha conversão de sessão caiu de 45% para 28% no último mês.
Detalhe:
- Leads qualificados: 100/mês (estável)
- Agendamentos: 80 (estável)
- Comparecimento: 70 (estável)
- Fechamentos: 22 (era 36)

Contexto: Mudei script há 2 meses. Analisa causa raiz.
```

### 2. Forneça Contexto Sempre

Inclua:
- Período de análise (7 dias, 30 dias, 90 dias)
- Mudanças recentes (novo script, nova oferta, novo tráfego)
- Seu mercado e ticket médio
- Capacidade atual (tempo, equipe)

### 3. Defina Objetivo Claros

```
/htc-analytics-coach [números]

Objetivo: Quero atingir R$100k/mês em 90 dias.
Current: R$60k/mês.
Onde focar primeiro para chegar lá?
```

## Casos de Uso Detalhados

### Caso 1: Otimizar Funil Vazando

**Situação:** Muitos leads mas poucos fechamentos

```
/htc-analytics-coach Tenho 200 leads/mês qualificados, mas fecho apenas 8 vendas.
Custo por lead: R$30
Ticket: R$7.000
ROI: Negativo

Funil atual:
- 200 leads
→ 40 agendamentos (20%)
→ 30 comparecem (75% no-show)
→ 8 fechamentos (27%)

Sugere priorização de correções para atingir 15 vendas/mês.
```

**Resposta Esperada:**
- Diagnóstico: Problema em agendamento (20% muito baixo)
- No-show alto indica má qualificação ou follow-up fraco
- Conversão de 27% razoável, pode chegar a 40%
- Plano de ação: Melhorar qualificação + follow-up agressivo
- Projeção: Com 35% agendamento → 70 sessões → 28 vendas

### Caso 2: Decisão de Escalar Tráfego

**Situação:** Dúvida entre investir mais ou otimizar primeiro

```
/htc-analytics-coach Estou reinvestindo 20% da receita em tráfego:
- Receita: R$60k/mês
- Investimento: R$12k/mês
- ROAS: 5:1
- Funil estável

Dúvida: Devo escalar tráfego para R$20k/mês ou otimizar conversão primeiro?
Considero margem de segurança.
```

**Resposta Esperada:**
- Análise de margem e risco
- Cenário escalar agora: R$100k receita, R$20k investido
- Cenário otimizar depois: Converter 25% → 40% = R$96k sem aumentar investimento
- Recomendação: Otimizar primeiro (menos risco, mais margem)
- Ponto de inflexão: Quando escalar (KPIs de saúde do funil)

### Caso 3: Turnaround de Performance

**Situação:** Métricas em queda livre

```
/htc-analytics-coach Ajuda! Minhas métricas caíram muito:

        Último Trimestre    Este Trimestre
Leads           200              120 (-40%)
Agendamentos    80               50 (-37%)
Comparecimento  60               35 (-42%)
Fechamentos     24               12 (-50%)
Receita         R$120k           R$60k (-50%)

Contexto:
- Não mudei script
- Tráfego estável
- Mercado parece normal (concorrentes ativos)
- Ticket médio: R$5.000

Diagnóstico emergencial e plano de recuperação.
```

**Resposta Esperada:**
- Investigação: Causa provável (qualidade de lead, fadiga de script, sazonalidade)
- Testes rápidos para validar hipóteses
- Ações imediatas (48h) e curtas (1 semana)
- Projeção de recuperação
- KPIs de alerta precoce para futuro

### Caso 4: Análise de Custo por Aquisição (CAC)

**Situação:** Avaliar eficiência de canais

```
/htc-analytics-coach Comparar meus canais de aquisição:

Instagram Stories:
- Leads: 100/mês
- Custo: R$0 (orgânico)
- Tempo investido: 10h/semana
- Conversão final: 15 vendas

Facebook Ads:
- Leads: 200/mês
- Custo: R$6.000
- Tempo investido: 2h/semana
- Conversão final: 20 vendas

Webinário:
- Leads: 80/mês
- Custo: R$2.000 (ferramentas)
- Tempo investido: 5h/semana
- Conversão final: 12 vendas

Ticket médio: R$5.000 em todos os canais.

Qual canal escalar, manter ou abandonar?
```

**Resposta Esperada:**
- CAC real por canal (incluindo tempo como custo de oportunidade)
- LTV por canal (se disponível)
- Payback period
- Recomendação: Escalar Facebook, manter Instagram, questionar Webinário
- Orçamento ideal por canal para crescimento

### Caso 5: Previsão de Capacidade

**Situação:** Planejar contratação e escala

```
/htc-analytics-coach Estou em R$80k/mês e quero chegar a R$150k/mês em 6 meses.

Situação atual:
- Eu: 30 sessões/mês
- Closer 1: 20 sessões/mês
- Closer 2: 10 sessões/mês
- Conversão média: 35%
- Semana: 6 dias úteis

Dúvidas:
1. Quantos closers contratar?
2. Quantas sessões por closer?
3. Qual meta de leads qualificados?
4. Qual investimento em tráfego necessário?

Considera curva de aprendizado de novos closers (60 dias).
```

## Combinando Com Outras Skills

**htc-sales-script** (após análise)
```
/htc-sales-script [script atual]
Contexto: Analytics identificou queda na conversão de "agendamento → comparecimento".
Criar follow-up que reduza no-show de 40% para 20%.
```

**htc-funnel-builder** (otimizar funil)
```
/htc-funnel-builder Desenhar funil otimizado baseado em análise:
- Foco aumentar agendamentos de 20% para 35%
- Adicionar etapa de qualificação intermediária
```

**htc-marketing-strategy** (ajuste de estratégia)
```
/htc-marketing-strategy Contexto: Analytics mostrou CAC de R$150 acima do ideal.
Redesenhar estratégia de tráfego para reduzir CAC para R$80 mantendo volume.
```

**htc-objection-handler** (melhorar conversão)
```
/htc-objection-handler Analytics: 40% das objeções são "preciso pensar com meu sócio".
Criar tratamento específico para esse bloqueio.
```

## Perguntas Frequentes

**Q: Quantos dados preciso para análise útil?**
A: Mínimo de 30 dias de dados consistentes. Mais tempo = análise mais precisa. Para funis novos, 100 conversões é基准 para confiança estatística.

**Q: Com que frequência devo analisar métricas?**
A:
- Diário: Vendas brutas, agendamentos, comparecimentos
- Semanal: Conversão por etapa, CAC, ticket médio
- Mensal: LTV, churn, ROI, lucratividade

**Q: Qual é o benchmark para High Ticket?**
A: Varies por mercado, mas indicadores saudáveis:
- Conversão sessão: 35-50%
- No-show: <20%
- CAC: <10% do ticket médio
- LTV:CAC: >3:1
- Payback: <3 meses

**Q: Meu funil tem muitas etapas. Por onde começar?**
A: Comece pelo gargalo (menor conversão). Calcule o custo da fricção: (leads perdidos) × (LTV). Priorize onde perde mais dinheiro.

**Q: Como diferenciar variação normal de problema real?**
A: Use análise de tendência (3 períodos consecutivos). 1 mês = variação. 2 meses = atenção. 3 meses = tendência confirmada. Aplique regra do 80/20: 20% das ações resolvem 80% dos problemas.

**Q: Devo focar em volume ou conversão?**
A: Depende do estágio:
- Start: Valide com conversão (poucos leads)
- Crescimento: Escala volume quando conversão saudável (>30%)
- Maturidade: Otimiza conversão para maximizar ROI

**Q: Como medir qualidade de lead?**
A: 3 indicadores-chave:
1. Taxa de agendamento (lead → sessão agendada)
2. Taxa de comparecimento (agendada → realizada)
3. Taxa de fechamento (realizada → venda)
Baixa em todas = má qualidade. Baixa só em fechamento = problema de vendas.

**Q: Meu CAC subiu. É sinal de problema?**
A: Contexto importa. Se ticket médio e LTV também subiram, pode ser saudável (cliente premium). Se só CAC subiu, investiga: competição no ads, fadiga de criativo, sazonalidade.

**Q: Quando devo pausar um canal de tráfego?**
A: Pa imediato se: CAC > 30% do ticket médio OU payback > 6 meses. Otimize antes de pausar. 3 tentativas de otimização são基准 antes de desistir.

**Q: Como projetar receita com confiança?**
A: Use método conservador:
- Métrica: Média de 3 meses (não melhor mês)
- Aplicar fator de conservadorismo: 80% da média
- Considerar sazonalidade (histórico do ano anterior)
- Incluir buffer de 10% para imprevistos

## Troubleshooting

**Problema: Análise inconclusiva**
- **Solução**: Forneça mais contexto (período, mudanças, comparativos)
- **Solução**: Especifique objetivo (maximizar receita, reduzir custo, melhorar margem)

**Problema: Métricas confusas ou conflitantes**
- **Solução**: Foco em uma métrica principal por vez
- **Solução**: Hierarquize objetivos (receita > conversão > volume)

**Problema: Sem dados históricos**
- **Solução**: Comece baseline hoje (mesmo que imperfeito)
- **Solução**: Use benchmarks de mercado como referência inicial
- **Solução**: Coleta dados por 30 dias mínimos antes de decisões grandes

**Problema: Análise não considera contexto de mercado**
- **Solução**: Informe sazonalidade, eventos externos, ações de concorrência
- **Solução**: Compare com período similar do ano anterior

**Problema: Projeções irreais**
- **Solução**: Use método conservador (média não melhor mês)
- **Solução**: Aplicar fator de segurança (80% da média projetada)

## Checklist Diário de Análise

### Manhã (15 min)
- [ ] Vendas brutas de ontem
- [ ] Agendamentos novos
- [ ] Comparecimentos do dia
- [ ] Taxa de conversão do dia
- [ ] Identificar anomalias (↑ ou ↓ significativo)

### Semanal (30 min)
- [ ] Vendas totais semana
- [ ] Conversão por etapa (funil completo)
- [ ] CAC e ROAS semanal
- [ ] Ticket médio
- [ ] Top 3 blocos de objeções
- [ ] Ajuste de previsão mês

### Mensal (1 hora)
- [ ] Receita total vs meta
- [ ] LTV e Payback Period
- [ ] CAC por canal
- [ ] Análise de cohort (clientes por fonte)
- [ ] Churn rate
- [ ] Lucratividade
- [ ] Projeção próximo mês
- [ ] Plano de ação mês seguinte

## Frameworks Aplicados

### 1. Matriz de Priorização de Otimização

Use esta matriz para decidir onde focar:

```
                    Impacto (R$ perdidos)
                    Alto    │   Baixo
    ──────────────────────────────
Alto │    PRIORIDADE 1    │  PRIORIDADE 3
Facilidade    │  (Faça agora)      │  (Faiza depois)
de execução   │─────────────────────│────────────
    │    PRIORIDADE 2    │  PRIORIDADE 4
Baixo │  (Considere)        │  (Ignore)
    └───────────────────────────────────
```

### 2. Fórmulas Essenciais

**CAC (Custo de Aquisição de Cliente)**
```
CAC = Investimento Marketing / # Clientes Adquiridos

Inclua: Ads, ferramentas, tempo (se orgânico)
```

**LTV (Lifetime Value)**
```
LTV = Ticket Médio × # Transações × Meses de Cliente

Para High Ticket: LTV = Ticket Médio (única compra comum)
```

**ROAS (Return on Ad Spend)**
```
ROAS = Receita Gerada / Investimento Ads

Benchmark High Ticket: 5:1 ou superior
```

**Payback Period**
```
Payback = CAC / (Receita Mensal × Margem)

Saudável: <3 meses para High Ticket
```

### 3. Análise de Pareto (80/20)

**Aplicação em High Ticket:**

80% das vendas vêm de:
- 20% das fontes de tráfego
- 20% das objeções tratadas
- 20% dos closers (se time)
- 20% dos dias do mês

Ação: Identifique seus 20% vitais e duplique o foco.

---

**Versão:** 1.0
**Skill Type:** Analytics High Ticket
**Nível:** Intermediário a Avançado
**Tempo de Resposta Típico:** 30-60 segundos
