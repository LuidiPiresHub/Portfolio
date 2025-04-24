import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer id='contato' className={styles.footer}>
      <ul className={styles.socialList}>
        <li className={styles.list}>
          <a href="https://github.com/LuidiPiresHub" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.link}>
            <FaGithub />
          </a>
        </li>
        <li className={styles.list}>
          <a href="https://www.linkedin.com/in/luidi-pires/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.link}>
            <FaLinkedin />
          </a>
        </li>
        <li className={styles.list}>
          <a href="https://api.whatsapp.com/send/?phone=+5521988687037&text=Olá%2C%20Te%20encontrei%20pelo%20seu%20Porfólio!%20%0AGostaria%20de%20saber%20mais%20sobre%20seus%20serviços!!" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={styles.link}>
            <FaWhatsapp />
          </a>
        </li>
        <li className={styles.list}>
          <a href="mailto:luidipiresdev@gmail.com" aria-label="E-mail" className={styles.link}>
            <FaEnvelope />
          </a>
        </li>
      </ul>
      <p className={styles.copy}>© {new Date().getFullYear()} Luidi Pires. Todos os direitos reservados.</p>
    </footer>
  );
}
