import  React  from 'react' ;
import home from '../asset/home.png'
import car from '../asset/car-insurance-1.png'
import life from '../asset/life-insurance-1.png'
import business from '../asset/business-insurance-1.png'
import travel from '../asset/travel-insurance-1.png'
import other  from '../asset/other-insurance-1.png'

import './style.scss'

const Section2 = () => {
    return(
        <div className='body'>
            <div className="container">
                <div className="container text-center">
                    <h1 className="marginNone">Choose your Insurance</h1>
                    <small className="opacity mb-5">Keep Your Life Smile, Safe, and Wealthy</small>
                </div>
                <div className="card-contents">
                    <div className="card00">
                        <div className="wrap-img" style={{backgroundColor:"#dff9fb"}}>
                            <img src={home} alt='home'/>
                        </div>
                        
                        <h5>Home Insurance</h5>
                        <small className="opacity">
                            Insurance can have various effects on society through the way that it changes who bears the cost of lossed and dammage
                        </small>
                    </div>
                    <div className="card00">
                        <div className="wrap-img" style={{backgroundColor:"#f5dff2"}}>
                            <img src={car} alt='car'/>
                        </div>
                        
                        <h5>Car Insurance</h5>
                        <small className="opacity">
                            Insurance can have various effects on society through the way that it changes who bears the cost of lossed and dammage
                        </small>
                    </div>
                    <div className="card00">
                        <div className="wrap-img" style={{backgroundColor:"rgb(230, 245, 223)"}}>
                            <img src={life} alt='life'/>
                        </div>
                        
                        <h5>life Insurance</h5>
                        <small className="opacity">
                            Insurance can have various effects on society through the way that it changes who bears the cost of lossed and dammage
                        </small>
                    </div>
                    <div className="card00">
                        <div className="wrap-img" style={{backgroundColor:"rgb(247, 242, 199)"}}>
                        <img src={business} alt='business'/>
                        </div>
                        
                        <h5>business Insurance</h5>
                        <small className="opacity">
                            Insurance can have various effects on society through the way that it changes who bears the cost of lossed and dammage
                        </small>
                    </div>
                    <div className="card00">
                        <div className="wrap-img" style={{backgroundColor:"rgb(251, 239, 236)"}}>
                            <img src={travel} alt='travel'/>
                        </div>
                        <h5>travel Insurance</h5>
                        <small className="opacity">
                            Insurance can have various effects on society through the way that it changes who bears the cost of lossed and dammage
                        </small>
                    </div>
                    <div className="card00">
                        <div className="wrap-img" style={{backgroundColor:"rgb(239, 236, 251)"}}>
                            <img src={other} alt='other'/>
                        </div>
                        <h5>other Insurance</h5>
                        <small className="opacity">
                            Insurance can have various effects on society through the way that it changes who bears the cost of lossed and dammage
                        </small>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Section2