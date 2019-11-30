import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (<nav>
        <div className="nav-wrapper">
            <Link to="/" className="brand-logo"><i className="material-icons"></i>Bit Person</Link>
            <ul className="right hide-on-med-and-down">
                <li><a href="sass.html"><i className="material-icons">search</i></a></li>

                <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
    </nav>)
}
export default Header