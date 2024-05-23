import React from "react";
import s from "./Error.module.css";

function Error(props) {
    return (
        <div className={s.errorContainer}>
            <div className={s.error}>An error occurred:
                <span> {props.errorMessage}</span>
            </div>
        </div>
    )
}

export default Error;