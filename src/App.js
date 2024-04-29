import s from './App.module.css';
import MainMenu from "./components/MainMenu/MainMenu";
import Schedule from "./components/Schedule/Schedule";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import {useState} from "react";
import Patients from "./components/Patients/Patients";
import Footer from "./components/Footer/Footer";

function App() {
    const [isFullMainMenuShown, setIsFullMainMenuShown] = useState(true);


    return (
        <div className={isFullMainMenuShown ? s.fullApp : s.app}>
            <div className={s.menu}>
                <MainMenu isFullMainMenuShown={isFullMainMenuShown} setIsFullMainMenuShown={setIsFullMainMenuShown}/>
            </div>
            <div className={s.mainContent}>
                <Header/>
                <div className={s.content}>
                    <Patients/>
                    {/*<Schedule/>*/}
                    <Sidebar/>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
