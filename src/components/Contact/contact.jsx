import React from 'react'
import "./contact.css"
import ReCAPTCHA from "react-google-recaptcha";

export default function contact() {
  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Let's Connect</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Lets talk about everything</h3>
          <p className="contact__details">don't like forms? send me a mail at
            <a href="mailto:keval9464@gmail.com" className='email'> keval9464@gmail.com </a> </p>
        </div>

        <form action="https://formspree.io/f/xyyqzeyp" className="contact__form" method="POST">
          <div className="contact__form-group">

            <div className="contact__form-div">
              <input name="Name" type="text" className="contact__form-input" placeholder="Enter your Name" />
            </div>

            <div className="contact__form-div">
              <input name="Email" type="email" className="contact__form-input" placeholder="Enter your Email" />
            </div>
          </div>

          <div className="contact__form-div">
            <input name="subject" type="text" className="contact__form-input" placeholder="Enter Subject" />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea name="message" id="" cols="30" rows="10" className="contact__form-input" placeholder="Enter message"></textarea>
          </div>
          <ReCAPTCHA
            sitekey="6Lf4psYnAAAAAFRKPglUdKPXSmTY8yX5eGWYpUlD"
          />
          <br />
          <button className="btn">Send Message</button>

        </form>
      </div>
    </section>
  )
}
