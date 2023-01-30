import "./AboutUs.sass";
import aboutUsImg from "../../assets/images/aboutUs.jpg";
import { Button } from "../Button/Button";
import useMediaQuery from '../../utils/hooks/useMediaQuery';

export const AboutUs = ({scrollToContact}) => {
  const isMobile = useMediaQuery('(max-width: 400px)')
  return (
    <section className="aboutUs" id="about">
      <div className="aboutUs__content">
        <article className="aboutUs__article">
          <h2 className="aboutUs__title">О нас</h2>
          <p className="aboutUs__description">
            MotoEmotion — это сообщество людей, связанных общими интересами —
            мотоциклы и большие добрые сердца.
          </p>
          <p className="aboutUs__description">
            Мы прововодим праздники для детей с ограниченными возможностями
            и помогаем детским центрам.
          </p>
          <p className="aboutUs__description">Исполнение мечт — наш конёк.</p>
        </article>
        <img className="aboutUs__img" src={aboutUsImg} alt="Это мы" />
      </div>
      <div className="aboutUs__button">
        <Button lable="Связаться с нами" width={isMobile? "100%" : '306px'}  fn={scrollToContact}/>
      </div>
    </section>
  );
};
