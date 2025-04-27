import techData from '../../data/techs';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id='techs' className={`pageSection ${styles.skills}`}>
      <h2 className={styles.subtitle}>Tecnologias que eu trabalho</h2>
      <ul className={styles.ul}>
        {techData.map(({ name, image, url }) => (
          <li key={name} className={styles.li}>
            <a href={url} target='_blank' rel='noopener noreferrer' className={styles.techLink}>
              <img src={image} alt={name} className={styles.techLogo} />
              <span className={styles.techName}>{name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
