import React from "react";
import {NavLink} from "react-router-dom";

export default function Login() {
    return (
        <div className="row" style={{marginTop:"5%"}}>
            <div className="col s0 m3 l4"></div>
            <div className="col s12 m6 l4">
                <div className="row">
                    <form className="col s12">
                        <h5 className="center-align">Welcome To Campus Foodie!</h5>
                        <h4 className="center-align" style={{fontFamily: "'Tangerine', cursive"}}>Please Login</h4>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="icon_prefix" type="text" className="validate" />
                                <label for="icon_prefix">Email</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="icon_telephone" type="password" className="validate" />
                                <label for="icon_telephone">Password</label>
                                <span toggle="#confirm-password" className="field-icon toggle-password">
                                    <span className="material-icons">visibility</span>
                                </span>
                            </div>
                            <button className="btn pulse">Login</button>
                        </div>
                    </form>
                    <div className="right-align">
                        <span className="black-text">Don't have an account?<NavLink to="/signup">Signup</NavLink></span>
                    </div>
                    <hr/>
                    <h4 className="center-align"  style={{fontFamily: "'Tangerine', cursive"}}>Or</h4>
                    <div>
                        <div className="social-link google center-align">
                            <NavLink to="/#"><i className="fa fa-google fa-2x"></i><span>Login with Google</span></NavLink>
                        </div>
                        <div className="social-link facebook center-align">
                            <NavLink to="/#"><i className="fa fa-facebook fa-2x"></i><span>Login with Facebook</span></NavLink>
                        </div>
                        <div className="social-link twitter center-align">
                            <NavLink className="" to="/#"><i className="fa fa-twitter fa-2x"></i><span>Login with Twitter</span></NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col s0 m6 l4"></div>
        </div>
    )
}