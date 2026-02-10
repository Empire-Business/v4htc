# Módulo 9: Caminho 2 - Construindo com Lovable

---

## Objetivo deste Módulo

Conhecer o **Lovable** - uma alternativa mais simples ao Claude Code, onde você constrói apps pelo navegador, sem terminal.

---

## Lovable vs Claude Code

| Aspecto | Claude Code | Lovable |
|---------|-------------|---------|
| **Onde usa** | Terminal | Navegador |
| **Onde fica código** | Seu computador | Nuvem (Lovable) |
| **Curva de aprendizado** | Média | Baixa |
| **Controle** | Alto | Médio |
| **Integração Supabase** | Manual | Automática |
| **Deploy** | Vercel (manual) | Lovable (automático) |
| **Custo** | Gratuito (+ GLM) | Plano gratuito |
| **Ideal para** | Quer mergulhar | Quer rapidez |

---

## O Que é Lovable

**Lovable** = Construtor de apps por chat = Você conversa, o Lovable constrói.

### Como Funciona

1. Você descreve o que quer no chat
2. Lovable gera o código automaticamente
3. Você vê o preview em tempo real
4. Ajusta por chat até ficar perfeito

### Por Que Usar Lovable

- **Mais simples:** Nada de terminal
- **Integração Supabase:** 1 clique
- **Deploy automático:** Já vem com hospedagem
- **Visual:** Preview em tempo real
- **Colaboração:** Convide sua equipe

---

## Passo 1: Criar Conta no Lovable

1. Acesse: https://lovable.dev
2. Clique em "Get Started"
3. Entre com Google ou GitHub
4. Escolha o plano gratuito

**Tempo estimado:** 1 minuto

---

## Passo 2: Criar Seu Primeiro Projeto

### Opção 1: Começar do Zero

1. Dashboard → "New Project"
2. Escolha "Blank Project"
3. Dê um nome: ex: "agenda-beauty"
4. Clique "Create"

### Opção 2: Usar Template

1. Dashboard → "Templates"
2. Escolha um template próximo do que quer
3. Clique "Use Template"

---

## Metodologia: PRD-PRIMEIRO (MESMA DO CLAUDE CODE)

**IMPORTANTE:** A metodologia é IDÊNTICA ao Claude Code.

```
1. Você cria um PRD detalhado
   ↓
2. Cola o PRD no chat do Lovable
   ↓
3. Lovable constrói seguindo o PRD
   ↓
4. Você testa no preview
   ↓
5. Ajusta via chat
   ↓
6. Deploy com 1 clique
```

**O segredo continua sendo:** UM BOM PRD.

---

## Passo 3: Usando o Lovable

### Tela do Lovable

```
┌─────────────────────────────────────────┐
│  Preview (seu app rodando)              │
│                                         │
│  [Seu aplicativo aqui em tempo real]    │
│                                         │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  Chat (você conversa aqui)              │
│                                         │
│  Você: Descreve o que quer              │
│  Lovable: Responde e constrói           │
│                                         │
└─────────────────────────────────────────┘
└─────────────────────────────────────────┐
│  Code (código gerado - opcional ver)    │
│                                         │
│  [Arquivos e código gerado]             │
│                                         │
└─────────────────────────────────────────┘
```

### Prompt Inicial (Com PRD)

```
Vou criar um sistema de agendamento para salão de beleze.

Aqui está meu PRD:

[COLE SEU PRD AQUI - MESMO DO CLAUDE CODE]

Por favor, crie este aplicativo.
```

---

## Passo 4: Integrando Supabase (Super Fácil)

### Diferença Principal

**Claude Code:** Você configura manualmente
**Lovable:** 1 clique e pronto!

### Como Fazer

1. No seu projeto Lovable, clique "Settings"
2. "Integrations" → "Supabase"
3. Clique "Connect Supabase"
4. Autorize o Lovable a acessar seu Supabase
5. Escolha o projeto

**Pronto!** Lovable:
- Configura o cliente Supabase
- Cria as tabelas baseadas no PRD
- Gera as funções CRUD
- Tudo automaticamente

---

## Passo 5: Deploy Automático

### Diferença Principal

**Claude Code:** Você configura Vercel manualmente
**Lovable:** 1 clique e publicado!

### Como Fazer

1. No seu projeto, clique "Deploy"
2. Escolha o domínio (ou use o padrão)
3. Clique "Publish"

**Pronto!** Seu app está no ar em:
`https://seu-projeto.lovable.app`

---

## Fluxo de Trabalho Lovable

### Iteração Rápida

```
1. Você descreve: "Crie uma página de agendamento"

2. Lovable cria (instantâneo)

3. Você vê no preview (em tempo real)

4. Se não gostou: "Mude a cor para rosa"

5. Lovable ajusta (instantâneo)

6. Você aprova ou ajusta de novo
```

### Vantagens

- **Feedback visual imediato**
- **Iterações super rápidas**
- **Nada de terminal/comandos**
- **Deploy automático**

---

## Exemplo Prático: Agenda Beauty no Lovable

### 1. Maria Cria Conta

Maria acessa https://lovable.dev e cria conta.

### 2. Maria Cria Projeto

Dashboard → "New Project" → "agenda-beauty" → "Create"

### 3. Maria Envia PRD

No chat do Lovable:

```
Vou criar o Agenda Beauty.

[Cola o PRD - MESMO do módulo anterior]

Crie este aplicativo.
```

### 4. Lovable Constrói

Em 30 segundos:

- ✓ Estrutura criada
- ✓ Página de agendamento
- ✓ Painel do profissional
- ✓ Painel administrativo
- ✓ Tudo funcionando!

### 5. Maria Integra Supabase

Settings → Integrations → Supabase → Connect

1 clique e:
- ✓ Supabase configurado
- ✓ Tabelas criadas
- ✓ Integração funcionando

### 6. Maria Faz Ajustes

Chat:
```
A página está boa, mas:
- Use cores rosa e roxo
- Cards maiores
- Calendário mensal
```

Lovable ajusta em 10 segundos.

### 7. Maria Publica

Clique "Deploy" → "Publish"

Site no ar: `agenda-beauty.lovable.app`

**Tempo total:** 30 minutos (vs 3 dias no Claude Code)

---

## Quando Escolher Lovable vs Claude Code

### Escolha LOVABLE se:

- ✓ Quer começar HOJE
- ✓ Não quer mexer com terminal
- ✓ Quer resultado visual rápido
- ✓ Projeto simples/médio
- ✓ Não se importa em código na nuvem

### Escolha CLAUDE CODE se:

- ✓ Quer aprender mais
- ✓ Quer código no seu computador
- ✓ Quer mais controle
- ✓ Projeto complexo
- ✓ Já sabe usar terminal

### Você pode usar AMBOS:

- Começa no Lovable (protótipo rápido)
- Migra para Claude Code (mais controle)
- Ou vice-versa!

---

## Dicas Específicas para Lovable

### 1. Seja Específico no Chat

❌ **Ruim:**
```
Preciso que fique bonito
```

✅ **Bom:**
```
Use cores pastel (rosa #FF69B4, roxo #9370DB)
Cards com borda arredondada e sombra suave
Fonte Sans-serif, títulos bold
```

### 2. Aproveite o Preview em Tempo Real

- Fique de olho no preview
- Cada mudança aparece instantaneamente
- Teste imediatamente

### 3. Use o Code View Quando Precisar

Se quiser entender ou ajustar código:
- Clique na aba "Code"
- Vê todos os arquivos
- Pode editar manualmente

### 4. Versionamento

Lovable tem histórico automático:
- Cada mensagem é uma versão
- Pode voltar versões
- Comparar mudanças

### 5. Colaboração

Convide sua equipe:
- Settings → "Share"
- Eles veem e editam junto
- Ótimo para feedback

---

## Limitações do Lovable

### O Que Não Fazer

- Projetos MUITO complexos
- Integrações não suportadas
- Customização profunda de código
- Performance crítica (milhões de usuários)

### Para Esses Casos

Use Claude Code ou contrate desenvolvedor.

---

## Preços

### Plano Gratuito

- 3 projetos
- Deploy subdomínio Lovable
- Supabase integration
- Edição de código

### Plano Pro

- Projetos ilimitados
- Domínio customizado
- Mais recursos
- Suporte prioritário

**Para começar:** Plano gratuito é suficiente!

---

## Comparação de Tempo

| Projeto | Claude Code | Lovable |
|---------|-------------|---------|
| Landing Page | 2-3 dias | 1-2 horas |
| Dashboard | 1-2 dias | 2-3 horas |
| CRUD simples | 2-3 dias | 3-4 horas |
| App médio | 5-7 dias | 1-2 dias |

---

## Checklist: Lovable Configurado

**Conta:**
- [ ] Conta criada
- [ ] Projeto criado
- [ ] PRD pronto

**Desenvolvimento:**
- [ ] Enviou PRD no chat
- [ ] Testou preview
- [ ] Fez ajustes via chat

**Integrações:**
- [ ] Supabase conectado
- [ ] Tabelas criadas

**Deploy:**
- [ ] Deploy realizado
- [ ] App acessível via URL

---

## Exemplo de Conversa no Lovable

```
VOCÊ: Vou criar o Agenda Beauty, sistema de agendamento para salão.

[PRD completo]

Crie este aplicativo.

LOVABLE: Perfeito! Vou criar o Agenda Beauty com:
- Página de agendamento público
- Painel do profissional
- Painel administrativo
- Integração com Supabase

[Preview aparece em 30 segundos]

O que achou?

VOCÊ: Está ótimo! Mas preciso:
1. Cores rosa e roxo
2. Cards de profissionais maiores
3. Calendário mensal, não semanal

LOVABLE: [Ajusta em 10 segundos]

Feito! O que achou agora?

VOCÊ: Perfeito! Agora conecta o Supabase.

LOVABLE: [1 clique]

Supabase conectado! Criei as tabelas:
- agendamentos
- profissionais
- servicos

Tudo funcionando. Quer fazer deploy?

VOCÊ: Sim, faça o deploy!

LOVABLE: [Deploy em 30 segundos]

App publicado em: agenda-beauty.lovable.app

🎉 Pronto!
```

---

## Conclusão do Curso

### Você Aprendeu

**Módulo 1:** O que pode construir
**Módulo 2:** Como criar PRD
**Módulo 3:** Vibecoding com Claude Code
**Módulo 4:** GitHub para versionamento
**Módulo 5:** Vercel para deploy
**Módulo 6:** Exemplo prático completo
**Módulo 7:** Dicas avançadas
**Módulo 8:** Supabase para banco de dados
**Módulo 9:** Lovable como alternativa

### Dois Caminhos

Agora você tem:

**Claude Code:**
- Terminal
- Mais controle
- Código no PC
- Para quem quer mergulhar

**Lovable:**
- Navegador
- Mais simples
- Código na nuvem
- Para quem quer rapidez

**Ambos usam a mesma metodologia:** PRD PRIMEIRO.

---

## Próximos Passos

### 1. Escolha Seu Caminho

- [ ] Claude Code
- [ ] Lovable

### 2. Crie Seu PRD

Use o [template](./template-prd.md).

### 3. Comece a Construir

- Se Claude Code: siga o Módulo 3
- Se Lovable: siga este módulo

### 4. Publique

- Se Claude Code: Módulo 5 (Vercel)
- Se Lovable: 1 clique

### 5. Itere

- Teste com usuários
- Colete feedback
- Melhore gradualmente

---

## Parabéns!

Você chegou ao fim deste curso.

Agora você sabe como construir aplicativos para seu negócio sem saber programar.

**Lembre-se:**
- PRD é tudo
- Comece simples (MVP)
- Teste frequente
- Itere baseado em feedback
- Use IA como copiloto

**Boa sorte na sua jornada de construção!**

---

## Recursos Finais

### Documentação Oficial

- [Claude Code Docs](https://code.claude.com/docs/en/setup)
- [Lovable.dev](https://lovable.dev/)
- [Supabase Docs](https://supabase.com/docs)
- [Vercel Docs](https://vercel.com/docs/deployments)

### Comunidades

- [GitHub Discussions](https://github.com/orgs/community/discussions)
- [Supabase Discord](https://supabase.com/discord)

### Continue Aprendendo

- Pratique com projetos reais
- Engaje com comunidades
- Compartilhe suas experiências

---

**Resumo do Módulo 9**

**Você aprendeu:**
- [x] O que é Lovable
- [x] Como usar Lovable
- [x] Integrar Supabase (1 clique)
- [x] Deploy automático
- [x] Quando escolher Lovable vs Claude Code
- [x] Exemplo prático completo

**Fim do curso!** Você tem tudo que precisa para construir apps para seu negócio.
