import techData from '../../data/techs';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id='habilidades' className={styles.skills}>
      <h2 className={styles.title}>Tecnologias que eu trabalho</h2>
      <ul className={styles.ul}>
        {techData.map(({ name, url }) => (
          <li key={name} className={styles.li}>
            <img src={url} alt={name} className={styles.tech} />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
