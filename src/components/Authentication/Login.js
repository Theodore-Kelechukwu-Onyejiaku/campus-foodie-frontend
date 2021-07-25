import React,{useState} from "react";
import { NavLink, useHistory} from "react-router-dom";
import { GoogleLogin } from "react-google-login"
import {baseUrl} from "../../shared/baseUrl";
import Loader from "../Layout/Loader";
import M from 'materialize-css/dist/js/materialize.min.js'





export default function Login({ signupGoogle, signupGoogleError, auth, signupGoogleLoading,loginLocalPost }) {
    const [visible, setVisible] = useState(false);
    const [passwordValue, setPasswordValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [noEmailInput, setNoEmailInput] = useState(false);
    const [noPasswordInput, setNoPasswordInput] = useState(false);

    const history = useHistory();

    const handlePasswordInput = (e) =>{
        setPasswordValue(e.target.value);
        setNoPasswordInput(false)
    }

    const handleEmailInput = (e) =>{
        setEmailValue(e.target.value);
        setNoEmailInput(false);
        setInvalidEmail(false);
    }
    const handleVisibility = () => {
        setVisible(!visible);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        let signupBody = {email:emailValue, password: passwordValue};
        console.log(signupBody)

        if(emailValue === "" && passwordValue === ""){
            setNoEmailInput(true);
            setNoPasswordInput(true);
            M.toast({ html: "Please enter all fields", classes: "red white-text" })
            return;
        }
         if(emailValue === ""){
            // Tell the user
            setNoEmailInput(true);
            M.toast({ html: "Please enter an email address", classes: "red white-text" })
            return;
        }
        if(passwordValue === ""){
            setNoPasswordInput(true);
            M.toast({ html: "Please enter password", classes: "red white-text" })
            return
        }
        let isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailValue);
        if(!isEmailValid) {
            // Tell the user
            console.log("email invalid!")
            setInvalidEmail(!invalidEmail)
            M.toast({ html: "Please enter a valid email address", classes: "red white-text" })
            return
        }
        loginLocalPost(signupBody)
    }
    const responseGoogle = async (googleData) => {
        signupGoogleLoading()
        const res = await fetch(baseUrl+"api/auth/google-login", {
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
                    if(data.user.isAdmin){
                        setTimeout(()=>{
                            history.push("/admin/dashboard")
                        }, 1500)
                    }else{
                        setTimeout(()=>{
                            history.push("/profile")
                        }, 1500)
                    }
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

    const responseErrorGoogle = (error) =>{
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
                    <form className="" onSubmit={(e)=>{handleSubmit(e)}}>
                        <h4 className="center-align" style={{ fontFamily: "'Tangerine', cursive" }}>Please Login</h4>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="icon_prefix" type="text"  value={emailValue} className="validate" onChange={(e)=>{handleEmailInput(e)}}/>
                                <label htmlFor="icon_prefix">Email</label>
                                {invalidEmail ?<span className="red-text">Please enter a valid email address</span> : <span></span>}
                                <br/>
                                {noEmailInput? <span className="red-text">Please fill this field</span>: <span></span>}
                            </div>
                            {visible ? <div className="input-field col s12">
                                <input id="icon_telephone" type="text" className="validate" value={passwordValue} onChange={(e)=>{handlePasswordInput(e)}}/>
                                <label for="icon_telephone">Password</label>
                                {noPasswordInput? <span className="red-text">Please fill this field</span>: <span></span>}
                                <span onClick={()=>handleVisibility()} toggle="#confirm-password" className="field-icon toggle-password" onChange={(e)=>{handlePasswordInput(e)}}>
                                    <span className="material-icons">visibility</span>
                                </span>
                            </div> :
                                <div className="input-field col s12">
                                    <input id="icon_telephone" type="password" className="validate" value={passwordValue} onChange={(e)=>{handlePasswordInput(e)}}/>
                                    <label for="icon_telephone">Password</label>
                                    {noPasswordInput? <span className="red-text">Please fill this field</span>: <span></span>}
                                    <span onClick={()=>handleVisibility()} toggle="#confirm-password" className="field-icon toggle-password">
                                        <span className="material-icons">visibility_off</span>
                                    </span>
                                </div>
                            }
                            <button type="submit" className="btn">Login</button>
                        </div>
                    </form>
                    <p></p>
                    <div className="right-align">
                        <span className="black-text">Don't have an account?<NavLink to="/signup">{" "}Signup</NavLink></span>
                    </div>
                    <p></p>

                    <GoogleLogin
                        clientId="1036410801170-q9bp27gfbqm9u9id57h29muvbr9s18rt.apps.googleusercontent.com"
                        render={renderProps => (
                            <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="social-link google" style={{borderRadius:"3px",fontSize:"20px", boxShadow: "0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%)"}}>
                                <i  style={{padding:"4%", border: "thin solid white", float:"left"}} className="fa fa-google"></i>
                                <span style={{padding:"4%", float:"left"}}>Login with Google</span>
                                </button>
                        )}
                        buttonText="Login"
                        onSuccess={responseGoogle}
                        onFailure={responseErrorGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                    {/* <div className="social-link facebook center-align">
                        <NavLink to="/#" style={{display:"flex",justifyContent:"space-around"}}><i className="fa fa-facebook fa-2x"></i><span>Login with Facebook</span></NavLink>
                    </div> */}
                    {/* <div className="social-link twitter center-align">
                        <NavLink className="" to="/#"><i className="fa fa-twitter fa-2x"></i><span>Login with Twitter</span></NavLink>
                    </div> */}
                </div>
            </div>
            <div className="col s12 m3 l4"></div>
        </div>
    )
}