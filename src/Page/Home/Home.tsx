import './Home.sass';
import { AboutUs } from '../../Components/AboutUs/AboutUs';
import { EventsList } from '../../Components/EventsList/EventsList';
import { Main } from '../../Components/Main/Main';
import { Pluses } from '../../Components/Pluses/Pluses';
import ContactUs from '../../Components/ContactUs/ContactUs';
import HelpUs from '../../Components/HelpUs/HelpUs';
import { FriendsList } from '../../Components/FriendsList/FriendsList';
import { useRef, useState } from 'react';
import { ModalResponse } from '../../Components/ModalResponse/ModalResponse';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  const [dataForResponse, setDataForResponse] = useState('');
  const [isModalResponseOpened, setIsModalResponseOpened] = useState(false);
  const contactRef = useRef<null | HTMLDivElement>(null);
  const helpRef = useRef<null | HTMLDivElement>(null);

  const scrollToContact = () => contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToHelp = () => helpRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <main className="mainPage">
      <Main scrollToContact={scrollToContact} scrollToHelp={scrollToHelp} />
      <AboutUs scrollToContact={scrollToContact} />
      <Pluses />

      <section className="mainPage__content" id="events">
        <div className="mainPage__content-header">
          <h2 className="mainPage__title">Мероприятия</h2>
          <NavLink to='/events' className='mainPage__button'>Смотреть все</NavLink>
        </div>
        <EventsList />
      </section>
      <ContactUs setDataForResponse={setDataForResponse} setIsModalResponseOpened={setIsModalResponseOpened} contactRef={contactRef} />
      <HelpUs helpRef={helpRef} />

      <section className="mainPage__content" id="friends">
        <div className="mainPage__content-header">
          <h2 className="mainPage__title">Друзья</h2>
          <NavLink to='/friends' className='mainPage__button'>Смотреть все</NavLink>
        </div>
        <FriendsList />
      </section>

      <ModalResponse
        isModalResponseOpened={isModalResponseOpened}
        setIsModalResponseOpened={setIsModalResponseOpened}
        dataForResponse={dataForResponse}
      />
    </main>
  );
};
