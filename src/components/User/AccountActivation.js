import React,{usestate} from 'react';
import { NavLink } from 'react-router-dom';
import AccountActivationModal from "../Layout/Modals/AccountActivationModal"

const AccountActivation = ({auth})=>{
    
    console.log(auth);
    const [isModalOpen , setIsModalOpen] = usestate(true);
    
    const closeModal = ()=>{
        setIsModalOpen(!isModalOpen);
    }

    return(
        <div>
            {isModalOpen ? <AccountActivationModal closeModal={closeModal} email={auth.user.email}/> : <div></div>}
            <NavLink to="/" className="btn-flat"><i className="fa fa-back"></i>Back</NavLink>
        </div>            
    )
}

export default AccountActivation;