import React from "react";
import s from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={s.footer}>
            <div>
                <span className={s.telephone}>
                    <a className={s.footer__tel} href="tel:8-989-720-70-77">
                        8-989-720-70-77
                    </a>
                </span>
                <span className={s.telephone}>
                    <a className={s.footer__tel} href="tel:8 (863) 221-10-89">
                        8 (863) 221-10-89
                    </a>
                </span>
            </div>
            <div className={s.social_networks}>
                <img src="/images/Footer/telegram ske 1.svg" alt="" />
                <img src="/images/Footer/Vector (1).svg" alt="" />
                <img src="/images/Footer/instagram-sketched 1.svg" alt="" />
                <img src="/images/Footer/whatsapp 1.svg" alt="" />
            </div>
            <p className={s.footer__text}>
                Политика обработки <span> Персональных данных</span>
            </p>
            <p className={s.footer__text}>© 2023 «ОРГАНИЗАЦИЯ МЕРОПРИЯТИЙ»</p>
        </div>
    );
};

export default Footer;
