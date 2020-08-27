import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import Blog from './pages/Blog';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/blog">
          <Blog/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
