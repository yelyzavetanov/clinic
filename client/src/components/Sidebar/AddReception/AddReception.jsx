import React, {useState} from 'react';
import s from "./AddReception.module.css";
import {useSelector} from "react-redux";

function AddReception(props) {
    const [color, setColor] = useState("Purple");
    const patients = useSelector(state => state.patient.patients);

    const getSelectClassName = () => {
        switch (color) {
            case "Red": return s.red;
            case "Blue": return s.blue;
            case "Purple": return s.purple;
            case "Green": return s.green;
        }
    }

    return (
        <div className={s.addReception}>
            <div className={s.addReceptionHeader}>
                <div className={s.titleReception}>
                    Add reception
                </div>
                <button className={s.closeButton} onClick={() => props.setIsAddReceptionForm(false)}>
                    Close
                </button>
            </div>
            <div className={s.contentReception}>
                <div className={s.patient}>
                    <span>Patient:</span>
                    <select type="">
                        {patients.map(e => <option>{e.name}</option>)}
                    </select>
                </div>
                <div className={s.type}>
                    Type:
                    <select type="">
                        <option>shiza</option>
                        <option>anxiety</option>
                        <option>desn't know react</option>
                    </select>
                </div>
                <div className={s.time}>
                    Time:
                    <input type={"time"}/>
                </div>
                <div className={s.selectColor}>
                    <span>Color:</span>
                    <select
                        className={getSelectClassName()}
                        value={color}
                        type=""
                        onChange={event => setColor(event.target.value)}
                    >
                        <option>Green</option>
                        <option>Blue</option>
                        <option>Purple</option>
                        <option>Red</option>
                    </select>
                </div>
            </div>
            <div className={s.buttonContainer}>
                <button className={s.receptionButton} onClick={() => props.setIsAddReceptionForm(false)}>
                    Add reception
                </button>
            </div>
        </div>


    )
}

export default AddReception;