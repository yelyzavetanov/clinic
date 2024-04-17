import React from 'react';
import s from './Calendar.module.css';
import CalendarWeek from "./CalendarWeek/CalendarWeek";

function Calendar() {
    return (
        <div className={s.Calendar}>
                <div className={s.calendarHeader}>
                    <div className={s.calendarHeaderTitle}>November 2020</div>
                    <div className={s.calendarButtonContainer}>
                        <div className={s.calendarHeaderButton1}>
                            {"<"}
                        </div>
                        <div className={s.calendarHeaderButton2}>
                            {">"}
                        </div>
                    </div>
            </div>
            <CalendarWeek/>
        </div>
    );
}

export default Calendar;