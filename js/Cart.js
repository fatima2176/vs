/* ==========================================================================
   VETCARE — CART.JS (spécifique à la page panier)
   ========================================================================== */

(function () {
  "use strict";

  const DELIVERY_FEE = 500;
  const PROMO_CODES = { VETCARE10: 0.1, BIENVENUE: 0.05 };

  const cartItemsEl = document.getElementById("cartItems");
  const cartEmptyEl = document.getElementById("cartEmpty");
  const cartSummaryEl = document.getElementById("cartSummary");
  const summarySubtotal = document.getElementById("summarySubtotal");
  const summaryDelivery = document.getElementById("summaryDelivery");
  const summaryTotal = document.getElementById("summaryTotal");
  const promoInput = document.getElementById("promoInput");
  const promoApply = document.getElementById("promoApply");
  const promoMessage = document.getElementById("promoMessage");
  const checkoutBtn = document.getElementById("checkoutBtn");

  const priceFmt = (n) => n.toLocaleString("fr-FR") + " DA";

  function trashIcon() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>';
  }

  let appliedDiscount = 0;

  function render() {
    const cart = window.VetCareCart ? window.VetCareCart.get() : [];

    if (cart.length === 0) {
      cartItemsEl.hidden = true;
      cartSummaryEl.hidden = true;
      cartEmptyEl.hidden = false;
      return;
    }

    cartItemsEl.hidden = false;
    cartSummaryEl.hidden = false;
    cartEmptyEl.hidden = true;

    cartItemsEl.innerHTML = cart
      .map(
        (item) => `
      <article class="cart-item" data-id="${item.id}">
        <img src="${item.image || 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=200&q=80'}" alt="${item.name}">
        <div class="cart-item-info">
          <strong>${item.name}</strong>
          <span class="unit-price">${priceFmt(item.price)} / unité</span>
        </div>
        <div class="qty-stepper">
          <button data-action="minus" aria-label="Diminuer">−</button>
          <input type="text" value="${item.qty}" readonly>
          <button data-action="plus" aria-label="Augmenter">+</button>
        </div>
        <div class="cart-item-right">
          <span class="line-total">${priceFmt(item.price * item.qty)}</span>
          <button class="remove-btn" data-action="remove" aria-label="Supprimer">${trashIcon()}</button>
        </div>
      </article>`
      )
      .join("");

    updateTotals(cart);
  }

  function updateTotals(cart) {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const discountAmount = subtotal * appliedDiscount;
    const total = Math.max(0, subtotal - discountAmount) + (subtotal > 0 ? DELIVERY_FEE : 0);

    summarySubtotal.textContent = priceFmt(subtotal);
    summaryDelivery.textContent = priceFmt(DELIVERY_FEE);
    summaryTotal.textContent = priceFmt(Math.round(total));
  }

  cartItemsEl.addEventListener("click", function (e) {
    const item = e.target.closest(".cart-item");
    if (!item || !window.VetCareCart) return;
    const id = item.dataset.id;
    const cart = window.VetCareCart.get();
    const current = cart.find((i) => i.id === id);
    if (!current) return;

    if (e.target.closest('[data-action="plus"]')) {
      window.VetCareCart.setQty(id, current.qty + 1);
      render();
    } else if (e.target.closest('[data-action="minus"]')) {
      window.VetCareCart.setQty(id, current.qty - 1);
      render();
    } else if (e.target.closest('[data-action="remove"]')) {
      window.VetCareCart.remove(id);
      render();
    }
  });

  promoApply.addEventListener("click", function () {
    const code = promoInput.value.trim().toUpperCase();
    if (PROMO_CODES[code]) {
      appliedDiscount = PROMO_CODES[code];
      promoMessage.textContent = `Code appliqué : -${PROMO_CODES[code] * 100}% sur le sous-total`;
      promoMessage.className = "promo-message is-success";
    } else {
      appliedDiscount = 0;
      promoMessage.textContent = "Code promo invalide.";
      promoMessage.className = "promo-message is-error";
    }
    updateTotals(window.VetCareCart.get());
  });

  checkoutBtn.addEventListener("click", function (e) {
    const cart = window.VetCareCart ? window.VetCareCart.get() : [];
    if (cart.length === 0) {
      e.preventDefault();
    }
  });

  render();
})();