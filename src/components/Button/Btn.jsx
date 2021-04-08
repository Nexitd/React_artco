import React from "react";
import s from "./Btn.module.css";
import $ from 'jquery';

const Btn = (props) => {
    const Scroll = () => {
        $(`#${props.id}`).on('click', function(e){
            e.preventDefault();
            $('html, body').animate({scrollTop: $('#contacts').offset().top}, 1500);
        });
    };

    return <button className={s.arend} onClick={ Scroll } id={props.id}>Заказать</button>;
};

export default Btn;
