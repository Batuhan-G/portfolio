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
                <img src={ProfileImg} alt="Profile Image" className='about__img' />

                <div className="about__data">
                    <Info />

                    <p className="about__description">
                        I have been involved in both teamwork and individual roles
                        in the projects I have contributed to. During this process, I
                        worked with Agile methodology. I was eligible to
                        participate in the Bootcamp on web development and
                        successfully completed it. I am currently following training
                        programs on Frontend development. I follow the updates
                        to the libraries and tools I have used and I read the related
                        articles. I also regularly review projects via Github to write
                        cleaner code and learn different usage patterns.
                    </p>

                    <a download="" href={CV} className="button button--flex">
                        Download CV
                        <i className="uil uil-file-download-alt about__download"></i>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About