import React from 'react'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container grid">
                <div>
                    <a href="#" className="footer__logo">
                        <i className="ri-git-repository-line">Portfolio</i>
                    </a>
                    <p className="footer__Description">2024 © All Rights Reserved.</p>
                </div>

                <div className="footer__content grid">
                    <div>
                        <h3 className="footer__title">About</h3>
                        <ul className="footer__links">
                            <li>
                                <a href="#" className="footer__link">Locations: London/Manchester</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">CV</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className="footer__title"></h3>
                    <ul className="footer__links">
                        <li>
                            <a href="#" className="footer__link">GitHub</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Hosted on Netlify</a>
                        </li>
                        <li>
                            <a href="#" className="footer__link">Back to the top</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer