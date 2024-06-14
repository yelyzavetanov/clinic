import React from "react";
import s from "./ScheduleTable.module.css";
import ScheduleColumn from "./ScheduleColumn/ScheduleColumn";
import {generateEmptyWeek} from "../../../scheduleFuntions/sortSchedule";

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

    console.log(props.scheduleArray, props.mondayDate);

    const emptyWeek = generateEmptyWeek();

    return (
        <div className={s.scheduleTable}>
            {props.scheduleArray[props.mondayDate]
                ? props.scheduleArray[props.mondayDate].map(e =>
                    <ScheduleColumn
                        setCurrentReceptionInfo={props.setCurrentReceptionInfo}
                        setIsReceptionInfo={props.setIsReceptionInfo}
                        setIsAddPatientForm={props.setIsAddPatientForm}
                        setIsAddReceptionForm={props.setIsAddReceptionForm}
                        dayInfo={e.receptions} key={crypto.randomUUID()}
                    />
                )
                : emptyWeek.map(e =>
                    <ScheduleColumn
                        setCurrentReceptionInfo={props.setCurrentReceptionInfo}
                        setIsReceptionInfo={props.setIsReceptionInfo}
                        setIsAddPatientForm={props.setIsAddPatientForm}
                        setIsAddReceptionForm={props.setIsAddReceptionForm}
                        dayInfo={e.receptions} key={crypto.randomUUID()}
                    />)
            }
        </div>
    )
}

export default ScheduleTable;