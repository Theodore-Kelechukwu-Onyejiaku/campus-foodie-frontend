import React, { useEffect, useState } from "react";
import { baseUrl } from "../../shared/baseUrl";
import AdminTools from "../Layout/AdminTools"



const Display = ({user, title}) =>{
    switch(title){
        case "profile":
            return <Profile details={user}/>
         
        case "orders":
            return <Orders orders={user}/>

        case "account":
            return <Account />
        default:
            return <div></div>
    }
}

const Profile = ({details}) =>{
    return(
        <div className="offset-m2 l6 offset-l3">
        <div >
          <div className="row valign-wrapper">
            <div className="col s2">
              {
                  details.picture ? <img src={details.picture} alt="profile-pic" className="circle responsive-img"/>
                  : <i className="fa fa-user fa-2x"></i>
              }

            </div>
            <div className="col s10 ">
              {details.username}
            </div>
          </div>
          <div className="row">
              <div className="col s12 m12 l12">
                    <p className="black-text">
                        <span className="green-text">Email:</span> {details.email || "none"}
                    </p>
                    <p>
                        <span className="green-text">Username:</span> {details.fullname || "none"}
                    </p>
                    <p>
                        <span className="green-text">Mobile Number:</span> {details.phone || "none"}
                    </p>
                    <p>
                        <span className="green-text">Address:</span> {details.address || "none"}
                    </p>

              </div>
            </div>
        </div>
      </div>
    )
}

const Orders = ({orders}) =>{
    return(
        <div>
            <table className="responsive-table highlight">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {orders.length ? orders.map(order =>
                        <tr>
                            
                        </tr>
                    )
                    :
                    <tr><td>No orders yet!</td></tr>
                }
                </tbody>
            </table>
        </div>
    )
}

const Account = () =>{
    return(
        <div>Account page!</div>
    )
}

const Dropdown = ({titleSetter}) =>{
    const [isOpen] = useState(true)
    // const hideOrShow = () =>{
    //         setIsOpen(!isOpen)
    // }
    return(
        <>
            {/* <button className="btn" onClick={()=>{hideOrShow()}}>
                More { !isOpen ? <i className="fa fa-caret-down"></i>    
                    :
                        <i className="fa fa-caret-up"></i>
                    }
            </button> */}
            {!isOpen ? <div></div>
               : <div>
                    <ul className="collection highlight">
                        <li className="collection-item list-item"><button className="btn-flat" onClick={()=>{titleSetter("profile")}}>Profile</button></li>
                        <li className="collection-item list-item"><button className="btn-flat" onClick={()=>{titleSetter("orders")}}>Orders</button></li>
                        <li className="collection-item list-item"><button className="btn-flat" onClick={()=>{titleSetter("account")}}>Account</button></li>
                    </ul>
                </div>
            }
            
        </> 
    )
}

const SingleUser = () =>{
    const [user, setUser] = useState({})
    const [title, setTitle ] = useState("profile")
    const titleSetter = (title)=>{
        setTitle(title)
        
    }
    useEffect(()=>{
            const token = localStorage.getItem("token");
            const id = window.location.pathname.split("/")[window.location.pathname.split("/").length - 1];
            console.log(id);
            fetch(baseUrl + "api/admin/users/"+id, {
                headers: {
                    'Accept': 'application/json',
                    "Content-type": "application/json",
                    'Authorization': 'Bearer ' + token,
                }
            })
                .then(response => {
                    if (response.ok) return response.json();
                    else {
                        const error = new Error()
                        error.message = "Something went wrong!";
                        throw error;
                    }
                })
                .then(async (result) => {
                    if(result.status === "fail"){
                      return  console.log(result.message)
                    }
                    return setUser(result.user)
                })
                .catch(error => {
                    console.log(error.message)
                })
    }, [])

    
    
    return(
        <div className="container">
            <AdminTools/>
            <div className="row" style={{margin:"3% auto"}}>
                <div className="col s12 m4">
                    <Dropdown titleSetter={titleSetter}/>
                </div>
                {title.toLocaleUpperCase()}
                <div className="col s12 m8" style={{margin:"10% auto"}}>
                    
                    <Display user={user} title={title}/>
                </div>
            </div>
        </div>
    )
}

export default SingleUser;