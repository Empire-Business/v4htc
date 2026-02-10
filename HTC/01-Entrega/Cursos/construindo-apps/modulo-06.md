# Módulo 6: Projeto Prático Completo

---

## Objetivo deste Módulo

Acompanhar um exemplo real do início ao fim: Maria criando o sistema **Agenda Beauty** para seu salão de beleza.

---

## O Cenário

### Maria

- Dona de um salão de beleza com 5 profissionais
- 50 clientes por semana
- Dor: Clientes ligam o dia todo, horários se sobrepõem, bagunça generalizada
- Objetivo: Sistema online de agendamento

### O Projeto: Agenda Beauty

Sistema onde:
- Clientes veem horários disponíveis online
- Agendam sem precisar ligar
- Profissionais veem sua agenda
- Maria administra tudo

---

## Dia 1: PRD e Início

### Manhã: Criando o PRD

Maria abre o template e preenche:

```markdown
# PRD: Agenda Beauty

## 1. O QUE É
Sistema online de agendamento para salão de beleza.

## 2. PARA QUEM
- Clientes do salão (público geral)
- 5 profissionais
- 1 administradora (Maria)

## 3. O QUE FAZ

### Funcionalidade 1: Visualização de Horários
Cliente vê profissionais e horários disponíveis.

### Funcionalidade 2: Agendamento
Cliente escolhe horário e serviço, preenche dados, confirma.

### Funcionalidade 3: Painel do Profissional
Profissional vê seus agendamentos.

### Funcionalidade 4: Painel Administrativo
Maria vê tudo, pode cancelar, adicionar profissionais.

## 4. COMO SE PARECE
Clean, moderno, cores pastel (rosa, roxo), mobile-friendly.

## 5. DADOS
agendamentos: id, cliente_nome, cliente_telefone, profissional_id, servico, data_hora, status
profissionais: id, nome, especialidade, ativo
servicos: id, nome, duracao_minutos, preco, ativo

## 6. O QUE NÃO PRECISA (MVP)
Envio de WhatsApp, pagamento online, avaliações, app mobile.
```

### Tarde: Iniciando o Projeto

Maria abre o terminal:

```bash
cd ~/projetos
mkdir agenda-beauty
cd agenda-beauty
claude
```

Maria envia o Prompt Mágico:

```
Claude, vou criar o Agenda Beauty, sistema de agendamento para salão de beleza.

[Cola o PRD completo]

Use Next.js 15, TypeScript, Tailwind CSS e shadcn/ui.

Confirme que entendeu.
```

Claude responde:

```
Entendi! Vou criar:
- Página pública para agendamento
- Painel do profissional
- Painel administrativo
- Supabase como banco de dados

Estrutura:
/app/agendamento - página pública
/app/profissional - painel do profissional
/app/admin - painel admin
/components - componentes
/lib - configuração Supabase

Posso começar?
```

Maria:

```
Sim, comece criando a estrutura base.
```

### Noite: Estrutura Criada

Claude cria o projeto Next.js:

```
✓ Projeto Next.js criado
✓ Tailwind CSS configurado
✓ shadcn/ui instalado
✓ Estrutura de pastas criada
✓ Supabase configurado

Rode: npm run dev
```

Maria testa:

```bash
npm run dev
```

Abre http://localhost:3000 - funciona!

**Fim do Dia 1:** Estrutura pronta, 1 hora de trabalho.

---

## Dia 2: Funcionalidades Principais

### Manhã: Página de Agendamento

Maria:

```
Perfeito! Agora crie a página de agendamento onde o cliente:
1. Vê os profissionais em cards
2. Clica no profissional
3. Vê calendário mensal com horários
4. Clica no horário
5. Preenche formulário (nome, telefone)
6. Confirma
```

Claude:

```
Vou criar a página de agendamento com:
- Cards dos profissionais
- Calendário interativo
- Formulário modal

[cria componentes e páginas]
```

Maria testa:

```bash
npm run dev
```

Funciona, mas Maria quer ajustes:

```
Está bom, mas preciso:
1. Cores rosa (#FF69B4) e roxo (#9370DB)
2. Cards maiores com foto
3. Calendário mostre horários de 30 em 30 min
```

Claude ajusta:

```
✓ Cores aplicadas
✓ Cards redimensionados
✓ Calendário com intervalos de 30 min
```

Maria:

```
Perfeito! Continue com o painel do profissional.
```

### Tarde: Painel do Profissional

Maria:

```
Crie o painel do profissional onde:
1. Profissional faz login (simplificado: só digita nome)
2. Vê calendário com seus agendamentos
3. Cada agendamento mostra: cliente, serviço, horário, status
```

Claude:

```
Vou criar:
- Página /profissional
- Login simplificado
- Calendário com agendamentos filtrados

[cria componentes]
```

Maria testa - está funcionando!

### Noite: Painel Administrativo

Maria:

```
Agora crie o painel administrativo para mim:
1. Vejo TODOS os agendamentos
2. Posso cancelar agendamentos
3. Vejo métricas: agendamentos por dia, por profissional
```

Claude:

```
Vou criar:
- Página /admin
- Tabela com todos os agendamentos
- Botão de cancelar
- Cards de métricas

[cria componentes]
```

Maria testa - está perfeito!

**Fim do Dia 2:** Funcionalidades principais prontas, 3 horas de trabalho.

---

## Dia 3: Refinamentos e Deploy

### Manhã: Supabase

Maria cria projeto no Supabase:

1. Acessa https://supabase.com
2. Cria projeto "agenda-beauty"
3. Cria tabelas via Table Editor:
   - `agendamentos`
   - `profissionais`
   - `servicos`
4. Copia URL e Anon Key

Maria configura no projeto:

```
Claude, configure o Supabase com:
URL: https://xyz.supabase.co
Anon Key: eyJhbGc...

Crie as tabelas:
- agendamentos (id, cliente_nome, cliente_telefone, profissional_id, servico, data_hora, status)
- profissionais (id, nome, especialidade, ativo)
- servicos (id, nome, duracao_minutos, preco, ativo)
```

Claude:

```
✓ Supabase configurado
✓ Tipos TypeScript criados
✓ Funções de CRUD criadas
```

### Tarde: Testes Finais

Maria testa tudo:

1. **Cenário 1:** Cliente agenda ✓
2. **Cenário 2:** Profissional vê agendamento ✓
3. **Cenário 3:** Maria cancela agendamento ✓
4. **Cenário 4:** Maria vê métricas ✓

Encontra um bug:

```
Quando cancelo agendamento, some da lista mas volta se recarregar a página.
```

Claude:

```
Corrigindo! Faltou atualizar no Supabase.

✓ Bug corrigido
```

Maria retesta - agora funciona!

### Noite: GitHub e Vercel

Maria envia para o GitHub:

```bash
git init
git add .
git commit -m "Agenda Beauty MVP completo"
git remote add origin https://github.com/mariasilva/agenda-beauty.git
git push -u origin main
```

Maria publica no Vercel:

1. Acessa https://vercel.com
2. Importa repositório `agenda-beauty`
3. Configura variáveis de ambiente:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Clica em "Deploy"

3 minutos depois...

**Site no ar:** https://agenda-beauty.vercel.app

**Fim do Dia 3:** Sistema publicado e funcionando!

---

## Resultado Final

### O Que Maria Tem Agora

**Funcionalidades:**
- ✓ Clientes agendam online
- ✓ Profissionais veem sua agenda
- ✓ Maria administra tudo
- ✓ Sem ligações desnecessárias
- ✓ Sem conflitos de horário

**Tempo Total:**
- 3 dias
- ~5 horas de trabalho real
- Zero conhecimento técnico prévio

**Custo:**
- R$ 0 (plano gratuito Vercel + Supabase)

**Economia de Tempo:**
- 2 horas por dia
- 40 horas por mês
- Maria foca no negócio, não em agendamentos

---

## Lições Aprendidas

### 1. PRD É Fundamental

Maria teve um PRD detalhado → resultado foi exatamente o que ela queria.

### 2. Vibecoding Funciona

Maria não escreveu uma linha de código. Só descreveu o que queria.

### 3. Testes Frequentes

Maria testou cada funcionalidade → erros corrigidos rápido → menos retrabalho.

### 4. Iteração é Chave

Primeira versão não foi perfeita → Maria deu feedback → Claude ajustou → resultado melhorou.

### 5. MVP Depois Melhora

Maria focou no essencial (MVP) → funcionou em 3 dias → melhorias virão depois.

---

## Timeline Resumida

| Dia | O Que Foi Feito | Tempo |
|-----|----------------|-------|
| **Dia 1** | PRD + Estrutura base | 1 hora |
| **Dia 2** | Funcionalidades principais | 3 horas |
| **Dia 3** | Supabase + testes + deploy | 1 hora |
| **TOTAL** | Sistema completo | 5 horas |

---

## Comandos Usados por Maria

### Início

```bash
cd ~/projetos/agenda-beauty
claude
```

### Durante Desenvolvimento

```bash
npm run dev        # Testar
npm install        # Instalar pacotes
git add .          # Preparar commit
git commit -m "..." # Commit
git push           # Enviar para GitHub
```

### Deploy

```bash
# (Apenas configurou no Vercel via site)
```

---

## Prompts Usados por Maria

### Início

```
Claude, vou criar o Agenda Beauty, sistema de agendamento...

[PRD completo]

Use Next.js 15, TypeScript, Tailwind CSS e shadcn/ui.
```

### Durante Desenvolvimento

```
Perfeito! Agora crie a página de agendamento onde...
```

```
Está bom, mas preciso:
1. Cores rosa e roxo
2. Cards maiores
3. Calendário de 30 em 30 min
```

```
Encontrei um bug: quando cancelo agendamento, some da lista mas volta se recarregar.
```

### Supabase

```
Claude, configure o Supabase...
Crie as tabelas...
```

---

## Próximo Passo

Agora que você viu um exemplo completo, vamos aprender dicas avançadas.

**→ [Módulo 7: Dicas e Truques Avançados](./modulo-07.md)**

---

## Resumo do Módulo 6

**Você acompanhou:**
- [x] Projeto real do início ao fim
- [x] PRD → Vibecoding → Testes → Deploy
- [x] 3 dias, 5 horas, zero código
- [x] Resultado funcional publicado

**Próximo:** Dicas avançadas para melhorar seu processo
