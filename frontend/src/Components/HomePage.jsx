import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom'
import pic from '../pictures/logo.png'
import axios from 'axios'
// import '../Css/SignIn.css'

class HomePage extends Component {
    constructor(props){
        super()
        this.state ={
            id: props.match.params.id,
            username: ""
        }
    }


    getUser = () => {
        let {id} = this.state
        let url = `http://localhost:3001/users/${id}`
        console.log(id)
        axios.get(url)
        .then((res) =>{
            console.log(res);
            let user = res.data.users.username
            this.setState({
                username: user
            })
        })
    }


    componentDidMount(){
        this.getUser();
    }
    
        

    render(){
        let {username} = this.state
        // this.getUser();
        return (
            <div className="HomePage-Component">
                <h1>Welcome {username}</h1>
                
            </div>
    
        )
    }
}

export default HomePage