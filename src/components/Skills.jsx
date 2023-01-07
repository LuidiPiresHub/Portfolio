import React from 'react';
import htmlLogo from '../images/html.png'
import cssLogo from '../images/css.png'
import javascriptLogo from '../images/javascript.png'
import jestLogo from '../images/jest.png'
import reactLogo from '../images/react.png';
import rtlLogo from '../images/rtl.png'
import reduxLogo from '../images/redux.png'
import dockerLogo from '../images/docker.png'
import mysqlLogo from '../images/mysql.png'
import nodeLogo from '../images/node.png'
import typescriptLogo from '../images/typescript.png'
import '../styles/Skills.css'

export default function Skills() {
  return (
    <section id='skills' className='skillsContainer'>
      <div className='skillsContent'>
        <h1>Front End</h1>
        <figure className='techsContainer'>
          <div className='techs'>
            <img src={htmlLogo} alt="Html Logo" className='skills' />
            <span>Html 5</span>
          </div>
          <div className='techs'>
            <img src={cssLogo} alt="Css Logo" className='skills' />
            <span>Css 3</span>
          </div>
          <div className='techs'>
            <img src={javascriptLogo} alt="Javascript Logo" className='skills' />
            <span>Javascript</span>
          </div>
          <div className='techs'>
            <img src={jestLogo} alt="Jest Logo" className='skills' />
            <span>Jest</span>
          </div>
          <div className='techs'>
            <img src={reactLogo} alt="React Logo" className='skills' />
            <span>React JS</span>
          </div>
          <div className='techs'>
            <img src={rtlLogo} alt="React Testing Library Logo" className='skills' />
            <span>RTL</span>
          </div>
          <div className='techs'>
            <img src={reduxLogo} alt="Redux Logo" className='skills' />
            <span>Redux</span>
          </div>
        </figure>
      </div>
      <div className='skillsContent'>
        <h1>Back-End</h1>
        <figure className='techsContainer'>
          <div className='techs'>
            <img src={dockerLogo} alt="Docker Logo" className='skills' />
            <span>Docker</span>
          </div>
          <div className='techs'>
            <img src={mysqlLogo} alt="MySQL Logo" className='skills' />
            <span>MySQL</span>
          </div>
          <div className='techs'>
            <img src={nodeLogo} alt="Node Logo" className='skills' />
            <span>Node JS</span>
          </div>
          <div className='techs'>
            <img src={typescriptLogo} alt="Typescript Logo" className='skills' />
            <span>Typescript</span>
          </div>
        </figure>
      </div>
    </section>
  )
}
