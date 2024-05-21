import React, {useState} from 'react';
import s from "./AddPatient.module.css";
import GrayLine from "../../common/GrayLine/GrayLine";
import {useDispatch} from "react-redux";
import {addPatient} from "../../../reducers/patientsSlice";

function AddPatient(props) {
    const [name, setName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [description, setDescription] = useState("");
    const [problems, setProblems] = useState("");
    const [treatment, setTreatment] = useState("");

    const [error, setError] = useState("");

    const dispatch = useDispatch();

    const generateId = () => {
        const timestamp = Date.now();
        const randomNum = Math.floor(Math.random() * 1000000);
        return `${timestamp}${randomNum}`;
    }

    const onAddPatientButton = () => {
        if (!name || !description || !problems || !treatment || !birthDate) {
            setError("All fields are required.");
        } else {
            const newPatient = {
                id: generateId(),
                name: name,
                description: description,
                problems: problems,
                treatment: treatment,
                birth_date: birthDate,
            };

            dispatch(addPatient(newPatient));
            props.setIsAddPatientForm(false);
        }
    }

    // generateId();
    // console.log(generateId());

    return (
        <div className={s.addPatient}>
            <div className={s.addPatientFormHeader}>
                <div className={s.title}>
                    Add patient
                </div>
                <div>
                    <button className={s.closeButton} onClick={() => props.setIsAddPatientForm(false)}>
                        Close
                    </button>
                </div>
            </div>
            <GrayLine/>
            <div className={s.addPatientForm}>
                <div>
                    <span>Name: </span>
                    <input
                        placeholder={"Patient name..."}
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                </div>
                <div>
                    <span>Birth date: </span>
                    <input
                        placeholder={"Patient birthday date..."}
                        value={birthDate}
                        onChange={event => setBirthDate(event.target.value)}
                    />
                </div>
                <div>
                    <span>Description: </span>
                    <textarea
                        placeholder={"Patient description..."}
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                    ></textarea>
                </div>
                <div>
                    <span>Problems: </span>
                    <textarea
                        placeholder={"Patient problems..."}
                        value={problems}
                        onChange={event => setProblems(event.target.value)}
                    ></textarea>
                </div>
                <div>
                    <span>Treatment: </span>
                    <textarea
                        placeholder={"Patient treatment..."}
                        value={treatment}
                        onChange={event => setTreatment(event.target.value)}
                    ></textarea>
                </div>
                {error &&
                    <div className={s.error}>{error}</div>
                }
                <div>
                    <button className={s.addPatientButton} onClick={onAddPatientButton}>
                        Add patient
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddPatient;