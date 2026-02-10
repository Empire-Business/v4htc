# Módulo 2: Criando o PRD

---

## Objetivo deste Módulo

Aprender a criar um PRD (Product Requirements Document) - um documento simples que descreve **exatamente o que você quer** que o seu sistema faça.

**O PRD é a base de tudo.** Um bom PRD = um bom sistema.

---

## O Que é PRD (De Forma Simples)

**PRD** = Product Requirements Document

Tradução simples: **Documento de Requisitos do Produto**

Na prática: **Um texto que diz o que o sistema deve fazer.**

### Por Que o PRD é Importante?

**SEM PRD:**
- Você: "Quero um sistema de vendas"
- IA: Cria algo genérico que não serve
- Você: "Não é isso que eu queria..."
- IA: Refaz
- Você: "Ainda não é isso..."
- **Resultado:** Perda de tempo e frustração

**COM PRD:**
- Você: Entrega um PRD detalhado
- IA: Segue o documento exatamente
- **Resultado:** Sistema funcional na primeira tentativa

---

## Analogia: PRD é Como Uma Receita

Se você pede a um chef: "Faça algo gostoso"

Você vai receber algo... mas não necessariamente o que você queria.

Se você entrega uma RECEITA detalhada, o chef segue exatamente e você recebe o prato que imaginou.

**PRD é a receita do seu sistema.**

---

## Estrutura do PRD Simples

Um PRD básico tem 5 partes:

### 1. O Que É
Uma frase explicando o projeto.

### 2. Para Quem
Quem vai usar o sistema.

### 3. O Que Faz (Funcionalidades)
Lista do que o sistema precisa fazer.

### 4. Como Se Parece (Referências)
Links ou exemplos visuais.

### 5. O Que Não Precisa
O que fica para depois (MVP = Minimum Viable Product).

---

## Template de PRD

[Versão completa disponível em template-prd.md](./template-prd.md)

### Template Simplificado:

```markdown
# PRD: [Nome do Projeto]

## 1. O QUE É
[Descrição em 1-2 frases]

## 2. PARA QUEM
- Quem vai usar: [descreva]
- Quantos usuários: [aproximada]

## 3. O QUE FAZ (Funcionalidades)

### Funcionalidade 1: [Nome]
- O que faz: [descrição]
- Como funciona: [passo a passo]

### Funcionalidade 2: [Nome]
[...]

## 4. COMO SE PARECE
- Referências: [links, screenshots]
- Estilo: [moderno, clean, corporativo, etc]

## 5. DADOS (O que vai guardar)
- Dado 1: [tipo]
- Dado 2: [tipo]
[...]

## 6. O QUE NÃO PRECISA (Para o MVP)
- [Coisas que ficam para depois]
```

---

## PRD Exemplo Completo: Agenda Beauty

Abaixo, um PRD completo para você usar como referência:

```markdown
# PRD: Agenda Beauty

## 1. O QUE É
Sistema online de agendamento para salão de beleza onde clientes veem horários disponíveis e agendam serviços sem precisar ligar.

## 2. PARA QUEM
**Usuários:**
- Clientes do salão (público geral)
- Profissionais do salão (cabeleireiros, manicures, etc)
- Dono do salão (administração)

**Quantidade:**
- ~50 clientes por semana
- 5 profissionais
- 1 administrador

## 3. O QUE FAZ

### Funcionalidade 1: Visualização de Horários
- O que faz: Cliente vê todos os profissionais e horários disponíveis
- Como funciona:
  1. Cliente acessa o site
  2. Vê lista de profissionais
  3. Clica no profissional desejado
  4. Vê calendário com horários livres
  5. Horários ocupados aparecem bloqueados

### Funcionalidade 2: Agendamento
- O que faz: Cliente agenda um horário
- Como funciona:
  1. Cliente escolhe horário livre
  2. Seleciona o serviço (corte, coloração, manicure, etc)
  3. Preenche nome e telefone
  4. Confirma agendamento
  5. Recebe confirmação na tela

### Funcionalidade 3: Painel do Profissional
- O que faz: Profissional vê seus agendamentos
- Como funciona:
  1. Profissional faz login
  2. Vê calendário com seus agendamentos
  3. Vê detalhes de cada agendamento (cliente, serviço, horário)

### Funcionalidade 4: Painel Administrativo
- O que faz: Dono do salão gerencia tudo
- Como funciona:
  1. Admin faz login
  2. Vê todos os agendamentos de todos os profissionais
  3. Pode cancelar agendamentos
  4. Pode adicionar profissionais
  5. Pode ver métricas (quantos agendamentos por dia, por profissional)

## 4. COMO SE PARECE
- **Referências:**
  - https://www.nalonal.com.br/agendamento (visual)
  - App do iFood (simplicidade)
- **Estilo:** Clean, moderno, cores pastel (rosa, roxo), mobile-friendly

## 5. DADOS (O que vai guardar)

**Tabela: agendamentos**
- id (número único)
- cliente_nome (texto)
- cliente_telefone (texto)
- profissional_id (número)
- servico (texto)
- data_hora (data/hora)
- status (texto: "agendado", "cancelado", "concluído")
- criado_em (data/hora)

**Tabela: profissionais**
- id (número único)
- nome (texto)
- especialidade (texto)
- ativo (sim/não)

**Tabela: servicos**
- id (número único)
- nome (texto)
- duracao_minutos (número)
- preco (numero decimal)
- ativo (sim/não)

## 6. O QUE NÃO PRECISA (Para o MVP)

**Ficam para a versão 2:**
- [ ] Envio de WhatsApp confirmando agendamento
- [ ] Pagamento online na hora de agendar
- [ ] Sistema de avaliações
- [ ] Histórico do cliente (últimos agendamentos)
- [ ] Notas sobre o cliente (preferências, alergias a produtos)
- [ ] Fidelidade (pontuação)
- [ ] Login do cliente (para poder cancelar/agendar sozinho depois)

**Ficam para a versão 3:**
- [ ] App mobile
- [ ] Integração com Google Agenda
- [ ] Sistema de promoções

## 7. REGRAS DE NEGÓCIO

**Horários:**
- Abre: 9h
- Fecha: 19h
- Almoço: 12h-13h (todos bloqueados)
- Domingo: fechado
- Segunda: apenas 2 profissionais

**Durações:**
- Corte: 1 hora
- Coloração: 2 horas
- Manicure: 30 minutos
- Pedicure: 45 minutos

**Cancelamento:**
- Só admin pode cancelar na versão 1
- Cliente precisa ligar para cancelar
```

---

## Checklist: Seu PRD Está Pronto?

Antes de passar para o próximo módulo, verifique:

**Conteúdo:**
- [ ] Nome do projeto claro
- [ ] Descrição em 1-2 frases
- [ ] Para quem é (usuários)
- [ ] Funcionalidades listadas
- [ ] Como funciona cada funcionalidade (passo a passo)
- [ ] Referências visuais (links ou descrição)
- [ ] Dados que o sistema vai guardar
- [ ] O que NÃO precisa fazer agora (MVP)

**Clareza:**
- [ ] Alguém que não conhece seu negócio entende?
- [ ] Não ambíguo (não dá para interpretar de outra forma)
- [ ] Específico (não genérico)

**Viabilidade:**
- [ ] Dá para fazer em 1 semana?
- [ ] Usa tecnologias simples?
- [ ] Não requer nada muito complexo?

---

## Erros Comuns no PRD

### ERRO 1: Muito Genérico

❌ **Ruim:**
```
Quero um sistema de vendas
```

✅ **Bom:**
```
Sistema para cadastrar vendas com:
- Data, cliente, valor, forma de pagamento
- Lista de produtos vendidos
- Dashboard com vendas do dia
```

### ERRO 2: Sem Como Funciona

❌ **Ruim:**
```
Funcionalidade: Agendar
```

✅ **Bom:**
```
Funcionalidade: Agendar
- Cliente clica em "Novo Agendamento"
- Escolhe data em um calendário
- Escolhe horário (só aparecem horários livres)
- Preenche formulário (nome, telefone)
- Clica em "Confirmar"
- Vê mensagem de sucesso
```

### ERRO 3: Sem Limite (Scope Creep)

❌ **Ruim:**
```
Funcionalidades:
- Agendamento
- Dashboard
- Pagamento online
- Avaliações
- App mobile
- Chat com suporte
- Integração com 5 sistemas
```

✅ **Bom:**
```
Funcionalidades MVP:
- Agendamento
- Dashboard básico

Para depois:
- Pagamento online
- Avaliações
- App mobile
```

### ERRO 4: Sem Dados Definidos

❌ **Ruim:**
```
O sistema vai guardar dados dos agendamentos
```

✅ **Bom:**
```
Tabela: agendamentos
- id (número)
- cliente_nome (texto)
- cliente_telefone (texto)
- data_hora (data/hora)
- servico (texto)
- status (texto)
```

---

## Exercício Prático: Crie Seu PRD

Agora é sua vez.

1. **Abra o template:** [template-prd.md](./template-prd.md)
2. **Salve uma cópia** para o seu projeto
3. **Preencha todas as seções**
4. **Revise usando o checklist** acima
5. **Se passou no checklist,** pronto para próximo módulo!

---

## Exemplos de PRDs por Tipo de Projeto

### Landing Page Simples

```markdown
# PRD: Landing Page Consultoria XYZ

## O QUE É
Página única para captura de leads interessados em consultoria de negócios.

## PARA QUEM
- Empresários buscando consultoria
- ~100 visitantes por dia esperados

## O QUE FAZ
1. Hero com proposta de valor
2. Seção de benefícios (3 cards)
3. Seção de depoimentos (3 depoimentos)
4. Formulário: nome, email, telefone, empresa
5. Ao enviar: redireciona para página de obrigado

## COMO SE PARECE
- Estilo: Corporativo, azul e branco
- Referência: landingpage.com/exemplo

## DADOS
- Nome (texto)
- Email (texto)
- Telefone (texto)
- Empresa (texto)
- Enviado_em (data/hora)
```

### Dashboard de Vendas

```markdown
# PRD: Dashboard de Vendas

## O QUE É
Painel para visualizar vendas em tempo real.

## PARA QUEM
- Dono da empresa
- Gerente de vendas
- 2-3 usuários

## O QUE FAZ
1. Cards no topo: vendas hoje, vendas mês, ticket médio
2. Gráfico: vendas últimos 7 dias
3. Tabela: últimas 10 vendas
4. Filtros: data, produto, vendedor

## COMO SE PARECE
- Estilo: Clean, dashboard moderno
- Referência: lookerstudio.com (visual)

## DADOS (já existe)
- Vendas: id, data, valor, produto, vendedor
```

### CRM Simples

```markdown
# PRD: CRM de Vendas

## O QUE É
Sistema para gerenciar pipeline de vendas.

## PARA QUEM
- Equipe de vendas (5 pessoas)
- Gerente comercial

## O QUE FAZ
1. Cadastro de lead: nome, email, telefone, empresa
2. Pipeline visual (kanban): Novo, Contatando, Proposta, Negociação, Fechado
3. Mover lead entre colunas (drag & drop)
4. Adicionar notas ao lead
5. Ver histórico do lead

## COMO SE PARECE
- Estilo: Como Trello/Notion
- Referência: trello.com (pipeline visual)

## DADOS
- Leads: id, nome, email, telefone, empresa, estagio, criado_em
- Notas: id, lead_id, texto, criado_em
```

---

## Próximo Passo

Com seu PRD pronto, vamos aprender o método de **Vibecoding** - como fazer a IA construir seu sistema.

**→ [Módulo 3: Vibecoding - Construindo com a IA](./modulo-03.md)**

---

## Resumo do Módulo 2

**Você aprendeu:**
- [x] O que é PRD e por que é importante
- [x] Estrutura básica do PRD
- [x] Como escrever um PRD claro
- [x] Erros comuns para evitar
- [x] Criou seu PRD (exercício prático)

**Próximo:** Usar o PRD no processo de Vibecoding
