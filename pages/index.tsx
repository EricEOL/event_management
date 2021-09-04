import Link from 'next/link';
import { setCookie } from 'nookies';
import styles from './home.module.scss';

const Home = () => {

  function getProfile(profile) {
    switch (profile) {
      case 'manager':
        setCookie(null, 'profile', 'manager');
        break;
      case 'student':
        setCookie(null, 'profile', 'student');
        break;
      case 'speaker':
        setCookie(null, 'profile', 'speaker');
        break;
    }
  }

  return (
    <div className={styles.containerContent}>

      <div className={styles.welcome}>
        <h2>Seja bem-vindo! 😁</h2>
        <p>Temos muitos eventos preparados para você </p>
      </div>

      <Link href="/manager/signin">
        <div className={styles.card} onClick={() => getProfile("manager")}>
          <img src="/assets/home/manager.jpg" alt="Manager" />
          <span>Sou Gestor</span>
        </div>
      </Link>

      <Link href="/events">
        <div className={styles.card} onClick={() => getProfile("student")}>
          <img src="/assets/home/student.jpg" alt="Student" />
          <span>Sou Aluno</span>
        </div>
      </Link>

      <Link href="/events">
        <div className={styles.card} onClick={() => getProfile("speaker")}>
          <img src="/assets/home/speaker.jpg" alt="Speaker" />
          <span>Sou Palestrante</span>
        </div>
      </Link>

    </div>
  )
}

export default Home;
