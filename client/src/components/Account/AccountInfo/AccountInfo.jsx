import React, {useState} from "react";
import s from "./AccountInfo.module.css";

function AccountInfo(props) {
    const [editMode, setEditMode] = useState(false);
    const [isExitMessage, setIsExitMessage] = useState(false);

    const [name, setName] = useState("Yelyzaveta Novikova");
    const [specialization, setSpecialization] = useState("Team lead developer");

    const onExitButton = () => {
        if (!isExitMessage) {
            setIsExitMessage(true);
            setEditMode(false);
        } else if (isExitMessage) {
            props.setIsRegistered(false);
            props.setAccountComponent("logIn");
        }
    }

    const onEditButton = () => {
        setEditMode(true);
        setIsExitMessage(false);
    }


    return (
        <div className={s.accountInfo}>
            <div className={s.title}>Your account</div>
            <div>
                <div className={s.accountInfoItem}>
                    User name:
                    <span>@yelyznov</span>
                </div>
                <div className={s.accountInfoItem}>
                    Name:
                    {editMode
                        ? <input
                            placeholder={"Your name..."}
                            value={name}
                            onChange={event => setName(event.target.value)}
                        />
                        : <span>{name}</span>
                    }
                </div>
                <div className={s.accountInfoItem}>
                    Specialization:
                    {editMode
                        ? <input
                            placeholder={"Your specialization..."}
                            value={specialization}
                            onChange={event => setSpecialization(event.target.value)}
                        />
                        : <span>{specialization}</span>
                    }
                </div>
                {isExitMessage &&
                    <div className={s.exitMessage}>Are you sure you want to exit?</div>
                }
                <div className={s.buttonsContainer}>
                    {editMode
                        ? <button className={s.editButton} onClick={() => setEditMode(false)}>Save</button>
                        : <button className={s.editButton} onClick={onEditButton}>Edit</button>
                    }
                    <button className={s.exitButton} onClick={onExitButton}>Exit</button>
                    {isExitMessage &&
                        <button className={s.exitButton} onClick={() => setIsExitMessage(false)}>
                            Cansel
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default AccountInfo;