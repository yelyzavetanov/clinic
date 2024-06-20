import React from 'react';
import s from "./CalendarTable.module.css";
import CalendarRow from "./CalendarRow/CalendarRow";
import {generateCalendar} from "../../../../calendarFunctions/generateCalendar";

function CalendarTable(props) {
    return (
        <div className={s.calendarTable}>
            {props.calendarArray.map(e =>
                <CalendarRow week={e} key={crypto.randomUUID()} currentDate={props.currentDate}/>
            )}
        </div>
    )
}

export default CalendarTable;