import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';

import styles from './styles.module.scss';

export const EventBar = () => {
  return (
    <Link href="#">
      <div className={styles.box}>

        <div className={styles.informations}>
          <strong>Inovação Técnológica</strong>
          <span>Data: 10/02/2022</span>
        </div>

        <div className={styles.continue}>
          <FiChevronRight size={30} color="#ffffff" />
        </div>

      </div>
    </Link>
  )
}