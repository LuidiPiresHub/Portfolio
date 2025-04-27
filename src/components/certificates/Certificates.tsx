import Marquee from 'react-fast-marquee';
import certificates from '../../data/certificates';
import styles from './Certificates.module.css';

export default function Certificates() {
  return (
    <section id='certificados' className={`pageSection ${styles.certificateContainer}`}>
      <h2 className={styles.subtitle}>Meus Certificados</h2>
      <Marquee
        speed={100}
        pauseOnHover={true}
        pauseOnClick={true}
        autoFill={true}
      >
        <div className={styles.certificateWrapper}>
          {certificates.map(({ image, name, url }) => (
            <a key={name} href={url} target='_blank' rel="noopener noreferrer" className={styles.certificate}>
              <img className={styles.certificate} src={image} alt={name} />
            </a>
          ))}
        </div>
      </Marquee>
    </section>
  );
}
