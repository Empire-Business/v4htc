# Módulo 8: Dicas Avançadas

## Visão Geral

Parabéns por chegar até aqui! Este módulo ensina técnicas avançadas para tirar o máximo do Claude Code com GLM Coding Plan.

**Tempo estimado:** 20-30 minutos

**O que você vai aprender:**
- Otimizar performance e quota
- Alternar entre modelos
- Boas práticas profissionais
- Gerenciar assinatura

---

## Otimização de Performance

### Dica 1: Use o Modelo Certo para Cada Tarefa

**Tarefas complexas (Use GLM-4.7):**
- Criar arquitetura de sistema
- Analisar código complexo
- Resolver bugs difíceis
- Criar estratégias

**Tarefas padrão (Use GLM-4.7 ou GLM-4.6):**
- Criar funcionalidades
- Escrever código
- Refatorar
- Gerar conteúdo

**Tarefas simples (Use GLM-4.5-Air):**
- Pequenas modificações
- Perguntas rápidas
- Formatar código
- Explicações simples

**Como alternar:**

Edite `~/.claude/settings.json`:
```json
{
  "env": {
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "glm-4.6",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "glm-4.7",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "glm-4.5-air"
  }
}
```

---

### Dica 2: Seja Específico Economiza Quota

**❌ Prompt vago (gasta quota com vai-e-vem):**
```
Crie uma landing page.
```

**✅ Prompt específico (faz de uma vez):**
```
Crie uma landing page para vender curso de marketing digital.

REQUISITOS:
- Título: "Marketing Digital para Iniciantes"
- Subtítulo: "Do zero ao primeiro cliente em 30 dias"
- Preço: R$ 497,00
- 3 depoimentos
- Formulário de captura
- Cores: azul e branco
- Responsivo para mobile
```

---

### Dica 3: Agrupe Tarefas Relacionadas

**❌ Errado (vários prompts):**
```
1. Crie um cabeçalho com logo.
2. Adicione um menu de navegação.
3. Adicione um campo de busca.
4. Adicione botão de login.
```

**✅ Certo (um prompt só):**
```
Crie um cabeçalho completo com:
- Logo à esquerda
- Menu de navegação central (Início, Sobre, Contato)
- Campo de busca
- Botão "Entrar" à direita

Use Bootstrap para estilização.
Cores: #2563eb (azul) e branco.
```

---

## Boas Práticas Avançadas

### Prática 1: Contextualize Antes de Pedir

**Por que importa?**
- O Claude não sabe sobre seu negócio automaticamente
- Contexto claro = melhores respostas

**Como fazer:**
```
Antes de começar, aqui está o contexto:
- Meu negócio: Agência de marketing digital
- Meus clientes: Pequenos empresários
- Meu objetivo: Aumentar conversão em 30%
- Meu orçamento: R$ 5.000/mês

Agora, crie uma estratégia...
```

---

### Prática 2: Use Iteração com Feedback

**Fluxo ideal:**
```
1. Você: Crie X seguindo estes requisitos...
   [Claude cria X]

2. Você: Está quase certo, mas ajuste:
   - Mudança 1
   - Mudança 2
   [Claude ajusta]

3. Você: Perfeito! Agora adicione Y...
   [Claude adiciona Y]
```

**Dica de ouro:**
> "Um prompt bem revisado é melhor que 10 prompts vagos."

---

### Prática 3: Salve Prompts que Funcionam

**Crie uma biblioteca pessoal:**

```
~/
└── prompts-uteis/
    ├── marketing/
    │   ├── criar-oferta.md
    │   ├── criar-funil.md
    │   └── copy-vendas.md
    ├── desenvolvimento/
    │   ├── criar-api.md
    │   ├── debug-codigo.md
    │   └── refatorar.md
    └── analytics/
        ├── analisar-funil.md
        └── otimizar-conversao.md
```

**Conteúdo do arquivo criar-oferta.md:**
```markdown
# Prompt: Criar Oferta High Ticket

Use este prompt para criar ofertas irresistíveis:

COPIE E COLE:
---
/skill htc-ofertas-creator

Crie uma oferta para [PRODUTO].

Público-alvo: [DESCRIÇÃO DO PÚBLICO]
Preço: R$ [VALOR]
Dor principal: [DOR]
Resultado prometido: [RESULTADO]
Prazo: [TEMPO]
Garantia: [GARANTIA]
---
```

---

### Prática 4: Use Variáveis em Prompts

**Em vez de repetir:**
```
Crie uma página para "Empresa ABC".
Crie um e-mail para "Empresa ABC".
Crie um anúncio para "Empresa ABC".
```

**Crie um template:**
```
CONTEXT DO PROJETO:
Nome: Empresa ABC
Nichos: Software B2B
Público: CTOs de empresas 100-500 funcionários
Dor: Demora muito para desenvolver features
Solução: Nossa plataforma reduz tempo em 50%

Tarefas:
1. Crie landing page seguindo o contexto acima.
2. Crie e-mail de vendas seguindo o contexto acima.
3. Crie 3 anúncios seguindo o contexto acima.
```

---

## Gerenciamento de Assinatura

### Como Fazer Upgrade

**Passo a passo:**

1. **Faça login em https://www.z.ai**

2. **Acesse configurações de assinatura:**
   - Clique no seu avatar (topo direito)
   - Selecione "Subscription"

3. **Escolha o novo plano:**
   - Lite → Pro: Maior quota
   - Pro → Max: Máxima quota
   - Mensal → Anual: Economia ~20-30%

4. **Confirme e pague**

**O que acontece:**
- Upgrade imediato (se trocou de plano)
- Próximo ciclo (se só mudou período)

### Como Fazer Downgrade

**Importante saber:**
- Downgrade só entra no próximo ciclo
- Você mantém acesso ao plano atual até o fim do período

**Passo a passo:**

1. Em "Subscription", selecione plano inferior
2. Confirme a mudança
3. Aguarde o fim do ciclo atual

### Como Cancelar

**Atenção:** Não há reembolso

**Passo a passo:**

1. Acesse "Subscription"
2. Clique em "Cancel Subscription"
3. **Faça pelo menos 24h antes** da renovação
4. Confirme

**O que acontece:**
- Acesso continua até o fim do período pago
- Após isso, a quota é zero

---

## Alternância de Modelos

### Quando Usar Cada Modelo

| Situação | Modelo Recomendado | Por quê |
|----------|-------------------|---------|
| Criar arquitetura | GLM-4.7 | Máximo poder de raciocínio |
| Debugar código complexo | GLM-4.7 | Melhor análise |
| Criar funcionalidade | GLM-4.7 ou GLM-4.6 | Bom equilíbrio |
| Gerar texto longo | GLM-4.7 | Melhor coerência |
| Modificar arquivo | GLM-4.6 ou GLM-4.5 | Rápido e eficaz |
| Pequenas tarefas | GLM-4.5-Air | Mais rápido |
| Teste rápido | GLM-4.5-Air | Economiza quota |

### Como Alternar Rapidamente

**Opção 1: Arquivos de configuração múltiplos**

```bash
# Configuração padrão (GLM-4.7):
~/.claude/settings.json

# Configuração rápida (GLM-4.5-Air):
~/.claude/settings-fast.json

# Configuração balanceada (GLM-4.6):
~/.claude/settings-balanced.json
```

**Para trocar:**
```bash
# Use GLM-4.5-Air (rápido):
cp ~/.claude/settings-fast.json ~/.claude/settings.json
claude

# Use GLM-4.7 (padrão):
cp ~/.claude/settings-default.json ~/.claude/settings.json
claude
```

**Opção 2: Alias no terminal**

Adicione ao seu `~/.bash_profile` ou `~/.zshrc`:

```bash
# Claude com GLM-4.7 (padrão)
alias claude='claude'

# Claude rápido (GLM-4.5-Air)
alias claude-fast='cp ~/.claude/settings-fast.json ~/.claude/settings.json && claude'

# Claude balanceado (GLM-4.6)
alias claude-balanced='cp ~/.claude/settings-balanced.json ~/.claude/settings.json && claude'
```

---

## Integrações Avançadas

### Usar com Git

**O Claude Code entende Git nativamente:**

```
Claude, veja o que mudou no último commit.
```

```
Crie um commit message para estas mudanças:
[describe changes]
```

```
Quais arquivos foram modificados?
```

### Usar com Supabase MCP

**O MCP permite que o Claude interaja com Supabase:**

```
Instale o MCP do Supabase:
claude mcp add --transport http supabase https://mcp.supabase.com/mcp
```

**Depois use:**
```
Crie uma tabela "clientes" com id, nome, email usando MCP.
```

### Usar com GitHub

**O Claude pode interagir com repositórios:**

```
Claude, faça clone do repositório github.com/usuario/repo
```

```
Crie um pull request para estas mudanças.
```

---

## Dicas de Produtividade

### Dica 1: Use Abas do Terminal

**macOS (iTerm2):**
- `Cmd + D`: Divide verticalmente
- `Cmd + Shift + D`: Divide horizontalmente

**Windows (Windows Terminal):**
- `Ctrl + Shift + D`: Divide

**Linux (GNOME Terminal):**
- `Ctrl + Shift + T`: Nova aba

### Dica 2: Comandos de Atalho

**No Claude Code:**
```
/clear      # Limpa conversa (novo contexto)
/status     # Ver status atual
/exit       # Sair
```

**No terminal:**
```bash
Ctrl + L    # Limpa tela
Ctrl + C    # Cancela comando atual
Ctrl + D    # Sai do Claude Code
```

### Dica 3: Histórico de Comandos

```bash
# Ver histórico:
history | grep claude

# Executar comando anterior:
!!

# Executar comando n do histórico:
!n
```

---

## Segurança e Privacidade

### O que o Claude Code NÃO faz:

- ❌ Não envia seu código para a Anthropic (com Z.ai)
- ❌ Não armazena suas conversas (Z.ai policy)
- ❌ Não compartilha seus dados

### O que ele faz:

- ✅ Envia prompts/conteúdo para API da Z.ai
- ✅ Processa no servidor GLM
- ✅ Retorna resposta

### Boas práticas de segurança:

**Nunca coloque em prompts:**
- Senhas
- Chaves de API reais
- Dados pessoais sensíveis
- Informações confidenciais

**Use variáveis de ambiente:**
```bash
# No seu .bash_profile:
export MINHA_API_KEY="sk-xxxxx"

# No settings.json:
{
  "env": {
    "ANTHROPIC_API_KEY": "${MINHA_API_KEY}"
  }
}
```

---

## Performance e Custos

### Estimativa de Custos Reais

**Plano Lite ($3-6/mês):**
- ~120 prompts/5h = ~576 prompts/dia
- Se cada prompt custa $0,01 = $5,76/dia em API padrão
- Você paga $3-6/mês (economia de ~95%)

**Plano Pro (~$15/mês):**
- ~600 prompts/5h = ~2.880 prompts/dia
- Em API padrão: ~$28,80/dia
- Você paga $15/mês (economia de ~98%)

**Plano Max (~$30-40/mês):**
- ~2.400 prompts/5h = ~11.520 prompts/dia
- Em API padrão: ~$115,20/dia
- Você paga $30-40/mês (economia de ~99%)

### Quando Vale a Pena Upgrade?

**Fique no Lite se:**
- Uso pessoal
- Testando ferramenta
- Uso ocasional

**Vá para Pro se:**
- Uso diário intensivo
- Trabalha com código
- Quer economia real

**Vá para Max se:**
- Uso profissional
- Equipe inteira usando
- Precisa de quota máxima

---

## Exemplos Avançados

### Exemplo 1: Criar Sistema Completo

```
Claude, crie um sistema completo de gerenciamento de tarefas.

REQUISITOS:
1. Backend em Node.js + Express
2. Frontend em React
3. Banco de dados: Supabase
4. Autenticação: Supabase Auth
5. Funcionalidades:
   - Criar tarefa
   - Listar tarefas
   - Marcar como concluída
   - Deletar tarefa
   - Filtrar por status

6. Design:
   - Usar Tailwind CSS
   - Responsivo
   - Modo escuro/claro

7. Deploy:
   - Backend: Vercel
   - Frontend: Vercel

Comece criando o PRD completo antes de codar.
```

### Exemplo 2: Análise Complexa

```
Analise este código e encontre melhorias:

[Cole código complexo aqui]

QUERO QUE VOCÊ:
1. Identifique problemas de performance
2. Encontre bugs potenciais
3. Sugira refatorações
4. Aponte más práticas
5. Recomende padrões melhores
6. Reescreva com as melhorias

Seja muito específico e técnico.
```

### Exemplo 3: Migração de Sistema

```
Preciso migrar este sistema de PHP para Node.js:

[Descreva o sistema PHP]

Passos que quero:
1. Entenda a arquitetura atual
2. Crie plano de migração
3. Defina stack Node.js
4. Migrar módulo por módulo
5. Testar cada módulo
6. Deploy da nova versão

Comece pela análise e plano.
```

---

## Checklist Final

Você é um usuário avançado quando:

- [ ] Entende quando usar cada modelo
- [ ] Otimiza prompts para economizar quota
- [ ] Agrupa tarefas relacionadas
- [ ] Tem biblioteca de prompts úteis
- [ ] Sabe gerenciar assinatura
- [ ] Pode alternar configurações rapidamente
- [ ] Conhece boas práticas de segurança
- [ ] Entende custos reais vs API padrão

---

## Próximos Passos

Agora você está pronto para:

1. **Usar o Claude Code no dia a dia**
   - Trabalho com código
   - Automação de tarefas
   - Análise de dados

2. **Explorar Skills do HTC**
   - Criar ofertas
   - Construir funis
   - Gerar conteúdo

3. **Construir Aplicações**
   - Veja o curso "Construindo Apps"
   - Aprenda PRD primeiro
   - Use Vibecoding

---

## Parabéns!

Você completou o curso de instalação do Claude Code com GLM Coding Plan da Z.ai!

**O que você aprendeu:**
- ✅ O que é Claude Code e GLM Coding Plan
- ✅ Como preparar o ambiente
- ✅ Como instalar o Claude Code
- ✅ Como configurar com GLM
- ✅ Como usar no dia a dia
- ✅ Como instalar e usar Skills
- ✅ Como resolver problemas
- ✅ Dicas avançadas

**Próximos cursos recomendados:**
- Curso Completo Método High Ticket
- Construindo Apps com Claude Code

---

## Links Úteis

**Documentação:**
- Claude Code: https://code.claude.com/docs
- Z.ai GLM Coding: https://docs.z.ai/devpack/overview
- FAQ: https://docs.z.ai/devpack/faq

**Suporte:**
- Z.ai Support: https://www.z.ai/support
- Comunidade: r/ClaudeCode

**Ferramentas:**
- Z.ai Dashboard: https://www.z.ai
- Gerenciar assinatura: https://www.z.ai/subscription

---

**Bom uso e tenha produtividade! 🚀**
