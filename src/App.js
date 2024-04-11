import logo from './logo.svg';
import s from './App.module.css';
import MainMenu from "./components/MainMenu/MainMenu";
import Schedule from "./components/Schedule/Schedule";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className={s.App}>
        <MainMenu/>
        <div className={s.mainContent}>
            <Header/>
            <div className={s.content}>
                <Schedule/>
                <Sidebar/>
            </div>
        </div>
    </div>
  );
}

export default App;
