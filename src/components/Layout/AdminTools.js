import React from "react";
import {NavLink} from "react-router-dom"

export default function AdminTools() {
  return (
    <>
    <div className="container hide-on-med-and-up" style={{display:"flex", justifyContent: "space-between", position:"fixed",bottom:"0px",width:"100%",left:"0px",overflowX:"scroll",zIndex:"1"}}>
        <div><NavLink className="btn-large" activeClassName="base-link" to="/admin/dashboard"><i className="fa fa-home"></i></NavLink></div>
        <div><NavLink className="btn-large" activeClassName="base-link" to="/admin/users"><i className="fa fa-group"></i></NavLink></div>
        <div><NavLink className="btn-large" activeClassName="base-link" to="/admin/orders"><i className="fa fa-truck"></i></NavLink></div>
        <div><NavLink className="btn-large" activeClassName="base-link" to="/admin/payments"><i className="fa fa-dollar"></i></NavLink></div>
        <div><NavLink className="btn-large" activeClassName="base-link" to="/admin/products"><i className="material-icons prefix">restaurant</i></NavLink></div>
        <div><NavLink className="btn-large" activeClassName="base-link" to="/admin/add-product"><i className="fa fa-plus"></i></NavLink></div>
    </div>
    <div className="container hide-on-small-only" style={{display:"flex", justifyContent: "space-between"}}>
        <div><NavLink className="btn-large" activeClassName="base-link" to="/admin/dashboard"><i className="fa fa-home"></i></NavLink></div>
        <div><NavLink className="btn-large" activeClassName="base-link" to="/admin/users"><i className="fa fa-group"></i></NavLink></div>
        <div><NavLink className="btn-large" activeClassName="base-link" to="/admin/orders"><i className="fa fa-truck"></i></NavLink></div>
        <div><NavLink className="btn-large" activeClassName="base-link" to="/admin/payments"><i className="fa fa-dollar"></i></NavLink></div>
        <div><NavLink className="btn-large" activeClassName="base-link" to="/admin/products"><i className="material-icons prefix">restaurant</i></NavLink></div>
        <div><NavLink className="btn-large" activeClassName="base-link" to="/admin/add-product"><i className="fa fa-plus"></i></NavLink></div>
    </div>
    </>
  )
}