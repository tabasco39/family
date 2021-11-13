import  React  from 'react' ;
import './style.scss';
import banner1 from '../../asset/health-family-1.png';

const Content = () => {
    return(
        <div>
            <div className="sec_01 ">
                <div className="wrap-img">
                    <img className='image' src= { banner1 } alt= "banner" />
                </div>
                <div className='content01'>
                    <h4>Monotonectally deploy seamless data and ressource maximizing systems</h4>
                    <p className="fw-bold mt-3"> Great fro individuals and small families up to 4 members.</p>
                    <small className="opacity">A strong, up-to-date, employee benefits health insurance program is vital for attracting and retaining good employees. It takes diligence
                        ,creativity and attention to detail to ensure you are getting the best "bang for you buck" each and every year.
                    </small>
                    <div className="flex">
                        <div className="wrap-svg">
                            <svg aria-hidden="true" width="20px" height="20px" focusable="false" data-prefix="far" data-icon="check-square" class="svg-inline--fa fa-check-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg>
                        </div>
                        <div >
                            <p className="marginNone">COMPREHENSIVE INSURANCE</p>
                            <small className="marginNone opacity">Dinamically repurpose e-business users rather than granular product</small>
                        </div>
                        
                    </div>
                    <div className="flex">
                        <div className="wrap-svg">
                            <svg aria-hidden="true" width="20px" height="20px" focusable="false" data-prefix="far" data-icon="check-square" class="svg-inline--fa fa-check-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg>
                        </div>
                        <div>
                            <p className="marginNone">SUPPORT IS JUST A CALL AWAY</p>
                            <small className="marginNone opacity">Rapidiously customize value-added platforms compliant action items</small>
                        </div>
                        
                    </div>
                    <div className="flex">
                        <div className="wrap-svg">
                            <svg aria-hidden="true" width="20px" height="20px" focusable="false" data-prefix="far" data-icon="check-square" class="svg-inline--fa fa-check-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg>
                        </div>
                        <div>
                            <p className="marginNone">SAY GOODBYE TO PAPERWORK</p>
                            <small className="marginNone opacity">Globally delive economically sound communities</small>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;