import React, { useState } from 'react'
import Header from "./components/Header";
import Main from  './components/Main';
import Footer from './components/Footer';


import './App.css'

function App() {
  
  window.onscroll = function(e){
    
    const header = document.getElementById('header')

    this.scrollY >= 50? header.classList.add('scroll-header') : header.classList.remove( 'scroll-header');
  }
  

  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
