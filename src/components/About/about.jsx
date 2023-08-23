import React, { useEffect } from 'react';
import "./about.css";
import Mypic from "../../assets/dsa_logo.webp";
import Aboutbox from './Aboutbox';
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  })


  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={Mypic} alt="" width="190" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description" data-aos="fade-up" data-aos-duration="2000" >I am Keval Sutariya. I am well-versed in Web Development. Currently, I am studying Information Technology At the Gandhinagar Institute Of Technology.<br />
              My Current CGPA is 8.52. I Have a Good understanding of Web Technologies. <br />
              I have Good Knowledge about Html, CSS, JS, and React.js. <br />
              My outgoing personality and customer service abilities contribute to team
              environments, meeting deadlines, and maintaining positive client relationships. <br />
              I am Passionate and Curious about Programming. I have Built many Projects with the same technologies as well.
            </p>

            <div className="button">
              <div className="button-wrapper">
                <div className="text">Resume</div>
                <a href="https://drive.google.com/file/d/1cYYfxe-cyWCTJ4kxRVTOgc2YKZwryI_s/view?usp=sharing" target="_blank " className='svgcolor' >
                  <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="4em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17">
                      </path>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>




          {/* SKILLS */}
          <div className="about__skills grid">

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">HTML/CSS</h3>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage html"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Java Script</h3>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage reactjs"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">React.js</h3>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage nodejs"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Node.js</h3>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage redux"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Express.js</h3>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage cpp"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Java</h3>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage dsa"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Python</h3>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage python"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Aboutbox />
    </section >
  )
}
