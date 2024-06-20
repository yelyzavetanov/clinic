import React from "react";
import s from "./WeekDay.module.css";
import {format} from "date-fns";

function WeekDay(props){

    const isCurrentWeekDay =
        (props.weekDay === props.currentDay)
        &&
        (format(props.date, "dd-MM-yyyy") === format(props.currentDate, "dd-MM-yyyy"));

    // console.log(props);

    return(
        <div className={isCurrentWeekDay ? s.currentWeekDay : s.weekDay}>
            <div>{format(props.date, "dd.MM")}</div>
            <div className={s.weekDayTitle}>{props.weekDay}</div>
            <div className={s.dayNumber}>{props.dayNumber}</div>
        </div>
    )
}

export default WeekDay;