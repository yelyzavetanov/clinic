import React, {useState} from "react";
import s from "./ScheduleHeader.module.css";
import {getDateSevenDaysEarlier, getDateSevenDaysLater, getWeekDates} from "../../../scheduleFuntions/getWeekDates";

function ScheduleHeader(props) {
    const monthsArray = ["January","February","March","April","May","June","July",
        "August","September","October","November","December"];

    const [weekDates, setWeekDates] = useState(getWeekDates(props.shownDate));

    const onPreviousWeek = () => {
        props.setShownDate(getDateSevenDaysEarlier(props.shownDate));
        setWeekDates(getWeekDates(props.shownDate));
    }

    const onNextWeek = () => {
        props.setShownDate(getDateSevenDaysLater(props.shownDate));
        setWeekDates(getWeekDates(props.shownDate));
    }

    const onAddReception = () => {
        props.setIsAddReceptionForm(true);
        props.setIsAddPatientForm(false);
        props.setIsReceptionInfo(false);

    }

    return (
        <div>
            <div className={s.scheduleHeader}>
                <span className={s.title}>Calendar</span>
                <button className={s.newButton} onClick={onAddReception}>
                    Add reception
                </button>
            </div>
            <div className={s.calendarTitleHeader}>
                <div className={s.selectDayContainer}>
                    <div>
                        <span className={s.day}>{props.currentDate.getDate()} </span>
                        <span className={s.month}>{monthsArray[props.currentDate.getMonth()]} </span>
                        <span className={s.year}>{props.currentDate.getYear()+1900}</span>
                    </div>
                </div>
                <div className={s.selectWeek}>
                    <span>Week: </span>
                    <button onClick={onPreviousWeek}>{"<"}</button>
                    <span>{weekDates.monday}</span>
                    -
                    <span>{weekDates.saturday}</span>
                    <button onClick={onNextWeek}>{">"}</button>
                </div>
            </div>
        </div>
    )
}

export default ScheduleHeader;