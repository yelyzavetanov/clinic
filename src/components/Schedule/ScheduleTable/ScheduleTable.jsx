import React from "react";
import s from "./ScheduleTable.module.css";
import ScheduleColumn from "./ScheduleColumn/ScheduleColumn";

function ScheduleTable() {
    const scheduleArray = [
        [{time: "8AM", endTime: "9am", patient: "Tomas", description: "Some cool description"}, {time: "10AM", endTime: "11AM", patient: "Elly", description: "Some cool description"}],
        [{time: "11AM", endTime: "12PM", patient: "Ann", description: "Some cool description"}, {time: "4PM", endTime: "5PM", patient: "Elly", description: "Some cool description"}],
        [{time: "11AM", endTime: "12PM", patient: "Ann", description: "Some cool description"}, {time: "4PM", endTime: "5PM", patient: "Elly", description: "Some cool description"}],
        [{time: "11AM", endTime: "12PM", patient: "Ann", description: "Some cool description"}, {time: "4PM", endTime: "5PM", patient: "Elly", description: "Some cool description"}],
        [{time: "11AM", endTime: "12PM", patient: "Ann", description: "Some cool description"}, {time: "4PM", endTime: "5PM", patient: "Elly", description: "Some cool description"}],
        [{time: "11AM", endTime: "12PM", patient: "Ann", description: "Some cool description"}, {time: "4PM", endTime: "5PM", patient: "Elly", description: "Some cool description"}],
    ];

    const timeScaleArray = ["8AM", "9AM", "10AM", "11AM", "12PM",
        "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM",];

    const generateSchedule = () => {
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < timeScaleArray.length - 1; j++) {
                scheduleArray[i].push({time: timeScaleArray[j]});
            }
        }
    }

    generateSchedule();

    return (
        <div className={s.scheduleTable}>
            {scheduleArray.map(e =>
                <ScheduleColumn dayInfo={e}/>
            )}
        </div>
    )
}

export default ScheduleTable;