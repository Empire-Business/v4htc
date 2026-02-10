# Módulo 8: Supabase - Banco de Dados

---

## Objetivo deste Módulo

Aprender a usar Supabase - um banco de dados "de verdade" que parece uma planilha inteligente, e integrar ao seu aplicativo Next.js.

---

## O Que é Supabase (De Forma Simples)

**Supabase** = Firebase de código aberto = Planilha super poderosa na nuvem.

### Analogia

Imagine uma planilha do Excel:

- Você tem colunas (nome, email, telefone)
- Você adiciona linhas (dados)
- Você pode filtrar, buscar, atualizar

**Supabase é isso, mas:**
- Várias pessoas podem editar ao mesmo tempo
- Atualiza em tempo real
- Mais seguro
- Mais rápido
- Integrável com seu app

### Por Que Supabase

- **Gratuito:** Plano generoso para começar
- **Simples:** Interface como planilha
- **Completo:** Banco + Auth + Storage + Realtime
- **Next.js:** Integração perfeita
- **MCP:** Servidor oficial para Claude Code

---

## Passo 1: Criar Conta no Supabase

1. Acesse: https://supabase.com
2. Clique em "Start your project"
3. Entre com GitHub (recomendado)
4. Autorize o acesso

**Tempo estimado:** 2 minutos

---

## Passo 2: Criar Seu Primeiro Projeto

1. No dashboard, clique "New Project"
2. Preencha:
   - **Name:** nome-do-projeto (ex: agenda-beauty)
   - **Database Password:** crie uma senha (guarde!)
   - **Region:** São Paulo (ou mais perto de você)
3. Clique "Create new project"

**Tempo de espera:** 2-3 minutos

---

## Passo 3: Entender a Interface

### Table Editor (Editor de Tabelas)

Acesse: Table Editor no menu lateral

Aqui você:
- Cria tabelas
- Adiciona colunas
- Edita dados (como planilha)

### SQL Editor

Acesse: SQL Editor no menu lateral

Aqui você:
- Executa comandos SQL
- Cria tabelas via código
- Faz queries complexas

### API Docs

Acessa: API Docs no menu lateral

Aqui você:
- Vê como integrar via código
- Testa endpoints
- Copia exemplos

---

## Passo 4: Criar Tabelas

### Via Table Editor (Mais Simples)

1. Table Editor → "New table"
2. Preencha:
   - **Name:** nome da tabela (ex: agendamentos)
   - **Add column:**
     - Name: id
     - Type: int8
     - Primary key: ✓
   - Continue adicionando colunas:

| Nome | Tipo | Descrição |
|------|------|-----------|
| cliente_nome | text | Nome do cliente |
| cliente_telefone | text | Telefone do cliente |
| data_hora | timestamp | Quando é o agendamento |
| servico | text | Qual serviço |
| status | text | "agendado", "concluído", "cancelado" |
| criado_em | timestamp | Quando criou o registro |

3. Clique "Save"

### Via SQL (Mais Flexível)

SQL Editor → New query:

```sql
CREATE TABLE agendamentos (
  id BIGSERIAL PRIMARY KEY,
  cliente_nome TEXT NOT NULL,
  cliente_telefone TEXT NOT NULL,
  profissional_id BIGINT,
  servico TEXT NOT NULL,
  data_hora TIMESTAMP WITH TIME ZONE NOT NULL,
  status TEXT DEFAULT 'agendado',
  criado_em TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

Clique "Run".

---

## Passo 5: Inserir Dados de Teste

### Via Table Editor

1. Abra a tabela
2. Clique "Insert row"
3. Preencha os campos
4. Clique "Save"

### Via SQL Editor

```sql
INSERT INTO agendamentos (cliente_nome, cliente_telefone, servico, data_hora)
VALUES ('Maria Silva', '11999999999', 'Corte Feminino', '2026-02-10 14:00:00');
```

---

## Passo 6: Configurar o Supabase MCP

O que é MCP? **Model Context Protocol** - permite que Claude Code acesse seu Supabase diretamente.

### Instalar o Servidor Supabase MCP

No terminal:

```bash
npm install -g @supabase/supabase-mcp
```

### Configurar no Claude Code

Edite o arquivo de configuração do Claude Code:

**No Mac:** `~/.claude-code/config.json`

**No Windows:** `%APPDATA%\claude-code\config.json`

```json
{
  "mcpServers": {
    "supabase": {
      "command": "npx",
      "args": ["-y", "@supabase/supabase-mcp"],
      "env": {
        "SUPABASE_PROJECT_URL": "https://xyz.supabase.co",
        "SUPABASE_SERVICE_ROLE_KEY": "eyJhbGc..."
      }
    }
  }
}
```

### Onde Pegar as Credenciais

No Supabase:
1. Settings → API
2. Copie:
   - Project URL
   - service_role secret (NÃO anon key!)

**Importante:** service_role key tem acesso total. Não compartilhe!

---

## Passo 7: Usar Supabase com Claude Code + MCP

### Prompt para Criar Tabela

```
Claude, usando o Supabase MCP, crie uma tabela chamada "clientes" com:
- id (primary key, auto increment)
- nome (texto, obrigatório)
- email (texto, único)
- telefone (texto)
- criado_em (timestamp, default agora)
```

Claude vai usar o MCP para criar a tabela diretamente no seu Supabase!

### Prompt para Inserir Dados

```
Claude, usando o Supabase MCP, insira um cliente:
- nome: João Santos
- email: joao@email.com
- telefone: 11988888888
```

### Prompt para Buscar Dados

```
Claude, usando o Supabase MCP, busque todos os clientes ordenados por nome.
```

### Prompt para Atualizar

```
Claude, usando o Supabase MCP, atualize o cliente com email joao@email.com:
- telefone: 11977777777
```

---

## Passo 8: Integrar Supabase no Next.js

### Instalar Cliente

```bash
npm install @supabase/supabase-js
```

### Criar Cliente Supabase

Crie `lib/supabase.ts`:

```typescript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

### Adicionar Variáveis de Ambiente

`.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://xyz.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
```

**No Vercel:** Não esqueça de adicionar lá também!

---

## Operações CRUD com Supabase

### CREATE - Inserir Dados

```typescript
import { supabase } from '@/lib/supabase'

async function criarAgendamento(dados: any) {
  const { data, error } = await supabase
    .from('agendamentos')
    .insert([
      {
        cliente_nome: dados.nome,
        cliente_telefone: dados.telefone,
        servico: dados.servico,
        data_hora: dados.dataHora,
      }
    ])

  if (error) throw error
  return data
}
```

### READ - Buscar Dados

```typescript
async function buscarAgendamentos() {
  const { data, error } = await supabase
    .from('agendamentos')
    .select('*')
    .order('data_hora', { ascending: true })

  if (error) throw error
  return data
}

async function buscarAgendamentoPorId(id: number) {
  const { data, error } = await supabase
    .from('agendamentos')
    .select('*')
    .eq('id', id)
    .single()

  if (error) throw error
  return data
}
```

### UPDATE - Atualizar Dados

```typescript
async function atualizarStatus(id: number, status: string) {
  const { data, error } = await supabase
    .from('agendamentos')
    .update({ status })
    .eq('id', id)

  if (error) throw error
  return data
}
```

### DELETE - Deletar Dados

```typescript
async function cancelarAgendamento(id: number) {
  const { data, error } = await supabase
    .from('agendamentos')
    .delete()
    .eq('id', id)

  if (error) throw error
  return data
}
```

---

## Tabela de Prompts Úteis Supabase

| Ação | Prompt |
|------|--------|
| Criar tabela | "Crie tabela X com colunas: ..." |
| Inserir dado | "Insira em X: campo1=valor1, campo2=valor2" |
| Buscar tudo | "Busque todos os registros de X" |
| Buscar com filtro | "Busque X onde campo=valor" |
| Buscar ordenado | "Busque X ordenado por campo ASC/DESC" |
| Atualizar | "Atualize X onde id=123: campo=novo_valor" |
| Deletar | "Delete de X onde id=123" |
| Contar | "Conte quantos registros em X" |
| Contar com filtro | "Conte X onde status='agendado'" |
| Join tabelas | "Busque agendamentos com nome do profissional (join)" |

---

## Relacionamento entre Tabelas

### Criar Tabela com Foreign Key

```sql
CREATE TABLE profissionais (
  id BIGSERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  especialidade TEXT NOT NULL
);

-- Adiciona foreign key depois
ALTER TABLE agendamentos
ADD COLUMN profissional_id BIGINT
REFERENCES profissionais(id);
```

### Buscar com Join

```typescript
async function buscarAgendamentosComProfissional() {
  const { data, error } = await supabase
    .from('agendamentos')
    .select(`
      *,
      profissionais (
        nome,
        especialidade
      )
    `)
    .order('data_hora', { ascending: true })

  if (error) throw error
  return data
}
```

---

## Autenticação Simples com Supabase

### Criar Usuário

```typescript
async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) throw error
  return data
}
```

### Fazer Login

```typescript
async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) throw error
  return data
}
```

### Verificar Login

```typescript
// No servidor (Server Component)
async function getSession() {
  const supabase = createServerComponentClient()
  const { data: { session } } = await supabase.auth.getSession()
  return session
}

// No cliente
const { data: { session } } = await supabase.auth.getSession()
```

---

## Row Level Security (RLS)

O que é? Segurança em nível de linha - cada usuário só vê seus próprios dados.

### Ativar RLS

SQL Editor:
```sql
ALTER TABLE agendamentos ENABLE ROW LEVEL SECURITY;
```

### Criar Política

```sql
-- Usuários só vêem seus próprios agendamentos
CREATE POLICY "Usuários podem ver seus agendamentos"
ON agendamentos
FOR SELECT
USING (auth.uid() = user_id);

-- Usuários podem criar seus agendamentos
CREATE POLICY "Usuários podem criar agendamentos"
ON agendamentos
FOR INSERT
WITH CHECK (auth.uid() = user_id);
```

---

## Dicas de Ouro

### 1. Sempre Use Types

Crie tipos TypeScript para suas tabelas:

```typescript
type Agendamento = {
  id: number
  cliente_nome: string
  cliente_telefone: string
  profissional_id?: number
  servico: string
  data_hora: string
  status: 'agendado' | 'concluido' | 'cancelado'
  criado_em: string
}
```

### 2. Valide no Frontend

Antes de enviar para Supabase:

```typescript
if (!nome || nome.length < 3) {
  throw new Error('Nome deve ter pelo menos 3 caracteres')
}
```

### 3. Trate Erros

```typescript
try {
  const data = await criarAgendamento(dados)
} catch (error) {
  if (error.code === '23505') {
    alert('Já existe um agendamento neste horário')
  } else {
    alert('Erro ao criar agendamento')
  }
}
```

### 4. Use Índices

Para tabelas grandes:

```sql
CREATE INDEX idx_agendamentos_data ON agendamentos(data_hora);
```

### 5. Backup Regular

Supabase faz backup automático, mas:

```sql
-- Exportar dados
COPY agendamentos TO 'backup.csv' CSV HEADER;
```

---

## Erros Comuns

### ERRO 1: "relation does not exist"

**Causa:** Tabela não existe ou nome errado.

**Solução:**
```sql
-- Liste todas as tabelas
SELECT table_name FROM information_schema.tables
WHERE table_schema = 'public';
```

### ERRO 2: "null value in column violates not-null constraint"

**Causa:** Campo obrigatório vazio.

**Solução:**
```typescript
// Verifique se todos os campos obrigatórios estão preenchidos
if (!campoObrigatorio) {
  throw new Error('Campo obrigatório')
}
```

### ERRO 3: "duplicate key value violates unique constraint"

**Causa:** Tentando inserir valor que já existe em campo único.

**Solução:**
```typescript
// Verifique antes de inserir
const { data: existe } = await supabase
  .from('tabela')
  .select('id')
  .eq('campo_unico', valor)
  .single()

if (existe) {
  throw new Error('Já existe')
}
```

### ERRO 4: Conexão Recusada

**Causa:** Variáveis de ambiente erradas.

**Solução:**
1. Verifique `.env.local`
2. Verifique variáveis no Vercel
3. Recrie o cliente Supabase

---

## Checklist: Supabase Configurado

**Conta:**
- [ ] Conta criada
- [ ] Projeto criado
- [ ] URL e keys anotadas

**Tabelas:**
- [ ] Tabelas criadas
- [ ] Colunas definidas
- [ ] Dados de teste inseridos

**MCP:**
- [ ] Supabase MCP instalado
- [ ] Claude Code configurado
- [ ] Testou criar tabela via prompt

**Next.js:**
- [ ] @supabase/supabase-js instalado
- [ ] Cliente criado
- [ ] Variáveis de ambiente configuradas
- [ ] Operações CRUD funcionando

---

## Próximo Passo

Agora vamos conhecer o segundo caminho: Lovable, uma alternativa mais simples.

**→ [Módulo 9: Caminho 2 - Construindo com Lovable](./modulo-09.md)**

---

## Resumo do Módulo 8

**Você aprendeu:**
- [x] O que é Supabase
- [x] Criar projeto e tabelas
- [x] Configurar Supabase MCP
- [x] Integrar com Next.js
- [x] Operações CRUD
- [x] Autenticação básica
- [x] RLS para segurança
- [x] Prompts úteis

**Próximo:** Alternativa mais simples - Lovable
