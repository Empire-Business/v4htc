# Módulo 3: Vibecoding - Construindo com a IA

---

## Objetivo deste Módulo

Aprender o **método de Vibecoding** - você fala o que quer, a IA constrói. Sem escrever código, sem entender de programação.

---

## O Que é Vibecoding

**Vibecoding** = Programar na vibe = Você descreve, a IA constrói.

### Método Tradicional vs Vibecoding

**MÉTODO TRADICIONAL:**
```
Você → Estuda meses → Escreve código → Testa → Corrige → Testa → ...
Tempo: 6-12 meses
```

**VIBECODING:**
```
Você → Descreve o que quer → IA constrói → Você testa → Você pede ajustes
Tempo: 1-3 dias
```

### A Mudança de Mentalidade

**ANTES (programador):**
- Preciso saber a sintaxe
- Preciso entender de arquitetura
- Preciso debugar código
- Leva meses

**AGORA (Vibecoding):**
- Preciso saber descrever o que quero
- A IA escreve o código
- A IA corrige os erros
- Leva dias

---

## Preparação para Vibecoding

### Checklist Antes de Começar

**Seu ambiente:**
- [ ] Claude Code instalado ([tutorial de instalação](../instalacao-claude-code/INDEX.md))
- [ ] Terminal aberto na pasta do projeto
- [ ] PRD completo e salvo ([Módulo 2](./modulo-02.md))

**Sua mente:**
- [ ] Entendeu que vai "conversar com a IA", não programar
- [ ] Preparado para testar o que a IA construir
- [ ] Paciente para refinar o resultado

---

## O Prompt Mágico

Este prompt inicia o processo de Vibecoding:

```
Claude, vou construir um aplicativo para meu negócio.

Aqui está meu PRD (Product Requirements Document):

[COLE SEU PRD AQUI]

Por favor, crie este aplicativo para mim.

Use:
- Next.js 15 com App Router
- TypeScript
- Tailwind CSS
- shadcn/ui para componentes

Siga exatamente o PRD. Antes de começar a programar, me confirme que entendeu o PRD e me diga qual será a estrutura do projeto.
```

### Por Que Este Prompt Funciona

1. **Contexto claro:** Diz que é para negócio
2. **PRD completo:** Tudo o que a IA precisa saber
3. **Tecnologia específica:** Next.js + shadcn/ui (combinação moderna e simples)
4. **Confirmação:** A IA confirma antes de começar

---

## Fluxo de Vibecoding Passo a Passo

### FASE 1: Iniciação

```
Você: [Prompt Mágico]
Claude: Confirmo que entendi. Vou criar [estrutura]...
Você: Perfeito, pode começar.
Claude: [Começa a criar arquivos]
```

**O que acontece:** A IA cria a estrutura inicial do projeto.

### FASE 2: Construção Iterativa

A IA vai construir funcionalidade por funcionalidade:

```
Claude: Vou começar criando a estrutura de pastas...
[cria arquivos]

Claude: Agora vou criar a primeira funcionalidade...
[cria mais arquivos]

Claude: Funcionalidade X criada. Posso continuar?
Você: Sim, continue.
```

### FASE 3: Teste e Ajuste

Quando a IA terminar uma versão funcional:

```
Claude: App criado! Rode npm run dev para testar.
Você: [Roda o comando, testa]

Se estiver bom:
Você: Perfeito! Continue com a próxima funcionalidade.

Se não estiver bom:
Você: Não está exatamente como eu queria. Preciso que [descrição do ajuste].
```

---

## Comandos Úteis durante Vibecoding

### /run - Executar Comandos

Quando a IA pedir para testar:

```
/run npm run dev
```

Isso inicia o servidor de desenvolvimento.

### Ctrl+C - Parar Servidor

Quando precisar parar o servidor que está rodando.

### /run npm install - Instalar Dependências

Se der erro de pacote faltando:

```
/run npm install [nome-do-pacote]
```

---

## Exemplo Real: Vibecoding na Prática

**Cenário:** Maria vai criar o Agenda Beauty

### Passo 1: Maria Prepara o PRD

Maria tem seu PRD pronto (do Módulo 2).

### Passo 2: Maria Inicia o Claude Code

```bash
cd ~/projetos/agenda-beauty
claude
```

### Passo 3: Maria Envia o Prompt Mágico

```
Claude, vou construir o Agenda Beauty, sistema de agendamento para salão de beleza.

Aqui está meu PRD:

[PRD completo do Agenda Beauty]

Use Next.js 15, TypeScript, Tailwind CSS e shadcn/ui.

Confirme que entendeu antes de começar.
```

### Passo 4: Claude Confirma

```
Perfeito! Entendi seu PRD.

Vou criar uma aplicação Next.js com:
- Página pública para agendamento
- Painel do profissional
- Painel administrativo
- Banco de dados via Supabase

Estrutura:
/app
  /agendamento - página pública
  /profissional - painel do profissional
  /admin - painel administrativo
/components - componentes reutilizáveis
/lib - utilitários e configuração do Supabase

Posso começar?
```

### Passo 5: Maria Concorda

```
Sim, pode começar.
```

### Passo 6: Claude Constrói

```
Vou começar criando o projeto Next.js...

[cria arquivos iniciais]

Agora vou criar a página de agendamento...

[cria componentes da página]

Para testar, rode: npm run dev
```

### Passo 7: Maria Testa

Maria roda o comando:

```
/run npm run dev
```

Abre http://localhost:3000 no navegador.

### Passo 8: Feedback

Se estiver bom:

```
Está ótimo! Continue com o painel do profissional.
```

Se precisar ajustar:

```
A página está boa, mas preciso que:
1. Os horários sejam em intervalos de 30 min
2. Apareça o nome da profissional em cima de cada horário
3. Quando clicar, mostre um formulário simples
```

---

## Prompts de Ajuste Comuns

### Mudar Visual

```
Preciso que a página fique mais visual. Adicione:
- Cores da minha marca (rosa #FF69B4, roxo #9370DB)
- Mais espaçamento entre elementos
- Cards com sombra suave
- Fonte mais moderna
```

### Adicionar Funcionalidade

```
Adicione uma nova funcionalidade:
- Botão "Exportar para Excel" na tabela de agendamentos
- Ao clicar, baixa um arquivo .xlsx com os dados filtrados
```

### Corrigir Comportamento

```
Não está funcionando como esperado:
- Quando clico em agendar, não aparece mensagem de sucesso
- Preciso que mostre um modal verde com "Agendamento confirmado!"
- E limpe o formulário
```

### Simplificar

```
Está muito complexo. Simplifique:
- Remova os filtros avançados
- Mantenha só filtro por data
- Mostre tudo em uma lista simples
```

---

## Erros Comuns e Como Resolver

### ERRO 1: "npm run dev não funciona"

**Solução:**
```
/run npm install
/run npm run dev
```

Se ainda não funcionar:
```
/run rm -rf node_modules package-lock.json
/run npm install
/run npm run dev
```

### ERRO 2: A IA criou algo completamente diferente

**Causa:** PRD não estava claro o suficiente.

**Solução:**
```
Pare. O que você criou não é o que eu preciso.

Vou ser mais específico:
[Descreva com detalhes o que precisa]
```

**Prevenção:** Revise seu PRD antes de começar.

### ERRO 3: A IA para no meio do processo

**Causa:** Limite de tokens ou problema técnico.

**Solução:**
```
Continue de onde parou. Você estava criando [descreva o que estava sendo criado].
```

### ERRO 4: Código com erro

**Causa:** Normal em desenvolvimento.

**Solução:**
```
Deu erro: [cole o erro]

Por favor, corrija.
```

A IA vai corrigir sozinha.

---

## Dicas de Ouro para Vibecoding

### 1. Seja Específico

❌ **Ruim:**
```
Preciso que fique bonito
```

✅ **Bom:**
```
Use cores pastel (rosa #FF69B4, roxo #9370DB)
Adicione sombra suave nos cards
Use espaçamento de 1rem entre elementos
```

### 2. Teste Frequentemente

Não espere tudo ficar pronto para testar.

```
A cada funcionalidade criada:
/run npm run dev
[Testa]
[Dá feedback]
```

### 3. Uma Coisa por Vez

Não peça para criar tudo de uma vez.

```
✓ Comece com a estrutura básica
✓ Depois a primeira funcionalidade
✓ Depois a segunda
✓ E assim vai
```

### 4. Salve Versões

Quando algo funcionar bem:

```
/run git add .
/run git commit -m "Funcionalidade X funcionando"
```

[Você aprenderá git no Módulo 4]

### 5. Peça Confirmação

Quando a IA sugerir algo complexo:

```
Pare. Antes de fazer isso, me explique:
- O que vai fazer
- Por que dessa forma
- Se tem alternativa mais simples
```

---

## Checklist: Vibecoding Bem-Sucedido

Durante o processo:

**Início:**
- [ ] PRD completo pronto
- [ ] Prompt Mágico enviado
- [ ] IA confirmou entendimento

**Meio:**
- [ ] Testou cada funcionalidade
- [ ] Deu feedback específico
- [ ] Não acumulou muitas mudanças

**Fim:**
- [ ] App funcionando como esperado
- [ ] Testou todas as funcionalidades
- [ ] Sem erros visíveis
- [ ] Próximo para deploy

---

## Exemplo Completo de Conversa

```
VOCÊ: [Prompt Mágico com PRD do Agenda Beauty]

CLAUDE: Entendi! Vou criar o Agenda Beauty com:
- Página pública de agendamento
- Painel do profissional
- Painel admin
- Supabase como banco de dados

Estrutura:
/app/agendamento - página pública
/app/profissional/[id] - painel do profissional
/app/admin - painel administrativo

Posso começar?

VOCÊ: Sim, comece criando a estrutura base.

CLAUDE: [Cria projeto Next.js, instala dependências]

Estrutura criada! Rode npm run dev para testar.

VOCÊ: /run npm run dev

[Abre localhost:3000 - funciona!]

VOCÊ: Perfeito. Agora crie a página de agendamento.

CLAUDE: [Cria página de agendamento com calendário]

Página criada! Teste e me diga se está como esperado.

VOCÊ: Está bom, mas preciso de ajustes:
1. Mostre os profissionais em cards com foto
2. O calendário deve ser mensal, não semanal
3. Use cores rosa e roxo

CLAUDE: [Faz os ajustes]

Ajustes feitos! Teste novamente.

VOCÊ: /run npm run dev

[Testa - está perfeito!]

VOCÊ: Perfeito! Continue com o painel do profissional.

CLAUDE: [Cria painel do profissional]

[Continua o processo...]
```

---

## Próximo Passo

Com seu app funcionando localmente, vamos salvar no GitHub.

**→ [Módulo 4: Salvando no GitHub](./modulo-04.md)**

---

## Resumo do Módulo 3

**Você aprendeu:**
- [x] O que é Vibecoding
- [x] O Prompt Mágico
- [x] Fluxo passo a passo
- [x] Comandos úteis
- [x] Como dar feedback à IA
- [x] Erros comuns e soluções

**Próximo:** Salvar código no GitHub
