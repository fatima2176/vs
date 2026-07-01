/* ============================================
   ADMIN LOGIN JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('admin-login-form');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.querySelector('input[type="email"]').value;
        const password = document.querySelector('input[type="password"]').value;

        const submitBtn = loginForm.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Connexion en cours...';

        try {
            // Simulate admin login (in real app, would call API)
            if (email && password && password.length >= 6) {
                localStorage.setItem('isAdminLoggedIn', 'true');
                localStorage.setItem('adminEmail', email);

                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 500);
            } else {
                throw new Error('Email ou mot de passe invalide');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Erreur: ' + error.message);
            submitBtn.disabled = false;
            submitBtn.textContent = 'Se Connecter';
        }
    });
});
