import React from "react";
import s from "./Sidebar.module.css";
import Calendar from "./Calendar/Calendar";
import AddReception from "./AddReception/AddReception";
import GrayLine from "../common/GrayLine/GrayLine";
import AddPatient from "./AddPatient/AddPatient";

function Sidebar() {
    return (
        <div className={s.sidebar}>
            {/*<Calendar/>*/}
            {/*<GrayLine/>*/}
            {/*<AddReception/>*/}
            {/*ctrl + slash*/}
            <AddPatient/>
        </div>
    )
}

export default Sidebar;