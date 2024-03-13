import React from "react";
import Navbar from "./Navbar"
import "../index.css"
import "./header.css"



function Header(){

    return(
        <header className="header" id="header">
            <Navbar/>
        </header>
    )
}

export default Header