import React from "react";
import s from "./Footer.module.css";

function Footer() {
    return (
        <footer>
            <div className={s.footerColumn}>
                <div className={s.footerTitle}>Kursach made by VNTU students:</div>
                <div>Novikova Yelyzaveta</div>
                <div>Kuripko Vladislav</div>
                <div>Khmil Nazarii</div>
            </div>
            <div className={s.footerColumn}>
                <div className={s.footerTitle}>All right reserved. 2024</div>
            </div>
        </footer>
    )
}

export default Footer;