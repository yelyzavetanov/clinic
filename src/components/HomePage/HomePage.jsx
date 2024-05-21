import React from "react";
import s from "./HomePage.module.css";
import {NavLink} from "react-router-dom";

function HomePage() {
    return (
        <div className={s.homePageContainer}>
            <div className={s.homePage}>
                <div className={s.imgContainer}>
                    <div className={s.gradientContainer}>
                        <div className={s.descriptionContainer}>
                            <div className={s.title}>Clinic</div>
                            <div className={s.description}>
                                Clinic is a simple and intuitive web application for your clinic.
                                It helps automate patient management processes, appointment scheduling,
                                medical record keeping, and administration. With its user-friendly interface,
                                clinic staff can easily learn to use the application and improve their efficiency.
                            </div>
                            <NavLink to={"/"}>
                                <button className={s.startButton}>
                                    <div>
                                        START NOW
                                    </div>
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomePage;