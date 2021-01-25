import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Home from './Home';
import Navbar from './Navbar';
import MainSliders from './MainSliders';
import AboutUs from './AboutUs';
import Art from './Art';
import Fashion from './Fashion';


function App() {
  return (
    <Router>
      <div className="maincontainer">
        <Navbar/>
        <MainSliders/>
        <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/' component={Home} />
            <Route exact path='/AboutUs' component={AboutUs} />
            <Route exact path='/Art' component={Art} />
            <Route exact path='/Fashion' component={Fashion} />

          </Switch>
      </div>
      </Router>
  );
}

export default App;
