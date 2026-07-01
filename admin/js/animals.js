/* ============================================
   ADMIN ANIMALS JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    const animals = mockData.generateAnimals(12);
    renderAnimalsTable(animals);
});

function renderAnimalsTable(animals) {
    const tbody = document.getElementById('animals-table');
    tbody.innerHTML = '';

    animals.forEach(animal => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${animal.image}" alt="${animal.name}" style="width:40px; height:40px; border-radius: 4px; object-fit: cover;"></td>
            <td><strong>${animal.name}</strong></td>
            <td>${animal.species}</td>
            <td>${animal.age}</td>
            <td>${animal.owner}</td>
            <td>
                <div class="table-actions">
                    <button class="table-btn">Voir Dossier</button>
                    <button class="table-btn table-btn--danger">Supprimer</button>
                </div>
            </td>
        `;
        tbody.appendChild(row);
    });
}
