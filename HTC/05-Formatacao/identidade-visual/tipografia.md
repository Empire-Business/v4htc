# Tipografia HTC
## High Ticket Code - Liquid Glass Design System

**Versão:** 1.0
**Data:** Fevereiro 2026
**Estilo:** Liquid Glass / Glassmorphism (Apple-inspired)

---

## Visão Geral

A tipografia HTC foi escolhida para transmitir:
- **Modernidade e tecnologia** (Inter, SF Pro)
- **Legibilidade excelente** (hierarquia clara)
- **Profissionalismo** (fontes de alta qualidade)
- **Versatilidade** (funciona em todos os contextos)

---

## Fontes Principais

### Fonte Principal: Inter

**Por que Inter?**
- Desenhada especificamente para telas
- Excelente legibilidade em todos os tamanhos
- Variações de peso suficientes
- Open source e gratuita
- Similar à SF Pro da Apple

**Importação:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
```

**Uso:**
- Interface de usuário
- Textos de marketing
- Documentação
- Email templates

### Fonte Secundária: SF Pro (Apple)

**Disponibilidade:**
- Nativa em dispositivos Apple
- Fallback para Inter em outros dispositivos

**Uso:**
- Aplicativos iOS/macOS
- Materiais para usuários Apple
- Landing pages com público Apple

### Fonte de Código: JetBrains Mono

**Por que JetBrains Mono?**
- Desenhada especificamente para código
- Caracteres distintos (0 vs O, 1 vs l)
- Ligatures para programação
- Excelente legibilidade

**Importação:**
```css
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap');
```

**Uso:**
- Blocos de código
- Snippets de programação
- Terminais
- Exemplos técnicos

### Fonte de Exibição: Plus Jakarta Sans

**Por que Plus Jakarta Sans?**
- Moderna e geométrica
- Excelente para títulos grandes
- Presença premium
- Similar à Apple design

**Importação:**
```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
```

**Uso:**
- Hero headlines
- Títulos de seções
- Landing pages
- Materiais de marketing

---

## Tamanhos de Fonte

### Escala Tipográfica

A HTC usa uma escala modular baseada em 1.25 (major third):

| Token | Tamanho | Line-height | Uso |
|-------|---------|-------------|-----|
| xs | 0.75rem (12px) | 1rem (16px) | Labels pequenos, captions |
| sm | 0.875rem (14px) | 1.25rem (20px) | Texto secundário, descrições |
| base | 1rem (16px) | 1.5rem (24px) | Texto de corpo, parágrafos |
| lg | 1.125rem (18px) | 1.75rem (28px) | Texto destacado |
| xl | 1.25rem (20px) | 1.75rem (28px) | Subtítulos, lead |
| 2xl | 1.5rem (24px) | 2rem (32px) | H3, seções |
| 3xl | 1.875rem (30px) | 2.25rem (36px) | H2, subtítulos grandes |
| 4xl | 2.25rem (36px) | 2.5rem (40px) | H1 mobile |
| 5xl | 3rem (48px) | 1.1 (52.8px) | H1 tablet |
| 6xl | 3.75rem (60px) | 1.1 (66px) | H1 desktop |
| 7xl | 4.5rem (72px) | 1.1 (79.2px) | Hero headlines |
| 8xl | 6rem (96px) | 1.1 (105.6px) | Display headings |
| 9xl | 8rem (128px) | 1.1 (140.8px) | Mega headings |

### Headings

#### H1 - Hero Title
```css
font-size: 3.75rem (60px)
line-height: 1.1
font-weight: 700
letter-spacing: -0.02em
```
Uso: Título principal da página, hero sections

#### H2 - Section Title
```css
font-size: 2.25rem (36px)
line-height: 2.5rem
font-weight: 600
letter-spacing: -0.01em
```
Uso: Títulos de seções, capítulos

#### H3 - Subsection Title
```css
font-size: 1.5rem (24px)
line-height: 2rem
font-weight: 600
letter-spacing: 0
```
Uso: Subtítulos de seções, cards

#### H4 - Component Title
```css
font-size: 1.25rem (20px)
line-height: 1.75rem
font-weight: 600
letter-spacing: 0
```
Uso: Títulos de componentes, módulos

### Body Text

#### Body Large
```css
font-size: 1.125rem (18px)
line-height: 1.75rem
font-weight: 400
```
Uso: Texto de introdução, lead paragraphs

#### Body Base
```css
font-size: 1rem (16px)
line-height: 1.5rem
font-weight: 400
```
Uso: Texto de corpo padrão

#### Body Small
```css
font-size: 0.875rem (14px)
line-height: 1.25rem
font-weight: 400
```
Uso: Textos secundários, descrições breves

### Labels e Captions

#### Label
```css
font-size: 0.875rem (14px)
line-height: 1.25rem
font-weight: 500
```
Uso: Labels de formulários, badges

#### Caption
```css
font-size: 0.75rem (12px)
line-height: 1rem
font-weight: 400
```
Uso: Captions, notas de rodapé, meta informações

### Code Text

#### Code Inline
```css
font-size: 0.875rem (14px)
line-height: 1.25rem
font-weight: 400
font-family: 'JetBrains Mono', monospace
```
Uso: Código inline, variáveis

#### Code Block
```css
font-size: 0.875rem (14px)
line-height: 1.5rem
font-weight: 400
font-family: 'JetBrains Mono', monospace
```
Uso: Blocos de código, snippets

---

## Pesos de Fonte

### Inter Weights

| Peso | Valor | Uso |
|------|-------|-----|
| Light | 300 | Elementos decorativos |
| Regular | 400 | Texto de corpo |
| Medium | 500 | Labels, botões |
| Semibold | 600 | Subtítulos, headings secundários |
| Bold | 700 | Headings principais, CTAs |
| Extrabold | 800 | Headings de display |

### Recomendações de Uso

#### Títulos
- H1: 700 (Bold)
- H2: 600 (Semibold)
- H3: 600 (Semibold)
- H4: 600 (Semibold)
- H5: 500 (Medium)
- H6: 500 (Medium)

#### Texto
- Lead: 400 (Regular)
- Body: 400 (Regular)
- Small: 400 (Regular)
- Caption: 400 (Regular)

#### UI Elements
- Buttons: 600 (Semibold)
- Labels: 500 (Medium)
- Links: 500 (Medium)
- Nav items: 500 (Medium)

#### Code
- Inline: 400 (Regular)
- Block: 400 (Regular)
- Headings (code): 600 (Semibold)

---

## Line Heights

### Escala de Line Height

| Token | Valor | Uso |
|-------|-------|-----|
| none | 1 | Botões, headings muito grandes |
| tight | 1.25 | Labels, captions |
| snug | 1.375 | Subtítulos |
| normal | 1.5 | Texto de corpo |
| relaxed | 1.625 | Texto longo, artigos |
| loose | 2 | Listas, citações |

### Recomendações

#### Headings
```css
h1: line-height: 1.1
h2: line-height: 1.2
h3: line-height: 1.3
h4-h6: line-height: 1.4
```

#### Body Text
```css
lead: line-height: 1.6
body: line-height: 1.5
small: line-height: 1.4
```

#### UI Elements
```css
buttons: line-height: 1
inputs: line-height: 1.5
lists: line-height: 1.75
```

---

## Letter Spacing

### Escala de Letter Spacing

| Token | Valor | Uso |
|-------|-------|-----|
| tighter | -0.05em | Headings muito grandes |
| tight | -0.025em | Headings grandes |
| normal | 0 | Texto de corpo |
| wide | 0.025em | Labels, botões pequenos |
| wider | 0.05em | Texto em caps |
| widest | 0.1em | Texto decorativo |

### Recomendações

#### Headings
```css
h1: letter-spacing: -0.02em
h2: letter-spacing: -0.015em
h3-h6: letter-spacing: 0
```

#### Texto
```css
body: letter-spacing: 0
small: letter-spacing: 0.01em
```

#### UI Elements
```css
buttons: letter-spacing: 0.025em
labels: letter-spacing: 0.05em
badges: letter-spacing: 0.1em
```

---

## Hierarquia Visual

### Níveis de Hierarquia

#### Level 1 - Hero
```
Plus Jakarta Sans
8xl / 96px
Bold / 700
Letter-spacing: -0.03em
Line-height: 1.1
```

#### Level 2 - Display
```
Plus Jakarta Sans
6xl / 60px
Bold / 700
Letter-spacing: -0.02em
Line-height: 1.1
```

#### Level 3 - H1
```
Inter
5xl / 48px
Semibold / 600
Letter-spacing: -0.015em
Line-height: 1.2
```

#### Level 4 - H2
```
Inter
3xl / 30px
Semibold / 600
Letter-spacing: -0.01em
Line-height: 1.3
```

#### Level 5 - H3
```
Inter
2xl / 24px
Semibold / 600
Letter-spacing: 0
Line-height: 1.4
```

#### Level 6 - Body
```
Inter
base / 16px
Regular / 400
Letter-spacing: 0
Line-height: 1.5
```

#### Level 7 - Small
```
Inter
sm / 14px
Regular / 400
Letter-spacing: 0
Line-height: 1.4
```

#### Level 8 - Caption
```
Inter
xs / 12px
Regular / 400
Letter-spacing: 0.05em
Line-height: 1.2
```

---

## Implementação

### CSS Variables

```css
:root {
  /* Font Families */
  --font-display: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-sans: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;

  /* Font Sizes */
  --text-xs: 0.75rem;     /* 12px */
  --text-sm: 0.875rem;    /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg: 1.125rem;    /* 18px */
  --text-xl: 1.25rem;     /* 20px */
  --text-2xl: 1.5rem;     /* 24px */
  --text-3xl: 1.875rem;   /* 30px */
  --text-4xl: 2.25rem;    /* 36px */
  --text-5xl: 3rem;       /* 48px */
  --text-6xl: 3.75rem;    /* 60px */
  --text-7xl: 4.5rem;     /* 72px */
  --text-8xl: 6rem;       /* 96px */

  /* Font Weights */
  --font-light: 300;
  --font-regular: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;

  /* Line Heights */
  --leading-none: 1;
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;

  /* Letter Spacing */
  --tracking-tighter: -0.05em;
  --tracking-tight: -0.025em;
  --tracking-normal: 0;
  --tracking-wide: 0.025em;
  --tracking-wider: 0.05em;
  --tracking-widest: 0.1em;
}
```

### Tailwind Config

```javascript
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1.1' }],
      },
    },
  },
};
```

---

## Uso por Contexto

### Landing Pages
- Hero: Plus Jakarta Sans, 8xl, Bold
- Subheadline: Inter, 2xl, Medium
- Body: Inter, base, Regular
- CTA: Inter, lg, Semibold

### Dashboards
- Headers: Inter, xl, Semibold
- Cards: Inter, sm, Medium
- Data: Inter, base, Regular
- Labels: Inter, xs, Medium

### Documentação
- H1: Inter, 5xl, Bold
- H2: Inter, 3xl, Semibold
- H3: Inter, 2xl, Semibold
- Body: Inter, base, Regular
- Code: JetBrains Mono, sm, Regular

### Email Templates
- Header: Plus Jakarta Sans, 3xl, Bold
- Body: Inter, base, Regular
- Links: Inter, sm, Semibold
- Footer: Inter, xs, Regular

---

## Acessibilidade

### Tamanho Mínimo
- Texto de corpo: mínimo 16px (1rem)
- Labels: mínimo 14px (0.875rem)
- Captions: mínimo 12px (0.75rem)

### Contraste
- Texto sobre fundo escuro: usar weights 500+
- Texto sobre fundo claro: usar weights 400+
- Texto colorido: garantir contraste WCAG AA

### Legibilidade
- Line-height mínimo: 1.4
- Paragraph width máximo: 80 caracteres
- Espaçamento entre parágrafos: 1.5x line-height

---

## Referências

- [Inter Font](https://rsms.me/inter/)
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
- [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
- Apple Typography Guidelines
- Material Design Typography

---

**Próximo arquivo:** [estilo-liquid-glass.md](./estilo-liquid-glass.md)
