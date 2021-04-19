import React from "react";
import { NavLink, Link } from "react-router-dom"

export default function Header({cartLength}) {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo" style={{ fontFamily: "'Tangerine', cursive" }}>Campus Foodie</Link>
          <Link to="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink activeClassName="active-link" to="/login"><i className="material-icons white-text left"><i className="fa fa-sign-in"></i></i>Login</NavLink></li>
            <li><NavLink activeClassName="active-link" to="/earn"><i className="material-icons left">attach_money</i>Earn</NavLink></li>
            <li>
              <NavLink activeClassName="active-link" to="/cart-list"><i className="material-icons left">shopping_cart</i>{cartLength}</NavLink>
            </li>
            <li><NavLink activeClassName="active-link" to="/about"><i className="material-icons white-text left">info</i>About?</NavLink></li>
          </ul>
          <ul id="nav-mobile" className="right hide-on-large-only">
            <li>
              <NavLink activeClassName="active-link" to="/cart-list"><i className="material-icons left">shopping_cart</i>{cartLength}</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li><NavLink to="/" className="side-link" style={{ fontFamily: "'Tangerine', cursive" }}>Campus Foodie</NavLink></li>
        <li><NavLink to="/login" className="side-link"><i className="material-icons white-text left"><i className="fa fa-sign-in"></i></i>Login</NavLink></li>
        <li><NavLink to="/earn" className="side-link"><i className="material-icons white-text left">attach_money</i> Earn</NavLink></li>
        <li>
          <NavLink to="/cart-list" className="side-link"><i className="material-icons white-text left">shopping_cart</i>0</NavLink>
        </li>
        <li><NavLink to="#" className="side-link"><i className="material-icons white-text left">info</i>About?</NavLink></li>
      </ul>
    </>
  )
}