import React from "react";
import s from "./ScheduleTable.module.css";
import ScheduleColumn from "./ScheduleColumn/ScheduleColumn";
import {generateEmptyWeek} from "../../../scheduleFuntions/sortSchedule";
import {format} from "date-fns";
import {generateRandomId} from "../../../idGenerator/generateRandomId";

function ScheduleTable(props) {
    // console.log(props.scheduleArray, props.mondayDate);

    // const isToday = props.weekArray

    const emptyWeek = generateEmptyWeek();

    return (
        <div className={s.scheduleTable}>
            {props.scheduleArray[props.mondayDate]
                ? props.scheduleArray[props.mondayDate].map(e =>
                    <ScheduleColumn
                        isToday={props.weekArray.find(d => d.weekDay === e.day).date === format(props.currentDate, "yyyy-MM-dd")}
                        setCurrentReceptionInfo={props.setCurrentReceptionInfo}
                        setIsReceptionInfo={props.setIsReceptionInfo}
                        setIsAddPatientForm={props.setIsAddPatientForm}
                        setIsAddReceptionForm={props.setIsAddReceptionForm}
                        dayInfo={e.receptions} key={generateRandomId()}
                    />
                )
                : emptyWeek.map(e =>
                    <ScheduleColumn
                        isToday={props.weekArray.find(d => d.weekDay === e.day).date === format(props.currentDate, "yyyy-MM-dd")}
                        setCurrentReceptionInfo={props.setCurrentReceptionInfo}
                        setIsReceptionInfo={props.setIsReceptionInfo}
                        setIsAddPatientForm={props.setIsAddPatientForm}
                        setIsAddReceptionForm={props.setIsAddReceptionForm}
                        dayInfo={e.receptions} key={generateRandomId()}
                    />)
            }
        </div>
    )
}

export default ScheduleTable;