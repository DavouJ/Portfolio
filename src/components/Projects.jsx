import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { SiMysql, SiAntdesign } from "react-icons/si";
import "./projects.css"

function Projects() {
    const [fetched, setFetched] = useState([]);
    const [projects, setProjects] = useState([]);


    useEffect(() => {
        projectsFetch()

    })

    const projectsFetch = async () => {
        const response = await axios.get("projects.JSON").catch(function (error) { console.log(error) })
        setProjects(response.data)
        // mapProjects(response.data)
    }



    return (
        <section className="projects section">
            <h2 className="section__title">
                PROJECTS
            </h2>
            <div className="project__container container grid" >
                {projects.map((element, index) => {

                    const projectTech = projects[index].tech.map((element) => {
                        let tech
                        switch (element) {
                            case "JavaScript":
                                return <i key={index} className="ri-javascript-line tech__btn"></i>
                            case "HTML":
                                return <i key={index+1} className="ri-html5-fill tech__btn"></i>
                            case "CSS":
                                return <i key={index+2} className="ri-css3-fill tech__btn"></i>
                            case "React":
                                return <i key={index+3} className="ri-reactjs-line tech__btn"></i>
                            case "Java":
                                return <i key={index+4} className="ri-java-line tech__btn"></i>
                            case "Python":
                                return <i key={index+5} className="fa-brands fa-python tech__btn"></i>
                            case "MySQL":
                                return <SiMysql key={index+6} className = "tech__btn" />
                            case "Ant Design":
                                return <SiAntdesign key={index+7} className = "tech__btn"/>
                            case "Bootstrap":
                                return <i key={index+8} className="ri-bootstrap-fill tech__btn"></i>
                        }

                    });

                    return (
                        <article key={index} className="project__card">
                            <img src={projects[index].image} alt={projects[index].title} className="project__img" />
                            <h3 className="project__title">
                                {projects[index].title}
                            </h3>
                            <div  className="project__tech">
                                {projectTech.map((element, index) => { return element })}
                            </div>
                            <a href={projects[index].link} target='_blank' className="project__button">
                                {projects[index].isDeployed === true ? <i className="ri-window-line"></i> :<i className="ri-github-fill"></i>}
                            </a>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects