import React from "react";
import s from "./Logo.module.css";

function Logo() {
    return (
        <div className={s.logo}>
            <div className={s.logoImg}>L</div>
            <div className={s.title}>Clinic</div>
        </div>
    )
}

export default Logo;