class ScheduleItemInfo {
    constructor(time, patient, description) {
        this.time = time;
        this.patient = patient;
        this.description = description;
    }
}

const timeScaleArray = ["8AM", "9AM", "10AM", "11AM", "12PM",
    "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM"];

const timeArray = [
    ["8AM", "10AM", "6PM"],
    ["8AM", "11AM", "5PM"],
    ["10AM", "11AM", "1PM", "3PM"],
    ["9AM", "10AM", "2PM", "4PM"],
    ["8AM", "1PM", "2PM"],
    ["10AM"]
];

export function generateSchedule() {
    const scheduleArray = [];

    for (let i = 0; i < 6; i++) {
        scheduleArray.push(generateDay(timeArray[i]));
    }

    return scheduleArray;
}

function generateDay(time) {
    const dayArray = [];

    let patientsCount = 0;
    let indexOfCurrentTimeElement = 0;

    // for (let i = 0; i < )
    timeScaleArray.map(e => {
        if (e === time[indexOfCurrentTimeElement]) {
            let newItem = new ScheduleItemInfo(
                time[indexOfCurrentTimeElement],
                "Patient",
                "some description"
            );
            dayArray.push(newItem);
            patientsCount++;
            indexOfCurrentTimeElement++;
        } else {
            dayArray.push({time: e});
        }
    });

    return dayArray;
}