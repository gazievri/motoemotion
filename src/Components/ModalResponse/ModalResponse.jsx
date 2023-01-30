import './ModalResponse.sass';
import { Button } from '../Button/Button';

export const ModalResponse = ({
  isModalResponseOpened,
  setIsModalResponseOpened,
  dataForResponse = 'Спасибо за сообщение! Мы вам перезвоним',
}) => {

  return (
    <div className={`response__backdrop ${isModalResponseOpened && 'response__backdrop_opened'}`}>
      <div className="response__container">
        <h3 className="response__title">Спасибо за сообщение! Мы вам перезвоним</h3>
        <Button lable="Закрыть" transparent="true" fn={() => setIsModalResponseOpened(false)} />
      </div>
    </div>
  );
};
