import React from 'react';
import s from "./CalendarWeekDay.module.css";
import {format} from "date-fns";

function CalendarWeekDay(props) {
    // console.log(props.currentDate, props.calendarWeekDay);
    const isToday = props.currentDate
        ? format(new Date(props.currentDate), "dd.MM.yy") === format(new Date(props.calendarWeekDay), "dd.MM.yy")
        : "";

    return (
        <div className={s.calendarWeekDay}>
            <span className={isToday ? s.today : s.day}>
            {
                props.calendarWeekDay instanceof Date
                    ? new Date(props.calendarWeekDay).getDate()
                    : props.calendarWeekDay
            }
            </span>
        </div>
    )
}

export default CalendarWeekDay;