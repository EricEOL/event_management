import { useEffect, useState } from 'react';
import nookies, { setCookie } from 'nookies';

import { api } from '../../services/api';

import { Title } from '../../components/Title';
import { EventBar } from '../../components/EventBar';
import { Spinner } from '../../components/Spinner';
import styles from './styles.module.scss';

const Events = ({ data, profile }) => {

  const screenStates = {
    loading: "LOADING",
    loaded: "LOADED"
  }

  const [screenState, setScreenState] = useState(screenStates.loading);
  const [events, setEvets] = useState(data);

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.loaded);
    }, 2 * 1000)
  }, [screenState]);

  return (
    <section className={styles.section}>
      <Title title="Eventos Disponíveis" />

      {screenState === screenStates.loading && <Spinner />}

      {screenState === screenStates.loaded && events.map(event => (
        <EventBar 
          key={event.id} 
          link={profile === 'student' ? `/events/student/${event.id}` : `/events/speaker/${event.id}`}
          title={event.title} 
          date={event.date} 
        />
      ))}

    </section>
  )
}

export async function getServerSideProps(context) {
  const res = await api.get('events');
  
  const cookies = nookies.get(context);

  if(!cookies) {
    setCookie(context, 'profile', 'student');
  }

  const profile = cookies['profile'];

  let data;
  if(profile === 'student') {
    data = res.data.filter(event => event.speaker);
  } else {
    data = res.data.filter(event => !event.speaker);
  }

  return {
    props: {
      data,
      profile
    }
  }
}

export default Events;