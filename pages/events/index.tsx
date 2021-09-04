import { useEffect, useState } from 'react';
import Link from 'next/link';
import { api } from '../../services/api';
import { EventBar } from '../../components/EventBar';
import { Spinner } from '../../components/Spinner';
import styles from './styles.module.scss';

interface EventProps {
  title: string;
  data: string;
}

const Events = ({ data }) => {

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
      <h2>Eventos Disponíveis</h2>

      {screenState === screenStates.loading && <Spinner />}

      {screenState === screenStates.loaded && events.map(event => (
        <Link href="#" key={event.id}>
          <EventBar title={event.title} date={event.date} />
        </Link>
      ))}

    </section>
  )
}

export async function getStaticProps(context) {
  const res = await api.get('events');

  return {
    props: {
      data: res.data
    }
  }
}

export default Events;