import Link from 'next/link';
import styles from './home.module.scss';

const Home = () => {
  return (
    <div className={styles.containerContent}>

      <Link href="/manager/signin">
        <div className={styles.card}>
          <img src="/assets/home/manager.jpg" alt="Manager" />
          <span>Sou Gestor</span>
        </div>
      </Link>

      <Link href="#">
        <div className={styles.card}>
          <img src="/assets/home/student.jpg" alt="Manager" />
          <span>Sou Aluno</span>
        </div>
      </Link>

      <Link href="#">
        <div className={styles.card}>
          <img src="/assets/home/speaker.jpg" alt="Manager" />
          <span>Sou Palestrante</span>
        </div>
      </Link>

    </div>
  )
}

export default Home;
