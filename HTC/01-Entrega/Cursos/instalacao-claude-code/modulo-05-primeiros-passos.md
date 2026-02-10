# Módulo 5: Primeiros Passos

## Visão Geral

Parabéns! O Claude Code está instalado e configurado com GLM Coding Plan. Agora vamos aprender a usar na prática.

**Tempo estimado:** 15-20 minutos

**O que você vai aprender:**
- Conceder permissões de arquivo
- Comandos básicos do dia a dia
- Como funciona a quota de prompts
- Primeiros testes práticos

---

## Iniciando o Claude Code

### Comando básico:

```bash
claude
```

**Primeira vez em uma pasta:**

O Claude vai perguntar:
```
Do you want to grant Claude Code access to files in this directory?
```

**Responda:** `Yes` ou `Y`

**Por que isso?**
- O Claude precisa ler seus arquivos para ajudar
- Ele só acessa a pasta atual e subpastas
- Você pode revogar a qualquer momento

---

## Comandos Essenciais

### Lista de Comandos Úteis

| Comando | Descrição | Exemplo de uso |
|---------|-----------|----------------|
| `/help` | Mostra todos os comandos | Quando esquecer algo |
| `/status` | Status do modelo e conexão | Ver se está conectado |
| `/clear` | Limpa o histórico | Começar novo tópico |
| `/exit` | Sai do Claude | Fechar a sessão |
| `/tasks` | Mostra tarefas (se tiver) | Ver Agent Team |

### Testando Comandos

**Dentro do Claude Code, tente:**

```
/help
```

Você verá todos os comandos disponíveis.

```
/status
```

Deve mostrar:
```
Model: GLM-4.7
Connected: Yes
Base URL: https://api.z.ai/api/anthropic
Quota: Available
```

---

## Interagindo com o Claude

### Exemplo 1: Fazer Perguntas

```
Explique o que é uma API REST em termos simples
```

**O Claude responde em português, de forma didática.**

### Exemplo 2: Criar Arquivos

```
Crie um arquivo Python chamado ola.py que imprime "Olá, mundo!"
```

**O Claude vai:**
1. Mostrar o código que vai criar
2. Explicar o que está fazendo
3. Criar o arquivo

### Exemplo 3: Ler Arquivos

```
Leia o arquivo ola.py e explique o que ele faz
```

### Exemplo 4: Modificar Arquivos

```
No arquivo ola.py, adicione uma função que calcula a soma de dois números
```

### Exemplo 5: Executar Código

```
Execute o arquivo ola.py
```

---

## Permissões de Arquivo

### Entendendo Permissões

O Claude Code pede permissão para:
- **Ler** seus arquivos
- **Criar** novos arquivos
- **Modificar** arquivos existentes
- **Executar** comandos no terminal

### Níveis de Acesso

**Na primeira vez, você verá:**
```
Grant access to /caminho/para/sua/pasta? (Y/n)
```

- **Y (Yes):** Concede acesso total
- **n (No):** Não concede acesso (Claude não funciona bem)

**Recomendação:** Sempre conceda acesso em pastas de projeto.

### Pastas Seguras

**✅ Safe para conceder acesso:**
- Seus projetos de código
- Pastas de trabalho
- Repositórios Git
- Pastas específicas de desenvolvimento

**❌ Evite conceder acesso:**
- Pasta home inteira (`~/`)
- Pastas do sistema (`/System`, `/Windows`)
- Pastas com dados sensíveis
- Pastas com arquivos de configuração do sistema

---

## O Ciclo de 5 Horas da Quota

### Como Funciona

Seu plano GLM Coding tem uma **quota que renova a cada 5 horas**.

**Exemplo prático:**

| Horário | Uso | Quota restante |
|---------|-----|----------------|
| 09:00 | Começa a usar | 100% (120 prompts no Lite) |
| 10:30 | Gastou 50 prompts | 58% (70 prompts restantes) |
| 12:00 | Gastou tudo | 0% (esgotado) |
| 14:00 | Próximo ciclo | 100% (renovou!) |

**Plano Lite (~120 prompts/5h):**
- Dia inteiro: ~576 prompts (120 × 4,8 ciclos)
- Uso moderado: Dura o dia todo
- Uso intenso: Pode esgotar

**Plano Pro (~600 prompts/5h):**
- Dia inteiro: ~2.880 prompts
- Uso intensivo: Dura facilmente
- Ideal para uso diário profissional

**Plano Max (~2.400 prompts/5h):**
- Dia inteiro: ~11.520 prompts
- Uso extremo: Quase impossível esgotar
- Para equipes ou uso comercial

### O Que Acontece Quando Esgota?

**Você vai ver:**
```
Error: Quota exceeded. Please wait for the next cycle.
```

**O que fazer:**
1. Espere o próximo ciclo de 5 horas
2. Ou faça upgrade de plano
3. **Não há cobrança extra** por esgotar

### Como Economizar Quota

**Dicas:**
- Seja específico nos prompts (um prompt bem feito > 10 vagos)
- Use `/clear` para mudar de contexto
- Agrupe tarefas relacionadas
- Use GLM-4.5-Air para tarefas simples

---

## Fluxo de Trabalho Típico

### Cenário 1: Criar um Script

```
Você: Crie um script em Python que lê todos os arquivos
.txt da pasta atual e conta quantas vezes cada palavra aparece.

Claude: [Cria o script wordcount.py]

Você: Execute esse script na pasta documentos/.

Claude: [Executa e mostra resultado]

Você: Adicione opção de ignorar maiúsculas/minúsculas.

Claude: [Modifica o script]
```

### Cenário 2: Debugar Código

```
Você: Este código está dando erro. Ajude a consertar.

[colando código ou caminho do arquivo]

Claude: [Analisa, identifica o erro, sugere correção]

Você: Aplicar a correção.

Claude: [Modifica o arquivo]
```

### Cenário 3: Explicar Código

```
Você: Explique o que este arquivo faz:

[caminho/do/arquivo.js]

Claude: [Lê e explica em linguagem simples]
```

---

## Prompts que Funcionam Bem

### Para Criar Algo

**✅ Bom:**
```
Crie uma função em JavaScript que valida e-mail.
Retorne true se válido, false se inválido.
Use regex para validação.
```

**❌ Ruim:**
```
Crie uma função de e-mail.
```

### Para Modificar Algo

**✅ Bom:**
```
No arquivo app.js, linha 45, mude a cor do botão de azul para verde.
Mantenha o resto igual.
```

**❌ Ruim:**
```
Mude o botão.
```

### Para Entender Algo

**✅ Bom:**
```
Explique como funciona a função calcularDesconto()
no arquivo checkout.js. Seja específico sobre os parâmetros.
```

**❌ Ruim:**
```
O que faz esse arquivo?
```

---

## Dicas de Produtividade

### 1. Seja Específico

**Em vez de:**
```
Arrume esse código.
```

**Use:**
```
Refatore a função processarDados() para ser mais legível.
Adicione comentários explicando cada passo.
Mantenha a mesma funcionalidade.
```

### 2. Use Contexto

**Em vez de:**
```
Crie uma página web.
```

**Use:**
```
Crie uma landing page para venda de curso.
Precisa ter: título, descrição, preço, botão de compra.
Use HTML + CSS simples.
Design moderno em azul e branco.
```

### 3. Peça Explicações

**Quando não entender algo:**
```
Explique o que essa linha de código faz em português simples.
Imagine que eu estou começando a programar.
```

### 4. Valide Antes de Aplicar

**Antes de modificar:**
```
Mostre o que você vai mudar antes de aplicar.
```

**Depois revise:**
```
Aplique as mudanças, mas me mostre o resultado antes de salvar.
```

---

## Exercícios Práticos

### Exercício 1: Criar um Projeto Simples

```
Crie uma pasta chamada projeto-teste.
Dentro dela, crie:
1. Um arquivo index.html com "Olá, mundo!"
2. Um arquivo style.css com cor de fundo azul
3. Um arquivo app.js que mostra um alerta ao clicar
```

### Exercício 2: Automatizar Tarefa

```
Crie um script que:
1. Lê todos os arquivos .md da pasta atual
2. Cria um arquivo indice.md com lista de todos
3. Cada item deve ser link clicável
```

### Exercício 3: Análise de Código

```
[Use um projeto seu real]

Analise a estrutura deste projeto.
 Liste os arquivos principais.
Explique o que cada um faz.
Sugira melhorias.
```

---

## Monitorando Seu Uso

### Verificar Status Atual

```
/status
```

### Estimar Quota Restante

**Não há comando exato**, mas você pode:

**Plano Lite (~120 prompts/5h):**
- Se usou há 2 horas: ~60 prompts restantes
- Se usou há 4 horas: ~24 prompts restantes

**Regra prática:** Se notar lentidão ou erros, provavelmente está perto de esgotar.

---

## Próximo Passo

Agora que você conhece o básico, vamos aprender a instalar e usar Skills!

**No Módulo 6 você vai:**
- O que são Skills do Claude
- Como instalar Skills
- Como usar as 10 Skills do HTC
- Exemplos práticos de cada Skill

---

## Resumo Rápido

**Comandos essenciais:**
```bash
claude        # Iniciar
/status       # Ver status
/clear        # Limpar conversa
/exit         # Sair
```

**Ciclo de quota:**
- Renova a cada 5 horas
- Lite: ~120 prompts/ciclo
- Pro: ~600 prompts/ciclo
- Max: ~2.400 prompts/ciclo

**Dicas de uso:**
- Seja específico
- Use contexto
- Peça explicações
- Valide antes de aplicar

---

**Módulo 6:** Instalação de Skills →
