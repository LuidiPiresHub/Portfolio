import { FaSun, FaMoon } from 'react-icons/fa';
import styles from './ThemeChanger.module.css';
import { useEffect, useState } from 'react';

export default function ThemeChanger() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty('--bg', isDarkMode ? 'rgb(33, 33, 33)' : 'rgb(240, 240, 240)');
    document.documentElement.style.setProperty('--cl', isDarkMode ? 'rgb(240, 240, 240)' : 'rgb(33, 33, 33)');
  }, [isDarkMode])

  return (
    <label htmlFor='themeChanger' className={styles.themeChanger}>
      <input
        id='themeChanger'
        type='checkbox'
        className={styles.checkbox}
        onChange={({ target: { checked }}) => setIsDarkMode(checked)}
      />
      <div className={styles.ball} />
      <FaMoon size={20} color='#f1c30f' />
      <FaSun size={20} color='#f1c30f' />
    </label>
  )
}
