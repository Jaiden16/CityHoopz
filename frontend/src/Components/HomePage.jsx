import React , { Component } from "react";
import {withRouter,Link} from 'react-router-dom'

class Homepage extends Component{
    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
            username: ""
        }
    }

    componentDidMount = () =>{
        console.log("Component Mounted")
    }

    render(){
        return(
            <div>
                <h1>City Hoopz</h1>
            </div>
        )
    }
}

export default Homepage