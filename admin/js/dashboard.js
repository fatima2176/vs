/* ============================================
   ADMIN DASHBOARD JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Load dashboard data
    const products = mockData.generateProducts(12);
    const orders = mockData.generateOrders(8);
    const appointments = mockData.generateAppointments(10);
    const clients = mockData.generateClients(25);

    // Update stat cards
    document.getElementById('products-count').textContent = products.length;
    document.getElementById('orders-count').textContent = orders.length;
    document.getElementById('appointments-count').textContent = appointments.length;
    document.getElementById('clients-count').textContent = clients.length;

    // Load recent orders
    renderRecentOrders(orders.slice(0, 5));
});

function renderRecentOrders(orders) {
    const tbody = document.getElementById('recent-orders');
    tbody.innerHTML = '';

    orders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>#${order.id}</td>
            <td>${order.client}</td>
            <td>${order.amount.toLocaleString('fr-DZ')} DA</td>
            <td><span class="status-badge status-${order.status.replace(' ', '-').toLowerCase()}">${order.status}</span></td>
            <td>${order.date}</td>
            <td>
                <div class="table-actions">
                    <button class="table-btn">Voir</button>
                    <button class="table-btn table-btn--danger">Supprimer</button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
}
