import React, {useState} from 'react';
import s from './Calendar.module.css';
import CalendarWeek from "./CalendarWeek/CalendarWeek";
import CalendarTable from "./CalendarTable/CalendarTable";
import {useSelector} from "react-redux";
import {format} from "date-fns";
import {
    generateCalendar,
    getAnotherMonth
} from "../../../calendarFunctions/generateCalendar";

function Calendar() {
    const currentDate = useSelector(state => state.schedule.currentDate);
    const [shownDate, setShownDate] = useState(currentDate);
    const [calendarArray, setCalendarArray] = useState(generateCalendar(currentDate));

    const onPreviousMonth = () => {
        setCalendarArray(generateCalendar((new Date(getAnotherMonth(shownDate, -1)))));
        setShownDate(new Date(getAnotherMonth(shownDate, -1)));
    }

    const onNextMonth = () => {
        setCalendarArray(generateCalendar(new Date(getAnotherMonth(shownDate, 1))));
        setShownDate(new Date(getAnotherMonth(shownDate, 1)));
    }

    return (
        <div className={s.Calendar}>
                <div className={s.calendarHeader}>
                    <div className={s.calendarHeaderTitle}>{format(shownDate, "MMMM yyyy")}</div>
                    <div className={s.calendarButtonContainer}>
                        <button className={s.calendarHeaderButton} onClick={onPreviousMonth}>
                            {"<"}
                        </button>
                        <button className={s.calendarHeaderButton} onClick={onNextMonth}>
                            {">"}
                        </button>
                    </div>
            </div>
            <CalendarWeek/>
            <CalendarTable calendarArray={calendarArray} currentDate={currentDate}/>
        </div>
    );
}

export default Calendar;