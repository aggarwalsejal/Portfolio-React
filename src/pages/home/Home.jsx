import React from 'react'
import Profile from "../../assets/home.jpg"
import { Link } from 'react-router-dom';
import {FaArrowRight} from "react-icons/fa";
import "./home.css"
const str = "I'm a React based Website Developer. Innovative and deadline-driven developer, Codes are more than passion for me. \n I love to solve things with my problem solving skill. I like to do competitive programming. I have learnt Java and C and each day I am full of energy to learn and code new problems."
const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Sejal Aggarwal</span>   Web Developer
          </h1>
          <p className="home__description">
            <span>
            {str}
            </span>
          </p>
          <Link to='/about' className='button'>
            More About Me{' '}
            <span className='button__icon'>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

<div className="color__block"></div>
    </section>
  )
}

export default Home