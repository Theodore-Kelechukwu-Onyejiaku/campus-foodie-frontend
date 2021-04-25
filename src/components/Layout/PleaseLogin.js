import React from 'react';
import {NavLink} from "react-router-dom"

const PleaseLogin = ({auth})=>{
return(
    <div className="red-text center-align">
    <h3>Oooopss!!!</h3>
    <p>Please Login To View this page</p>
    <NavLink to="/login" className="btn btn-waves">Login</NavLink>
</div>
)
}

export default PleaseLogin;