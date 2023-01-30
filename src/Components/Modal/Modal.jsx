import './Modal.sass';
import { Button } from '../Button/Button';
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../store/modalSlice';
import { useState } from 'react';
import { useImageSize } from 'react-image-size';

export const Modal = () => {
  // const [isVertical, setIsVertical] = useState(false || true);
  // console.log(isVertical)
  let settings = {
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: 'slick-dots list-dots',
  };

  const data = useSelector((state) => state.active.activeItem);

  const dispatch = useDispatch();

  // Обределяем размеры картинки и если высота больше ширины возвращаем true
  // Используем для применения спец класса css для вписывания вертикальной картинки в слайдер
  const getOrientation = (url) => {
    let width;
    let height;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, { loading, error }] = useImageSize(url);
    if (data) {
      width = data.width;
      height = data.height;
    }
    if(width < height) {return true} else {return false};
  }

  return (
    <div className="modal__backdrop">
      <div className="modal__container">
        <button
          className="modal__close-button"
          onClick={() => dispatch(closeModal())}
        />
        <h3 className="modal__title">{data.title}</h3>

        <div className="modal__text">
          <div className="modal__image">
            {data.video ? (
              <iframe
                className="modal__video"
                src={data.video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              ''
            )}

            <Slider {...settings}>
              {data.images.map((el) => (
                <div className="modal__img-container" key={el.id}>
                  <img
                    src={el.image}
                    className={`modal__img ${getOrientation(el.image) && 'modal__img_vertical'}`}
                    alt={`Фотография с мероприятия ${data.title}`}
                  />
                </div>
              ))}
            </Slider>
          </div>
          {data.texts.map((el) => (
            <p className="modal__text" key={el.id}>{el.text}</p>
          ))}
        </div>

        <Button
          lable="Назад"
          transparent="true"
          fn={() => dispatch(closeModal())}
        />
      </div>
    </div>
  );
};
