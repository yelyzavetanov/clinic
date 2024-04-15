import React from "react";
import s from "./TimeItem.module.css";

function TimeItem(props) {
    return (
        <div className={s.timeItem}>{props.time}</div>
    )
}

export default TimeItem;