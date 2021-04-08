import React from "react";
import s from "./Navbar.module.css";
import $ from 'jquery';

const Navbar = () => {
    $(document).ready(() => {
        $('li a').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({scrollTop: $($(this).attr('href')).offset().top}, 1500);
        });
    });

    return (
        <div>
            <nav className={s.nav}>
                <p className={s.logo__name}>art.co</p>
                <ul className={s.nav__list}>
                    <li className={s.nav__item}>
                        <a href="#equip" className={s.nav__link}>
                            Оборудование
                        </a>
                    </li>
                    <li className={s.nav__item}>
                        <a href="#portfolio" className={s.nav__link}>
                            Портфолио
                        </a>
                    </li>
                    <li className={s.nav__item}>
                        <a href="#contacts" className={s.nav__link}>
                            Контакты
                        </a>
                    </li>
                </ul>
                <p className={s.nav__item + ' ' + s.ml}>Ростов-на-Дону</p>
            </nav>
        </div>
    );
};

export default Navbar;
