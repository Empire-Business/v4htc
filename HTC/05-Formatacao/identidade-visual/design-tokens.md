# Design Tokens HTC
## High Ticket Code - Design System Tokens

**Versão:** 1.0
**Data:** Fevereiro 2026

---

## O que são Design Tokens?

Design tokens são as menores unidades de um design system - cores, tamanhos, espaçamentos, etc. - armazenadas como variáveis que podem ser reutilizadas em qualquer plataforma ou tecnologia.

**Benefícios:**
- Consistência em toda a organização
- Atualizações centralizadas
- Cross-platform (web, iOS, Android, print)
- Automação e sincronização
- Escalabilidade

---

## Categorias de Tokens

1. **Color Tokens** - Cores da marca
2. **Typography Tokens** - Fontes, tamanhos, pesos
3. **Spacing Tokens** - Espaçamentos e margins
4. **Size Tokens** - Tamanhos de componentes
5. **Radius Tokens** - Border radius
6. **Shadow Tokens** - Sombras
7. **Duration Tokens** - Durações de animações
8. **Z-Index Tokens** - Camadas (stacking context)
9. **Breakpoint Tokens** - Responsive breakpoints

---

## Color Tokens

### Primary Colors

```css
/* Semantic Names */
--color-primary: #2563EB;        /* Primary 600 */
--color-primary-hover: #1D4ED8;  /* Primary 700 */
--color-primary-active: #1E40AF; /* Primary 800 */
--color-primary-light: #EFF6FF;  /* Primary 50 */

/* Scale */
--color-primary-50: #EFF6FF;
--color-primary-100: #DBEAFE;
--color-primary-200: #BFDBFE;
--color-primary-300: #93C5FD;
--color-primary-400: #60A5FA;
--color-primary-500: #3B82F6;
--color-primary-600: #2563EB;
--color-primary-700: #1D4ED8;
--color-primary-800: #1E40AF;
--color-primary-900: #1E3A8A;
--color-primary-950: #172554;
```

### Secondary Colors

```css
--color-secondary: #8B5CF6;      /* Purple 500 */
--color-secondary-hover: #7C3AED; /* Purple 600 */

--color-cyan: #06B6D4;           /* Cyan 500 */
--color-cyan-hover: #0891B2;     /* Cyan 600 */
```

### Accent Colors

```css
--color-accent: #F59E0B;         /* Gold 500 */
--color-accent-hover: #D97706;   /* Gold 600 */

--color-coral: #F97316;          /* Coral 500 */
--color-coral-hover: #EA580C;    /* Coral 600 */
```

### Neutral Colors

```css
--color-slate-50: #F8FAFC;
--color-slate-100: #F1F5F9;
--color-slate-200: #E2E8F0;
--color-slate-300: #CBD5E1;
--color-slate-400: #94A3B8;
--color-slate-500: #64748B;
--color-slate-600: #475569;
--color-slate-700: #334155;
--color-slate-800: #1E293B;
--color-slate-900: #0F172A;

/* Semantic Neutrals */
--color-bg-primary: #FFFFFF;
--color-bg-secondary: #F8FAFC;
--color-bg-tertiary: #F1F5F9;
--color-text-primary: #0F172A;
--color-text-secondary: #475569;
--color-text-tertiary: #64748B;
--color-border: #E2E8F0;
```

### Semantic Colors

```css
/* Success */
--color-success: #22C55E;
--color-success-hover: #16A34A;
--color-success-light: #F0FDF4;
--color-success-dark: #15803D;

/* Warning */
--color-warning: #F59E0B;
--color-warning-hover: #D97706;
--color-warning-light: #FFFBEB;
--color-warning-dark: #B45309;

/* Error */
--color-error: #EF4444;
--color-error-hover: #DC2626;
--color-error-light: #FEF2F2;
--color-error-dark: #B91C1C;

/* Info */
--color-info: #3B82F6;
--color-info-hover: #2563EB;
--color-info-light: #EFF6FF;
--color-info-dark: #1D4ED8;
```

### Glass Colors

```css
/* Light Mode */
--glass-bg-light: rgba(255, 255, 255, 0.7);
--glass-bg-heavy: rgba(255, 255, 255, 0.85);
--glass-border-light: rgba(255, 255, 255, 0.18);
--glass-shadow-light: rgba(31, 38, 135, 0.1);

/* Dark Mode */
--glass-bg-dark: rgba(30, 58, 138, 0.6);
--glass-bg-heavy-dark: rgba(30, 58, 138, 0.7);
--glass-border-dark: rgba(255, 255, 255, 0.08);
--glass-shadow-dark: rgba(0, 0, 0, 0.3);
```

---

## Typography Tokens

### Font Families

```css
--font-display: 'Plus Jakarta Sans', -apple-system, sans-serif;
--font-sans: 'Inter', -apple-system, sans-serif;
--font-mono: 'JetBrains Mono', 'SF Mono', monospace;
```

### Font Sizes

```css
--font-size-xs: 0.75rem;      /* 12px */
--font-size-sm: 0.875rem;     /* 14px */
--font-size-base: 1rem;       /* 16px */
--font-size-lg: 1.125rem;     /* 18px */
--font-size-xl: 1.25rem;      /* 20px */
--font-size-2xl: 1.5rem;      /* 24px */
--font-size-3xl: 1.875rem;    /* 30px */
--font-size-4xl: 2.25rem;     /* 36px */
--font-size-5xl: 3rem;        /* 48px */
--font-size-6xl: 3.75rem;     /* 60px */
--font-size-7xl: 4.5rem;      /* 72px */
--font-size-8xl: 6rem;        /* 96px */
--font-size-9xl: 8rem;        /* 128px */
```

### Font Weights

```css
--font-weight-light: 300;
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--font-weight-extrabold: 800;
```

### Line Heights

```css
--line-height-none: 1;
--line-height-tight: 1.25;
--line-height-snug: 1.375;
--line-height-normal: 1.5;
--line-height-relaxed: 1.625;
--line-height-loose: 2;
```

### Letter Spacing

```css
--letter-spacing-tighter: -0.05em;
--letter-spacing-tight: -0.025em;
--letter-spacing-normal: 0;
--letter-spacing-wide: 0.025em;
--letter-spacing-wider: 0.05em;
--letter-spacing-widest: 0.1em;
```

---

## Spacing Tokens

Baseado em uma escala de 4px:

```css
--spacing-0: 0;
--spacing-px: 1px;
--spacing-0_5: 0.125rem;   /* 2px */
--spacing-1: 0.25rem;      /* 4px */
--spacing-1_5: 0.375rem;   /* 6px */
--spacing-2: 0.5rem;       /* 8px */
--spacing-2_5: 0.625rem;   /* 10px */
--spacing-3: 0.75rem;      /* 12px */
--spacing-3_5: 0.875rem;   /* 14px */
--spacing-4: 1rem;         /* 16px */
--spacing-5: 1.25rem;      /* 20px */
--spacing-6: 1.5rem;       /* 24px */
--spacing-7: 1.75rem;      /* 28px */
--spacing-8: 2rem;         /* 32px */
--spacing-9: 2.25rem;      /* 36px */
--spacing-10: 2.5rem;      /* 40px */
--spacing-11: 2.75rem;     /* 44px */
--spacing-12: 3rem;        /* 48px */
--spacing-14: 3.5rem;      /* 56px */
--spacing-16: 4rem;        /* 64px */
--spacing-20: 5rem;        /* 80px */
--spacing-24: 6rem;        /* 96px */
--spacing-28: 7rem;        /* 112px */
--spacing-32: 8rem;        /* 128px */
--spacing-36: 9rem;        /* 144px */
--spacing-40: 10rem;       /* 160px */
--spacing-44: 11rem;       /* 176px */
--spacing-48: 12rem;       /* 192px */
--spacing-52: 13rem;       /* 208px */
--spacing-56: 14rem;       /* 224px */
--spacing-60: 15rem;       /* 240px */
--spacing-64: 16rem;       /* 256px */
--spacing-72: 18rem;       /* 288px */
--spacing-80: 20rem;       /* 320px */
--spacing-96: 24rem;       /* 384px */
```

### Spacing Semântico

```css
/* Padding */
--padding-xs: var(--spacing-2);    /* 8px */
--padding-sm: var(--spacing-3);    /* 12px */
--padding-md: var(--spacing-4);    /* 16px */
--padding-lg: var(--spacing-6);    /* 24px */
--padding-xl: var(--spacing-8);    /* 32px */
--padding-2xl: var(--spacing-12);  /* 48px */
--padding-3xl: var(--spacing-16);  /* 64px */

/* Margin */
--margin-xs: var(--spacing-2);     /* 8px */
--margin-sm: var(--spacing-3);     /* 12px */
--margin-md: var(--spacing-4);     /* 16px */
--margin-lg: var(--spacing-6);     /* 24px */
--margin-xl: var(--spacing-8);     /* 32px */
--margin-2xl: var(--spacing-12);   /* 48px */
--margin-3xl: var(--spacing-16);   /* 64px */

/* Gap (Flex/Grid) */
--gap-xs: var(--spacing-2);        /* 8px */
--gap-sm: var(--spacing-3);        /* 12px */
--gap-md: var(--spacing-4);        /* 16px */
--gap-lg: var(--spacing-6);        /* 24px */
--gap-xl: var(--spacing-8);        /* 32px */
--gap-2xl: var(--spacing-12);      /* 48px */
--gap-3xl: var(--spacing-16);      /* 64px */
```

---

## Size Tokens

### Component Sizes

```css
/* Buttons */
--size-btn-sm: 2rem;      /* 32px */
--size-btn-md: 2.5rem;    /* 40px */
--size-btn-lg: 3rem;      /* 48px */
--size-btn-xl: 3.5rem;    /* 56px */

/* Inputs */
--size-input-sm: 2rem;    /* 32px */
--size-input-md: 2.5rem;  /* 40px */
--size-input-lg: 3rem;    /* 48px */

/* Avatars */
--size-avatar-xs: 1.5rem; /* 24px */
--size-avatar-sm: 2rem;   /* 32px */
--size-avatar-md: 2.5rem; /* 40px */
--size-avatar-lg: 3rem;   /* 48px */
--size-avatar-xl: 4rem;   /* 64px */
--size-avatar-2xl: 5rem;  /* 80px */

/* Icons */
--size-icon-xs: 0.75rem;  /* 12px */
--size-icon-sm: 1rem;     /* 16px */
--size-icon-md: 1.25rem;  /* 20px */
--size-icon-lg: 1.5rem;   /* 24px */
--size-icon-xl: 2rem;     /* 32px */
```

---

## Radius Tokens

```css
--radius-none: 0;
--radius-sm: 0.25rem;     /* 4px */
--radius-base: 0.375rem;  /* 6px */
--radius-md: 0.5rem;      /* 8px */
--radius-lg: 0.75rem;     /* 12px */
--radius-xl: 1rem;        /* 16px */
--radius-2xl: 1.25rem;    /* 20px */
--radius-3xl: 1.5rem;     /* 24px */
--radius-full: 9999px;
```

### Radius Semântico

```css
--radius-btn: var(--radius-lg);         /* 12px */
--radius-card: var(--radius-xl);        /* 16px */
--radius-modal: var(--radius-3xl);      /* 24px */
--radius-input: var(--radius-lg);       /* 12px */
--radius-badge: var(--radius-md);       /* 8px */
```

---

## Shadow Tokens

```css
--shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
--shadow-base: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
--shadow-md: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

/* Glass Shadows */
--shadow-glass-sm: 0 2px 8px rgba(0, 0, 0, 0.05);
--shadow-glass-md: 0 4px 16px rgba(0, 0, 0, 0.08);
--shadow-glass-lg: 0 8px 32px rgba(0, 0, 0, 0.12);
--shadow-glass-xl: 0 8px 32px 0 rgba(31, 38, 135, 0.1);

/* Inner Shadow */
--shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);

/* No Shadow */
--shadow-none: 0 0 rgba(0, 0, 0, 0);
```

---

## Blur Tokens

```css
--blur-xs: 2px;
--blur-sm: 4px;
--blur-base: 8px;
--blur-md: 12px;
--blur-lg: 16px;
--blur-xl: 20px;
--blur-2xl: 24px;
--blur-3xl: 30px;
--blur-4xl: 40px;
```

### Blur Semântico (Glass)

```css
--blur-glass-sm: 10px;
--blur-glass-md: 20px;
--blur-glass-lg: 30px;
--blur-glass-xl: 40px;
```

---

## Duration Tokens

Animações e transições:

```css
--duration-75: 75ms;
--duration-100: 100ms;
--duration-150: 150ms;
--duration-200: 200ms;
--duration-300: 300ms;
--duration-500: 500ms;
--duration-700: 700ms;
--duration-1000: 1000ms;
```

### Duration Semântico

```css
--duration-fast: var(--duration-150);
--duration-base: var(--duration-300);
--duration-slow: var(--duration-500);
```

---

## Easing Tokens

Curvas de animação:

```css
--ease-linear: linear;
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Easing Semântico

```css
--ease-default: var(--ease-in-out);
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
--ease-sharp: cubic-bezier(0.4, 0, 0.6, 1);
```

---

## Z-Index Tokens

Camadas (stacking order):

```css
--z-dropdown: 1000;
--z-sticky: 1020;
--z-fixed: 1030;
--z-modal-backdrop: 1040;
--z-modal: 1050;
--z-popover: 1060;
--z-tooltip: 1070;
--z-notification: 1080;
```

---

## Breakpoint Tokens

Responsive breakpoints:

```css
--breakpoint-xs: 320px;
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

### Breakpoint Semântico

```css
--breakpoint-mobile: var(--breakpoint-md);
--breakpoint-tablet: var(--breakpoint-lg);
--breakpoint-desktop: var(--breakpoint-xl);
```

---

## Container Tokens

```css
--container-xs: 100%;
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1536px;
```

---

## Transition Tokens

Combinações de duration + easing:

```css
--transition-fast: var(--duration-fast) var(--ease-default);
--transition-base: var(--duration-base) var(--ease-default);
--transition-slow: var(--duration-slow) var(--ease-default);

/* Propriedade-específico */
--transition-colors: var(--duration-150) var(--ease-in-out);
--transition-transform: var(--duration-300) var(--ease-out);
--transition-opacity: var(--duration-150) var(--ease-in-out);
```

---

## Layout Tokens

```css
/* Grid */
--grid-cols-1: repeat(1, minmax(0, 1fr));
--grid-cols-2: repeat(2, minmax(0, 1fr));
--grid-cols-3: repeat(3, minmax(0, 1fr));
--grid-cols-4: repeat(4, minmax(0, 1fr));
--grid-cols-6: repeat(6, minmax(0, 1fr));
--grid-cols-12: repeat(12, minmax(0, 1fr));

/* Max Width */
--max-w-xs: 20rem;    /* 320px */
--max-w-sm: 24rem;    /* 384px */
--max-w-md: 28rem;    /* 448px */
--max-w-lg: 32rem;    /* 512px */
--max-w-xl: 36rem;    /* 576px */
--max-w-2xl: 42rem;   /* 672px */
--max-w-3xl: 48rem;   /* 768px */
--max-w-4xl: 56rem;   /* 896px */
--max-w-5xl: 64rem;   /* 1024px */
--max-w-6xl: 72rem;   /* 1152px */
--max-w-7xl: 80rem;   /* 1280px */
--max-w-full: 100%;
```

---

## Implementação CSS

### CSS Custom Properties

```css
:root {
  /* Cores Primárias */
  --color-primary: #2563EB;
  --color-primary-hover: #1D4ED8;
  --color-primary-light: #EFF6FF;

  /* Cores Semânticas */
  --color-success: #22C55E;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-info: #3B82F6;

  /* Glass */
  --glass-bg: rgba(255, 255, 255, 0.7);
  --glass-border: rgba(255, 255, 255, 0.18);
  --blur-glass: 20px;

  /* Tipografia */
  --font-sans: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;

  /* Espaçamento */
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;

  /* Border Radius */
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;

  /* Sombras */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);

  /* Transições */
  --duration-base: 300ms;
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: var(--duration-base) var(--ease-default);
}
```

### Dark Mode

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: #3B82F6;
    --color-primary-hover: #60A5FA;
    --color-bg-primary: #0B1120;
    --color-text-primary: #F8FAFC;
    --glass-bg: rgba(30, 58, 138, 0.6);
    --glass-border: rgba(255, 255, 255, 0.08);
  }
}
```

---

## Implementação Tailwind

### tailwind.config.js

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
          light: '#EFF6FF',
          // ... escala completa
        },
        glass: {
          DEFAULT: 'rgba(255, 255, 255, 0.7)',
          dark: 'rgba(30, 58, 138, 0.6)',
          border: 'rgba(255, 255, 255, 0.18)',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'monospace'],
      },
      fontSize: {
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        // ... escala completa
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backdropBlur: {
        xs: '2px',
        '3xl': '30px',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
};
```

---

## Implementação JSON

### design-tokens.json

```json
{
  "color": {
    "primary": {
      "base": "#2563EB",
      "hover": "#1D4ED8",
      "light": "#EFF6FF"
    },
    "glass": {
      "light": "rgba(255, 255, 255, 0.7)",
      "dark": "rgba(30, 58, 138, 0.6)",
      "border": "rgba(255, 255, 255, 0.18)"
    }
  },
  "typography": {
    "fontFamily": {
      "sans": ["Inter", "-apple-system", "sans-serif"],
      "mono": ["JetBrains Mono", "SF Mono", "monospace"]
    },
    "fontSize": {
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem"
    }
  },
  "spacing": {
    "sm": "0.5rem",
    "md": "1rem",
    "lg": "1.5rem",
    "xl": "2rem"
  },
  "borderRadius": {
    "md": "0.5rem",
    "lg": "0.75rem",
    "xl": "1rem"
  }
}
```

---

## Boas Práticas

### 1. Nomenclatura

**Use nomes semânticos:**
```css
/* Bom */
--color-primary
--color-text-primary
--spacing-component-padding

/* Evitar */
--color-blue
--color-1
--spacing-12
```

### 2. Organização

**Agrupe por categoria:**
```css
/* Cores */
--color-*

/* Tipografia */
--font-*

/* Espaçamento */
--spacing-*

/* Layout */
--layout-*
```

### 3. Escalas

**Use escalas consistentes:**
- Spacing: base 4px
- Font size: Major third (1.25)
- Time: Fibonacci (75, 100, 150, 200, 300...)

### 4. Documentação

**Documente tokens obscuros:**
```css
/* Efeito de vidro padrão para cards em light mode */
--glass-card-bg: rgba(255, 255, 255, 0.7);

/* Sombras sutis para elementos glass com hover */
--shadow-glass-hover: 0 12px 40px rgba(0, 0, 0, 0.15);
```

---

## Ferramentas

### Style Dictionary

Automatize a transformação de tokens:

```json
{
  "source": ["tokens/**/*.json"],
  "platforms": {
    "css": {
      "transformGroup": "css",
      "buildPath": "build/css/",
      "files": [{
        "destination": "variables.css",
        "format": "css/variables"
      }]
    },
    "js": {
      "transformGroup": "js",
      "buildPath": "build/js/",
      "files": [{
        "destination": "variables.js",
        "format": "javascript/es6"
      }]
    }
  }
}
```

---

## Referências

- [Design Tokens Community Group](https://www.tr.designtokens.org/)
- [Style Dictionary](https://amzn.github.io/style-dictionary/)
- [Tailwind CSS](https://tailwindcss.com/docs/customizing-design-system)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

---

**Próximo arquivo:** [INDEX.md](./INDEX.md)
