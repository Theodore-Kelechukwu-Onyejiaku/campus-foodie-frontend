import React from 'react';
import PleaseLogin from "../Layout/PleaseLogin";

const Profile = ({auth})=>{
    if(auth.user.email){
        return(
            <div>
                Email: {auth.user.email}
            </div>
        )
    }
    else{
        return(
            <PleaseLogin/>
        )
    }
}

export default Profile;