import s from './App.module.css';
import MainMenu from "./components/MainMenu/MainMenu";
import Schedule from "./components/Schedule/Schedule";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import {useEffect, useState} from "react";
import Patients from "./components/Patients/Patients";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Account from "./components/Account/Account";
import {fetchPatients} from "./reducers/patientsSlice";
import {useDispatch, useSelector} from "react-redux";
import Doctors from "./components/Doctors/Doctors";
import HomePage from "./components/HomePage/HomePage";
import Clinic from "./components/Clinic/Clinic";
import {fetchClinic, fetchClinicsList} from "./reducers/clinicSlice";
import {fetchUsers} from "./reducers/usersSlice";


function App() {
    const [isFullMainMenuShown, setIsFullMainMenuShown] = useState(true);
    const [isAddPatientForm, setIsAddPatientForm] = useState(false);
    const [isAddReceptionForm, setIsAddReceptionForm] = useState(false);
    const [isReceptionInfo, setIsReceptionInfo] = useState(false);

    const account = useSelector(state => state.user);
    const status = account.account ? account.account.status : "";
    const [isRegistered, setIsRegistered] = useState(!!account.account);

    const [patientsSearchFilter, setPatientsSearchFilter] = useState("");
    const [doctorsSearchFilter, setDoctorsSearchFilter] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchClinicsList());
        if(account.account) {
            dispatch(fetchClinic(account.account.clinic));
        }
        // console.log(account.account && account.account.status === "administrator");

        if (account.account && account.account.status === "administrator") {
            dispatch(fetchUsers(account.account.clinic));
        }
    }, [dispatch/*, account*/]);

    return (
        <BrowserRouter>
            <div className={isFullMainMenuShown ? s.fullApp : s.app}>
                <div className={s.menu}>
                    <MainMenu
                        isFullMainMenuShown={isFullMainMenuShown}
                        setIsFullMainMenuShown={setIsFullMainMenuShown}
                    />
                </div>
                <div className={s.mainContent}>
                    <Header
                        isAdmin={status === "administrator"}
                        isRegistered={isRegistered}
                        patientsSearchFilter={patientsSearchFilter}
                        setPatientsSearchFilter={setPatientsSearchFilter}
                        doctorsSearchFilter={doctorsSearchFilter}
                        setDoctorsSearchFitler={setDoctorsSearchFilter}
                    />
                    <div className={s.content}>
                        <Routes>
                            {account.account &&
                                <Route path={"/patients"} element={
                                    <Patients
                                        patientsSearchFilter={patientsSearchFilter}
                                        setIsAddPatientForm={setIsAddPatientForm}
                                        setIsAddReceptionForm={setIsAddReceptionForm}
                                        setIsReceptionInfo={setIsReceptionInfo}
                                    />
                                }/>
                            }
                            <Route path={"/account"} element={
                                <Account
                                    isRegistered={isRegistered}
                                    setIsRegistered={setIsRegistered}
                                />
                            }/>
                            {account.account &&
                                <Route path={"/schedule"} element={
                                    <Schedule
                                        setIsAddReceptionFrom={setIsAddReceptionForm}
                                        setIsAddPatientForm={setIsAddPatientForm}
                                        setIsReceptionInfo={setIsReceptionInfo}
                                    />
                                }/>
                            }
                            {status === "administrator" &&
                                <Route path={"/doctors"} element={
                                    <Doctors doctorsSearchFilter={doctorsSearchFilter}/>
                                }/>
                            }
                            <Route path={"/clinic"} element={
                                <Clinic
                                    isRegistered={isRegistered}
                                    isAdmin={status === "administrator"}
                                />
                            }/>
                            <Route path={"/"} element={
                                <HomePage/>
                            }/>
                        </Routes>
                        {(isAddPatientForm || isAddReceptionForm || isReceptionInfo) && <Sidebar
                            isAddPatientForm={isAddPatientForm}
                            isAddReceptionForm={isAddReceptionForm}
                            isReceptionInfo={isReceptionInfo}
                            setIsAddReceptionForm={setIsAddReceptionForm}
                            setIsAddPatientForm={setIsAddPatientForm}
                            setIsReceptionInfo={setIsReceptionInfo}
                        />}
                    </div>
                    <Footer/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
