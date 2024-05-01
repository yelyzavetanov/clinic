import React from 'react';
import s from "./AddReception.module.css";

function AddReception() {
    return (
        <div className={s.addReception}>
            <div className={s.titleReception}>
                Add reception
            </div>
            <div className={s.contentReception}>
                <div className={s.patient}>
                    <span>Patient:</span>
                    <select type="">
                        <option>Yelyzaveta</option>
                        <option>Vlad</option>
                        <option>Nazar</option>
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
                    <select type="">
                        <option>12:00</option>
                        <option>12:30</option>
                        <option>13:00</option>
                    </select>
                </div>
                <div className={s.selectColor}>
                    <span>Color:</span>
                    <select value={"Purple"} type="">
                        <option>Green</option>
                        <option>Blue</option>
                        <option>Purple</option>
                        <option>Red</option>
                    </select>
                </div>
            </div>
            <div className={s.buttonContainer}>
                <div className={s.receptionButton}>Add</div>
            </div>
        </div>


    )
}

export default AddReception;