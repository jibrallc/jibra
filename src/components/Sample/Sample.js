import React, { Component } from 'react';
import './Sample.css';
import CajunConnectionScreen from '../../assets/cc.png';
import ThePMInternScreen from '../../assets/tpmi.png';
import CarsAgainstCCScreen from '../../assets/cacc.png';
import PageMasterScreen from '../../assets/pm.png';
import BCDMScreen from '../../assets/bcdm.png';

class Sample extends Component {

  openWebsite = () => {
    let displayID = this.props.displayID
    if (displayID === "cc") {
      window.open("https://apps.apple.com/gb/app/cajun-connection/id1498694017?ign-mpt=uo%3D2")
    } else if (displayID === "pmi") {
      window.open("https://theproductmanagementintern.com/")
    } else if (displayID === "cacc") {
      window.open("http://carsagainstcc.com/")
    } else if (displayID === "pm") {
      window.open("https://apps.apple.com/tt/app/page-master/id1474563270")
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