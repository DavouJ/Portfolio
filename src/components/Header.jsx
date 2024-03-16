import React, { useState, useEffect } from "react";
import Navbar from "./Navbar"
import "./header.css"



function Header() {

    const [scroll, setScroll] = useState('header')

    useEffect(() => {
        const scrollUp = (e) => {
            window.scrollY >= 50 ? setScroll('header scroll-header') : setScroll('header');
        }
        window.addEventListener("scroll", scrollUp);
    }, []);

    return (
        <header className={scroll} id="header">
            <Navbar />
        </header>
    )
}

export default Header