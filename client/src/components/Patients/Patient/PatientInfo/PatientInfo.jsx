import React, {useEffect, useState} from "react";
import s from "./PatientInfo.module.css";
import {useDispatch} from "react-redux";
import {deletePatient, editPatient, fetchPatients} from "../../../../reducers/patientsSlice";
import {format} from "date-fns";

function PatientInfo(props) {
    const [isEditMode, setIsEditMode] = useState(false);

    const [birthDate, setBirthDate] = useState(format(props.patient.birth_date, "dd.MM.yyyy"));
    const [description, setDescription] = useState(props.patient.description);
    const [problems, setProblems] = useState(props.patient.problems);
    const [treatment, setTreatment] = useState(props.patient.treatment);

    const [error, setError] = useState("");
    const [isDeleteMessage, setIsDeleteMessage] = useState(false);

    const dispatch = useDispatch();

    const onEditMode = () => {
        if (!isEditMode) {
            setIsEditMode(true);
        } else if (isEditMode && (!birthDate.length || !description.length || !problems.length || !treatment.length)) {
            setError("All fields are required.");
        } else if (isEditMode) {
            const updatedPatient = {
                id: props.patient.id,
                name: props.patient.name,
                description: description,
                problems: problems,
                treatment: treatment,
                birth_date: birthDate,
            }

            dispatch(editPatient({
                id: props.patient.id,
                updatedData: updatedPatient,
            }))
            dispatch(fetchPatients());

            setIsEditMode(false);
        }
    }

    const onDelete = () => {
        if (!isDeleteMessage) {
            setIsDeleteMessage(true);
        } else if (isDeleteMessage) {
            dispatch(deletePatient(props.patient.id));
            dispatch(fetchPatients());
        }
    }

    return (
        <div className={s.fullInfo}>
            <div className={s.year}>
                <span>Birth Date: </span>
                {isEditMode
                    ? <input
                        type={"date"}
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
                <div>
                    {error && <div className={s.error}>{error}</div>}
                    {isDeleteMessage &&
                        <div className={s.deleteMessage}>
                            Are you sure you want to delete this patient? All information will be lost.
                        </div>
                    }
                </div>
                <div>
                    {isDeleteMessage &&
                        <button className={s.canselButton} onClick={() => setIsDeleteMessage(false)}>Cansel</button>
                    }
                    <button className={isDeleteMessage ? s.sureDeleteButton : s.deleteButton} onClick={onDelete}>
                        Delete
                    </button>
                    <button className={s.editButton} onClick={onEditMode}>
                        {isEditMode ? "Save" : "Edit"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PatientInfo;