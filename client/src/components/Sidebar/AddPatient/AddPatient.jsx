import React from 'react';
import s from "./AddPatient.module.css";
import GrayLine from "../../common/GrayLine/GrayLine";

function AddPatient(props) {
    return (
        <div className={s.addPatient}>
            <div className={s.addPatientFormHeader}>
                <div className={s.title}>
                    Add patient
                </div>
                <div>
                    <button className={s.closeButton} onClick={() => props.setIsAddPatientForm(false)}>
                        Close
                    </button>
                </div>
            </div>
            <GrayLine/>
            <div className={s.addPatientForm}>
                <div>
                    <span>Name: </span>
                    <input placeholder={"Patient name..."}/>
                </div>
                <div>
                    <span>Birth date: </span>
                    <input placeholder={"Patient birthday date..."}/>
                </div>
                <div>
                    <span>Description: </span>
                    <textarea placeholder={"Patient description..."}></textarea>
                </div>
                <div>
                    <span>Problems: </span>
                    <textarea placeholder={"Patient problems..."}></textarea>
                </div>
                <div>
                    <span>Treatment: </span>
                    <textarea placeholder={"Patient treatment..."}></textarea>
                </div>
                <div>
                    <button className={s.addPatientButton} onClick={() => props.setIsAddPatientForm(false)}>
                        Add patient
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddPatient;