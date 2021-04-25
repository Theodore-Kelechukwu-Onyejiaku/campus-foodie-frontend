import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import { GoogleLogin } from "react-google-login"
import {baseUrl} from "../../shared/baseUrl";


export default function Login() {
    const [visible, setVisible] = useState(false)

    const handleVisibility = () => {
        setVisible(!visible);
    }
    const responseGoogle = async (googleData) => {
        // console.log(googleData)
        const res = await fetch(baseUrl+"api/auth/google", {
            method: "POST",
            body: JSON.stringify({
                token: googleData.tokenId
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => { console.log(resp) })
            .catch(error => {
                console.log(error)
            })
        console.log(res)
    }
    return (
        <div className="row" style={{ marginTop: "5%" }}>

            <div className="col s12 m2 l3"></div>
            <div className="col s12 m8 l6">
                <div className="row">
                    <form className="col s12">
                        <h5 className="center-align">Welcome To Campus Foodie!</h5>
                        <h4 className="center-align" style={{ fontFamily: "'Tangerine', cursive" }}>Please Login</h4>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="icon_prefix" type="text" className="validate" />
                                <label htmlFor="icon_prefix">Email</label>
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
                        <span className="black-text">Don't have an account?<NavLink to="/signup">Signup</NavLink></span>
                    </div>
                    <hr />
                    <h4 className="center-align" style={{ fontFamily: "'Tangerine', cursive" }}>Or</h4>

                    <GoogleLogin
                        clientId="1036410801170-q9bp27gfbqm9u9id57h29muvbr9s18rt.apps.googleusercontent.com"
                        render={renderProps => (
                            <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="social-link google"><i className="fa fa-google fa-2x"></i><span>Login with Google</span></button>
                        )}
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={{}}
                        cookiePolicy={'single_host_origin'}
                    />
                    <div className="social-link facebook center-align">
                        <NavLink to="/#"><i className="fa fa-facebook fa-2x"></i><span>Login with Facebook</span></NavLink>
                    </div>
                    <div className="social-link twitter center-align">
                        <NavLink className="" to="/#"><i className="fa fa-twitter fa-2x"></i><span>Login with Twitter</span></NavLink>
                    </div>
                </div>
            </div>
            <div className="col s12 m2 l3"></div>
        </div>
    )
}