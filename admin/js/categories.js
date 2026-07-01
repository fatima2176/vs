/* ============================================
   ADMIN CATEGORIES JAVASCRIPT
   ============================================ */

let editingCategoryId = null;

document.addEventListener('DOMContentLoaded', () => {
    const categories = [
        { id: 1, name: 'Alimentation', description: 'Croquettes et nourriture', products: 15 },
        { id: 2, name: 'Accessoires', description: 'Laisses, colliers, etc.', products: 12 },
        { id: 3, name: 'Hygiène', description: 'Produits de nettoyage', products: 8 },
        { id: 4, name: 'Jouets', description: 'Jouets et divertissements', products: 20 }
    ];

    renderCategoriesTable(categories);

    document.getElementById('add-category-btn').addEventListener('click', () => {
        editingCategoryId = null;
        document.getElementById('category-modal-title').textContent = 'Ajouter une Catégorie';
        document.getElementById('category-form').reset();
        openModal('category-modal');
    });

    document.getElementById('category-modal-close').addEventListener('click', () => {
        closeModal(document.getElementById('category-modal-close'));
    });

    document.getElementById('category-modal').addEventListener('click', (e) => {
        if (e.target.id === 'category-modal') {
            closeModal(document.getElementById('category-modal'));
        }
    });

    document.getElementById('category-form').addEventListener('submit', (e) => {
        e.preventDefault();
        handleCategorySubmit();
    });
});

function renderCategoriesTable(categories) {
    const tbody = document.getElementById('categories-table');
    tbody.innerHTML = '';

    categories.forEach(cat => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${cat.name}</strong></td>
            <td>${cat.description}</td>
            <td>${cat.products}</td>
            <td>
                <div class="table-actions">
                    <button class="table-btn" onclick="editCategory(${cat.id}, '${cat.name}')">Modifier</button>
                    <button class="table-btn table-btn--danger">Supprimer</button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function editCategory(id, name) {
    editingCategoryId = id;
    document.getElementById('category-modal-title').textContent = 'Modifier: ' + name;
    openModal('category-modal');
}

function handleCategorySubmit() {
    const formData = {
        name: document.getElementById('category-name').value,
        description: document.getElementById('category-description').value
    };

    console.log('Category data:', editingCategoryId ? 'Update' : 'Create', formData);

    document.getElementById('category-modal').classList.remove('active');
    document.getElementById('category-modal').classList.add('hidden');
    document.getElementById('category-form').reset();
    editingCategoryId = null;
}
