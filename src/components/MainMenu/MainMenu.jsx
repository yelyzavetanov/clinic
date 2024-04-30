import React from "react";
import s from "./MainMenu.module.css";
import Logo from "../common/Logo/Logo";
import scheduleIcon from "../../icons/system-regular-23-calendar.svg";
import patientsIcon from "../../icons/system-regular-19-book.svg";
import accountIcon from "../../icons/system-regular-63-settings-cog.svg";

function MainMenu(props) {
    return (
        <div className={s.mainMenu}>
            {props.isFullMainMenuShown
                ?
                <div className={s.shownMenu}>
                    <div>
                        <div onClick={() => props.setIsFullMainMenuShown(false)}>
                            <Logo isFullLogoShown={true}/>
                        </div>
                        <div className={s.linkContainer}>
                            <img src={scheduleIcon}/>
                            <a href={""}>Schedule</a>
                        </div>
                        <div className={s.linkContainer}>
                            <img src={patientsIcon}/>
                            <a href={""}>Patients</a>
                        </div>
                        <div className={s.linkContainer}>
                            <img src={accountIcon}/>
                            <a href={""}>Account</a>
                        </div>
                    </div>
                </div>
                :
                <div
                    className={s.hiddenMenu}
                    onClick={() => props.setIsFullMainMenuShown(true)}
                >
                    <Logo isFullLogoShown={false}/>
                </div>
            }
        </div>
    )
}

export default MainMenu;