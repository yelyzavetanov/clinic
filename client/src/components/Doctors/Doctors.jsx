import React, {useState} from "react";
import s from "./Doctors.module.css";
import GrayLine from "../common/GrayLine/GrayLine";
import Doctor from "./Doctor/Doctor";
import DoctorInfo from "./DoctorInfo/DoctorInfo";
import Loading from "../common/Loading/Loading";
import Error from "../common/Error/Error";
import {useSelector} from "react-redux";

function Doctors(props) {
    const [currentDoctor, setCurrentDoctor] = useState(null);

    const { doctorsUsersList, loading, error } = useSelector(state => state.user);

    if (loading) return <Loading/>;
    if (error) return <Error errorMessage={error}/>;

    const shownDoctors = doctorsUsersList.filter(p => p.name.toLowerCase().includes(props.doctorsSearchFilter.toLowerCase()));

    return (
        <div className={s.doctorsContainer}>
            <div className={s.doctors}>
                <div className={s.title}>Doctors</div>
                <GrayLine/>
                {currentDoctor
                    ? <DoctorInfo
                        setCurrentDoctor={setCurrentDoctor}
                        doctor={doctorsUsersList.find(e => e.username === currentDoctor)}
                    />
                    : <div className={s.doctorsList}>
                        {!shownDoctors.length &&
                            <div className={s.noDoctorsMessage}>No doctors found.</div>
                        }
                        {shownDoctors.map(e =>
                            <Doctor key={shownDoctors.indexOf(e)} doctor={e} setCurrentDoctor={setCurrentDoctor}/>
                        )}
                    </div>
                }
            </div>
        </div>
    )
}

export default Doctors;