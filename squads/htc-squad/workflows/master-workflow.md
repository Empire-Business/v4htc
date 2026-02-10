# Master Workflow - HTC Squad

**Objective:** Executar o projeto HTC completo do início ao fim.

---

## Overview

Este workflow orquestra a execução completa do projeto HTC, respeitando as dependências e ordem de execução definida no squad.yaml.

---

## Pre-Execution Checklist

Antes de iniciar:

- [ ] Ler Inst.md completamente
- [ ] Ler PRD-GEN.md
- [ ] Ler MAAS-HTC-Completo.md
- [ ] Verificar acesso a Transcripts_md/
- [ ] Entender a estrutura do squad
- [ ] Identificar quais skills usar

---

## PHASE 1: Foundation (Serial)

```
┌─────────────────────────────────────────────────────────────┐
│                    FASE 1 - FUNDAÇÃO                         │
│                    Execução: Serial                          │
└─────────────────────────────────────────────────────────────┘

Step 1: hormozi-agent → structure-product
   ↓
Step 2: hormozi-agent → define-offer-plans
   ↓
Step 3: hormozi-agent → create-complete-course
   ↓
Step 4: hormozi-agent → create-claude-skills
   ↓
Step 5: hormozi-agent → create-installation-course
   ↓
Step 6: hormozi-agent → create-app-builder-course
   ↓
Step 7: design-agent → create-visual-identity ⚠️ CRÍTICO
   ↓
Step 8: hormozi-agent → finalize-sales-scripts
```

### Commands to Execute

**Step 1-2:** `/hormozi-clone`
```
Estruture o produto HTC completo seguindo Inst.md seções 1.1-1.4.
Em seguida, defina a oferta e 3 planos anuais (seção 4).
```

**Step 3:** `/hormozi-clone`
```
Crie o CURSO COMPLETO do Método High Ticket em arquivos .md.
Baseie-se em Transcripts_md/ e enriqueça com frameworks.
Organize em módulos/aulas na pasta HTC/01-Entrega/Cursos/.
```

**Step 4:** `/hormozi-clone`
```
Crie 10 CLAUDE SKILLS prontas em .zip.
ANTES: Pesquise sobre como criar Claude Skills oficialmente.
Crie cada skill com: prompt, instruções, exemplos, pastas auxiliares e MANUAL.
```

**Step 5:** `/hormozi-clone`
```
Pesquise sobre GLM Coding Plan Z-AI e crie CURSO DE INSTALAÇÃO.
Use WebSearch para pesquisar: "GLM Coding Plan Claude Code Z-AI"
Crie 8 módulos detalhados em .md.
```

**Step 6:** `/hormozi-clone`
```
Pesquise sobre Vibecoding, Claude Code, Supabase MCP, Lovable.
Crie CURSO DE CONSTRUÇÃO DE APPS.
Método: PRD Primeiro + Vibecoding.
9 módulos completos.
```

**Step 7:** `/frontend-design`
```
Crie identidade visual completa para HTC.
Estilo: Liquid Glass / Glassmorphism.
Paleta, tipografia, tom de voz, guidelines.
⚠️ CRÍTICO: Todos os materiais de marketing dependem disso.
```

**Step 8:** `/hormozi-clone`
```
Finalize os scripts de vendas aplicando a identidade visual.
Use o tom de voz e persona definidos.
```

---

## PHASE 2: Sales Funnel (Serial - CRITICAL)

```
┌─────────────────────────────────────────────────────────────┐
│                 FASE 2 - FUNIS DE VENDA                      │
│                 Prioridade: MÁXIMA                          │
└─────────────────────────────────────────────────────────────┘

Step 9: russel-brunson-agent → create-sales-funnel
```

### Commands to Execute

**Step 9:** `/htc-funnel-builder`
```
Crie FUNIL COMPLETO DETALHADO para HTC.
Mapeie todas as 5 etapas: atração → nutrição → conversão → fechamento → pós-venda.
Entregue: diagrama, copies, e-mails, scripts de follow-up, métricas.
```

---

## PHASE 3: Marketing (Parallel)

```
┌─────────────────────────────────────────────────────────────┐
│                   FASE 3 - MARKETING                         │
│                   Execução: Parallel                        │
└─────────────────────────────────────────────────────────────┘

                  ┌──────────────────┐
                  │ Step 10: russel  │
                  │  -brunson-agent  │
                  │ create-marketing │
                  │    materials     │
                  └──────────────────┘

                  ┌──────────────────┐
                  │   Step 11:       │
                  │   design-agent   │
                  │ create-platform  │
                  │   prototypes     │
                  └──────────────────┘

                  ┌──────────────────┐
                  │   Step 12:       │
                  │  slides-agent    │
                  │ create-sales     │
                  │     slides       │
                  └──────────────────┘
```

### Commands to Execute (Execute in Parallel)

**Step 10:** `/htc-funnel-builder`
```
Crie materiais de marketing restantes.
Criativos (reels, estáticos, stories, ads), conteúdo orgânico, narrativa de marca.
```

**Step 11:** `/frontend-design`
```
Crie protótipos da plataforma HTC.
Wireframes de todas as telas, fluxos de usuário, componentes reutilizáveis.
```

**Step 12:** `/frontend-slides`
```
Crie slides de apresentação de vendas.
Siga estrutura: hook → problem → solution → product → proof → offer → CTA.
```

---

## PHASE 4: Finalization (Serial)

```
┌─────────────────────────────────────────────────────────────┐
│                  FASE 4 - FINALIZAÇÃO                       │
│                  Execução: Serial                          │
└─────────────────────────────────────────────────────────────┘

Step 13: hormozi-agent → compile-materials
   ↓
Step 14: prd-agent → execute-prd
   ↓
Step 15: prd-agent → create-visualization-app
```

### Commands to Execute

**Step 13:** Compile manualmente
```
Verifique que TODOS os deliveráveis estão completos.
Organize a estrutura final em pastas hierárquicas.
Crie README.md principal com mapa de navegação.
```

**Step 14:** Execute PRD manualmente
```
Siga PRD-GEN.md rigorosamente.
Crie PRD completo documentando todo o produto HTC.
Especifique conhecimento dos agentes IA da plataforma.
```

**Step 15:** Use `/frontend-design` ou manual
```
Crie app Next.js para visualização.
Funcionalidades: busca, navegação, links únicos.
Prepare para deploy no Vercel.
```

---

## Post-Execution Checklist

Após completar todas as fases:

- [ ] Todos os arquivos em .md
- [ ] Estrutura de pastas hierárquica
- [ ] Conteúdo didático e acessível
- [ ] Identidade visual aplicada consistentemente
- [ ] Funil completo e detalhado
- [ ] Materiais de marketing prontos
- [ ] Scripts de vendas completos
- [ ] 3 planos anuais documentados
- [ ] PRD executado
- [ ] App de visualização criado
- [ ] Instruções de deploy prontas

---

## Troubleshooting

### Se um agente falhar:
1. Verifique se a dependência anterior foi completada
2. Revise as instruções específicas da tarefa
3. Consulte os arquivos de referência (PRD-GEN.md, MAAS-HTC-Completo.md)

### Se a identidade visual não estiver pronta:
- **NÃO** inicie FASE 3
- Aguarde Step 7 (design-agent → create-visual-identity)

### Se precisar pular uma etapa:
- Documente o motivo
- Crie uma issue para resolver depois
- Continue se a dependência permitir

---

## Quick Reference

### Agents Summary
| Agent | Role | Main Tasks |
|-------|------|------------|
| hormozi-clone | Lead | Produto, cursos, skills, scripts |
| htc-funnel-builder | Marketing | Funis, marketing materials |
| frontend-design | Design | ID visual, protótipos |
| frontend-slides | Content | Slides de vendas |
| Manual | PRD | Documentação, app visualização |

### Critical Path
```
structure → plans → course → skills → install-course →
app-course → visual-identity → scripts → funnel →
(marketing + prototypes + slides) → compile → PRD → app
```

### Expected Timeline
- FASE 1: 20-30 hours
- FASE 2: 4-6 hours
- FASE 3: 12-18 hours (parallel)
- FASE 4: 10-15 hours

**Total:** ~46-69 hours

---

## Success Criteria

O projeto será considerado completo quando:

1. **Entrega** ✓
   - Curso completo em .md
   - 10 Claude Skills .zip
   - Cursos de instalação e construção
   - Tudo organizado

2. **Marketing** ✓
   - Funil completo detalhado
   - Todos os materiais criados
   - Identidade visual aplicada

3. **Vendas** ✓
   - Scripts completos
   - Slides prontos

4. **Planos** ✓
   - 3 opções anuais definidas

5. **Formatação** ✓
   - Identidade visual completa
   - Protótipos criados

6. **PRD** ✓
   - Documento técnico completo

7. **App** ✓
   - Aplicação de visualização
   - Pronto para deploy

---

**Início do projeto:** _____/_____/_____
**Término do projeto:** _____/_____/_____
**Responsável:** _________________
