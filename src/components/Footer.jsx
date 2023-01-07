import React from 'react'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'
import gmail from '../images/gmail.png'
import whatsapp from '../images/whatsapp.png'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <section id='contact' className='socialMedia'>
        <div className='socialContent'>
          <a href="https://www.linkedin.com/in/luídi-pires/" rel='noreferrer' target='_blank'>
            <img src={linkedin} alt="Linkedin Logo" className='logos linkedinLogo' />
          </a>
        </div>
        <div className='socialContent'>
          <a href="https://github.com/LuidiPiresHub" rel='noreferrer' target='_blank'>
            <img src={github} alt="Github Logo" className='logos githubLogo' />
          </a>
        </div>
        <div className='socialContent'>
          <a href="mailto:luidihot@gmail.com" rel='noreferrer' target='_blank'>
            <img src={gmail} alt="Gmail Logo" className='logos gmailLogo' />
          </a>
        </div>
        <div className='socialContent'>
          <a href="https://wa.me/21988687037" rel='noreferrer' target='_blank'>
            <img src={whatsapp} alt="Gmail Logo" className='logos whatsappLogo' />
          </a>
        </div>
      </section>
    </footer>
  )
}
