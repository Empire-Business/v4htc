# Módulo 4: Salvando no GitHub

---

## Objetivo deste Módulo

Aprender a salvar seu código no GitHub - um cofre online que guarda seu trabalho com segurança e permite colaboração com sua equipe.

---

## O Que é GitHub (De Forma Simples)

**GitHub** = Um cofre online para código.

### Analogia

Imagine que você está escrevendo um livro:

- **SEM GitHub:** Se seu computador quebrar, você perde tudo. Só você pode trabalhar nele.

- **COM GitHub:** Seu livro está salvo na nuvem. Se seu computador quebrar, você recupera tudo. Pode convidar outras pessoas para escrever junto.

### Por Que Usar GitHub

1. **Backup:** Seu código está seguro na nuvem
2. **Histórico:** Vê todas as versões do seu projeto
3. **Colaboração:** Sua equipe pode trabalhar junto
4. **Deploy:** Plataformas como Vercel usam GitHub para publicar seu site
5. **Gratuito:** Repositórios públicos são gratuitos

---

## Conceitos Básicos

### Repositório (Repo)

Um repositório é uma "pasta" no GitHub que guarda seu projeto.

**Exemplo:** `agenda-beauty` é um repositório.

### Commit

Um commit é uma "foto" do seu código em um momento.

**Exemplo:** Você terminou a tela de agendamento → faz um commit "Tela de agendamento pronta".

### Push

Push é enviar seus commits do computador para o GitHub.

**Exemplo:** Você tem commits locais → dá push → vão para o GitHub.

### Pull

Pull é trazer mudanças do GitHub para seu computador.

**Exemplo:** Sua equipe modificou o código → você dá pull → recebe as mudanças.

---

## Passo 1: Criar Conta no GitHub

1. Acesse: https://github.com
2. Clique em "Sign up"
3. Preencha:
   - Username (seunome ou empresa)
   - Email
   - Senha
4. Escolha o plano gratuito (Free)
5. Verifique seu email

**Tempo estimado:** 3 minutos

---

## Passo 2: Criar Seu Primeiro Repositório

### Via Site (Mais Simples)

1. No GitHub, clique no **+** no canto superior direito
2. Escolha **"New repository"**
3. Preencha:
   - **Repository name:** nome-do-seu-projeto (ex: agenda-beauty)
   - **Description:** (opcional) Breve descrição
   - **Public ou Private:**
     - Public: Qualquer um pode ver
     - Private: Só você e quem você autorizar
   - **NÃO marque:** "Add a README file"
   - **NÃO marque:** "Add .gitignore"
4. Clique em **"Create repository"**

### O que aparece depois

O GitHub vai mostrar comandos para você usar. Guarde essa página aberta.

---

## Passo 3: Configurar Git Localmente

Git é o programa que conversa com o GitHub.

### No Mac

```bash
# Instalar Homebrew (se não tiver)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Instalar Git
brew install git
```

### No Windows

Git já vem instalado com Claude Code.

### Configurar

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

---

## Passo 4: Enviar Seu Código para o GitHub

### Cenário 1: Projeto Já Existe

Você já criou o projeto com Claude Code e quer enviar para o GitHub.

```bash
# 1. Entre na pasta do projeto
cd caminho/para/seu/projeto

# 2. Inicie o git
git init

# 3. Adicione todos os arquivos
git add .

# 4. Faça o primeiro commit
git commit -m "Primeira versão do projeto"

# 5. Conecte ao GitHub (substitua a URL)
git remote add origin https://github.com/seu-usuario/seu-repositorio.git

# 6. Envie para o GitHub
git push -u origin main
```

### Se pedir usuário e senha

O GitHub agora usa **Personal Access Token** em vez de senha.

#### Criar Token

1. No GitHub, clique em sua foto → Settings
2. Menu lateral: Developer settings
3. Personal access tokens → Tokens (classic)
4. Generate new token (classic)
5. Preencha:
   - Note: "Claude Code"
   - Expiration: 90 days
   - Scopes: marque **repo**
6. Clique em "Generate token"
7. **COPIE O TOKEN** (só aparece uma vez!)

#### Usar o Token

Quando pedir senha:
- Username: seu usuário do GitHub
- Password: cole o TOKEN (não sua senha)

### Cenário 2: Clonar Repositório Vazio

Você criou o repositório vazio no GitHub e quer clonar para seu computador.

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# 2. Entre na pasta
cd seu-repositorio

# 3. Agora use Claude Code aqui para criar o projeto
```

---

## Comandos Git Essenciais

### git status

Mostra o que mudou desde o último commit.

```bash
git status
```

**Saída:**
```
On branch main
Changes not staged for commit:
  modified:   app/page.tsx
  new file:   app/nova-pagina.tsx
```

### git add

Adiciona mudanças para o próximo commit.

```bash
# Adicionar tudo
git add .

# Adicionar arquivo específico
git add app/page.tsx
```

### git commit

Cria um "checkpoint" do seu código.

```bash
git commit -m "Descrição do que mudou"
```

**Boas práticas de mensagem:**
- "Tela de login criada"
- "Corrigido bug no agendamento"
- "Adicionado filtro por data"
- "Atualizado layout do dashboard"

### git push

Envia commits para o GitHub.

```bash
git push
```

### git pull

Traz mudanças do GitHub.

```bash
git pull
```

### git log

Mostra histórico de commits.

```bash
git log
```

---

## Fluxo de Trabalho Recomendado

### Durante o Desenvolvimento

```
Você trabalha → Testa → Funcionou?

SIM:
git add .
git commit -m "Funcionalidade X pronta"
git push

NÃO:
Continua trabalhando → Testa de novo
```

### A Cada Funcionalidade

```
1. Termina a funcionalidade
2. Testa tudo
3. git add .
4. git commit -m "Descrição clara"
5. git push
```

---

## Adicionar Colaboradores

### Convidar Someone

1. No seu repositório no GitHub
2. Settings → Collaborators
3. Add people
4. Email da pessoa
5. Escolha permissão:
   - **Read:** Só pode ver
   - **Write:** Pode modificar
   - **Admin:** Controle total

### Eles Trabalham Juntos

```
Você: push para GitHub
Colega: pull do GitHub
Colega: modifica
Colega: push para GitHub
Você: pull do GitHub
```

---

## Resolver Conflitos (Simples)

Se você e outra pessoa modificaram o mesmo arquivo:

```bash
git pull
# CONFLITO!

# Edite o arquivo, resolva o conflito
# (o git marca onde está o conflito)

git add .
git commit -m "Conflito resolvido"
git push
```

---

## Erros Comuns

### ERRO 1: "failed to push some refs"

**Causa:** Alguém mudou o código antes de você.

**Solução:**
```bash
git pull
# Resolva conflitos se houver
git push
```

### ERRO 2: "nothing to commit"

**Causa:** Não há mudanças para commitar.

**Solução:** Normal! Não precisa fazer nada.

### ERRO 3: "Permission denied"

**Causa:** Senha/token errado.

**Solução:**
1. Verifique se está usando o token
2. No Mac: rode `git credential-osxkeychain erase` e tente de novo

---

## Dicas de Ouro

### 1. Commits Frequentes

❌ **Ruim:**
```
Trabalha 1 semana → 1 commit gigante
```

✅ **Bom:**
```
Cada funcionalidade → 1 commit
```

### 2. Mensagens Claras

❌ **Ruim:**
```
git commit -m "atualizei"
```

✅ **Bom:**
```
git commit -m "Adicionada tela de cadastro de clientes com validação de CPF"
```

### 3. README.md

Crie um arquivo `README.md` na raiz do projeto:

```markdown
# Nome do Projeto

## Descrição
[2-3 linhas sobre o que o projeto faz]

## Como Rodar
\`\`\`bash
npm install
npm run dev
\`\`\`

## Tecnologias
- Next.js
- TypeScript
- Tailwind CSS
- Supabase

## Status
[ ] Em desenvolvimento
[ ] Produção
```

### 4. .gitignore

Crie um arquivo `.gitignore` para NÃO enviar arquivos desnecessários:

```
node_modules
.next
.env.local
.DS_Store
```

---

## Checklist: GitHub Configurado

**Conta:**
- [ ] Conta no GitHub criada
- [ ] Token de acesso criado e guardado

**Repositório:**
- [ ] Repositório criado
- [ ] Código enviado (git push)
- [ ] Código aparece no site do GitHub

**Rotina:**
- [ ] Sabe fazer add/commit/push
- [ ] Faz commits após cada funcionalidade
- [ ] README.md criado

---

## Exemplo Prático Completo

```
# Maria criou o Agenda Beauty com Claude Code

# 1. Maria cria repositório no GitHub
# Repositório: agenda-beauty

# 2. Maria configura git localmente
git config --global user.name " Maria Silva"
git config --global user.email "maria@email.com"

# 3. Maria inicializa o git no projeto
cd ~/projetos/agenda-beauty
git init

# 4. Maria cria o token no GitHub e copia

# 5. Maria conecta ao GitHub
git remote add origin https://github.com/mariasilva/agenda-beauty.git

# 6. Maria faz o primeiro commit
git add .
git commit -m "Primeira versão - Agenda Beauty"

# 7. Maria envia para o GitHub
git push -u origin main
# Username: mariasilva
# Password: [cola o token]

# 8. Maria continua desenvolvendo
# [Adiciona funcionalidade de login]
git add .
git commit -m "Adicionada tela de login"
git push

# [Convida seu sócio João como colaborador]

# João trabalha no projeto
git clone https://github.com/mariasilva/agenda-beauty.git
cd agenda-beauty
[ modifica código ]
git add .
git commit -m "Adicionado dashboard do administrador"
git push

# Maria pega as mudanças do João
git pull
```

---

## Próximo Passo

Com seu código no GitHub, vamos publicar na internet com Vercel.

**→ [Módulo 5: Colocando no Ar com Vercel](./modulo-05.md)**

---

## Resumo do Módulo 4

**Você aprendeu:**
- [x] O que é GitHub e por que usar
- [x] Criar conta e repositório
- [x] Comandos git essenciais
- [x] Enviar código para o GitHub
- [x] Adicionar colaboradores
- [x] Resolver conflitos simples

**Próximo:** Publicar aplicativo na internet
