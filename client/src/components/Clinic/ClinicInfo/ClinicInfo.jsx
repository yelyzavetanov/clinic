import React, {useEffect, useState} from "react";
import s from "./ClinicInfo.module.css";
import {useDispatch, useSelector} from "react-redux";
import {editClinic} from "../../../reducers/clinicSlice";

function ClinicInfo(props) {
    const clinic = useSelector(state => state.clinic.clinic);
    const dispatch = useDispatch();

    const [clinicInfo, setClinicInfo] = useState({
        name: clinic ? clinic.name : "",
        description: clinic ? clinic.description : "",
        address: clinic ? clinic.address : "",
        specialization: clinic ? clinic.specialization : "",
    });

    const [editMode, setEditMode] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
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
        dispatch(editClinic(
            {
                clinicName: clinicInfo.name,
                updatedData: {
                    name: clinicInfo.name,
                    description: clinicInfo.description,
                    address: clinicInfo.address,
                    specialization: clinicInfo.specialization,
                }
            }
        ));
        setEditMode(false);
    };

    return (
        <div className={s.clinicInfo}>
            <div className={s.title}>Your clinic information</div>
            <div className={s.clinicImgContainer}><img
                src={"https://www.shutterstock.com/shutterstock/videos/1065097048/thumb/1.jpg?ip=x480"}
                alt={""}/></div>
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
                        <textarea
                            name="description"
                            value={clinicInfo.description}
                            onChange={onClinicInfoChange}
                            placeholder={"Your clinic description..."}
                        ></textarea>
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
