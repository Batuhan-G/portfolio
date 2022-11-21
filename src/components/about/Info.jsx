import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i className='bx bx-award about__icon'></i>
            <h3 className="aboout__title">Experience</h3>
            <span className="about__subtitle">4 Months Internship</span>
        </div>

        <div className="about__box">
        <i className='bx bx-briefcase-alt about__icon' ></i>
            <h3 className="aboout__title">Completed</h3>
            <span className="about__subtitle">10+ projects</span>
        </div>
        
        <div className="about__box">
        <i className='bx bx-home-smile about__icon'></i>
            <h3 className="aboout__title">Worked</h3>
            <span className="about__subtitle">1 Company</span>
        </div>
    </div>
  )
}

export default Info