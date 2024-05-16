import React, {useState} from "react";
import s from "./PatientInfo.module.css";

function PatientInfo(props) {
    const [isEditMode, setIsEditMode] = useState(false);

    const [birthDate, setBirthDate] = useState(props.patient.year);
    const [description, setDescription] = useState(props.patient.description);
    const [problems, setProblems] = useState(props.patient.problem);
    const [treatment, setTreatment] = useState(props.patient.treatment);

    return (
        <div className={s.fullInfo}>
            <div className={s.year}>
                <span>Birth Date: </span>
                {isEditMode
                    ? <input
                        onChange={event => setBirthDate(event.target.value)}
                        value={birthDate}
                    />
                    : birthDate
                }
            </div>
            <div className={s.description}>
                <span>Description: </span>
                {isEditMode
                    ? <textarea
                        placeholder={"Patient description..."}
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                    ></textarea>
                    : description
                }
            </div>
            <div className={s.problem}>
                <span>Problems: </span>
                {isEditMode
                    ? <textarea
                        placeholder={"Patient problems..."}
                        value={problems}
                        onChange={event => setProblems(event.target.value)}
                    >{problems}</textarea>
                    : problems
                }
            </div>
            <div className={s.treatmentContainer}>
                <div className={s.treatment}>
                    <span>Treatment: </span>
                    {isEditMode
                        ? <textarea
                            placeholder={"Patient treatment..."}
                            value={treatment}
                            onChange={event => setTreatment(event.target.value)}
                        >{treatment}</textarea>
                        : treatment
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