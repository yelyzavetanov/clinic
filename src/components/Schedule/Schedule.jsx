import React from "react";
import s from "./Shedule.module.css";
import ScheduleHeader from "./ScheduleHeader/ScheduleHeader";
import WeekScale from "./WeekScale/WeekScale";
import TimeScale from "./TimeScale/TimeScale";
import ScheduleTable from "./ScheduleTable/ScheduleTable";
import GrayLine from "../common/GrayLine/GrayLine";

function Schedule(props) {
    return (
        <div className={s.scheduleContainer}>
            <div className={s.schedule}>
                <ScheduleHeader
                    setIsAddReceptionForm={props.setIsAddReceptionFrom}
                    setIsAddPatientForm={props.setIsAddPatientForm}
                />
                <GrayLine/>
                <WeekScale/>
                <div className={s.scheduleVerticalContainer}>
                    <TimeScale/>
                    <ScheduleTable/>
                </div>
            </div>
        </div>
    )
}

export default Schedule;