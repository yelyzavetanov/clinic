import React from "react";
import s from "./Header.module.css";
import search from "../../search.svg";

function Header() {
    return (
        <header>
            <div className={s.inputContainer}>
                <img src={search}/>
                <input className={s.searchInput} placeholder={"Search patient..."}/>
            </div>
            <button className={s.loginButton}>Log in</button>
        </header>
    )
}

export default Header;