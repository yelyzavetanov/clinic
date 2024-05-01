import React from "react";
import s from "./Header.module.css";
import search from "../../search.svg";
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <header>
            <div className={s.inputContainer}>
                <img src={search}/>
                <input className={s.searchInput} placeholder={"Search patient..."}/>
            </div>
            <NavLink to={"/account"}>
                <button className={s.loginButton}>Log in</button>
            </NavLink>
        </header>
    )
}

export default Header;