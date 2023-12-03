const selectedEmailsContainer = document.getElementById('selectedEmails');

document.querySelectorAll('.emailCheckbox').forEach(checkbox => {
    checkbox.addEventListener('change', updateSelectedEmails);
});

function updateSelectedEmails() {
    const selectedEmails = Array.from(document.querySelectorAll('.emailCheckbox:checked')).map(checkbox => checkbox.value);
    selectedEmailsContainer.textContent = selectedEmails.join(', ');
}