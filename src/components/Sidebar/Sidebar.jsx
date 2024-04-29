import React from "react";
import s from "./Sidebar.module.css";
import Calendar from "./Calendar/Calendar";
import AddReception from "./Reception/AddReception";

function Sidebar() {
    return (
        <div className={s.sidebar}>
            <Calendar/>
            <div className={s.receptionLine}></div>
            <AddReception/>
        </div>
    )
}

export default Sidebar;