import React from 'react';
import s from './Light.module.css';
import EquipItem from '../EquipItem/EquipItem';

const Light = (props) => {
    let equipEl = props.state.light.map((elem) => <EquipItem id={elem.id} title={elem.title} subtitle={elem.subtitle} 
    descr={elem.descr} oldPrice={elem.oldPrice} currentPrice={elem.currentPrice} image={elem.image}/>);

return (
    <div className={s.wrapper}>
        { equipEl }
    </div>
);
}

export default Light;