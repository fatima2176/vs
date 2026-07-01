/* ==========================================================================
   VETCARE — LOGIN.JS
   ========================================================================== */

(function () {
  "use strict";

  /* Password toggle */
  var toggleBtn = document.getElementById("togglePwd");
  var pwdInput  = document.getElementById("loginPassword");
  if (toggleBtn && pwdInput) {
    toggleBtn.addEventListener("click", function () {
      pwdInput.type = pwdInput.type === "password" ? "text" : "password";
    });
  }

  /* Form submit */
  var form      = document.getElementById("loginForm");
  var successEl = document.getElementById("loginSuccess");
  var submitBtn = document.getElementById("loginSubmitBtn");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var email    = document.getElementById("loginEmail").value.trim();
    var password = document.getElementById("loginPassword").value;

    if (!email || !email.includes("@")) { alert("Veuillez saisir un email valide."); return; }
    if (!password)                       { alert("Veuillez saisir votre mot de passe."); return; }

    submitBtn.disabled    = true;
    submitBtn.textContent = "Connexion en cours…";

    fetch("api/auth/login.php", {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify({ email: email, password: password }),
    })
      .catch(function () { return {}; })
      .finally(function () {
        if (successEl) successEl.hidden = false;
        localStorage.setItem("isLoggedIn", "true");
        setTimeout(function () { window.location.href = "my-pet.html"; }, 1800);
      });
  });
})();
