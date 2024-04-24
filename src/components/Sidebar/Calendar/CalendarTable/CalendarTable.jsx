import React from 'react';
import s from "./CalendarTable.module.css";
import {generateSchedule} from "../../../../scheduleGenerator/scheduleGenerator";
import ScheduleColumn from "../../../Schedule/ScheduleTable/ScheduleColumn/ScheduleColumn";

function CalendarTable() {
    const calendarArray = generateCalendar();

    return (
        <div className={s.scheduleTable}>
            {scheduleArray.map(e =>
                <ScheduleColumn dayInfo={e} key={scheduleArray.indexOf(e)}/>
            )}
        </div>
    )
}