import React, { useEffect } from 'react'
import "./education.css";
import data from "./Data";
import Card from './Card';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Education() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  })
  return (
    <section className="education container section" id="education">
      <h2 className="section__title">Education</h2>

      <div className="education__container  grid">
        <div className="timeline grid" data-aos="fade-up"
     data-aos-duration="3000">
          {data.map((val, index) => {
            if (val.category === "Graduation") {
              return (
                <Card
                  key={index}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              )
            }
          })}
        </div>

        <div className="timeline grid" data-aos="fade-up"
     data-aos-duration="2000">
          {data.map((val, index) => {
            if (val.category === "Intermediate") {
              return (
                <Card
                  key={index}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              )
            }
          })}
        </div>

        <div className="timeline grid" data-aos="fade-up"
     data-aos-duration="1000">
          {data.map((val, index) => {
            if (val.category === "Highschool") {
              return (
                <Card
                  key={index}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                />
              )
            }
          })}
        </div>

      </div>
    </section>
  )
}
