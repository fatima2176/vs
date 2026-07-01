/* ==========================================================================
   VETCARE — REGISTER.JS
   ========================================================================== */

(function () {
  "use strict";

  /* Password toggle */
  var toggleBtn = document.getElementById("toggleRegPwd");
  var pwdInput  = document.getElementById("regPassword");
  if (toggleBtn && pwdInput) {
    toggleBtn.addEventListener("click", function () {
      pwdInput.type = pwdInput.type === "password" ? "text" : "password";
    });
  }

  /* Form submit */
  var form      = document.getElementById("registerForm");
  var successEl = document.getElementById("registerSuccess");
  var submitBtn = document.getElementById("registerSubmitBtn");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var prenom   = document.getElementById("regPrenom").value.trim();
    var nom      = document.getElementById("regNom").value.trim();
    var email    = document.getElementById("regEmail").value.trim();
    var password = document.getElementById("regPassword").value;
    var confirm  = document.getElementById("regConfirm").value;
    var terms    = document.querySelector("input[name='terms']");

    if (!prenom || !nom)                 { alert("Veuillez saisir votre nom complet."); return; }
    if (!email || !email.includes("@"))  { alert("Veuillez saisir un email valide."); return; }
    if (password.length < 8)             { alert("Le mot de passe doit contenir au moins 8 caractères."); return; }
    if (password !== confirm)            { alert("Les mots de passe ne correspondent pas."); return; }
    if (terms && !terms.checked)         { alert("Veuillez accepter les conditions d'utilisation."); return; }

    submitBtn.disabled    = true;
    submitBtn.textContent = "Création en cours…";

    fetch("api/auth/register.php", {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify({ prenom: prenom, nom: nom, email: email, password: password }),
    })
      .catch(function () { return {}; })
      .finally(function () {
        if (successEl) successEl.hidden = false;
        setTimeout(function () { window.location.href = "login.html"; }, 1800);
      });
  });
})();
