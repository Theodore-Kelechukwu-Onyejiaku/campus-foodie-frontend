import React from 'react';

const AccountActivation = ({auth})=>{
    return(
        <div>
            Please check your email 
            <br/>
            Email: {auth.user.email}
            <br/>
            to verify your account
        </div>            
    )
}

export default AccountActivation;