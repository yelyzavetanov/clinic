import React from "react";
import s from "./CreateAccount.module.css";

function CreateAccount(props) {
    return (
        <div className={s.createAccount}>
            <div className={s.title}>Create your account</div>
            <div className={s.createAccountForm}>
                <div>
                    <span>User Name: </span>
                    <input placeholder={"Enter your username..."}/>
                </div>
                <div>
                    <span>Password: </span>
                    <input type={"password"} placeholder={"Create your password..."}/>
                    <input type={"password"} placeholder={"Confirm your password..."}/>
                </div>
                <div className={s.buttonsContainer}>
                    <button className={s.createAccountButton}>Create account</button>
                    <button
                        className={s.logInButton}
                        onClick={() => props.setAccountComponent("logIn")}
                    >
                        Log in
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount;