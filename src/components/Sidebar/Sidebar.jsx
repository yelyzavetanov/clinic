import React from "react";
import s from "./Sidebar.module.css";
import Calendar from "./Calendar/Calendar";

function Sidebar() {
    return (
        <div className={s.sidebar}>
            <Calendar/>
        </div>
    )
}

export default Sidebar;