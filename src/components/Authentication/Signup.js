import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import Loader from "../Layout/Loader";
import { useHistory } from "react-router-dom";
import {baseUrl} from "../../shared/baseUrl";



export default function Signup({ signup, signupError, auth, signupLoading }) {
    const [visible, setVisible] = useState(false)
    const history = useHistory();

    const handleVisibility = () => {
        setVisible(!visible);
    }


    const responseGoogle = async (googleData) => {
        signupLoading()
        console.log(googleData)
        const res = await fetch(baseUrl+"api/auth/google", {
            method: "POST",
            body: JSON.stringify({
                token: googleData.tokenId
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(async data => {
                console.log(data);
                if (data.token) {
                    // Successful
                    localStorage.setItem("token", data.token);
                    console.log(data.user)
                    await signup(data.user, data.token, data.message)
                    history.push("/profile")
                }
                else {
                    //Not successful
                    signupError(data.message)
                }


            })
            .catch(error => {
                signupError(error.message)
            })
            console.log(res)
    }
    return (
        <div className="row" style={{ marginTop: "5%" }}>
            <div className="col s12 m2 l3"></div>
            <div className="col s12 m8 l6">
                <div className="row">
                    {(auth.isLoading) ? <Loader /> : <div></div>}
                    {auth.successMess ? <div className="green white-text center-align successMessage">{auth.successMess}</div> : <div></div>}
                    {auth.errorMess ? <div className="red white-text center-align errorMessage">{auth.errorMess}</div> : <div></div>}
                    <form className="col s12">
                        <h5 className="center-align">Welcome To Campus Foodie!</h5>
                        <h4 className="center-align" style={{ fontFamily: "'Tangerine', cursive" }}>Please Create an Account!</h4>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="icon_prefix" type="text" className="validate" />
                                <label for="icon_prefix">Email</label>
                            </div>
                            {visible ? <div className="input-field col s12">
                                <input id="icon_telephone" type="text" className="validate" />
                                <label for="icon_telephone">Password</label>
                                <span onClick={()=>handleVisibility()} toggle="#confirm-password" className="field-icon toggle-password">
                                    <span className="material-icons">visibility</span>
                                </span>
                            </div> :
                                <div className="input-field col s12">
                                    <input id="icon_telephone" type="password" className="validate" />
                                    <label for="icon_telephone">Password</label>
                                    <span onClick={()=>handleVisibility()} toggle="#confirm-password" className="field-icon toggle-password">
                                        <span className="material-icons">visibility_off</span>
                                    </span>
                                </div>
                            }
                            <button className="btn pulse">Login</button>
                        </div>
                    </form>
                    <div className="right-align">
                        <span className="black-text">Have an account?<NavLink to="/login">Login</NavLink></span>
                    </div>
                    <hr />
                    <h4 className="center-align" style={{ fontFamily: "'Tangerine', cursive" }}>Or</h4>

                    <GoogleLogin
                        clientId="1036410801170-q9bp27gfbqm9u9id57h29muvbr9s18rt.apps.googleusercontent.com"
                        render={renderProps => (
                            <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="social-link google"><i className="fa fa-google fa-2x"></i><span>Signup with Google</span></button>
                        )}
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />

                    <div className="social-link facebook center-align">
                        <NavLink to="/#"><i className="fa fa-facebook fa-2x"></i><span>Signup with Facebook</span></NavLink>
                    </div>
                    <div className="social-link twitter center-align">
                        <NavLink className="" to="/#"><i className="fa fa-twitter fa-2x"></i><span>Signup with Twitter</span></NavLink>
                    </div>

                </div>
            </div>
            <div className="col s12 m2 l3"></div>
        </div>
    )
}