import { NavLink, useNavigate } from 'react-router-dom';
import './FriendsPage.sass';
import { Pagination } from '../../Components/Pagination/Pagination';
import usePagination from '../../utils/hooks/usePagination';
import { useState, useEffect } from 'react';
import useMediaQuery from '../../utils/hooks/useMediaQuery';
import { FriendItem } from '../../Components/FriendItem/FriendItem';
import { useSelector } from 'react-redux';

export const FriendsPage = () => {
  let navigate = useNavigate();

  const friends = useSelector(state => state.friends.friendsData)
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [gridColumns, setGridColumns] = useState(3);
  const isMobile = useMediaQuery('(max-width: 550px)');
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
    count: friends.length,
  });

  useEffect(() => {
    if (isDesktop) {
      setGridColumns(3);
      setItemsPerPage(6);
    } else if (!isDesktop && isTablet && !isMobile) {
      setGridColumns(2);
      setItemsPerPage(6);
    } else if (!isDesktop && isTablet && isMobile) {
      setGridColumns(2);
      setItemsPerPage(6);
    }
  }, [isMobile, isTablet, isDesktop]);

  return (
    <section className="friendsPage">
      <div className="friendsPage__heading">
      <h1 className="friendsPage__title">ВСЕ ДРУЗЬЯ</h1>
        <NavLink to='/' className='friendsPage__heading-link'>на главную</NavLink>
      </div>
      
      <ul
        className="friendsPage__card-container"
        style={{ gridTemplateColumns: `repeat(${gridColumns}, 1fr)` }}
      >
        {friends.slice(firstContentIndex, lastContentIndex).map((el) => (
          <FriendItem el={el} title/>
        ))}
      </ul>
      <div className="friendsPage__pagination">
        <Pagination
          options={{ nextPage, prevPage, page, gaps, setPage, totalPages }}
        />
      </div>
    </section>
  );
};
