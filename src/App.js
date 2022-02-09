import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Sample from './components/Sample/Sample';
import TechStack from './components/TechStack/TechStack';
import Contact from './components/Contact/Contact';

class App extends Component {

  render() {
    return (
      <div className="app">
        <div className="appContainerOne">
          <Header/>
          <NavBar/>
        </div>
        <div className="appContainerTwo">
          <Sample title="BC Dining Menus" displayID="bcdm"/>
          <Sample title="Page Master" displayID="pm"/>
          <Sample title="Cajun Connection" displayID="cc"/>
        </div>
        <TechStack/>
        <Contact/>
      </div>
    );
  }
}

export default App;
