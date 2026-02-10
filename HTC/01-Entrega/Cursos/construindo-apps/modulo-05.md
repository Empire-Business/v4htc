# Módulo 5: Colocando no Ar com Vercel

---

## Objetivo deste Módulo

Aprender a publicar seu aplicativo na internet gratuitamente usando Vercel - para que clientes e equipe possam acessar de qualquer lugar.

---

## O Que é Vercel (De Forma Simples)

**Vercel** = Uma plataforma que coloca seu site na internet automaticamente.

### Analogia

Você tem um documento no seu computador. Ninguém (além de você) pode ver.

Quando você coloca esse documento no Vercel, ele fica disponível em um endereço web (URL) como:
`https://agenda-beauty.vercel.app`

Aí qualquer pessoa com o link pode acessar.

### Por Que Vercel

- **Gratuito:** Para projetos pequenos e médios
- **Automático:** Todo push no GitHub = atualização automática
- **Rápido:** Seu site carrega instantaneamente
- **HTTPS:** Seguro (cadeado verde no navegador)
- **Domínio customizado:** Pode usar seu próprio domínio (seu-site.com)
- **Fácil:** Conecta com GitHub em 2 cliques

---

## Passo 1: Criar Conta no Vercel

1. Acesse: https://vercel.com
2. Clique em "Sign Up"
3. Escolha continuar com:
   - GitHub (RECOMENDADO)
   - Email
   - Google

**Dica:** Use GitHub para integração automática.

**Tempo estimado:** 2 minutos

---

## Passo 2: Importar Repositório do GitHub

### Se Conectou com GitHub

1. No Vercel, clique em **"Add New..."** → **"Project"**
2. Vai ver seus repositórios do GitHub
3. Clique em **"Import"** no seu projeto

### Se NÃO Conectou com GitHub

1. Clique em **"Add New..."** → **"Project"**
2. Clique em **"Browse all GitHub repositories"**
3. Autorize o Vercel a acessar seu GitHub
4. Importe o repositório

---

## Passo 3: Configurar o Deploy

### Configurações Básicas (Geralmente Já Vem Preenchido)

| Campo | Valor |
|-------|-------|
| Framework Preset | Next.js |
| Root Directory | ./ |
| Build Command | `npm run build` |
| Output Directory | `.next` |
| Install Command | `npm install` |

### Clique em "Deploy"

**Tempo de espera:** 1-3 minutos

O Vercel vai:
1. Baixar seu código do GitHub
2. Instalar dependências
3. Construir o projeto
4. Publicar na internet

---

## Passo 4: Seu Site Está no Ar!

### URL Gerada

O Vercel gera uma URL automaticamente:

```
https://seu-projeto-abc123.vercel.app
```

### Teste Imediato

1. Clique no link fornecido
2. Seu site abre!
3. Teste todas as funcionalidades
4. Compartilhe o link com quem precisar

---

## Atualizações Automáticas

### Como Funciona

```
Você modifica o código
    ↓
git commit
    ↓
git push para o GitHub
    ↓
Vercel detecta mudanças
    ↓
Re-deploy automático
    ↓
Site atualizado!
```

### Na Prática

```
# Você modifica algo
git add .
git commit -m "Adicionado botão de contato"
git push

# Em 1-3 minutos:
# Site atualizado automaticamente!
```

---

## Domínio Personalizado

### Usar Seu Próprio Domínio

Se você tem um domínio (ex: `agendabeauty.com`):

1. No Vercel, abra seu projeto
2. Settings → Domains
3. Adicione seu domínio
4. Configure DNS conforme instruções

### DNS Simples (Sem Domínio Próprio)

Use subdomínios gratuitos:

```
seu-projeto.vercel.app         (padrão)
app.seu-dominio.com             (se você tem domínio)
```

---

## Variáveis de Ambiente

### O Que São

Variáveis de ambiente são configurações sensíveis que não ficam no código:

- Chaves de API (Supabase, OpenAI, etc)
- URLs de banco de dados
- Senhas
- Tokens

### No Vercel

1. Abra seu projeto no Vercel
2. Settings → Environment Variables
3. Adicione variáveis:
   - **Key:** `NEXT_PUBLIC_SUPABASE_URL`
   - **Value:** sua URL do Supabase
4. Repita para cada variável
5. Redeploy o projeto

### No Código (Next.js)

```typescript
// Pode acessar no código
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
```

---

## Monitoramento

### Deployments

Veja histórico de deployments:

1. Abra projeto no Vercel
2. Clique em "Deployments"
3. Vê todos os deploys:
   - Data/hora
   - Quem fez (autor do commit)
   - Status (✓ sucesso ou ✗ erro)
   - URL da versão

### Analytics

Vercel oferece analytics básicos:

- Visitas
- Países
- Dispositivos
- Performance

Analytics → Dashboard

---

## Preview Deployments

### O Que São

Toda vez que você faz um push, o Vercel cria:

1. **Production:** Versão principal (seu-domínio.vercel.app)
2. **Preview:** Versão de teste (seu-commit-hash.vercel.app)

### Para Que Serve

Testar mudanças antes de colocar em produção:

```
Branch nova-funcionalidade
    ↓
Push para o GitHub
    ↓
Preview deployment criado
    ↓
Teste no link de preview
    ↓
Se estiver bom → merge para main
    ↓
Production atualizado
```

---

## Troubleshooting

### ERRO 1: Deploy Falhou

**Causa:** Erro de build ou código quebrado.

**Solução:**
1. Clique no deployment com erro
2. Veja os logs
3. Corrija o erro
4. Faça novo commit

**Erros comuns:**
- Falta de dependência → `npm install nome-do-pacote`
- Variável de ambiente faltando → Adicione no Vercel
- Erro de sintaxe → Corrija no código

### ERRO 2: Site Não Atualiza

**Causa:** Cache ou deploy não iniciado.

**Solução:**
```bash
# Force novo commit
git commit --allow-empty -m "Force redeploy"
git push
```

### ERRO 3: 404 Not Found

**Causa:** Rota não existe ou configuração errada.

**Solução:**
- Verifique se a rota existe em `app/`
- Verifique `vercel.json` se houver

### ERRO 4: Supabase Connection Error

**Causa:** Variáveis de ambiente não configuradas.

**Solução:**
1. Verifique se `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_ANON_KEY` estão no Vercel
2. Redeploy o projeto

---

## Dicas de Ouro

### 1. Branches

Use branches para desenvolvimento:

```
main           → Produção
develop        → Desenvolvimento
feature/login  → Funcionalidade específica
```

### 2. Commits Descritivos

Faça commits descritivos para rastrear mudanças:

```
✓ "Adicionada tela de login"
✓ "Corrigido bug no agendamento"
✓ "Atualizado layout do dashboard"
```

### 3. Teste em Preview

Antes de mergear para main:

1. Faça branch nova-funcionalidade
2. Push e teste o preview
3. Se estiver bom, merge para main
4. Production atualiza automaticamente

### 4. Monitore Performance

Use o Web Vitals do Vercel:

- LCP (Largest Contentful Paint) < 2.5s
- FID (First Input Delay) < 100ms
- CLS (Cumulative Layout Shift) < 0.1

---

## Checklist: Site no Ar

**Vercel:**
- [ ] Conta criada
- [ ] Repositório importado
- [ ] Primeiro deploy bem-sucedido
- [ ] Site acessível via URL

**Configurações:**
- [ ] Variáveis de ambiente configuradas
- [ ] Domínio personalizado (opcional)
- [ ] Branch protection (opcional)

**Rotina:**
- [ ] Sabe como atualizar o site (git push)
- [ ] Conhece URL de preview
- [ ] Monitora deployments

---

## Exemplo Prático Completo

```
# Maria publicou o Agenda Beauty

# 1. Maria criou conta no Vercel com GitHub

# 2. Maria importou o repositório agenda-beauty
# Vercel detectou Next.js automaticamente

# 3. Maria clicou em "Deploy"
# 2 minutos depois...

# Site no ar: https://agenda-beauty.vercel.app

# 4. Maria testou o site
# Funcionou perfeitamente!

# 5. Maria configurou variáveis de ambiente
# Settings → Environment Variables
# NEXT_PUBLIC_SUPABASE_URL = https://xyz.supabase.co
# NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJhbGc...

# 6. Maria quis atualizar o site
# [Modificou cores da página]
git add .
git commit -m "Atualizado cores para rosa e roxo"
git push

# 7. Vercel detectou mudanças
# 2 minutos depois...
# Site atualizado automaticamente!

# 8. Maria configurou domínio personalizado
# Settings → Domains → Add agenda.beauty.com
# Configurou DNS conforme instruções

# 9. Site acessível em https://agenda.beauty.com
```

---

## Produção vs Development

### Development (Local)

```bash
npm run dev
# Acessa: http://localhost:3000
# Apenas você vê
```

### Production (Vercel)

```
Acessa: https://seu-site.vercel.app
# Todo mundo vê
# Deploy automático do GitHub
```

---

## Próximo Passo

Com seu site no ar, vamos ver um projeto prático completo.

**→ [Módulo 6: Projeto Prático Completo](./modulo-06.md)**

---

## Resumo do Módulo 5

**Você aprendeu:**
- [x] O que é Vercel e por que usar
- [x] Criar conta e importar projeto
- [x] Fazer primeiro deploy
- [x] Atualizações automáticas
- [x] Configurar variáveis de ambiente
- [x] Resolver erros comuns de deploy
- [x] Usar domínio personalizado

**Próximo:** Ver um exemplo completo do início ao fim
