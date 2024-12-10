import React, {useState} from "react";
import s from "./RegisterClinic.module.css";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../../../reducers/clinicSlice";
import {generateRandomId} from "../../../idGenerator/generateRandomId";

function RegisterClinic() {
    const [clinicForm, setClinicForm] = useState({
        name: "",
        description: "",
        address: "",
        specialization: ""
    });

    const [error, setError] = useState("");

    const dispatch = useDispatch();

    const onClinicFormChange = (event) => {
        const {name, value} = event.target;
        setClinicForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onRegisterClinic = () => {
        if (Object.values(clinicForm).some(value => value.trim() === "")) {
            setError("All fields are required.");
            return;
        }

        dispatch(register({
            id: generateRandomId(),
            name: clinicForm.name,
            description: clinicForm.description,
            address: clinicForm.address,
            specialization: clinicForm.specialization
        }))
    }

    return (
        <div className={s.registerClinic}>
            <div className={s.title}>
                Register your clinic:
            </div>
            <div className={s.clinicForm}>
                <div className={s.formItem}>
                    <span>Name: </span>
                    <input
                        name={"name"}
                        value={clinicForm.name}
                        placeholder={"Your clinic name..."}
                        onChange={event => onClinicFormChange(event)}
                    />
                </div>
                <div className={s.formItem}>
                    <span>Description: </span>
                    <textarea
                        name={"description"}
                        value={clinicForm.description}
                        placeholder={"Your clinic description..."}
                        onChange={event => onClinicFormChange(event)}
                    ></textarea>
                </div>
                <div className={s.formItem}>
                    <span>Address: </span>
                    <input
                        name={"address"}
                        value={clinicForm.address}
                        placeholder={"Your clinic address..."}
                        onChange={event => onClinicFormChange(event)}
                    />
                </div>
                <div className={s.formItem}>
                    <span>Specialization: </span>
                    <input
                        name={"specialization"}
                        value={clinicForm.specialization}
                        placeholder={"Your clinic specialization..."}
                        onChange={event => onClinicFormChange(event)}
                    />
                </div>
                {error &&
                    <div className={s.error}>{error}</div>
                }
                <div className={s.buttonsContainer}>
                    <button className={s.registerClinicButton} onClick={onRegisterClinic}>Register clinic</button>
                </div>
            </div>
        </div>
    )
}

export default RegisterClinic;