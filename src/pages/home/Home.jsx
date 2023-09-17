import React from 'react'
import Profile from "../../assets/home.jpg"
import { Link } from 'react-router-dom';
import {FaArrowRight} from "react-icons/fa";
import "./home.css"
const str = "Demonstrated expertise by resolving over 1k client tickets, offering technical solutions, and furnishing customer-specific data and reports using SQL, Postgres, Kibana, Elastic Search, and Couchbase data storages. Also, adept at Code Level Troubleshooting to identify potential issues in application operation. \n Utilized monitoring tools like Datadog, New Relic, Prometheus, Nagios, and Splunk to effectively monitor production, troubleshoot over 350+ bugs and recommend code fixes for enhanced reliability. \n Implemented DD synthesis to track website performance, pinpoint the source of alerts, and streamline error diagnosis. I've got hands-on experience in dealing with major incidents and client escalations."
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
