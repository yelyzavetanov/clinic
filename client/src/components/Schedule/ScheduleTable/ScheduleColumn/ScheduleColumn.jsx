import React from "react";
import s from "./ScheduleColumn.module.css";
import ScheduleItem from "./ScheduleItem/ScheduleItem";

function ScheduleColumn(props) {
    return(
        <div className={s.scheduleColumn}>
            {props.dayInfo.map(e =>
                <ScheduleItem
                    patient={e.patient}
                    description={e.description}
                    time={e.time}
                    color={e.color}
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