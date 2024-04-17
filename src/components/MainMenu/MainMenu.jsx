import React from "react";
import s from "./MainMenu.module.css";
import Logo from "../common/Logo/Logo";

function MainMenu() {
    return (
        <div className={s.mainMenu}>
            <Logo/>
            <div className={s.linkContainer}><a href={""}>Schedule</a></div>
            <div className={s.linkContainer}><a href={""}>Patients</a></div>
            <div className={s.linkContainer}><a href={""}>Account</a></div>
        </div>
    )
}

export default MainMenu;