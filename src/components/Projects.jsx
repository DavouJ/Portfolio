import React from 'react'

function Projects() {
    return (
        <section className="projects section">
            <h2 className="section__title">
                PROJECTS
            </h2>
            <div className="project__container container grid">
                <article className="project__card">
                    <img src="src/assets/memoji.png" alt="" className="project__img" />
                    <h3 className="project__title">

                    </h3>
                    <span className="project__tech"></span>
                    <button className="project__button">
                        <i className="ri-skip-right-line"></i>
                    </button>
                </article>
            </div>
        </section>
    )
}

export default Projects