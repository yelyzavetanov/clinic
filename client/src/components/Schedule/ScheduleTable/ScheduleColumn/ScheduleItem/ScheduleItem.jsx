import React from "react";
import s from "./ScheduleItem.module.css";

function ScheduleItem(props) {
    const onItemClick = () => {
        props.setIsAddPatientForm(false);
        props.setIsAddReceptionForm(false);
        props.setIsReceptionInfo(true);
    }

    return (
        <div
            className={props.patient ? s.scheduleActiveItem : s.scheduleItem}
            onClick={onItemClick}
        >
            {props.patient &&
                <div className={s.patientInfo}>
                    <div className={s.patient}>{props.patient}</div>
                    <div className={s.description}>{props.description}</div>
                </div>
            }
            <div> </div>
            <div className={s.time}>{props.time}</div>
        </div>
    )
}

export default ScheduleItem;