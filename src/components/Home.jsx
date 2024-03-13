import React from 'react'
import { Link } from "react-scroll"
import "./home.css"

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

                    <p class="home__description">
                        Welcome to my website! <br /> My name is Davou and I’m a recent computer science graduate with experience in web development.
                    </p>

                    <div className="tech__stack">
                        <ul className="tech__list">
                            <li className="tech__item">
                                <i className="ri-javascript-line"></i>
                            </li>
                            <li className="tech__item">
                                <i class="ri-html5-fill"></i>
                            </li>
                            <li className="tech__item">
                                <i class="ri-css3-fill"></i>
                            </li>
                            <li className="tech__item">
                                <i className="ri-reactjs-line"></i>
                            </li>
                            <li className="tech__item">
                            <i className="ri-java-line"></i>
                            </li>
                            <li className="tech__item">
                            <i className="fa-brands fa-python"></i>
                            </li>
                            <li className="tech__item">
                            <i className="ri-java-line"></i>
                            </li>
                        </ul>
                    </div>

                    <div className="home__buttons">
                        <Link href="#" to="#" className="button" >

                            <span className='button__icon'>
                                <i class="ri-skip-right-line"></i>
                            </span>
                            <span className='button__text'>
                                ABOUT ME
                            </span>
                        </Link>
                        <Link href="#" to="#" className="button" >
                            <span className='button__icon'>
                                <i class="ri-skip-right-line"></i>
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