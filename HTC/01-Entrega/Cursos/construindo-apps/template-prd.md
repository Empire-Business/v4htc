# Template de PRD - Product Requirements Document
## Para Construção de Apps com IA

---

# PRD: [Nome do Seu Projeto]

## 1. O QUE É

[Descreva seu projeto em 1-2 frases simples]

Exemplo:
Sistema online de agendamento para salão de beleze onde clientes veem horários disponíveis e agendam serviços sem precisar ligar.

---

## 2. PARA QUEM

**Usuários:**
- [Tipo de usuário 1]: [descrição]
- [Tipo de usuário 2]: [descrição]
- [Tipo de usuário 3]: [descrição]

**Quantidade estimada:**
- [Usuário 1]: [aproximada]
- [Usuário 2]: [aproximada]

Exemplo:
- Clientes do salão: público geral, ~50 por semana
- Profissionais: 5 cabeleireiros/manicures
- Administrador: dona do salão, 1 pessoa

---

## 3. O QUE FAZ (Funcionalidades)

### Funcionalidade 1: [Nome]

**O que faz:**
[Descrição clara]

**Como funciona:**
1. [Passo 1]
2. [Passo 2]
3. [Passo 3]

Exemplo:
**O que faz:** Cliente visualiza profissionais e horários disponíveis

**Como funciona:**
1. Cliente acessa o site
2. Vê cards com cada profissional
3. Clica no profissional desejado
4. Vê calendário mensal com horários livres
5. Horários ocupados aparecem bloqueados

---

### Funcionalidade 2: [Nome]

**O que faz:**
[Descrição clara]

**Como funciona:**
1. [Passo 1]
2. [Passo 2]
3. [Passo 3]

[Repita para cada funcionalidade principal]

---

### Funcionalidade 3: [Nome]

**O que faz:**
[Descrição clara]

**Como funciona:**
1. [Passo 1]
2. [Passo 2]
3. [Passo 3]

---

## 4. COMO SE PARECE (Referências Visuais)

**Estilo:**
- [ ] Moderno
- [ ] Clean
- [ ] Corporativo
- [ ] Lúdico
- [ ] Outro: ______

**Cores:**
- Primária: #[COR HEX] ou [descrição]
- Secundária: #[COR HEX] ou [descrição]
- Fundo: #[COR HEX] ou [descrição]

**Referências:**
- Link 1: [URL de exemplo]
- Link 2: [URL de exemplo]
- Descrição: [descrição visual]

**Mobile-friendly:**
- [ ] Sim, deve funcionar bem em celular
- [ ] Não, foco em desktop

Exemplo:
**Estilo:** Clean, moderno, cores pastel
**Cores:** Rosa #FF69B4, roxo #9370DB, fundo branco
**Referências:** https://www.nalonal.com.br/agendamento
**Mobile-friendly:** Sim, a maioria acessa pelo celular

---

## 5. DADOS (O que vai guardar)

Para cada dado que o sistema precisa guardar, liste:

**Tabela: [nome da tabela]**

| Campo | Tipo | Descrição | Obrigatório? |
|-------|------|-----------|--------------|
| [nome1] | [tipo] | [descrição] | [sim/não] |
| [nome2] | [tipo] | [descrição] | [sim/não] |
| [nome3] | [tipo] | [descrição] | [sim/não] |

**Tipos comuns:**
- `text`: texto curto (nome, email)
- `text area`: texto longo (descrição)
- `number`: número
- `timestamp`: data/hora
- `boolean`: sim/não (true/false)

Exemplo:
**Tabela: agendamentos**

| Campo | Tipo | Descrição | Obrigatório? |
|-------|------|-----------|--------------|
| id | number | Identificador único | sim |
| cliente_nome | text | Nome do cliente | sim |
| cliente_telefone | text | Telefone para contato | sim |
| profissional_id | number | ID do profissional | sim |
| servico | text | Tipo de serviço | sim |
| data_hora | timestamp | Quando será o atendimento | sim |
| status | text | agendado/concluido/cancelado | sim |
| criado_em | timestamp | Quando criou o registro | sim |

---

**Tabela: [nome da tabela 2]**

[Repita para cada tabela]

---

## 6. REGRAS DE NEGÓCIO

Regras específicas do seu negócio:

**Regra 1: [Nome]**
[Descrição]

Exemplo:
**Horário de funcionamento:**
- Segunda a Sexta: 9h às 19h
- Sábado: 9h às 14h
- Domingo: fechado

**Duração dos serviços:**
- Corte: 1 hora
- Coloração: 2 horas
- Manicure: 30 minutos

**Cancelamento:**
- Só admin pode cancelar na versão 1
- Cliente deve ligar para cancelar

---

**Regra 2: [Nome]**
[Descrição]

---

## 7. O QUE NÃO PRECISA (Para o MVP)

Funcionalidades que ficam para depois:

**Versão 2:**
- [ ] [Funcionalidade 1]
- [ ] [Funcionalidade 2]
- [ ] [Funcionalidade 3]

**Versão 3:**
- [ ] [Funcionalidade 1]
- [ ] [Funcionalidade 2]

Exemplo:
**Versão 2:**
- [ ] Envio de WhatsApp confirmando agendamento
- [ ] Pagamento online na hora de agendar
- [ ] Sistema de avaliações
- [ ] Login do cliente (para poder cancelar)

**Versão 3:**
- [ ] App mobile
- [ ] Integração com Google Agenda

---

## 8. INTEGRAÇÕES (Opcional)

**Sistemas que precisa integrar:**
- [ ] [Sistema 1]: [descrição]
- [ ] [Sistema 2]: [descrição]

Exemplo:
- [ ] WhatsApp API: enviar confirmações
- [ ] Gateway de pagamento: Stripe/PayPal

---

## 9. AUTENTICAÇÃO (Quem pode acessar)

**Público:** Qualquer um pode acessar sem login

**Requer login:** Precisa criar conta/entrar

**Níveis de acesso:**
- [ ] Público (sem login)
- [ ] Usuário comum
- [ ] Profissional
- [ ] Administrador

Exemplo:
- Página de agendamento: Público (qualquer um acessa)
- Painel do profissional: Requer login simplificado (digita nome)
- Painel admin: Requer login seguro (email + senha)

---

## 10. PRIORIDADE DAS FUNCIONIDADES

O que é essencial para o MVP:

**FAZER PRIMEIRO (Essencial para MVP):**
1. [Funcionalidade 1]
2. [Funcionalidade 2]
3. [Funcionalidade 3]

**FAZER DEPOIS (Importante mas não urgente):**
1. [Funcionalidade 1]
2. [Funcionalidade 2]

**FAZIR MAIS TARDE (Nice to have):**
1. [Funcionalidade 1]
2. [Funcionalidade 2]

---

## Checklist: PRD Completo

Antes de passar para a construção, verifique:

**Conteúdo:**
- [ ] Nome do projeto claro
- [ ] Descrição em 1-2 frases
- [ ] Para quem é (usuários)
- [ ] Funcionalidades listadas
- [ ] Como funciona cada funcionalidade (passo a passo)
- [ ] Referências visuais (links ou descrição)
- [ ] Dados que o sistema vai guardar (tabelas)
- [ ] Regras de negócio
- [ ] O que NÃO precisa fazer agora (MVP)

**Clareza:**
- [ ] Alguém que não conhece seu negócio entende?
- [ ] Não ambíguo (não dá para interpretar de outra forma)
- [ ] Específico (não genérico)

**Viabilidade:**
- [ ] Dá para fazer em 1-2 semanas?
- [ ] Usa tecnologias simples?
- [ ] Não requer nada muito complexo?

---

## Seu PRD Está Pronto!

Se você marcou tudo no checklist acima, seu PRD está pronto.

**Próximo passo:** Use este PRD no Claude Code (Módulo 3) ou no Lovable (Módulo 9).

---

**Dica:** Salve este arquivo como `prd-seu-projeto.md` e mantenha acessível durante o desenvolvimento.
