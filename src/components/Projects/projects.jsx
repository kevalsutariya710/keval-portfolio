import React, { useEffect, useState } from 'react'
import "./projects.css"
import Menu from "./Menu";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  const [items, setItems] = useState(Menu);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  })

  function changeitem(event) {

    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === event.target.getAttribute('val');
    })
    setItems(updatedItems);

    if (event.target.getAttribute('val') === "all") setItems(Menu);
  }

  return (
    <section className="projects container section" id="projects">
      <h2 className="section__title">Recent Works</h2>
      <div className="project__filters">
        <span className="project__item" onClick={changeitem} val="all" data-aos="fade-down"
          data-aos-easing="linear" data-aos-duration="400">All</span>
        <span className="project__item" onClick={changeitem} val="Frontend" data-aos="fade-down"
          data-aos-easing="linear" data-aos-duration="600">Frontend</span>
        <span className="project__item" onClick={changeitem} val="Full Stack" data-aos="fade-down"
          data-aos-easing="linear" data-aos-duration="800">FullStack</span>
      </div>

      <div className="project__container grid">
        {items.map((element) => {
          const { id, url, image, title, category } = element;
          return (
            <div className="project__card" key={id} data-aos="fade-up" data-aos-duration="2000">
              <div className="project__thumbnail">
                <img src={image} alt="" className="project__img" />
                <div className="project__mask"></div>
              </div>

              <span className="project__category">{category}</span>
              <h3 className="project__title">{title}</h3>
              <a href={url} className="project__button" target="_blank" rel="noreferrer">
                <i className="icon-link project__button-icon"></i>
              </a>
            </div>
          )
        })}
      </div>

    </section>
  )
}
