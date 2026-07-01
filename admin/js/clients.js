/* ============================================
   ADMIN CLIENTS JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    const clients = mockData.generateClients(15);
    renderClientsTable(clients);
});

function renderClientsTable(clients) {
    const tbody = document.getElementById('clients-table');
    tbody.innerHTML = '';

    clients.forEach(client => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${client.name}</strong></td>
            <td>${client.email}</td>
            <td>${client.phone}</td>
            <td>${client.purchases}</td>
            <td>${client.joined}</td>
            <td>
                <div class="table-actions">
                    <button class="table-btn">Voir</button>
                    <button class="table-btn">Contacter</button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
}
