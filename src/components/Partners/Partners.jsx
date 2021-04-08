import React from 'react';
import s from './Partners.module.css';

const Partners = () => {
    return (
        <div className={s.image__cont}>
            <img src="/images/Partners/shure.png" alt=""/>
            <img src="/images/Partners/sennheizer.png" alt=""/>
            <img src="/images/Partners/nexo.png" alt=""/>
            <img src="/images/Partners/camco.png" alt=""/>
        </div>
    )
}

export default Partners;