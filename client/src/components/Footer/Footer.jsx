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
                <div><a href="https://lordicon.com/">Icons by Lordicon.com</a></div>
            </div>
        </footer>
    )
}

export default Footer;