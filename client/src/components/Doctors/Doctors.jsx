import React, {useState} from "react";
import s from "./Doctors.module.css";
import GrayLine from "../common/GrayLine/GrayLine";
import doctorTestPhoto from "../../icons/system-regular-50-file.svg";
import Doctor from "./Doctor/Doctor";
import DoctorInfo from "./DoctorInfo/DoctorInfo";

function Doctors() {
    const [currentDoctor, setCurrentDoctor] = useState(null);

    const makeTestArray = () => {
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
    }

    const doctorsArray = makeTestArray();

    return (
        <div className={s.doctorsContainer}>
            <div className={s.doctors}>
                <div className={s.title}>Doctors</div>
                <GrayLine/>
                {currentDoctor
                    ? <DoctorInfo
                        setCurrentDoctor={setCurrentDoctor}
                        doctor={doctorsArray.find(e => e.username === currentDoctor)}
                    />
                    : <div className={s.doctorsList}>
                        {doctorsArray.map(e =>
                            <Doctor key={doctorsArray.indexOf(e)} doctor={e} setCurrentDoctor={setCurrentDoctor}/>
                        )}
                    </div>
                }
            </div>
        </div>
    )
}

export default Doctors;