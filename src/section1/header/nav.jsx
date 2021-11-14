import * as React from 'react';
import logo from '../../asset/logo.png';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <div className="header">
            <ul className="border-style " >   
                <li><img src={logo} alt="logo"/> </li>
                <li><Link to="/family">For you and family</Link></li>
                <li><Link to="/business">For Business</Link></li>
            </ul>
        </div>
    )
}

export default Nav