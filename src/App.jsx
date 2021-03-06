import React, { Component } from "react";
import SidebarContainer from './containers/SidebarContainer.jsx';
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';

//component imports
import MainPage from "./containers/MainPage.jsx"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      name: '',
      email: '',
      selectedLocation: '',
      events: [],
    };
    this.loginHandleClick = this.loginHandleClick.bind(this);
  }

  loginHandleClick() {
    this.setState({ loggedIn: true })
  }

  // Temporarily commented out and added a button in main page so it doesnt fetch every time we refresh
  componentDidMount() {
    // fetch('/events')
    // .then(res => res.json())
    // .then(data => {
    //   this.setState({
    //     events: data
    //   })
    // })
    // .catch(err => { console.log(err); })
  }

  componentDidUpdate() {
    // console.log(this.state.events.name);
  }

  render() {

    return (
      <HashRouter>
        <div className="fullscreen">
          <MainPage
            selectedLocation={this.state.selectedLocation}
            events={this.state.events}
          />
          <SidebarContainer
            events={this.state.events}
            loggedIn={this.state.loggedIn}
            loginHandleClick={this.loginHandleClick}
          />
        </div>
      </HashRouter>
    )
  }
}

export default App;
