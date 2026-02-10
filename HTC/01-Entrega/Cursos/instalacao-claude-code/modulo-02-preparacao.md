# Módulo 2: Preparação e Requisitos

## Visão Geral

Antes de instalar o Claude Code, você precisa preparar seu ambiente. Este módulo garante que tudo funcione sem problemas.

**Tempo estimado:** 15-20 minutos

---

## Checklist Inicial

- [ ] Verificar sistema operacional compatível
- [ ] Instalar Node.js 18+
- [ ] Criar conta na Z.ai
- [ ] Escolher e assinar plano GLM Coding
- [ ] Obter API Key da Z.ai

---

## Requisitos do Sistema

### macOS

**Requisito:** Node.js 18 ou superior

**Recomendação:** Use **nvm** (Node Version Manager) para instalar Node.js

**Por que nvm?**
- Evita problemas de permissão
- Permite alternar entre versões do Node.js
- Instalação limpa sem conflitos

**Como verificar se já tem Node.js:**
```bash
node --version
```

Se aparecer `v18.x.x` ou superior, você já tem Node.js instalado.

**Se não tiver ou precisar atualizar:**

1. Instale o nvm primeiro:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

2. Feche e abra o terminal

3. Instale o Node.js 18 (ou LTS):
```bash
nvm install 18
nvm use 18
```

4. Verifique:
```bash
node --version
npm --version
```

---

### Windows

**Requisitos:**
1. **Node.js 18+**
2. **Git for Windows** (obrigatório)

**Instalação do Node.js:**

1. Acesse: https://nodejs.org
2. Baixe o instalador LTS (Long Term Support)
3. Execute o instalador
4. Marque a opção "Automatically install necessary tools"
5. Clique em Install

**Instalação do Git for Windows:**

1. Acesse: https://git-scm.com/download/win
2. Baixe o instalador
3. Execute com configurações padrão
4. Verifique a instalação:
```cmd
node --version
npm --version
git --version
```

---

### Linux

**Debian/Ubuntu:**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Fedora:**
```bash
sudo dnf install nodejs
```

**Verifique:**
```bash
node --version
npm --version
```

---

## Criando Conta na Z.ai

### Passo 1: Acessar o site

1. Abra o navegador
2. Acesse: https://www.z.ai
3. Clique em "Sign Up" ou "Criar conta"

### Passo 2: Cadastro

**Opções de cadastro:**
- E-mail e senha
- Google (recomendado - mais rápido)
- GitHub

**Informações necessárias:**
- E-mail válido
- Senha forte (mínimo 8 caracteres)
- Confirmar e-mail

### Passo 3: Verificar e-mail

1. Abra seu e-mail
2. Procure mensagem da Z.ai
3. Clique no link de confirmação
4. Retorne ao site e faça login

---

## Escolhendo e Assinando o Plano GLM Coding

### Comparativo de Planos

| Plano | Preço mensal | Prompts/5h | Prompts/dia | Web Search/MCP mês | Ideal para |
|-------|-------------|-----------|-------------|-------------------|-----------|
| **Lite** | $3-6 | ~120 | ~576 | 100 | Testes, uso leve |
| **Pro** | ~$15 | ~600 | ~2.880 | 1.000 | Uso diário intenso |
| **Max** | ~$30-40 | ~2.400 | ~11.520 | 4.000 | Equipes, uso profissional |

**Como funciona o ciclo de 5 horas:**
- A quota renova automaticamente a cada 5 horas
- Se esgotar, espere o próximo ciclo começar
- Não há cobrança extra por passar da quota
- Exemplo: Usou às 9h, renova às 14h

### Passo a Passo para Assinar

1. **Faça login** na sua conta Z.ai

2. **Acesse a página de assinatura:**
   - Clique no seu avatar (canto superior direito)
   - Selecione "Subscription" ou "Assinatura"

3. **Escolha o plano:**
   - **Lite** comece aqui se está testando
   - **Pro** melhor custo-benefício para uso pessoal
   - **Max** para equipes ou uso muito intenso

4. **Selecione o ciclo:**
   - Mensal (mais flexível)
   - Anual (geralmente desconto de 20-30%)

5. **Escolha forma de pagamento:**
   - Cartão de crédito
   - PayPal

6. **Confirme e pague**

7. **Confirmação:**
   - Você receberá e-mail de confirmação
   - O plano fica ativo imediatamente

### Dicas de Escolha

**Comece com Lite se:**
- Quer apenas testar
- Vai usar ocasionalmente
- Tem orçamento limitado

**Escolha Pro se:**
- Vai usar diariamente
- Precisa de mais quota
- Quer o melhor custo-benefício

**Vá de Max se:**
- Tem equipe usando
- Precisa de quota generosa
- Usa MCP tools intensivamente

---

## Obtendo sua API Key

### Passo 1: Acessar o Dashboard

1. Faça login em https://www.z.ai
2. No menu lateral, clique em "API Keys"

### Passo 2: Criar nova API Key

1. Clique em "Create API Key" ou "+ New"
2. Dê um nome para identificar (ex: "Claude Code")
3. Selecione as permissões (deixe padrão)
4. Clique em "Create"

### Passo 3: Salvar a API Key

**IMPORTANTE:** Copie e salve sua API Key agora!

Você só verá a chave completa **uma única vez**.

**Onde salvar:**
- Gerenciador de senhas (1Password, LastPass, etc)
- Arquivo texto seguro (não compartilhe!)
- Variável de ambiente (mostrarei depois)

**Formato da chave:**
```
sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**⚠️ NUNCA compartilhe sua API Key publicamente!**

---

## Verificando Tudo Pronto

### Checklist Final

Antes de prosseguir para a instalação, verifique:

**Sistema:**
- [ ] Node.js 18+ instalado
- [ ] npm funciona (`npm --version`)
- [ ] Git instalado (Windows)

**Conta Z.ai:**
- [ ] Conta criada e verificada
- [ ] Plano GLM Coding ativo
- [ ] API Key salva em local seguro

**Teste rápido:**

No terminal, digite:
```bash
node --version
```

Deve retornar algo como `v18.x.x` ou superior.

---

## Solução de Problemas Comuns

### Node.js não funciona após instalação

**macOS:**
```bash
# Feche e abra o terminal novamente
# Se ainda não funcionar:
source ~/.bash_profile
# ou
source ~/.zshrc
```

**Windows:**
- Reinicie o computador
- Verifique se Node.js está no PATH

### Não consigo criar conta Z.ai

- Verifique se o e-mail está correto
- Procure no spam/lixeira
- Tente outro navegador
- Use cadastro com Google

### Pagamento recusado

- Verifique dados do cartão
- Tente outro cartão
- Use PayPal se disponível
- Entre em contato com suporte Z.ai

---

## Próximo Passo

Com tudo preparado, você está pronto para instalar o Claude Code!

**No Módulo 3 você vai:**
- Instalar o Claude Code globalmente
- Iniciar pela primeira vez
- Configurar permissões básicas

---

## Resumo Rápido

| Sistema | Node.js | Recomendação |
|---------|---------|--------------|
| **macOS** | Via nvm | `nvm install 18` |
| **Windows** | Instalador + Git for Windows | Baixe do nodejs.org |
| **Linux** | Via gerenciador | `apt install nodejs` |

**Plano GLM Coding:**
- **Lite:** $3-6/mês, 120 prompts/5h
- **Pro:** ~$15/mês, 600 prompts/5h
- **Max:** ~$30-40/mês, 2.400 prompts/5h

---

**Módulo 3:** Instalação Completa do Claude Code →
