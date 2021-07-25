import React from "react";

const AccountActivation = ({email, closeModal}) => {
    
    return (
        <div className="my-modal">
            <div className="delete-modal">
                <div class="modal-header">
                    <span class="close" onClick={()=>{closeModal()}}>&times;</span>
                    <h4 className="modal-success">Account Activation</h4>
                </div>
                <p>Please check your email to activate your account. {email}</p>
                <div className="modal-confirmation">
                    <p>
                        <button onClick={()=>{closeModal()}} className="btn">Ok</button>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default AccountActivation;