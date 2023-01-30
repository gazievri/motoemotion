import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import "./BurgerMenu.sass";

const BurgerMenu = () => {
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  let location = useLocation();

  function handleOpenBurger() {
    if (!isBurgerOpen) {
      setBurgerOpen(true);
    } else if (isBurgerOpen) {
      setBurgerOpen(false);
    }
  }

  function handleCloseBurger() {
    setBurgerOpen(false);
  }

  useEffect(() => {
    setBurgerOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleCloseBurger);
  }, []);

  return (
    <>
      <button
        className={!isBurgerOpen ? "burgerButton" : "burgerButton active"}
        onClick={handleOpenBurger}
      >
        {" "}
        <span />
      </button>
      <div className={isBurgerOpen ? "burger burger_opened" : "burger"}>
        <div className="burger__container">
          <Navigation />
          <ul className="burger__socials">
            <a href='https://vk.com/mototherapyspb' className="burger__link burger__link_type_vk" target='_blank' rel="noreferrer"></a>
            <a href='https://wa.me/79112854457' className="burger__link burger__link_type_wa" target='_blank' rel="noreferrer"></a>
            <a href='https://t.me/a_mirnaja' className="burger__link burger__link_type_tg" target='_blank' rel="noreferrer"></a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
