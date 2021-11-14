import * as React from 'react';
import logo from '../../asset/logo.png';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        //burger menu
        <div>
            <section className="p-menu1">
                <nav id="navbar" className="navigation" role="navigation">
                    <input id="toggle1" type="checkbox" />
                    <label className="hamburger1" for="toggle1">
                        <div className="top"></div>
                        <div className="meat"></div>
                        <div className="bottom"></div>
                    </label>

                    <nav class="menu1">
                        <Link to="/" className="link1"><img src={logo} alt="logo"/></Link>
                        <Link to="/family" className="link1">For you and family</Link>
                        <Link to="/business"className="link1">For Business</Link>
                    </nav>
                </nav>
            </section>


            <div className="header">
                <ul className="border-style " >   
                    <li><img src={logo} alt="logo"/> </li>
                    <li><Link to="/family" className="text-decoration-none" style={{color:'black'}}>For you and family</Link></li>
                    <li><Link to="/business" className="text-decoration-none" style={{color:'black'}}>For Business</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav