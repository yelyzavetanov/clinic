import React from "react";
import s from "./ScheduleTable.module.css";
import ScheduleColumn from "./ScheduleColumn/ScheduleColumn";
import {generateSchedule} from "../../../scheduleGenerator/scheduleGenerator";

function ScheduleTable() {
    // const scheduleArray = [
    //     [{time: "8AM", endTime: "9am", patient: "Tomas", description: "Some cool description"}, {
    //         time: "10AM",
    //         endTime: "11AM",
    //         patient: "Elly",
    //         description: "Some cool description"
    //     }],
    //     [{time: "11AM", endTime: "12PM", patient: "Ann", description: "Some cool description"}, {
    //         time: "4PM",
    //         endTime: "5PM",
    //         patient: "Elly",
    //         description: "Some cool description"
    //     }],
    //     [{time: "11AM", endTime: "12PM", patient: "Ann", description: "Some cool description"}, {
    //         time: "4PM",
    //         endTime: "5PM",
    //         patient: "Elly",
    //         description: "Some cool description"
    //     }],
    //     [{time: "11AM", endTime: "12PM", patient: "Ann", description: "Some cool description"}, {
    //         time: "4PM",
    //         endTime: "5PM",
    //         patient: "Elly",
    //         description: "Some cool description"
    //     }],
    //     [{time: "11AM", endTime: "12PM", patient: "Ann", description: "Some cool description"}, {
    //         time: "4PM",
    //         endTime: "5PM",
    //         patient: "Elly",
    //         description: "Some cool description"
    //     }],
    //     [{time: "11AM", endTime: "12PM", patient: "Ann", description: "Some cool description"}, {
    //         time: "4PM",
    //         endTime: "5PM",
    //         patient: "Elly",
    //         description: "Some cool description"
    //     }],
    // ];

    const scheduleArray = generateSchedule();
    console.log(scheduleArray);

    return (
        <div className={s.scheduleTable}>
            {scheduleArray.map(e =>
                <ScheduleColumn dayInfo={e} key={scheduleArray.indexOf(e)}/>
            )}
        </div>
    )
}

export default ScheduleTable;