import React from "react";
import s from "./Doctor.module.css";

function Doctor(props) {
    return (
        <div className={s.doctor} onClick={() => props.setCurrentDoctor(props.doctor.username)}>
            <div><img src={props.doctor.photo}/></div>
            <div className={s.name}>{props.doctor.name}</div>
            <div>{props.doctor.specialization}</div>
            {/*<div>{props.doctor.username}</div>*/}
            <div className={s.description}>{props.doctor.description}</div>
        </div>
    )
}

export default Doctor;