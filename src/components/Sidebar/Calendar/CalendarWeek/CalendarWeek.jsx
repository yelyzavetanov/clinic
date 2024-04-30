import React from  'react';
import s from './CalendarWeek.module.css';
import CalendarWeekDay from "./CalendarWeekDay/CalendarWeekDay";

function CalendarWeek(props){

    const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return(
        <div className={s.calendarScale}>
            {weekDays.map(e =>
                <CalendarWeekDay
                    calendarWeekDay={e}
                    key={weekDays.indexOf(e)}
                />
            )}
        </div>
    );

}

export default CalendarWeek;