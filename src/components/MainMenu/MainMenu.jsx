import React from "react";
import s from "./MainMenu.module.css";
import Logo from "../common/Logo/Logo";

function MainMenu() {
    return (
        <div className={s.mainMenu}>
            <div>
                <Logo/>
                <div className={s.linkContainer}><a href={""}>Dashboard</a></div>
                <div className={s.linkContainer}><a href={""}>Calendar</a></div>
                <div className={s.linkContainer}><a href={""}>Homework</a></div>
                <div className={s.linkContainer}><a href={""}>Message</a></div>
            </div>
            <div>
                <div className={s.linkContainer}><a href={""}>Settings</a></div>
                <div className={s.linkContainer}><a href={""}>Help</a></div>
            </div>
        </div>
    )
}

export default MainMenu;