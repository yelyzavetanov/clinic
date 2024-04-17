import React from "react";
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
                        <div className={s.linkContainer}><a href={""}>Schedule</a></div>
                        <div className={s.linkContainer}><a href={""}>Patients</a></div>
                        <div className={s.linkContainer}><a href={""}>Account</a></div>
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