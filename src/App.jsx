import React, { useEffect } from 'react'
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './styles/App.css';

export default function App() {
  useEffect(() => {
    global.alert(
      `Atenção !!!
Este Portfolio ainda está em desenvolvimento
Portanto pode não funcionar a responsividade em todos os dispositivos 😉`
    );
  }, [])
  return (
    <div className='mainContent'>
      <Header />
      <main className='AboutContent'>
        <AboutMe />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
