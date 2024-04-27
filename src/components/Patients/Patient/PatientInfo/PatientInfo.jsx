import React, {useState} from "react";
import s from "./PatientInfo.module.css";

function PatientInfo(props) {
    const [isEditMode, setIsEditMode] = useState(false);

    return (
        <div className={s.fullInfo}>
            <div className={s.year}>
                <span>Birth Date: </span>
                {isEditMode
                    ? <input value={props.patient.year}/>
                    : props.patient.year
                }
            </div>
            <div className={s.description}>
                <span>Description: </span>
                {isEditMode
                    ? <textarea placeholder={"Patient description..."}>{props.patient.description}</textarea>
                    : props.patient.description
                }
            </div>
            <div className={s.problem}>
                <span>Problems: </span>
                {isEditMode
                    ? <textarea placeholder={"Patient problems..."}>{props.patient.problem}</textarea>
                    : props.patient.problem
                }
            </div>
            <div className={s.treatmentContainer}>
                <div className={s.treatment}>
                    <span>Treatment: </span>
                    {isEditMode
                        ? <textarea placeholder={"Patient treatment..."}>{props.patient.treatment}</textarea>
                        : props.patient.treatment
                    }
                </div>
                <button className={s.editButton} onClick={() => setIsEditMode(!isEditMode)}>
                    {isEditMode ? "Save" : "Edit"}
                </button>
            </div>
        </div>
    )
}

export default PatientInfo;