import React, { useEffect } from 'react'
import "./skills.css"
import framework from "../../assets/react_logo3.png";
import other from "../../assets/github-logo.png";
import language from "../../assets/language_logo.png";
import database from "../../assets/database_logo3.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skills() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  })

  return (
    <section className="skills container section" id="skills">
      <h2 className="section__title">Skills</h2>

      <div className="skills__container grid">

        <div className="skills__card" data-aos="fade-up"
     data-aos-duration="800">
          <img src={framework} alt="" width="140" className="skills__img" />
          <h3 className="skills__title">Frameworks/Libraries</h3>
          <ul type="disc">
            <li className="skills__description">• React js</li>
            <li className="skills__description">• Node js</li>
            <li className="skills__description">• Express js</li>
            <li className="skills__description">• TailwindCss</li>
            <li className="skills__description">• Bootstrap</li>
          </ul>
        </div>

        <div className="skills__card" data-aos="fade-up"
     data-aos-duration="1400">
          <img src={language} alt="" width="140" className="skills__img" />
          <h3 className="skills__title">Languages</h3>
          <ul type="disc">
            <li className="skills__description">• Javascript</li>
            <li className="skills__description">• HTML/CSS</li>
            <li className="skills__description">• Java</li>
            <li className="skills__description">• Python</li>
          </ul>
        </div>

        <div className="skills__card" data-aos="fade-up"
     data-aos-duration="2100">
          <img src={database} alt="" width="140" className="skills__img" />
          <h3 className="skills__title">Database</h3>
          <ul type="disc">
            <li className="skills__description">• MongoDB</li>
            <li className="skills__description">• MySQL</li>
          </ul>
        </div>

        <div className="skills__card" data-aos="fade-up"
     data-aos-duration="3000">
          <img src={other} alt="" width="140" className="skills__img" />
          <h3 className="skills__title">Others</h3>
          <ul type="disc">
            <li className="skills__description">• Rest API's</li>
            <li className="skills__description">• Data Structures</li>
            <li className="skills__description">• Git/Github</li>
            <li className="skills__description"></li>
          </ul>
        </div>
      </div>
      {/* <div className="skills__container grid">
        {data.map(({id,image,title,description})=>{
          return (
            <div className="skills__card" key={id}>
              <img src = {image} alt = "" className="skills__img"/> 
              <h3 className="skills__title">{title}</h3>
              <p className="skills__description">{description}</p>

            </div>
          );
        })}
      </div> */}
    </section>
  )
}
