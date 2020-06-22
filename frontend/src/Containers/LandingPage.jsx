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
      logedin: "Jaiden16",
      userId: props.setUserId
    }
  }
  renderSignIn = () =>{
    return <SignIn/>
  }

  renderHomePage = () =>{
   
    const {username, userId} = this.state
    return <HomePage 
    username = {username}
    setUserId = {userId}/>
  }
  
  componentDidMount(){
    this.setState({
      logedin: this.props.logInProp
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
