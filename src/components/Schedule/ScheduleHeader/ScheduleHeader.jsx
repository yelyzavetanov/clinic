import React from "react";
import s from "./ScheduleHeader.module.css";

function ScheduleHeader() {
    return (
        <div>
            <div className={s.scheduleHeader}>
                <span className={s.title}>Calendar</span>
                <button className={s.newButton}>+ New</button>
            </div>
            <div className={s.calendarTitleHeader}>
                <div className={s.selectDayContainer}>
                    <span className={s.month}>November</span>
                    <span className={s.year}>2020</span>
                    <div className={s.selectDayButton}>
                        {"<"}
                    </div>
                    <div className={s.selectedDay}>Today</div>
                    <div className={s.selectDayButton}>
                        {">"}
                    </div>
                </div>
                <div>
                    <select className={s.selectWeek}><option>Week</option></select>
                </div>
            </div>
            <div className={s.line}></div>
        </div>
    )
}

export default ScheduleHeader;