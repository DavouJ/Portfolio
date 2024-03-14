import React from 'react'
import { Link } from "react-scroll"
import "./home.css"
import { SiMysql, SiAntdesign } from "react-icons/si";

function Home() {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <img src='src/assets/memoji.png' alt="memoji" className="home__img" />
                <div className="home__data">
                    <h1 className="home__title">
                        I am <br />
                        <span>DAVOU JOBBI</span> <br />Graduate Software Developer<br />
                    </h1>

                    <p className="home__description">
                        Welcome to my website! ( Developed in React by yours truly <i className="ri-reactjs-line react"></i> ) <br /> <br/> My name is Davou and I’m a recent graduate with experience in software development and project management.
                    </p>

                    <div className="tech__stack">
                        <ul className="tech__list">
                            <li className="tech__item">
                                <span className='tech__text'>JavaScript</span>
                                <i className="ri-javascript-line"></i>
                                
                            </li>
                            <li className="tech__item">
                            <span className='tech__text'>HTML</span>
                                <i className="ri-html5-fill"></i>
                            
                            </li>
                            <li className="tech__item">
                            <span className='tech__text'>CSS</span>
                                <i className="ri-css3-fill"></i>
                                
                            </li>
                            <li className="tech__item">
                            <span className='tech__text'>React</span>
                                <i className="ri-reactjs-line"></i>
                                
                            </li>
                            <li className="tech__item">
                            <span className='tech__text'>Java</span>
                            <i className="ri-java-line"></i>
                            
                            </li>
                            <li className="tech__item">
                            <span className='tech__text'>Python</span>
                            <i className="fa-brands fa-python"></i>
                            
                            </li>
                            <li className="tech__item">
                            <span className='tech__text'>MySQL</span>
                            <SiMysql />
                            
                            </li>
                            <li className="tech__item">
                            <span className='tech__text'>Ant Design</span>
                            <SiAntdesign />
                            
                            </li>
                            <li className="tech__item">
                            <span className='tech__text'>Bootstrap</span>
                            <i className="ri-bootstrap-fill"></i>
                            
                            </li>
                            
                        </ul>
                    </div>

                    <div className="home__buttons">
                        <Link href="#" to="#" className="button" >

                            <span className='button__icon'>
                                <i className="ri-skip-right-line"></i>
                            </span>
                            <span className='button__text'>
                                ABOUT ME
                            </span>
                        </Link>
                        <Link href="#" to="#" className="button" >
                            <span className='button__icon'>
                                <i className="ri-skip-right-line"></i>
                            </span>
                            <span className='button__text'>
                                PROJECTS
                            </span>
                        </Link>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Home