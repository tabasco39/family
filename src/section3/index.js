import  React  from 'react' ;
import './style.scss'
// import bleu from '../asset/after-blue.png'
// import pink from '../asset/after-pink.png'

const Section3 = () => {
    return(
        <div className="container claims">
            <div className='text-center top'>
                <h1> Simplified Claims</h1>
                <p className="fw-bold">Easy as One, Two, Three</p>
            </div>
            <div className="position">
                <div className="card-contents">
                    <div className="card00">
                        <p className="fs-1 mb-3"> 1</p>
                        <h4>Report Claim</h4>
                        <small className="opacity">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </small>
                    </div>
                    <div  className="card00">
                        <p style={{color:"#e17ff6", backgroundColor:"#fae3f5"}} className="fs-1 mb-3"> 2</p>
                        <h4> Claim Processing</h4>
                        <small className="opacity">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </small>
                    </div>
                    <div className="card00">
                        <p style={{color:"#95e96f", backgroundColor:"#e6fee6"}} className="fs-1 mb-3"> 3</p>
                        <h4>Final Settlement</h4>
                        <small className="opacity">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </small>
                    </div>
                </div>
                {/* <img scr={bleu} alt='bleu'/>
                <img scr={pink} alt='pink'/> */}
            </div>
            
        </div>
    )
}

export default Section3 