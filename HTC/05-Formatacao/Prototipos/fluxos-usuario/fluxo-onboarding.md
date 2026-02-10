# Fluxos de Usuário
## User Experience Flows - HTC Platform

**Versão:** 1.0
**Data:** Fevereiro 2026

---

## Fluxo 1: Onboarding (Primeiro Acesso)

### Diagrama de Fluxo

```
┌─────────────────────────────────────────────────────────────────────────┐
│                          FLUXO DE ONBOARDING                            │
└─────────────────────────────────────────────────────────────────────────┘

[Cadastro Concluído]
        │
        ▼
┌─────────────────────┐
│  Tela de Boas-vindas│
│  - Mensagem personalizada
│  - Explicação da plataforma
│  - CTAs: "Começar agora" / "Ver Tour"
└─────────────────────┘
        │
        ├──["Ver Tour"]──► [Tour Guiado da Plataforma]
        │                      │
        │                      ├──[Dashboad]──► [Explicar Stats]
        │                      ├──[Cursos]──────► [Mostrar Grid]
        │                      ├──[Player]──────► [Demo Video]
        │                      └──[Suporte]─────► [Demo Chat]
        │                      │
        │                      ▼
        │                 [Tour Concluído]
        │                      │
        └──────────────────────┘
        │
        ▼
┌─────────────────────┐
│  Seleção de Interesses│
│  - Frontend?
│  - Backend?
│  - Mobile?
│  - DevOps?
└─────────────────────┘
        │
        ▼
┌─────────────────────┐
│  Recomendação Personalizada│
│  - Cursos baseados nos interesses
│  - Trilha de aprendizado
│  - CTA: "Começar primeiro curso"
└─────────────────────┘
        │
        ├──[Começar Curso]──►[Player de Vídeo]
        │
        ▼
┌─────────────────────┐
│  Configuração Perfil│
│  - Upload avatar (opcional)
│  - Bio (opcional)
│  - Links sociais (opcional)
│  - CTA: "Pular" / "Salvar"
└─────────────────────┘
        │
        ▼
┌─────────────────────┐
│  Onboarding Completo!│
│  - Mensagem de celebração
│  - Confetti/Animação
│  - Redirecionar para Dashboard
└─────────────────────┘
```

### Micro-interações do Onboarding

**1. Progress Indicator**
- Barra de progresso no topo (3-5 steps)
- Animação suave entre steps
- "X de Y concluído"

**2. Tooltips Educacionais**
- First-time tooltips em elementos chave
- "Saiba mais" links em cada tooltip
- Opção "Não mostrar novamente"

**3. Empty States Motivacionais**
- Mensagens encorajadoras
- CTAs claros para ação
- Preview do que virá após ação

---

## Fluxo 2: Navegação Principal

### Diagrama de Fluxo

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        NAVEGAÇÃO PRINCIPAL                              │
└─────────────────────────────────────────────────────────────────────────┘

[Dashboard]
    │
    ├──[Sidebar: Cursos]──►[Lista de Cursos]
    │                          │
    │                          ├──[Filtros]
    │                          ├──[Busca]
    │                          ├──[Card do Curso]
    │                          │       │
    │                          │       ▼
    │                          │  ┌─────────────────┐
    │                          │  │  Preview Rápido  │
    │                          │  │  - Thumbnail     │
    │                          │  │  - Descrição     │
    │                          │  │  - CTAs          │
    │                          │  └─────────────────┘
    │                          │       │
    │                          │       ├──[Ver Curso]──►[Player]
    │                          │       ├──[Add Lista]───►[Salvo]
    │                          │       └──[Compartilhar]
    │                          │
    │                          └──[Sair]
    │
    ├──[Sidebar: Construir]──►[Seleção Template]
    │                          │
    │                          ├──[Preview]
    │                          ├──[Configurar]
    │                          ├──[Download]
    │                          └──[Sair]
    │
    ├──[Sidebar: Tutorial]───►[Tutorial Instalação]
    │                          │
    │                          ├──[Passo a Passo]
    │                          ├──[Vídeos]
    │                          ├──[Checklist]
    │                          └──[Sair]
    │
    ├──[Sidebar: Suporte]───►[Chat IA]
    │                          │
    │                          ├──[Histórico]
    │                          ├──[Nova Conversa]
    │                          └──[Sair]
    │
    └──[User Profile]────────►[Menu Dropdown]
                                      │
                                      ├──[Meu Perfil]
                                      ├──[Configurações]
                                      ├──[Assinatura]
                                      └──[Sair]
```

---

## Fluxo 3: Compra (Upgrade de Plano)

### Diagrama de Fluxo

```
┌─────────────────────────────────────────────────────────────────────────┐
│                          FLUXO DE COMPRA                                │
└─────────────────────────────────────────────────────────────────────────┘

[Usuário no Plano Gratuito]
        │
        ├──[Acesso conteúdo premium]──►[Upgrade Modal]
        │                                   │
        │                                   ├──[Ver Planos]
        │                                   └──[Cancelar]
        │
        ▼
┌─────────────────────────┐
│   Página de Preços      │
│   - Comparação Planos    │
│   - Features destacadas  │
│   - CTAs por plano       │
└─────────────────────────┘
        │
        ├──[Selecionar Plano]──►[Checkout]
        │                             │
        │                             ├──[Dados Pessoais]
        │                             ├──[Pagamento]
        │                             ├──[Resumo]
        │                             └──[Confirmar]
        │
        ▼
┌─────────────────────────┐
│   Pagamento             │
│   - Cartão de Crédito   │
│   - PayPal              │
│   - PIX                 │
└─────────────────────────┘
        │
        ├──[Sucesso]─────────►[Confirmação + Bem-vindo]
        │
        ├──[Falha]───────────►[Tentar Novamente / Mudar Método]
        │
        └──[Cancelar]────────►[Offer Disconto]
                                     │
                                     └──[Aceitar]──►[Checkout c/ Desconto]
```

---

## Fluxo 4: Acesso ao Conteúdo

### Diagrama de Fluxo

```
┌─────────────────────────────────────────────────────────────────────────┐
│                       ACESSO AO CONTEÚDO                                │
└─────────────────────────────────────────────────────────────────────────┘

[Dashboard]
    │
    ▼
[Selecionar Curso]
    │
    ├──[Curso já iniciado]──►[Continue Watching]
    │
    └──[Curso novo]──────────►[Ver Primeira Aula]
    │
    ▼
┌─────────────────────────┐
│   Player de Vídeo       │
│   - Video player        │
│   - Lista de aulas      │
│   - Materiais           │
│   - Anotações           │
│   - Dúvidas             │
└─────────────────────────┘
    │
    ├──[Completar Aula]──►[Marcar Concluída]
    │                         │
    │                         ├──[Próxima Aula Automático]
    │                         └──[Voltar Lista]
    │
    ├──[Fazer Anotações]──►[Salvar Notes]
    │
    ├──[Perguntar]────────►[Postar Dúvida]
    │                         │
    │                         ├──[IA Responde]
    │                         └──[Comunidade Responde]
    │
    └──[Baixar Materiais]──►[Download]
    │
    ▼
┌─────────────────────────┐
│   Conclusão do Curso    │
│   - Todos módulos       │
│   - Quiz final          │
│   - Certificado         │
└─────────────────────────┘
    │
    ├──[Gerar Certificado]──►[Download PDF]
    │
    ├──[Compartilhar]────────►[Social Share]
    │
    └──[Recomendados]────────►[Próximo Curso]
```

---

## Componentes de Fluxo

### Navigation Guards

```javascript
// Exemplo de guard de rota
const requireSubscription = (plan) => {
  return (to, from, next) => {
    const userPlan = getUserPlan();

    if (!hasAccess(userPlan, plan)) {
      next({
        name: 'upgrade',
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  };
};
```

### Loading States

```javascript
// Skeleton durante carregamento
const loadingStates = {
  dashboard: 'dashboard-skeleton',
  courses: 'courses-grid-skeleton',
  player: 'player-skeleton'
};
```

### Error Handling

```javascript
// Tratamento de erros em fluxos
const handleFlowError = (error) => {
  if (error.type === 'subscription') {
    showUpgradeModal();
  } else if (error.type === 'network') {
    showRetryOption();
  } else {
    showGenericError();
  }
};
```

---

## Próximos Arquivos

- [componentes-botoes.md](../componentes/componentes-botoes.md)
- [componentes-cards.md](../componentes/componentes-cards.md)
- [componentes-formularios.md](../componentes/componentes-formularios.md)
