import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_7vey69c',
                'template_yevhokv',
                form.current,
                'xjyzowm4Lg_e2HtQp'
            )
        e.target.reset()
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Reach to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">batuhangoren99@hotmail.com</span>

                            <a
                                href="mailto:batuhangoren99@hotmail.com"
                                className="contact__button"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Write me
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className='bx bxl-whatsapp contact__card-icon'></i>
                            <h3 className="contact__card-title">Phone</h3>
                            <span className="contact__card-data">+90 5** *** ** **</span>

                            <a
                                href="https://api.whatsapp.com/send?phone=905342354567&text=
                                 Hi, I'd like to meet you for a job offer."
                                className="contact__button"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Call me
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="uil uil-map-marker contact__card-icon"></i>
                            <h3 className="contact__card-title">Location</h3>
                            <span className="contact__card-data">İzmir/Turkey</span>

                            <a
                                href="https://l24.im/tvCze"
                                className="contact__button"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Show location
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your message</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input
                                type="text"
                                name='name'
                                className='contact__form-input'
                                placeholder='Insert your name'
                            />

                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Mail</label>
                            <input
                                type="email"
                                name='email'
                                className='contact__form-input'
                                placeholder='Insert your email'
                            />

                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Message</label>
                            <textarea
                                name="message"
                                cols="30"
                                rows="10"
                                className='contact__form-input'
                                placeholder='Write your message'>
                            </textarea>
                        </div>
                        <button className="button button--flex">
                            Send Message
                            <i className="uil uil-message home__contact"></i>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact