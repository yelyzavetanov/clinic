import React, {useState} from "react";
import s from "./CreateAccount.module.css";
import {useDispatch} from "react-redux";
import {signUp} from "../../../reducers/usersSlice";

function CreateAccount(props) {
    const [formState, setFormState] = useState({
        username: "",
        name: "",
        clinic: "",
        specialization: "",
        status: "user",
        description: "",
        password: "",
        confirmPassword: ""
    })

    const [error, setError] = useState("");

    const dispatch = useDispatch();

    const onFormChange = (event) => {
        const {name, value} = event.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const onCreateAccount = () => {
        if (formState.password !== formState.confirmPassword) {
            setError("Your passwords do not match.");
        } else if (Object.values(formState).some(value => value.trim() === "")) {
            setError("All fields are required.");
        } else {
            dispatch(signUp({
                id: crypto.randomUUID(),
                username: formState.username,
                name: formState.name,
                clinic: formState.clinic,
                status: formState.status,
                specialization: formState.specialization,
                description: formState.description,
                password: formState.password
            }));
        }
    }

    return (
        <div className={s.createAccount}>
            <div className={s.title}>Create your account</div>
            <div className={s.createAccountForm}>
                <div className={s.formInnerContainer}>
                    <div>
                        <span>User name: </span>
                        <input
                            name={"username"}
                            placeholder={"Enter your username..."}
                            value={formState.username}
                            onChange={onFormChange}
                        />
                    </div>

                    <div>
                        <span>Clinic name: </span>
                        <input
                            name={"clinic"}
                            placeholder={"Enter your clinic name..."}
                            value={formState.clinic}
                            onChange={onFormChange}
                        />
                    </div>
                    <div>
                        <span>Description: </span>
                        <textarea
                            name={"description"}
                            placeholder={"Some information about you..."}
                            value={formState.description}
                            onChange={onFormChange}
                        ></textarea>
                    </div>
                    <div>
                        <span>Password: </span>
                        <input
                            name={"password"}
                            type={"password"}
                            placeholder={"Create your password..."}
                            value={formState.password}
                            onChange={onFormChange}
                        />
                        <input
                            name={"confirmPassword"}
                            type={"password"}
                            placeholder={"Confirm your password..."}
                            value={formState.confirmPassword}
                            onChange={onFormChange}
                        />
                    </div>
                    {error &&
                        <div className={s.error}>{error}</div>
                    }
                    <div className={s.buttonsContainer}>
                        <button className={s.createAccountButton} onClick={onCreateAccount}>Create account</button>
                        <button
                            className={s.logInButton}
                            onClick={() => props.setAccountComponent("logIn")}
                        >
                            Log in
                        </button>
                    </div>
                </div>
                <div className={s.formInnerContainer}>
                    <div>
                        <span>Full name: </span>
                        <input
                            name={"name"}
                            placeholder={"Enter your full name..."}
                            value={formState.name}
                            onChange={onFormChange}
                        />
                    </div>
                    <div>
                        <span>Specialization: </span>
                        <input
                            name={"specialization"}
                            placeholder={"Enter your specialization..."}
                            value={formState.specialization}
                            onChange={onFormChange}
                        />
                    </div>
                    <div>
                        <span>Status: </span>
                        <select
                            name={"status"}
                            placeholder={"Enter your specialization..."}
                            value={formState.status}
                            onChange={onFormChange}
                        >
                            <option>doctor</option>
                            <option>administrator</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount;