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
    if (window.scrollY > 12) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }
  window.addEventListener("scroll", handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  /* ---------- Menu mobile ---------- */
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      mainNav.classList.toggle("is-open");
      navToggle.classList.toggle("is-active");
    });
  }

  /* ---------- Animations au scroll (IntersectionObserver) ---------- */
  const revealEls = document.querySelectorAll(".reveal");
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
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Panier : compteur partagé via localStorage ---------- */
  const CART_KEY = "vetcare_cart";

  function getCart() {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function updateCartBadge() {
    const badge = document.querySelector(".cart-badge");
    if (!badge) return;
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
    badge.textContent = count;
    badge.style.display = count > 0 ? "grid" : "none";
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
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
      updateCartBadge();
    },
  };

  updateCartBadge();
})();