import React from "react";
import s from "./Effects.module.css";
import EquipItem from '../EquipItem/EquipItem';

const Effects = (props) => {
    let equipEl = props.state.effects.map((elem) => (
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

export default Effects;
