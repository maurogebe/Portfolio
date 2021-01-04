import React from 'react'
import emailjs from 'emailjs-com'

// Import style
import './contact.css'

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {

    return (
        <>
            <div className="contact">
                <h1 className="contact__title">
                    GET IN
                    <span className="contact__text"> TOUCH</span>
                    <span className="contact-title-transparent">
                        CONTACT
                    </span>
                </h1>
                <section className="container-contact">
                    <div className="contain-info">
                        <h3 className="contact-message__title">DON'T BE SHY!</h3>
                        <p className="contact-message__text">
                            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>
                        <div className="data-contact">
                            <FontAwesomeIcon className="data-contact__icon" icon={faEnvelopeOpen}/>
                            <div>
                                <h3 className="data-contact__title">MAIL ME</h3>
                                <span className="data-contact__email">maurogebe.96@gmail.com</span>
                            </div>
                        </div>
                        <div className="data-contact">
                            <FontAwesomeIcon className="data-contact__icon" icon={faPhoneSquareAlt}/>
                            <div>
                                <h3 className="data-contact__title">CALL ME</h3>
                                <span className="data-contact__phone">+57 3115890050</span>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    <form className="form-contact">
                        <div className="form-contact__contain-info">
                            <input type="text" className="form-contact__input" placeholder="Your Name"></input>
                            <input type="email" className="form-contact__input" placeholder="Your Email"></input>
                            <input type="text" className="form-contact__input" placeholder="Your Subject"></input>
                        </div>
                        <textarea type="text" className="form-contact__text-area" placeholder="Your Message"></textarea>
                        <button type="submit" className="form-contact__button">SEND MESSAGE</button>
                    </form>
                </section>
            </div>
        </>
    )
}