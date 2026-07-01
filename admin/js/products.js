/* ============================================
   ADMIN PRODUCTS JAVASCRIPT
   ============================================ */

let editingProductId = null;

document.addEventListener('DOMContentLoaded', () => {
    const products = mockData.generateProducts(12);
    renderProductsTable(products);

    // Add product button
    document.getElementById('add-product-btn').addEventListener('click', () => {
        editingProductId = null;
        document.getElementById('modal-title').textContent = 'Ajouter un Produit';
        document.getElementById('product-form').reset();
        openModal('product-modal');
    });

    // Modal handlers
    document.getElementById('modal-close').addEventListener('click', () => {
        closeModal(document.getElementById('modal-close'));
    });

    document.getElementById('modal-cancel').addEventListener('click', () => {
        closeModal(document.getElementById('modal-close'));
    });

    document.getElementById('product-modal').addEventListener('click', (e) => {
        if (e.target.id === 'product-modal') {
            closeModal(document.getElementById('product-modal'));
        }
    });

    // Form submit
    document.getElementById('product-form').addEventListener('submit', (e) => {
        e.preventDefault();
        handleProductSubmit();
    });
});

function renderProductsTable(products) {
    const tbody = document.getElementById('products-table');
    tbody.innerHTML = '';

    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${product.image}" alt="${product.name}"></td>
            <td>${product.name}</td>
            <td>${product.category}</td>
            <td>${product.price.toLocaleString('fr-DZ')} DA</td>
            <td>${product.stock}</td>
            <td>
                <div class="table-actions">
                    <button class="table-btn" onclick="editProduct(${product.id}, '${product.name}')">Modifier</button>
                    <button class="table-btn table-btn--danger">Supprimer</button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function editProduct(id, name) {
    editingProductId = id;
    document.getElementById('modal-title').textContent = 'Modifier Produit: ' + name;
    openModal('product-modal');
}

function handleProductSubmit() {
    const formData = {
        name: document.getElementById('product-name').value,
        category: document.getElementById('product-category').value,
        price: document.getElementById('product-price').value,
        stock: document.getElementById('product-stock').value,
        image: document.getElementById('product-image').value,
        description: document.getElementById('product-description').value
    };

    console.log('Product data:', editingProductId ? 'Update' : 'Create', formData);

    // Close modal
    document.getElementById('product-modal').classList.remove('active');
    document.getElementById('product-modal').classList.add('hidden');

    // Reset form
    document.getElementById('product-form').reset();
    editingProductId = null;
}
