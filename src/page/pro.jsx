import * as React from 'react';
import { Link } from 'react-router-dom';

const Pro = () => {
    return(
        <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
            <h1>Basic offer page</h1>
            <Link className="mx-3" to="/">retour</Link>
            <Link className="mx-3" to="/basic">go to basic</Link>
            <Link  className="mx-3" to="/premium">go to premium</Link>
        </div>
    )
}

export default Pro