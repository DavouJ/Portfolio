import React from 'react'
import "./contact.css"
import { Fade } from "react-awesome-reveal";

function Contact() {
    return (
        <section className='contact section' id='contact'>
            <Fade triggerOnce={true} direction={'up'}>
            <h2 className="section__title">CONTACT</h2>
            </Fade>
            <Fade  direction={'up'}>
            <div className="contact__container container grid">
            
                <img src="src/assets/port.PNG" alt="Contact Image" className="contact__img" />
                <Fade  direction={'down'}>
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
                </Fade>
            </div>
            </Fade>

        </section>
    )
}

export default Contact