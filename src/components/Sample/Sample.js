import React, { Component } from 'react';
import './Sample.css';
import CajunConnectionScreen from '../../assets/cc.png';
import ThePMInternScreen from '../../assets/tpmi.png';
import CarsAgainstCCScreen from '../../assets/cacc.png';
import PageMasterScreen from '../../assets/pm.png';
import BCDMScreen from '../../assets/bcdm.png';

// let cajunConnectionText = "Cajun Connection is a social media app made for young proffesionals to give ananayous feedback on each other's resumes, portfolio's, and proffesional work. It allows users to create profiles and form connections with other students/young proffesionals interested in growing their network."
// let theProductManagementInternText = "The Product Management Intern is a website blog which features content on how what product management internships are like and how to get one. The website was built with React.js and is hosted for free by Github Pages."
// let bcDiningMenusText = "BC Dining Menus is an iOS application which displays the menus of the 12 diffrent dining halls at BC. The app scrapes information from the hard-to-read BC Dining website and displays it in a friendly format."
// let carsAgainstColonCancerText = "Cars Against Colon Cancer is an annual car show held in West Hartford by Ben Coady to raise money in memory of his grandmother. He needed a website to help spread the word of his event and give possible partners something to look at. It's built with React.js and uses Firebase for analyzing it's web traffic."
// let pageMasterText = "Page Master"

class Sample extends Component {

  openWebsite = () => {
    let displayID = this.props.displayID
    if (displayID === "cc") {
      window.open("https://apps.apple.com/gb/app/cajun-connection/id1498694017?ign-mpt=uo%3D2")
    } else if (displayID === "pmi") {
      window.open("https://theproductmanagementintern.com/")
    } else if (displayID === "cacc") {
      window.open("http://carsagainstcc.com/")
    } else if (displayID === "https://apps.apple.com/tt/app/page-master/id1474563270") {
      window.open("")
    } else if (displayID === "bcdm") {
      window.open("https://apps.apple.com/us/app/bc-dining-menus/id1459940062")
    }
  }

  render() {

    function returnDisplayImage(displayID) {
      if (displayID === "cc") {
        return CajunConnectionScreen
      } else if (displayID === "pmi") {
        return ThePMInternScreen
      } else if (displayID === "cacc") {
        return CarsAgainstCCScreen
      } else if (displayID === "pm") {
        return PageMasterScreen
      } else if (displayID === "bcdm") {
        return BCDMScreen
      }
    }

    return (
      <div className="sample" onClick={this.openWebsite}>
        <img className="sampleImage" id={this.props.displayID} src={returnDisplayImage(this.props.displayID)} alt="Screenshot"/>
      </div>
    );
  }
}

export default Sample;