import React from "react";
import s from "./Sound.module.css";
import Btn from "../../../Button/Btn";
import EquipItem from "../EquipItem/EquipItem";

const Sound = (props) => {
    
    let equipEl = props.state.sound.map((elem) => <EquipItem id={elem.id} title={elem.title} subtitle={elem.subtitle} 
        descr={elem.descr} oldPrice={elem.oldPrice} currentPrice={elem.currentPrice} image={elem.image}/>);
    
    return (
        <div className={s.wrapper}>
            { equipEl }
        </div>
    );
};

export default Sound;
