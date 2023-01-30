import "./Styles/@globals.sass";
import { Home } from "./Page/Home/Home";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { NotFound } from "./Components/NotFound/NotFound";
import Agreement from "./Page/Agreement/Agreement";
import { useEffect } from "react";
import { FriendsPage } from "./Page/FriendsPage/FriendsPage";
import { EventsPage } from "./Page/EventsPage/EventsPage";
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { temp_friends } from './TempData/TEMP_FRIENDS';
import { temp_news } from './TempData/TEMP_EVENTS';
import { addFriendsData } from './store/friendsSlice';
import { addEventsData } from './store/eventsSlice';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import { Modal } from './Components/Modal/Modal'

function App() {
  // Отслеживаем url
  const { pathname } = useLocation();

  const isModalOpen = useSelector((state: RootState) => state.modal.modalIsOpened)

  let dispatch = useDispatch()


  // Каждый раз при именение url перемещаемся в начало страницы
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  useEffect(() => {
    axios('https://api.motoemotion.ru/api/event', { headers: { 'Content-Type': 'application/json', 'cors': 'no-cors' } })
      .then(res => {
        dispatch(addEventsData(res.data.reverse()));
      })

  axios('https://api.motoemotion.ru/api/partners/', { headers: { 'Content-Type': 'application/json', 'cors': 'no-cors' } })
      .then(res => {
        dispatch(addFriendsData(res.data.reverse()));
      })

    // dispatch(addEventsData(temp_news));
    // dispatch(addFriendsData(temp_friends));

  }, [])

  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agreement" element={<Agreement />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/friends" element={<FriendsPage />} />
      </Routes>
      <Footer />
      {isModalOpen && (
        <Modal />
      )}
    </div>
  );
}

export default App;
