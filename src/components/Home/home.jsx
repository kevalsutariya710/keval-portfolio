import React, { useEffect } from 'react'
import "./home.css";
import Mypic from "../../assets/mypic.jpg"
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import ScrollReveal from 'scrollreveal';

export default function Home() {


  let effect = () => {

    ScrollReveal({
      reset: false
    })

    ScrollReveal().reveal(".home__img", {
      duration: 2000,
      move: 0
    });
    

  }

  useEffect(() => {
    effect();
  }, [])



  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Mypic} alt="pic" className="home__img" />
        <h1 className="home__name">Keval Sutariya</h1>
        <span className="home__designation">I am a Web Developer</span>

        <HeaderSocials />

        <a href="#contact" className="btn">Want to Connect ?</a>
        <ScrollDown />

      </div>

    </section>
  )
}
