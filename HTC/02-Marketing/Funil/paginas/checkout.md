# Página de Checkout - HTC
## Checkout Page com Copy Completa

**Versão:** 1.0
**Data:** 9 de Fevereiro de 2026
**Objetivo:** Finalizar a compra com mínima fricção
**Framework:** One-Click Checkout + Trust Elements

---

## ESTRUTURA COMPLETA DA PÁGINA DE CHECKOUT

### HERO SECTION (Confirmação)
```html
<section class="checkout-hero">
  <div class="container">
    <h1>Complete Sua Inscrição No HTC</h1>
    <p>Você está a um passo de transformar seu negócio.</p>
  </div>
</section>
```

---

### SEÇÃO 2: RESUMO DO PLANO ESCOLHIDO
```html
<section class="order-summary">
  <div class="summary-card">
    <div class="plan-info">
      <h2 id="plan-name">HTC PRO</h2>
      <p class="plan-positioning">Para quem quer atingir R$100k/mês</p>
    </div>

    <div class="price-display">
      <div class="price-total">
        <span class="currency">R$</span>
        <span class="amount">25.000</span>
        <span class="period">/ano</span>
      </div>
      <p class="installments">ou 12x de R$2.500</p>
    </div>

    <div class="bonus-highlight">
      <p class="bonus-text">
        🎁 <strong>Bônus exclusivo para primeiros 20:</strong>
        R$7.000 em bônus (análise + sessão + template)
      </p>
    </div>
  </div>
</section>
```

---

### SEÇÃO 3: DADOS PESSOAIS
```html
<section class="personal-info">
  <h2>Seus Dados</h2>

  <form class="checkout-form" id="checkout-form">
    <div class="form-group">
      <label for="full-name">Nome Completo *</label>
      <input type="text" id="full-name" name="full-name" required>
    </div>

    <div class="form-group">
      <label for="email">E-mail *</label>
      <input type="email" id="email" name="email" required>
      <p class="help-text">Enviaremos acesso para este e-mail</p>
    </div>

    <div class="form-group">
      <label for="phone">WhatsApp *</label>
      <input type="tel" id="phone" name="phone" required>
      <p class="help-text">Para comunicações importantes sobre sua conta</p>
    </div>

    <div class="form-group">
      <label for="cpf">CPF *</label>
      <input type="text" id="cpf" name="cpf" required>
    </div>
  </form>
</section>
```

---

### SEÇÃO 4: FORMA DE PAGAMENTO
```html
<section class="payment-methods">
  <h2>Forma de Pagamento</h2>

  <div class="payment-tabs">
    <!-- TAB 1: CARTÃO DE CRÉDITO -->
    <div class="payment-tab active" id="card-tab">
      <h3>Cartão de Crédito</h3>

      <div class="installments-options">
        <label class="installment-option">
          <input type="radio" name="installments" value="1" checked>
          <span>1x de R$25.000 (à vista)</span>
        </label>

        <label class="installment-option">
          <input type="radio" name="installments" value="2">
          <span>2x de R$12.500</span>
        </label>

        <label class="installment-option">
          <input type="radio" name="installments" value="3">
          <span>3x de R$8.333</span>
        </label>

        <label class="installment-option">
          <input type="radio" name="installments" value="6">
          <span>6x de R$4.167</span>
        </label>

        <label class="installment-option">
          <input type="radio" name="installments" value="12">
          <span>12x de R$2.083</span>
        </label>
      </div>

      <div class="card-details">
        <div class="form-group">
          <label for="card-number">Número do Cartão *</label>
          <input type="text" id="card-number" placeholder="0000 0000 0000 0000" required>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="card-expiry">Validade *</label>
            <input type="text" id="card-expiry" placeholder="MM/AA" required>
          </div>

          <div class="form-group">
            <label for="card-cvc">CVC *</label>
            <input type="text" id="card-cvc" placeholder="123" required>
          </div>
        </div>

        <div class="form-group">
          <label for="card-name">Nome no Cartão *</label>
          <input type="text" id="card-name" required>
        </div>
      </div>
    </div>

    <!-- TAB 2: PIX -->
    <div class="payment-tab" id="pix-tab">
      <h3>PIX (5% de Desconto)</h3>

      <div class="pix-info">
        <div class="pix-price">
          <span class="label">Valor com desconto:</span>
          <span class="price">R$23.750</span>
        </div>

        <p class="pix-instruction">
          Escaneie o QR Code ou use o código PIX para completar o pagamento.
        </p>

        <div class="qr-code-placeholder">
          <img src="qrcode.png" alt="QR Code PIX">
        </div>

        <div class="pix-code">
          <label>Código PIX:</label>
          <input type="text" readonly value="00020126360014BR.GOV.BCB.PIX...">
          <button type="button" class="copy-button">Copiar</button>
        </div>
      </div>
    </div>

    <!-- TAB 3: TRANSFERÊNCIA -->
    <div class="payment-tab" id="transfer-tab">
      <h3>Transferência Bancária</h3>

      <div class="transfer-info">
        <p>Para completar sua inscrição, faça uma transferência para:</p>

        <div class="bank-details">
          <div class="detail-row">
            <span class="label">Banco:</span>
            <span class="value">Itaú (341)</span>
          </div>
          <div class="detail-row">
            <span class="label">Agência:</span>
            <span class="value">1234</span>
          </div>
          <div class="detail-row">
            <span class="label">Conta:</span>
            <span class="value">56789-0</span>
          </div>
          <div class="detail-row">
            <span class="label">CNPJ:</span>
            <span class="value">00.000.000/0000-00</span>
          </div>
          <div class="detail-row">
            <span class="label">Beneficiário:</span>
            <span class="value">HTC High Ticket Club Ltda</span>
          </div>
        </div>

        <p class="transfer-note">
          Envie o comprovante para comprovante@htc.com.br
          Seu acesso será liberado em até 24h após confirmação.
        </p>
      </div>
    </div>
  </div>
</section>
```

---

### SEÇÃO 5: ENDEREÇA (Opcional)
```html
<section class="billing-address">
  <h2>Endereço de Cobrança (Opcional)</h2>

  <div class="form-group">
    <label for="address">Endereço</label>
    <input type="text" id="address" name="address">
  </div>

  <div class="form-row">
    <div class="form-group">
      <label for="city">Cidade</label>
      <input type="text" id="city" name="city">
    </div>

    <div class="form-group">
      <label for="state">Estado</label>
      <select id="state" name="state">
        <option value="">Selecione</option>
        <option value="SP">SP</option>
        <option value="RJ">RJ</option>
        <!-- ... outros estados ... -->
      </select>
    </div>

    <div class="form-group">
      <label for="zip">CEP</label>
      <input type="text" id="zip" name="zip">
    </div>
  </div>
</section>
```

---

### SEÇÃO 6: TERMOS E CONDIÇÕES
```html
<section class="terms-section">
  <div class="terms-checkbox">
    <label class="checkbox-label">
      <input type="checkbox" id="terms" name="terms" required>
      <span>Li e concordo com os <a href="/terms" target="_blank">Termos de Uso</a> e <a href="/privacy" target="_blank">Política de Privacidade</a> *</span>
    </label>
  </div>

  <div class="refund-info">
    <h4>Garantia de 30 Dias</h4>
    <p>
      Se em 30 dias você não sentir que o HTC vale cada centavo,
      devolvemos 100% do seu investimento. Sem perguntas.
    </p>
  </div>
</section>
```

---

### SEÇÃO 7: BOTÃO FINAL DE COMPRA
```html
<section class="final-cta">
  <button type="submit" class="checkout-button" id="complete-purchase">
    COMPLETAR INSCRIÇÃO AGORA →
  </button>

  <div class="security-badges">
    <div class="badge">
      <img src="ssl-badge.png" alt="SSL Seguro">
      <span>Pagamento 100% seguro</span>
    </div>
    <div class="badge">
      <img src="card-brands.png" alt="Bandeiras aceitas">
    </div>
  </div>

  <div class="trust-elements">
    <p>🔒 Seus dados estão protegidos com criptografia SSL de 256 bits</p>
    <p>✅ Não armazenamos dados do cartão de crédito</p>
    <p>🛡️ Transação processada pela Hotmart (líder em infoprodutos)</p>
  </div>
</section>
```

---

### FOOTER COM SUPORTE
```html
<footer class="checkout-footer">
  <div class="support-info">
    <h3>Precisa de Ajuda?</h3>
    <p>Entre em contato com nosso time de suporte:</p>
    <a href="mailto:suporte@htc.com.br">suporte@htc.com.br</a>
    <p>Horário: Seg-Sex, 9h às 18h (UTC-3)</p>
  </div>

  <div class="payment-logos">
    <img src="hotmart-logo.png" alt="Processado por Hotmart">
  </div>

  <div class="footer-links">
    <a href="/terms">Termos de Uso</a>
    <a href="/privacy">Política de Privacidade</a>
  </div>
</footer>
```

---

## COPY DOS PLANOS (PARA SELEÇÃO)

### PRIME
```
HTC PRIME - R$10.000/ano (12x R$1.000)

Para quem está começando em high ticket

Inclui:
✓ 3 Claude Skills prontas
✓ Módulo 1 completo
✓ Partes dos Módulos 2 e 3
✓ IA de suporte básica
✓ Comunidade de alunos

Resultado esperado: R$30k-50k/mês em 6 meses
```

### PRO
```
HTC PRO - R$25.000/ano (12x R$2.500)

Para quem quer atingir R$100k/mês

Inclui:
✓ Tudo do PRIME +
✓ 7 Claude Skills prontas
✓ Todos os módulos COMPLETOS (1-4)
✓ Área de Construção completa
✓ IA de suporte avançada
✓ Comunidade PRO exclusiva
✓ 2 mentorias coletivas/mês
✓ Instalação assistida

Resultado esperado: R$100k/mês em 6 meses
```

### ELITE
```
HTC ELITE - R$50.000/ano (12x R$5.000)

Para quem quer escalar para R$500k+/mês

Inclui:
✓ Tudo do PRO +
✓ 10 Claude Skills completas
✓ Todos os módulos COMPLETOS (1-5)
✓ Área de Construção PRO
✓ IA de suporte ELITE (contexto completo)
✓ Comunidade ELITE exclusiva
✓ 4 mentorias coletivas/mês
✓ 2 sessões individuais/mês
✓ Instalação premium e treinamento
✓ HTC Live (evento presencial)
✓ Certificação oficial HTC

Resultado esperado: R$500k+/mês em 6 meses
```

---

## UX ELEMENTS

### TABS DE PAGAMENTO
```javascript
// Lógica simples para tabs
function switchPaymentTab(tab) {
  // Remove active class from all tabs
  document.querySelectorAll('.payment-tab').forEach(t => {
    t.classList.remove('active');
  });
  // Add active class to selected tab
  document.getElementById(tab + '-tab').classList.add('active');
}
```

### VALIDAÇÃO DE FORMULÁRIO
```javascript
// Validação básica
function validateForm() {
  const requiredFields = ['full-name', 'email', 'phone', 'cpf'];
  let isValid = true;

  requiredFields.forEach(field => {
    const input = document.getElementById(field);
    if (!input.value.trim()) {
      input.classList.add('error');
      isValid = false;
    }
  });

  return isValid;
}
```

---

## SCRIPT DE UPSELL NO CHECKOUT

### OFERTA DE ORDER BUMP
```html
<div class="order-bump">
  <label class="bump-checkbox">
    <input type="checkbox" id="order-bump">
    <div class="bump-content">
      <span class="bump-title">🎁 OFERTA ESPECIAL: Instalação Premium</span>
      <p class="bump-desc">
        Adicione instalação remota do Claude Code + configuração personalizada
        por apenas <strong>R$2.000</strong> (economia de R$3.000)
      </p>
      <p class="bump-value">Normal: R$5.000 | Hoje: R$2.000</p>
    </div>
  </label>
</div>
```

---

**FIM DO DOCUMENTO - CHECKOUT PAGE HTC**
