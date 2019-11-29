import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (<nav>
        <div class="nav-wrapper">
            <a href="#!" class="brand-logo"><i class="material-icons"></i>Bit Person</a>
            <ul class="right hide-on-med-and-down">
                <li><a href="sass.html"><i class="material-icons">search</i></a></li>
                <li><a href="#" onClick={props.onChangeLayout}><i class="material-icons">view_module</i></a></li>
                <li><a onClick><i class="material-icons">refresh</i></a></li>
                <li><a href="mobile.html"><i class="material-icons">more_vert</i></a></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
    </nav>)
}
export default Header