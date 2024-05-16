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
import axios from "axios";

function App() {
    const [isFullMainMenuShown, setIsFullMainMenuShown] = useState(true);
    const [isAddPatientForm, setIsAddPatientForm] = useState(false);
    const [isAddReceptionForm, setIsAddReceptionForm] = useState(false);
    const [isReceptionInfo, setIsReceptionInfo] = useState(false);

    const [isRegistered, setIsRegistered] = useState(true);

    const [testDbData, setTestDbData] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/patients").then((response) => {
            setTestDbData(response.data);
        })
            .catch((error) => console.log(error));
    }, []);

    console.log(testDbData);

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
                    <Header isRegistered={isRegistered}/>
                    <div className={s.content}>
                        <Routes>
                            <Route path={"/patients"} element={
                                <Patients
                                    setIsAddPatientForm={setIsAddPatientForm}
                                    setIsAddReceptionForm={setIsAddReceptionForm}
                                    setIsReceptionInfo={setIsReceptionInfo}
                                />
                            }/>
                            <Route path={"/account"} element={
                                <Account
                                    isRegistered={isRegistered}
                                    setIsRegistered={setIsRegistered}
                                />
                            }/>
                            <Route path={"/"} element={
                                <Schedule
                                    setIsAddReceptionFrom={setIsAddReceptionForm}
                                    setIsAddPatientForm={setIsAddPatientForm}
                                    setIsReceptionInfo={setIsReceptionInfo}
                                />
                            }/>
                        </Routes>
                        {(isAddPatientForm || isAddReceptionForm || isReceptionInfo) && <Sidebar
                            isAddPatientForm={isAddPatientForm}
                            isAddReceptionFrom={isAddReceptionForm}
                            isReceptionInfo={isReceptionInfo}
                            setIsAddReceptionFrom={setIsAddReceptionForm}
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
