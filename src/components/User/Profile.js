import React from 'react';

const Profile = ({auth})=>{
    return(
        <div>
            Username: {auth.user.username}
            <br/>
            Email: {auth.user.email}
        </div>            
    )
}

export default Profile;