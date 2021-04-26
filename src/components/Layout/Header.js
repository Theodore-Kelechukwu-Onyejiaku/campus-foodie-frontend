import React from "react";
import { NavLink, Link } from "react-router-dom"
import Slider from "../Layout/Slider"


export default function Header({ cartLength, auth }) {
  return (
  <>
    <div>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <NavLink to="/" className="brand-logo" style={{ fontFamily: "'Tangerine', cursive" }}>Campus Foodie</NavLink>

            <Link to="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>

            <ul id="nav-mobile" className="right hide-on-med-and-down">

              <li><NavLink activeClassName="active-link" to="/login"><i className="material-icons white-text left"><i className="fa fa-sign-in"></i></i>Login</NavLink></li>
              <li><NavLink activeClassName="active-link" to="/earn"><i className="material-icons left">attach_money</i>Earn</NavLink></li>
              <li>
                <NavLink activeClassName="active-link" to="/cart-list"><i className="material-icons left">shopping_cart</i>{cartLength}</NavLink>
              </li>
              {auth.user.email
                &&
                (<li><Link to="#" class="dropdown-trigger" data-target="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></Link></li>)
              }
              <li><NavLink activeClassName="active-link" to="/about"><i className="material-icons white-text left">info</i>About?</NavLink></li>
            </ul>
            {auth.user.email
              &&
              (
                <ul id="dropdown1" class="dropdown-content">
                  <li><Link to="/profile" ><i class="material-icons left">account_circle</i>Profile</Link></li>
                  <li><Link to="/orders"><i className="material-icons left">check_box</i>Orders</Link></li>
                  <li class="divider"></li>
                  <li><Link to="/notifications"><i class="material-icons left">add_alert</i>Alerts</Link></li>
                </ul>
              )
            }

            <ul id="nav-mobile" className="right hide-on-large-only">
              <li>
                <NavLink activeClassName="active-link" to="/cart-list"><i className="material-icons left">shopping_cart</i>{cartLength}</NavLink>
              </li>
            </ul>
          </div>
        </nav>

      </div>
      <ul className="sidenav" id="mobile-demo">
        <li><NavLink to="/" className="side-link" style={{ fontFamily: "'Tangerine', cursive" }}>Campus Foodie</NavLink></li>
        <li><NavLink to="/login" className="side-link"><i className="material-icons white-text left"><i className="fa fa-sign-in"></i></i>Login</NavLink></li>
        <li><NavLink to="/earn" className="side-link"><i className="material-icons white-text left">attach_money</i> Earn</NavLink></li>
        <li>
          <NavLink to="/cart-list" className="side-link"><i className="material-icons white-text left">shopping_cart</i>{cartLength}</NavLink>
        </li>
        <li><NavLink to="#" className="side-link"><i className="material-icons white-text left">info</i>About?</NavLink></li>
        <li><NavLink to="#" className="side-link dropdown-trigger" data-target="dropdown1">Dropdown<i class="material-icons right white-text">arrow_drop_down</i></NavLink></li>
      </ul>
      <ul id="dropdown1" class="dropdown-content">
        <li><Link to="/profile" ><i class="material-icons left">account_circle</i>Profile</Link></li>
        <li><Link to="/orders"><i className="material-icons left">check_box</i>Orders</Link></li>
        <li class="divider"></li>
        <li><Link to="/notifications"><i class="material-icons left">add_alert</i>Alerts</Link></li>
      </ul>
    </div>
    {/* {window.location.href === "http://localhost:3000/"? <Slider/>:<div>jjhjhjhjh</div>} */}
  </>
  )
}