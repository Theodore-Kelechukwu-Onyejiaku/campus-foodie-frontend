import React from "react";
import {NavLink} from "react-router-dom"

export default function AdminTools() {
  return (
    <nav>
      <div class="nav-wrapper" style={{marginTop:"5px"}}>
        <div class="col s12">
          <NavLink   to="/admin/dashboard" class="breadcrumb"><i className="material-icons left">home</i>Dashboard</NavLink>
          
          <NavLink   to={window.location.pathname} class="breadcrumb">{window.location.pathname.split("/")[window.location.pathname.split("/").length - 1]}</NavLink>
        </div>
      </div>
    </nav>
  )
}