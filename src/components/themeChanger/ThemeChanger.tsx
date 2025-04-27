import { FaSun, FaMoon } from 'react-icons/fa';
import styles from './ThemeChanger.module.css';
import { useState } from 'react';
import { getLocalstorageTheme, setLocalstorageTheme } from '../../utils/localstorage';
import { ITheme } from '../../interfaces/theme.interface';

export default function ThemeChanger() {
  const [theme, setTheme] = useState<ITheme>(() => {
    const theme = getLocalstorageTheme();
    const selectedTheme = theme ? theme : 'light';
    document.body.className = selectedTheme;
    return selectedTheme;
  });

  const handleTheme = (checked: boolean) => {
    const selectedTheme = checked ? 'dark' : 'light';
    document.body.className =`${selectedTheme} transition`;
    setTheme(selectedTheme);
    setLocalstorageTheme(selectedTheme);
  };

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
