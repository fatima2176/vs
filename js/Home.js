/* ==========================================================================
   VETCARE — HOME.JS (spécifique à la page d'accueil)
   ========================================================================== */

(function () {
  "use strict";

  // Parallaxe légère sur l'image du hero au scroll (désactivée si l'utilisateur
  // préfère les animations réduites)
  const heroMedia = document.querySelector(".hero-media img");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (heroMedia && !prefersReducedMotion) {
    window.addEventListener(
      "scroll",
      function () {
        const offset = window.scrollY * 0.06;
        heroMedia.style.transform = "translateY(" + Math.min(offset, 24) + "px)";
      },
      { passive: true }
    );
  }
})();