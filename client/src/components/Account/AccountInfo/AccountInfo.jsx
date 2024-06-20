import React, {useState} from "react";
import s from "./AccountInfo.module.css";
import {useDispatch} from "react-redux";
import {editAccount, logOut} from "../../../reducers/usersSlice";

function AccountInfo(props) {
    const [editMode, setEditMode] = useState(false);
    const [isExitMessage, setIsExitMessage] = useState(false);

    const [name, setName] = useState(props.account.name || "");
    const [specialization, setSpecialization] = useState(props.account.specialization || "");
    const [description, setDescription] = useState(props.account.description || "");

    const [error, setError] = useState("");

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

    const onSaveButton = () => {
        if (!name.length || !specialization.length || !description.length) {
            setError("All fields are required.");
        } else {
            setEditMode(false);
            dispatch(editAccount({
                username: props.account.username,
                updatedData: {
                    name: name,
                    specialization: specialization,
                    description: description
                }
            }));
        }
    }

    const onEditButton = () => {
        setEditMode(true);
        setIsExitMessage(false);
    }


    return (
        <div className={s.accountInfo}>
            <div className={s.title}>Your account</div>
            <div className={s.accountInfoInnerContainer}>
                <div>
                    <div className={s.photo}><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsGxan5mk7UK1ZfjubYs_nbsdheb5kdWhiyg&s"}/></div>
                </div>
                <div>
                    <div className={s.accountInfoItem}>
                        User name:
                        <span>@{props.account.username}</span>
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
                        <span>{props.account.status}</span>
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
                    {error &&
                        <div className={s.error}>{error}</div>
                    }
                </div>
            </div>
            <div className={s.buttonsContainer}>
                {editMode
                    ? <button className={s.editButton} onClick={onSaveButton}>Save</button>
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
    )
}

export default AccountInfo;