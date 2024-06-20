import React, {useState} from "react";
import s from "./LogIn.module.css";
import {useDispatch} from "react-redux";
import {logIn} from "../../../reducers/usersSlice";

function LogIn(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const dispatch = useDispatch();

    const onLogIn = () => {
        if (!username.length || !password.length) {
            setError("All fields are required.");
        } else {
            dispatch(logIn({
                username: username,
                password: password
            }));
        }
    }

    return (
        <div className={s.logInContainer}>
            <div className={s.logIn}>
                <div className={s.title}>Log into your account</div>
                <div className={s.logInForm}>
                    <div>
                        <span>User name: </span>
                        <input
                            placeholder={"Your user name..."}
                            value={username}
                            onChange={event => setUsername(event.target.value)}
                        />
                    </div>
                    <div>
                        <span>Password: </span>
                        <input
                            type={"password"}
                            placeholder={"Your password..."}
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                        />
                    </div>
                    {error &&
                        <div className={s.error}>{error}</div>
                    }
                    <div className={s.buttonsContainer}>
                        <button className={s.logInButton} onClick={onLogIn}>Log In</button>
                        <button className={s.createAccountButton}
                                onClick={() => props.setAccountComponent("createAccount")}
                        >
                            Create account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn;