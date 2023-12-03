const userTable = document.getElementById('userTable');
const addUserForm = document.getElementById('addUserForm');

addUserForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${userTable.rows.length}</td>
      <td>${firstNameInput.value}</td>
      <td>${lastNameInput.value}</td>
    `;

    userTable.querySelector('tbody').appendChild(newRow);

    // Очистка полів форми
    firstNameInput.value = '';
    lastNameInput.value = '';
});