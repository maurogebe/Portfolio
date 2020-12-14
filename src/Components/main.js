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

      </Switch>
    </Router>
  );
}

export default Main;