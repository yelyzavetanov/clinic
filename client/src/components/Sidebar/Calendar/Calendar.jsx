import React from 'react';
import s from './Calendar.module.css';
import CalendarWeek from "./CalendarWeek/CalendarWeek";
import CalendarTable from "./CalendarTable/CalendarTable";

function Calendar() {
    return (
        <div className={s.Calendar}>
                <div className={s.calendarHeader}>
                    <div className={s.calendarHeaderTitle}>June 2024</div>
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
            <CalendarTable/>
        </div>
    );
}

export default Calendar;