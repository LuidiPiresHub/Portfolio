import React from 'react'
import projects from '../data/projects'
import '../styles/Projects.css'

export default function Projects() {
  return (
    <section id='projects' className='projectsContainer'>
      <h1>Futuramente serão adicionados alguns projetos desenvolvidos na Trybe...</h1>
      <div className='projectsContent'>
        {projects.map(({ img, name }, index) => (
          <figure className='projects' key={index}>
            <img src={img} alt={name} className='comingSoon' />
            <span>{name}</span>
          </figure>
        ))}
      </div>
    </section>
  )
}
