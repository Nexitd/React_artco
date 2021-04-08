import React from "react";
import { NavLink } from "react-router-dom";
import s from "./EquipNavbar.module.css";

const EquipNavbar = () => {
    return (
        <div id="equip">
            <h2 className={s.title}>Наше оборудование</h2>
            <div className={s.list}>
                <NavLink className={s.nav__item} activeClassName={s.active} to="/sound">
                    Звук
                </NavLink>
                <NavLink className={s.nav__item} activeClassName={s.active} to="/light">
                    Свет
                </NavLink>
                <NavLink className={s.nav__item} activeClassName={s.active} to="/effects">
                    Спецэффекты
                </NavLink>
                <NavLink className={s.nav__item} activeClassName={s.active} to="/complect">
                    Комплекты
                </NavLink>
            </div>
        </div>
    );
};

export default EquipNavbar;
