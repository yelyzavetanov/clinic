import React from "react";
import s from "./Sidebar.module.css";
import Calendar from "./Calendar/Calendar";
import AddReception from "./Recaption/AddReception";

function Sidebar() {
    return (
        <div className={s.sidebar}>
            <Calendar/>
            <div className={s.receptionLine}></div>
            <AddReception/>
            {/*ctrl + slash*/}
        </div>
    )
}

export default Sidebar;