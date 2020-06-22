import React, { Component } from 'react';
import './App.css';
import { Switch, Link, Route, Redirect } from 'react-router-dom'

// networking
import axios from "axios"


// components
import NavBar from './Components/NavBar';
import LandingPage from './Containers/LandingPage'
import Profile from './Components/ProfilePage'


class App extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: "",
      username: "Jaiden16",
      id: "",
      logedIn: true
    }
  }

  setUserId = (userId) => {
    this.setState({
      id: userId
    })
  }

  renderLandingPage = () => {
    const { logedIn } = this.state
    return <LandingPage
      logInProp={logedIn}
      setUserId={this.setUserId} />
  }

  // renderProfile = () => {
  //   return <Profile />
  // }




  publicRoute = () => (
    <Switch>
      <Route path="/" render={this.renderLandingPage} />
    </Switch>
  )

  privateRoute = () => (
    <Switch>
      <Route exact path='/' render={this.renderLandingPage} />
      <Route path={`/Profile/:id`} component={Profile} />
    </Switch>
  )



  render() {
    let { logedIn, id } = this.state
    return (
      <div className="App">
        <NavBar id = {id} />
        {
          logedIn ? this.privateRoute() : this.publicRoute()
        }


      </div>
    );

  }


}

export default App;
