# Identidade Visual HTC
## High Ticket Code - Design System Completo

**Versão:** 1.0
**Data:** Fevereiro 2026
**Estilo:** Liquid Glass / Glassmorphism (Apple-inspired)
**Status:** ✅ Completo

---

## Sobre a Identidade Visual

Esta identidade visual foi criada para estabelecer uma presença premium, moderna e consistente para a HTC (High Ticket Code), refletindo inovação tecnológica e acessibilidade.

### Pilares do Design

1. **Liquid Glass / Glassmorphism** - Transparência, blur, bordas sutis
2. **Minimalismo Premium** - Apple-inspired, clean, sofisticado
3. **Acessibilidade** - WCAG AA compliant, contraste adequado
4. **Consistência** - Sistema de design escalável e reutilizável
5. **Versatilidade** - Funciona em todos os contextos (web, mobile, print)

---

## Arquivos da Identidade Visual

### Core Documents

| Arquivo | Descrição | Link |
|---------|-----------|------|
| **Paleta de Cores** | Todas as cores da marca (HEX, RGB, RGBA) | [paleta-cores.md](./paleta-cores.md) |
| **Tipografia** | Fontes, tamanhos, pesos, line-heights | [tipografia.md](./tipografia.md) |
| **Liquid Glass** | Estilo visual completo e componentes | [estilo-liquid-glass.md](./estilo-liquid-glass.md) |
| **Tom de Voz** | Personalidade e linguagem da marca | [tom-de-voz.md](./tom-de-voz.md) |
| **Persona da Marca** | Arquétipos, valores e posicionamento | [persona-marca.md](./persona-marca.md) |
| **Guidelines de Uso** | Como usar (e NÃO usar) a marca | [guidelines-uso.md](./guidelines-uso.md) |
| **Design Tokens** | Variáveis do sistema de design | [design-tokens.md](./design-tokens.md) |

---

## Resumo Executivo

### Cores Principais

**Primary Blue:**
- Primary 600: `#2563EB` (principal)
- Primary 700: `#1D4ED8` (hover)
- Primary 50: `#EFF6FF` (light version)

**Glass Colors:**
- Glass Light: `rgba(255, 255, 255, 0.7)`
- Glass Dark: `rgba(30, 58, 138, 0.6)`
- Glass Border: `rgba(255, 255, 255, 0.18)`

**Semantic Colors:**
- Success: `#22C55E`
- Warning: `#F59E0B`
- Error: `#EF4444`
- Info: `#3B82F6`

### Tipografia

**Fontes:**
- Display: Plus Jakarta Sans
- Sans: Inter
- Mono: JetBrains Mono

**Tamanhos Principais:**
- H1: 3.75rem (60px)
- H2: 2.25rem (36px)
- H3: 1.5rem (24px)
- Body: 1rem (16px)
- Small: 0.875rem (14px)

### Estilo Visual

**Liquid Glass Components:**
- Cards: Background translúcido + blur(20px) + border sutil
- Buttons: Semi-transparentes com hover effects
- Inputs: Glass effect com focus states
- Modals: Blur pesado (30px) com elevado contraste

**Border Radius:**
- Buttons: 12px
- Cards: 16px
- Modals: 24px

**Shadows:**
- Subtle: `0 2px 8px rgba(0, 0, 0, 0.05)`
- Medium: `0 4px 16px rgba(0, 0, 0, 0.08)`
- Heavy: `0 8px 32px rgba(0, 0, 0, 0.12)`

### Design Tokens

**Spacing (escala base 4px):**
- xs: 8px
- sm: 12px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px

**Transitions:**
- Fast: 150ms
- Base: 300ms
- Slow: 500ms

---

## Persona da Marca

### Arquétipos

**Primary: The Creator (O Criador) - 40%**
- Visionário e inovador
- Transforma ideias em realidade
- Empoderador

**Secondary: The Sage (O Sábio) - 30%**
- Especialista e educador
- Compartilha conhecimento
- Orientador

**Tertiary: The Magician (O Mágico) - 20%**
- Transformação através da IA
- Possibilidades infinitas

**Quaternary: The Regular Guy (O Comum) - 10%**
- Acessível e autêntico
- Um de nós

### Valores

1. **Empoderamento** - Você pode construir
2. **Transparência** - Sem hype, sem promessas falsas
3. **Praticidade** - Foco no que funciona
4. **Excelência** - Premium em tudo
5. **Comunidade** - Aprendemos juntos

---

## Tom de Voz

### Características

- **Claro** - Sem jargão desnecessário
- **Empático** - Entendemos sua dor
- **Orientado à Ação** - Faça isso, agora
- **Autêntico** - O que você vê é o que é
- **Encorajador** - Você consegue

### Exemplos

**Marketing:**
"Transforme Ideias em Apps em Dias, Não Meses"

**Educação:**
"Vamos Construir Seu Primeiro App Hoje"

**Suporte:**
"Entendo que isso pode ser frustrante. Vamos resolver juntos."

---

## Como Aplicar a Identidade Visual

### 1. Website

**Do:**
- Hero com Primary gradient background
- Glass cards para conteúdo
- Navigation com backdrop-blur
- CTAs com Primary 600
- Tipografia Inter + Plus Jakarta Sans

**Don't:**
- Não misture mais de 3 cores principais
- Não use transparência excessiva
- Não esqueça bordas nos elementos glass
- Não ignore contraste

### 2. Dashboards

**Do:**
- Background: Slate 50
- Cards: White com glass effect
- Headers: Primary 700
- Data visualization: Primary scale

**Don't:**
- Não sobrecarregue com efeitos glass
- Não use cores semânticas incorretamente
- Não ignore hierarquia visual

### 3. Documentação

**Do:**
- Limpo e minimalista
- Code blocks com JetBrains Mono
- Sintaxe highlight (Primary + accent colors)
- Navegação clara

**Don't:**
- Não use fontes decorativas
- Não ignore spacing consistente
- Não misture estilos de código

### 4. Email Templates

**Do:**
- Logo no topo
- Headline clara (2xl)
- CTA destacado
- Assinatura profissional

**Don't:**
- Não faça emails infinitos
- Não use imagens pesadas
- Não esqueça alt text

### 5. Social Media

**Do:**
- Visual limpo
- Headline curta e impactante
- Logo identificado
- CTA claro

**Don't:**
- Não distorça o logo
- Não use texto minúsculo
- Não polua visualmente

---

## Design Tokens - Quick Reference

### CSS Variables

```css
:root {
  /* Colors */
  --color-primary: #2563EB;
  --color-primary-hover: #1D4ED8;
  --color-success: #22C55E;
  --color-warning: #F59E0B;
  --color-error: #EF4444;

  /* Glass */
  --glass-bg: rgba(255, 255, 255, 0.7);
  --glass-border: rgba(255, 255, 255, 0.18);
  --blur-glass: 20px;

  /* Typography */
  --font-sans: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --font-size-base: 1rem;
  --font-size-xl: 1.25rem;

  /* Spacing */
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;

  /* Radius */
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;

  /* Transitions */
  --transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Tailwind Config

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
        },
        glass: {
          DEFAULT: 'rgba(255, 255, 255, 0.7)',
          border: 'rgba(255, 255, 255, 0.18)',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
};
```

---

## Checklist de Implementação

Antes de lançar qualquer material, verifique:

### Visual
- [ ] Paleta de cores oficial usada?
- [ ] Tipografia correta aplicada?
- [ ] Glass effects implementados corretamente?
- [ ] Contraste WCAG AA ou superior?
- [ ] Espaçamentos consistentes?
- [ ] Border radius adequado?
- [ ] Sombras sutis e apropriadas?

### Conteúdo
- [ ] Tom de voz HTC?
- [ ] Sem erros gramaticais?
- [ ] CTAs claros e orientados à ação?
- [ ] Autêntico e sem hype?
- [ ] Benefício-oriented?

### Técnico
- [ ] CSS variables usadas?
- [ ] Responsive (se aplicável)?
- [ ] Performance otimizada?
- [ ] Acessibilidade verificada?
- [ ] Cross-browser testado?

### Marca
- [ ] Logo correto e não distorcido?
- [ ] Espaçamento adequado ao redor do logo?
- [ ] Uso apropriado em contexto?
- [ ] Sem violação de guidelines?

---

## Próximos Passos

### Imediatos

1. **Implementar em todos os canais**
   - Website
   - Dashboards
   - Documentação
   - Email templates
   - Social media

2. **Criar assets**
   - Logo variants (SVG, PNG)
   - Icon set
   - Illustrations
   - Templates

3. **Documentar processos**
   - Como criar novo material
   - Processo de aprovação
   - Checklist de qualidade

### Médio Prazo

1. **Automatizar**
   - Style Dictionary para tokens
   - Figma components sync
   - CI/CD para design updates

2. **Expandir**
   - Dark mode refinado
   - Motion design guidelines
   - Illustration system

3. **Educar**
   - Workshops internos
   - Documentação de casos de uso
   - Biblioteca de exemplos

### Longo Prazo

1. **Evoluir**
   - Feedback loops
   - Atualizações baseadas em uso
   - Novas tecnologias

2. **Medir**
   - Consistência de aplicação
   - Reconhecimento de marca
   - Impacto no negócio

---

## Suporte e Dúvidas

### Quem usar como referência?

**Design Lead:**
- Responsável pela evolução do sistema
- Aprovações de materiais críticos
- Consultoria sobre aplicação

**Developers:**
- Implementação técnica
- Manutenção de tokens
- Cross-platform consistency

**Marketing:**
- Aplicação em campanhas
- Tom de voz
- Consistência de mensagem

### Quando atualizar?

**Atualizações maiores:**
- Mudanças na estratégia de marca
- Novas plataformas suportadas
- Feedback significativo da comunidade

**Atualizações menores:**
- Correções de bugs
- Melhorias de acessibilidade
- Otimizações de performance

---

## Referências e Inspirações

### Design Systems

- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [Material Design 3](https://m3.material.io/)
- [Atlassian Design System](https://atlassian.design/)
- [Shopify Polaris](https://polaris.shopify.com/)

### Glassmorphism

- [Glassmorphism CSS Generator](https://glassmorphism.com/)
- [Glass UI](https://ui.glass/generator)
- [Apple Big Sur Design](https://www.apple.com/macos/big-sur/)

### Ferramentas

- [Figma](https://www.figma.com/) - Design colaborativo
- [Style Dictionary](https://amzn.github.io/style-dictionary/) - Design tokens
- [Chromatic](https://www.chromatic.com/) - Documentação de componentes
- [Framer](https://www.framer.com/) - Prototipagem

---

## Conclusão

Esta identidade visual representa a HTC como uma marca premium, inovadora e acessível. O estilo Liquid Glass, inspirado na Apple, comunica sofisticação tecnológica enquanto mantém a acessibilidade que é central à nossa missão.

**Lembre-se:**
- Consistência é chave
- Menos é mais
- Acessibilidade não é opcional
- A marca é maior que qualquer material individual

**Vamos construir algo incrível juntos.**

---

**Última atualização:** Fevereiro 2026
**Próxima revisão:** Agosto 2026
**Responsável:** Design Lead

---

## Arquivos Individuais

Para detalhes completos de cada categoria, consulte os arquivos específicos:

1. [Paleta de Cores](./paleta-cores.md) - Todas as cores, gradientes e aplicações
2. [Tipografia](./tipografia.md) - Fontes, tamanhos, pesos e hierarquia
3. [Estilo Liquid Glass](./estilo-liquid-glass.md) - Componentes e efeitos glass
4. [Tom de Voz](./tom-de-voz.md) - Personalidade e linguagem
5. [Persona da Marca](./persona-marca.md) - Arquétipos e valores
6. [Guidelines de Uso](./guidelines-uso.md) - Como usar (e não usar) a marca
7. [Design Tokens](./design-tokens.md) - Variáveis do sistema

---

**HTC - High Ticket Code**
*Construindo o futuro, juntos.* 🚀
