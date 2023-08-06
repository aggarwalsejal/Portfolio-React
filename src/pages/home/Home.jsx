import React from 'react'
import Profile from "../../assets/home.jpg"
import { Link } from 'react-router-dom';
import {FaArrowRight} from "react-icons/fa";
import "./home.css"

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
            I'm a React based website Developer. Innovative and deadline-driven developer, Codes are more than passion for me. I love to solve things with my problem solving skill. I like to do competitive programming . I have learn java and c and each day I am full of energy to learn and code new problems.
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