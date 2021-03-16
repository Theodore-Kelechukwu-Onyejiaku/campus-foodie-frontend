import React, {useEffect} from "react";

export default function Header(){
    
    return(
      <>
        <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo" style={{fontFamily: "'Tangerine', cursive"}}>Campus Foodie</a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/login">Login</a></li>
            <li><a href="/earn"><i className="material-icons left"></i> Earn</a></li>
            <li>
              <a href="/cart-list"><i className="material-icons left">shopping_cart</i>0</a>
            </li>
            <li><a href="">About?</a></li>
          </ul>

         
        </div>
      </nav>
       
       <ul  className="sidenav" id="mobile-demo">
            <li><a href="/login">Login</a></li>
            <li><a href="/earn"><i className="material-icons left"></i> Earn</a></li>
            <li>
              <a href="/cart-list"><i className="material-icons left">shopping_cart</i>0</a>
            </li>
            <li><a href="">About?</a></li>
            <li>
                <a id="menu" className="waves-effect waves-light btn btn-floating" ><i className="material-icons">menu</i></a>
            </li>
          </ul>
      
      </>
    )
}