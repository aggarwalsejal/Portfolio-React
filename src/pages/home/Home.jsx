import React from 'react'
import Profile from "../../assets/home.jpg"
import { Link } from 'react-router-dom';
import {FaArrowRight} from "react-icons/fa";
import "./home.css"
const str = "Driven by a passion for data analysis and process automation, I bring hands-on expertise in Python, HTML, CSS, JavaScript, SQL, React, AWS, and Elasticsearch. In my product support role, I leverage these skills to troubleshoot, analyze, and deliver exceptional client support. A continuous learner with a growth mindset, I apply the same energy and discipline to both my professional and personal pursuits, always striving for improvement and excellence."
const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Sejal Aggarwal</span>   Application Support Engineer
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
