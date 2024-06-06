import React, {useEffect, useState} from "react";
import s from "./Doctors.module.css";
import GrayLine from "../common/GrayLine/GrayLine";
import doctorTestPhoto from "../../icons/system-regular-50-file.svg";
import Doctor from "./Doctor/Doctor";
import DoctorInfo from "./DoctorInfo/DoctorInfo";
import Loading from "../common/Loading/Loading";
import Error from "../common/Error/Error";
import {fetchUsers} from "../../reducers/usersSlice";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

function Doctors(props) {
    const [currentDoctor, setCurrentDoctor] = useState(null);

    const dispatch = useDispatch();

    const { doctorsUsersList, loading, error } = useSelector(state => state.user);
    const clinic = useSelector(state => state.clinic);

/*    useEffect(() => {
        // console.log(clinic);
        if (clinic.clinic) {
            console.log(clinic.clinic.name);
            dispatch(fetchUsers(clinic.clinic.name));
        }
    }, [dispatch]);*/

    if (loading) return <Loading/>;
    if (error) return <Error errorMessage={error}/>;

    /*const makeTestArray = () => {
        const doctorsArray = [];
        for (let i = 0; i < 20; i++) {
            doctorsArray.push({
                username: i,
                name: "Yelyzaveta Novikova",
                photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsGxan5mk7UK1ZfjubYs_nbsdheb5kdWhiyg&s",
                clinic: "vntu",
                specialization: "student",
                description: "lksdjflkdjflkkdsdfsdfsdfsdvdfgfsdvvvbsjf",
            });
        }
        return doctorsArray;
    }*/


    const shownDoctors = doctorsUsersList.filter(p => p.name.toLowerCase().includes(props.doctorsSearchFilter.toLowerCase()));

    // const doctorsArray = makeTestArray();

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