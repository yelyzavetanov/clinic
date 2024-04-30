import React from "react";
import s from "./Account.module.css";
import GrayLine from "../common/GrayLine/GrayLine";
import LogIn from "./LogIn/LogIn";
import CreateAccount from "./CreateAccount/CreateAccount";
import {Route, Routes} from "react-router-dom";

function Account() {
    return (
        <div className={s.accountContainer}>
            <div className={s.account}>
                <div className={s.title}>Account</div>
                <GrayLine/>
                <Routes>
                    <Route path={"/account/createAccount"} element={<CreateAccount/>}/>
                    <Route path={"/account/login"} element={<LogIn/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default Account;