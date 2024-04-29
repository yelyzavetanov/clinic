import React from "react";
import s from "./TimeScale.module.css";
import TimeItem from "./TimeItem/TimeItem";

function TimeScale() {
    const timeScaleArray = ["8AM", "9AM", "10AM", "11AM", "12PM",
        "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM",];

    return (
        <div className={s.timeScale}>
            {timeScaleArray.map(e => <TimeItem time={e} key={timeScaleArray.indexOf(e)}/>)}
        </div>
    )
}

export default TimeScale;