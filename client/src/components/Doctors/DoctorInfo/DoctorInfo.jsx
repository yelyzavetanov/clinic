import React from "react";
import s from "./DoctorInfo.module.css";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCurrentDoctorUsername} from "../../../reducers/scheduleSlice";

function DoctorInfo(props) {

    const dispatch = useDispatch();

    const onViewScheduleButton = () => {
        dispatch(setCurrentDoctorUsername(props.doctor.username));
        props.setCurrentDoctor(null);
    }

    return (
        <div className={s.doctorInfo}>
            <div><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsGxan5mk7UK1ZfjubYs_nbsdheb5kdWhiyg&s"}/></div>
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
                    <button className={s.viewScheduleButton} onClick={onViewScheduleButton}>
                        View schedule
                    </button>
                </NavLink>
                <button className={s.backButton} onClick={() => props.setCurrentDoctor(null)}>Back</button>
            </div>
        </div>
    )
}

export default DoctorInfo;