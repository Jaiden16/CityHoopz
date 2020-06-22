import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom'
import pic from '../pictures/logo.png'
import axios from 'axios'
// import '../Css/SignIn.css'

class HomePage extends Component {
    constructor(props){
        super()
        this.state ={
            id: 2,
            userid: props.setUserId
        }
    }


    getUser = () => {
        let {id} = this.state
        let url = `http://localhost:3001/users/${id}`
        console.log(id)
        axios.get(url)
        .then((res) =>{
            console.log(res.data.users);
            let user = res.data.users.username
            this.setState({
                username: user
            })
        })
    }


    componentDidMount(){
        const {id,userid} = this.state
        this.getUser();
        userid(id)
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