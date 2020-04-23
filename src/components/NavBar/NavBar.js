import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {

  scrollToPastWork = () => {
    let element = document.getElementById("cacc")
    if (element != null) {
      element.scrollIntoView()
    }
  }

  scrollToTechStack = () => {
    let element = document.getElementById("techStack")
    if (element != null) {
      element.scrollIntoView()
    }
  }

  scrollToContact = () => {
    let element = document.getElementById("contact")
    if (element != null) {
      element.scrollIntoView()
    }
  }

  render() {
    return (
      <div className="navBar">
        <h1 className="navBarButton" onClick={this.scrollToPastWork}>Past Work</h1>
        <h1 className="navBarButton" onClick={this.scrollToTechStack}>Our Tech Stacks</h1>
        <h1 className="navBarButton" onClick={this.scrollToContact}>Contact</h1>
      </div>
    );
  }
}

export default NavBar;