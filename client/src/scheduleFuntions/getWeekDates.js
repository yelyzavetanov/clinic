import { format } from 'date-fns';

export function getWeekDates(date) {
    // Створюємо об'єкт дати для сьогоднішнього дня, якщо не передано дату
    const today = date ? new Date(date) : new Date();

    // Знаходимо день тижня
    const dayOfWeek = today.getDay();

    // Визначаємо кількість днів до понеділка та суботи
    const daysToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    const daysToSaturday = dayOfWeek <= 6 ? 6 - dayOfWeek : 6 - dayOfWeek + 7;

    // Обчислюємо дати понеділка та суботи
    const monday = new Date(today);
    monday.setDate(today.getDate() + daysToMonday);

    const saturday = new Date(today);
    saturday.setDate(today.getDate() + daysToSaturday);

    // return {
    //     monday: monday.toISOString().split('T')[0],
    //     saturday: saturday.toISOString().split('T')[0]
    // };

    return {
        monday: format(monday, 'dd.MM.yyyy'),
        saturday: format(saturday, 'dd.MM.yyyy')
    };
}

// Приклад використання
// const weekDates = getWeekDates();
// console.log(`Monday: ${weekDates.monday}, Saturday: ${weekDates.saturday}`);

export function getDateSevenDaysEarlier(date) {
    // Створюємо об'єкт дати з вхідного параметра
    const givenDate = new Date(date);

    // Віднімаємо 7 днів
    givenDate.setDate(givenDate.getDate() - 7);
    console.log("earlier");
    return givenDate;
}

export function getDateSevenDaysLater(date) {
    // Створюємо об'єкт дати з вхідного параметра
    const givenDate = new Date(date);

    givenDate.setDate(givenDate.getDate() + 7);
    console.log("later");
    return givenDate;
}

export function getWeekArray(date) {
    const givenDate = new Date(date);
    const dayOfWeek = givenDate.getDay();

    // Знаходимо понеділок поточного тижня
    const daysToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    const monday = new Date(givenDate);
    monday.setDate(givenDate.getDate() + daysToMonday);

    // Масив днів тижня від понеділка до суботи
    const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Створюємо масив об'єктів з датами
    const weekDates = weekDays.map((day, index) => {
        const currentDay = new Date(monday);
        currentDay.setDate(monday.getDate() + index);

        const dayString = String(currentDay.getDate()).padStart(2, '0');
        const monthString = String(currentDay.getMonth() + 1).padStart(2, '0');

        return {
            weekDay: day,
            // date: `${dayString}.${monthString}`
            date: format(currentDay, "yyyy-MM-dd")
        };
    });

    return weekDates;
}

// Приклад використання
// const date = new Date("2024-06-14");
// const weekDates = getWeekDates(date);
// console.log(weekDates);
