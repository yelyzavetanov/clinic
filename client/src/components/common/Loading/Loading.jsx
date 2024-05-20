import React from "react";
import s from "./Loading.module.css";
import loadingIcon from "../../../icons/system-regular-719-spinner-circle.svg";


function Loading() {
    return (
        <div className={s.loadingContainer}>
            <div className={s.loading}>
                <img alt={""} src={loadingIcon}/>
                <div className={s.loadingLabel}>
                    Loading...
                </div>
            </div>
        </div>
    )
}

export default Loading;