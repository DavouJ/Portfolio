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

    const mapProjects = (data) => {

        const projectElements = data.map((element, index) => {

            const projectTech = data[index].tech.map((element) => {
                let tech
                switch (element) {
                    case "JavaScript":
                        return `<i className="ri-javascript-line"></i>`
                    case "HTML":
                        return `<i className="ri-html5-fill"></i>`
                    case "CSS":
                        return `<i className="ri-css3-fill"></i>`
                    case "React":
                        return `<i className="ri-reactjs-line"></i>`
                    case "Java":
                        return `<i className="ri-java-line"></i>`
                    case "Python":
                        return `<i className="fa-brands fa-python"></i>`
                    case "MySQL":
                        return `<SiMysql />`
                    case "Ant Design":
                        return `<SiAntdesign />`
                    case "Bootstrap":
                        return `<i className="ri-bootstrap-fill"></i>`
                }

            });

            return (
                <article className="project__card">
                    <img src={data[index].image} alt={data[index].title} className="project__img" />
                    <h3 className="project__title">
                        {data[index].title}
                    </h3>
                    <span className="project__tech">
                        {projectTech.forEach((element, index) => { element[index] })}
                    </span>
                    <button className="project__button">
                        <i className="ri-skip-right-line"></i>
                    </button>
                </article>
            )
        });

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
                                return <i className="ri-javascript-line tech__btn"></i>
                            case "HTML":
                                return <i className="ri-html5-fill tech__btn"></i>
                            case "CSS":
                                return <i className="ri-css3-fill tech__btn"></i>
                            case "React":
                                return <i className="ri-reactjs-line tech__btn"></i>
                            case "Java":
                                return <i className="ri-java-line tech__btn"></i>
                            case "Python":
                                return <i className="fa-brands fa-python tech__btn"></i>
                            case "MySQL":
                                return <SiMysql className = "tech__btn" />
                            case "Ant Design":
                                return <SiAntdesign className = "tech__btn"/>
                            case "Bootstrap":
                                return <i className="ri-bootstrap-fill tech__btn"></i>
                        }

                    });

                    return (
                        <article key={index} className="project__card">
                            <img src={projects[index].image} alt={projects[index].title} className="project__img" />
                            <h3 className="project__title">
                                {projects[index].title}
                            </h3>
                            <div key={index*50} className="project__tech">
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