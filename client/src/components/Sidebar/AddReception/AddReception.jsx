import React, {useState} from 'react';
import s from "./AddReception.module.css";
import {useDispatch, useSelector} from "react-redux";
import Error from "../../common/Error/Error";
import {addReception} from "../../../reducers/scheduleSlice";

function AddReception(props) {
    const account = useSelector(state => state.user.account);
    const currentDoctorUsername = useSelector(state => state.schedule.currentDoctorUsername);
    const patients = useSelector(state => state.patient.patients);

    const [addReceptionFormState, setAddReceptionFormState] = useState({
        patient: "",
        type: "",
        date: "",
        time: "",
        color: "",
        description: "",
    });

    const [error, setError] = useState();

    const dispatch = useDispatch();

    const onFormChange = (event) => {
        const {name, value} = event.target;
        setAddReceptionFormState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    // console.log(account);

    const onAddReceptionButton = () => {
        if (Object.values(addReceptionFormState).some(value => value.trim() === "")) {
            console.log("error");
            setError("All fields are required.");
        } else if (props.status === "administrator") {
            dispatch(addReception({
                id: crypto.randomUUID(),
                patient: addReceptionFormState.patient,
                type: addReceptionFormState.type,
                date: addReceptionFormState.date,
                time: addReceptionFormState.time,
                color: addReceptionFormState.color,
                description: addReceptionFormState.description,
                doctor_username: currentDoctorUsername,
            }));
            // console.log(addReceptionFormState);
            props.setIsAddReceptionForm(false);
        } else if (account) {
            dispatch(addReception({
                id: crypto.randomUUID(),
                patient: addReceptionFormState.patient,
                type: addReceptionFormState.type,
                date: addReceptionFormState.date,
                time: addReceptionFormState.time,
                color: addReceptionFormState.color,
                description: addReceptionFormState.description,
                doctor_username: account.username,
            }));
            // console.log(addReceptionFormState);
            props.setIsAddReceptionForm(false);
        } else {
            return <Error errorMessage={"Something went wrong."}/>;
        }
    }

    const getSelectClassName = () => {
        switch (addReceptionFormState.color) {
            case "red": return s.red;
            case "blue": return s.blue;
            case "purple": return s.purple;
            case "green": return s.green;
        }
    }

    return (
        <div className={s.addReception}>
            <div className={s.addReceptionHeader}>
                <div className={s.titleReception}>
                    Add reception
                </div>
                <button className={s.closeButton} onClick={() => props.setIsAddReceptionForm(false)}>
                    Close
                </button>
            </div>
            <div className={s.contentReception}>
                <div className={s.patient}>
                    <span>Patient:</span>
                    <select
                        name={"patient"}
                        type=""
                        value={addReceptionFormState.patient}
                        onChange={event => onFormChange(event)}
                    >
                        {patients.map(e => <option>{e.name}</option>)}
                    </select>
                </div>
                <div className={s.type}>
                    Type:
                    <select
                        name={"type"}
                        value={addReceptionFormState.type}
                        type=""
                        onChange={event => onFormChange(event)}
                    >
                        <option>consultation</option>
                        <option>operation</option>
                        <option>else</option>
                    </select>
                </div>
                <div className={s.time}>
                    Date:
                    <input
                        name={"date"}
                        value={addReceptionFormState.date}
                        type={"date"}
                        onChange={event => onFormChange(event)}
                    />
                </div><div className={s.time}>
                    Time:
                    <input
                        name={"time"}
                        type={"time"}
                        value={addReceptionFormState.time}
                        onChange={event => onFormChange(event)}
                    />
                </div>
                <div className={s.selectColor}>
                    <span>Color:</span>
                    <select
                        name={"color"}
                        className={getSelectClassName()}
                        value={addReceptionFormState.color}
                        type=""
                        onChange={event => onFormChange(event)}
                    >
                        <option>green</option>
                        <option>blue</option>
                        <option>purple</option>
                        <option>red</option>
                    </select>
                </div>
                <div className={s.description}>
                    <span>Description:</span>
                    <textarea
                        placeholder={"Describe this reception..."}
                        name={"description"}
                        value={addReceptionFormState.description}
                        type=""
                        onChange={event => onFormChange(event)}
                    >
                    </textarea>
                </div>
            </div>
            {error &&
                <div className={s.error}>{error}</div>
            }
            <div className={s.buttonContainer}>
                <button className={s.receptionButton} onClick={onAddReceptionButton}>
                    Add reception
                </button>
            </div>
        </div>


    )
}

export default AddReception;