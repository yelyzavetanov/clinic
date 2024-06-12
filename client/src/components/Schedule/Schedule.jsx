import React, {useEffect} from "react";
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

function Schedule(props) {

    const doctorUsername = useSelector(state => state.schedule.currentDoctorUsername);
    const dispatch = useDispatch();

    let receptions = useSelector(state => state.schedule.schedule);
    let scheduleArray = [];

    useEffect(() => {
        dispatch(fetchSchedule(doctorUsername));

    }, [doctorUsername, dispatch]);


    // console.log(receptions.length > 0);

    if (receptions.length > 0) {
        // console.log(receptions);
        scheduleArray = transformReceptions(receptions);
        // console.log(scheduleArray);
    }

    if (!receptions.length) {
        return (<Message message={"something went wrong"}/>);
    }

    return (
        <div className={s.scheduleContainer}>
            <div className={s.schedule}>
                <ScheduleHeader
                    setIsAddReceptionForm={props.setIsAddReceptionFrom}
                    setIsAddPatientForm={props.setIsAddPatientForm}
                    setIsReceptionInfo={props.setIsReceptionInfo}
                />
                <GrayLine/>
                <WeekScale/>
                <div className={s.scheduleVerticalContainer}>
                    <TimeScale/>
                    <ScheduleTable
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