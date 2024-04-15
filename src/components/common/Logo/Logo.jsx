import React from "react";
import s from "./Logo.module.css";
import logo from "../../../logo.svg";

function Logo() {
    return (
        <div className={s.logo}>
            <div className={s.logoImg}><img src={logo}/></div>
            <div className={s.title}>Clinic
                {/*<span>PRO</span>*/}
                </div>
        </div>
    )
}

export default Logo;