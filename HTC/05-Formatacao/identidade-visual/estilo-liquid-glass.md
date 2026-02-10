# Estilo Liquid Glass / Glassmorphism
## High Ticket Code - Design System

**Versão:** 1.0
**Data:** Fevereiro 2026
**Inspiração:** Apple macOS Big Sur+, iOS 15+

---

## O que é Liquid Glass?

Liquid Glass é uma evolução do Glassmorphism que combina:

1. **Transparência** - Elementos semitransparentes
2. **Blur** - Desfoque de fundo (backdrop-filter)
3. **Bordas sutis** - Linhas finas e translúcidas
4. **Sombras suaves** - Depth sem peso
5. **Gradientes** - Transições cor suaves
6. **Brilho** - Efeitos de luz sutis

**Filosofia:** "Como se fosse feito de vidro líquido premium"

---

## Principais Características

### 1. Transparência e Blur

A essência do Liquid Glass está na transparência controlada:

```css
/* Glass Card Base */
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.18);
}
```

**Níveis de Transparência:**

| Nome | Opacidade | Uso |
|------|-----------|-----|
| Glass Heavy | 0.85 | Modal, dialogs |
| Glass Medium | 0.7 | Cards, panels |
| Glass Light | 0.5 | Overlays |
| Glass Subtle | 0.3 | Backgrounds |

**Níveis de Blur:**

| Nome | Blur | Uso |
|------|------|-----|
| Blur Subtle | 10px | Elements sutis |
| Blur Medium | 20px | Padrão para cards |
| Blur Heavy | 30px | Modals, dialogs |
| Blur Intense | 40px | Hero overlays |

### 2. Bordas

As bordas são cruciais para o efeito de vidro:

```css
/* Border Light (para temas claros) */
.glass-border-light {
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
}

/* Border Dark (para temas escuros) */
.glass-border-dark {
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
}
```

**Características da Border:**
- Espessura: 1px (sempre)
- Cor: branca translúcida
- Opacidade: 0.08 (dark) a 0.18 (light)

### 3. Sombras

Sombras sutis que criam depth sem peso:

```css
/* Shadow Suave */
.shadow-glass-sm {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

/* Shadow Média */
.shadow-glass-md {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

/* Shadow Profunda */
.shadow-glass-lg {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}

/* Shadow Glass Complexa */
.shadow-glass-xl {
  box-shadow:
    0 8px 32px 0 rgba(31, 38, 135, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.18);
}
```

### 4. Gradient Overlays

Gradientes sutis para adicionar profundidade:

```css
/* Gradient Overlay Suave */
.gradient-overlay {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
}

/* Gradient Aurora (colorido) */
.gradient-aurora {
  background: linear-gradient(
    135deg,
    rgba(99, 102, 241, 0.1) 0%,
    rgba(168, 85, 247, 0.1) 50%,
    rgba(236, 72, 153, 0.1) 100%
  );
}
```

---

## Componentes Liquid Glass

### Glass Card

O componente fundamental do sistema:

```css
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
  border-radius: 16px;
}

/* Glass Card Dark */
.glass-card-dark {
  background: rgba(30, 58, 138, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
  border-radius: 16px;
}
```

**Uso:**
- Cards de conteúdo
- Panels laterais
- Containers de informação
- Widgets

### Glass Button

Botões com efeito de vidro:

```css
/* Glass Button Primário */
.glass-button-primary {
  background: rgba(37, 99, 235, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.2);
  border-radius: 12px;
  color: white;
}

/* Glass Button Secundário */
.glass-button-secondary {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  color: #1E3A8A;
}

/* Glass Button Ghost */
.glass-button-ghost {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  color: white;
}

/* Hover States */
.glass-button-primary:hover {
  background: rgba(37, 99, 235, 0.9);
  box-shadow: 0 6px 24px rgba(37, 99, 235, 0.3);
  transform: translateY(-1px);
}
```

### Glass Input

Inputs com efeito de vidro:

```css
.glass-input {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 12px;
  padding: 12px 16px;
  color: #1E3A8A;
  font-size: 16px;
}

/* Focus State */
.glass-input:focus {
  background: rgba(255, 255, 255, 0.7);
  border: 2px solid rgba(37, 99, 235, 0.5);
  outline: none;
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
}

/* Dark Mode */
.glass-input-dark {
  background: rgba(30, 58, 138, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: white;
}
```

### Glass Modal

Modais com efeito de vidro imersivo:

```css
.glass-modal-overlay {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.glass-modal {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  border-radius: 24px;
}
```

### Glass Navigation

Navegação com efeito de vidro:

```css
.glass-nav {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
}

/* Sticky Nav */
.glass-nav-sticky {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
}
```

---

## Border Radius

A curvatura dos cantos é essencial para o efeito líquido:

```css
/* Escala de Border Radius */
--radius-sm: 8px;   /* Botões pequenos, badges */
--radius-md: 12px;  /* Botões, inputs */
--radius-lg: 16px;  /* Cards */
--radius-xl: 20px;  /* Cards grandes */
--radius-2xl: 24px; /* Modals, panels */
--radius-3xl: 32px; /* Hero containers */
--radius-full: 9999px; /* Pills, avatares */
```

**Recomendações:**
- Buttons: 12px (md)
- Cards: 16px (lg)
- Modals: 24px (2xl)
- Inputs: 12px (md)
- Badges: 8px (sm) ou full

---

## Animações

### Transições Suaves

```css
/* Padrão de Transição */
.transition-smooth {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Transição Rápida */
.transition-quick {
  transition: all 0.15s ease-out;
}

/* Transição Lenta */
.transition-slow {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Hover Effects

```css
/* Hover Lift */
.hover-lift {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

/* Hover Glow */
.hover-glow:hover {
  box-shadow: 0 0 20px rgba(37, 99, 235, 0.3);
}

/* Hover Brighten */
.hover-brighten:hover {
  background: rgba(255, 255, 255, 0.85);
}
```

### Loading States

```css
/* Shimmer Effect */
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.shimmer {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  background-size: 1000px 100%;
  animation: shimmer 2s infinite;
}
```

---

## Efeitos Especiais

### Glass Reflection

Reflexo sutil no topo do elemento:

```css
.glass-reflection::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: inherit;
  pointer-events: none;
}
```

### Glass Gradient Border

Borda com gradiente:

```css
.glass-gradient-border {
  position: relative;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 16px;
}

.glass-gradient-border::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 16px;
  padding: 1px;
  background: linear-gradient(
    135deg,
    rgba(99, 102, 241, 0.5),
    rgba(168, 85, 247, 0.5),
    rgba(236, 72, 153, 0.5)
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
```

### Glass Morphing Background

Fundo que muda suavemente:

```css
@keyframes morphing {
  0%, 100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
}

.glass-morph {
  animation: morphing 8s ease-in-out infinite;
}
```

---

## Variações por Tema

### Light Mode

```css
.glass-light {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
}
```

### Dark Mode

```css
.glass-dark {
  background: rgba(30, 58, 138, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
}
```

### Colored Variations

```css
/* Blue Glass */
.glass-blue {
  background: rgba(37, 99, 235, 0.2);
  border: 1px solid rgba(37, 99, 235, 0.3);
}

/* Purple Glass */
.glass-purple {
  background: rgba(139, 92, 246, 0.2);
  border: 1px solid rgba(139, 92, 246, 0.3);
}

/* Success Glass */
.glass-success {
  background: rgba(34, 197, 94, 0.2);
  border: 1px solid rgba(34, 197, 94, 0.3);
}
```

---

## Implementação CSS

### CSS Variables

```css
:root {
  /* Glass Opacity */
  --glass-heavy: rgba(255, 255, 255, 0.85);
  --glass-medium: rgba(255, 255, 255, 0.7);
  --glass-light: rgba(255, 255, 255, 0.5);
  --glass-subtle: rgba(255, 255, 255, 0.3);

  /* Glass Borders */
  --glass-border-light: rgba(255, 255, 255, 0.18);
  --glass-border-dark: rgba(255, 255, 255, 0.08);

  /* Glass Shadows */
  --glass-shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.05);
  --glass-shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08);
  --glass-shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.12);
  --glass-shadow-xl: 0 8px 32px 0 rgba(31, 38, 135, 0.1);

  /* Glass Blur */
  --blur-sm: 10px;
  --blur-md: 20px;
  --blur-lg: 30px;
  --blur-xl: 40px;

  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --radius-2xl: 24px;
  --radius-3xl: 32px;
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  :root {
    --glass-heavy: rgba(30, 58, 138, 0.7);
    --glass-medium: rgba(30, 58, 138, 0.6);
    --glass-light: rgba(30, 58, 138, 0.5);
    --glass-subtle: rgba(30, 58, 138, 0.3);
  }
}
```

### Tailwind Classes

```javascript
module.exports = {
  theme: {
    extend: {
      backdropBlur: {
        xs: '4px',
        sm: '10px',
        DEFAULT: '20px',
        md: '30px',
        lg: '40px',
        xl: '60px',
      },
      backgroundColor: {
        'glass-heavy': 'rgba(255, 255, 255, 0.85)',
        'glass-medium': 'rgba(255, 255, 255, 0.7)',
        'glass-light': 'rgba(255, 255, 255, 0.5)',
        'glass-subtle': 'rgba(255, 255, 255, 0.3)',
      },
      boxShadow: {
        'glass-sm': '0 2px 8px rgba(0, 0, 0, 0.05)',
        'glass-md': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'glass-lg': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'glass-xl': '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
      },
    },
  },
};
```

---

## Boas Práticas

### DO

- Usar backdrop-filter com fallback
- Manter contraste suficiente para texto
- Usar bordas sutis para definir limites
- Adicionar sombras para depth
- Testar em diferentes backgrounds
- Considerar performance em mobile

### DON'T

- Não usar transparência excessiva
- Não esquecer de bordas (elementos somem no fundo)
- Não usar sombras muito pesadas
- Não misturar muitos efeitos glass
- Não ignorar acessibilidade
- Não usar em áreas muito movimentadas

---

## Performance

### Otimizações

```css
/* Usar will-change para animações */
.animated-glass {
  will-change: transform, backdrop-filter;
}

/* Limitar backdrop-filter em mobile */
@media (max-width: 768px) {
  .glass-card {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
}

/* Fallback para navegadores antigos */
@supports not (backdrop-filter: blur(10px)) {
  .glass-card {
    background: rgba(255, 255, 255, 0.95);
  }
}
```

---

## Exemplos de Uso

### Card com Imagem de Fundo

```css
.glass-card-image {
  position: relative;
  background: linear-gradient(
    135deg,
    rgba(37, 99, 235, 0.8) 0%,
    rgba(139, 92, 246, 0.8) 100%
  );
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
}
```

### Hero Section

```css
.glass-hero {
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    #667eea 0%,
    #764ba2 100%
  );
  position: relative;
}

.glass-hero-content {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
}
```

---

## Referências

- Apple Human Interface Guidelines
- Glassmorphism UI Trend
- Material Design 3
- [glassmorphism.com](https://glassmorphism.com)

---

**Próximo arquivo:** [tom-de-voz.md](./tom-de-voz.md)
