import React, {useState} from "react";
import s from "./ClinicInfo.module.css";

function ClinicInfo(props) {
    const [clinicInfo, setClinicInfo] = useState({
        name: "VNTU",
        description: "pain, depression, death",
        address: "VNTU",
        specialization: "programming"
    });

    const [editMode, setEditMode] = useState(false);
    const [error, setError] = useState("");

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
