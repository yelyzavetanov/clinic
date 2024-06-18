import React, {useState} from "react";
import s from "./ScheduleHeader.module.css";
import {getDateSevenDaysEarlier, getDateSevenDaysLater, getWeekDates} from "../../../scheduleFuntions/getWeekDates";
import {useSelector} from "react-redux";

function ScheduleHeader(props) {
    const monthsArray = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    const [weekDates, setWeekDates] = useState(getWeekDates(props.shownDate));
    const isAdmin = props.account.status === "administrator";

    const doctorUsersList = useSelector(state => state.user.doctorsUsersList);
    const currentDoctorName = doctorUsersList.length ? doctorUsersList.find(
        e => e.username === props.currentDoctor
    ).name : "";

    const onPreviousWeek = () => {
        props.setShownDate(getDateSevenDaysEarlier(props.shownDate));
        setWeekDates(getWeekDates(props.shownDate));
    }

    const onNextWeek = () => {
        props.setShownDate(getDateSevenDaysLater(props.shownDate));
        setWeekDates(getWeekDates(props.shownDate));
    }

    const onAddReception = () => {
        props.setIsAddReceptionForm(true);
        props.setIsAddPatientForm(false);
        props.setIsReceptionInfo(false);

    }

    return (
        <div>
            <div className={s.scheduleHeader}>
                <span className={s.title}>Calendar</span>
                <button className={s.newButton} onClick={onAddReception}>
                    Add reception
                </button>
            </div>
            <div className={s.calendarTitleHeader}>
                <div className={s.selectDayContainer}>
                    <div>
                        <div>
                            <span className={s.day}>{props.currentDate.getDate()} </span>
                            <span className={s.month}>{monthsArray[props.currentDate.getMonth()]} </span>
                            <span className={s.year}>{props.currentDate.getYear() + 1900}</span>
                        </div>
                        {isAdmin &&
                            <div className={s.currentDoctor}>
                                Doctor:
                                <span>
                                    {currentDoctorName}
                                    </span>
                            </div>
                        }
                    </div>
                </div>
                <div className={s.selectWeek}>
                    <span className={s.weekLabel}>Week: </span>
                    <button onClick={onPreviousWeek}>{"<"}</button>
                    <span>{weekDates.monday}</span>
                    -
                    <span>{weekDates.saturday}</span>
                    <button onClick={onNextWeek}>{">"}</button>
                </div>
            </div>
        </div>
    )
}

export default ScheduleHeader;