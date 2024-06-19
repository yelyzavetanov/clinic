import { startOfMonth, endOfMonth, getDay, addDays, format, addMonths, subMonths } from 'date-fns';

export function generateCalendar(date) {
    const firstDayOfMonth = startOfMonth(date);
    const lastDayOfMonth = endOfMonth(date);

    const calendar = [];
    let week = [];

    // Заповнення першого тижня
    for (let i = 0; i < getDay(firstDayOfMonth) - 1; i++) {
        week.push(null); // Заповнюємо пустими значеннями до початку місяця
    }

    // Заповнення датами місяця
    for (let day = firstDayOfMonth; day <= lastDayOfMonth; day = addDays(day, 1)) {
        week.push(new Date(day));
        if (week.length === 7) {
            calendar.push(week);
            week = [];
        }
    }

    // Додавання останнього тижня, якщо він не заповнений повністю
    if (week.length > 0) {
        calendar.push(week);
    }

    return calendar;
}

export function getAnotherMonth(date, offset) {
    const newDate = addMonths(date, offset);
    return newDate;
}