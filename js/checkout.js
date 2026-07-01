/* ==========================================================================
   VETCARE — CHECKOUT.JS
   ========================================================================== */

(function () {
  "use strict";

  const DELIVERY = 500;

  function getCart() {
    try { return JSON.parse(localStorage.getItem("vetcare_cart") || "[]"); }
    catch (e) { return []; }
  }

  function fmt(n) { return n.toLocaleString("fr-DZ") + " DA"; }

  function render() {
    const cart       = getCart();
    const container  = document.getElementById("checkoutItems");
    const subtotalEl = document.getElementById("chkSubtotal");
    const totalEl    = document.getElementById("chkTotal");

    if (!container) return;

    if (cart.length === 0) {
      container.innerHTML = '<p style="font-size:.88rem;color:var(--color-ink-soft);text-align:center;padding:16px 0;">Votre panier est vide.</p>';
    } else {
      container.innerHTML = cart.map(function (item) {
        return '<div class="checkout-order-item">' +
          '<img src="' + item.image + '" alt="' + item.name + '">' +
          '<div class="checkout-order-item-info">' +
            '<strong>' + item.name + '</strong>' +
            '<span>Qté : ' + item.qty + '</span>' +
          '</div>' +
          '<span class="checkout-order-item-price">' + fmt(item.price * item.qty) + '</span>' +
          '</div>';
      }).join("");
    }

    var subtotal = cart.reduce(function (s, i) { return s + i.price * i.qty; }, 0);
    if (subtotalEl) subtotalEl.textContent = fmt(subtotal);
    if (totalEl)    totalEl.textContent    = fmt(subtotal + DELIVERY);
  }

  render();

  var form = document.getElementById("checkoutForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var cart = getCart();
    if (cart.length === 0) { alert("Votre panier est vide."); return; }

    var btn = document.getElementById("checkoutSubmitBtn");
    btn.disabled    = true;
    btn.textContent = "Traitement en cours…";

    var payload = {
      prenom:   document.getElementById("chkPrenom").value.trim(),
      nom:      document.getElementById("chkNom").value.trim(),
      phone:    document.getElementById("chkPhone").value.trim(),
      email:    document.getElementById("chkEmail").value.trim(),
      adresse:  document.getElementById("chkAdresse").value.trim(),
      ville:    document.getElementById("chkVille").value.trim(),
      wilaya:   document.getElementById("chkWilaya").value,
      payment:  (document.querySelector("input[name='payment']:checked") || {}).value,
      items:    cart,
    };

    fetch("api/orders.php", {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(payload),
    })
      .catch(function () { return {}; })
      .finally(function () {
        form.style.display = "none";
        var success = document.getElementById("checkoutSuccess");
        if (success) success.hidden = false;
        localStorage.removeItem("vetcare_cart");
        window.dispatchEvent(new Event("vetcart:updated"));
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
  });
})();
