import * as React from 'react';
import { Link } from 'react-router-dom';

const Basic = () => {
    return(
        <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
            <h1>Basic offer page</h1>
            <Link className="mx-3" to="/">retour</Link>
            <Link className="mx-3" to="/premium">go to premium</Link>
            <Link  className="mx-3" to="/pro">go to profesionnal</Link>
        </div>
    )
}

export default Basic