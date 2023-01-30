import { NavLink } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import "./Header.sass";
import useMediaQuery from "../../utils/hooks/useMediaQuery";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export const Header = () => {
  const isTablet = useMediaQuery("(max-width: 950px)");
  return (
    <header className="header">
      <div className="header__content">
        <NavLink to="/" className="header__logo">
          MotoEmotion
        </NavLink>
        {isTablet ? <BurgerMenu /> : <Navigation />}
      </div>
    </header>
  );
};
