import  React, {useState}  from 'react' ;
import './style.scss'
import insurance from '../data/insurance';

import swal from 'sweetalert';



const Section2 = () => {

    const[data , setData] = useState(insurance)

    const Detail = () => {
    return  data.map((item , id) => {
            return <>
                        <button key={item.id}  onClick={()=>swal(item.title + " detail")} style={{border:"none", background:"none"}} key={item.id} className="card00">
                            <div className="wrap-img" style={{backgroundColor:item.background}}>
                                <img src={require('../asset/'+ item.logo).default} alt='home'/>
                            </div>
                            
                            <h5>{item.title}</h5>
                            <small className="opacity">
                                {item.description}
                            </small>
                        </button>
                </>
            })
    }

    return(
        <div className='body'>
            <div className="container">
                <div className="container text-center">
                    <h1 className="marginNone">Choose your Insurance</h1>
                    <small className="opacity mb-5">Keep Your Life Smile, Safe, and Wealthy</small>
                </div>
                <div className="card-contents">
                        <Detail/>
                </div>
            </div>
        </div>

    )
}

export default Section2