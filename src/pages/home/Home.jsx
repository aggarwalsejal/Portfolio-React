import React from 'react'
import Profile from "../../assets/home.jpg"
import { Link } from 'react-router-dom';
import {FaArrowRight} from "react-icons/fa";

const Home = () => {
  return (
    <section className="Home section grid">
      <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Sejal Aggarwal.</span> Web Developer
          </h1>
          <p className="home__description">
            I'm a React based website Developer.
          </p>
          <Link to='/about' className='button'>
            More About Me{' '}
            <span className='button__icon'>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>


    </section>
  )
}

export default Home