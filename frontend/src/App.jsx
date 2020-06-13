import React, { Component } from 'react';
import './App.css';
import { Switch, Link, Route, Redirect } from 'react-router-dom'

// networking
import axios from "axios"


// components
import NavBar from './Components/NavBar';
import SignIn from "./Components/SignIn";
import HomePage from './Components/HomePage';


class App extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: "",
      username: "",
      userId: 1,
      logedIn: true
    }
  }

  
  componentDidMount(){
    axios.get("http://localhost:3001/users")
    .then((res)=>{
      console.log(res)
    })
  }
  
  
  renderSignIn = () => {
    return <SignIn/>
  }

  renderHomePage = () =>{
    return <HomePage/>
  }



  publicRoute = () => (
    <Switch>
      <Route path="/" render ={this.renderSignIn} />
    </Switch>
  )

  privateRoute = () => (
    <Switch>
      <Route path='/:id' component ={HomePage} />
      {/* <Redirect to ="/:id" from="/"/> */}
    </Switch>
  )



  render() {
    let {logedIn} = this.state
    return (
      <div className="App">
        <NavBar />
        {
          logedIn? this.privateRoute() : this.publicRoute()
        }
        

      </div>
    );

  }


}

export default App;
