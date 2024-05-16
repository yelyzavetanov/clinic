import React from 'react';
import s from "./CalendarWeekDay.module.css";

function CalendarWeekDay(props) {
    return (
        <div className={s.calendarWeekDay}>{props.calendarWeekDay}</div>
    )
}

export default CalendarWeekDay;