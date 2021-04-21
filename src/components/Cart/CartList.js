import React from "react"
import { Fade, Stagger } from "react-animation-components";

export default function Cart({ cart, increaseItemInCart, decreaseItemInCart, deleteItemFromCart }) {
    return (
        <div className="">
            {cart.length ?
                <div className="row">
                    <div className="col s12 m8">
                        <Stagger in>
                            {cart && cart.map((cart, index) =>
                                <Fade key={index} in>
                                    <div className="s12 m12" key={cart._id}>
                                        <div className="card-panel grey lighten-5 z-depth-1">
                                            <div className="row valign-wrapper">
                                                <div className="col s6">
                                                    <img src={cart.dishUrl} alt="dish" className="responsive-img" />
                                                </div>
                                                <div className="col s10">
                                                    <div className="left"><h5 style={{ fontFamily: "'Tangerine', cursive" }}>{cart.name}</h5></div>
                                                    <div className="right"><h5 style={{ fontFamily: "'Tangerine', cursive" }}>₦{cart.price}</h5></div>
                                                    <br />
                                                    <p className="black-text" style={{ clear: "both" }}>{cart.description}</p>
                                                    <hr />
                                                    <div className="left">
                                                        <button className="btn"><i className="material-icons" onClick={() => { decreaseItemInCart(cart) }}>remove</i></button>
                                                        <button className="btn"><i className="material-icons" onClick={() => { increaseItemInCart(cart) }}>add</i></button>
                                                    </div>
                                                    <div className="right">
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
                    <div className="col s12 m2">
                        Total = <span></span>
                    </div>
                </div>
                : <div>No Cart Item!</div>

            }


        </div>
    )
}