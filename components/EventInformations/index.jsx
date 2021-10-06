import styles from './eventinformations.module.scss';

export const EventInformations = ({ title, speaker, date, duration, children }) => {

  return (
    <div className={styles.informations}>
      {children}
      <ul>
        <li>Tema: <strong>{title}</strong></li>
        <li>Palestrante: <strong>{speaker}</strong></li>
        <li>Data: <strong>{date}</strong></li>
        <li>Duração: <strong>{duration}</strong></li>
      </ul>
    </div>
  )
}