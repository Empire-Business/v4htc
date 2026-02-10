# Módulo 1: Introdução

## O que é Claude Code?

Claude Code é uma ferramenta de **coding agentic** que funciona diretamente no seu terminal. Pense nele como um desenvolvedor júnior extremamente capaz que trabalha ao seu lado 24 horas por dia.

**O que ele faz:**
- Entende sua base de código inteira
- Executa tarefas rotineiras automaticamente
- Explica códigos complexos
- Gerencia workflows de Git
- Cria, modifica e testa código
- Tudo isso através de comandos em linguagem natural

**Exemplo prático:**

Ao invés de escrever:
```javascript
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
```

Você simplesmente fala:
```
"Crie uma função que calcula o total de uma lista de itens"
```

E o Claude Code escreve o código para você.

---

## O que é GLM Coding Plan da Z-AI?

GLM Coding Plan é um pacote de assinatura da Z.ai que permite usar modelos GLM (GLM-4.7, GLM-4.6, GLM-4.5, GLM-4.5-Air) no Claude Code com **grande eficácia e baixo custo**.

**A grande vantagem:**
- Custa a partir de **$3/mês** (plano Lite)
- Oferece ~120 prompts a cada 5 horas
- Cerca de **3x mais quota** que o plano Claude Pro
- Modelos de alta performance (GLM-4.7 é flagship)

---

## Modelos Disponíveis

| Modelo | Uso Recomendado | Características |
|--------|----------------|-----------------|
| **GLM-4.7** | Tarefas complexas, raciocínio avançado | Modelo mais poderoso, usado como Opus e Sonnet |
| **GLM-4.6** | Equilíbrio entre performance e custo | Boa opção para uso geral |
| **GLM-4.5** | Tarefas padrão de programação | Confiável para maioria dos casos |
| **GLM-4.5-Air** | Respostas rápidas, tarefas simples | Mais rápido e econômico, usado como Haiku |

**Nota de formatação:**
- Em **textos**: use GLM-4.7, GLM-4.5-Air (maiúsculas)
- Em **código/configurações**: use glm-4.7, glm-4.5-air (minúsculas)

---

## Por que usar Z-AI em vez do método padrão Anthropic?

### Comparação de Custo

| Plano | Preço | Prompts a cada 5 horas |
|-------|-------|----------------------|
| **Claude Pro** | ~$20/mês | ~40 prompts |
| **GLM Coding Lite** | ~$3-6/mês | ~120 prompts (3x mais) |
| **Claude Max (5x)** | ~$50-60/mês | ~200 prompts |
| **GLM Coding Pro** | ~$15/mês | ~600 prompts (3x mais) |
| **Claude Max (20x)** | ~$200+/mês | ~800 prompts |
| **GLM Coding Max** | ~$30-40/mês | ~2400 prompts (3x mais) |

**Resumo:** Com Z-AI você paga **menos e recebe muito mais**.

### Outras Vantagens

**✅ Performance:**
- GLM-4.7 é comparável aos modelos Claude mais avançados
- Gera mais de 55 tokens por segundo
- Respostas em tempo real

**✅ Confiabilidade:**
- Sem restrições de rede
- Sem risco de banimento de conta
- Funciona de forma estável

**✅ Recursos inclusos:**
- Vision Understanding (análise de imagens)
- Web Search MCP (busca na web)
- Web Reader MCP (leitura de páginas)
- Tudo incluso nos planos

---

## Casos de Uso Reais

**Para empresários:**
- Automatizar tarefas repetitivas
- Criar scripts úteis para o negócio
- Entender e modificar código existente
- Gerenciar projetos sem equipe técnica

**Para desenvolvedores:**
- Acelerar desenvolvimento
- Debugar código mais rápido
- Gerar testes automaticamente
- Refatorar código legado

**Exemplo real:**
```
Você: "Crie um script que lê todos os arquivos .csv da pasta dados/
e gera um relatório com total de vendas por dia"

Claude Code: [Cria o script completo em Python]

Você: "Adicione um gráfico de linha mostrando a tendência"

Claude Code: [Atualiza o script com matplotlib]
```

---

## Próximo Passo

No próximo módulo, você vai preparar seu ambiente para instalar o Claude Code com GLM Coding Plan.

**O que você vai precisar:**
- Um computador (macOS, Windows ou Linux)
- Node.js 18 ou superior
- Uma conta na Z.ai
- Um plano GLM Coding (Lite, Pro ou Max)

---

## Resumo Rápido

| Conceito | O que é |
|----------|---------|
| **Claude Code** | Ferramenta de IA para programação no terminal |
| **GLM Coding Plan** | Assinatura barata da Z.ai para usar no Claude Code |
| **GLM-4.7** | Modelo mais poderoso (comparável ao Claude Opus) |
| **Vantagem principal** | 3x mais prompts por 10% do preço |

---

## Links Úteis

- Documentação oficial Claude Code: https://code.claude.com/docs
- Documentação Z.ai GLM Coding: https://docs.z.ai/devpack/overview
- FAQ completo: https://docs.z.ai/devpack/faq
- Criar conta Z.ai: https://www.z.ai
- Assinar GLM Coding Plan: https://z.ai/subscribe

---

**Módulo 2:** Preparação e Requisitos →
