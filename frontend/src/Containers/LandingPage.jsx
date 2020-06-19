import React, {Component} from 'react';
import SignIn from '../Components/SignIn';
import HomePage from '../Components/HomePage';

class LandingPage extends Component {
  constructor(props){
    super(props)
    this.state ={
      email:"",
      password:"",
      username:"",
      logedin: false
    }
  }
  renderSignIn = () =>{
    return <SignIn/>
  }

  renderHomePage = () =>{
    return <HomePage/>
  }
  
  componentDidMount(){
    this.setState({
      logedin: this.props.logged
    })
  }

  render(){
    
    return (
      <div>
        {
          !this.state.logedin ? this.renderSignIn() : this.renderHomePage()
        }
      </div>
    );

  }
}

export default LandingPage;
