import React from 'react';
import s from "./CalendarTable.module.css";
import {generateSchedule} from "../../../../scheduleGenerator/scheduleGenerator";
import ScheduleColumn from "../../../Schedule/ScheduleTable/ScheduleColumn/ScheduleColumn";
import CalendarRow from "./CalendarRow/CalendarRow";
import {generateCalendar} from "../../../../scheduleGenerator/calendarGenerator";

function CalendarTable() {
    const calendarArray = generateCalendar();

    return (
        <div className={s.scheduleTable}>
            {calendarArray.map(e =>
                <CalendarRow week={e} key={calendarArray.indexOf(e)}/>
            )}
        </div>
    )
}

export default CalendarTable;