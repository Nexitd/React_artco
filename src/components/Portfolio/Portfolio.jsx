import React from "react";
import s from "./Portfolio.module.css";

const Portfolio = () =>  (
        <div className={s.container} id="portfolio">
            <h2 className={s.cont__title}>Портфолио</h2>
            <div className={s.cont}>
                <div className={s.cont__item}>
                    <p className={s.hov__text}>Настройка света на концерте</p>
                    <img src="/images/Portfolio/portfolio1.jpg" alt=""/>
                    <p className={s.hov__text}>Концерт в «Кроп Арена»</p>
                </div>
                <div className={s.cont__item}>
                    <p className={s.hov__text}>
                        Настройка звука, услуги звукорежиссера, установка и
                        настройка света
                    </p>
                    <img src="/images/Portfolio/portfolio2.jpg" alt="" />
                    <p className={s.hov__text}>Мероприятие «Связной 365»</p>
                </div>
                <div className={s.cont__item}>
                    <p className={s.hov__text}>
                        Установка и настройка звукового оборудования и
                        сценических спецэффектов (генераторы тумана и снега)
                    </p>
                    <img src="/images/Portfolio/portfolio3.jpg" alt="" />
                    <p className={s.hov__text}>Концерт в «Ростов Арена»</p>
                </div>
                <div className={s.cont__item}>
                    <p className={s.hov__text}>
                        Установка и настройка звукового оборудования, света и
                        спецэффектов (тяжелый дым, конфетти)
                    </p>
                    <img src="/images/Portfolio/portfolio4.jpg" alt="" />
                    <p className={s.hov__text}>Свадьба в «Дон-Плаза»</p>
                </div>
            </div>
        </div>
    );

export default Portfolio;
