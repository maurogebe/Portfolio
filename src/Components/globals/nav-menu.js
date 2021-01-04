import React from 'react'
import {
    Link
  } from "react-router-dom";

// Import Style 
import './nav-menu.css'

//import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faBriefcase, faEnvelopeOpen, faComments } from '@fortawesome/free-solid-svg-icons'


export default function NavMenu() {
    return (
        <header>
            <nav className="nav">
                <div className="nav__menu-toggle">
                    <button onclick="displayMenuToggle()">
                        Menu
                    </button>
                    <ul className="nav__menu" id="menuToggle">
                        <Link to='/'>
                            <li className="nav__menu-home">
                                <FontAwesomeIcon icon={faHome} />
                                <h4>Home</h4>
                            </li>
                        </Link>
                        <Link to='/about'>
                            <li className="nav__menu-about">
                                <FontAwesomeIcon icon={faUser} />
                                <h4>About</h4>
                            </li>
                        </Link>
                        <Link to='/portfolio'>
                            <li className="nav__menu-portfolio">
                                <FontAwesomeIcon icon={faBriefcase} />
                                <h4>Portfolio</h4>
                            </li>
                        </Link>
                        <Link to='/contact'>
                            <li className="nav__menu-contact">
                                <FontAwesomeIcon icon={faEnvelopeOpen} />
                                <h4>Contact</h4>
                            </li>
                        </Link>
                        {/* <Link to='/blog'>
                            <li className="nav__menu-blog">
                                <FontAwesomeIcon icon={faComments} />
                                <h4>Blog</h4>
                            </li>
                        </Link> */}
                    </ul>
                </div>
            </nav>
        </header>
    )
}