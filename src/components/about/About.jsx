import React from 'react'
import './about.css'
import ProfileImg from '../../assets/profile.jpg'
import CV from '../../assets/CV.pdf'
import Info from './Info'

const About = () => {
    return (
        <section className="about section" id='about'>
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My introduction</span>

            <div className="about__container container grid">
                <img src={ProfileImg} alt="Profile" className='about__img' />

                <div className="about__data">
                    <Info />

                    <p className="about__description">
                    I have been involved in both teamwork and individual 
                    roles in the projects I have contributed to. 
                    I followed Agile methodology during this time. 
                    I participated a web development bootcamp and successfully completed it. 
                    My journey in Front-End development continues 
                    by learning new concepts and developing new applications. 
                    I also review projects on GitHub to make my projects cleaner and 
                    to improve my skills.
                    </p>

                    <a download="BatuhanGörenCV" href={CV} className="button button--flex">
                        Download CV
                        <i className="uil uil-file-download-alt about__download"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About