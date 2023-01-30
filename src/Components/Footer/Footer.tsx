import { NavLink } from 'react-router-dom';
import './Footer.sass';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <NavLink to="/" className="footer__title">MotoEmotion</NavLink>
        <div className="footer__content">
          <div className="footer__content-block">
            <h3 className="footer__block-title">Навигация</h3>
            <nav>
              <ul className="footer__list">
                <li>
                  <a href="#about">О нас</a>
                </li>
                <li>
                  <a href="#events">Мероприяти</a>я
                </li>
                <li>
                  <a href="#contacts">Связаться с нами</a>
                </li>
                <li>
                  <a href="#help">Как помочь</a>
                </li>
                <li>
                  <a href="#friends">Друзья</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__content-block">
            <h3 className="footer__block-title">Контакты</h3>
            <address>
              <ul className="footer__list">
                <li>
                  <a href="tel:+79112854457">+7 911 285-44-57</a>
                </li>
                <li>
                  <a
                    href="mailto:anna@motoemotion.ru"
                    target="_blank"
                    rel="noreferrer"
                  >
                    anna@motoemotion.ru
                  </a>
                </li>
                <li>
                  <ul className="footer__social-list">
                    <li>
                      <a
                        href="https://vk.com/mototherapyspb"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="footer__vk" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://t.me/a_mirnaja"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="footer__tg" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://wa.me/79112854457"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="footer__wa" />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </address>
          </div>
          <div className="footer__content-block">
            <h3 className="footer__block-title footer__block-title_type_logo">
              Разработка сайта
            </h3>
            <ul className="footer__list">
              <li>
                <NavLink className="footer__policy" to='/agreement'>Политика конфиденциальности</NavLink>
              </li>
              <li>Все права защищены {`© ${new Date().getFullYear()}`}</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
