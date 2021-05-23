import React, { useState } from 'react';
import {NavLink} from "react-router-dom"
import Loader from "./Loader";

const PleaseLogin = ({auth})=>{
const [loading, setLoading] = useState(true)
setTimeout(()=>{
    setLoading(!true)
}, 1000)
if(loading){
    return(
        <Loader/>
    )
}
return(
    <div className="red-text center-align">
    <h3>Oooopss!!!</h3>
    <p>Please Login To View this page</p>
    <NavLink to="/login" className="btn btn-waves">Login</NavLink>
</div>
)
}

export default PleaseLogin;