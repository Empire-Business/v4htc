# INSTRUÇÕES DE EXPORTAÇÃO
## HTC Sales Presentation - Export Guide

**Versão:** 1.0
**Data:** 9 de Fevereiro de 2026
**Formatos suportados:** PDF, PowerPoint (PPTX), HTML/Link

---

## ÍNDICE

1. [Exportação para PDF](#pdf)
2. [Exportação para PowerPoint](#pptx)
3. [Exportação para HTML/Link](#html)
4. [Exportação para Vídeo](#video)
5. [Checklist Final](#checklist)

---

<a name="pdf"></a>
## 1. EXPORTAÇÃO PARA PDF

### Quando Usar PDF

- Enviar por e-mail para prospects
- Compartilhar em WhatsApp/LinkedIn
- Imprimir para apresentações presenciais
- Arquivar como registro

### Como Exportar para PDF

**Opção 1: Direct from Markdown (Pandoc)**

```bash
# Instalar Pandoc se não tiver
brew install pandoc  # macOS
# ou
choco install pandoc  # Windows

# Navegar para diretório
cd /Users/bguzela/Documents/Projetos/v4htc/HTC/03-Vendas/apresentacao-vendas/slides

# Converter para PDF
pandoc slide-*.md -o apresentacao-htc.pdf --pdf-engine=xelatex -V geometry:margin=1in

# Com template personalizado
pandoc slide-*.md -o apresentacao-htc.pdf --template=../exports/template.tex --pdf-engine=xelatex
```

**Opção 2: Direct from PowerPoint**

1. Abra apresentação no PowerPoint/Keynote
2. File → Export → PDF
3. Settings:
   - Quality: High (para impressão)
   - Include: All slides
   - Embed fonts: Yes
   - Optimize for: High quality print

**Opção 3: Online Tools**

- **Canva:** Upload slides → Download PDF
- **Google Slides:** File → Download → PDF Document
- **SlideShare:** Upload → Download PDF

### Configurações Recomendadas PDF

| Setting | Valor | Por que |
|---------|-------|---------|
| Page Size | A4 (210×297mm) ou 16:9 | Standard |
| Orientation | Landscape | Slides horizontais |
| Quality | High (300 DPI) | Impressão nítida |
| Embed Fonts | Yes | Manter identidade visual |
| PDF Version | 1.7 (PDF/A-1b) | Compatibilidade máxima |
| Compression | Medium | Equilíbrio qualidade/tamanho |

### Naming Convention

```
apresentacao-htc-v1.0-[DATA].pdf
ex: apresentacao-htc-v1.0-2026-02-09.pdf
```

### Distribuição PDF

**Por e-mail:**
```
Assunto: Apresentação Completa HTC - Como Fechar R$100k+/mês

Oi [NOME],

Como prometido, segue a apresentação completa em PDF.

[ANEXO: apresentacao-htc-v1.0-[DATA].pdf]

Próximos passos:
1. Revise os slides
2. Escolha seu plano (PRIME/PRO/ELITE)
3. Clique no link: [LINK CTA]

Se tiver dúvida, responda este email.

Vamos juntos!
```

**Por WhatsApp:**
- Comprimir PDF (<10MB para WhatsApp)
- Usar PDFMerge ou ILovePDF para compressão
- Mensagem: "Segue PDF da apresentação! Qual plano faz mais sentido para você?"

**Por LinkedIn:**
- Upload como documento (não post)
- Compartilhar em mensagem direta
- Mensagem: "Gostaria de compartilhar a apresentação completa com você. Qual seu email?"

---

<a name="pptx"></a>
## 2. EXPORTAÇÃO PARA POWERPOINT (PPTX)

### Quando Usar PowerPoint

- Apresentações presenciais
- Clientes que querem editar
- Compartilhar com equipe
- Backup em formato editável

### Como Exportar para PowerPoint

**Opção 1: Direct from Markdown (Pandoc + Reveal.js)**

```bash
# Instalar dependências
npm install -g reveal.js

# Converter Markdown para HTML (Reveal.js)
pandoc slide-*.md -o apresentacao-htc.html -t revealjs

# Abrir HTML no browser, exportar como PPTX manualmente
```

**Opção 2: Create PowerPoint Manualmente**

1. Criar novo PowerPoint (16:9)
2. Para cada slide-X.md:
   - Criar slide novo
   - Copiar título para "Title"
   - Copiar bullets para "Content"
   - Aplicar tema HTC (se disponível)
3. Salvar como `.pptx`

**Opção 3: Use Tools**

- **SlideModel:** Import markdown, export PPTX
- **Deckset:** Markdown → PPTX (macOS)
- **Marp:** Markdown → PDF/PPTX (cross-platform)

### Template PowerPoint HTC

Se você criar um template `.pptx`:

**Slide Master Settings:**
- Theme Colors: HTC Design Tokens
- Fonts: Plus Jakarta Sans (títulos), Inter (corpo)
- Background: Gradiente aurora (roxo → azul)
- Layouts:
  - Title Slide (slide 01)
  - Title + Content (slides 02-10)
  - Section Header (divisões)
  - Two Column (comparison)

**Apply Template:**
1. Design → Slide Master
2. Import theme HTC
3. Apply to All Slides
4. Adjust individual slides as needed

### Configurações Recomendadas PPTX

| Setting | Valor | Por que |
|---------|-------|---------|
| Slide Size | Widescreen (16:9) | Padrão moderno |
| Resolution | 1920×1080 | Full HD |
| Embed Fonts | Yes | Manter identidade visual |
| Media Size | Compressed | Reduzir tamanho |
| Compatibility | Windows + Mac | Máxima compatibilidade |

### Naming Convention

```
apresentacao-htc-v1.0-[DATA].pptx
ex: apresentacao-htc-v1.0-2026-02-09.pptx
```

### Distribuição PPTX

**Para clientes que querem editar:**
```
Assunto: Apresentação HTC (Editável)

Oi [NOME],

Segue apresentação em PowerPoint (editável).

Você pode:
- Adicionar slides específicos do seu nicho
- Customizar com seus dados
- Compartilhar com sua equipe

[ANEXO: apresentacao-htc-v1.0-[DATA].pptx]

Se precisar de ajuda para editar, me avise!
```

---

<a name="html"></a>
## 3. EXPORTAÇÃO PARA HTML/LINK

### Quando Usar HTML/Link

- Apresentações remotas (Zoom/Google Meet)
- Compartilhar link facilmente
- Apresentações interativas
- Acessibilidade máxima

### Como Exportar para HTML

**Opção 1: Reveal.js (Recomendado)**

```bash
# Instalar Reveal.js
npm install -g reveal-cli

# Criar apresentação Reveal.js
npx reveal-md slides/*.md --static apresentacao-htc

# Ou usar configuração customizada
npx reveal-md slides/ --theme ../exports/theme.css --highlight-theme hybrid

# Output: apresentacao-htc/index.html
```

**Opção 2: Marp (Markdown Presentation)**

```bash
# Instalar Marp
npm install -g @marp-team/marp-cli

# Converter para HTML
marp slide-*.md -o apresentacao-htc.html --html

# Ou para PDF simultaneamente
marp slide-*.md -o apresentacao-htc.pdf --html --pdf

# Com tema customizado
marp slide-*.md -o apresentacao-htc.html --theme ../exports/marp-theme.css
```

**Opção 3: Slidev (Vue-based)**

```bash
# Instalar Slidev
npm init slidev

# Criar apresentação
# Mover slides/ para slides.md
# Adicionar frontmatter com config

# Rodar localmente
npm run dev

# Build para produção
npm run build

# Output: dist/ (estático)
```

### Hospedagem HTML

**Opção 1: Vercel (Recomendado - Grátis)**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Output: https://htc-apresentacao.vercel.app
```

**Opção 2: Netlify (Grátis)**
```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod

# Output: https://htc-apresentacao.netlify.app
```

**Opção 3: GitHub Pages (Grátis)**
```bash
# Criar repo GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/[USERNAME]/htc-apresentacao
git push -u origin main

# Ativar GitHub Pages
# Settings → Pages → Branch: main → Save

# Output: https://[USERNAME].github.io/htc-apresentacao
```

### Features Interativas HTML

**Adicionar ao HTML:**
- Navigation arrows (← →)
- Progress bar (bottom)
- Slide counter (x/10)
- Fullscreen button (F)
- Speaker notes (S)
- Overview (O)

**Exemplo Reveal.js config:**
```javascript
Reveal.initialize({
  controls: true,      // Show navigation arrows
  progress: true,      // Show progress bar
  center: true,        // Vertical center
  hash: true,          // Add slide number to URL
  keyboard: true,      // Enable keyboard navigation
  overview: true,      // Enable overview (ESC)
  slideNumber: true,   // Show slide number
  speakerNotes: true   // Enable speaker notes
});
```

### Compartilhamento HTML

**Link direto:**
```
Assunto: Apresentação HTC (Link)

Oi [NOME],

Segue link da apresentação:

🔗 https://htc-apresentacao.vercel.app

Você pode:
- Ver no browser (qualquer device)
- Apresentar remotamente (compartilhar tela)
- Navegar interativamente

Qualquer dúvida, me avise!
```

**Para apresentações remotas:**
```
Antes da call:
1. Teste sua câmera/microfone
2. Abra apresentação no browser
3. Entre em modo fullscreen (F)
4. Compartilhe tela no Zoom/Meet

Durante a call:
1. "Vou compartilhar minha tela"
2. Selecione janela do browser
3. Navegue com setas (← →)
4. Saia de fullscreen ao final (ESC)
```

---

<a name="video"></a>
## 4. EXPORTAÇÃO PARA VÍDEO

### Quando Usar Vídeo

- VSL (Video Sales Letter) automatizada
- YouTube/Vimeo embed
- Automação de funil
- Clientes que preferem assistir a ler

### Como Gravar Apresentação

**Opção 1: Loom (Grátis, Fácil)**

1. Abrir Loom desktop app
2. Select "Screen" ou "Window"
3. Abrir apresentação HTML/PDF
4. Start recording
5. Apresentar seguindo script (25-35 min)
6. Stop recording
7. Loom gera link automaticamente

**Opção 2: Zoom Recording (Grátis)**

1. Start Zoom meeting
2. Share screen
3. Record (local ou cloud)
4. Apresentar
5. End meeting → Zoom gera MP4

**Opção 3: OBS Studio (Profissional)**

1. Criar scene no OBS
2. Adicionar source (window capture)
3. Adicionar webcam (picture-in-picture)
4. Start recording
5. Apresentar
6. Stop → OBS gera MP4

### Configurações Recomendadas Vídeo

| Setting | Valor | Por que |
|---------|-------|---------|
| Resolution | 1920×1080 (1080p) | Full HD |
| Frame Rate | 30 fps | Equilíbrio |
| Bitrate | 5-8 Mbps | Qualidade boa |
| Audio | 128 kbps, 44.1 kHz | Voz clara |
| Format | MP4 (H.264) | Compatibilidade |
| Duration | 25-35 min | Script completo |

### Edição Vídeo (Opcional)

**Ferramentas:**
- **DaVinci Resolve (Grátis)** - Profissional
- **iMovie (Grátis)** - Simples, macOS
- **Clipchamp (Grátis)** - Windows, simples
- **Descript (Pago)** - Edição por texto

**Edições mínimas:**
- Cut erros/tosse
- Add intro/outro (HTC logo)
- Add captions (recommended)
- Add progress indicator

### Hospedagem Vídeo

**Opção 1: YouTube (Grátis, SEO)**
- Upload como "Unlisted" (não listado)
- Embed em página de VSL
- Captions automáticos
- Analytics integrado

**Opção 2: Vimeo (Pago, Professional)**
- Upload como "Privacy: Hide from Vimeo"
- Player customizável
- Sem anúncios
- Analytics avançado

**Opção 3: Wistia (Pago, Marketing)**
- Embed em página de VSL
- Turnstile email capture
- Heatmaps avançado
- Integration com marketing tools

### Embed Vídeo em Página

```html
<!-- YouTube embed -->
<iframe width="560" height="315"
  src="https://www.youtube.com/embed/[VIDEO_ID]"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write;
    encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>

<!-- Vimeo embed -->
<iframe src="https://player.vimeo.com/video/[VIDEO_ID]"
  width="640" height="360"
  frameborder="0"
  allow="autoplay; fullscreen; picture-in-picture"
  allowfullscreen>
</iframe>
```

---

<a name="checklist"></a>
## 5. CHECKLIST FINAL

### Pré-Export

- [ ] Todos os 10 slides estão criados
- [ ] Notas do apresentador revisadas
- [ ] Design tokens aplicados consistentemente
- [ ] Gramática e ortografia verificadas
- [ ] Links testados (CTAs, WhatsApp, email)
- [ ] Responsividade testada (mobile preview)

### Export PDF

- [ ] PDF exportado com configurações recomendadas
- [ ] PDF testado em diferentes viewers (Adobe, Preview, browser)
- [ ] PDF comprimido se necessário (<10MB para email)
- [ ] PDF nomeado corretamente (versão + data)

### Export PowerPoint

- [ ] PPTX criado com template HTC
- [ ] Todas as fontes embutidas
- [ ] Layouts testados em diferentes versões PowerPoint
- [ ] PPTX nomeado corretamente (versão + data)

### Export HTML

- [ ] HTML exportado com Reveal.js/Marp
- [ ] HTML testado em diferentes browsers (Chrome, Firefox, Safari)
- [ ] Responsividade testada (mobile, tablet, desktop)
- [ ] HTML deployado em Vercel/Netlify/GitHub Pages
- [ ] Link testado e funcionando

### Export Vídeo (se aplicável)

- [ ] Vídeo gravado com boa qualidade
- [ ] Áudio claro e audível
- [ ] Vídeo editado (cuts mínimos)
- [ ] Legendas adicionadas (recommended)
- [ ] Vídeo hospedado (YouTube/Vimeo/Wistia)
- [ ] Embed testado em página

### Pós-Export

- [ ] Todos os formatos testados
- [ ] Links de distribuição preparados
- [ ] Email templates prontos
- [ ] Sistema de tracking configurado (analytics)
- [ ] Backup de todos os arquivos (cloud + local)

---

## ESTRUTURA FINAL DE ARQUIVOS

```
HTC/03-Vendas/apresentacao-vendas/
├── slides/
│   ├── slide-01.md
│   ├── slide-02.md
│   ├── ...
│   └── slide-10.md
├── notas/
│   └── notas-apresentador.md
├── exports/
│   ├── instrucoes-exportacao.md
│   ├── pdf/
│   │   └── apresentacao-htc-v1.0-2026-02-09.pdf
│   ├── pptx/
│   │   └── apresentacao-htc-v1.0-2026-02-09.pptx
│   ├── html/
│   │   ├── index.html
│   │   ├── theme.css
│   │   └── assets/
│   └── video/
│       ├── apresentacao-htc-v1.0-raw.mp4
│       ├── apresentacao-htc-v1.0-final.mp4
│       └── thumbnail.png
└── README.md (este arquivo)
```

---

**FIM DAS INSTRUÇÕES DE EXPORTAÇÃO**

**Status:** ✅ Completo
**Próxima revisão:** Após testar todos os formatos de exportação
**Suporte:** Para dúvidas, consulte time HTC
