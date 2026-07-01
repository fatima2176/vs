/* ==========================================================================
   VETCARE — PRODUCT.JS (spécifique à la fiche produit)
   ========================================================================== */

(function () {
  "use strict";

  const CURRENT_PRODUCT = { id: "p03", name: "Arbre à chat premium", price: 5500, image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=500&q=80" };

  /* ---------- Galerie : miniatures ---------- */
  const mainImage = document.getElementById("mainImage");
  document.querySelectorAll(".thumb").forEach((thumb) => {
    thumb.addEventListener("click", function () {
      document.querySelectorAll(".thumb").forEach((t) => t.classList.remove("is-active"));
      thumb.classList.add("is-active");
      mainImage.src = thumb.dataset.src;
    });
  });

  /* ---------- Couleurs ---------- */
  const selectedColorLabel = document.getElementById("selectedColor");
  document.querySelectorAll(".swatch").forEach((swatch) => {
    swatch.addEventListener("click", function () {
      document.querySelectorAll(".swatch").forEach((s) => s.classList.remove("is-active"));
      swatch.classList.add("is-active");
      selectedColorLabel.textContent = "Couleur sélectionnée : " + swatch.dataset.color;
    });
  });

  /* ---------- Quantité ---------- */
  const qtyValue = document.getElementById("qtyValue");
  const qtyMinus = document.getElementById("qtyMinus");
  const qtyPlus = document.getElementById("qtyPlus");
  const MAX_QTY = 15;

  function setQty(n) {
    const clamped = Math.min(Math.max(1, n), MAX_QTY);
    qtyValue.value = clamped;
  }
  qtyMinus.addEventListener("click", () => setQty(Number(qtyValue.value) - 1));
  qtyPlus.addEventListener("click", () => setQty(Number(qtyValue.value) + 1));

  /* ---------- Favoris ---------- */
  document.getElementById("wishlistBtn").addEventListener("click", function () {
    this.classList.toggle("is-active");
  });

  /* ---------- Ajouter au panier ---------- */
  const addToCartBtn = document.getElementById("addToCartBtn");
  addToCartBtn.addEventListener("click", function () {
    if (!window.VetCareCart) return;
    const qty = Number(qtyValue.value);
    const color = document.querySelector(".swatch.is-active")?.dataset.color || "Gris";
    window.VetCareCart.add({
      id: CURRENT_PRODUCT.id + "-" + color,
      name: CURRENT_PRODUCT.name + " (" + color + ")",
      price: CURRENT_PRODUCT.price,
      image: CURRENT_PRODUCT.image,
      qty: qty,
    });
    addToCartBtn.classList.add("is-added");
    const original = addToCartBtn.innerHTML;
    addToCartBtn.innerHTML = "Ajouté au panier ✓";
    setTimeout(() => {
      addToCartBtn.classList.remove("is-added");
      addToCartBtn.innerHTML = original;
    }, 1400);
  });

  /* ---------- Produits similaires ---------- */
  const SIMILAR = [
    { id: "p07", name: "Clapier lapin extérieur", price: 9800, oldPrice: null, image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500&q=80", badge: null },
    { id: "p02", name: "Litière pour chat agglomérante", price: 1200, oldPrice: null, image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=500&q=80", badge: null },
    { id: "p15", name: "Croquettes chaton premium", price: 2900, oldPrice: null, image: "https://images.unsplash.com/photo-1601758174114-3f5c8e5a5c9a?w=500&q=80", badge: null },
    { id: "p13", name: "Shampoing dermo-apaisant", price: 1300, oldPrice: null, image: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=500&q=80", badge: null },
  ];

  const priceFmt = (n) => n.toLocaleString("fr-FR") + " DA";
  function cartIcon() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>';
  }

  const similarGrid = document.getElementById("similarGrid");
  similarGrid.innerHTML = SIMILAR.map(
    (p) => `
    <article class="product-card">
      <div class="product-media">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div class="product-body">
        <span class="product-name">${p.name}</span>
        <div class="product-footer">
          <span class="product-price">
            <span class="price-current">${priceFmt(p.price)}</span>
          </span>
          <button class="add-cart-btn" data-add="${p.id}" aria-label="Ajouter au panier">${cartIcon()}</button>
        </div>
      </div>
    </article>`
  ).join("");

  similarGrid.addEventListener("click", function (e) {
    const btn = e.target.closest("[data-add]");
    if (!btn || !window.VetCareCart) return;
    const product = SIMILAR.find((p) => p.id === btn.dataset.add);
    if (product) {
      window.VetCareCart.add({ id: product.id, name: product.name, price: product.price, image: product.image, qty: 1 });
      btn.classList.add("is-added");
      setTimeout(() => btn.classList.remove("is-added"), 900);
    }
  });
})();