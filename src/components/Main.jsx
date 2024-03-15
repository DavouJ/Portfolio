import React from 'react'
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from "./Contact"

function main() {
    return (
        <main className='main'>
            <Home />
            <About/>
            <Projects/>
            <Contact/>
        </main>
    )
}

export default main