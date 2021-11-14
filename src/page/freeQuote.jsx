import * as React from 'react';
import { Link } from 'react-router-dom';

const FreeQuote = () => {
    return(
        <div style={{height:"100vh"}} className="d-flex justify-content-center align-items-center">
            <h1>FreeQuote page</h1>
            <Link className="mx-3" to="/">retour</Link>
        </div>
    )

}

export default FreeQuote