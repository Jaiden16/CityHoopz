import React, { Component } from "react";
import { withRouter, Link } from 'react-router-dom'
import pic from '../pictures/logo.png'
import '../Css/SignIn.css'

function SignIn() {

    return (
        <div className="SignIn-Component">
            <h1 id="cityhoopz">City Hoopz</h1>
            <div className="Grid">
                <div id="left">
                    <form>
                        <label htmlFor="email">Email: </label>
                        <input id="email" type="email" placeholder="Enter Email" required />
                        <br />
                        <label htmlFor="password">Password: </label>
                        <input id="password" type="password" required />
                    </form>
                </div>
                <div className="right">
                    <img id="logo" src={pic} alt="broken" />
                </div>
            </div>
        </div>
    )
}








export default SignIn