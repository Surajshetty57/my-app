// import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {


  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
    <div className="container-fluid">
    <a className={`navbar-brand light text-${props.text}`} href="/" ><b>{props.title}</b></a>
      {/* <a className="navbar-brand" to="/">Navbar</a> */}
     
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className={`navbar-nav me-auto mb-2 mb-lg-0 `}>
          <li className="nav-item" >
            <a className={`nav-link  text-${props.text}`} aria-current="page" href="/" >Home</a>
          </li>
          
        </ul>
        <div className="form-check form-switch" >
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleMode} />
          <label className={`form-check-label text-${props.text}`} htmlFor="flexSwitchCheckChecked">{props.toggle}</label>
        </div>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "Suraj",
  heading: "Enter text"
}
