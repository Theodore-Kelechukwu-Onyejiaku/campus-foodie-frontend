import React,{useState} from "react"
import { Fade, Stagger } from "react-animation-components";
import naira from "../../images/naira.png";

import Checkout from "../Layout/Modals/CheckoutModal";


export default function Cart({ cart, increaseItemInCart, decreaseItemInCart, deleteItemFromCart, user }) {

    const [isModalOpen , setIsModalOpen] = useState(false)
    
    const openModal = () => {
        setIsModalOpen(!isModalOpen);
    }
    const closeModal = ()=>{
        setIsModalOpen(!isModalOpen);
    }


    const GetTotalCart = ({cart}) =>{
        let sum = 0;
        cart.forEach(item =>{
            sum = sum + (Number(item.price) * Number(item.quantity))
        })
        return (
            <span>Total: <img src={naira} alt="currency"/>{sum}</span>
        )
    }
    return (
        <div>
            {
                isModalOpen ? <Checkout cartItems={cart} closeModal={closeModal} openModal={openModal} user={user}/>
                :
                <div></div>
            }
            
            {cart.length ?
                <div className="container row">
                    <div className="col s12 m8">
                        <Stagger in>
                            {cart && cart.map((cart, index) =>
                                <Fade key={index} in>
                                    <div className="s12 m12" key={cart._id}>
                                        <div className="card-panel grey lighten-5 z-depth-1">
                                            <div className="row valign-wrapper">
                                                <div className="col s6">
                                                    <img src={cart.dishUrl} alt="dish" className="responsive-img circle" />
                                                </div>
                                                <div className="col s6">
                                                    <div className="left"><h5 style={{ fontFamily: "'Tangerine', cursive" }}>{cart.name}</h5></div>
                                                    <div className="right"><h5 style={{ fontFamily: "'Tangerine', cursive" }}><img src={naira} alt="currency"/>{cart.price}</h5></div>
                                                    <br />
                                                    <p className="black-text" style={{ clear: "both" }}>{cart.description}</p>
                                                    <hr />
                                                    <div className="">
                                                        <button className="btn"><i className="material-icons" onClick={() => { increaseItemInCart(cart) }}>add</i></button>
                                                        <button className="btn"><i className="material-icons" onClick={() => { decreaseItemInCart(cart) }}>remove</i></button>
                                                    </div>
                                                    <br/>
                                                    <div className="">
                                                        <button className="btn btn-waves quantity"><i className="material-icons left">shopping_cart</i>{cart.quantity}</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />
                                            {cart.categories.map((cart, index) =>
                                                <div key={index} className="chip" style={{ fontFamily: "'Tangerine', cursive", fontSize: "200%" }}>{cart}</div>
                                            )}
                                            <hr />
                                            <div className="delete" style={{ textAlign: "center" }}><button onClick={() => { deleteItemFromCart(cart) }} className="btn btn-waves btn-red waves-effect waves-block waves-light"><i className="material-icons left">delete</i>Delete</button></div>
                                        </div>
                                    </div>
                                </Fade>
                            )}
                        </Stagger>
                    </div>
                    <div className="col s12 m4">
                        <GetTotalCart cart={cart}/>
                        <p></p>
                        <button className="btn" onClick={()=>{openModal()}}>
                            Checkout<i className="material-icons right">shopping_cart</i>
                        </button>
                    </div>
                </div>
                : <div>No Cart Item!</div>

            }


        </div>
    )
}