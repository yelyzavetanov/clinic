import logo from './logo.svg';
import './App.css';
import MainMenu from "./components/MainMenu/MainMenu";
import Schedule from "./components/Schedule/Schedule";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
        <MainMenu/>
        <Schedule/>
        <Sidebar/>
    </div>
  );
}

export default App;
