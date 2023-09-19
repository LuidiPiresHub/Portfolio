import { useState } from 'react';
import ThemeChanger from '../themeChanger/ThemeChanger'
import styles from './Header.module.css'

export default function Header() {
  const [left, setLeft] = useState(-100);
  const [isActive, setIsActive] = useState(false);
  const [isTranparent, setIsTranparent] = useState(true);

  const handleClick = () => {
    setIsActive((prevState) => !prevState);
    setLeft(isActive ? -100 : 0)
  }

  if (isActive) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  window.onscroll = () => window.scrollY > 0 ? setIsTranparent(false) : setIsTranparent(true);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <header className={styles.header} style={{ backgroundColor: isTranparent ? 'transparent' : 'var(--bgSc)' }}>
      <button type='button' className={styles.mobileNavibar} onClick={handleClick}>
        <span className={`${styles.bar} ${isActive && styles.barActive}`}></span>
        <span className={`${styles.bar} ${isActive && styles.barActive}`}></span>
        <span className={`${styles.bar} ${isActive && styles.barActive}`}></span>
      </button>
      <h1 className={styles.title}>
        <button type='button' onClick={scrollToTop}>Portfolio</button>
      </h1>
      <ul className={styles.ul} style={{ left: `${left}vw` }}>
        <li>
          <button type='button' onClick={scrollToTop}>Inicio</button>
        </li>
        <li>
          <a href="#sobre-mim">Sobre mim</a>
        </li>
        <li>
          <a href="#habilidades">Habilidades</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
        <li>
          <ThemeChanger />
        </li>
      </ul>
    </header>
  )
}
