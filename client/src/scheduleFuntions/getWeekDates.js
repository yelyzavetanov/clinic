import { format } from 'date-fns';

export function getWeekDates(date) {
    const today = date ? new Date(date) : new Date();

    const dayOfWeek = today.getDay();

    const daysToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    const daysToSaturday = dayOfWeek <= 6 ? 6 - dayOfWeek : 6 - dayOfWeek + 7;

    const monday = new Date(today);
    monday.setDate(today.getDate() + daysToMonday);

    const saturday = new Date(today);
    saturday.setDate(today.getDate() + daysToSaturday);

    return {
        monday: format(monday, 'dd.MM.yy'),
        saturday: format(saturday, 'dd.MM.yy')
    };
}

export function getDateSevenDaysEarlier(date) {
    const givenDate = new Date(date);

    givenDate.setDate(givenDate.getDate() - 7);
    return givenDate;
}

export function getDateSevenDaysLater(date) {
    const givenDate = new Date(date);

    givenDate.setDate(givenDate.getDate() + 7);
    return givenDate;
}

export function getWeekArray(date) {
    const givenDate = new Date(date);
    const dayOfWeek = givenDate.getDay();

    const daysToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    const monday = new Date(givenDate);
    monday.setDate(givenDate.getDate() + daysToMonday);

    const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

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