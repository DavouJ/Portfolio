import React from 'react'
import './footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container grid">
                <div>
                    <a href="#" className="footer__logo">
                        <i className="ri-git-repository-line"></i>Portfolio
                    </a>
                    <p className="footer__Description">A responsive portfolio built in React</p>
                </div>

                <div className="footer__content grid">
                    <div>
                        
                        <ul className="footer__links">
                            <li>
                                <a href="https://github.com/DavouJ" target='_blank' className="footer__link">GitHub</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">CV</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Contact</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        
                        <ul className="footer__links">
                            <li>
                                <span className="footer__link">Location: London/Manchester</span>

                            </li>
                            <li>
                                <a href="https://app.netlify.com/teams/davouj/overview" className="footer__link">Hosted on Netlify</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Back to the top</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <span className="footer__copy">
                2024 &#169; All Rights Reserved By Davou Jobbi
            </span>
        </footer>
    )
}

export default Footer