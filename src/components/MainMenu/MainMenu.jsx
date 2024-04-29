import React, {useState} from "react";
import s from "./MainMenu.module.css";
import Logo from "../common/Logo/Logo";

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