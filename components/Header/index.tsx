import Link from 'next/link';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/"><a><img src="/assets/logo2.png" alt="Gestão de Eventos" /></a></Link>
    </header>
  )
}
