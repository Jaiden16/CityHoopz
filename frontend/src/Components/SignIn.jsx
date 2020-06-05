import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom'
import pic from '../pictures/logo.png'
import axios from 'axios'
import '../Css/HomePage.css'

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            username: ""
        }
    }

    componentDidMount = () => {
        console.log("Component Mounted")
        this.debugCheck()
    }

    debugCheck = async () => {
        let response = await axios.get('http://localhost:3001/users')
        console.log(response)
    }

    render() {
        return (
            <div className = "home">
                <h1 id = "cityhoopz">City Hoopz</h1>
                <div className="right">
                    <img id="logo" src={pic} alt="broken" />
                </div>
                <div id = "left">
                    <form>
                        <label htmlFor = "email">Email: </label>
                        <input id = "email" type = "email" placeholder = "Enter Email" required/>
                        <br/>
                        <label htmlFor = "password">Password: </label>
                        <input id = "password" type = "password" required/>
                    </form>

                </div>

            </div>

        )
    }
}

export default SignIn