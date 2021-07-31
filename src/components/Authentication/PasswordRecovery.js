import React, { useState } from "react";
import M from 'materialize-css/dist/js/materialize.min.js'
import {baseUrl} from "../../shared/baseUrl";



const PasswordRecovery = () => {
    const [emailValue, setEmailValue] = useState("");
    const [invalidEmail, setInvalidEmail] = useState("");
    const [noEmailInput, setNoEmailInput] = useState("");
    const [emailError, setEmailError] = useState("");
    const [emailSuccess, setEmailSuccess] = useState("");
    const [isSending, setIsSending] = useState(false)

    const handleEmailInput = (e) => {
        setEmailSuccess("");
        setEmailError("");
        setNoEmailInput("");
        setInvalidEmail("");
        setEmailValue(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        setEmailSuccess("");
        setEmailError("");
        setNoEmailInput("");
        setInvalidEmail("");
        let isEmailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailValue);
        if (!isEmailValid) {
            setInvalidEmail("Please enter email address");
            M.toast({ html: "Please enter email address", classes: "red white-text" });
            setIsSending(false);

            return;
        }
        if(emailValue === ""){
            setInvalidEmail("Please enter a valid email address");
            M.toast({ html: "Please enter all fields", classes: "red white-text" });
            setIsSending(false);

            return;
        }

        fetch(baseUrl +"api/auth/password-reset/"+emailValue)
        .then(response =>{
            return response.json();
        })
        .then(result =>{
            console.log(result)
            if(result.status === "fail"){
                setEmailError(result.message);
                M.toast({ html: result.message, classes: "red white-text" });
                setIsSending(false);
            }
            else{
                setEmailSuccess(result.message)
                setIsSending(false);
            }
        })
        .catch(error=>{
            M.toast({ html: error.message, classes: "red white-text" });
            setEmailError(error.message);
            setIsSending(false);
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m3">

                </div>
                <div className="col s12 m6">
                    <form onSubmit={handleFormSubmit}>
                        <h4>Password Recovery</h4>
                        <h6 className="red-text">{emailError}</h6>
                        <h6 className="green-text">{emailSuccess}</h6>
                        <div className="input-field col s12">
                            <input id="icon_prefix" type="text" value={emailValue} className="validate" onChange={(e) => { handleEmailInput(e) }} />
                            <label htmlFor="icon_prefix">Enter Your email</label>
                            {invalidEmail ? <span className="red-text">Please enter a valid email address</span> : <span></span>}
                            <br />
                            {noEmailInput ? <span className="red-text">Please fill this field</span> : <span></span>}
                        </div>
                        {isSending ? 
                            <button type="submit" disabled className="btn">Sending <i className="fa fa-spinner fa-spin"></i></button>
                            :
                            <button type="submit" className="btn">Proceed</button>
                        }
                        
                    </form>

                </div>

                <div className="col s6 m3">

                </div>
            </div>
        </div>
    )
}

export default PasswordRecovery;