import React, {useEffect} from "react";
import {NavLink, Link} from "react-router-dom"

export default function Header(){
    
    return(
      <>
        <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo" style={{fontFamily: "'Tangerine', cursive"}}>Campus Foodie</Link>
          <Link to="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink activeClassName="active" to="/login">Login</NavLink></li>
            <li><NavLink activeClassName="active" to="/earn"><i className="material-icons left">attach_money</i>Earn</NavLink></li>
            <li>
              <NavLink activeClassName="active" to="/cart-list"><i className="material-icons left">shopping_cart</i>0</NavLink>
            </li>
            <li><NavLink activeClassName="active" to="/about">About?</NavLink></li>
          </ul>
        </div>
      </nav>
       
       <ul  className="sidenav" id="mobile-demo">
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/earn"><i className="material-icons left"></i> Earn</NavLink></li>
            <li>
              <NavLink to="/cart-list"><i className="material-icons left">shopping_cart</i>0</NavLink>
            </li>
            <li><NavLink to="#">About?</NavLink></li>
            <li>
                <NavLink to="#" id="menu" className="waves-effect waves-light btn btn-floating" ><i className="material-icons">menu</i></NavLink>
            </li>
          </ul>
      
      </>
    )
}