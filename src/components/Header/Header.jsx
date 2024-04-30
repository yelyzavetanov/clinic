import React from "react";
import s from "./Header.module.css";
import search from "../../search.svg";
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <header>
            <NavLink to={"/account"} className={s.inputContainer}>
                <img src={search}/>
                <input className={s.searchInput} placeholder={"Search patient..."}/>
            </NavLink>
            <button className={s.loginButton}>Log in</button>
        </header>
    )
}

export default Header;