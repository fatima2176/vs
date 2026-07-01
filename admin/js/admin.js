/* ============================================
   ADMIN SHARED JAVASCRIPT
   ============================================ */

// Check admin authentication
function checkAdminAuth() {
    const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (!isAdminLoggedIn && !window.location.pathname.includes('admin/index.html')) {
        if (window.location.pathname.includes('admin/')) {
            window.location.href = 'index.html';
        }
    }
}

// Logout handler
document.addEventListener('DOMContentLoaded', () => {
    checkAdminAuth();

    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('isAdminLoggedIn');
            window.location.href = 'index.html';
        });
    }

    // Modal handlers
    setupModalHandlers();
});

// Modal setup
function setupModalHandlers() {
    // General modal close
    document.querySelectorAll('.admin-modal__close, .admin-modal__overlay').forEach(el => {
        if (el.id && el.id.includes('close')) {
            el.addEventListener('click', () => closeModal(el));
        }
    });

    // Cancel buttons
    document.querySelectorAll('[id$="-cancel"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = btn.closest('.admin-modal');
            if (modal) {
                modal.classList.remove('active');
                modal.classList.add('hidden');
            }
        });
    });
}

function closeModal(element) {
    const modal = element.closest('.admin-modal');
    if (modal) {
        modal.classList.remove('active');
        modal.classList.add('hidden');
    }
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('active');
    }
}

// Mock data generators
const mockData = {
    generateProducts: (count = 5) => {
        const categories = ['Alimentation', 'Accessoires', 'Hygiène', 'Jouets'];
        const names = [
            'Croquettes Premium Chien',
            'Jouet Caoutchouc',
            'Brosse Double Face',
            'Nourriture Chat Humide',
            'Laisseà Rétractable'
        ];
        return Array.from({ length: count }, (_, i) => ({
            id: i + 1,
            name: names[i % names.length],
            category: categories[i % categories.length],
            price: 1000 + (i * 500),
            stock: 10 + (i * 5),
            image: `https://images.unsplash.com/photo-${1589941013453 + i}?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80`
        }));
    },

    generateOrders: (count = 5) => {
        const statuses = ['en-préparation', 'expédiée', 'livrée'];
        const clients = ['Ahmed Brahim', 'Fatima Zohra', 'Mohammed Ali', 'Leila Hassan', 'Karim Youssef'];
        return Array.from({ length: count }, (_, i) => ({
            id: 1000 + i,
            client: clients[i % clients.length],
            amount: 5000 + (i * 2000),
            status: statuses[i % statuses.length],
            date: new Date(Date.now() - (i * 86400000)).toLocaleDateString('fr-FR')
        }));
    },

    generateAppointments: (count = 5) => {
        const statuses = ['en-attente', 'confirmé', 'annulé'];
        const reasons = ['Consultation générale', 'Vaccination', 'Vermifugation', 'Détartrage'];
        const pets = ['Max', 'Luna', 'Rex', 'Bella', 'Charlie'];
        const owners = ['Ahmed Brahim', 'Fatima Zohra', 'Mohammed Ali'];
        return Array.from({ length: count }, (_, i) => ({
            id: i + 1,
            client: owners[i % owners.length],
            pet: pets[i % pets.length],
            date: new Date(Date.now() + (i * 86400000)).toLocaleDateString('fr-FR'),
            reason: reasons[i % reasons.length],
            status: statuses[i % statuses.length]
        }));
    },

    generateClients: (count = 5) => {
        const names = ['Ahmed Brahim', 'Fatima Zohra', 'Mohammed Ali', 'Leila Hassan', 'Karim Youssef'];
        return Array.from({ length: count }, (_, i) => ({
            id: i + 1,
            name: names[i],
            email: `client${i}@email.com`,
            phone: `0556 ${String(i).padStart(6, '0')}`,
            purchases: 5 + (i * 2),
            joined: new Date(Date.now() - (i * 30 * 86400000)).toLocaleDateString('fr-FR')
        }));
    },

    generateAnimals: (count = 5) => {
        const species = ['Berger Allemand', 'Chat Persan', 'Golden Retriever', 'Chat Siamois', 'Poodle'];
        const petNames = ['Max', 'Luna', 'Rex', 'Bella', 'Charlie'];
        const owners = ['Ahmed Brahim', 'Fatima Zohra', 'Mohammed Ali'];
        return Array.from({ length: count }, (_, i) => ({
            id: i + 1,
            name: petNames[i],
            species: species[i % species.length],
            age: `${1 + i} ans`,
            owner: owners[i % owners.length],
            image: `https://images.unsplash.com/photo-${1633722715463 + i}?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80`
        }));
    }
};
