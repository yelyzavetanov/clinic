import React from "react";
import s from "./Clinic.module.css";
import GrayLine from "../common/GrayLine/GrayLine";
import ClinicInfo from "./ClinicInfo/ClinicInfo";
import RegisterClinic from "./RegisterClinic/RegisterClinic";
import {useSelector} from "react-redux";
import Error from "../common/Error/Error";
import Loading from "../common/Loading/Loading";
import Message from "../common/Message/Message";

function Clinic(props) {
    const {error, message, loading} = useSelector(state => state.clinic);

    if (error) {
        return <Error errorMessage={error}/>
    }

    if (loading) {
        return <Loading/>
    }

    if (message) {
        return <Message message={message}/>
    }

    return (
        <div className={s.clinicContainer}>
            <div className={s.clinic}>
                <div className={s.title}>Clinic</div>
                <GrayLine/>
                {props.isRegistered
                    ? <ClinicInfo isAdmin={props.isAdmin}/>
                    : <RegisterClinic/>
                }
            </div>
        </div>
    )
}

export default Clinic;