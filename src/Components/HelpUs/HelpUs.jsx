import "./HelpUs.sass";
import Motorcycle from "../../assets/icons/HelpUs/Motorcycle.svg";
import MoneyBox from "../../assets/icons/HelpUs/MoneyBox.svg";
import TruckWeight from "../../assets/icons/HelpUs/TruckWeight.svg";
import { forwardRef } from 'react';

const HelpUs = ({helpRef}) => { 
  return (
    <section className="helpUs" id='help' ref={helpRef}>
      <div className="helpUs__content">
        <h2 className="helpUs__title">Как помочь</h2>
        <ul className="helpUs__list">
          <li className="helpUs__item">
            <img src={Motorcycle} alt="" className="helpUs__img"/>
            <h3 className="helpUs__item-title">Присоединиться к поездке</h3>
            <p className="helpUs__item-text">
            Выберете  удобный вариант: написать нам в ВК (подробно расскажем о поездке) или приехать на точку сбора!
Со всей актуальной информацией о предстоящих мероприятиях  можно ознакомиться в нашей группе ВК или в Telegram.
            </p>
          </li>
          <li className="helpUs__item">
            <img src={TruckWeight} alt="" className="helpUs__img"/>
            <h3 className="helpUs__item-title">Поделиться  необходимым </h3>
            <p className="helpUs__item-text">
            Передать вещи, игрушки, вкусняшки — 
вы можете самостоятельно приобрести (мы заберём), или заказать в Ozon или WildBerries по адресу: Санкт-Петербург, ул. Солидарности 14/1.
            </p>
          </li>
          <li className="helpUs__item">
            <img src={MoneyBox} alt="" className="helpUs__img"/>
            <h3 className="helpUs__item-title">Перечислить деньги</h3>
            <p className="helpUs__item-text">
            Перевести посильную сумму вы можете по телефону: +7 911 285-44-57 МТС с пометкой «Детям»
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default forwardRef(HelpUs)