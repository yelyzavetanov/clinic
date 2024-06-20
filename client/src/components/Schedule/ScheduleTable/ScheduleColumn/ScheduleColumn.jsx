import React from "react";
import s from "./ScheduleColumn.module.css";
import ScheduleItem from "./ScheduleItem/ScheduleItem";

function ScheduleColumn(props) {
    return(
        <div className={s.scheduleColumn}>
            {props.dayInfo.map(e =>
                <ScheduleItem
                    isToday={props.isToday}
                    setCurrentReceptionInfo={props.setCurrentReceptionInfo}
                    receptionInfo={e}
                    key={props.dayInfo.indexOf(e)}
                    setIsReceptionInfo={props.setIsReceptionInfo}
                    setIsAddPatientForm={props.setIsAddPatientForm}
                    setIsAddReceptionForm={props.setIsAddReceptionForm}
                />
            )}
        </div>
    )
}

export default ScheduleColumn;