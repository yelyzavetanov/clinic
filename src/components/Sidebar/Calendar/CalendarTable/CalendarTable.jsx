import React from 'react';
import s from "./CalendarTable.module.css";
import {generateSchedule} from "../../../../scheduleGenerator/scheduleGenerator";
import ScheduleColumn from "../../../Schedule/ScheduleTable/ScheduleColumn/ScheduleColumn";
import CalendarRow from "./CalendarRow/CalendarRow";

function CalendarTable() {
    // const calendarArray = generateCalendar();
    const calendarArray = [
        [1, 2, 3, 4, 5, 6, 7],
        [1, 2, 3, 4, 5, 6, 7],
        [1, 2, 3, 4, 5, 6, 7],
        [1, 2, 3, 4, 5, 6, 7],
        [1, 2, 3, 4, 5, 6, 7],
    ];

    return (
        <div className={s.calendarTable}>
            {calendarArray.map(e => <CalendarRow  week={e} />)}
        </div>
    )
}

export default CalendarTable;