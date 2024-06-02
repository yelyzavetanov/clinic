import React from "react";
import s from "./DoctorInfo.module.css";
import {NavLink} from "react-router-dom";

function DoctorInfo(props) {
    return (
        <div className={s.doctorInfo}>
            <div><img src={props.doctor.photo}/></div>
            <div className={s.name}>{props.doctor.name}</div>
            <div>@{props.doctor.username}</div>
            <div>
                <span>Clinic: </span>
                {props.doctor.clinic}
            </div>
            <div>
                <span>Specialization: </span>
                {props.doctor.specialization}
            </div>
            <div>
                <span>Description: </span>
                {props.doctor.description}
            </div>
            <div>
                <NavLink to={"/schedule"}>
                    <button className={s.viewScheduleButton} onClick={() => props.setCurrentDoctor(null)}>
                        View schedule
                    </button>
                </NavLink>
                <button className={s.backButton} onClick={() => props.setCurrentDoctor(null)}>Back</button>
            </div>
        </div>
    )
}

export default DoctorInfo;