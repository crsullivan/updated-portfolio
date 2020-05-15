import React from 'react';
import './App.css';
import { Router, Route, Switch } from "react-router-dom";
import history from "./components/history";
import home from './components/home'
import about from './components/about'
import Nav from './components/nav'
import Footer from "./components/footer";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faKey);

function App() {
  return (
    <Router history={history}>
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/about" component={about} />
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
