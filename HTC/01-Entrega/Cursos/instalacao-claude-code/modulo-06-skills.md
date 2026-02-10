# Módulo 6: Instalação de Skills

## Visão Geral

Skills são "extensões" que adicionam capacidades especiais ao Claude Code. Pense como plugins que tornam o Claude especialista em tarefas específicas.

**Tempo estimado:** 20-30 minutos

**O que você vai aprender:**
- O que são Skills
- Como instalar Skills
- Como usar as 10 Skills do HTC
- Exemplos práticos

---

## O que são Skills?

### Definição

Skills são pacotes que contêm:
- **Prompts especializados:** Instruções específicas para tarefas
- **Arquivos de suporte:** Templates, exemplos, referências
- **Configurações:** Variáveis e parâmetros pré-definidos

### Analogia

Pense em Skills como "aplicativos" para o Claude Code:

| Claude Code | Smartphone |
|-------------|------------|
| Skills | Apps |
| Modelo GLM-4.7 | Sistema operacional |
| Você | Usuário |

**Sem skills:** Claude é um assistente geral
**Com skills:** Claude se torna especialista em tarefas específicas

---

## Skills do HTC

O HTC vem com **10 Skills especializadas** em High Ticket:

| Skill | Especialidade | Uso principal |
|-------|--------------|---------------|
| **htc-ofertas-creator** | Criar ofertas High Ticket | Estruturar produtos |
| **htc-funnel-builder** | Construir funis de venda | Marketing |
| **htc-copywriter** | Escrever copies | Vendas e marketing |
| **htc-sales-script** | Scripts de vendas | Fechamento |
| **htc-marketing-strategy** | Estratégias de marketing | Planejamento |
| **htc-lead-nurturing** | Nutrir leads | Follow-up |
| **htc-objection-handler** | Lidar com objeções | Vendas |
| **htc-pricing-strategy** | Precificação | Planos e preços |
| **htc-content-generator** | Gerar conteúdo | Marketing |
| **htc-analytics-coach** | Analisar métricas | Otimização |

---

## Como Instalar Skills

### Método 1: Via Arquivo .zip (Recomendado para HTC)

**Passo 1: Baixar a Skill**

1. Acesse a área de construção da plataforma HTC
2. Escolha a Skill que deseja instalar
3. Baixe o arquivo .zip

**Passo 2: Extrair o .zip**

```bash
# Crie pasta para skills (se não existir)
mkdir -p ~/.claude/skills

# Extraia o .zip nessa pasta
unzip htc-ofertas-creator.zip -d ~/.claude/skills/
```

**Passo 3: Verificar Estrutura**

Uma Skill extraída deve ter:

```
~/.claude/skills/htc-ofertas-creator/
├── skill.json              (configuração)
├── prompt.txt              (prompt principal)
├── README.md               (instruções)
└── files/                  (arquivos de suporte)
    ├── templates/
    ├── exemplos/
    └── referencias/
```

**Passo 4: Reiniciar o Claude Code

```bash
# Feche o Claude se estiver aberto
/exit

# Abra novamente
claude
```

### Método 2: Via Marketplace (Futuro)

No futuro, será possível:

```
/skills install htc-ofertas-creator
```

Por enquanto, use o método do .zip.

---

## Usando uma Skill

### Comando Básico

```
/skill htc-ofertas-creator
```

### Usando com Prompt

```
/skill htc-ofertas-creator

Crie uma oferta para um curso de marketing digital
de R$ 2.000,00 para pequenos empresários.
```

### Exemplo Prático: Ofertas Creator

**Passo 1: Ativar a Skill**

```
/skill htc-ofertas-creator
```

**Passo 2: Fornecer contexto**

```
Preciso criar uma oferta para meu programa de consultoria
de marketing para restaurantes.

Público: Donos de restaurantes pequenos
Preço: R$ 3.000,00
Dor: Restaurantes vazios
Resultado: Restaurantes cheios em 60 dias
```

**Passo 3: Receber a oferta**

A Skill vai gerar:
- Título irresistível
- Promessa principal
- Garantias
- Bônus
- Escassez
- Urgência

---

## As 10 Skills do HTC Explicadas

### 1. htc-ofertas-creator

**O que faz:** Cria ofertas High Ticket irresistíveis

**Quando usar:**
- Criar novo produto
- Relançar produto
- Melhorar oferta existente

**Exemplo de uso:**
```
/skill htc-ofertas-creator

Crie uma oferta para mentoría de vendas B2B.
Público: Empresários de software
Preço: R$ 5.000/mês
Dor: Vendas baixas
Resultado: Dobra receita em 90 dias
```

---

### 2. htc-funnel-builder

**O que faz:** Constrói funis de venda completos

**Quando usar:**
- Criar novo funil
- Otimizar funil existente
- Planejar lançamento

**Exemplo de uso:**
```
/skill htc-funnel-builder

Crie um funil para vender curso de R$ 997.
Começa com lead magnet gratuito.
Tem 3 e-mails de sequência.
Termina em página de vendas.
```

---

### 3. htc-copywriter

**O que faz:** Escreve copies de vendas

**Quando usar:**
- Criar páginas de vendas
- Escrever e-mails
- Criar ads

**Exemplo de uso:**
```
/skill htc-copywriter

Escreva uma página de vendas para meu programa
de consultoria financeira.

Público: Médicos
Promessa: Primeiro milhão em 3 anos
Prova: 100 médicos já alcançaram
Preço: R$ 10.000
```

---

### 4. htc-sales-script

**O que faz:** Cria scripts de vendas e fechamento

**Quando usar:**
- Treinar equipe de vendas
- Criar roteiro de ligação
- Preparar para reunião

**Exemplo de uso:**
```
/skill htc-sales-script

Crie um script de vendas para WhatsApp.
Produto: Consultoria de marketing digital.
Preço: R$ 3.000.
Objecção comum: "Muito caro"
```

---

### 5. htc-marketing-strategy

**O que faz:** Planeja estratégias de marketing

**Quando usar:**
- Planejar trimestre/ano
- Lançar novo produto
- Explicar canais

**Exemplo de uso:**
```
/skill htc-marketing-strategy

Crie estratégia de marketing para lançamento
de app de agendamento.

Orçamento: R$ 10.000/mês
Público: Donos de clínicas
Objetivo: 1.000 downloads no primeiro mês
```

---

### 6. htc-lead-nurturing

**O que faz:** Cria sequências de nutrição de leads

**Quando usar:**
- Criar e-mail marketing
- Planejar follow-up
- Nutrir prospects

**Exemplo de uso:**
```
/skill htc-lead-nurturing

Crie sequência de 5 e-mails para leads
que baixaram eBook de marketing.

Objetivo: Marcar consultoria de R$ 500
Tom: Autoridade mas acessível
```

---

### 7. htc-objection-handler

**O que faz:** Prepara respostas para objeções de vendas

**Quando usar:**
- Treinar equipe
- Preparar para reunião
- Criar FAQ

**Exemplo de uso:**
```
/skill htc-objection-handler

Liste e responda as 10 objeções mais comuns
para vender programa de R$ 5.000.

Produto: Mentoria de vendas
Público: Empresários de serviço
```

---

### 8. htc-pricing-strategy

**O que faz:** Define precificação e planos

**Quando usar:**
- Lançar produto
- Reajustar preços
- Criar versões

**Exemplo de uso:**
```
/skill htc-pricing-strategy

Crie 3 planos de preços para meu programa
de consultoria.

Custo: R$ 500/hora
Valor percebido: R$ 10.000/mês
Público: Pequenos empresários
```

---

### 9. htc-content-generator

**O que faz:** Gera conteúdo de marketing

**Quando usar:**
- Criar posts para redes sociais
- Escrever artigos de blog
- Criar roteiros de vídeo

**Exemplo de uso:**
```
/skill htc-content-generator

Crie 10 ideias de posts para Instagram
sobre vendas High Ticket.

Público: Empresários
Tom: Autoridade e inspiração
Formato: Carrossel
```

---

### 10. htc-analytics-coach

**O que faz:** Analisa métricas e sugere otimizações

**Quando usar:**
- Revisar resultados
- Otimizar funil
- Tomar decisões baseadas em dados

**Exemplo de uso:**
```
/skill htc-analytics-coach

Meu funil tem:
- 1.000 visitantes
- 200 leads (20% conversão)
- 20 vendas (10% conversão)
- Ticket médio: R$ 500

Analise e sugira melhorias.
```

---

## Fluxo de Trabalho com Skills

### Passo 1: Escolha a Skill Certa

**Pergunte-se:**
- Qual problema quero resolver?
- Qual Skill é especialista nisso?

| Problema | Skill certa |
|----------|-------------|
| Preciso criar oferta | htc-ofertas-creator |
| Preciso de funil | htc-funnel-builder |
| Preciso de copy | htc-copywriter |
| Tenho objeção | htc-objection-handler |
| Quero analisar métricas | htc-analytics-coach |

### Passo 2: Ative a Skill

```
/skill nome-da-skill
```

### Passo 3: Forneça Contexto

Seja específico sobre:
- Público-alvo
- Produto/serviço
- Preço
- Dores
- Resultados
- Contexto atual

### Passo 4: Revise o Resultado

- Está adequado ao seu contexto?
- Precisa de ajustes?
- Quer gerar outra versão?

### Passo 5: Aplique

- Use o material gerado
- Teste com sua audiência
- Meça resultados
- Volte à Skill para otimizar

---

## Troubleshooting de Skills

### Skill não aparece

**Solução:**
1. Verifique se extraiu o .zip corretamente
2. Confirme que está na pasta `~/.claude/skills/`
3. Reinicie o Claude Code

### Erro ao carregar Skill

**Solução:**
1. Verifique se o arquivo `skill.json` está válido
2. Confirme que `prompt.txt` existe
3. Veja o README.md da Skill

### Skill não funciona como esperado

**Solução:**
1. Leia o README.md da Skill
2. Verifique se está fornecendo contexto correto
3. Ajuste seu prompt seguindo exemplos

---

## Exercícios Práticos

### Exercício 1: Criar Oferta

```
/skill htc-ofertas-creator

Crie uma oferta para:
Seu produto/serviço: _____________
Seu público: _____________
Seu preço: _____________
Dor principal: _____________
Resultado prometido: _____________
```

### Exercício 2: Criar Funil

```
/skill htc-funnel-builder

Crie um funil para vender sua oferta.
Ponto de partida: _____________
Quantidade de passos: _____________
Orçamento de tráfego: _____________
```

### Exercício 3: Lidar com Objeção

```
/skill htc-objection-handler

Objeção que ouve muito: _____________

Crie 3 formas de responder essa objeção.
```

---

## Próximo Passo

Agora que você sabe usar Skills, vamos aprender a resolver problemas!

**No Módulo 7 você vai:**
- Resolver problemas de configuração
- Entender erros comuns
- Saber quando atualizar
- Dicas avançadas

---

## Resumo Rápido

**Comando de Skill:**
```
/skill nome-da-skill
```

**Skills do HTC:**
1. htc-ofertas-creator
2. htc-funnel-builder
3. htc-copywriter
4. htc-sales-script
5. htc-marketing-strategy
6. htc-lead-nurturing
7. htc-objection-handler
8. htc-pricing-strategy
9. htc-content-generator
10. htc-analytics-coach

**Fluxo:**
1. Escolha a Skill
2. Ative com /skill
3. Fornecer contexto
4. Revise o resultado
5. Aplique e teste

---

**Módulo 7:** Troubleshooting →
