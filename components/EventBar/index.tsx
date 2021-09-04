import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';

import styles from './styles.module.scss';

export const EventBar = ({link, title, date}) => {
  return (
    <Link href={link}>
      <div className={styles.box}>

        <div className={styles.informations}>
          <strong>{title}</strong>
          <span>Data: {date}</span>
        </div>

        <div className={styles.continue}>
          <FiChevronRight size={30} color="#ffffff" />
        </div>

      </div>
    </Link>
  )
}