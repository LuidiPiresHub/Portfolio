import { useEffect, useState } from 'react';
import ThemeChanger from '../themeChanger/ThemeChanger';
import styles from './Header.module.css';
import { scrollToTop } from '../../utils/scrollToTop';

export default function Header() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isTransparent, setIsTransparent] = useState<boolean>(true);

  const handleClick = () => {
    if (window.innerWidth <= 800) {
      setIsActive((prevState) => {
        document.body.style.overflow = prevState ? 'auto' : 'hidden';
        return !prevState;
      });
    }
  };

  useEffect(() => {
    const onScroll = () => setIsTransparent(window.scrollY === 0);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const topics = [
    'Sobre mim',
    'Serviços',
    'Certificados',
    'Techs',
    'Projetos',
    'Contato',
  ];

  const formatTopic = (topic: string): string => {
    const formattedTopic = topic.toLowerCase().replace(/\s+/g, '-');
    return `#${formattedTopic}`;
  };

  return (
    <header className={`${styles.header} ${!isTransparent ? styles.filled : ''}`.trim()}>
      <button type='button' className={styles.mobileNavibar} onClick={handleClick}>
        <span className={`${styles.bar} ${isActive ? styles.barActive : ''}`.trim()}></span>
        <span className={`${styles.bar} ${isActive ? styles.barActive : ''}`.trim()}></span>
        <span className={`${styles.bar} ${isActive ? styles.barActive : ''}`.trim()}></span>
      </button>
      <h1 className={styles.title} onClick={scrollToTop}>Portfolio</h1>
      <ul className={`${styles.ul} ${isActive ? styles.ulActive : ''}`.trim()}>
        {topics.map((topic) => (
          <li key={topic} className={styles.li} onClick={handleClick}>
            <a href={formatTopic(topic)} className={styles.topic}>{topic}</a>
          </li>
        ))}
        <li>
          <ThemeChanger />
        </li>
      </ul>
    </header>
  );
}
