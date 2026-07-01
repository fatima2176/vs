/* ==========================================================================
   VETCARE — SHOP.JS (spécifique à la page boutique)
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- Données produits (statiques — à remplacer par l'API PHP) ---------- */
  const PRODUCTS = [
    { id: "p01", name: "Croquettes Royal Canin Adulte", desc: "Alimentation complète pour chien adulte, sac 3kg.", category: "chiens", price: 3000, oldPrice: null, rating: 4.6, reviews: 128, stock: 34, image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=500&q=80", badge: null, tags: ["bestseller"] },
    { id: "p02", name: "Litière pour chat agglomérante", desc: "Absorption rapide, contrôle des odeurs, sac 5L.", category: "chats", price: 1200, oldPrice: null, rating: 4.4, reviews: 96, stock: 40, image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=500&q=80", badge: null, tags: ["bestseller"] },
    { id: "p03", name: "Arbre à chat premium", desc: "Structure robuste avec griffoirs et plateformes.", category: "chats", price: 5500, oldPrice: 7000, rating: 4.8, reviews: 54, stock: 12, image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=500&q=80", badge: "-21%", tags: ["promo", "vet"] },
    { id: "p04", name: "Jouet pour chien en corde", desc: "Jouet à mâcher résistant, nettoie les dents.", category: "chiens", price: 600, oldPrice: null, rating: 4.3, reviews: 210, stock: 88, image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500&q=80", badge: null, tags: ["bestseller"] },
    { id: "p05", name: "Cage oiseau deux étages", desc: "Grand espace, mangeoires incluses, facile à nettoyer.", category: "oiseaux", price: 8900, oldPrice: 11000, rating: 4.5, reviews: 22, stock: 6, image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=500&q=80", badge: "-19%", tags: ["promo"] },
    { id: "p06", name: "Mélange graines perruches", desc: "Mélange équilibré riche en vitamines, 1kg.", category: "oiseaux", price: 850, oldPrice: null, rating: 4.2, reviews: 41, stock: 60, image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=500&q=80", badge: null, tags: ["vet"] },
    { id: "p07", name: "Clapier lapin extérieur", desc: "Enclos spacieux avec toit protecteur amovible.", category: "lapins", price: 9800, oldPrice: null, rating: 4.7, reviews: 18, stock: 5, image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500&q=80", badge: null, tags: ["vet"] },
    { id: "p08", name: "Foin naturel premium", desc: "Foin de qualité pour lapins et rongeurs, 2kg.", category: "lapins", price: 700, oldPrice: 900, rating: 4.6, reviews: 77, stock: 50, image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500&q=80", badge: "-22%", tags: ["promo", "bestseller"] },
    { id: "p09", name: "Aquarium complet 60L", desc: "Kit complet avec filtre et éclairage LED.", category: "poissons", price: 12000, oldPrice: null, rating: 4.9, reviews: 15, stock: 4, image: "https://images.unsplash.com/photo-1520302519364-45a6cd66ea38?w=500&q=80", badge: null, tags: ["vet"] },
    { id: "p10", name: "Nourriture poissons tropicaux", desc: "Flocons riches en nutriments, boîte 100g.", category: "poissons", price: 450, oldPrice: null, rating: 4.1, reviews: 63, stock: 70, image: "https://images.unsplash.com/photo-1520302519364-45a6cd66ea38?w=500&q=80", badge: null, tags: ["bestseller"] },
    { id: "p11", name: "Cage hamster deluxe", desc: "Plusieurs niveaux avec roue et accessoires.", category: "rongeurs", price: 4200, oldPrice: 5200, rating: 4.5, reviews: 33, stock: 9, image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=500&q=80", badge: "-19%", tags: ["promo"] },
    { id: "p12", name: "Copeaux litière rongeurs", desc: "Absorbant et sans poussière, sac 4L.", category: "rongeurs", price: 500, oldPrice: null, rating: 4.3, reviews: 48, stock: 65, image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=500&q=80", badge: null, tags: [] },
    { id: "p13", name: "Shampoing dermo-apaisant", desc: "Pour peaux sensibles, formule sans parfum.", category: "autres", price: 1300, oldPrice: null, rating: 4.4, reviews: 29, stock: 24, image: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=500&q=80", badge: null, tags: ["vet"] },
    { id: "p14", name: "Sac de transport premium", desc: "Confortable et aéré, toutes tailles d'animaux.", category: "autres", price: 3400, oldPrice: 4200, rating: 4.6, reviews: 37, stock: 16, image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500&q=80", badge: "-19%", tags: ["promo", "bestseller"] },
    { id: "p15", name: "Croquettes chaton premium", desc: "Formule spéciale croissance, sac 1.5kg.", category: "chats", price: 2900, oldPrice: null, rating: 4.7, reviews: 88, stock: 30, image: "https://images.unsplash.com/photo-1601758174114-3f5c8e5a5c9a?w=500&q=80", badge: null, tags: ["bestseller", "vet"] },
    { id: "p16", name: "Laisse rétractable chien", desc: "Jusqu'à 5m, poignée ergonomique antidérapante.", category: "chiens", price: 1800, oldPrice: 2200, rating: 4.5, reviews: 66, stock: 22, image: "https://images.unsplash.com/photo-1601758260893-5b2b5c1c9e8a?w=500&q=80", badge: "-18%", tags: ["promo"] },
  ];

  const priceFmt = (n) => n.toLocaleString("fr-FR") + " DA";

  function starIcon() {
    return '<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
  }
  function cartIcon() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>';
  }
  function heartIcon() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';
  }

  function productCard(p) {
    const badge = p.badge
      ? `<span class="product-badge${p.tags.includes("vet") && !p.tags.includes("promo") ? " product-badge--vet" : ""}">${p.badge}</span>`
      : (p.tags.includes("vet") ? `<span class="product-badge product-badge--vet">Vétérinaire</span>` : "");
    const stockLabel = p.stock <= 8 ? `<span class="product-stock is-low">Plus que ${p.stock} en stock</span>` : `<span class="product-stock">${p.stock} disponibles</span>`;

    return `
      <article class="product-card" data-id="${p.id}">
        <a class="product-media" href="product.html" aria-label="Voir ${p.name}">
          ${badge}
          <button class="wishlist-btn" aria-label="Ajouter aux favoris" data-wishlist="${p.id}">${heartIcon()}</button>
          <img src="${p.image}" alt="${p.name}" loading="lazy">
        </a>
        <div class="product-body">
          <a class="product-name" href="product.html" style="text-decoration:none;">${p.name}</a>
          <span class="product-desc">${p.desc}</span>
          <span class="product-rating">${starIcon()} ${p.rating.toFixed(1)} (${p.reviews})</span>
          ${stockLabel}
          <div class="product-footer">
            <span class="product-price">
              <span class="price-current">${priceFmt(p.price)}</span>
              ${p.oldPrice ? `<span class="price-old">${priceFmt(p.oldPrice)}</span>` : ""}
            </span>
            <button class="add-cart-btn" data-add="${p.id}" aria-label="Ajouter au panier">${cartIcon()}</button>
          </div>
        </div>
      </article>`;
  }

  function renderGrid(container, products) {
    container.innerHTML = products.map(productCard).join("");
  }

  /* ---------- Rendu des sections vitrines ---------- */
  renderGrid(document.getElementById("bestSellersGrid"), PRODUCTS.filter((p) => p.tags.includes("bestseller")));
  renderGrid(document.getElementById("promoGrid"), PRODUCTS.filter((p) => p.tags.includes("promo")));
  renderGrid(document.getElementById("vetPicksGrid"), PRODUCTS.filter((p) => p.tags.includes("vet")));

  /* ---------- Catalogue filtrable ---------- */
  const productGrid = document.getElementById("productGrid");
  const emptyState = document.getElementById("emptyState");
  const resultsTitle = document.getElementById("resultsTitle");
  const searchInput = document.getElementById("searchName");
  const priceRange = document.getElementById("priceRange");
  const priceValue = document.getElementById("priceValue");
  const sortSelect = document.getElementById("sortSelect");
  const categoryChecks = document.querySelectorAll("#categoryChecks input");
  const categoryChips = document.querySelectorAll(".category-chip");
  const resetBtn = document.getElementById("resetFilters");

  let activeCategory = "tous";

  function getFilteredProducts() {
    const query = searchInput.value.trim().toLowerCase();
    const maxPrice = Number(priceRange.value);
    const checkedCats = Array.from(categoryChecks).filter((c) => c.checked).map((c) => c.value);

    let list = PRODUCTS.filter((p) => {
      const matchesName = !query || p.name.toLowerCase().includes(query);
      const matchesPrice = p.price <= maxPrice;
      const matchesChecks = checkedCats.length === 0 || checkedCats.includes(p.category);
      const matchesChip = activeCategory === "tous" || p.category === activeCategory;
      return matchesName && matchesPrice && matchesChecks && matchesChip;
    });

    switch (sortSelect.value) {
      case "price-asc": list.sort((a, b) => a.price - b.price); break;
      case "price-desc": list.sort((a, b) => b.price - a.price); break;
      case "rating": list.sort((a, b) => b.rating - a.rating); break;
      default: list.sort((a, b) => b.reviews - a.reviews);
    }
    return list;
  }

  function refreshCatalog() {
    const list = getFilteredProducts();
    renderGrid(productGrid, list);
    emptyState.hidden = list.length !== 0;
    resultsTitle.textContent = activeCategory === "tous" ? "Tous les produits" : `Catégorie : ${capitalize(activeCategory)}`;
  }

  function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  searchInput.addEventListener("input", refreshCatalog);
  sortSelect.addEventListener("change", refreshCatalog);
  categoryChecks.forEach((c) => c.addEventListener("change", refreshCatalog));

  priceRange.addEventListener("input", function () {
    priceValue.textContent = priceFmt(Number(priceRange.value));
    refreshCatalog();
  });

  categoryChips.forEach((chip) => {
    chip.addEventListener("click", function () {
      categoryChips.forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      activeCategory = chip.dataset.category;
      refreshCatalog();
      document.getElementById("produits").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  resetBtn.addEventListener("click", function () {
    searchInput.value = "";
    priceRange.value = 10000;
    priceValue.textContent = priceFmt(10000);
    categoryChecks.forEach((c) => (c.checked = false));
    sortSelect.value = "popular";
    categoryChips.forEach((c) => c.classList.remove("is-active"));
    document.querySelector('.category-chip[data-category="tous"]').classList.add("is-active");
    activeCategory = "tous";
    refreshCatalog();
  });

  refreshCatalog();

  /* ---------- Actions globales : ajout panier + wishlist (délégation d'événements) ---------- */
  document.addEventListener("click", function (e) {
    const addBtn = e.target.closest("[data-add]");
    if (addBtn) {
      const product = PRODUCTS.find((p) => p.id === addBtn.dataset.add);
      if (product && window.VetCareCart) {
        window.VetCareCart.add({ id: product.id, name: product.name, price: product.price, image: product.image, qty: 1 });
        addBtn.classList.add("is-added");
        setTimeout(() => addBtn.classList.remove("is-added"), 900);
      }
      return;
    }
    const wishBtn = e.target.closest("[data-wishlist]");
    if (wishBtn) {
      wishBtn.classList.toggle("is-active");
    }
  });
})();