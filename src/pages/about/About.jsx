import React from 'react'
import Stats from '../../components/Stats';
import { FaDownload } from 'react-icons/fa';
import CV from "../../assets/Sejal_Aggarwal.pdf"
import './about.css'
import Skills from '../../components/Skills';
import { resume } from '../../data';
import ResumeItem from '../../components/ResumeItem';
const About = () => {
  return (
    <main className='section container'>
      <section className='about'>
        <h2 className='section__title'>
          About <span>Me</span>
          <a href={CV} download='' className='button'>
              Download CV{' '}
              <div className='button__icon'>
                <FaDownload />
              </div>
            </a>
        </h2>
       
          <div className="stats grid">
            <Stats />
       
        </div>
      </section>
      <div className='separator'></div>
      <section className='skills'>
        <h3 className='section__subtitle subtitle__center'>My Skills</h3>
        <div className='skills__container grid'>
          <Skills />
        </div>
      </section>
      <div className='separator'></div>
      <section className='resume'>
        <h3 className='section__subtitle subtitle__center'>
          Experience & Education
        </h3>
        <div className='resume__container grid'>
          <div className='resume__data'>
            {resume.map((val) => {
              if(val.category==='experience'){
                return <ResumeItem key={val.id} {...val} />
              }
            })}
          </div>
          <div className='resume__data'>
            {resume.map((val) =>{
              if(val.category==='education'){
                return <ResumeItem key={val.id} {...val} />
              }
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
