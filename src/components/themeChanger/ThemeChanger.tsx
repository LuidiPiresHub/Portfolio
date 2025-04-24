import { FaSun, FaMoon } from 'react-icons/fa';
import styles from './ThemeChanger.module.css';
import { useEffect, useState } from 'react';
import { getLocalstorageTheme, setLocalstorageTheme } from '../../utils/localstorage';
import { ITheme } from '../../interfaces/theme.interface';

export default function ThemeChanger() {
  const [theme, setTheme] = useState<ITheme>(() => {
    const theme = getLocalstorageTheme();
    return theme ? theme : 'light';
  });

  const handleTheme = (checked: boolean) => {
    const currentTheme = checked ? 'dark' : 'light';
    setTheme(currentTheme);
    setLocalstorageTheme(currentTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <label htmlFor='themeChanger' className={styles.themeChanger}>
      <input
        id='themeChanger'
        type='checkbox'
        className={styles.checkbox}
        onChange={({ target: { checked }}) => handleTheme(checked)}
        checked={theme === 'dark'}
      />
      <div className={styles.ball} />
      <FaMoon size={20} className={styles.icon} />
      <FaSun size={20} className={styles.icon} />
    </label>
  );
}
