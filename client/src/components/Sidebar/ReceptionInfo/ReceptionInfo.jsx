import React from "react";
import s from "./ReceptionInfo.module.css";
import GrayLine from "../../common/GrayLine/GrayLine";

function ReceptionInfo(props) {
    return (
        <div className={s.receptionInfo}>
            <div className={s.receptionInfoHeader}>
                <div className={s.title}>Reception</div>
                <button className={s.closeButton} onClick={() => props.setIsReceptionInfo(false)}>
                    Close
                </button>
            </div>
            <GrayLine/>
            <div className={s.info}>
                <div>
                    Patient:
                    <span>{props.info.patient}</span>
                </div>
                <div>
                    Type:
                    <span>{props.info.type}</span>
                </div>
                <div>
                    Description:
                    <span>{props.info.description}</span>
                </div>
                <div>
                    Date:
                    <span>{props.info.date}</span>
                </div>
                <div>
                    Time:
                    <span>{props.info.time}</span>
                </div>
            </div>
        </div>
    )
}

export default ReceptionInfo;