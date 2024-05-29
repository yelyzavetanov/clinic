import React, {useEffect, useState} from "react";
import s from "./Account.module.css";
import GrayLine from "../common/GrayLine/GrayLine";
import LogIn from "./LogIn/LogIn";
import CreateAccount from "./CreateAccount/CreateAccount";
import AccountInfo from "./AccountInfo/AccountInfo";
import {useSelector} from "react-redux";
import Loading from "../common/Loading/Loading";
import Error from "../common/Error/Error";

function Account(props) {
    const { loading, account, error } = useSelector(state => state.user);

    const [accountComponent, setAccountComponent] = useState("logIn");

    useEffect(() => {

    }, [account]);

    if (loading) return <Loading/>;
    if (error) return <Error errorMessage={error}/>;

    return (
        <div className={s.accountContainer}>
            <div className={s.account}>
                <div className={s.title}>Account</div>
                <GrayLine/>
                {account &&
                    <AccountInfo
                        setAccountComponent={setAccountComponent}
                        setIsRegistered={props.setIsRegistered}
                        account={account}
                    />
                }
                {!account && (accountComponent === "logIn") && <LogIn setAccountComponent={setAccountComponent}/>}
                {! account && (accountComponent === "createAccount") && <CreateAccount setAccountComponent={setAccountComponent}/>}
            </div>
        </div>
    )
}

export default Account;