import { EventBar } from '../../components/EventBar';
import styles from './styles.module.scss';

const Events = () => {
  return (
    <section className={styles.section}>
      <h2>Eventos Disponíveis</h2>

      <EventBar />
      <EventBar />
      <EventBar />
    </section>
  )
}

export default Events;