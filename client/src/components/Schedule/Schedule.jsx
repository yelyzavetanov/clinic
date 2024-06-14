import React, {useEffect, useState} from "react";
import s from "./Shedule.module.css";
import ScheduleHeader from "./ScheduleHeader/ScheduleHeader";
import WeekScale from "./WeekScale/WeekScale";
import TimeScale from "./TimeScale/TimeScale";
import ScheduleTable from "./ScheduleTable/ScheduleTable";
import GrayLine from "../common/GrayLine/GrayLine";
import {useDispatch, useSelector} from "react-redux";
import {fetchSchedule} from "../../reducers/scheduleSlice";
import {transformReceptions} from "../../scheduleFuntions/sortSchedule";
import Message from "../common/Message/Message";
import {getWeekArray} from "../../scheduleFuntions/getWeekDates";

function Schedule(props) {
    const doctorUsername = useSelector(state => state.schedule.currentDoctorUsername);
    const account = useSelector(state => state.user.account);
    const dispatch = useDispatch();

    const currentDate = useSelector(state => state.schedule.currentDate);
    const [shownDate, setShownDate] = useState(currentDate);
    const weekArray = getWeekArray(shownDate);

    let receptions = useSelector(state => state.schedule.schedule);
    let scheduleArray = [];

    useEffect(() => {
        if (props.status === "administrator") {
            dispatch(fetchSchedule(doctorUsername));
        } else if (props.status === "doctor" && account) {
            dispatch(fetchSchedule(account.username));
        }

    }, [doctorUsername, dispatch]);

    if (receptions.length > 0) {
        scheduleArray = transformReceptions(receptions);
    }

    if (!receptions.length && props.status === "administrator") {
        return (<Message message={"Please, select a doctor to see the schedule."}/>);
    }

    return (
        <div className={s.scheduleContainer}>
            <div className={s.schedule}>
                <ScheduleHeader
                    currentDate={currentDate}
                    shownDate={shownDate}
                    setShownDate={setShownDate}
                    setIsAddReceptionForm={props.setIsAddReceptionFrom}
                    setIsAddPatientForm={props.setIsAddPatientForm}
                    setIsReceptionInfo={props.setIsReceptionInfo}
                />
                <GrayLine/>
                <WeekScale
                    weekArray={weekArray}
                    currentDate={currentDate}
                />
                <div className={s.scheduleVerticalContainer}>
                    <TimeScale/>
                    <ScheduleTable
                        mondayDate={weekArray[0].date}
                        scheduleArray={scheduleArray}
                        setCurrentReceptionInfo={props.setCurrentReceptionInfo}
                        setIsReceptionInfo={props.setIsReceptionInfo}
                        setIsAddPatientForm={props.setIsAddPatientForm}
                        setIsAddReceptionForm={props.setIsAddReceptionFrom}
                    />
                </div>
            </div>
        </div>
    )
}

export default Schedule;