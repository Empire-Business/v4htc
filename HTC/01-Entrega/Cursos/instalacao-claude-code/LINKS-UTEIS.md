# Links Úteis - Instalação Claude Code com GLM Coding Plan

Este arquivo contém todos os links importantes mencionados no curso, organizados por categoria.

---

## Links Oficiais

### Claude Code

- **Documentação oficial:** https://code.claude.com/docs
- **Repositório npm:** https://www.npmjs.com/package/@anthropic-ai/claude-code
- **Notas de versão:** https://code.claude.com/docs/en/changelog

### Z.ai e GLM Coding Plan

- **Site principal:** https://www.z.ai
- **Criar conta:** https://www.z.ai/signup
- **Login:** https://www.z.ai/login
- **Assinar GLM Coding:** https://z.ai/subscribe
- **Dashboard:** https://www.z.ai/dashboard

### Documentação GLM Coding

- **Overview:** https://docs.z.ai/devpack/overview
- **Guia Claude Code:** https://docs.z.ai/devpack/tool/claude
- **FAQ:** https://docs.z.ai/devpack/faq
- **Preços:** https://docs.z.ai/devpack/overview#pricing

---

## Instalação e Downloads

### Node.js

- **Site oficial:** https://nodejs.org
- **Download LTS:** https://nodejs.org/en/download
- **nvm (macOS/Linux):** https://github.com/nvm-sh/nvm
- **Verificar versão:** Execute `node --version` no terminal

### Git for Windows

- **Download:** https://git-scm.com/download/win
- **Documentação:** https://git-scm.com/doc

---

## Suporte e Comunidade

### Suporte Oficial

- **Suporte Z.ai:** https://www.z.ai/support
- **Contato:** https://www.z.ai/contact
- **Status do sistema:** https://status.z.ai

### Comunidade

- **Reddit (r/ClaudeCode):** https://www.reddit.com/r/ClaudeCode
- **Twitter (Z.ai):** https://twitter.com/zhipuai
- **Discord:** (ver documentação para link atualizado)

---

## Ferramentas Relacionadas

### Editores de Código

- **VS Code:** https://code.visualstudio.com
- **Cursor:** https://cursor.sh
- **Sublime Text:** https://www.sublimetext.com

### Gerenciadores de Senha

- **1Password:** https://1password.com
- **LastPass:** https://www.lastpass.com
- **Bitwarden:** https://bitwarden.com

---

## Integrações e Ferramentas Complementares

### Supabase (Banco de Dados)

- **Site:** https://supabase.com
- **Documentação MCP:** https://supabase.com/docs/guides/getting-started/mcp
- **Criar conta:** https://supabase.com/sign-up

### GitHub (Controle de Versão)

- **Site:** https://github.com
- **Criar conta:** https://github.com/signup
- **Documentação:** https://docs.github.com

### Vercel (Deploy)

- **Site:** https://vercel.com
- **Criar conta:** https://vercel.com/signup
- **Documentação:** https://vercel.com/docs

---

## Recursos de Aprendizado

### Principais

- **Este curso:** Instalação Claude Code com GLM Coding Plan
- **Curso Método High Ticket:** (disponível na plataforma HTC)
- **Curso Construindo Apps:** (disponível na plataforma HTC)

### Externos

- **Documentação Anthropic:** https://docs.anthropic.com
- **Tutoriais Claude Code:** https://code.claude.com/docs/en/tutorials
- **Exemplos de uso:** https://code.claude.com/docs/en/examples

---

## Referências Técnicas

### Modelos GLM

| Modelo | Descrição | Use para |
|--------|-----------|----------|
| **GLM-4.7** | Modelo mais poderoso | Tarefas complexas |
| **GLM-4.6** | Balanceado | Uso geral |
| **GLM-4.5** | Padrão | Tarefas comuns |
| **GLM-4.5-Air** | Rápido | Tarefas simples |

### Arquivos de Configuração

**Localização:**
- macOS/Linux: `~/.claude/settings.json`
- Windows: `C:\Users\SeuUsuario\.claude\settings.json`

**Estrutura básica:**
```json
{
  "env": {
    "ANTHROPIC_API_KEY": "sk-xxxxx",
    "ANTHROPIC_BASE_URL": "https://api.z.ai/api/anthropic",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "glm-4.7",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "glm-4.7",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "glm-4.5-air"
  }
}
```

---

## Planos e Preços

### Comparativo de Planos GLM Coding

| Plano | Preço | Prompts/5h | Web Search/MCP |
|-------|-------|-----------|----------------|
| **Lite** | $3-6/mês | ~120 | 100/mês |
| **Pro** | ~$15/mês | ~600 | 1.000/mês |
| **Max** | ~$30-40/mês | ~2.400 | 4.000/mês |

### Comparativo com Claude

| Serviço | Preço | Prompts/5h |
|---------|-------|-----------|
| **Claude Pro** | ~$20/mês | ~40 |
| **GLM Coding Lite** | $3-6/mês | ~120 (3x mais) |
| **Claude Max (5x)** | ~$50-60/mês | ~200 |
| **GLM Coding Pro** | ~$15/mês | ~600 (3x mais) |
| **Claude Max (20x)** | ~$200+/mês | ~800 |
| **GLM Coding Max** | ~$30-40/mês | ~2.400 (3x mais) |

---

## Comandos Rápidos

### Terminal

```bash
# Instalar Claude Code
npm install -g @anthropic-ai/claude-code

# Ver versão
claude --version

# Atualizar
claude update

# Iniciar
claude
```

### Dentro do Claude Code

```
/status    - Ver status e modelo
/help      - Mostra comandos
/clear     - Limpa conversa
/exit      - Sair
```

---

## Troubleshooting

### Problemas Comuns

| Problema | Solução | Módulo |
|----------|---------|--------|
| Config não aplica | Feche TODAS janelas e reabra | 7 |
| Command not found | Adicione ao PATH | 7 |
| Erro de conexão | Verifique internet e API key | 7 |
| Quota exceeded | Espere ou upgrade | 7 |
| JSON inválido | Valide e corrija | 7 |

### Reset Completo

```bash
# Desinstalar
npm uninstall -g @anthropic-ai/claude-code

# Remover config
rm -rf ~/.claude

# Reinstalar
npm install -g @anthropic-ai/claude-code
```

---

## Skills do HTC

### Lista de Skills

1. **htc-ofertas-creator** - Criar ofertas High Ticket
2. **htc-funnel-builder** - Construir funis de venda
3. **htc-copywriter** - Escrever copies
4. **htc-sales-script** - Scripts de vendas
5. **htc-marketing-strategy** - Estratégias de marketing
6. **htc-lead-nurturing** - Nutrir leads
7. **htc-objection-handler** - Lidar com objeções
8. **htc-pricing-strategy** - Precificação
9. **htc-content-generator** - Gerar conteúdo
10. **htc-analytics-coach** - Analisar métricas

### Instalar Skills

```bash
# Criar pasta
mkdir -p ~/.claude/skills

# Extrair .zip
unzip htc-ofertas-creator.zip -d ~/.claude/skills/

# Reiniciar Claude
claude
```

### Usar Skill

```
/skill htc-ofertas-creator
```

---

## Glossário Rápido

| Termo | Significado |
|-------|-------------|
| **Claude Code** | Ferramenta de IA para programação no terminal |
| **GLM Coding** | Plano da Z.ai para usar Claude Code |
| **API Key** | Chave de acesso à API |
| **Prompt** | Comando/texto enviado ao modelo |
| **Quota** | Limite de prompts por ciclo de 5h |
| **Skill** | Extensão com capacidades específicas |
| **MCP** | Model Context Protocol - integração com ferramentas |

---

## Atalhos de Teclado

### Terminal

- **Limpar tela:** `Ctrl + L` (Linux/macOS/Windows)
- **Cancelar comando:** `Ctrl + C`
- **Sair do Claude:** `Ctrl + D` ou `/exit`
- **Histórico:** Seta para cima/baixo

### VS Code

- **Novo terminal:** `Ctrl + ` ` (backtick)
- **Fechar terminal:** `Ctrl + Shift + ``
- **Dividir terminal:** `Ctrl + Shift + 5`

---

## Verificação de Sistema

### Comandos para Verificar

```bash
# Ver versão Node.js
node --version

# Ver versão npm
npm --version

# Ver versão Claude Code
claude --version

# Ver se está configurado
claude
/status

# Ver instalação
npm list -g @anthropic-ai/claude-code
```

### Versões Recomendadas

- **Node.js:** 18.x.x ou superior
- **npm:** 9.x.x ou superior
- **Claude Code:** 2.0.14 ou superior

---

## Contato e Suporte HTC

### Plataforma HTC

- **Site:** (link da plataforma)
- **Suporte:** (link de suporte)
- **Área de membros:** (link de login)

### Cursos Relacionados

- **Método High Ticket:** Curso completo de vendas High Ticket
- **Construindo Apps:** Curso de desenvolvimento com IA

---

## Notas e Lembretes

### Importante Lembrar

- ✅ A quota renova a cada 5 horas automaticamente
- ✅ Não há cobrança extra por esgotar quota
- ✅ Use sempre `glm-4.7` em minúsculas no settings.json
- ✅ Nunca compartilhe sua API Key publicamente
- ✅ Feche TODAS janelas do Claude antes de editar settings.json
- ✅ Valide JSON se configuração não funcionar

### Boas Práticas

- Seja específico nos prompts
- Agrupe tarefas relacionadas
- Use o modelo certo para cada tarefa
- Economize quota com prompts bem-feitos
- Mantenha o Claude Code atualizado

---

## Última Atualização

**Data:** Fevereiro 2026
**Versão do curso:** 1.0
**Compatível com:** Claude Code 2.0.14+, GLM-4.7/4.6/4.5/4.5-Air

---

**Dica:** Salve este arquivo nos favoritos do seu navegador para acesso rápido!

---

**Volte para o [INDEX](./INDEX.md)**
