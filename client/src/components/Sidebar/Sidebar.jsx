import React from "react";
import s from "./Sidebar.module.css";
import Calendar from "./Calendar/Calendar";
import AddReception from "./AddReception/AddReception";
import GrayLine from "../common/GrayLine/GrayLine";
import AddPatient from "./AddPatient/AddPatient";
import ReceptionInfo from "./ReceptionInfo/ReceptionInfo";

function Sidebar(props) {
    return (
        <div className={s.sidebar}>
            {props.isAddPatientForm &&
                <AddPatient setIsAddPatientForm={props.setIsAddPatientForm}/>
            }
            {props.isAddReceptionForm &&
                <>
                    <Calendar/>
                    <GrayLine/>
                    <AddReception setIsAddReceptionForm={props.setIsAddReceptionForm}/>
                </>
            }
            {props.isReceptionInfo &&
                <ReceptionInfo setIsReceptionInfo={props.setIsReceptionInfo}/>
            }
            {/*ctrl + slash*/}
        </div>
    )
}

export default Sidebar;