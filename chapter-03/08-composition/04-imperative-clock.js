// Записывать время часов каждую секунду
setInterval(logClockTime, 1000);

function logClockTime() {

    // Получить строку времени как гражданское время
    var time = getClockTime();

    // Очистить консоль и записать время
    console.clear();
    console.log(time);
}

function getClockTime() {

    // Получить текущее время
    var date = new Date();

    // Сериалиация времени
    var time = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        ampm: "AM"
    }

    // Конвертация в гражданкое время
    if (time.hours == 12) {
        time.ampm = "PM";
    } else if (time.hours > 12) {
        time.ampm = "PM";
        time.hours -= 12;
    }

    // Добавлени 0 к часам, чтобы получить двузначные цифры
    if (time.hours < 10) {
        time.hours = "0" + time.hours;
    }

    // Добавлени 0 к минутам, чтобы получить двузначные цифры
    if (time.minutes < 10) {
        time.minutes = "0" + time.minutes;
    }

    // Добавлени 0 к секундам, чтобы получить двузначные цифры
    if (time.seconds < 10) {
        time.seconds = "0" + time.seconds;
    }

    // Приведене времени к стрококвому формату "hh:mm:ss tt"
    return time.hours + ":"
        + time.minutes + ":"
        + time.seconds + " "
        + time.ampm;

}