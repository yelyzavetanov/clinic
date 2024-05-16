import React, {useState} from "react";
import s from "./Account.module.css";
import GrayLine from "../common/GrayLine/GrayLine";
import LogIn from "./LogIn/LogIn";
import CreateAccount from "./CreateAccount/CreateAccount";
import AccountInfo from "./AccountInfo/AccountInfo";

function Account(props) {
    const [accountComponent, setAccountComponent] = useState("accountInfo");

    return (
        <div className={s.accountContainer}>
            <div className={s.account}>
                <div className={s.title}>Account</div>
                <GrayLine/>
                {props.isRegistered &&
                    <AccountInfo
                        setAccountComponent={setAccountComponent}
                        setIsRegistered={props.setIsRegistered}
                    />
                }
                {(!props.isRegistered && accountComponent === "logIn") && <LogIn setAccountComponent={setAccountComponent}/>}
                {(!props.isRegistered && accountComponent === "createAccount") && <CreateAccount setAccountComponent={setAccountComponent}/>}
            </div>
        </div>
    )
}

export default Account;