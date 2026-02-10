# Módulo 7: Troubleshooting e Solução de Problemas

## Visão Geral

Mesmo com tudo configurado corretamente, problemas podem acontecer. Este módulo te dá as ferramentas para resolver a maioria dos issues.

**Tempo estimado:** 15-20 minutos

**O que você vai aprender:**
- Resolver problemas de configuração
- Entender erros comuns
- Atualizar e manter o Claude Code
- Quando pedir ajuda

---

## Problemas de Configuração

### Problema 1: Configuração não é aplicada

**Sintomas:**
- Mudou settings.json mas nada acontece
- /status mostra modelo errado
- Ainda usa API padrão Anthropic

**Solução passo a passo:**

**Passo 1: Feche TODAS as janelas do Claude Code**

```bash
# Em cada terminal onde o Claude está rodando:
/exit
```

**Passo 2: Verifique o arquivo de configuração**

```bash
# Veja o conteúdo:
cat ~/.claude/settings.json

# Ou abra em editor:
code ~/.claude/settings.json
```

**Passo 3: Valide o JSON**

```bash
# Valide a sintaxe JSON:
cat ~/.claude/settings.json | python3 -m json.tool
```

Se mostrar erro, há problema de formatação.

**Erros comuns de JSON:**
- Vírgula extra no final da última linha
- Vírgula faltando entre linhas
- Aspas não fechadas
- Chaves `{}` não fechadas

**Exemplo de JSON ERRADO:**
```json
{
  "env": {
    "ANTHROPIC_API_KEY": "sk-xxxx",,
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "glm-4.7",
  }
}
```

**Exemplo de JSON CERTO:**
```json
{
  "env": {
    "ANTHROPIC_API_KEY": "sk-xxxx",
    "ANTHROPIC_BASE_URL": "https://api.z.ai/api/anthropic",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "glm-4.7",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "glm-4.7",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "glm-4.5-air"
  }
}
```

**Passo 4: Recrie se necessário**

```bash
# Delete o arquivo corrompido:
rm ~/.claude/settings.json

# Crie novamente (veja Módulo 4)
```

---

### Problema 2: "command not found: claude"

**Sintomas:**
- Comando claude não é reconhecido
- Instalou mas não funciona

**Solução macOS/Linux:**

**Opção A: Adicionar ao PATH manualmente**

```bash
# Edite seu ~/.bash_profile ou ~/.zshrc:
echo 'export PATH="$PATH:$(npm config get prefix)/bin"' >> ~/.bash_profile
# ou
echo 'export PATH="$PATH:$(npm config get prefix)/bin"' >> ~/.zshrc

# Aplique:
source ~/.bash_profile
# ou
source ~/.zshrc
```

**Opção B: Reinstalar com sudo (não recomendado)**

```bash
sudo npm install -g @anthropic-ai/claude-code
```

**Solução Windows:**

1. Abra "Editar variáveis de ambiente do sistema"
2. Em "Variáveis do sistema", edite "Path"
3. Adicione: `C:\Users\SeuUsuario\AppData\Roaming\npm`
4. Clique em OK em todas as janelas
5. Reinicie o terminal

---

### Problema 3: Erro de conexão

**Sintomas:**
- "Connection refused"
- "Could not connect to API"
- Timeout

**Diagnóstico:**

```bash
# Teste sua internet:
ping api.z.ai

# Teste o endpoint com curl:
curl https://api.z.ai/api/anthropic/v1/messages \
  -H "x-api-key: SUA_API_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -H "content-type: application/json" \
  -d '{"model":"glm-4.7","max_tokens":10,"messages":[{"role":"user","content":"Oi"}]}'
```

**Soluções:**

**Se falhou no ping:**
- Verifique sua internet
- Verifique se firewall não está bloqueando
- Tente outra rede ( hotspot do celular)

**Se ping funcionou mas curl falhou:**
- Verifique sua API Key
- Confirme que o plano está ativo
- Acesse https://www.z.ai e verifique sua conta

---

## Erros Comuns de Uso

### Erro 1: "Quota exceeded"

**O que significa:**
- Você esgotou sua quota de prompts do ciclo de 5 horas
- Precisa esperar o próximo ciclo

**Soluções:**

**Opção A: Espere o próximo ciclo**
- Quota renova a cada 5 horas
- Exemplo: Usou tudo às 14h, renova às 19h

**Opção B: Faça upgrade de plano**
- Lite: ~120 prompts/5h
- Pro: ~600 prompts/5h
- Max: ~2.400 prompts/5h

**Acesse:** https://www.z.ai → Subscription → Upgrade

**Opção C: Economize quota**
- Seja mais específico nos prompts
- Use GLM-4.5-Air para tarefas simples
- Agrupe tarefas relacionadas

---

### Erro 2: "Permission denied"

**Sintomas:**
- Não consegue ler/escrever arquivos
- Erro ao criar arquivos

**Causa:**
- O Claude Code não tem permissão na pasta

**Solução:**

```bash
# Verifique permissões da pasta:
ls -la /caminho/da/pasta

# Se necessário, dê permissão:
chmod +r /caminho/da/pasta
chmod +w /caminho/da/pasta

# Ou saia e entre novamente no Claude
# E permita acesso quando perguntar
```

---

### Erro 3: "Model not found"

**Sintomas:**
- Modelo glm-4.7 não encontrado
- Erro ao tentar usar modelo específico

**Causa:**
- Nome do modelo incorreto no settings.json
- Modelo não disponível

**Solução:**

**Verifique seu settings.json:**
```json
{
  "env": {
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "glm-4.7",   // CERTO
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "GLM-4.7",  // ERRADO - maiúsculas
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "GLM-4"      // ERRADO - modelo antigo
  }
}
```

**Use apenas estes modelos:**
- `glm-4.7` (principal)
- `glm-4.6`
- `glm-4.5`
- `glm-4.5-air` (rápido)

---

### Erro 4: "Invalid API key"

**Sintomas:**
- API key rejeitada
- Erro 401/403

**Soluções:**

**Passo 1: Verifique sua API Key**
```bash
# Veja sua chave (não compartilhe!):
cat ~/.claude/settings.json | grep API_KEY
```

**Passo 2: Confirme no site da Z.ai**
1. Acesse https://www.z.ai
2. Vá em "API Keys"
3. Confirme que a chave está ativa
4. Copie novamente se necessário

**Passo 3: Atualize settings.json**
```bash
# Edite o arquivo:
code ~/.claude/settings.json

# Substitua a API_KEY pela chave correta
```

---

## Problemas de Performance

### Problema 1: Respostas lentas

**Possíveis causas:**
- Internet lenta
- Servidor Z.ai congestionado
- Modelo pesado (glm-4.7)

**Soluções:**

**Teste sua velocidade:**
```bash
ping api.z.ai
```

**Se for lento:**
- Mude de rede
- Use GLM-4.5-Air para tarefas simples

**Se for rápido mas respostas lentas:**
- Pode ser congestionamento no servidor
- Tente novamente em alguns minutos
- Use GLM-4.6 em vez de GLM-4.7

---

### Problema 2: Respostas curtas/incompletas

**Possível causa:**
- Max tokens muito baixo
- Prompt muito vago

**Solução:**

**Seja específico no prompt:**
```
Em vez de: "Explique marketing"

Use: "Explique marketing digital em 5 etapas.
Dê exemplos práticos para pequenos negócios.
Seja detalhado e específico."
```

---

## Manutenção e Atualizações

### Versão Recomendada

**Versão mínima:** 2.0.14
**Versão recomendada:** Mais recente disponível

**Verificar versão:**
```bash
claude --version
```

### Como Atualizar

**Método 1: Via comando claude**
```bash
claude update
```

**Método 2: Via npm**
```bash
npm update -g @anthropic-ai/claude-code
```

### Quando Atualizar

**Atualize se:**
- Houve anúncio de nova versão
- Está tendo problemas
- Quer recursos novos
- Faz mais de 1 mês que não atualiza

**Antes de atualizar:**
- Feche todas janelas do Claude
- Salve qualquer trabalho importante
- Backup do settings.json

---

## Limpeza e Reset

### Reset Completo

Se nada mais funcionar, faça um reset completo:

```bash
# 1. Desinstale o Claude Code
npm uninstall -g @anthropic-ai/claude-code

# 2. Delete configurações
rm -rf ~/.claude

# 3. Reinstale
npm install -g @anthropic-ai/claude-code

# 4. Reconfigure (veja Módulo 4)
```

### Limpeza de Cache

Se estiver tendo problemas de performance:

```bash
# Delete cache do Claude Code
rm -rf ~/.claude/cache/*

# Reinicie o Claude
claude
```

---

## Log e Debug

### Ativar Log Detalhado

```bash
# Inicie com debug:
claude --debug
```

Isso mostra informações detalhadas do que está acontecendo.

### Ver Logs

```bash
# Logs ficam em:
tail -f ~/.claude/logs/claude.log
```

### Compartilhar Log para Suporte

Se precisar de ajuda:
1. Ative debug
2. Reproduza o problema
3. Copie o log
4. Remova informações sensíveis (API key!)
5. Compartilhe com suporte

---

## Quando Pedir Ajuda

### Tente resolver sozinho primeiro:

1. ✅ Leia este módulo de troubleshooting
2. ✅ Procure no FAQ oficial
3. ✅ Tente buscar o erro no Google

### Depois peça ajuda:

**Documentação oficial:**
- Claude Code: https://code.claude.com/docs
- Z.ai GLM Coding: https://docs.z.ai/devpack/faq

**Suporte Z.ai:**
- Acesse: https://www.z.ai
- Clique em "Support"
- Abra um ticket

**Comunidade:**
- Reddit: r/ClaudeCode
- Discord: (link na documentação)

### Ao pedir ajuda, inclua:

1. **Sistema operacional:** macOS / Windows / Linux
2. **Versão do Claude:** `claude --version`
3. **Versão do Node:** `node --version`
4. **Descrição do problema:** O que está acontecendo
5. **Passos para reproduzir:** O que você fez
6. **Mensagem de erro completa:** Copie e cole
7. **Seu settings.json:** (remova a API key!)

---

## Checklist de Troubleshooting

Antes de pedir ajuda, confirme:

- [ ] Leu este módulo inteiro
- [ ] Tentou todas as soluções sugeridas
- [ ] Verificou a versão do Claude Code
- [ ] Verificou a configuração (settings.json)
- [ ] Validou o JSON
- [ ] Testou conexão com API
- [ ] Tentou reset completo
- [ ] Preparou informações para suporte

---

## Problemas Específicos por Sistema

### macOS

**Problem: "xcrun: error"**
```bash
# Instale XCode Command Line Tools:
xcode-select --install
```

### Windows

**Problem: "npm not found"**
- Reinstale Node.js
- Reinicie o computador
- Adicione npm ao PATH

### Linux

**Problem: "EACCES"**
```bash
# Configure npm para não usar sudo:
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

---

## Próximo Passo

Último módulo! Vamos aprender dicas avançadas.

**No Módulo 8 você vai:**
- Otimizar performance
- Boas práticas avançadas
- Alternar entre modelos
- Gerenciar assinatura

---

## Resumo Rápido

**Problemas comuns:**
- Configuração não aplica → Feche TODAS janelas e reabra
- Command not found → Adicione ao PATH
- Erro de conexão → Verifique internet e API key
- Quota exceeded → Espere ou upgrade

**Manutenção:**
```bash
claude --version    # Ver versão
claude update       # Atualizar
rm -rf ~/.claude/cache/*  # Limpar cache
```

**Reset completo:**
```bash
npm uninstall -g @anthropic-ai/claude-code
rm -rf ~/.claude
npm install -g @anthropic-ai/claude-code
```

---

**Módulo 8:** Dicas Avançadas →
