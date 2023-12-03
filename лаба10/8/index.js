document.addEventListener('DOMContentLoaded', function () {
    var messageForm = document.getElementById('messageForm');
    var messagesList = document.getElementById('messages');

    messageForm.addEventListener('submit', function (event) {
        event.preventDefault();

        var usernameInput = document.getElementById('username');
        var messageInput = document.getElementById('message');

        var username = usernameInput.value;
        var message = messageInput.value;

        if (username && message) {
            addMessage(username, message);
            usernameInput.value = '';
            messageInput.value = '';
        }
    });

    function addMessage(username, message) {
        var listItem = document.createElement('li');
        listItem.className = 'message';

        var messageContent = document.createElement('p');
        messageContent.textContent = username + ': ' + message;

        var date = new Date();
        var dateString = formatDate(date);

        var dateElement = document.createElement('small');
        dateElement.textContent = dateString;

        listItem.appendChild(messageContent);
        listItem.appendChild(dateElement);

        messagesList.appendChild(listItem);
    }

    function formatDate(date) {
        var daysOfWeek = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота'];
        var months = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];

        var dayOfWeek = daysOfWeek[date.getDay()];
        var dayOfMonth = date.getDate();
        var month = months[date.getMonth()];
        var year = date.getFullYear();
        var hours = ('0' + date.getHours()).slice(-2);
        var minutes = ('0' + date.getMinutes()).slice(-2);

        return `${dayOfWeek}, ${dayOfMonth} ${month} ${year} рік, ${hours}:${minutes}`;
    }
});