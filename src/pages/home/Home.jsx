import React from 'react'
import Profile from "../../assets/home.jpg"
import { Link } from 'react-router-dom';
import {FaArrowRight} from "react-icons/fa";
import "./home.css"
const str = "As a React-based Website Developer, I thrive on blending innovation with a deadline-oriented approach. Codes aren’t just a passion for me; they’re a means of artistic expression through technology. \n My adept problem-solving skills drive me to tackle challenges with enthusiasm, while my penchant for competitive programming fuels my continuous growth. Proficient in Java and C, I embrace each day with boundless energy, eager to conquer fresh coding conundrums and expand my skills."
const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Sejal Aggarwal</span>   Application Engineer
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
