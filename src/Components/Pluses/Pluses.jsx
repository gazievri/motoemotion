import './Pluses.sass';
import confetti from '../../assets/icons/Pluses/Confetti.svg';
import doll from '../../assets/icons/Pluses/Doll.svg';
import inLove from '../../assets/icons/Pluses/InLove.svg';
import People from '../../assets/icons/Pluses/People.svg';

export const Pluses = () => {

    return (
        <section className="pluses">
            <ul className="pluses__content">
                <li className="pluses__item">
                    <img className='pluses__item-img' src={People} alt='' />
                    <h2 className="pluses__item-title">Более 20 активных участников проекта</h2>
                </li>
                <li className="pluses__item">
                <img className='pluses__item-img' src={inLove} alt='' />
                    <h2 className="pluses__item-title">Дарим неизмеримое количество эмоций</h2>
                </li>
                <li className="pluses__item">
                <img className='pluses__item-img' src={confetti} alt='' />
                    <h2 className="pluses__item-title">Проводим более  10 мероприятий круглый год</h2>
                </li>
                <li className="pluses__item">
                    <img className='pluses__item-img' src={doll} alt='' />
                    <h2 className="pluses__item-title">Дарим радость и детям, и взрослым</h2>
                </li>
            </ul>
        </section>
    )
}