export function generateCalendar() {
    const calendar = [];

    for (let i = 0; i < 5; i++) {
        calendar.push(generateWeek(i));
    }

    return calendar;
}

function generateWeek(weekNumber) {
    const week = [];

    for (let i = weekNumber*7; i < (weekNumber+1)*7; i++) {
        if (i > 30) {
            break;
        }
        week.push(i+1);
    }

    return week;
}