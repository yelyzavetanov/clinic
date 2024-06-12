import React from "react";
import s from "./ScheduleHeader.module.css";
import {useSelector} from "react-redux";

function ScheduleHeader(props) {
    const monthsArray = ["January","February","March","April","May","June","July",
        "August","September","October","November","December"];

    const currentDate = useSelector(state => state.schedule.currentDate);

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
                        <span className={s.day}>{currentDate.getDate()} </span>
                        <span className={s.month}>{monthsArray[currentDate.getMonth()]} </span>
                        <span className={s.year}>{currentDate.getYear()+1900}</span>
                    </div>
                    <div className={s.selectDayButtons}>
                        <div className={s.selectDayButton}>
                            {"<"}
                        </div>
                        <div className={s.selectedDay}>Today</div>
                        <div className={s.selectDayButton}>
                            {">"}
                        </div>
                    </div>
                </div>
                <div>
                    <select className={s.selectWeek}><option>Week</option></select>
                </div>
            </div>
        </div>
    )
}

export default ScheduleHeader;