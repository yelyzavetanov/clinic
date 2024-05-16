import React from 'react';
import s from "./CalendarTable.module.css";
import CalendarRow from "./CalendarRow/CalendarRow";
import {generateCalendar} from "../../../../scheduleGenerator/calendarGenerator";

function CalendarTable() {
    const calendarArray = generateCalendar();

    return (
        <div className={s.calendarTable}>
            {calendarArray.map(e =>
                <CalendarRow week={e} key={calendarArray.indexOf(e)}/>
            )}
        </div>
    )
}

export default CalendarTable;