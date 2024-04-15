import React from "react";
import s from "./ScheduleItem.module.css";

function ScheduleItem(props) {
    return (
        <div className={props.patient ? s.scheduleActiveItem : s.scheduleItem}>
            {props.patient &&
                <>
                    <div>{props.patient}</div>
                    <div>{props.description}</div>
                </>
            }
            <div className={s.time}>{props.time}</div>
        </div>
    )
}

export default ScheduleItem;