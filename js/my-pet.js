/* ==========================================================================
   VETCARE — MY-PET.JS
   ========================================================================== */

(function () {
  "use strict";

  const tabBtns   = document.querySelectorAll(".pet-tab-btn");
  const tabPanels = document.querySelectorAll(".pet-tab-panel");

  tabBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const target = btn.dataset.tab;
      tabBtns.forEach(function (b)   { b.classList.remove("is-active"); });
      tabPanels.forEach(function (p) { p.classList.remove("is-active"); });
      btn.classList.add("is-active");
      const panel = document.querySelector(".pet-tab-panel[data-tab='" + target + "']");
      if (panel) panel.classList.add("is-active");
    });
  });

  const addPetBtn  = document.getElementById("addPetBtn");
  const editPetBtn = document.getElementById("editPetBtn");
  if (addPetBtn)  addPetBtn.addEventListener("click",  function () { alert("Ajouter un animal — fonctionnalité à venir."); });
  if (editPetBtn) editPetBtn.addEventListener("click", function () { alert("Modifier le profil — fonctionnalité à venir."); });
})();
