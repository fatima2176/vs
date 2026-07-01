/* ==========================================================================
   VETCARE — APPOINTMENT.JS
   ========================================================================== */

(function () {
  "use strict";

  const formData = {};
  let currentStep = 1;

  const progressFill = document.getElementById("progressFill");
  const apptSuccess = document.getElementById("apptSuccess");

  function setStep(n) {
    [1, 2, 3].forEach((s) => {
      const panel = document.getElementById("step" + s);
      const dot = document.querySelector(".appt-step-dot[data-step='" + s + "']");
      if (panel) panel.classList.toggle("is-active", s === n);
      if (dot) {
        dot.classList.toggle("is-active", s === n);
        dot.classList.toggle("is-done", s < n);
      }
    });
    if (progressFill) progressFill.style.width = Math.round((n / 3) * 100) + "%";
    currentStep = n;
    document.querySelector(".appt-form-wrap").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function validateStep1() {
    const name = document.getElementById("fullname").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    if (!name) { alert("Veuillez saisir votre nom complet."); return false; }
    if (!phone) { alert("Veuillez saisir votre téléphone."); return false; }
    if (!email || !email.includes("@")) { alert("Veuillez saisir un email valide."); return false; }
    formData.name = name;
    formData.phone = phone;
    formData.email = email;
    return true;
  }

  function validateStep2() {
    const petName = document.getElementById("petName").value.trim();
    const errorEl = document.getElementById("animalTypeError");
    if (!formData.animalType) {
      if (errorEl) errorEl.textContent = "Veuillez sélectionner le type d'animal.";
      return false;
    }
    if (!petName) { alert("Veuillez saisir le nom de l'animal."); return false; }
    formData.petName = petName;
    formData.petAge = document.getElementById("petAge").value.trim();
    if (errorEl) errorEl.textContent = "";
    return true;
  }

  function validateStep3() {
    const reason = document.getElementById("visitReason").value;
    const date = document.getElementById("preferredDate").value;
    if (!reason) { alert("Veuillez sélectionner un motif de visite."); return false; }
    if (!date) { alert("Veuillez choisir une date préférée."); return false; }
    formData.visitReason = reason;
    formData.preferredDate = date;
    formData.message = document.getElementById("apptMessage").value.trim();
    return true;
  }

  function updateRecap() {
    const labels = {
      consultation: "Consultation générale", vaccination: "Vaccination",
      vermifugation: "Vermifugation", detartrage: "Détartrage", chirurgie: "Chirurgie",
      analyses: "Analyses médicales", urgence: "Urgence", autre: "Autre"
    };
    const el = (id) => document.getElementById(id);
    if (el("recapName")) el("recapName").textContent = formData.name || "—";
    if (el("recapPhone")) el("recapPhone").textContent = formData.phone || "—";
    const animalStr = [formData.animalType ? capitalize(formData.animalType) : "", formData.petName].filter(Boolean).join(" · ");
    if (el("recapAnimal")) el("recapAnimal").textContent = animalStr || "—";
    if (el("recapMotif")) el("recapMotif").textContent = labels[formData.visitReason] || formData.visitReason || "—";
  }

  function capitalize(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : ""; }

  /* Sélecteur animal */
  document.querySelectorAll(".animal-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".animal-btn").forEach((b) => b.classList.remove("is-selected"));
      btn.classList.add("is-selected");
      formData.animalType = btn.dataset.type;
      const errorEl = document.getElementById("animalTypeError");
      if (errorEl) errorEl.textContent = "";
    });
  });

  /* Navigation */
  const toStep2 = document.getElementById("toStep2");
  if (toStep2) toStep2.addEventListener("click", () => { if (validateStep1()) setStep(2); });

  const backToStep1 = document.getElementById("backToStep1");
  if (backToStep1) backToStep1.addEventListener("click", () => setStep(1));

  const toStep3 = document.getElementById("toStep3");
  if (toStep3) toStep3.addEventListener("click", () => { if (validateStep2()) { updateRecap(); setStep(3); } });

  const backToStep2 = document.getElementById("backToStep2");
  if (backToStep2) backToStep2.addEventListener("click", () => setStep(2));

  const submitAppt = document.getElementById("submitAppt");
  if (submitAppt) {
    submitAppt.addEventListener("click", function () {
      if (!validateStep3()) return;
      submitAppt.disabled = true;
      submitAppt.innerHTML = "Envoi en cours…";

      fetch("api/appointments.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .catch(() => ({}))
        .finally(() => {
          document.getElementById("step3").classList.remove("is-active");
          if (apptSuccess) apptSuccess.hidden = false;
          if (progressFill) progressFill.style.width = "100%";
          document.querySelectorAll(".appt-step-dot").forEach((d) => {
            d.classList.remove("is-active");
            d.classList.add("is-done");
          });
        });
    });
  }

  /* Date min = aujourd'hui */
  const dateInput = document.getElementById("preferredDate");
  if (dateInput) dateInput.min = new Date().toISOString().split("T")[0];

  setStep(1);
})();
