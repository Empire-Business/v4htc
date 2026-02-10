# Template: Claude Skill

**Use este template para criar novas Claude Skills**

---

## Estrutura de Arquivos de uma Claude Skill

```
skill-name/
├── skill.yaml          # Manifesto da skill
├── README.md           # Instruções de uso
├── prompt.md           # Prompt principal
├── examples/           # Exemplos de uso
│   ├── example-1.md
│   └── example-2.md
├── templates/          # Templates prontos
│   ├── template-1.md
│   └── template-2.md
└── resources/          # Recursos adicionais
    ├── framework-1.md
    └── reference.md
```

---

## skill.yaml

```yaml
apiVersion: claude/v1
kind: Skill
metadata:
  name: skill-name
  displayName: Skill Display Name
  version: 1.0.0
  description: |
    Breve descrição do que esta skill faz

spec:
  category: [marketing|sales|product|analytics]
  tags: [tag1, tag2, tag3]

  input:
    type: [text|file|mixed]
    required: [requirement1, requirement2]
    optional: [optional1]

  output:
    type: [text|file|structured]
    format: [markdown|json|html]

  capabilities:
    - capability-1
    - capability-2
```

---

## prompt.md

```markdown
# [Nome da Skill]

Você é um especialista em [área de atuação].

## Seu Propósito

[Descreva o que esta skill faz]

## Instruções

1. [Instrução 1]
2. [Instrução 2]
3. [Instrução 3]

## Frameworks a Usar

- [Framework 1]: [Descrição]
- [Framework 2]: [Descrição]

## Formato de Saída

[Descreva o formato esperado de saída]

## Exemplos

Consulte a pasta `examples/` para exemplos de uso.

## Templates

Consulte a pasta `templates/` para templates prontos.
```

---

## README.md

```markdown
# [Nome da Skill]

## O que esta skill faz

[Descrição clara e concisa]

## Como usar

### Opção 1: Prompt direto

```
[Exemplo de prompt]
```

### Opção 2: Usando um template

```
[Exemplo de uso com template]
```

## O que você precisa fornecer

- [Requisito 1]
- [Requisito 2]
- [Requisito 3]

## O que você recebe

[Descrição do output]

## Exemplos

Veja a pasta `examples/` para exemplos completos.

## Frameworks utilizados

- [Framework 1]
- [Framework 2]

## Dicas

- [Dica 1]
- [Dica 2]

## Troubleshooting

**Problema:** [Descrição]
**Solução:** [Descrição]

## Recursos adicionais

Consulte a pasta `resources/` para materiais de referência.
```

---

## Checklist de Criação de Skill

Antes de considerar uma skill completa:

- [ ] skill.yaml criado e validado
- [ ] prompt.md claro e completo
- [ ] README.md com instruções detalhadas
- [ ] Pelo menos 2 exemplos em examples/
- [ ] Pelo menos 1 template em templates/
- [ ] Resources de referência em resources/
- [ ] Testado com múltiplos cenários
- [ ] Saída consistente e previsível

---

## Dicas de Boas Práticas

1. **Seja específico** no prompt sobre o que a skill deve fazer
2. **Forneça exemplos** concretos de uso
3. **Crie templates** para os casos mais comuns
4. **Documente tudo** no README.md
5. **Teste extensivamente** antes de considerar completa
6. **Mantenha o foco** - uma skill deve fazer UMA coisa bem feita

---

## Arquivos de Suporte Recomendados

### examples/example-1.md
Exemplo completo de uso da skill com input e output

### templates/basic-template.md
Template pronto para o caso mais comum de uso

### resources/framework-reference.md
Documentação dos frameworks utilizados pela skill
