import react from 'react';
import s from "./CalendarRow.module.css";
import CalendarWeekDay from "../../CalendarWeek/CalendarWeekDay/CalendarWeekDay";

function CalendarRow(props) {
    return (
        <div className={s.calendarRow}>
            {props.week.map(e => <CalendarWeekDay currentDate={props.currentDate} calendarWeekDay={e} key={props.week.indexOf(e)}/>)}
        </div>
    )
}

export default CalendarRow;