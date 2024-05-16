import React, {useState} from "react";
import s from "./Patient.module.css";
import PatientInfo from "./PatientInfo/PatientInfo";

function Patient(props) {
    const [isMoreInfo, setIsMoreInfo] = useState(false);

    return (
        <div className={isMoreInfo ? s.selectedPatient : s.patient}>
            <div className={s.patientHeader}>
                <div className={s.name}>{props.patient.name}</div>
                {!isMoreInfo &&
                    <div className={s.description}>
                        {props.patient.description}
                    </div>
                }
                <div className={isMoreInfo ? s.less : s.more}>
                    <button onClick={() => setIsMoreInfo(!isMoreInfo)}>
                        {isMoreInfo ? "Less" : "More"}
                    </button>
                </div>
            </div>
            {isMoreInfo && <PatientInfo patient={props.patient} />}
        </div>
    )
}

export default Patient;