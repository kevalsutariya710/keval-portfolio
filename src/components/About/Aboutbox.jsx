import React from 'react'

export default function Aboutbox() {
  return (
    <div className="about__boxes grid">

        <div className="about__box">
            <i className="about__icon icon-puzzle"></i>
            <div>
                <h3 className="about__title">10+</h3>
                <span className="about__subtitle">Projects Completed</span>
            </div>
        </div>

        <div className="about__box">
            <i className="about__icon icon-hourglass"></i>
            <div>
                <h3 className="about__title">10+</h3>
                <span className="about__subtitle">Github Repositories</span>
            </div>
        </div>

       

    </div>
  )
}
