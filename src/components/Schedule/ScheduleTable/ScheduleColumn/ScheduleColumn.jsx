import React from "react";
import s from "./ScheduleColumn.module.css";
import ScheduleItem from "./ScheduleItem/ScheduleItem";

function ScheduleColumn(props) {
    return(
        <div className={s.ScheduleColumn}>
            {props.dayInfo.map(e =>
                <ScheduleItem patient={e.patient} description={e.description} time={e.time} key={props.dayInfo.indexOf(e)}/>
            )}
        </div>
    )
}

export default ScheduleColumn;