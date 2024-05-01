import react from 'react';
import s from "./CalendarRow.module.css";
import CalendarWeekDay from "../../CalendarWeek/CalendarWeekDay/CalendarWeekDay";

function CalendarRow(props) {
    return (
        <div className={s.calendarRow}>
            {props.week.map(e => <CalendarWeekDay calendarWeekDay={e} key={props.week.indexOf(e)}/>)}
        </div>
    )
}

export default CalendarRow;