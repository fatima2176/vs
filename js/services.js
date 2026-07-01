/* ==========================================================================
   VETCARE — SERVICES.JS
   ========================================================================== */

(function () {
  "use strict";

  const SERVICES = [
    {
      id: "s01", filter: "soins",
      title: "Consultation générale",
      desc: "Examen clinique complet pour évaluer l'état de santé de votre animal et détecter tout problème potentiel.",
      price: "À partir de 2 000 DA",
      image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=600&q=80",
      tag: "Soins courants",
      iconColor: "teal",
      iconPath: '<path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>',
    },
    {
      id: "s02", filter: "soins",
      title: "Vaccination",
      desc: "Programme complet de vaccinations pour protéger votre animal contre les maladies infectieuses courantes.",
      price: "À partir de 1 500 DA",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
      tag: "Prévention",
      iconColor: "teal",
      iconPath: '<path d="M11 2l2 2-6 6-3-1-2 2 5 5-2 2 1 3 2-2 6-6 2 2 4-4-9-9z"/>',
    },
    {
      id: "s03", filter: "chirurgie",
      title: "Chirurgie générale",
      desc: "Interventions chirurgicales réalisées dans un bloc opératoire moderne avec des équipements de pointe.",
      price: "À partir de 8 000 DA",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&q=80",
      tag: "Chirurgie",
      iconColor: "blue",
      iconPath: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"/>',
    },
    {
      id: "s04", filter: "diagnostic",
      title: "Analyses médicales",
      desc: "Analyses sanguines, urinaires et microbiologiques pour un diagnostic précis et rapide.",
      price: "À partir de 3 000 DA",
      image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&q=80",
      tag: "Diagnostic",
      iconColor: "orange",
      iconPath: '<path d="M9 2v6l-4 8a4 4 0 0 0 4 6h6a4 4 0 0 0 4-6l-4-8V2"/><line x1="9" y1="2" x2="15" y2="2"/>',
    },
    {
      id: "s05", filter: "bienetre",
      title: "Soins dentaires",
      desc: "Détartrage, extractions et traitements dentaires pour préserver la santé bucco-dentaire de votre compagnon.",
      price: "À partir de 3 500 DA",
      image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=600&q=80",
      tag: "Bien-être",
      iconColor: "orange",
      iconPath: '<path d="M12 5c-1.5-2-4-2.5-6-1-2 1.5-2.5 4.5-1 7 1.5 2.3 5 5.5 7 7 2-1.5 5.5-4.7 7-7 1.5-2.5 1-5.5-1-7-2-1.5-4.5-1-6 1z"/>',
    },
    {
      id: "s06", filter: "urgence",
      title: "Urgences 24/7",
      desc: "Service d'urgences disponible à toute heure pour prendre en charge rapidement les cas critiques.",
      price: "Consultation urgente",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
      tag: "Urgences",
      iconColor: "blue",
      iconPath: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    },
    {
      id: "s07", filter: "soins",
      title: "Hospitalisation",
      desc: "Prise en charge complète avec suivi médical continu dans notre unité d'hospitalisation équipée.",
      price: "Sur devis",
      image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&q=80",
      tag: "Soins courants",
      iconColor: "teal",
      iconPath: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7z"/>',
    },
    {
      id: "s08", filter: "bienetre",
      title: "Conseils nutritionnels",
      desc: "Plans alimentaires personnalisés pour une alimentation équilibrée adaptée à l'âge et l'état de santé.",
      price: "À partir de 1 000 DA",
      image: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=600&q=80",
      tag: "Bien-être",
      iconColor: "orange",
      iconPath: '<path d="M12 2a4 4 0 0 0-4 4c0 1.5.5 2 1 3l-3 3v2h12v-2l-3-3c.5-1 1-1.5 1-3a4 4 0 0 0-4-4z"/><path d="M8 21h8"/>',
    },
    {
      id: "s09", filter: "diagnostic",
      title: "Radiologie & Imagerie",
      desc: "Radiographies numériques et échographies pour un diagnostic précis sans inconfort pour votre animal.",
      price: "À partir de 4 000 DA",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&q=80",
      tag: "Diagnostic",
      iconColor: "blue",
      iconPath: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
    },
  ];

  const grid = document.getElementById("servicesGrid");
  const filterChips = document.querySelectorAll(".filter-chip");
  let activeFilter = "tous";

  function iconColorClass(color) {
    if (color === "orange") return "orange";
    if (color === "blue") return "blue";
    return "";
  }

  function renderCards() {
    const filtered = activeFilter === "tous"
      ? SERVICES
      : SERVICES.filter((s) => s.filter === activeFilter);

    if (!grid) return;

    grid.innerHTML = filtered.map((s) => `
      <article class="service-card reveal">
        <div class="service-card-media">
          <span class="service-card-tag">${s.tag}</span>
          <div class="service-card-icon ${iconColorClass(s.iconColor)}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${s.iconPath}</svg>
          </div>
          <img src="${s.image}" alt="${s.title}" loading="lazy">
        </div>
        <div class="service-card-body">
          <h3>${s.title}</h3>
          <p>${s.desc}</p>
          <div class="service-card-footer">
            <span class="service-price">
              <strong>${s.price}</strong>
            </span>
            <a href="appointment.html" class="service-link">
              Réserver
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
        </div>
      </article>`).join("");

    /* Re-trigger reveal observer for new cards */
    if ("IntersectionObserver" in window) {
      const newRevealEls = grid.querySelectorAll(".reveal");
      const observer = new IntersectionObserver(
        (entries) => entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
        { threshold: 0.1 }
      );
      newRevealEls.forEach((el) => observer.observe(el));
    } else {
      grid.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
    }
  }

  filterChips.forEach((chip) => {
    chip.addEventListener("click", function () {
      filterChips.forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      activeFilter = chip.dataset.filter;
      renderCards();
    });
  });

  renderCards();
})();
