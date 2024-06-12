function getDayOfWeek(dateString) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(dateString);
    return days[date.getDay()];
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

function generateEmptyWeek() {
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek.map(day => ({
        day: day,
        receptions: generateEmptyDay()
    }));
}

function fillEmptySlots(dayReceptions, day) {
    const emptyDay = generateEmptyDay();
    dayReceptions.forEach(reception => {
        const timeIndex = emptyDay.findIndex(slot => slot.time === reception.time);
        if (timeIndex !== -1) {
            emptyDay[timeIndex] = reception;
        }
    });
    return {
        day: day,
        receptions: emptyDay
    };
}

export function transformReceptions(receptions) {
    // Видаляємо секунди з часу прийому
    const receptionsWithoutSeconds = receptions.map(reception => ({
        ...reception,
        time: reception.time.slice(0, 5)
    }));

    const sortedReceptions = [...receptionsWithoutSeconds].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        if (dateA - dateB !== 0) return dateA - dateB;

        const timeA = new Date(`1970-01-01T${a.time}`);
        const timeB = new Date(`1970-01-01T${b.time}`);
        return timeA - timeB;
    });

    const schedule = generateEmptyWeek();

    sortedReceptions.forEach(reception => {
        const day = getDayOfWeek(reception.date);
        const dayIndex = schedule.findIndex(d => d.day === day);

        if (dayIndex !== -1) {
            const timeIndex = schedule[dayIndex].receptions.findIndex(slot => slot.time === reception.time);

            // Додано для налагодження
            // console.log(`Looking for time: ${reception.time} in day: ${day}`);
            // schedule[dayIndex].receptions.forEach(slot => {
            //     console.log(`Slot time: ${slot.time}`);
            // });

            if (timeIndex !== -1) {
                schedule[dayIndex].receptions[timeIndex] = reception;
            }
        }
    });

    return schedule;
}
