import ThemeChanger from '../themeChanger/ThemeChanger'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Portfolio</h1>
      <ul className={styles.ul}>
        <li>Inicio</li>
        <li>Sobre mim</li>
        <li>Habilidade</li>
        <li>Contato</li>
      </ul>
    <ThemeChanger />
    </header>
  )
}
