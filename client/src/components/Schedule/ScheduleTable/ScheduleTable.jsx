import React, {useEffect} from "react";
import s from "./ScheduleTable.module.css";
import ScheduleColumn from "./ScheduleColumn/ScheduleColumn";
import {generateSchedule} from "../../../scheduleGenerator/scheduleGenerator";
import {transformReceptions} from "../../../scheduleFuntions/sortSchedule";
import {useSelector} from "react-redux";

function ScheduleTable(props) {
    // const receptions = [
    //     {
    //         date: "2024-06-10",
    //         time: "10:00",
    //         patient: "Novikova Yelyzaveta",
    //         description: "make kursash",
    //         type: "consultation",
    //         color: "green"
    //     },
    //     {
    //         date: "2024-06-10",
    //         time: "09:00",
    //         patient: "Petrenko Ivan",
    //         description: "routine check-up",
    //         type: "consultation",
    //         color: "blue"
    //     },
    //     {
    //         date: "2024-06-11",
    //         time: "11:00",
    //         patient: "Ivanov Petro",
    //         description: "consultation",
    //         type: "consultation",
    //         color: "purple"
    //     }
    // ];

    // const currentDoctorUsername = useSelector(state => state.schedule.currentDoctorUsername);
    // const receptions = useSelector(state => state.schedule.schedule);
    // const scheduleArray = transformReceptions(receptions);
    //
    // useEffect(() => {
    //
    // }, [currentDoctorUsername]);

    // console.log(scheduleArray);


    return (
        <div className={s.scheduleTable}>
            {props.scheduleArray.map(e =>
                <ScheduleColumn
                    setCurrentReceptionInfo={props.setCurrentReceptionInfo}
                    setIsReceptionInfo={props.setIsReceptionInfo}
                    setIsAddPatientForm={props.setIsAddPatientForm}
                    setIsAddReceptionForm={props.setIsAddReceptionForm}
                    dayInfo={e.receptions} key={props.scheduleArray.indexOf(e)}
                />
            )}
        </div>
    )
}

export default ScheduleTable;