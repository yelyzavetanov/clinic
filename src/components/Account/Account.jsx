import React, {useState} from "react";
import s from "./Account.module.css";
import GrayLine from "../common/GrayLine/GrayLine";
import LogIn from "./LogIn/LogIn";
import CreateAccount from "./CreateAccount/CreateAccount";

function Account() {
    const [accountComponent, setAccountComponent] = useState("logIn");

    return (
        <div className={s.accountContainer}>
            <div className={s.account}>
                <div className={s.title}>Account</div>
                <GrayLine/>
                {accountComponent === "logIn" && <LogIn setAccountComponent={setAccountComponent}/>}
                {accountComponent === "createAccount" && <CreateAccount setAccountComponent={setAccountComponent}/>}
            </div>
        </div>
    )
}

export default Account;