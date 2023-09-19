import styles from './Skills.module.css';
import techData from '../../data/techs';

export default function Skills() {
  return (
    <div id='habilidades'>
      <h2 className={styles.title}>Tecnologias que eu trabalho</h2>
      <section className={styles.pictureContainer}>{techData.map(({ name, url }) => (
        <picture key={name} className={styles.picture}>
          <img src={url} alt="name" className={styles.tech} />
          <span>{name}</span>
        </picture>
      ))}</section>
    </div>
  )
}
