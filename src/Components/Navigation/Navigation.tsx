import "./Navigation.sass";

export const Navigation = () => {
  return (
    <ul className="navigation">
      <a href="#about" className="navigation__navLink">
        О нас
      </a>
      <a href="#events" className="navigation__navLink">
        Мероприятия
      </a>
      <a href="#contacts" className="navigation__navLink">
        Контакты
      </a>
      <a href="#help" className="navigation__navLink">
        Как помочь
      </a>
      <a href="#friends" className="navigation__navLink">
        Друзья
      </a>
    </ul>
  );
};
