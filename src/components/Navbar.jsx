import React from "react";
import { Link } from "react-scroll"
import "../index.css"


function Navbar() {

    return (

        <nav className="nav container">
            <a href="#" className="nav__logo">
                <i className="ri-git-repository-line"></i> portfolio
            </a>
            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link to="#" className="nav__link">Home</Link>
                    </li>
                    <li className="nav__item">
                        <Link href="#about" className="nav__link">About Me</Link>
                    </li>
                    <li className="nav__item">
                        <Link href="#projects" className="nav__link">Projects</Link>
                    </li>
                    <li className="nav__item">
                        <Link href="#contact" className="nav__link">Contact Me</Link>
                    </li>
                </ul>
                {/* close button */}
                <div className="nav__close" id="nav-close">
                    <i class="ri-close-circle-line"></i>
                </div>
            </div>

            <div className="nav__actions">
                <i class="ri-user-2-line"></i>
                <i class="ri-terminal-box-line"></i>

                {/* toggle */}
                <div className="nav__toggle" id="nav-toggle">
                    <i class="ri-menu-line"></i>
                </div>
            </div>
        </nav>

    )
}

export default Navbar