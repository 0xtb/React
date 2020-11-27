// import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import './css/App.css';
import Nav from './js/Nav.js';
import Home from './js/home.js';
import About from './js/About.js';
import Service from './js/Service.js';
import NotFound from './js/NotFound.js';
import Footer from './js/Footer.js';
import Login from './js/login.js';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <Nav />
        </nav>
        <main>
          <Switch>

            <Route path="/" exact component={Home} />
            <Route path="/service" exact component={Service} />
            <Route path="/about" exact component={About} />
            <Route path="/login" exact component={Login} />
            <Route component={NotFound} />

          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
  );
}}


export default App;
