import React from "react";
import s from "./LogIn.module.css";

function LogIn(props) {
    return (
        <div className={s.logInContainer}>
            <div className={s.logIn}>
                <div className={s.title}>Log into your account</div>
                <div className={s.logInForm}>
                    <div>
                        <span>User name: </span>
                        <input placeholder={"Your user name..."}/>
                    </div>
                    <div>
                        <span>Password: </span>
                        <input type={"password"} placeholder={"Your password..."}/>
                    </div>
                    <div className={s.buttonsContainer}>
                        <button className={s.logInButton}>Log In</button>
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