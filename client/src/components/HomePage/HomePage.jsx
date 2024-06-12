import React from "react";
import s from "./HomePage.module.css";
import {NavLink} from "react-router-dom";

function HomePage() {
    return (
        <div className={s.homePageContainer}>
            <div className={s.homePage}>
                <div className={s.banner}>
                </div>
                <div className={s.info}>
                    <div>
                        <div className={s.title}>Clinic</div>
                        <div className={s.description}>
                            Welcome to Clinic, the ultimate solution for healthcare professionals
                            to manage their appointments and patient information efficiently.
                            Designed with doctors in mind, Clinic streamlines your daily workflow,
                            allowing you to focus on what matters most—providing excellent patient care.
                        </div>
                        <div>
                            <NavLink to={"/clinic"}>
                                <button className={s.registerClinicButton}>Register my clinic</button>
                            </NavLink>
                        </div>
                    </div>
                    <div>
                        <div className={s.item}>
                            <div className={s.itemTitle}>Intuitive Appointment Scheduling:</div>
                            Easily schedule, reschedule, and cancel appointments with our intuitive calendar interface.
                            View your daily, weekly, and monthly schedules at a glance, ensuring you never miss an
                            appointment.
                        </div>
                        <div className={s.item}>
                            <div className={s.itemTitle}>Comprehensive Patient Database:</div>
                            Maintain detailed patient records, including medical history, treatment plans, and contact
                            information.
                            Quickly access patient information during consultations for more informed decision-making.
                        </div>
                        <div className={s.item}>
                            <div className={s.itemTitle}>Personalized Settings:</div>
                            Customize your dashboard according to your preferences. Set up your working schedule,
                            appointment hours, break times, and other important parameters.
                            Manage your schedule conveniently and efficiently, considering your unique needs and
                            circumstances.
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default HomePage;
