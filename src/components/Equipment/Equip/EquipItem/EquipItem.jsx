import React from "react";
import s from "./EquipItem.module.css";
import Btn from "../../../Button/Btn";
import $ from 'jquery';

const EquipItem = (props) => {
    return (
        <div className={s.cont}>
            <div className={s.descr}>
                <h2 className={s.title}>{props.title}</h2>
                <h3 className={s.subtitle}>{props.subtitle}</h3>
                <p className={s.description}>
                    {props.descr}
                </p>
                <div className={s.price}>
                    <div className={s.price__section}>
                        <p className={s.old__price}>{props.oldPrice}</p>
                        <p className={s.current__price}>{props.currentPrice}</p>
                        <p className={s.price__descr}>* цена со скидкой в сутки</p>
                    </div>
                    <div className={s.price__section}>
                        <Btn id={props.id}/>
                    </div>
                </div>
            </div>
            <div className={s.img}>
                <img src={props.image} alt=""/>
            </div>
        </div>
    );
};

export default EquipItem;