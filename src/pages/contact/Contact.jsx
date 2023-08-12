import React from "react";
import {
  FaPhoneSquareAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { AiOutlineMail, AiOutlineFacebook, AiOutlineGithub,AiOutlineLinkedin } from "react-icons/ai";

import { FiSend } from "react-icons/fi";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>
          <p className="contact__descriptiom">
            Feel free to get in touch with me. I am always open to discuss
            new Projects, creative ideas or opportunities and would like to be a part of your
            visions.
          </p>
          <div className="contact__info">
            <div className="info__item">
              <AiOutlineMail className="info__icon" />
              <div>
                <span className="info__title">Mail me</span>
                <h3 className="info__desc">sejalaggarwal0@gmail.com</h3>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call me</span>
                <h3 className="info__desc">+91 8384855065</h3>
              </div>
            </div>
          </div>
          <div className="contact__socials">
            <a
              href="https://www.facebook.com/aggarwalsejal/"
              className="contact__social-link"
            >
              <AiOutlineFacebook />
            </a>
            <a
              href="https://github.com/aggarwalsejal"
              className="contact__social-link"
            >
              <AiOutlineGithub className="info__icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/aggarwalsejal/"
              className="contact__social-link"
            >
              <AiOutlineLinkedin className="info__icon" />
            </a>
            
            <a
              href="https://twitter.com/aggarwalsejal0"
              className="contact__social-link"
            >
              <FaTwitter className="info__icon" />
            </a>
            <a
              href="https://www.youtube.com/@aggarwalsejal"
              className="contact__social-link"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        <form className="contact__form" action="https://formsubmit.co/sejalaggarwal0@gmail.com" method="POST">
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form__control"
                name="name"
                required
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form__control"
                name="email"
                required
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form__control"
                name="subject"
              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              className="form__control textarea"
              name="message"
              required
            ></textarea>
          </div>
          <button className="button">
            Send Message
            <span className="button__icon contact__button-icon" send=''>
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
