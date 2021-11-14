import  React  from 'react' ;
import banner from '../../asset/banner-1.png';
import './style.scss'

import Content from '../content';
import Nav from './nav';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>

            <Nav/>
            <div className="box_container">
                <div className='wrap-content'>
                    <div className="className = content">
                        <div className='container title'>
                            <div>
                                <small className="opacity ">HELLO, WE ARE FINCORP</small>
                            </div>
                            
                            <h1>Insurance <br/> made easy.</h1>
                            <button className="btn-header "><Link to="/freeQuote" className="text-decoration-none" style={{color:"white"}}>Get your free Quote</Link></button>
                        </div> 
                    </div>
                </div>             
                <div className="wrap-img">
                    <img className='image' src= { banner } alt= "banner" />
                </div>
            </div>

            <div className="container desc">
                <h2>A new take on insurance</h2>
                <small className="opacity">Great for individuals ans business</small>
            </div>  
            <Content/>
        </div>
    )
    
    
}

export default Header;





