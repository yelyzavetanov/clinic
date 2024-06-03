import React from "react";
import s from "./Clinic.module.css";
import GrayLine from "../common/GrayLine/GrayLine";
import ClinicInfo from "./ClinicInfo/ClinicInfo";
import RegisterClinic from "./RegisterClinic/RegisterClinic";

function Clinic(props) {
    return (
        <div className={s.clinicContainer}>
            <div className={s.clinic}>
                <div className={s.title}>Clinic</div>
                <GrayLine/>
                {props.isRegistered
                    ? <ClinicInfo isAdmin={props.isAdmin}/>
                    : <RegisterClinic/>
                }
            </div>
        </div>
    )
}

export default Clinic;