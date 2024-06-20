import React from "react";
import s from "./Message.module.css";

function Message(props) {
    return (
        <div className={s.messageContainer}>
            <div className={s.message}>
                <span> {props.message}</span>
            </div>
        </div>
    )
}

export default Message;