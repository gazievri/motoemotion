import './EventsList.sass';
import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import useMediaQuery from '../../utils/hooks/useMediaQuery';
import { useDispatch } from 'react-redux';
import { openModal } from '../../store/modalSlice';
import { useSelector } from 'react-redux';

import { EventCard } from '../EventCard/EventCard';

export const EventsList = () => {
  const events = useSelector((state) => state.events.eventsData);
  const [slideToShow, setSLideToShow] = useState(4);

  const dispatch = useDispatch();

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: slideToShow,
    slidesToScroll: slideToShow,
    arrows: false,
    dotsClass: 'slick-dots list-dots',
  };

  const isDesktop = useMediaQuery('(min-width: 1301px)');
  const isTablet = useMediaQuery('(max-width: 1300px)');
  const isTabletToMob = useMediaQuery('(max-width: 999px)');
  const isMobile = useMediaQuery('(max-width: 850px)');


  useEffect(() => {
    if (isDesktop) {
      setSLideToShow(4);
    } else if (isTablet && !isTabletToMob && !isMobile) {
      setSLideToShow(3);
    } else if (isTablet && isTabletToMob && !isMobile) {
      setSLideToShow(2);
    } else if (isTablet && isTabletToMob && isMobile) {
      setSLideToShow(1);
    }
  }, [isDesktop, isMobile, isTablet, isTabletToMob]);

  return (
    <div className="eventsList">
        <Slider {...settings}>
          {events.slice(0, 6).map((el) => (
            <EventCard
              el={el}
              key={el.id}
              toggleModal={() => dispatch(openModal())}
            />
          ))}
        </Slider>
    </div>
  );
};
