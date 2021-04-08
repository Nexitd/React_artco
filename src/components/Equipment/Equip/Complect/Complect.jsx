import React from "react";
import s from "./Complect.module.css";
import EquipItem from '../EquipItem/EquipItem';

const Complect = ({ state }) => {
    let equipEl = state.complect.map((elem) => (
        <EquipItem
            title={elem.title}
            id={elem.id}
            subtitle={elem.subtitle}
            descr={elem.descr}
            oldPrice={elem.oldPrice}
            currentPrice={elem.currentPrice}
            image={elem.image}
        />
    ));

    return <div className={s.wrapper}>{equipEl}</div>;
};

export default Complect;
