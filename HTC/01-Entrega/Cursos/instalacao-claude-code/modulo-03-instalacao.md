# Módulo 3: Instalação Completa do Claude Code

## Visão Geral

Este módulo guia você pela instalação do Claude Code no seu computador. O processo é simples e leva cerca de 5 minutos.

**Tempo estimado:** 5-10 minutos

**Pré-requisitos:**
- Node.js 18+ instalado (Módulo 2)
- Conta Z.ai criada (Módulo 2)
- API Key salva (Módulo 2)

---

## Método 1: Instalação via Terminal (Recomendado)

### Passo 1: Abrir o Terminal

**macOS:**
- Pressione `Cmd + Espaço`
- Digite "Terminal"
- Pressione Enter

**Windows:**
- Pressione `Win + R`
- Digite "cmd" ou "powershell"
- Pressione Enter

**Linux:**
- Pressione `Ctrl + Alt + T`

### Passo 2: Instalar Claude Code Globalmente

No terminal, digite:

```bash
npm install -g @anthropic-ai/claude-code
```

**O que isso faz:**
- Baixa o Claude Code do registro npm
- Instala globalmente no seu sistema
- Torna o comando `claude` disponível em qualquer lugar

**Durante a instalação:**
- Você verá uma barra de progresso
- Pode levar 1-3 minutos dependendo da internet
- Várias linhas de texto aparecerão

**Quando terminar, você verá algo como:**
```
+ @anthropic-ai/claude-code@2.x.x
added X packages in Ys
```

### Passo 3: Verificar a Instalação

Ainda no terminal, digite:

```bash
claude --version
```

**Resposta esperada:**
```
2.x.x (Claude Code)
```

Se aparecer a versão, a instalação foi bem-sucedida! ✅

**Se não funcionar:**
- Feche e abra o terminal novamente
- No Windows, pode precisar reiniciar
- Veja a seção de troubleshooting no final

---

## Método 2: Usando Cursor (Alternativa)

Se você tem o editor **Cursor**, ele pode guiar a instalação:

1. Abra o Cursor
2. Abra o painel de IA (`Cmd + L` / `Ctrl + L`)
3. Digite:
```
Help me install Claude Code
https://docs.anthropic.com/en/docs/claude-code/overview
```

O Cursor irá:
- Detectar se você tem Node.js
- Guiar pela instalação passo a passo
- Verificar se está funcionando

**Use este método se:**
- Prefere interface visual
- Já usa Cursor
- Está tendo problemas com o terminal

---

## Primeira Inicialização

### Passo 1: Criar uma Pasta de Teste

```bash
# Crie uma pasta para seu primeiro projeto
mkdir meu-primeiro-projeto-claude

# Entre na pasta
cd meu-primeiro-projeto-claude
```

### Passo 2: Iniciar o Claude Code

```bash
claude
```

### Passo 3: Primeira Configuração

**Na primeira vez, o Claude Code vai pedir:**

1. **API Key da Anthropic:**
   - Você pode usar sua API Key da Z.ai
   - Ou pressionar Enter para pular (configuraremos depois)

2. **Permissões de acesso:**
   - O Claude pede permissão para acessar arquivos
   - Leia e aceite para continuar

**Tela inicial do Claude Code:**

```
Claude Code v2.x.x
Connected to GLM-4.7

Type a message or '/' for commands
```

### Passo 4: Primeiro Comando

Digite para testar:

```
/Help
```

Isso mostra todos os comandos disponíveis.

---

## Comandos Básicos do Claude Code

| Comando | O que faz | Exemplo |
|---------|----------|---------|
| `/help` | Mostra ajuda | Mostra todos comandos |
| `/status` | Status da conexão | Modelo conectado, quota |
| `/clear` | Limpa conversa | Começa do zero |
| `/exit` | Sai do Claude | Fecha a sessão |
| `/tasks` | Mostra tarefas | Se tiver agente team |

**Teste agora:**

```
/status
```

Você deve ver algo como:
```
Model: GLM-4.7
Connected: Yes
Quota: Available
```

---

## Testando o Primeiro Uso

### Exemplo 1: Criar um Arquivo

Dentro do Claude Code, digite:

```
Crie um arquivo chamado teste.txt com o texto "Olá, Claude Code!"
```

**O Claude vai:**
1. Mostrar o que vai fazer
2. Criar o arquivo
3. Confirmar que criou

### Exemplo 2: Ler um Arquivo

```
Leia o arquivo teste.txt
```

### Exemplo 3: Fazer uma Pergunta

```
Explique o que é Node.js em linguagem simples
```

---

## Estrutura de Pastas

Após instalar, o Claude Code cria:

**macOS/Linux:**
```
~/.claude/
├── settings.json      (configurações)
├── cache/             (cache de arquivos)
└── logs/              (logs de uso)
```

**Windows:**
```
C:\Users\SeuUsuario\.claude\
├── settings.json
├── cache\
└── logs\
```

**Não mexa nesses arquivos por enquanto!** Vamos configurar no próximo módulo.

---

## Atualização do Claude Code

Para manter sempre atualizado:

```bash
claude update
```

**Ou via npm:**
```bash
npm update -g @anthropic-ai/claude-code
```

**Verificar versão atual:**
```bash
claude --version
```

**Versão recomendada:** 2.0.14 ou superior

---

## Desinstalação (Se Precisar)

Se precisar remover o Claude Code:

```bash
npm uninstall -g @anthropic-ai/claude-code
```

E remova a pasta `.claude`:
```bash
# macOS/Linux
rm -rf ~/.claude

# Windows (PowerShell)
Remove-Item -Recurse -Force $env:USERPROFILE\.claude
```

---

## Troubleshooting

### Problema: "command not found: claude"

**Causa:** O npm não está no PATH

**Solução macOS/Linux:**
```bash
# Adicione ao seu ~/.bash_profile ou ~/.zshrc:
export PATH="$PATH:$(npm config get prefix)/bin"

# Depois:
source ~/.bash_profile
# ou
source ~/.zshrc
```

**Solução Windows:**
1. Abra "Editar variáveis de ambiente do sistema"
2. Em "Variáveis do sistema", edite "Path"
3. Adicione: `C:\Users\SeuUsuario\AppData\Roaming\npm`
4. Reinicie o terminal

### Problema: Permissão negada (macOS)

**Solução:** Use nvm (Módulo 2) ou:

```bash
# Configure o npm para usar um diretório sem sudo:
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bash_profile
source ~/.bash_profile

# Agora instale novamente:
npm install -g @anthropic-ai/claude-code
```

### Problema: Erro de conexão

**Verifique:**
- Sua internet está funcionando?
- O firewall não está bloqueando?
- Tente novamente em alguns minutos

### Problema: Versão antiga do Node.js

**Solução:** Atualize o Node.js (Módulo 2)

---

## Checklist de Instalação

Antes de prosseguir, confirme:

- [ ] Node.js 18+ instalado (`node --version`)
- [ ] Claude Code instalado (`claude --version`)
- [ ] Consegue iniciar o Claude (`claude`)
- [ ] Primeiro teste funcionou
- [ ] `/status` mostra informações

---

## Próximo Passo

Com o Claude Code instalado, vamos configurá-lo para usar os modelos GLM da Z.ai!

**No Módulo 4 você vai:**
- Configurar o arquivo settings.json
- Mapear os modelos GLM
- Aplicar e verificar a configuração

---

## Resumo Rápido

**Comando de instalação:**
```bash
npm install -g @anthropic-ai/claude-code
```

**Comandos básicos:**
```bash
claude              # Iniciar
claude --version    # Ver versão
claude update       # Atualizar
/status             # Status (dentro do claude)
```

**Estrutura de arquivos:**
- `~/.claude/settings.json` - Configurações (próximo módulo)

---

**Módulo 4:** Configuração com GLM Coding Plan →
