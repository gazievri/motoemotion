import { Button } from "../Button/Button";
import "./Main.sass";
import useMediaQuery from "../../utils/hooks/useMediaQuery";


export const Main = ({scrollToContact, scrollToHelp}) => {

  const isTablet = useMediaQuery("(max-width: 950px)");

  return (
    <section className="main" >
      <div className="main__content">
        <div className='main__img'>

        </div>
        <div className="main__head">
          <h1 className="main__title">
            M<span className="main__title_color_title">О</span>T
            <span className="main__title_color_title">О</span>EMOTION
          </h1>
          <p className="main__paragraph">Эмоциональная реабилитация</p>
        </div>
        <div className="main__buttons">
          <Button lable="Принять участие" width="280px" fn={scrollToContact}/>
          <Button lable="Помочь" transparent={true} width={isTablet ? "280px" : '203px'} fn={scrollToHelp}/>
        </div>
      </div>

    </section>
  );
}; 
