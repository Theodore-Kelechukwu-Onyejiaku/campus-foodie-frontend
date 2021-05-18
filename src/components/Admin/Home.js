import React from "react";
import { NavLink } from "react-router-dom";


export default function Home({result, error}){
    return(
        <div id="test1" className="col s12">
            <h1 style={{ fontFamily: "'Tangerine', cursive" }}>Admin Dashboard</h1>
            <h6>Welcome to admin dashbaord!</h6>
            {error === "" ? 
            <div>
                <div className="row">
                <div className="col s12 m6 ">
                    <div className="col s12 m6" style={{width:"100%", margin:"auto",textAlign:"center"}}>
                        <NavLink to="/admin/add-product" className="btn-large waves-effect waves-light action-btn" >Add Product </NavLink>
                        <p></p>
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="col s12 m6" style={{width:"100%", margin:"auto",textAlign:"center"}}>
                        <NavLink to="/admin/users" className="btn-large waves-effect waves-light action-btn" >View All Agents</NavLink>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col s12 m6 ">
                    <div className="col s12 m6" style={{width:"100%", margin:"auto",textAlign:"center"}}>
                        <NavLink to="/admin/add-product" className="btn-large waves-effect waves-light action-btn" >Products {result.users}</NavLink>
                        <p></p>
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="col s12 m6" style={{width:"100%", margin:"auto",textAlign:"center"}}>
                        <NavLink to="/admin/users" className="btn-large waves-effect waves-light action-btn" >View All Users {result.users}</NavLink>
                    </div>
                </div>
            </div>
            </div>
            :<div>Whatever</div>
            }
            
        </div>
    )
}