# HTC Squad - Tech Stack & Configuration

**Versão:** 1.0.0
**Atualizado:** 2026-02-09

---

## Stack Tecnológico

### Frontend
- **Framework:** Next.js 14+ (App Router)
- **UI Library:** shadcn/ui
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion

### Backend & Database
- **Database:** Supabase (PostgreSQL)
- **ORM:** Prisma
- **Auth:** Supabase Auth

### IA & APIs
- **AI Provider:** Open Router
- **Models:** GLM-4.7, GLM-4.6, GLM-4.5, GLM-4.5-Air
- **AI Tool:** Claude Code (desktop)

### Payment & Access
- **Payment:** Hotmart
- **Webhooks:** Custom webhook system

### Media
- **Video:** Vimeo / YouTube / Panda Vídeos
- **Images:** Cloudinary (opcional)

### Hosting & Deploy
- **Hosting:** Vercel
- **CI/CD:** Vercel automatic
- **Repository:** GitHub

### Development Tools
- **Language:** TypeScript
- **Package Manager:** npm/pnpm
- **Code Quality:** ESLint, Prettier
- **Testing:** Jest, Playwright

---

## Integrações

### 1. Hotmart (Payment & Access)

**Purpose:** Processamento de pagamentos e controle de acesso

**Integration:**
- Webhook para notificações de compra
- API para verificar status de assinatura
- Sincronização de usuários

**Endpoints:**
- POST /api/webhooks/hotmart - Recebe notificações
- GET /api/user/access - Verifica acesso do usuário

---

### 2. Supabase (Database)

**Purpose:** Banco de dados e autenticação

**Integration:**
- MCP Server para Claude Code
- SDK JavaScript para Next.js
- Row Level Security (RLS) para segurança

**Tables:**
- users
- courses
- progress
- skills
- webhooks

---

### 3. Open Router (AI)

**Purpose:** Alimentação da IA de suporte

**Integration:**
- API REST
- Streaming responses

**Models:**
- GLM-4.7 (principal)
- GLM-4.6 (alternativo)
- GLM-4.5-Air (rápido)

---

### 4. Video Platforms

**Purpose:** Hospedagem de vídeos dos cursos

**Integration:**
- Embed iframes
- API para progresso de vídeo

**Suportados:**
- Vimeo
- YouTube
- Panda Vídeos

---

## Estrutura de Pastas (Projeto Final)

```
htc-app/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Auth routes
│   ├── (dashboard)/       # Dashboard routes
│   ├── api/               # API routes
│   └── layout.tsx
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── course/           # Course components
│   ├── builder/          # Builder components
│   └── support/          # AI support components
├── lib/                  # Utilities
│   ├── supabase.ts       # Supabase client
│   ├── openrouter.ts     # Open Router client
│   └── utils.ts          # Utilities
├── types/                # TypeScript types
├── public/               # Static assets
└── prisma/              # Database schema
```

---

## Variáveis de Ambiente

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Open Router
OPENROUTER_API_KEY=
OPENROUTER_MODEL=glm-4.7

# Hotmart
HOTMART_WEBHOOK_SECRET=
HOTMART_API_TOKEN=

# App
NEXT_PUBLIC_APP_URL=
NEXT_PUBLIC_APP_NAME=HTC
```

---

## Supabase MCP Configuration

### Para Claude Code

```json
{
  "env": {
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "glm-4.5-air",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "glm-4.7",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "glm-4.7"
  }
}
```

### MCP Server Installation

```bash
# Add Supabase MCP
claude mcp add --transport http supabase https://mcp.supabase.com/mcp

# Authenticate
claude mcp auth supabase
```

---

## Deploy Instructions

### Para Vercel

1. **Conectar GitHub**
   - Vercel dashboard → Add New Project
   - Import from GitHub
   - Select repository

2. **Configure Environment Variables**
   - Add all variables from above
   - Use Vercel env management

3. **Deploy**
   - Automatic on push to main
   - Or manual deploy

### For Local Development

```bash
# Install dependencies
npm install

# Setup environment
cp .env.example .env.local

# Run development server
npm run dev

# Open http://localhost:3000
```

---

## Performance Targets

- **FCP (First Contentful Paint):** < 1.5s
- **LCP (Largest Contentful Paint):** < 2.5s
- **TTI (Time to Interactive):** < 3.5s
- **CLS (Cumulative Layout Shift):** < 0.1

---

## Security Checklist

- [ ] Environment variables secured
- [ ] Supabase RLS enabled
- [ ] API rate limiting
- [ ] XSS protection
- [ ] CSRF tokens
- [ ] Secure headers (CSP)
- [ ] Input validation
- [ ] Output sanitization

---

## Monitoring & Analytics

- **Error Tracking:** Sentry (optional)
- **Analytics:** Vercel Analytics / Plausible
- **Uptime:** UptimeRobot (optional)
- **Performance:** Lighthouse CI

---

## Dependencies

### Production

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "@supabase/supabase-js": "^2.0.0",
    "@supabase/auth-helpers-nextjs": "^0.8.0",
    "tailwindcss": "^3.3.0",
    "framer-motion": "^10.0.0",
    "zod": "^3.22.0"
  }
}
```

### Development

```json
{
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "typescript": "^5.0.0",
    "eslint": "^8.0.0",
    "prettier": "^3.0.0",
    "prisma": "^5.0.0"
  }
}
```

---

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Open Router](https://openrouter.ai/docs)
- [Hotmart API](https://developers.hotmart.com/)
- [Vercel Docs](https://vercel.com/docs)

---

**Última atualização:** 2026-02-09
**Responsável:** HTC Squad
