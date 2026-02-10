# Módulo 7: Dicas e Truques Avançados

---

## Objetivo deste Módulo

Aprender prompts poderosos, evitar erros comuns e saber quando pedir ajuda.

---

## Prompts que Funcionam Bem

### Prompt 1: Iniciar Projeto

```
Claude, vou criar [NOME DO PROJETO], um sistema para [DESCREVER].

Aqui está meu PRD:

[PRD COMPLETO]

Use:
- Next.js 15 com App Router
- TypeScript
- Tailwind CSS
- shadcn/ui para componentes

Antes de começar, confirme que entendeu o PRD e me diga qual será a estrutura do projeto.
```

**Por que funciona:**
- Contexto claro
- PRD completo
- Tecnologias específicas
- Pede confirmação

---

### Prompt 2: Criar Funcionalidade

```
Crie a funcionalidade de [NOME] onde:

1. Usuário clica em [X]
2. Aparece [Y]
3. Usuário preenche [Z]
4. Ao confirmar, [Acontece]

Requisitos:
- Validação de campos obrigatórios
- Mensagem de sucesso
- Erro caso falhe

Estilo visual:
- Use cores [X]
- Layout [Y]
- Mobile-friendly
```

**Por que funciona:**
- Passo a passo claro
- Requisitos específicos
- Diretrizes visuais

---

### Prompt 3: Debugar

```
Deu erro ao [ação]:

[COLE O ERRO COMPLETO]

Contexto:
- Eu estava tentando [X]
- Esperava que [Y]
- Mas aconteceu [Z]

Por favor, corrija este erro e me explique o que estava causando o problema.
```

**Por que funciona:**
- Erro completo colado
- Contexto da ação
- Explicação do esperado vs real
- Pede explicação (você aprende)

---

### Prompt 4: Melhorar Visual

```
A página [NOME DA PÁGINA] precisa de ajustes visuais:

1. Cores:
   - Primária: #[COR]
   - Secundária: #[COR]
   - Fundo: #[COR]

2. Tipografia:
   - Títulos: [FONTE]
   - Texto: [FONTE]
   - Tamanhos: [ESPECIFICAR]

3. Layout:
   - Espaçamento: [ESPECIFICAR]
   - Borda: [ESPECIFICAR]
   - Sombra: [SIM/NÃO, TIPO]

4. Componentes:
   - Botões: [DESCREVER]
   - Cards: [DESCREVER]
   - Inputs: [DESCREVER]

Referência visual: [LINK OU DESCRIÇÃO]
```

**Por que funciona:**
- Específico sobre cores
- Detalhes de tipografia
- Layout bem definido
- Referências visuais

---

### Prompt 5: Adicionar Validação

```
Adicione validação no formulário [NOME]:

Campos:
- [CAMPO 1]: obrigatório, [regra específica]
- [CAMPO 2]: opcional, [regra se preenchido]
- [CAMPO 3]: obrigatório, [regra específica]

Comportamento:
- Mostrar erro inline abaixo de cada campo
- Só permitir submit se tudo válido
- Mensagens de erro amigáveis
- Feedback visual (verde se válido, vermelho se inválido)
```

**Por que funciona:**
- Cada campo com sua regra
- Comportamento esperado claro
- Feedback visual especificado

---

### Prompt 6: Integrar Supabase

```
Configure a integração com Supabase:

Credenciais:
- URL: [SUA URL]
- Anon Key: [SUA KEY]

Tabela: [NOME DA TABELA]
Campos: [LISTA DE CAMPOS]

Operações necessárias:
- [OPERACAO 1]: [descrição]
- [OPERACAO 2]: [descrição]

Crie:
1. Cliente Supabase configurado
2. Types TypeScript para a tabela
3. Funções CRUD (create, read, update, delete)
4. Exemplo de uso em um componente
```

**Por que funciona:**
- Credenciais fornecidas
- Estrutura da tabela
- Operações necessárias listadas
- Pede exemplos

---

### Prompt 7: Criar Dashboard

```
Crie um dashboard com:

Cards no topo:
- [MÉTRICA 1]: [descrição, fonte de dados]
- [MÉTRICA 2]: [descrição, fonte de dados]
- [MÉTRICA 3]: [descrição, fonte de dados]

Gráficos:
- [GRÁFICO 1]: [tipo, dados, eixo X, eixo Y]
- [GRÁFICO 2]: [tipo, dados, eixo X, eixo Y]

Tabelas:
- [TABELA]: [colunas, fonte de dados, ações]

Filtros:
- [FILTRO 1]: [tipo, opções]
- [FILTRO 2]: [tipo, opções]

Layout:
- Grid responsivo
- Mobile: cards empilhados
- Desktop: cards em linha
```

**Por que funciona:**
- Métricas específicas
- Gráficos bem definidos
- Layout responsivo especificado

---

### Prompt 8: Refatorar Código

```
O código [ARQUIVO/COMPONENTE] está [PROBLEMA: muito longo, confuso, etc].

Por favor, refatore para:
- [OBJETIVO 1]
- [OBJETIVO 2]
- [OBJETIVO 3]

Mantenha:
- [FUNCIONALIDADE 1]
- [FUNCIONALIDADE 2]

Não quebre:
- [INTEGRAÇÃO 1]
- [INTEGRAÇÃO 2]

Após refatorar, me explique as mudanças principais.
```

**Por que funciona:**
- Problema identificado
- Objetivos claros
- Restrições explicitadas
- Pede explicação

---

### Prompt 9: Adicionar Testes

```
Adicione testes para [COMPONENTE/FUNÇÃO]:

Cenários de teste:
1. [CENÁRIO 1]: [input esperado → output esperado]
2. [CENÁRIO 2]: [input esperado → output esperado]
3. [CENÁRIO 3]: [input esperado → output esperado]

Use:
- Jest + React Testing Library
- Testes unitários para funções
- Testes de integração para componentes
- Cobertura mínima: 80%

Execute os testes após criar e confirme que todos passam.
```

**Por que funciona:**
- Cenários específicos
- Ferramentas definidas
- Meta de cobertura

---

### Prompt 10: Documentar Código

```
Crie documentação para [PROJETO/COMPONENTE]:

Documentação deve incluir:
1. README.md com:
   - Descrição do projeto
   - Como instalar dependências
   - Como rodar o projeto
   - Como fazer deploy

2. Comentários no código:
   - Funções complexas
   - Lógica de negócio
   - Regras importantes

3. Guia de contribuição:
   - Como o código está organizado
   - Padrões a seguir
   - Como adicionar funcionalidades

Use linguagem simples e clara. Empresários devem entender.
```

**Por que funciona:**
- Tipos de documentação
- Público-alvo definido
- Linguagem simples

---

## Erros Comuns e Como Evitar

### ERRO 1: PRD Muito Genérico

**Sintoma:**
```
Quero um sistema de vendas
```

**Problema:**
IA cria algo genérico que não serve.

**Solução:**
```
Sistema de vendas com:
- Cadastro de produtos (nome, preço, estoque)
- Registro de vendas (data, cliente, itens, valor total)
- Dashboard com vendas do dia, do mês, ticket médio
```

---

### ERRO 2: Mudar de Ideia no Meio do Caminho

**Sintoma:**
```
Já criei a tela de login, mas agora quero que tenha Google OAuth.
```

**Problema:**
Muito retrabalho, perda de tempo.

**Solução:**
- PRD bem pensado desde o início
- Se mudar, avalie se vale a pena
- Considere criar versão 2 depois

---

### ERRO 3: Não Testar Durante o Desenvolvimento

**Sintoma:**
Deixa a IA criar tudo e só testa no final.

**Problema:**
Muitos erros acumulados, difícil debugar.

**Solução:**
- Teste cada funcionalidade
- Uma de cada vez
- Feedback imediato à IA

---

### ERRO 4: Scope Creep (Crescimento Descontrolado)

**Sintoma:**
```
Ah, e enquanto está nisso, adiciona notificações por SMS, integração com 5 sistemas, app mobile...
```

**Problema:**
Projeto nunca termina, complexidade explode.

**Solução:**
- Foque no MVP
- Anexe ideias extras para "versão 2"
- Princípio: "Menos é mais"

---

### ERRO 5: Não Salvar Versões no GitHub

**Sintoma:**
Trabalha horas sem commits.

**Problema:**
Se der erro, perde tudo.

**Solução:**
```
A cada funcionalidade:
git add .
git commit -m "Funcionalidade X pronta"
git push
```

---

### ERRO 6: Ignorar Erros do Terminal

**Sintoma:**
Vermelho no terminal mas ignora e continua.

**Problema:**
Erro se propaga, vira problema maior.

**Solução:**
```
Erro? Pare.
Leia o erro.
Copie e cole para a IA.
Só continue quando resolver.
```

---

### ERRO 7: Variáveis de Ambiente no Código

**Sintoma:**
```typescript
const apiKey = "sk-abc123..." // hardcoded
```

**Problema:**
Credenciais expostas no GitHub.

**Solução:**
```typescript
const apiKey = process.env.API_KEY
```
E adicione no Vercel.

---

### ERRO 8: Não Pensar em Mobile

**Sintoma:**
Funciona no desktop, quebra no celular.

**Problema:**
50% dos usuários usam mobile.

**Solução:**
```
Sempre teste em mobile:
- No Chrome: F12 → ícone de celular
- No seu celular: localhost:3000
```

---

### ERRO 9: Não Definir MVP

**Sintoma:**
```
Preciso de 20 funcionalidades para lançar
```

**Problema:**
Nunca lança, perde oportunidades.

**Solução:**
```
MVP = Mínimo Viável para Produção
- 3-5 funcionalidades principais
- Testa com usuários reais
- Melhora baseado em feedback
```

---

### ERRO 10: Pedir Tudo de Uma Vez

**Sintoma:**
```
Claude, crie um sistema completo com [50 funcionalidades]
```

**Problema:**
IA perde o foco, pode esquecer coisas.

**Solução:**
```
Uma coisa por vez:
1. Estrutura base
2. Funcionalidade 1
3. Funcionalidade 2
...
```

---

## Quando Pedir Ajuda

### Situação 1: IA Travou

**Sintoma:**
Claude não responde ou dá erro.

**Solução:**
1. Tente: "Continue de onde parou"
2. Reinicie: `Ctrl+C` e `claude` de novo
3. Se persistir: problema técnico, aguarde

---

### Situação 2: Código Não Funciona

**Sintoma:**
Tudo parece certo mas não funciona.

**Solução:**
1. Cole o erro completo para a IA
2. Peça: "Me explique o que está errado"
3. Se não resolver: procure no Google o erro

---

### Situação 3: Não Sabe Como Fazer Algo

**Sintoma:**
Quer adicionar algo mas não sabe como pedir.

**Solução:**
1. Descreva o resultado esperado
2. Dê exemplos se possível
3. Peça: "Você sabe como fazer X?"

---

### Situação 4: Supabase Não Funciona

**Sintoma:**
Erros de conexão com Supabase.

**Solução:**
1. Verifique variáveis de ambiente
2. Verifique se projeto Supabase está ativo
3. Teste query no Supabase Table Editor
4. Cole erro específico para a IA

---

### Situação 5: Deploy Falha

**Sintoma:**
Vercel mostra erro de deploy.

**Solução:**
1. Clique no deployment com erro
2. Leia os logs
3. Corrija no código
4. Faça novo commit

---

### Situação 6: Projeto Ficou Complexo Demais

**Sintoma:**
Não consegue mais manter sozinho.

**Solução:**
1. Considere contratar desenvolvedor
2. Use IA para auxiliar o desenvolvedor
3. Você dirige, dev implementa

---

## Recursos Úteis

### Documentação

- [Next.js Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Docs](https://ui.shadcn.com)

### Comunidade

- [GitHub Discussions](https://github.com/orgs/community/discussions)
- [Supabase Discord](https://supabase.com/discord)
- [Next.js Discord](https://nextjs.org/discord)

### Aprendizado

- [freeCodeCamp](https://freecodecamp.org)
- [YouTube: Next.js tutorials](https://youtube.com/results?search_query=nextjs+tutorial)
- [Vercel Learn](https://vercel.com/learn)

---

## Checklist: Você Está Pronto?

**Fundamentos:**
- [ ] Sabe fazer um bom PRD
- [ ] Conhece o Prompt Mágico
- [ ] Testa frequentemente
- [ ] Faz commits no GitHub

**Rotina:**
- [ ] Uma funcionalidade por vez
- [ ] Testa antes de continuar
- [ ] Salva versões no GitHub
- [ ] Faz deploy quando funcional

**Mentalidade:**
- [ ] MVP primeiro, melhorias depois
- [ ] Erros são normais
- [ ] Iterar é chave
- [ ] Pedir ajuda quando preciso

---

## Próximo Passo

Agora vamos adicionar um banco de dados ao seu aplicativo com Supabase.

**→ [Módulo 8: Supabase - Banco de Dados](./modulo-08.md)**

---

## Resumo do Módulo 7

**Você aprendeu:**
- [x] Prompts poderosos para cada situação
- [x] 10 erros comuns e como evitar
- [x] Quando e como pedir ajuda
- [x] Recursos para continuar aprendendo

**Próximo:** Integrar Supabase ao seu aplicativo
