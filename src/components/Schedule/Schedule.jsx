import React from "react";
import s from "./Shedule.module.css";
// import arrowIcon from "../../img/arrow.svg";
import arrowIcon from "./../../img/system-solid-11-arrow-up.png";
import ScheduleHeader from "./ScheduleHeader/ScheduleHeader";
import WeekScale from "./WeekScale/WeekScale";
import TimeScale from "./TimeScale/TimeScale";
import ScheduleTable from "./ScheduleTable/ScheduleTable";

function Schedule() {
    return (
        <div className={s.scheduleContainer}>
            <div className={s.schedule}>
                <ScheduleHeader/>
                <WeekScale/>
                <div class={s.scheduleVerticalContainer}>
                    <TimeScale/>
                    <ScheduleTable/>
                </div>
            </div>
        </div>
    )
}

export default Schedule;