import React from "react";
import s from "./ReceptionInfo.module.css";
import GrayLine from "../../common/GrayLine/GrayLine";
import { format } from 'date-fns';

function ReceptionInfo(props) {
    const date = new Date(props.info.date);

    const getItemClassName = (color) => {
        switch (color) {
            case "red": return s.redItem;
            case "blue": return s.blueItem;
            case "green": return s.greenItem;
            case "purple": return s.purpleItem;
        }
    }

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
                <div className={getItemClassName(props.info.color)}>
                    Patient:
                    <span>{props.info.patient}</span>
                </div>
                <div className={getItemClassName(props.info.color)}>
                    Type:
                    <span>{props.info.type}</span>
                </div>
                <div>
                    Description:
                    <span>{props.info.description}</span>
                </div>
                <div>
                    Date:
                    <span>{format(date, 'yyyy-MM-dd')}</span>
                </div>
                <div>
                    Time:
                    <span>{props.info.time}</span>
                </div>
                <div className={getItemClassName(props.info.color)}>
                    Color:
                    <span>{props.info.color}</span>
                </div>
            </div>
        </div>
    )
}

export default ReceptionInfo;