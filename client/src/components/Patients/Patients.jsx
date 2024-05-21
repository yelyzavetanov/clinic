import React from "react";
import s from "./Patients.module.css";
import Patient from "./Patient/Patient";
import GrayLine from "../common/GrayLine/GrayLine";
import {useSelector} from "react-redux";
import Loading from "../common/Loading/Loading";
import Error from "../common/Error/Error";

function Patients(props) {
    // const patients = [
    //     {name: "Yelyzaveta", description: "Cool rich intelligent", year: "2005", problem: "anxiety, shiza", treatment: "therapy"},
    //     {name: "Vlad", description: "Cool rich intelligent", year: "2005", problem: "anxiety", treatment: "therapy"},
    //     {name: "Nazar", description: "Cool rich intelligent", year: "2005", problem: "doesn't know react", treatment: "learn react"},
    // ];

    const { loading, patients, error } = useSelector(state => state.patient);

    if (loading) return <Loading/>;
    if (error) return <Error errorMessage={error}/>;

    const shownPatients = patients.filter(p => p.name.toLowerCase().includes(props.patientsSearchFilter.toLowerCase()));

    const onAddPatient = () => {
        props.setIsAddPatientForm(true);
        props.setIsAddReceptionForm(false);
        props.setIsReceptionInfo(false);
    }

    return (
        <div className={s.patientsContainer}>
            <div className={s.patients}>
                <div className={s.patientsHeader}>
                    <div className={s.title}>Patients</div>
                    <div className={s.addPatientButton}>
                        <button onClick={onAddPatient}>
                            Add patient
                        </button>
                    </div>
                </div>
                <GrayLine/>
                <div className={s.patientsList}>
                    {shownPatients.map(e => <Patient patient={e} key={patients.indexOf(e)}/>)}
                    {!shownPatients.length && <div>No patients found.</div>}
                </div>
            </div>
        </div>
    )
}

export default Patients;