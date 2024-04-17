import React from "react";
import s from "./Logo.module.css";
import logo from "../../../logo.svg";

function Logo(props) {
    return (
        <div className={s.logo}>
            <div className={s.logoImg}><img src={logo}/></div>
            {props.isFullLogoShown &&
                <div className={s.title}>Clinic</div>
            }
        </div>
    )
}

export default Logo;