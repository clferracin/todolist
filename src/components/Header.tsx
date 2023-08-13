import styles from './Header.module.css';
import { RocketLogo } from './RocketLogo';

export function Header() {
  return (
    <header className={styles.header}>
      <picture className={styles.logo}>
        <RocketLogo/>
      </picture>
      <h1>to<span>do</span></h1>
    </header>
  );
}