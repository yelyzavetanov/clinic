import React from "react";
import s from "./Sidebar.module.css";
import Calendar from "./Calendar/Calendar";
import AddReception from "./AddReception/AddReception";
import GrayLine from "../common/GrayLine/GrayLine";

function Sidebar() {
    return (
        <div className={s.sidebar}>
            <Calendar/>
            <GrayLine/>
            <AddReception/>
            {/*ctrl + slash*/}
        </div>
    )
}

export default Sidebar;