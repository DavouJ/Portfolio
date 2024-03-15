import React from 'react'
import "./contact.css"

function Contact() {
    return (
        <section className='contact section' id='contact'>
            <h2 className="section__title">CONTACT</h2>
            <div className="contact__container container grid">
                <img src="src/assets/port.PNG" alt="Contact Image" className="contact__img" />

                <div className="contact__content">
                    <div>
                        <h3 className="contact__title">Message Me</h3>
                        <div className="contact__social">
                            <a href="https://www.linkedin.com/in/davou-jobbi/" target="_blank" >
                                <i className="ri-linkedin-box-fill"></i>
                            </a>
                            <a href="mailto: djjobbi@hotmail.com" target="_blank" >
                                <i className="ri-mail-fill"></i>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="contact__title">Call Me</h3>
                        <address className="contact__info">
                            +44 7449 094103
                        </address>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Contact