# Wireframe: Lista de Cursos
## Área de Cursos - Tela de Listagem

**Versão:** 1.0
**Data:** Fevereiro 2026
**Layout:** Sidebar + Grid de Cursos com Filtros

---

## Descrição Geral

Tela de listagem de todos os cursos disponíveis com filtros por categoria, nível, duração e busca. Grid responsivo com cards detalhados de cada curso.

---

## Layout Desktop

```
┌─────────┬─────────────────────────────────────────────────────────────┐
│ SIDEBAR │ HEADER                                                      │
│         │ [Logo] [Search Bar...................] [Filter] [Sort]     │
│         ├─────────────────────────────────────────────────────────────┤
│         │ BREADCRUMB                                                  │
│         │ Dashboard > Cursos > Todos os Cursos                        │
│         ├─────────────────────────────────────────────────────────────┤
│         │                                                             │
│         │ ┌───────────────────────────────────────────────────────┐  │
│         │ │ FILTERS SIDEBAR                                        │  │
│         │ │                                                        │  │
│         │ │ [× Limpar Filtros]                                    │  │
│         │ │                                                        │  │
│         │ │ Categorias                                            │  │
│         │ │ ☐ Frontend (24)                                       │  │
│         │ │ ☑ Backend (18)                                        │  │
│         │ │ ☐ Mobile (12)                                         │  │
│         │ │ ☐ DevOps (8)                                          │  │
│         │ │                                                        │  │
│         │ │ Nível                                                 │  │
│         │ │ ☐ Iniciante                                           │  │
│         │ │ ☑ Intermediário                                       │  │
│         │ │ ☐ Avançado                                            │  │
│         │ │                                                        │  │
│         │ │ Duração                                               │  │
│         │ │ [Slider] 2h - 40h                                     │  │
│         │ │                                                        │  │
│         │ │ Preço                                                 │  │
│         │ │ ○ Gratuito                                            │  │
│         │ │ ● Incluído no plano                                   │  │
│         │ │ ○ Premium                                             │  │
│         │ └───────────────────────────────────────────────────────┘  │
│         │                                                             │
│         │ COURSES GRID                                                │
│         │ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐          │
│         │ │  Card 1 │ │  Card 2 │ │  Card 3 │ │  Card 4 │          │
│         │ │  [Thumb]│ │  [Thumb]│ │  [Thumb]│ │  [Thumb]│          │
│         │ │  Title  │ │  Title  │ │  Title  │ │  Title  │          │
│         │ │  Meta   │ │  Meta   │ │  Meta   │ │  Meta   │          │
│         │ │  [▶ Play]│ │  [▶ Play]│ │  [▶ Play]│ │  [▶ Play]│          │
│         │ └─────────┘ └─────────┘ └─────────┘ └─────────┘          │
│         │                                                             │
│         │ PAGINATION                                                  │
│         │ [← Anterior] [1] [2] [3] ... [10] [Próximo →]             │
│         │                                                             │
└─────────┴─────────────────────────────────────────────────────────────┘
```

---

## Course Card Component

```html
<div class="course-card glass-card">
  <div class="course-thumbnail">
    <img src="/course-thumb.jpg" alt="Course thumbnail" />
    <div class="course-badges">
      <span class="badge badge-level">Intermediário</span>
      <span class="badge badge-category">React</span>
    </div>
    <div class="course-overlay">
      <button class="play-overlay" aria-label="Ver curso">
        <Icon name="play-circle" size="large" />
      </button>
    </div>
    <button class="bookmark-btn" aria-label="Salvar para depois">
      <Icon name="bookmark" />
    </button>
  </div>

  <div class="course-body">
    <div class="course-instructor">
      <img src="/instructor-avatar.jpg" alt="Instructor" />
      <span>João Silva</span>
    </div>

    <h3 class="course-title">
      React Avançado: Hooks, Context e Performance
    </h3>

    <p class="course-description">
      Domine as técnicas avançadas de React incluindo hooks personalizados...
    </p>

    <div class="course-meta">
      <span class="meta-item">
        <Icon name="clock" />
        12h de conteúdo
      </span>
      <span class="meta-item">
        <Icon name="play-circle" />
        48 aulas
      </span>
      <span class="meta-item">
        <Icon name="users" />
        2.4k alunos
      </span>
    </div>

    <div class="course-rating">
      <div class="stars">
        <Icon name="star" class="filled" />
        <Icon name="star" class="filled" />
        <Icon name="star" class="filled" />
        <Icon name="star" class="filled" />
        <Icon name="star" class="half" />
      </div>
      <span class="rating-value">4.8</span>
      <span class="rating-count">(324 avaliações)</span>
    </div>

    <div class="course-footer">
      <div class="course-price included">
        <Icon name="check-circle" />
        Incluído no plano
      </div>
      <button class="button button-primary button-sm">
        Ver Curso
      </button>
    </div>
  </div>
</div>
```

---

## Filter Sidebar

```html
<aside class="filters-sidebar glass-card">
  <div class="filters-header">
    <h3>Filtros</h3>
    <button class="clear-filters" aria-label="Limpar filtros">
      <Icon name="x" />
      Limpar
    </button>
  </div>

  <!-- Filter Group: Categories -->
  <div class="filter-group">
    <h4>Categorias</h4>
    <div class="checkbox-group">
      <label class="checkbox-label">
        <input type="checkbox" name="category" value="frontend" />
        <span>Frontend</span>
        <span class="count">24</span>
      </label>
      <label class="checkbox-label">
        <input type="checkbox" name="category" value="backend" checked />
        <span>Backend</span>
        <span class="count">18</span>
      </label>
      <!-- More categories -->
    </div>
  </div>

  <!-- Filter Group: Level -->
  <div class="filter-group">
    <h4>Nível</h4>
    <div class="radio-group">
      <label class="radio-label">
        <input type="radio" name="level" value="beginner" />
        <span>Iniciante</span>
      </label>
      <label class="radio-label">
        <input type="radio" name="level" value="intermediate" checked />
        <span>Intermediário</span>
      </label>
      <label class="radio-label">
        <input type="radio" name="level" value="advanced" />
        <span>Avançado</span>
      </label>
    </div>
  </div>

  <!-- Filter Group: Duration -->
  <div class="filter-group">
    <h4>Duração</h4>
    <div class="range-slider">
      <input
        type="range"
        min="0"
        max="80"
        value="40"
        class="slider"
      />
      <div class="range-labels">
        <span>0h</span>
        <span class="current-value">Até 40h</span>
        <span>80h+</span>
      </div>
    </div>
  </div>

  <!-- Filter Group: Price -->
  <div class="filter-group">
    <h4>Preço</h4>
    <div class="radio-group">
      <label class="radio-label">
        <input type="radio" name="price" value="free" />
        <span>Gratuito</span>
      </label>
      <label class="radio-label">
        <input type="radio" name="price" value="included" checked />
        <span>Incluído no plano</span>
      </label>
      <label class="radio-label">
        <input type="radio" name="price" value="premium" />
        <span>Premium</span>
      </label>
    </div>
  </div>

  <button class="button button-primary apply-filters">
    Aplicar Filtros
  </button>
</aside>
```

---

## Search and Sort

```html
<div class="courses-toolbar">
  <div class="search-bar">
    <Icon name="search" class="search-icon" />
    <input
      type="search"
      placeholder="Buscar cursos..."
      class="search-input"
    />
    <kbd class="shortcut">⌘K</kbd>
  </div>

  <div class="toolbar-actions">
    <div class="sort-dropdown">
      <button class="sort-trigger">
        <Icon name="arrow-up-down" />
        <span>Ordenar por</span>
        <span class="current">Mais populares</span>
        <Icon name="chevron-down" />
      </button>
      <div class="sort-menu glass-dropdown">
        <button class="sort-option active" data-sort="popular">
          Mais populares
        </button>
        <button class="sort-option" data-sort="newest">
          Mais recentes
        </button>
        <button class="sort-option" data-sort="rating">
          Melhor avaliados
        </button>
        <button class="sort-option" data-sort="duration">
          Duração
        </button>
      </div>
    </div>

    <button class="view-toggle">
      <Icon name="grid" class="active" />
      <Icon name="list" />
    </button>
  </div>
</div>
```

---

## Mobile Layout

```
┌──────────────────────────────────────────────┐
│ HEADER                                       │
│ [☰] Cursos        [🔍] [🔽]                 │
├──────────────────────────────────────────────┤
│ SEARCH BAR                                   │
│ ┌────────────────────────────────────────┐  │
│ │ 🔍 Buscar cursos...                    │  │
│ └────────────────────────────────────────┘  │
├──────────────────────────────────────────────┤
│ FILTER CHIPS (Horizontal Scroll)             │
│ [Frontend×] [Backend×] [+12 Filtros]         │
├──────────────────────────────────────────────┤
│ RESULTS COUNT                                │
│ 42 cursos encontrados                        │
├──────────────────────────────────────────────┤
│ COURSES LIST (Stacked Cards)                 │
│ ┌────────────────────────────────────────┐  │
│ │ [Thumbnail]                             │  │
│ │ React Avançado                          │  │
│ │ ⭐ 4.8 • 12h • 48 aulas                 │  │
│ │                    [▶ Ver Curso →]      │  │
│ └────────────────────────────────────────┘  │
│ ┌────────────────────────────────────────┐  │
│ │ [Thumbnail]                             │  │
│ │ Node.js API Completa                    │  │
│ │ ⭐ 4.9 • 16h • 62 aulas                 │  │
│ │                    [▶ Ver Curso →]      │  │
│ └────────────────────────────────────────┘  │
├──────────────────────────────────────────────┤
│ LOAD MORE                                    │
│ [Carregar mais cursos]                       │
└──────────────────────────────────────────────┘
```

---

## Empty States

### No Results

```html
<div class="empty-state">
  <div class="empty-icon">
    <Icon name="search" size="extra-large" />
  </div>
  <h3>Nenhum curso encontrado</h3>
  <p>Tente ajustar os filtros ou buscar por outro termo</p>
  <button class="button button-outline">
    Limpar filtros
  </button>
</div>
```

### No Courses (All Filtered Out)

```html
<div class="empty-state">
  <div class="empty-icon">
    <Icon name="filter" size="extra-large" />
  </div>
  <h3>Os filtros não retornaram resultados</h3>
  <p>Tente remover alguns filtros para ver mais cursos</p>
  <button class="button button-primary">
    Ver todos os cursos
  </button>
</div>
```

---

## Loading State

```html
<div class="courses-grid loading">
  <!-- Skeleton Cards -->
  <div class="course-card-skeleton">
    <div class="skeleton-thumbnail"></div>
    <div class="skeleton-body">
      <div class="skeleton-title"></div>
      <div class="skeleton-text"></div>
      <div class="skeleton-meta"></div>
    </div>
  </div>
  <!-- Repeat skeleton cards -->
</div>
```

---

## Próximos Arquivos

- [06-cursos-player.md](./06-cursos-player.md)
- [07-construcao-templates.md](./07-construcao-templates.md)
- [08-suporte-ia.md](./08-suporte-ia.md)
