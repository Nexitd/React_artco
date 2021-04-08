import React from 'react';
import s from './Header.module.css';
import Btn from '../Button/Btn';

const Header = (props) => {
    return (
        <div className={s.main__cont}>
            <h1 className={s.title}>Сделаем ваш праздник ярче</h1>
            <h3 className={s.subtitle}>Аренда технического оборудования</h3>
            <Btn id='headerId'/>
        </div>
    )
}

export default Header;