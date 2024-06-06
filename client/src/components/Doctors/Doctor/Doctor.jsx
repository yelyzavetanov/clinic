import React from "react";
import s from "./Doctor.module.css";

function Doctor(props) {
    return (
        <div className={s.doctor} onClick={() => props.setCurrentDoctor(props.doctor.username)}>
            <div><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsGxan5mk7UK1ZfjubYs_nbsdheb5kdWhiyg&s"}/></div>
            <div className={s.name}>{props.doctor.name}</div>
            <div>{props.doctor.specialization}</div>
            {/*<div>{props.doctor.username}</div>*/}
            <div className={s.description}>{props.doctor.description}</div>
        </div>
    )
}

export default Doctor;