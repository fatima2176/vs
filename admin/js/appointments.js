/* ============================================
   ADMIN APPOINTMENTS JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    const appointments = mockData.generateAppointments(10);
    renderAppointmentsTable(appointments);
});

function renderAppointmentsTable(appointments) {
    const tbody = document.getElementById('appointments-table');
    tbody.innerHTML = '';

    appointments.forEach(apt => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${apt.client}</td>
            <td>${apt.pet}</td>
            <td>${apt.date}</td>
            <td>${apt.reason}</td>
            <td><span class="status-badge status-${apt.status.replace(' ', '-').toLowerCase()}">${apt.status}</span></td>
            <td>
                <div class="table-actions">
                    <button class="table-btn">Confirmer</button>
                    <button class="table-btn table-btn--danger">Annuler</button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
}
