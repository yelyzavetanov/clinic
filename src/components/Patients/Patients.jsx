import React from "react";
import s from "./Patients.module.css";
import Patient from "./Patient/Patient";

function Patients() {
    const patients = [
        {name: "Yelyzaveta", description: "Cool rich intelligent", year: "2005", problem: "anxiety, shiza", treatment: "therapy"},
        {name: "Vlad", description: "Cool rich intelligent", year: "2005", problem: "anxiety", treatment: "therapy"},
        {name: "Nazar", description: "Cool rich intelligent", year: "2005", problem: "doesn't know react", treatment: "learn react"},
    ];

    return (
        <div className={s.patientsContainer}>
            <div className={s.patients}>
                <div className={s.patientsHeader}>
                    <div className={s.title}>Patients</div>
                    <div className={s.addPatientButton}><button>Add patient</button></div>
                </div>
                <div className={s.line}> </div>
                <div className={s.patientsList}>
                    {patients.map(e => <Patient patient={e} key={patients.indexOf(e)}/>)}
                </div>
            </div>
        </div>
    )
}

export default Patients;