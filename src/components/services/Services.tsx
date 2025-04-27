import styles from './Services.module.css';
import { FaDesktop, FaCog } from 'react-icons/fa';

export default function Services() {
  return (
    <section id='serviços' className={`pageSection ${styles.servicesContainer}`}>
      <h2 className={styles.subtitle}>O que eu faço?</h2>
      <div className={styles.servicesWrapper}>
        <article className={styles.service}>
          <FaDesktop size={35} />
          <h3 className={styles.area}>Front-End</h3>
          <p>
            Criação de interfaces modernas, responsivas e focadas na melhor experiência para o usuário, utilizando tecnologias como HTML, CSS, JavaScript e React.js.
          </p>
        </article>
        <article className={styles.service}>
          <FaCog size={35} />
          <h3 className={styles.area}>Back-End</h3>
          <p>
            Desenvolvimento de APIs robustas com Node.js, integrando bancos de dados relacionais e não-relacionais para garantir performance e escalabilidade.
          </p>
        </article>
      </div>
    </section>
  );
}
