import  React  from 'react' ;
import { Link } from 'react-router-dom';
import './style.scss';


const Section6 = () => {
    return(
        <div className="bg" >
            <div className="text-center">
                <h1>Honest Pricing</h1>
                <small className="opacity">Simple and honest pricing. No hidden fees</small>
            </div>
            <div className='container box'>
                <div className='d-flex' style={{maxWidth:"1300px", justifyContent:'center', marginTop:'75px', flexWrap:'wrap'  }}>
                    <div className="new_card">
                        <p className='para'>Basic</p>
                        <div className="wrap-number">
                            <p className="fs"> 9</p><span className="dollars">$</span>
                        </div>
                        
                        <div className="d-flex" style={{margin:"10px auto"}}>
                            <div className="wrap-svg">
                                <svg aria-hidden="true" width="10px" height="10px" focusable="false" data-prefix="far" data-icon="check-square" class="svg-inline--fa fa-check-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg>
                            </div>
                            <small className="opacity">Rapidiously strategize value</small>
                        </div>
                        <div className="d-flex" style={{margin:"10px auto"}}>
                            <div className="wrap-svg">
                                <svg aria-hidden="true" width="10px" height="10px" focusable="false" data-prefix="far" data-icon="check-square" class="svg-inline--fa fa-check-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg>
                            </div>
                            <small className="opacity">Progressively visualize leadershiip</small>
                        </div>
                        <div className="d-flex" style={{margin:"10px auto"}}>
                            <div className="wrap-svg">
                                <svg aria-hidden="true" width="10px" height="10px" focusable="false" data-prefix="far" data-icon="check-square" class="svg-inline--fa fa-check-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg>
                            </div>
                            <small className="opacity">Equity invested supply chains</small>
                        </div>
                        <div className="center">
                            <button style={{border:"none", background:"none"}}><Link to='basic' className="btn-1 mt-3 text-decoration-none">Choose plan</Link></button>
                        </div>
                        {/* <button className="btn-1">Choose plan</button> */}
                    </div>
                    <div className="new_card" style={{transform: 'translateY(-20px)'}}>
                        <p className='para' style={{color:'#f5a973'}}>Profesionnal</p>
                        <div className="wrap-number" style={{backgroundColor: "#f5a973"}}>
                            <p className="fs" style={{color:"#fff"}}> 19</p><span className="dollarsPro">$</span>
                        </div>
                        
                        <div className="d-flex" style={{margin:"10px auto"}}>
                            <div className="wrap-svg">
                                <svg aria-hidden="true" width="10px" height="10px" focusable="false" data-prefix="far" data-icon="check-square" class="svg-inline--fa fa-check-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg>
                            </div>
                            <small className="opacity">Rapidiously strategize value</small>
                        </div>
                        <div className="d-flex" style={{margin:"10px auto"}}>
                            <div className="wrap-svg">
                                <svg aria-hidden="true" width="10px" height="10px" focusable="false" data-prefix="far" data-icon="check-square" class="svg-inline--fa fa-check-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg>
                            </div>
                            <small className="opacity">Progressively visualize leadershiip</small>
                        </div>
                        <div className="d-flex" style={{margin:"10px auto"}}>
                            <div className="wrap-svg">
                                <svg aria-hidden="true" width="10px" height="10px" focusable="false" data-prefix="far" data-icon="check-square" class="svg-inline--fa fa-check-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg>
                            </div>
                            <small className="opacity">Equity invested supply chains</small>
                        </div>
                        <div className="d-flex" style={{margin:"10px auto"}}>
                            <div className="wrap-svg">
                                <svg aria-hidden="true" width="10px" height="10px" focusable="false" data-prefix="far" data-icon="check-square" class="svg-inline--fa fa-check-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg>
                            </div>
                            <small className="opacity">Proactively leverage</small>
                        </div>
                        <div className="center">
                            <button style={{border:"none", background:"none"}}><Link to="pro" className="btn-1 mt-3 text-decoration-none" style={{backgroundColor:'#f5a973'}}>Choose plan</Link></button>
                        </div>
                    </div>
                    <div className="new_card">
                        <p className='para' style={{color:'#6b60ec'}}>Premium</p>
                        <div className="wrap-number" style={{backgroundColor: "#d6dcf5"}}>
                            <p className="fs" style={{color:"#6d7dbb"}}> 49</p><span className="dollarsPrem">$</span>
                        </div>
                        
                        <div className="d-flex" style={{margin:"10px auto"}}>
                            <div className="wrap-svg">
                                <svg aria-hidden="true" width="10px" height="10px" focusable="false" data-prefix="far" data-icon="check-square" class="svg-inline--fa fa-check-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg>
                            </div>
                            <small className="opacity">Rapidiously strategize value</small>
                        </div>
                        <div className="d-flex" style={{margin:"10px auto"}}>
                            <div className="wrap-svg">
                                <svg aria-hidden="true" width="10px" height="10px" focusable="false" data-prefix="far" data-icon="check-square" class="svg-inline--fa fa-check-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg>
                            </div>
                            <small className="opacity">Progressively visualize leadershiip</small>
                        </div>
                        <div className="d-flex" style={{margin:"10px auto"}}>
                            <div className="wrap-svg">
                                <svg aria-hidden="true" width="10px" height="10px" focusable="false" data-prefix="far" data-icon="check-square" class="svg-inline--fa fa-check-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg>
                            </div>
                            <small className="opacity">Equity invested supply chains</small>
                        </div>
                        <div className="center">
                            <button style={{border:"none", background:"none"}}><Link to="/premium" className="btn-1 mt-3 text-decoration-none" style={{backgroundColor:'#887fef'}}>Choose plan</Link></button>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                <small className="text-center opacity">*Prices shown per month if paid annually</small>
                </div>
            </div>
            
        </div>
    )
}

export default Section6