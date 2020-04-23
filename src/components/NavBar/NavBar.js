import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {

  scrollToPastWork = () => {
    let element = document.getElementById("cacc")
    if (element != null) {
      element.scrollIntoView()
    }
  }

  scrollToAbout = () => {
    let element = document.getElementById("about")
    if (element != null) {
      element.scrollIntoView()
    }
  }

  render() {
    return (
      <div className="navBar">
        <h1 className="navBarButton" onClick={this.scrollToPastWork}>Past Work</h1>
        <h1 className="navBarButton">Our Tech Stack</h1>
        <h1 className="navBarButton">Contact</h1>
      </div>
    );
  }
}

export default NavBar;