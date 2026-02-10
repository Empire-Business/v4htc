# Módulo 4: Configuração com GLM Coding Plan

## Visão Geral

Agora que o Claude Code está instalado, vamos configurá-lo para usar os modelos GLM da Z.ai. Esta é a parte mais importante para ter o funcionamento correto com baixo custo.

**Tempo estimado:** 5-10 minutos

**O que você vai fazer:**
- Criar/editar o arquivo de configuração
- Mapear os modelos GLM
- Configurar a API Key da Z.ai
- Verificar se tudo funcionou

---

## Entendendo a Configuração

### O que é o settings.json?

O arquivo `settings.json` é onde o Claude Code guarda suas configurações. Ele fica em:

**macOS/Linux:**
```
~/.claude/settings.json
```

**Windows:**
```
C:\Users\SeuUsuario\.claude\settings.json
```

### O que são variáveis de ambiente?

O Claude Code usa variáveis de ambiente para saber quais modelos usar. As principais são:

| Variável | Uso | Modelo padrão Anthropic | Modelo GLM |
|----------|-----|------------------------|------------|
| `ANTHROPIC_DEFAULT_OPUS_MODEL` | Tarefas complexas | Claude-Opus | **glm-4.7** |
| `ANTHROPIC_DEFAULT_SONNET_MODEL` | Uso geral | Claude-Sonnet | **glm-4.7** |
| `ANTHROPIC_DEFAULT_HAIKU_MODEL` | Tarefas rápidas | Claude-Haiku | **glm-4.5-air** |

---

## Passo 1: Localizar ou Criar o Arquivo

### Verificar se já existe:

**macOS/Linux:**
```bash
ls -la ~/.claude/
```

**Windows (PowerShell):**
```powershell
Test-Path $env:USERPROFILE\.claude\settings.json
```

### Se não existir, crie:

**macOS/Linux:**
```bash
mkdir -p ~/.claude
touch ~/.claude/settings.json
```

**Windows (PowerShell):**
```powershell
New-Item -ItemType Directory -Path $env:USERPROFILE\.claude -Force
New-Item -ItemType File -Path $env:USERPROFILE\.claude\settings.json -Force
```

---

## Passo 2: Editar o Arquivo de Configuração

### Método A: Usando Editor de Texto

**Abra o arquivo no seu editor preferido:**

**macOS:**
```bash
open ~/.claude/settings.json
# ou com VS Code:
code ~/.claude/settings.json
```

**Windows:**
```bash
notepad ~/.claude/settings.json
# ou com VS Code:
code %USERPROFILE%\.claude\settings.json
```

**Linux:**
```bash
nano ~/.claude/settings.json
# ou
code ~/.claude/settings.json
```

### Cole o seguinte conteúdo:

```json
{
  "env": {
    "ANTHROPIC_API_KEY": "SUA_API_KEY_AQUI",
    "ANTHROPIC_BASE_URL": "https://api.z.ai/api/anthropic",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "glm-4.5-air",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "glm-4.7",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "glm-4.7"
  }
}
```

**IMPORTANTE:** Substitua `SUA_API_KEY_AQUI` pela sua API Key da Z.ai!

**Sua API Key está em:**
1. Faça login em https://www.z.ai
2. Vá em "API Keys"
3. Copie a chave que você criou

---

### Método B: Usando o Terminal (Mais Rápido)

**macOS/Linux:**
```bash
cat > ~/.claude/settings.json << 'EOF'
{
  "env": {
    "ANTHROPIC_API_KEY": "SUA_API_KEY_AQUI",
    "ANTHROPIC_BASE_URL": "https://api.z.ai/api/anthropic",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "glm-4.5-air",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "glm-4.7",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "glm-4.7"
  }
}
EOF
```

**Windows (PowerShell):**
```powershell
@"
{
  "env": {
    "ANTHROPIC_API_KEY": "SUA_API_KEY_AQUI",
    "ANTHROPIC_BASE_URL": "https://api.z.ai/api/anthropic",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "glm-4.5-air",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "glm-4.7",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "glm-4.7"
  }
}
"@ | Out-File -FilePath $env:USERPROFILE\.claude\settings.json -Encoding utf8
```

**Substitua SUA_API_KEY_AQUI pela sua chave!**

---

## Entendendo as Configurações

### ANTHROPIC_API_KEY

**O que é:** Sua chave de acesso à API da Z.ai

**Formato:** `sk-xxxxxxxxxxxxxxxxxxxx`

**Onde conseguir:** https://www.z.ai → API Keys

**⚠️ NUNCA compartilhe esta chave publicamente!**

### ANTHROPIC_BASE_URL

**O que é:** O endpoint da API que o Claude Code deve usar

**Valor correto:** `https://api.z.ai/api/anthropic`

**Por que isso importa:** Sem isso, o Claude tenta usar a API padrão da Anthropic (que não funciona com GLM)

### Mapeamento de Modelos

| Variável | Valor configurado | Quando é usado |
|----------|------------------|----------------|
| `ANTHROPIC_DEFAULT_OPUS_MODEL` | `glm-4.7` | Tarefas complexas, raciocínio avançado |
| `ANTHROPIC_DEFAULT_SONNET_MODEL` | `glm-4.7` | Uso geral, maioria dos comandos |
| `ANTHROPIC_DEFAULT_HAIKU_MODEL` | `glm-4.5-air` | Respostas rápidas, tarefas simples |

**Por que GLM-4.7 em dois lugares?**
- GLM-4.7 é o modelo mais poderoso
- Usar ele tanto como Opus quanto Sonnet garante máxima performance
- GLM-4.5-Air fica apenas para tarefas rápidas onde velocidade é mais importante

---

## Passo 3: Aplicar a Configuração

### Fechar Todas as Janelas do Claude Code

**IMPORTANTE:** Se você tiver o Claude Code aberto, feche todas as instâncias!

**No terminal do Claude Code, digite:**
```
/exit
```

Ou pressione `Ctrl + D` / `Cmd + D`

### Abrir Novo Terminal

**Por que isso é necessário?**
- O Claude Code lê a configuração apenas ao iniciar
- Mudanças no settings.json não são aplicadas em tempo real

---

## Passo 4: Verificar se Funcionou

### Teste 1: Iniciar o Claude Code

```bash
claude
```

**Se aparecer algo como:**
```
Claude Code v2.x.x
Connected to GLM-4.7

Type a message or '/' for commands
```

✅ **Está funcionando!**

### Teste 2: Verificar Status

Dentro do Claude Code, digite:

```
/status
```

**Resposta esperada:**
```
Model: GLM-4.7
Connected: Yes
Base URL: https://api.z.ai/api/anthropic
```

### Teste 3: Primeira Pergunta

```
Qual modelo você está usando?
```

**Resposta esperada:** Algo mencionando GLM-4.7

---

## Configurações Alternativas

### Usando GLM-4.6 em vez de GLM-4.7

Se quiser usar o GLM-4.6 (pode ser mais rápido):

```json
{
  "env": {
    "ANTHROPIC_API_KEY": "SUA_API_KEY_AQUI",
    "ANTHROPIC_BASE_URL": "https://api.z.ai/api/anthropic",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "glm-4.5-air",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "glm-4.6",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "glm-4.7"
  }
}
```

### Usando GLM-4.5 em vez de GLM-4.5-Air

Se preferir o GLM-4.5 padrão:

```json
{
  "env": {
    "ANTHROPIC_API_KEY": "SUA_API_KEY_AQUI",
    "ANTHROPIC_BASE_URL": "https://api.z.ai/api/anthropic",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "glm-4.5",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "glm-4.7",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "glm-4.7"
  }
}
```

---

## Troubleshooting

### Problema: "Configuration not working"

**Solução 1: Verifique o JSON**

```bash
# Valide o JSON:
cat ~/.claude/settings.json | python3 -m json.tool
```

Se mostrar erro, há problema de formatação. Verifique:
- Vírgulas extras no final
- Vírgulas faltando
- Aspas não fechadas
- Chaves não fechadas

**Solução 2: Recrie o arquivo**

```bash
# Delete o arquivo:
rm ~/.claude/settings.json

# Crie novamente (veja Passo 2)
```

**Solução 3: Verifique se a API Key está correta**

- Acesse https://www.z.ai
- Vá em "API Keys"
- Confirme que a chave está correta
- Crie uma nova se necessário

### Problema: "Connection error"

**Verifique:**
- Sua internet está funcionando?
- O `ANTHROPIC_BASE_URL` está correto?
- Sua API Key é válida?

**Teste manual:**
```bash
curl https://api.z.ai/api/anthropic/v1/messages
  -H "x-api-key: SUA_API_KEY"
  -H "anthropic-version: 2023-06-01"
```

### Problema: "Quota exceeded"

**O que isso significa:**
- Você usou todos os prompts do ciclo de 5 horas
- Espere o próximo ciclo começar
- Ou faça upgrade de plano

**Quota por plano:**
- Lite: ~120 prompts/5h
- Pro: ~600 prompts/5h
- Max: ~2.400 prompts/5h

---

## Checklist de Configuração

Antes de prosseguir:

- [ ] Arquivo settings.json criado/editado
- [ ] API Key da Z.ai adicionada
- [ ] Base URL configurado corretamente
- [ ] Modelos mapeados (glm-4.7, glm-4.5-air)
- [ ] Todas janelas do Claude fechadas
- [ ] Novo terminal aberto
- [ ] `/status` mostra GLM-4.7
- [ ] Primeiro teste funcionou

---

## Resumo do Arquivo de Configuração

```json
{
  "env": {
    "ANTHROPIC_API_KEY": "sk-xxxxxxxxxxxxxxxxxxxx",
    "ANTHROPIC_BASE_URL": "https://api.z.ai/api/anthropic",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "glm-4.5-air",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "glm-4.7",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "glm-4.7"
  }
}
```

**Campos explicados:**
- `ANTHROPIC_API_KEY`: Sua chave da Z.ai
- `ANTHROPIC_BASE_URL`: Endpoint da API Z.ai
- `ANTHROPIC_DEFAULT_OPUS_MODEL`: Modelo para tarefas complexas (glm-4.7)
- `ANTHROPIC_DEFAULT_SONNET_MODEL`: Modelo padrão (glm-4.7)
- `ANTHROPIC_DEFAULT_HAIKU_MODEL`: Modelo rápido (glm-4.5-air)

---

## Próximo Passo

Configuração pronta! Agora vamos aprender os primeiros passos com o Claude Code.

**No Módulo 5 você vai:**
- Entender permissões de arquivo
- Aprender comandos básicos
- Entender o ciclo de quota
- Fazer seus primeiros testes práticos

---

**Módulo 5:** Primeiros Passos →
