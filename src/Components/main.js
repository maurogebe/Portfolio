import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

// Import Style
import './main.css';

//import Components
import NavMenu from './globals/nav-menu'
import Home from './home/home'
import About from './about/about'
import Portfolio from './portfolio/portfolio'
import Contact from './contact/contact';




function Main() {
  return (
    <Router>

      <NavMenu />
      
      <Switch>

          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/portfolio">
            <Portfolio />
          </Route>

          <Route>
            <Contact />
          </Route>

      </Switch>
    </Router>
  );
}

export default Main;