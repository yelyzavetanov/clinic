import React from "react";
import s from "./WeekScale.module.css";
import WeekDay from "./WeekDay/WeekDay";

function WeekScale() {
    const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const today = new Date;
    const currentDay = weekDays[today.getDay()-1];

    return (
        <div className={s.weekScale}>
            {weekDays.map(e =>
                <WeekDay
                    weekDay={e}
                    dayNumber={weekDays.indexOf(e) + 1}
                    currentDay={currentDay}
                    key={weekDays.indexOf(e)}
                />
            )}
        </div>
    )
}

export default WeekScale;