import React from "react";
import { NavLink, Link } from "react-router-dom"


export default function Header({ cartLength, auth, logoutUser}) {
  return (
  <>
    <div>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <NavLink to="/" className="brand-logo" style={{ fontFamily: "'Tangerine', cursive" }}>Campus Foodie</NavLink>

            <Link to="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>

            <ul id="nav-mobile" className="right hide-on-med-and-down">
            {auth.user.email ? 
              <li><NavLink  to="/login" onClick={()=>{logoutUser()}}><i className="material-icons white-text left"><i className="fa fa-sign-out"></i></i>Logout</NavLink></li>
              :
              <li><NavLink activeClassName="active-link" to="/login"><i className="material-icons white-text left"><i className="fa fa-sign-in"></i></i>Login</NavLink></li>
            }  
              <li><NavLink activeClassName="active-link" to="/earn"><i className="material-icons left">attach_money</i>Earn</NavLink></li>
              <li>
                <NavLink activeClassName="active-link" to="/cart-list"><i className="material-icons left">shopping_cart</i>{cartLength}</NavLink>
              </li>
              <li><NavLink activeClassName="active-link" to="/about"><i className="material-icons white-text left">info</i>About?</NavLink></li>
               <li><Link to="#" class="dropdown-trigger" data-target="dropdown2"><i class="material-icons left">account_circle</i>User<i class="material-icons right">arrow_drop_down</i></Link></li>
            </ul>
            {auth.user.email ?  <ul id="dropdown2" class="dropdown-content">
                  <li><Link to="/profile" ><i class="material-icons left">account_circle</i>Profile</Link></li>
                  <li><Link to="/orders"><i className="material-icons left">check_box</i>Orders</Link></li>
                  <li><Link to="/notifications"><i class="material-icons left">add_alert</i>Alerts</Link></li>
                  <li><Link to="/login" onClick={()=>{logoutUser()}}><i className="fa fa-sign-out"></i>Logout</Link></li>
                  <li class="divider"></li>
                </ul>
            :
            <ul id="dropdown2" class="dropdown-content">
                    <li><NavLink to="/login" className="side-link"><i className="fa fa-sign-in"></i>Login</NavLink></li>
          </ul>
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
        {auth.user.email ? 
              <li><NavLink className="side-link" to="/login" onClick={()=>{logoutUser()}}><i className="material-icons white-text left"><i className="fa fa-sign-out"></i></i>Logout</NavLink></li>
              :
              <li><NavLink className="side-link" activeClassName="active-link" to="/login"><i className="material-icons white-text left"><i className="fa fa-sign-in"></i></i>Login</NavLink></li>
        } 
        <li><NavLink to="/earn" className="side-link"><i className="material-icons white-text left">attach_money</i> Earn</NavLink></li>
        <li>
          <NavLink to="/cart-list" className="side-link"><i className="material-icons white-text left">shopping_cart</i>{cartLength}</NavLink>
        </li>
        <li><NavLink to="#" className="side-link"><i className="material-icons white-text left">info</i>About?</NavLink></li>
        <li><NavLink to="#" className="side-link dropdown-trigger" data-target="dropdown1"><i class="material-icons left white-text">account_circle</i>User<i class="material-icons right white-text">arrow_drop_down</i></NavLink></li>
      </ul>
      {auth.user.email ?  <ul id="dropdown1" class="dropdown-content">
                  <li><Link to="/profile" ><i class="material-icons left">account_circle</i>Profile</Link></li>
                  <li><Link to="/orders"><i className="material-icons left">check_box</i>Orders</Link></li>
                  <li><Link to="/notifications"><i class="material-icons left">add_alert</i>Alerts</Link></li>
                  <li><Link to="/login" onClick={()=>{logoutUser()}}><i className="fa fa-sign-out"></i>Logout</Link></li>
                  <li class="divider"></li>
                </ul>
            :
            <ul id="dropdown1" class="dropdown-content">
                <li><NavLink to="/login" ><i className="fa fa-sign-in"></i>Login</NavLink></li>
          </ul>
      }
    </div>
    {/* {window.location.href === "http://localhost:3000/"? <Slider/>:<div>jjhjhjhjh</div>} */}
  </>
  )
}