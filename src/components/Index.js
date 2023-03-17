import React,  { useState } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Redirect
 
} from "react-router-dom";
import Nav from './Nav.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Home from './Home.js';
import Sidebar from './Sidebar';

const Index = () => {
  return (
    <div>

          <div className="mobile-search">
              <form action="/" className="search-form">
                <img src="img/svg/search.svg" alt="search" className="svg" />
                <input className="form-control me-sm-2 box-shadow-none" type="search" placeholder="Buscar..." aria-label="Search" />
              </form>
          </div>
          <div className="mobile-author-actions"></div>
          <header className="header-top">
              <nav className="navbar navbar-light">
                <div className="navbar-left">
                    <div className="logo-area">
                      <a className="navbar-brand" href="index.html">
                          <img className="dark" src="img/logo-white.png" alt="logo"/>
                          <img className="light" src="img/logo-white.png" alt="logo"/>
                      </a>
                      <a href="#" className="sidebar-toggle">
                          <img className="svg" src="img/svg/align-center-alt.svg" alt="img"/></a>
                    </div>
                    <div className="top-menu">
                       <Nav />   
                      
                    </div>
                </div>
                {/* <!-- ends: navbar-left --> */}

                
                <div className="navbar-right">
                                
                    {/* <!-- navigation nav.js --> */}
                </div>
                {/* <!-- ends: .navbar-right --> */}
               
              </nav>
          </header>
          <main className="main-content">

              <div className="sidebar-wrapper">
                {/* <!-- Sidebar --> */}
                <Sidebar /> 
              </div>

              <div className="contents">

              {/* <!-- Home.js --> */}
                <Home /> 
              </div>
                <Footer />  
              {/* <!-- Footer.js --> */}
          </main>
          <div id="overlayer">
              <div className="loader-overlay">
                <div className="dm-spin-dots spin-lg">
                    <span className="spin-dot badge-dot dot-primary"></span>
                    <span className="spin-dot badge-dot dot-primary"></span>
                    <span className="spin-dot badge-dot dot-primary"></span>
                    <span className="spin-dot badge-dot dot-primary"></span>
                </div>
              </div>
          </div>
          <div className="overlay-dark-sidebar"></div>
          <div className="customizer-overlay"></div>

      
    </div>
  )
}

export default Index