import React from "react";
import s from "./WeekScale.module.css";
import WeekDay from "./WeekDay/WeekDay";

function WeekScale(props) {
    const currentWeekDay = props.weekArray[props.currentDate.getDay()-1].weekDay;

    return (
        <div className={s.weekScale}>
            {props.weekArray.map(e =>
                <WeekDay
                    weekDay={e.weekDay}
                    date={e.date}
                    dayNumber={props.weekArray.indexOf(e) + 1}
                    currentDay={currentWeekDay}
                    key={props.weekArray.indexOf(e)}
                    currentDate={props.currentDate}
                />
            )}
        </div>
    )
}

export default WeekScale;