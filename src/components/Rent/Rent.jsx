import React, { useState, useEffect, useRef } from "react";
import InputElement from "react-input-mask";
import s from "./Rent.module.css";
import Btn from "../Button/Btn";
import "./popup.css";

const Rent = (props) => {
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [phoneDirty, setPhoneDirty] = useState(false);
    const [nameDirty, setNameDirty] = useState(false);
    const [phoneError, setPhoneError] = useState(
        'Поле "Телефон" не может быть пустым'
    );
    const [nameError, setNameError] = useState(
        'Поле "Имя" не может быть пустым'
    );
    const [formValid, setFormValid] = useState(false);

    const popup = useRef();

    useEffect(() => {
        if (nameError || phoneError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [nameError, phoneError]);

    const nameHandler = (e) => {
        let val = e.target.value;
        let reg = /^[a-zA-Zа-яА-Я]+$/iu;

        setName(val);

        if (val === "" || val === " " || !reg.test(val)) {
            setNameError("Некорректное имя");
        } else {
            setNameError("");
        }
    };

    const phoneHandler = (e) => {
        let val = e.target.value;
        let reg = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

        setPhone(val);
        if (val === "" || val === " " || !reg.test(val) || val.length < 18) {
            setPhoneError("Некорректный номер телефона");
        } else {
            setPhoneError("");
        }
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
            case "phone":
                setPhoneDirty(true);
                break;
            case "name":
                setNameDirty(true);
                break;
        }
    };

    return (
        <div className={s.cont__rend} id="contacts">
            <h2 className={s.title}>Заказать оборудование</h2>
            <form className={s.form}>
                <div className={s.form__input}>
                    <label htmlFor="phone" className={s.name}>
                        Телефон
                    </label>
                    {phoneDirty && phoneError && (
                        <div className="popup" ref={popup}>
                            <p className="status">{phoneError}</p>
                        </div>
                    )}
                    <div className={s.valid__cont}>
                        <InputElement
                            mask="+7 (999) 999-99-99"
                            onChange={(e) => phoneHandler(e)}
                            value={phone}
                            onBlur={(e) => blurHandler(e)}
                            name="phone"
                            placeholder="+ 7 (999)-999-99-99"
                        />

                        {!phoneError && (
                            <svg
                                version="1.0"
                                xmlns="http://www.w3.org/2000/svg"
                                width="25px"
                                height="25px"
                                viewBox="0 0 1280.000000 1034.000000"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <g
                                    transform="translate(0.000000,1034.000000) scale(0.100000,-0.100000)"
                                    fill="#000000"
                                    stroke="none"
                                >
                                    <path
                                        d="M7625 7270 l-3070 -3070 -1232 1232 -1233 1233 -1045 -1045 c-691
                                    -691 -1045 -1052 -1045 -1065 0 -29 4527 -4555 4557 -4555 15 0 1188 1169
                                    4130 4115 2259 2263 4110 4122 4112 4131 4 20 -2065 2094 -2089 2094 -8 0
                                    -1397 -1381 -3085 -3070z"
                                    />
                                </g>
                            </svg>
                        )}
                    </div>
                </div>
                <div className={s.form__input}>
                    <label htmlFor="name" className={s.name}>
                        Имя
                    </label>
                    {nameDirty && nameError && (
                        <div className="popup">
                            <p className="status">{nameError}</p>
                        </div>
                    )}
                    <div className={s.valid__cont}>
                        <input
                            onChange={(e) => nameHandler(e)}
                            type="text"
                            value={name}
                            name="name"
                            id="name"
                            onBlur={(e) => blurHandler(e)}
                        />
                        {!nameError && (
                            <svg
                                version="1.0"
                                xmlns="http://www.w3.org/2000/svg"
                                width="25px"
                                height="25px"
                                viewBox="0 0 1280.000000 1034.000000"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <g
                                    transform="translate(0.000000,1034.000000) scale(0.100000,-0.100000)"
                                    fill="#000000"
                                    stroke="none"
                                >
                                    <path
                                        d="M7625 7270 l-3070 -3070 -1232 1232 -1233 1233 -1045 -1045 c-691
                                    -691 -1045 -1052 -1045 -1065 0 -29 4527 -4555 4557 -4555 15 0 1188 1169
                                    4130 4115 2259 2263 4110 4122 4112 4131 4 20 -2065 2094 -2089 2094 -8 0
                                    -1397 -1381 -3085 -3070z"
                                    />
                                </g>
                            </svg>
                        )}
                    </div>
                </div>
                <div className={s.rend}>
                    <button className={s.arend} disabled={!formValid}>
                        Заказать
                    </button>
                    <p className={s.politic}>
                        Нажимая на кнопку, я соглашаюсь c
                        <span> Политикой конфиденциальности</span>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Rent;
