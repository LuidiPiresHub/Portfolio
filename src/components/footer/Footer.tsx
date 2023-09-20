import styles from './Footer.module.css';
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className={styles.footer} id='contato'>
      <a href="https://api.whatsapp.com/send/?phone=+5521988687037&text=Olá%2C%20Te%20encontrei%20pelo%20seu%20Porfólio!%20%0AGostaria%20de%20saber%20mais%20sobre%20seus%20serviços!!" target='_blank' className={styles.link}>
        <FaWhatsapp className={styles.logo} />
        <span>Whatsapp</span>
      </a>
      <a href="https://github.com/LuidiPiresHub" target='_blank' className={styles.link}>
        <FaGithub className={styles.logo} />
        <span>Github</span>
      </a>
      <a href="https://www.linkedin.com/in/luídi-pires/" target='_blank' className={styles.link}>
        <FaLinkedin className={styles.logo} />
        <span>LinkedIn</span>
      </a>
      <a href="mailto:luidipiresdev@gmail.com" className={styles.link}>
        <MdEmail className={styles.logo} />
        <span>Gmail</span>
      </a>
    </footer>
  );
}
