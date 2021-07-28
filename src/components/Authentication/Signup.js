import React, { useState } from "react";
import { NavLink, useHistory, Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import Loader from "../Layout/Loader";
import { baseUrl } from "../../shared/baseUrl";
import M from 'materialize-css/dist/js/materialize.min.js'


export default function Signup({ signupGoogle, signupGoogleError, auth, signupGoogleLoading, signupLocalPost }) {
    const [visible, setVisible] = useState(false);
    const [passwordValue, setPasswordValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [disable, setDisable] = useState(false);
    const [passwordLength, setPasswordLength] = useState(0);
    const [fullNameValue, setFullNameValue] = useState("");
    const [fullNameError, setFullNameError] = useState("");
    const history = useHistory();


    const handlePasswordInput = (e) => {
        setPasswordValue(e.target.value);
        setPasswordLength(e.target.value.length);
        if (passwordLength < 6) {
            if (passwordLength === 1) {
                M.toast({ html: "Password should be greater than 6", classes: "red white-text" })
            }
            setPasswordError("Password should be greater than 6");
            setDisable(true);
        } else {
            setPasswordError("");
            setDisable(false);
        }
    }

    const handleEmailInput = (e) => {
        setEmailValue(e.target.value)
    }

    const handleFullNameInput = (e) =>{
        setFullNameError("");
        setFullNameValue(e.target.value);
    }

    const handleVisibility = () => {
        setVisible(!visible);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(fullNameValue === ""){
            setFullNameError("Please enter your full name");
            M.toast({ html: "Enter full name", classes: "red white-text" })
            return;
        }
        if(fullNameValue.split(" ").length <= 1){
            setFullNameError("Please enter correct full name");
            M.toast({ html: "Enter Correct full name", classes: "red white-text" })
            return;
        }
        let signupBody = { email: emailValue, password: passwordValue, fullname: fullNameValue };
        console.log(signupBody)
        signupLocalPost(signupBody)
    }

    const responseGoogle = async (googleData) => {
        signupGoogleLoading()
        console.log(googleData)
        const res = await fetch(baseUrl + "api/auth/google", {
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
                    await signupGoogle(data.user, data.token, data.message)
                    setTimeout(() => {
                        history.push("/profile")
                    }, 1500)
                }
                else {
                    console.log("baba just display error jorr")
                    //Not successful
                    signupGoogleError(data.message)
                }
            })
            .catch(error => {
                signupGoogleError(error.message)
            })
        console.log(res)
    }

    const responseErrorGoogle = (error) => {
        console.log(error);
    }

    return (
        <div className="container row" style={{ marginTop: "5%" }}>
            <div className="col s12 m3 l4"></div>
            <div className="col s12 m6 l4">
                <div className="row">
                    {auth.isLoading ? <Loader /> : <div></div>}
                    {/* Custom alert */}
                    {auth.errorMess ?
                        <div class="red-text center-align">
                            {auth.errorMess}
                        </div>
                        : <div></div>}
                    {auth.successMess ?
                        <div class="green-text center-align">
                            {auth.successMess}
                        </div>
                        : <div></div>}
                    {/* end of custom alert */}
                    <form onSubmit={(e) => { handleSubmit(e) }}>
                        <h4 className="center-align" style={{ fontFamily: "'Tangerine', cursive" }}>Please Create an Account!</h4>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="icon_prefix" type="email" onChange={(e) => { handleEmailInput(e) }} className="validate" value={emailValue} required />
                                <label htmlFor="icon_prefix">Email</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="icon_prefix" type="text" onChange={(e) => { handleFullNameInput(e) }} className="validate" value={fullNameValue}/>
                                <label htmlFor="icon_prefix">Full Name</label>
                                <br /><span className="red-text">{fullNameError}</span>
                            </div>
                            {visible ? <div className="input-field col s12">
                                <input id="icon_telephone" type="text" className="validate" value={passwordValue} onChange={(e) => { handlePasswordInput(e) }} required />
                                <label for="icon_telephone">Password</label>
                                <span onClick={() => handleVisibility()} toggle="#confirm-password" className="field-icon toggle-password">
                                    <span className="material-icons" id="see">visibility</span>
                                </span>
                                <br /><span className="red-text">{passwordError}</span>
                            </div> :
                                <div className="input-field col s12">
                                    <input id="icon_telephone" type="password" className="validate" value={passwordValue} onChange={(e) => { handlePasswordInput(e) }} required />
                                    <label for="icon_telephone">Password</label>
                                    <span onClick={() => handleVisibility()} toggle="#confirm-password" className="field-icon toggle-password">
                                        <span className="material-icons" id="see">visibility_off</span>
                                    </span>
                                    <br /><span className="red-text">{passwordError}</span>
                                </div>
                            }
                            {auth.isLoading ? <button type="submit" className="btn" disabled>Creating{" "}<i className="fa fa-spinner fa-spin"></i></button>
                            
                            : 
                            <button type="submit" className="btn" disabled={disable} >Create Account</button>
                            }
                        </div>
                    </form>
                    <div className="right-align">
                        <span className="black-text">Have an account?<NavLink to="/login">{" "}Login</NavLink></span>
                    </div>
                    <p></p>

                    <GoogleLogin
                        clientId="1036410801170-q9bp27gfbqm9u9id57h29muvbr9s18rt.apps.googleusercontent.com"
                        render={renderProps => (
                            <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="social-link google" style={{ borderRadius: "3px", fontSize: "20px", boxShadow: "0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%)" }}>
                                <i style={{ padding: "4%", border: "thin solid white", float: "left" }} className="fa fa-google"></i>
                                <span style={{ padding: "4%", float: "left" }}>Signup with Google</span>
                            </button>
                        )}
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseErrorGoogle}
                        cookiePolicy={'single_host_origin'}
                    />

                    {/* <div className="social-link facebook center-align">
                        <NavLink to="/#"><i className="fa fa-facebook fa-2x"></i><span>Signup with Facebook</span></NavLink>
                    </div> */}
                    {/* <div className="social-link twitter center-align">
                        <NavLink className="" to="/#"><i className="fa fa-twitter fa-2x"></i><span>Signup with Twitter</span></NavLink>
                    </div> */}
                    <Link to="/password-reset">Forgot Password?</Link>

                </div>
            </div>
            <div className="col s12 m3 l6"></div>
        </div>
    )
}