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
                        Welcome to my website! <br/> My name is Davou and I’m a recent computer science graduate with experience in web development.
                    </p>

                    <div className="home__buttons">
                        <Link href="#" to="#" className="button" >
                            <span>
                                <i class="ri-skip-right-line"></i>
                            </span>
                            ABOUT ME
                        </Link>
                        <Link href="#" to="#" className="button__link">
                            PROJECTS
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Home