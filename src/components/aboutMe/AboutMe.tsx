import { TypeAnimation } from 'react-type-animation';
import styles from './AboutMe.module.css';
import { FaDownload } from 'react-icons/fa';
import cv from '../../assets/cv/LuidiPires.pdf';

export default function AboutMe() {
  const getCurrentAge = (birthDate: string): number => {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();
    const month = today.getMonth() - birth.getMonth();
    const day = today.getDate() - birth.getDate();

    if (month < 0 || (month === 0 && day <= 0)) {
      age--;
    }

    return age;
  };

  return (
    <section id='sobre-mim' className={`pageSection ${styles.aboutContainer}`}>
      <img className={styles.myPhoto} src='https://avatars.githubusercontent.com/u/104798394?v=4' alt='Foto de Luidi Pires' />
      <div className={styles.test}>
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
            wrapper='h1'
            cursor={true}
            repeat={Infinity}
          />
        </div>
        <p className={styles.description}>
          Olá, sou Luidi Pires, um jovem apaixonado por tecnologia e programação, com {getCurrentAge('2003-10-28')} anos de idade.
          Como desenvolvedor web, busco constantemente desafios empolgantes e oportunidades de aprendizado.
          Minha jornada no mundo da programação é guiada pela curiosidade e pela busca incansável por soluções criativas.
          Bem-vindo ao meu portfólio, onde compartilho minha paixão pela construção de experiências digitais incríveis.
        </p>
      </div>
      <a href={cv} download='Currículo Luidi Pires' className={styles.download}>
        Download CV
        <FaDownload />
      </a>
    </section>
  );
}
