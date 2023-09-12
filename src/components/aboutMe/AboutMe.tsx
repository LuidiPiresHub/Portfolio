import { TypeAnimation } from 'react-type-animation';
import myPhoto from '../../assets/myPhoto.jpg';
import styles from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <section className={styles.aboutContainer}>
      <img className={styles.myPhoto} src={myPhoto} alt="Foto de Luidi Pires" />
      <div>
        <h2 className={styles.name}>Luidi Pires</h2>
        <div className={styles.jobContainer}>
          <h1 className={styles.job}>Desenvolvedor</h1>
          <TypeAnimation
            className={styles.job}
            sequence={[
              'Front-End',
              2500,
              'Back-End',
              2500,
              'Fullstack',
              5000,
            ]}
            wrapper="h1"
            cursor={true}
            repeat={Infinity}
          />
        </div>
        <p className={styles.description}>
          Olá, sou Luidi Pires, um jovem apaixonado por tecnologia e programação, com 19 anos de idade.
          Como desenvolvedor web, busco constantemente desafios empolgantes e oportunidades de aprendizado.
          Minha jornada no mundo da programação é guiada pela curiosidade e pela busca incansável por soluções criativas.
          Bem-vindo ao meu portfólio, onde compartilho minha paixão pela construção de experiências digitais incríveis.
        </p>
      </div>
    </section>
  )
}
