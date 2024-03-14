import React from 'react'
import "./about.css"

function About() {

    
    return (
        <section className='about section' id="about">
            <div className='new__container container grid'>
                <div className="new__data">
                    <h2 className="section__title">
                        ABOUT ME
                    </h2>

                    <p className="new__description">
                        A proactive and results-driven professional, demonstrating strong leadership and technical abilities through successful participation and management of various projects. Well-equipped to tackle diverse IT challenges with expertise in backend and frontend languages like Java and JavaScript, and also frameworks like React. Excels in collaborative work and effortlessly leads cooperation to achieve shared objectives with problem-solving and leadership skills that have been instrumental in driving success in several business environments even outside the realms of IT. Recently completed an MSc in Project Management and a BSc in Computer Science from Lancaster University.
                    </p>
                </div>

                <div className="new__content grid">
                    <article className="new__card">
                        <img src="src/assets/undergrad.JPG" alt="Undergrad Graduation" className="new__img" />
                        <h2 className="new__title">
                            BSc Computer Science - Lancaster University - 2022
                        </h2>
                    </article>
                    
                    <article className="new__card">
                        <img src="src/assets/postgrad.jpg" alt="Postgrad Graduation" className="new__img" />
                        <h2 className="new__title">
                            MSc Project Management - Lancaster University - 2023
                        </h2>
                    </article>
                    <img src="src/assets/arrow.png" alt="arrow" className='arrow'/>

                    

                </div>

        
            </div>
        </section>
    )
}

export default About