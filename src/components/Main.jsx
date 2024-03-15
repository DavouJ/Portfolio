import React, {useState, useEffect} from 'react'
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from "./Contact"
import './main.css'

function main() {
    const [scroll,setScroll] = useState('scrollup')

    useEffect(() => {
        const scrollUp = (e) =>{
            window.scrollY >=350? setScroll('scrollup show-scroll') : setScroll('scrollup');
        }
        window.addEventListener("scroll", scrollUp);
    }, []);
    
    
    return (
        <main className='main' >
            <Home />
            <About />
            <Projects />
            <Contact />
            <a href="#" className={scroll} id="scroll-up" >
                <i className="ri-corner-right-up-fill"></i>
            </a>
        </main>
    )
}

export default main