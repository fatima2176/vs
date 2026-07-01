/* ==========================================================================
   VETCARE — CONTACT.JS
   ========================================================================== */

(function () {
  "use strict";

  const form       = document.getElementById("contactForm");
  const successEl  = document.getElementById("contactSuccess");
  const submitBtn  = document.getElementById("contactSubmitBtn");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name    = document.getElementById("cNom").value.trim();
    const email   = document.getElementById("cEmail").value.trim();
    const message = document.getElementById("cMessage").value.trim();

    if (!name)                         { alert("Veuillez saisir votre nom."); return; }
    if (!email || !email.includes("@")) { alert("Veuillez saisir un email valide."); return; }
    if (!message)                      { alert("Veuillez écrire un message."); return; }

    submitBtn.disabled    = true;
    submitBtn.textContent = "Envoi en cours…";

    const payload = {
      name:    name,
      email:   email,
      subject: document.getElementById("cSujet").value,
      message: message,
    };

    fetch("api/contact.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .catch(function () { return {}; })
      .finally(function () {
        form.reset();
        if (successEl) successEl.hidden = false;
        submitBtn.disabled    = false;
        submitBtn.innerHTML   = 'Envoyer le message <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
      });
  });
})();
