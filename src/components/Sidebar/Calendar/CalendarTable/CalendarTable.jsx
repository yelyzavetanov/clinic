import React from 'react';
import s from "./CalendarTable.module.css";
import {generateSchedule} from "../../../../scheduleGenerator/scheduleGenerator";
import ScheduleColumn from "../../../Schedule/ScheduleTable/ScheduleColumn/ScheduleColumn";
import {generateCalendar} from "../../../../scheduleGenerator/calendarGenerator";

function CalendarTable() {
    const calendarArray = generateCalendar();
    console.log(calendarArray)

    return (
        <div className={s.scheduleTable}>
            {/*{scheduleArray.map(e =>*/}
            {/*    <ScheduleColumn dayInfo={e} key={scheduleArray.indexOf(e)}/>*/}
            {/*)}*/}
            calendar table
        </div>
    )
}

export default CalendarTable;