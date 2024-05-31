import React from "react";
import s from "./Header.module.css";
import search from "../../search.svg";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

function Header(props) {
    const username = useSelector(
        (state) => {
            if (state.user.account) {
                return state.user.account.username;
            } else {
                return null
            }
        }
    );

    return (
        <header>
            <NavLink to={"/patients"}>
                <div className={s.inputContainer}>
                    <img src={search}/>
                    <input
                        className={s.searchInput}
                        placeholder={"Search patient..."}
                        value={props.patientsSearchFilter}
                        onChange={event => props.setPatientsSearchFilter(event.target.value)}
                    />
                </div>
            </NavLink>
            <NavLink to={"/account"}>
                {username
                    ? <div className={s.userName}>@{username}</div>
                    : <button className={s.loginButton}>Log in</button>
                }
            </NavLink>
        </header>
    )
}

export default Header;