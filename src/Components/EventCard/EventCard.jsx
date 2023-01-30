import { Button } from "../Button/Button";
import "./EventCard.sass";
import { useDispatch } from "react-redux";
import { setActiveItem } from "../../store/activeItemSlice";
import { openModal } from "../../store/modalSlice";

export const EventCard = ({ el }) => {
  const despatch = useDispatch();

  const setData = () => {
    // Выбор активного события для модального окна и сохранение его в стейт
    despatch(setActiveItem(el));
    // Открытие модального окна через стейт
    despatch(openModal());
  };

  const getDate = (el) => {
    let month = el.slice(6, 7);
    let day = el.slice(8, 10);
    let year = el.slice(0, 4);
    const months = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октябрь",
      "ноября",
      "декабря",
    ];
    return day + " " + months[month-1] + " " + year;
  };

  return (
    <li className="eventCard" key={el.id}>
      <div className="eventCard__image-container">
        <img src={el.images[0].image} alt="" className="eventCard__img" />
      </div>
      <p className="eventCard__date">{getDate(el.date.slice(0, 10))}</p>
      <h3 className="eventCard__title">{el.title}</h3>
      <Button lable="Смотреть" transparent="true" width="305" fn={setData} />
    </li>
  );
};
