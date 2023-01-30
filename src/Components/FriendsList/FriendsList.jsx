import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import useMediaQuery from '../../utils/hooks/useMediaQuery';
import { FriendItem } from '../FriendItem/FriendItem';
import { useSelector } from 'react-redux';

export const FriendsList = () => {
  const [slideToShow, setSLideToShow] = useState(4);
  const friends = useSelector((state) => state.friends.friendsData);

  let settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: slideToShow,
    slidesToScroll: slideToShow,
    arrows: false,
    dotsClass: 'slick-dots list-dots',
  };

  const isDesktop = useMediaQuery('(min-width: 901px)');
  const isTablet = useMediaQuery('(max-width: 900px)');
  const isTabletToMob = useMediaQuery('(max-width: 650px)');
  const isMobile = useMediaQuery('(max-width: 450px)');

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
    <ul className="friends">
      <Slider {...settings}>
        {friends.slice(0, 8).map((el) => (
          <FriendItem el={el} key={el.id} />
        ))}
      </Slider>
    </ul>
  );
};
