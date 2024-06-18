import React, {useEffect, useState} from "react";
import s from "./ReceptionInfo.module.css";
import GrayLine from "../../common/GrayLine/GrayLine";
import {format} from 'date-fns';
import {useDispatch} from "react-redux";
import {markReception} from "../../../reducers/scheduleSlice";

function ReceptionInfo(props) {
    const date = new Date(props.info.date);

    const [status, setStatus] = useState(props.info.status);
    const dispatch = useDispatch();

    const getItemClassName = (color) => {
        switch (color) {
            case "red":
                return s.redItem;
            case "blue":
                return s.blueItem;
            case "green":
                return s.greenItem;
            case "purple":
                return s.purpleItem;
        }
    }

    // console.log(props.info.id);

    useEffect(() => {
        setStatus(props.info.status);
    }, [props.info.status]);

    const onCompleteButton = () => {
        dispatch(markReception(
            {
                id: props.info.id,
                newStatus: "Completed!",
            }
        ));
        setStatus("Completed!");
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
                <div>
                    <b className={getItemClassName(props.info.color)}>{props.info.patient}</b>
                    <br/>
                    {props.info.type}
                </div>
                <div className={s.doubleItem}>
                    {format(date, 'dd MMMM yyyy')}
                    <br/>
                    {props.info.time}
                </div>
            </div>
            <div>
                Description:
                <br/>
                <span>{props.info.description}</span>
            </div>
            <br/>
            <div>
                {/*<span>{props.info.status}</span>*/}
                {status === "Planned" || status === "planned"
                    ? <span>
                        <button className={s.plannedButton} onClick={onCompleteButton}>{status}</button>
                        <span className={s.makeCompleted}>Complete this reception!</span>
                    </span>
                    : <button className={s.completedButton} onClick={() => setStatus("Planned")}>{status}</button>
                }
            </div>
        </div>
    )
}

export default ReceptionInfo;