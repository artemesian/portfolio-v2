import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          Home
        </Route>
        <Route path="/about">
          About me
        </Route>
        <Route path="/contact">
          Contact
        </Route>
        <Route path="/portfolio">
          Projects List
        </Route>
        <Route path="/portfolio/dev">
          Projects Dev
        </Route>
        <Route path="/portfolio/design">
          Projects Design
        </Route>
        <Route path="/blog">
          Blog Homepage
        </Route>
        <Route path="/blog/post">
          Blog Article
        </Route>
        <Route path="*">
          No Match
        </Route>
      </Switch>
    </div>
  );
}

export default App;
