function getMonday(date) {
    const givenDate = new Date(date);
    const dayOfWeek = givenDate.getDay();
    const daysToMonday = dayOfWeek === 0 ? -5 : 2 - dayOfWeek;
    const monday = new Date(givenDate);
    monday.setDate(givenDate.getDate() + daysToMonday);
    monday.setHours(0, 0, 0, 0);
    return monday;
}

function getDayOfWeek(dateString) {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(dateString);
    return days[date.getDay()-1];
}

function generateEmptyDay() {
    const hours = [];
    for (let i = 8; i <= 20; i++) {
        const hour = i < 10 ? `0${i}:00` : `${i}:00`;
        hours.push({
            time: hour,
            patient: "",
            description: "",
            type: "",
            color: ""
        });
    }
    return hours;
}

export function generateEmptyWeek() {
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek.map(day => ({
        day: day,
        receptions: generateEmptyDay()
    }));
}

/*function fillEmptySlots(dayReceptions, day) {
    const emptyDay = generateEmptyDay();
    dayReceptions.forEach(reception => {
        const receptionHour = reception.time.split(':')[0];
        const timeIndex = emptyDay.findIndex(slot => slot.time.split(':')[0] === receptionHour);
        if (timeIndex !== -1) {
            emptyDay[timeIndex] = reception;
        }
    });
    return {
        day: day,
        receptions: emptyDay
    };
}*/

export function transformReceptions(receptions) {
    const receptionsWithoutSeconds = receptions.map(reception => ({
        ...reception,
        time: reception.time.slice(0, 5) // Залишаємо години та хвилини
    }));

    const sortedReceptions = [...receptionsWithoutSeconds].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        if (dateA - dateB !== 0) return dateA - dateB;

        const timeA = new Date(`1970-01-01T${a.time}`);
        const timeB = new Date(`1970-01-01T${b.time}`);
        return timeA - timeB;
    });

    const weeks = {};

    sortedReceptions.forEach(reception => {
        const date = new Date(reception.date);
        const monday = getMonday(date);
        const weekKey = monday.toISOString().split('T')[0];

        if (!weeks[weekKey]) {
            weeks[weekKey] = generateEmptyWeek();
        }

        const day = getDayOfWeek(reception.date);
        const dayIndex = weeks[weekKey].findIndex(d => d.day === day);

        if (dayIndex !== -1) {
            const receptionHour = reception.time.split(':')[0];
            const timeIndex = weeks[weekKey][dayIndex].receptions.findIndex(slot => slot.time.split(':')[0] === receptionHour);

            if (timeIndex !== -1) {
                weeks[weekKey][dayIndex].receptions[timeIndex] = reception;
            }
        }
    });

    return weeks;
}

// Приклад використання
/*
const appointments = [
    { date: "2024-06-10T12:00:00.000Z", time: "12:00", patient: "John Doe", description: "Consultation", type: "Consultation", color: "blue" },
    { date: "2024-06-11T14:00:00.000Z", time: "14:00", patient: "Jane Smith", description: "Check-up", type: "Check-up", color: "green" },
    { date: "2024-06-14T09:00:00.000Z", time: "09:00", patient: "Alice Brown", description: "Follow-up", type: "Follow-up", color: "yellow" },
    { date: "2024-06-17T10:00:00.000Z", time: "10:00", patient: "Bob White", description: "Consultation", type: "Consultation", color: "blue" },
    { date: "2024-06-18T16:00:00.000Z", time: "16:00", patient: "Charlie Black", description: "Check-up", type: "Check-up", color: "green" }
];

const groupedAppointments = transformReceptions(appointments);
console.log(groupedAppointments);
*/
