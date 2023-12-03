function displayCurrentDate() {


    const currentDate = new Date();


    const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    const dayOfWeekOptions = { weekday: 'long' };
    const timeOptions = { hour: '2-digit', minute: '2-digit' };


    const formattedDate = currentDate.toLocaleDateString('uk-UA', dateOptions);
    const formattedDayOfWeek = currentDate.toLocaleDateString('uk-UA', dayOfWeekOptions);
    const formattedTime = currentDate.toLocaleTimeString('uk-UA', timeOptions);


    const currentDateCell = document.getElementById('currentDateCell');
    currentDateCell.innerText = `Дата: ${formattedDate} року\nДень тижня: ${formattedDayOfWeek}\nЧас: ${formattedTime}`;
}