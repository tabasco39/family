import React from "react";
import { Link } from "react-router-dom";

const Family = () => {
    return (
        <div style={{height:"100vh"}} className="d-flex justify-content-center align-items-center">
            <h1>Family page</h1>
            <Link className="mx-3" to="/">retour</Link>
        </div>
    )

}

export default Family