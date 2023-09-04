import { useState } from 'react';
import ThemeChanger from '../themeChanger/ThemeChanger'
import styles from './Header.module.css'

export default function Header() {
  const [left, setLeft] = useState(-100);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((prevState) => !prevState);
    setLeft(isActive ? -100 : 0)
  }
  
  return (
    <header className={styles.header}>
      <button type='button' className={styles.mobileNavibar} onClick={handleClick}>
        <span className={`${styles.bar} ${isActive && styles.barActive}`}></span>
        <span className={`${styles.bar} ${isActive && styles.barActive}`}></span>
        <span className={`${styles.bar} ${isActive && styles.barActive}`}></span>
      </button>
      <h1 className={styles.title}>Portfolio</h1>
      <ul className={styles.ul} style={{ left: `${left}vw` }}>
        <li>Inicio</li>
        <li>Sobre mim</li>
        <li>Habilidade</li>
        <li>Contato</li>
        <li><ThemeChanger /></li>
      </ul>
    </header>
  )
}
