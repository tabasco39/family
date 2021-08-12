import  React  from 'react' ;
import logo from '../../asset/logo.png';
import banner from '../../asset/banner-1.png';
import './style.css'

import Content from '../content';

const Header = () => {
    return (
        <div>
            <div className="box_container">
                <div className='header'>
                    <div className="content">
                        <ul>
                            <li><img src={logo} alt="logo"/> </li>
                            <li>For you and family</li>
                            <li>For Business</li>
                        </ul>
                        <div className='title'>
                            <p>HELLO, WE ARE FINCORP</p>
                            <h1>Insurance made easy.</h1>
                            <button>Get your free Quote</button>
                        </div>
                        <div className="desc">
                            <h2>A new take on insurance</h2>
                            <p>Great for individuals ans business</p>
                        </div>   
                    </div>
                </div>             
                <div className='image'>
                    <img src= { banner } alt= "banner" />
                </div>
            </div>
            <Content/>
        </div>
    )
    
    
}

export default Header;





