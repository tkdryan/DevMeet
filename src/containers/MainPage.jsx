import React, { Component } from 'react'
import MapDisplay from '../components/MapDisplay.jsx'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'
import LocationDropDown from '../components/LocationDropDown.jsx';
import Profile from '../components/Profile'
import MyEvents from '../components/MyEvents'
import TrendingEvents from '../components/TrendingEvents'
import UpcomingEvents from '../components/UpcomingEvents'

class MainPage extends Component {
  constructor (props) {
    super(props);

  };

  render () {
    return (
      <Container>
        <div className="fullscreen">
          <div className="maincontainer">
              <div className="googlemaps">
                  <MapDisplay/>
                  <LocationDropDown
                    selectedLocation={this.props.selectedLocation}
                    events={this.props.events}
                  />
              </div>
          </div>
        </div>
      </Container>
    )
  }
}

export default MainPage;