import './EventsPage.sass';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '../../Components/Button/Button';
import { EventCard } from '../../Components/EventCard/EventCard';
import { Pagination } from '../../Components/Pagination/Pagination';
import usePagination from '../../utils/hooks/usePagination';
import { useState, useEffect } from 'react';
import useMediaQuery from '../../utils/hooks/useMediaQuery';
import { useSelector } from 'react-redux';

export const EventsPage = () => {
  let navigate = useNavigate();

  const events = useSelector(state => state.events.eventsData);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [gridColumns, setGridColumns] = useState(3);
  const isMobile = useMediaQuery('(max-width: 850px)');
  const isTablet = useMediaQuery('(max-width: 1200px)');
  const isDesktop = useMediaQuery('(min-width: 1201px)');

  const goBack = () => {
    navigate('/');
  };

  // Использование кастомного хука usePagination
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    gaps,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: itemsPerPage,
    count: events.length,
  });

  useEffect(() => {
    if (isDesktop) {
      setGridColumns(3);
      setItemsPerPage(6);
    } else if (!isDesktop && isTablet && !isMobile) {
      setGridColumns(2);
      setItemsPerPage(4);
    } else if (!isDesktop && isTablet && isMobile) {
      setGridColumns(1);
      setItemsPerPage(4);
    }
  }, [isMobile, isTablet, isDesktop]);

  return (
    <section className="eventsPage">
      {/* <Button lable="На главную" fn={goBack} /> */}

      <div className="eventsPage__heading">
      <h1 className="eventsPage__title">ВСЕ МЕРОПРИЯТИЯ</h1>
        <NavLink to='/' className='eventsPage__heading-link'>на главную</NavLink>
      </div>
      {/* <h1 className='eventsPage__title'>ВСЕ МЕРОПРИЯТИЯ</h1> */}
      <ul
        className="eventsPage__card-container"
        style={{ gridTemplateColumns: `repeat(${gridColumns}, 1fr)` }}
      >
        {events.slice(firstContentIndex, lastContentIndex).map((item) => (
          <EventCard el={item} key={item.id} />
        ))}
      </ul>
      <div className="eventsPage__pagination">
        {events <= 6 ?         <Pagination
          options={{ nextPage, prevPage, page, gaps, setPage, totalPages }}
        /> :''}

      </div>
    </section>
  );
};
