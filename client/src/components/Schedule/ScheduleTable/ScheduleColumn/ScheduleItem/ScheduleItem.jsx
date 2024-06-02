import React, {useState} from "react";
import s from "./ScheduleItem.module.css";

function ScheduleItem(props) {
    const [itemColor] = useState(props.color);

    const onItemClick = () => {
        props.setIsAddPatientForm(false);
        props.setIsAddReceptionForm(false);
        props.setIsReceptionInfo(true);
    }

    const getItemClassName = () => {
        switch (props.color) {
            case "red": return s.scheduleActiveItemRed;
            case "blue": return s.scheduleActiveItemBlue;
            case "green": return s.scheduleActiveItemGreen;
            case "purple": return s.scheduleActiveItemPurple;
        }
    }

    return (
        <div
            className={props.patient ? getItemClassName() : s.scheduleItem}
            onClick={onItemClick}
        >
            {props.patient &&
                <div className={s.patientInfo}>
                    <div className={s.patient}>{props.patient}</div>
                    <div className={s.description}>{props.description}</div>
                    <div className={s.description}>{props.color}</div>
                </div>
            }
            <div> </div>
            <div className={s.time}>{props.time}</div>
        </div>
    )
}

export default ScheduleItem;