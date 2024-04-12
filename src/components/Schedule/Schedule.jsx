import React from "react";
import s from "./Shedule.module.css";
// import arrowIcon from "../../img/arrow.svg";
import arrowIcon from "./../../img/system-solid-11-arrow-up.png";
import ScheduleHeader from "./ScheduleHeader/ScheduleHeader";

function Schedule() {
    return (
        <div className={s.scheduleContainer}>
            <div className={s.schedule}>
                <ScheduleHeader/>
            </div>
        </div>
    )
}

export default Schedule;