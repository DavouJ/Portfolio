import React, {useState} from "react";
import { Link } from "react-scroll"
import "./navbar.css"






function Navbar() {

    const  [clicked, setClicked] = useState('nav__menu')

    const showMenu = (e) => {
        setClicked("nav__menu show-menu")
    }


    const hideMenu = (e) => {
        setClicked('nav__menu')
    }

    


    return (

        <nav className="nav container">
            <a href="#" className="nav__logo">
                <i className="ri-git-repository-line"></i> Portfolio
            </a>
            <div className={clicked} id="nav-menu">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#" className="nav__link" onClick={hideMenu}>Home</a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className="nav__link" onClick={hideMenu}>About Me</a>
                    </li>
                    <li className="nav__item">
                        <a href="#projects" className="nav__link" onClick={hideMenu}>Projects</a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link" onClick={hideMenu}>Contact Me</a>
                    </li>
                </ul>
                {/* close button */}
                <div className="nav__close" id="nav-close" onClick={hideMenu}>
                    <i className="ri-close-circle-line"></i>
                </div>
            </div>

            <div className="nav__actions">
                <i className="ri-user-2-line"></i>
                <i className="ri-terminal-box-line"></i>

                {/* toggle */}
                <div className="nav__toggle" id="nav-toggle" onClick={showMenu}>
                    <i className="ri-menu-line"></i>
                </div>
            </div>
        </nav>

    )
}

export default Navbar