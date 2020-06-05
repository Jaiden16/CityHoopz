import React from 'react'
import { Link } from 'react-router-dom'
import "../Css/NavBar.css"

function NavBar() {
    return (
        <ul>
            <li><Link id="brand" to="/">CH</Link></li>
            <li><Link to="/Profile">Profile</Link></li>
            <li><Link to="/Courts">Courts</Link></li>
        </ul>

    )


}

export default NavBar;