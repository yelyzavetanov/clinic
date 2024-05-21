import React from "react";
import s from "./Header.module.css";
import search from "../../search.svg";
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header>
            <div className={s.inputContainer}>
                <img src={search}/>
                <input
                    className={s.searchInput}
                    placeholder={"Search patient..."}
                    value={props.patientsSearchFilter}
                    onChange={event => props.setPatientsSearchFilter(event.target.value)}
                />
            </div>
            <NavLink to={"/account"}>
                {props.isRegistered
                    ? <div className={s.userName}>@yelyznov</div>
                    : <button className={s.loginButton}>Log in</button>
                }
            </NavLink>
        </header>
    )
}

export default Header;