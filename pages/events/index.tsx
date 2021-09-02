import { useEffect } from 'react';
import { useState } from 'react';
import { EventBar } from '../../components/EventBar';
import { Spinner } from '../../components/Spinner';
import styles from './styles.module.scss';

const Events = () => {

  const screenStates = {
    loading: "LOADING",
    loaded: "LOADED"
  }

  const [screenState, setScreenState] = useState(screenStates.loading);

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.loaded);
    }, 2 * 1000)
  }, [screenState]);

  return (
    <section className={styles.section}>
      <h2>Eventos Disponíveis</h2>

      {screenState === screenStates.loading && <Spinner />}

      {screenState === screenStates.loaded && (
        <>
          <EventBar title="Inovação Tecnológica" date="10/02/2022"/>
          <EventBar title="Como se tornar um FullStack Developer" date="12/02/2022"/>
          <EventBar title="Frameworks Javascript" date="14/02/2022"/>
          <EventBar title="Utilizando uma API Rest" date="04/03/2022"/>
        </>
      )}

    </section>
  )
}

export default Events;