import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";
import Home from "./container/home/home.component";
import AboutMe from "./container/aboutMe/aboutMe.component";
import Contact from "./container/contact/contact.component";
import Blog from "./container/blog/blog.component";
import Portfolio from "./container/portfolio/portfolio.component";
import Post from "./components/post/post.component";
import Project from "./components/project/project.component";
import Page404 from "./components/page404/page404.component";

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/" exact>
          {/* <Home/> */}
        </Route>
        <Route path="/about">
          <AboutMe/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/portfolio" exact>
          <Portfolio/>
        </Route>
        <Route path="/portfolio/dev">
          <Project/>
        </Route>
        <Route path="/portfolio/design">
          <Project/>
        </Route>
        <Route path="/blog" exact>
          <Blog/>
        </Route>
        <Route path="/blog/post">
          <Post/>
        </Route>
        <Route path="*">
          <Page404/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
