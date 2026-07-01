/* ==========================================================================
   VETCARE — MAIN.JS (partagé sur toutes les pages)
   Header sticky, menu mobile, animations au scroll, panier (localStorage)
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- Header : effet au scroll ---------- */
  const header = document.querySelector(".site-header");
  function handleHeaderScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  }
  window.addEventListener("scroll", handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  /* ---------- Menu mobile ---------- */
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      const isOpen = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen);
    });
    document.addEventListener("click", function (e) {
      if (!navToggle.contains(e.target) && !mainNav.contains(e.target)) {
        mainNav.classList.remove("is-open");
      }
    });
  }

  /* ---------- Animations au scroll (IntersectionObserver) ---------- */
  const revealSelectors = [".reveal", ".reveal-left", ".reveal-right"];
  const revealEls = document.querySelectorAll(revealSelectors.join(", "));

  if ("IntersectionObserver" in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Panier : localStorage ---------- */
  const CART_KEY = "vetcare_cart";

  function getCart() {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch {
      return [];
    }
  }

  function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }

  function updateCartBadge() {
    const badges = document.querySelectorAll(".cart-badge");
    if (!badges.length) return;
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
    badges.forEach((badge) => {
      badge.textContent = count;
      badge.style.display = count > 0 ? "grid" : "none";
    });
  }

  window.VetCareCart = {
    get: getCart,
    add(product) {
      const cart = getCart();
      const existing = cart.find((i) => i.id === product.id);
      if (existing) {
        existing.qty += product.qty || 1;
      } else {
        cart.push(Object.assign({ qty: 1 }, product));
      }
      saveCart(cart);
      updateCartBadge();
      showCartToast(product.name);
    },
    remove(id) {
      const cart = getCart().filter((i) => i.id !== id);
      saveCart(cart);
      updateCartBadge();
    },
    setQty(id, qty) {
      const cart = getCart();
      const item = cart.find((i) => i.id === id);
      if (item) {
        if (qty <= 0) {
          this.remove(id);
        } else {
          item.qty = qty;
          saveCart(cart);
          updateCartBadge();
        }
      }
    },
  };

  /* Mini-toast "ajouté au panier" */
  function showCartToast(name) {
    let toast = document.getElementById("cartToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "cartToast";
      toast.style.cssText = `
        position:fixed; bottom:28px; right:28px; z-index:9999;
        background: linear-gradient(135deg, #1ab5ae, #0c8b86);
        color:#fff; font-family:inherit; font-weight:700; font-size:0.88rem;
        padding:14px 20px; border-radius:999px;
        box-shadow:0 12px 28px -6px rgba(12,139,134,0.5);
        display:flex; align-items:center; gap:10px;
        transform:translateY(80px); opacity:0;
        transition:transform 0.4s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease;
        max-width:320px; pointer-events:none;
      `;
      document.body.appendChild(toast);
    }
    const shortName = name.length > 30 ? name.substring(0, 30) + "…" : name;
    toast.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> ${shortName} ajouté au panier`;
    toast.style.transform = "translateY(0)";
    toast.style.opacity = "1";
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.style.transform = "translateY(80px)";
      toast.style.opacity = "0";
    }, 2600);
  }

  updateCartBadge();

  /* ---------- Smooth scroll pour les ancres ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();
