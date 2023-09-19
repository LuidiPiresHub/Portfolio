import { TypeAnimation } from 'react-type-animation';
import myPhoto from '../../assets/photos/myPhoto.jpg';
import styles from './AboutMe.module.css';
import { FaDesktop, FaCog, FaDownload } from 'react-icons/fa';
import cv from '../../assets/cv/LuidiPires.pdf'
import certificates from '../../data/certificates';

export default function AboutMe() {
  return (
    <section className={styles.aboutContainer}>
      <img className={styles.myPhoto} src={myPhoto} alt='Foto de Luidi Pires' />
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
            wrapper='h1'
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
      <h2 className={styles.subtitle}>O que eu faço?</h2>
      <section className={styles.servicesContainer}>
        <div className={styles.service}>
          <FaDesktop size={35} />
          <h3 className={styles.area}>Front-End</h3>
          <p>
            Confecção de sites responsivos com design focados na experiência do
            usuário usando as tecnologias HTML, CSS, Javascript, React.js e etc ...
          </p>
        </div>
        <div className={styles.service}>
          <FaCog size={35} />
          <h3 className={styles.area}>Back-End</h3>
          <p>
            Desenvolvimento de API's completas em NodeJS para consumo tanto de páginas web quanto de
            aplicações mobile. Incluindo a criação e manipulação de bancos de dados relacionais e não-relacionais.
          </p>
        </div>
      </section>
      <section className={styles.certificatesContainer}>
        {certificates.map(({ image, name }) => (
          <a href={image} target='_blank'>
            <img src={image} alt={name} key={name} className={styles.certificate} />
          </a>
        ))}
      </section>
      <a href={cv} download='Currículo Luidi Pires' className={styles.download}>
        Download CV
        <FaDownload />
      </a>
    </section>
  )
}
