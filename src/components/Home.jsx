import React from "react";
import { Link } from "react-scroll";
import "./home.css";
import { SiMysql, SiAntdesign } from "react-icons/si";
import {  Fade } from "react-awesome-reveal";

function Home() {
  return (
    <section className="home section" id="home">
      <Fade  >
      <div className="home__container container grid">
        <img src="assets/memoji.png" alt="memoji" className="home__img" />

        <div className="home__data">
          <Fade  direction={"down"}>
            <h1 className="home__title">
              I am <br />
              <span>DAVOU JOBBI</span> <br />
              Graduate Software Developer
              <br />
            </h1>
          </Fade>
          <Fade delay={100} direction={"up"}>
            <p className="home__description">
              Welcome to my website! ( Developed in React by yours truly{" "}
              <i className="ri-reactjs-line react"></i> ) <br /> <br /> My name
              is Davou and I’m a recent graduate with experience in software
              development and project management.
            </p>
          </Fade>
          <div className="tech__stack">
            <ul className="tech__list">
            <Fade delay={200} direction={'up'}> 
              <li className="tech__item">
                <span className="tech__text">JavaScript</span>
                <i className="ri-javascript-line"></i>
              </li>
              </Fade>
              <Fade delay={300} direction={'down'}> 
              <li className="tech__item">
                <span className="tech__text">HTML</span>
                <i className="ri-html5-fill"></i>
              </li>
              </Fade>
              <Fade delay={400} direction={'up'}> 
              <li className="tech__item">
                <span className="tech__text">CSS</span>
                <i className="ri-css3-fill"></i>
              </li>
              </Fade>
              <Fade delay={500} direction={'down'}> 
              <li className="tech__item">
                <span className="tech__text">React</span>
                <i className="ri-reactjs-line"></i>
              </li>
              </Fade>
              <Fade delay={600} direction={'up'}> 
              <li className="tech__item">
                <span className="tech__text">Java</span>
                <i className="ri-java-line"></i>
              </li>
              </Fade>
              <Fade delay={700} direction={'down'}> 
              <li className="tech__item">
                <span className="tech__text">Python</span>
                <i className="fa-brands fa-python"></i>
              </li>
              </Fade>
              <Fade delay={800} direction={'up'}> 
              <li className="tech__item">
                <span className="tech__text">MySQL</span>
                <SiMysql />
              </li>
              </Fade>
              <Fade delay={900} direction={'down'}> 
              <li className="tech__item">
                <span className="tech__text">Ant Design</span>
                <SiAntdesign />
              </li>
              </Fade>
              <Fade delay={1000} direction={'up'}> 
              <li className="tech__item">
                <span className="tech__text">Bootstrap</span>
                <i className="ri-bootstrap-fill"></i>
              </li>
              </Fade>
            </ul>
          </div>

          <div className="home__buttons">
            <a href="#projects"  className="button">
              <span className="button__icon">
                <i className="ri-skip-right-line"></i>
              </span>
              <span className="button__text">PROJECTs</span>
            </a>
            <a href="https://1drv.ms/w/s!Aqj5rF7sOC4B8T0MEo7EYwcEe-dj?e=EHY6FR" target="_blank" className="button">
              <span className="button__icon">
                <i className="ri-skip-right-line"></i>
              </span>
              <span className="button__text">CV</span>
            </a>
          </div>
        </div>
      </div>
      </Fade>
    </section>
  );
}

export default Home;
