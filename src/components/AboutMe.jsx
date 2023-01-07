import React from 'react'
import myPhoto from '../images/myPhoto.jpg'
import '../styles/AboutMe.css'

export default function AboutMe() {
  return (
    <section id="about" className='aboutMe'>
      <figure>
        <img src={myPhoto} alt="Minha Foto" className='myPhoto' />
      </figure>
      <article className='descriptionContainer'>
        <h1>Desenvolvedor <span>FullStack</span></h1>
        <h3>Luidi Pires</h3>
        <hr />
        <p>Tenho 19 anos e estou atualmente cursando Desenvolvimento Web Full Stack na Trybe, Atualmente sou formado como desenvolvedor <span className='stacks'>Front-End</span>, Estou cursando <span className='stacks'>Back-End</span> e estou começando minha carreira como pessoa programadora aqui na Trybe rumo ao Full Stack.</p>
        <p>A <span className='trybe'>Trybe</span> é uma escola de tecnologia, que proporciona uma formação com mais de 1500 horas, abordando fundamentos de desenvolvimento Web, Front-end, Back-end, ciência da computação, metodologias ágeis e habilidades comportamentais.</p>
      </article>
    </section>
  )
}
