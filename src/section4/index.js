import  React  from 'react' ;
import './style.scss';
import bg from '../asset/bg-image3.png'
import quote from '../asset/quote.png'

const Section4 = () => {
    return(
        <div className="body1">
            <div className="d-flex align-items-center" style={{zIndex:"1"}}>
                <div className="container quote ">
                    <img src={quote} alt='quote' />
                    <p className='font'>
                        I need to understand what's going on - it's my health and I want to feel secure in it.
                        With my previous health insurance, I didn't know how any of it worked.
                    </p>
                    <p style={{color: "#6565c8", margin:"0"}}>Matthew Young</p>
                    <small className="opacity">Legal Consultant, United States</small>
                </div>
            </div>    
            <div className="fond">
                <img src={bg} alt='bg'/>
            </div>
            
            
        </div>
    )
}

export default Section4;