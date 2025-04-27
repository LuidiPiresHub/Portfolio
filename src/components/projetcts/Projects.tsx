import { useEffect, useState } from 'react';
import projectData from '../../data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import styles from './Projects.module.css';

export default function Projects() {
  const [currentIndexes, setCurrentIndexes] = useState<number[]>(projectData.map(() => 0));

  useEffect(() => {
    const transitionTime = 5000;
    const interval = setInterval(() => {
      setCurrentIndexes((prev) =>
        prev.map((index, i) =>
          (index + 1) % projectData[i].thumbnail.length
        )
      );
    }, transitionTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id='projetos' className={`pageSection ${styles.projectsSection}`}>
      <h2 className={styles.subtitle}>Meus Projetos</h2>
      <div className={styles.projectsContainer}>
        {projectData.map((project, i) => (
          <article key={i} className={styles.project}>
            <figure className={styles.thumbnailWrapper}>
              {project.thumbnail.map((thumb, j) => (
                <img
                  key={j}
                  src={thumb}
                  alt={project.name}
                  className={`${styles.thumbnail} ${currentIndexes[i] === j ? styles.active : ''}`.trim()}
                />
              ))}
            </figure>
            <div className={styles.detailsContainer}>
              <h2 className={styles.projectName}>{project.name}</h2>
              <p className={styles.description}>{project.description}</p>
            </div>
            <footer className={styles.linksContainer}>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={styles.demoLink}>
                <FaExternalLinkAlt /> Demo
              </a>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                <FaGithub /> GitHub
              </a>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
