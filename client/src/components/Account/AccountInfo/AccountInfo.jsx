import React, {useState} from "react";
import s from "./AccountInfo.module.css";
import {useDispatch} from "react-redux";
import {logOut} from "../../../reducers/usersSlice";

function AccountInfo(props) {
    const [editMode, setEditMode] = useState(false);
    const [isExitMessage, setIsExitMessage] = useState(false);

    const [name, setName] = useState(props.account.name);
    const [specialization, setSpecialization] = useState(props.account.specialization);
    const [description, setDescription] = useState(props.account.description);

    const dispatch = useDispatch();

    const onExitButton = () => {
        if (!isExitMessage) {
            setIsExitMessage(true);
            setEditMode(false);
        } else if (isExitMessage) {
            props.setIsRegistered(false);
            dispatch(logOut());
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
                    Clinic:
                    <span>vntu</span>
                </div>
                <div className={s.accountInfoItem}>
                    Status:
                    <span>administrator</span>
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
                <div className={s.accountInfoItem}>
                    About me:
                    {editMode
                        ? <input
                            placeholder={"Some information about you..."}
                            value={description}
                            onChange={event => setDescription(event.target.value)}
                        />
                        : <span>{description}</span>
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