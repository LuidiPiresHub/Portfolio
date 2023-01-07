import React from 'react'
import '../styles/Header.css'

export default function Header() {
  return (
    <header className='header'>
      <h1 className='portfo'>Portfo<span className='lio'>lio</span></h1>
      <nav className='links'>
        <ul className='listLinks'>
          <li><a href="#top">Home</a></li>
          <li><a href="#about">Sobre Mim</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href='#contact'>Fale Comigo</a></li>
        </ul>
      </nav>
    </header>
  )
}
