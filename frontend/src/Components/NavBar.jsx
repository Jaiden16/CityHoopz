import React from 'react'
import { Link } from 'react-router-dom'
import "../Css/NavBar.css"

function NavBar(props) {
    return (
        <ul className = 'nav-list'>
            <li id = "nav-item"><Link id="brand" to="/">CH</Link></li>
            <li id = "nav-item"><Link to={`/Profile/${props.id}`}>Profile</Link></li>
            <li id = "nav-item"><Link to="/Courts">Courts</Link></li>
        </ul>

    )


}

export default NavBar;