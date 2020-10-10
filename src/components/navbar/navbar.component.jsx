import React from 'react'
import logo from "../../assets/logo.svg"
import darkmode from "../../assets/darkmode.svg"
import discord from "../../assets/discord.svg"
import linkedin from "../../assets/linkedin.svg"
import github from "../../assets/github.svg"
import twitter from "../../assets/twitter.svg"
import heart from "../../assets/heart.svg"

// import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import './navbar.styles.scss'

export const Navbar = () => {
  const showNavList = () => {
    let toggle = document.querySelector("#navbar-toggler");
    let navlistWrapper = document.querySelector("#navlist-wrapper");
    let navlistContainer = document.querySelector("#navlist-container");

    Array.from(navlistContainer.children).forEach(e => {e.classList.toggle('fade');console.log(e)})
    Array.from(navlistWrapper.children).forEach(e => {e.classList.toggle('fade');console.log(e)})
    toggle.classList.toggle("open");
    navlistWrapper.classList.toggle("open");
  }

  return (
    <div id="navbar-wrapper">
      <div id="navbar-container">
        <div id="logo-container">
          <NavLink to="/"><img src={logo} alt="logo" className="logo"/></NavLink>
        </div>
        <div id="mode-container">
          <img src={darkmode} alt="darkmode-icon" className="mode-icon"/>
        </div>
        <div id="navbar-toggler" onClick={()=>showNavList()}>
          <span className="navbar-toggler-item"></span>
          <span className="navbar-toggler-item"></span>
          <span className="navbar-toggler-item"></span>
        </div>
      </div>
      <div id="navlist-wrapper">
        <div id="navlist-container">
          <div className="navlist-item"><NavLink to="/">HOME</NavLink></div>
          <div className="navlist-item"><NavLink to="/about">ABOUT ME</NavLink></div>
          <div className="navlist-item"><NavLink to="/portofolio">PROJECTS</NavLink></div>
          <div className="navlist-item"><NavLink to="/blog">BLOG</NavLink></div>
          <div className="navlist-item"><NavLink to="/contact">CONTACT ME</NavLink></div>
        </div>
        <div id="social-container">
          <a className="social"><img src={discord} className="social-icon" height="50px" /></a>
          <a className="social"><img src={linkedin} className="social-icon" height="50px" /></a>
          <a className="social"><img src={github} className="social-icon" height="50px" /></a>
          <a className="social"><img src={twitter} className="social-icon" height="50px" /></a>
        </div>
        <div id="message">Design and Coded with<img src={heart} height="20px" style={{padding:"0 2px 0 1px"}}/>by @the_artemesian © 2020</div>
      </div>
    </div>
  )
}

// const mapStateToProps = (state) => ({
  
// })

// const mapDispatchToProps = {
  
// }

export default Navbar
// connect(mapStateToProps, mapDispatchToProps)(Navbar)
