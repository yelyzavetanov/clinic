import React from "react";
import s from "./MainMenu.module.css";
import Logo from "../common/Logo/Logo";
import scheduleIcon from "../../icons/system-regular-23-calendar.svg";
import patientsIcon from "../../icons/system-regular-19-book.svg";
import accountIcon from "../../icons/system-regular-63-settings-cog.svg";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

function MainMenu(props) {
    const account = useSelector(state => state.user.account);

    return (
        <div className={s.mainMenu}>
            {props.isFullMainMenuShown
                ?
                <div className={s.shownMenu}>
                    <div>
                        <div onClick={() => props.setIsFullMainMenuShown(false)}>
                            <Logo isFullLogoShown={true}/>
                        </div>
                        {account &&
                            <>
                                <NavLink
                                    to={"/"}
                                    className={({isActive}) => isActive ? s.selectedLinkContainer : s.linkContainer}
                                >
                                    <img src={scheduleIcon}/>
                                    <a>Schedule</a>
                                </NavLink>
                                <NavLink
                                    to={"/patients"}
                                    className={({isActive}) => isActive ? s.selectedLinkContainer : s.linkContainer}
                                >
                                    <img src={patientsIcon}/>
                                    <a>Patients</a>
                                </NavLink>
                            </>
                        }
                        <NavLink
                            to={"/account"}
                            className={({isActive}) => isActive ? s.selectedLinkContainer : s.linkContainer}
                        >
                            <img src={accountIcon}/>
                            <a>Account</a>
                        </NavLink>
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