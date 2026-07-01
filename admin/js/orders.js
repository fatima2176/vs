/* ============================================
   ADMIN ORDERS JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    const orders = mockData.generateOrders(10);
    renderOrdersTable(orders);
});

function renderOrdersTable(orders) {
    const tbody = document.getElementById('orders-table');
    tbody.innerHTML = '';

    orders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>#${order.id}</td>
            <td>${order.client}</td>
            <td>${order.amount.toLocaleString('fr-DZ')} DA</td>
            <td><span class="status-badge status-${order.status.replace(' ', '-').replace('é', 'e').toLowerCase()}">${order.status}</span></td>
            <td>${order.date}</td>
            <td>
                <div class="table-actions">
                    <button class="table-btn">Détails</button>
                    <button class="table-btn">Expédier</button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
}
