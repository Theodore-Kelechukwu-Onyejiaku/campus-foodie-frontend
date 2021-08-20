import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { baseUrl } from "../../shared/baseUrl";
// import AdminTools from "../Layout/AdminTools"
import M from 'materialize-css/dist/js/materialize.min.js'
import naira from "../../images/naira.png";




const Display = ({user, title}) =>{
    console.log("this is the user "+JSON.stringify(user))
    switch(title){
        case "profile":
            return <Profile details={user}/>
         
        case "orders":
            return <Orders user={user}/>

        case "account":
            return <Account />
        case "payments":
            return <Payments user={user}/>
        
        default:
            return <div></div>
    }
}

const Payments = ({user})=>{
    console.log("USEr" +user.user.email)
    const [payments, setPayements] = useState([]);
    const [paymentLoading, setPaymentLoading] = useState(true);
    useEffect(()=>{
        fetch(baseUrl + "api/payment/"+user.user._id)
        .then(response => response.json())
        .then(result =>{
            if(result.status === "fail"){
                M.toast({ html: result.message, classes:"red white-text" })
            }else{
                setPayements(result.payments)
                console.log(payments)
            }
            setPaymentLoading(false)
        })
        .catch(error=>{
            console.log(error.message)
            M.toast({ html: error.message, classes:"red white-text" })
            setPaymentLoading(false)
        })
// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return(
        <div>
            {paymentLoading && <i className="fa fa-spinner fa-spin"></i>}

            <h3>User payments</h3>
        </div>
    )    
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

const Orders = ({user}) =>{
    
    console.log(user);
    // const token = localStorage.getItem("token");

    const [ordersLoading, setOrdersLoading] = useState(true);
    const [userOrders, setOrders] = useState([]);

    const confirmOrder = ()=>{
        fetch(baseUrl + "api/order/customer-confirm/"+user.user._id)
        .then(response => response.json())
        .then(result =>{
            console.log(result);
            // if(result.status === "fail"){
            //     M.toast({ html: result.message, classes:"red white-text" })
            // }else{

            // }
        })
    }

    useEffect(()=>{
        fetch(baseUrl + "api/order/user-orders/"+user.user._id,)
        .then(response => response.json())
            .then(result =>{
            console.log(result)
            if(result.status === "fail"){
                // M.toast({ html: result.message, classes:"red white-text" })
            }else{
                // M.toast({ html: result.message, classes:"green white-text" })
                console.log(result.orders)
                setOrders(result.orders)
            }
            setOrdersLoading(false)
        })
        .catch(error=>{
            console.log(error)
            M.toast({ html: error.message, classes:"red white-text" })
            setOrdersLoading(false)
        })

// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return(
        <div>
            {ordersLoading && <i className="fa fa-spinner fa-spin"></i>}
            <table className="responsive-table highlight">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Map</th>
                        <th>Total Products</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {userOrders.length ? userOrders.map(order =>
                        <tr>
                            <td>{order.createdAt}</td>
                            <td>{order.amount}</td>
                            <td>{order.deliveryStatus}</td>
                            <td><span className="span-btn"><i className="fa fa-eye"></i></span></td>
                            <td>{order.products.length}</td>
                            <td>
                                <button className="btn" onClick={confirmOrder}><i className="fa fa-check"></i></button>
                                <button className="btn red"><i className="fa fa-close"></i></button>    
                            </td>
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
        <div>
            <h3>Account Balance: <img src={naira} alt="currency"/>0.00</h3>
            <Link to="/fund" className="red-text"><u>Want to fund account?</u></Link>
        </div>

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
                        <li className="collection-item list-item"><button className="btn-flat" onClick={()=>{titleSetter("payments")}}>Payments</button></li>
                    </ul>
                </div>
            }
            
        </> 
    )
}

const SingleUser = (user) =>{
    const [title, setTitle ] = useState("profile")
    const titleSetter = (title)=>{
        setTitle(title)
        
    }    
    
    return(
        <div className="container">
            {/* <AdminTools/> */}
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