import { useState } from 'react';
import ThemeChanger from '../themeChanger/ThemeChanger';
import styles from './Header.module.css';

export default function Header() {
  const [left, setLeft] = useState(-100);
  const [isActive, setIsActive] = useState(false);
  const [isTranparent, setIsTranparent] = useState(true);

  const handleClick = () => {
    setIsActive((prevState) => !prevState);
    setLeft(isActive ? -100 : 0);
  };

  if (isActive && window.innerWidth <= 768) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  window.onscroll = () => window.scrollY > 0 ? setIsTranparent(false) : setIsTranparent(true);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <header className={`${styles.header} ${!isTranparent ? styles.filled : ''}`.trim()}>
      <button type='button' className={styles.mobileNavibar} onClick={handleClick}>
        <span className={`${styles.bar} ${isActive ? styles.barActive : ''}`.trim()}></span>
        <span className={`${styles.bar} ${isActive ? styles.barActive : ''}`.trim()}></span>
        <span className={`${styles.bar} ${isActive ? styles.barActive : ''}`.trim()}></span>

      </button>
      <h1 className={styles.title}>
        <button type='button' onClick={scrollToTop}>Portfolio</button>
      </h1>
      <ul className={styles.ul} style={{ left: `${left}vw` }}>
        <li>
          <button type='button' onClick={() => {
            scrollToTop();
            handleClick();
          }}>Inicio</button>
        </li>
        <li>
          <a onClick={handleClick} href="#sobre-mim">Sobre mim</a>
        </li>
        <li>
          <a onClick={handleClick} href="#habilidades">Habilidades</a>
        </li>
        <li>
          <a onClick={handleClick} href="#projetos">Projetos</a>
        </li>
        <li>
          <a onClick={handleClick} href="#contato">Contato</a>
        </li>
        <li>
          <ThemeChanger />
        </li>
      </ul>
    </header>
  );
}
