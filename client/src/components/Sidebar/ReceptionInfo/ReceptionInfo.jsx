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
                    <span>Yelyzaveta</span>
                </div>
                <div>
                    Type:
                    <span>consultation</span>
                </div>
                <div>
                    Date:
                    <span>13.12.2005</span>
                </div>
                <div>
                    Time:
                    <span>8:00</span>
                </div>
            </div>
        </div>
    )
}

export default ReceptionInfo;