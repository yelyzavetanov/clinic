import React from "react";
import s from "./ScheduleHeader.module.css";

function ScheduleHeader(props) {

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
                        <span className={s.month}>November </span>
                        <span className={s.year}>2020</span>
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