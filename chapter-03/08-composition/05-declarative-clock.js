const oneSecond = () => 1000
const getCurrentTime = () => new Date()
const clear = () => console.clear()
const log = message => console.log(message)

// Получает объект времени и возвращает объект для показания часов, содержащих часы, минуты, секунды
const serializeClockTime = date =>
    ({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    })

// Получает объект показания часов и возвращает объект, где показание часов преобразовано к формату гражданского времени
const civilianHours = clockTime =>
    ({
        ...clockTime,
        hours: (clockTime.hours > 12) ?
            clockTime.hours - 12 :
            clockTime.hours
    })

// Получает объект показания часов и добавляет к нему время суток, AM или PM
const appendAMPM = clockTime =>
    ({
        ...clockTime,
        ampm: (clockTime.hours >= 12) ? "PM" : "AM"
    })

/*
   Получает функцию цели target и возвращает функцию, которая будет отправлять время в адрес цели.
   В данном примере целью будет console.log
 */
const display = target => time => target(time)

/*
   Получает шаблонную строку и использует ее для возвращения показания времени, отформатированного по критериям,
   заданным строкой. В данном примере шаблон имеет вид hh:mm:ss tt. Таким образом, formatClock будет заменять
   заполнители показаниями часов, минут, секунд и времени суток
 */
const formatClock = format =>
    time =>
        format.replace("hh", time.hours)
            .replace("mm", time.minutes)
            .replace("ss", time.seconds)
            .replace("tt", time.ampm)

/*
   Получает в качестве аргумента ключ объекта и ставит нуль впереди значения, хранящегося под этим ключом объекта.
   Функция получает ключ к указанному полю и ставит перед значением нуль, если значение меньше 10
 */
const prependZero = key => clockTime =>
    ({
        ...clockTime,
        [key]: (clockTime[key] < 10) ?
            "0" + clockTime[key] :
            clockTime[key]
    })

const compose = (...fns) =>
    (arg) =>
        fns.reduce(
            (composed, f) => f(composed),
            arg
        )

/*
   Отдельная функция, получающая в качестве аргумента показание времени и преобразующая его в формат гражданского
   времени с помощью обеих форм этого времени
 */
const convertToCivilianTime = clockTime =>
    compose(
        appendAMPM,
        civilianHours
    )(clockTime)

/*
   Отдельная функция, получающая в качестве аргумента показание времени и обеспечивающая отображение часов, минут и
   секунд парой цифр, предоставляя для этого ноль, где необходимо
 */
const doubleDigits = civilianTime =>
    compose(
        prependZero("hours"),
        prependZero("minutes"),
        prependZero("seconds")
    )(civilianTime)

/*
   Запускает часы, устанавливая интервал, вызывающий функцию обратного вызова каждую секунду. Функция обратного вызова
   представляет собой композицию из всех наших функций. Каждую секундку консоль очищается, получается текущее время,
   показание которошо проходит преобразование, перевод в гражданский формат, форматирование и отображение
 */
const startTicking = () =>
    setInterval(
        compose(
            clear,
            getCurrentTime,
            serializeClockTime,
            convertToCivilianTime,
            doubleDigits,
            formatClock("hh:mm:ss tt"),
            display(log)
        ),
        oneSecond()
    )

startTicking()