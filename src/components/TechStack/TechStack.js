import React, { Component } from 'react';
import './TechStack.css';

class TechStack extends Component {

  render() {
    return (
      <div className="techStack" id="techStack">
        <h1 className="techStackHeader">Our Tech Stacks</h1>
        <p className="techStackText"> We use a variety of Tech Stacks. With Web, it's mostly React.js on the frontend with NoSQL on the backend. With Mobile, we work with Swift on the frontend and also NoSQL on the backend. We provide all of our clients with DNS management and google analytics accounts. We love to learn new technologies and are always willing to work with something new.</p>
      </div>
    );
  }
}

export default TechStack;