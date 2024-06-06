import React, {useEffect, useState} from "react";
import s from "./ClinicInfo.module.css";
import {useSelector} from "react-redux";

function ClinicInfo(props) {
    const clinic = useSelector(state => state.clinic.clinic);

    // console.log(clinic.name);

    const [clinicInfo, setClinicInfo] = useState({
        name: clinic ? clinic.name : "",
        description: clinic ? clinic.description : "",
        address: clinic ? clinic.address : "",
        specialization: clinic ? clinic.specialization : "",
    });

    const [editMode, setEditMode] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        // console.log("use effect");
        setClinicInfo({
            name: clinic ? clinic.name : "",
            description: clinic ? clinic.description : "",
            address: clinic ? clinic.address : "",
            specialization: clinic ? clinic.specialization : "",
        });
    }, [clinic]);

    const onClinicInfoChange = (event) => {
        const {name, value} = event.target;
        setClinicInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onEditButton = () => {
        setEditMode(true);
        setError("");
    };

    const onSaveButton = () => {
        if (Object.values(clinicInfo).some(value => value.trim() === "")) {
            setError("All fields are required.");
            return;
        }
        setEditMode(false);
    };

    return (
        <div className={s.clinicInfo}>
            <div className={s.title}>Your clinic information</div>
            <div className={s.clinicImgContainer}><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFEVTzvYB4xfN7_1ElbMn_QN_nAuXHAmo43f-tD98bNWVpw0Ow-VldR7DBysNxXGX-kU&usqp=CAU"}/></div>
            <div className={s.clinicForm}>
                <div className={s.infoItem}>
                    <span>Name:</span>
                    {editMode ? (
                        <input
                            name="name"
                            value={clinicInfo.name}
                            onChange={onClinicInfoChange}
                            placeholder={"Your clinic name..."}
                        />
                    ) : (
                        <span>{clinicInfo.name}</span>
                    )}
                </div>
                <div className={s.infoItem}>
                    <span>Specialization:</span>
                    {editMode ? (
                        <input
                            name="specialization"
                            value={clinicInfo.specialization}
                            onChange={onClinicInfoChange}
                            placeholder={"Your clinic specialization..."}
                        />
                    ) : (
                        <span>{clinicInfo.specialization}</span>
                    )}
                </div>
                <div className={s.infoItem}>
                    <span>Description:</span>
                    {editMode ? (
                        <input
                            name="description"
                            value={clinicInfo.description}
                            onChange={onClinicInfoChange}
                            placeholder={"Your clinic description..."}
                        />
                    ) : (
                        <span>{clinicInfo.description}</span>
                    )}
                </div>
                <div className={s.infoItem}>
                    <span>Address:</span>
                    {editMode ? (
                        <input
                            name="address"
                            value={clinicInfo.address}
                            onChange={onClinicInfoChange}
                            placeholder={"Your clinic address..."}
                        />
                    ) : (
                        <span>{clinicInfo.address}</span>
                    )}
                </div>
                {error && <div className={s.error}>{error}</div>}
                {props.isAdmin &&
                    <div className={s.buttonsContainer}>
                        {editMode ? (
                            <button className={s.editButton} onClick={onSaveButton}>Save</button>
                        ) : (
                            <button className={s.editButton} onClick={onEditButton}>Edit</button>
                        )}
                    </div>
                }
            </div>
        </div>
    );
}

export default ClinicInfo;
