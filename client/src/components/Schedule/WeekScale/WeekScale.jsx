import React from "react";
import s from "./WeekScale.module.css";
import WeekDay from "./WeekDay/WeekDay";

function WeekScale() {
    const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return (
        <div className={s.weekScale}>
            {weekDays.map(e =>
                <WeekDay
                    weekDay={e}
                    dayNumber={weekDays.indexOf(e) + 1}
                    currentDay={"Friday"}
                    key={weekDays.indexOf(e)}
                />
            )}
        </div>
    )
}

export default WeekScale;