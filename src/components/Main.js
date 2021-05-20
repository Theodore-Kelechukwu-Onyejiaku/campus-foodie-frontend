import React, { useEffect } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { TransitionGroup } from "react-transition-group";


import { postDish, getAllDishes } from "../redux/ActionCreators/dishActionCreator";
import { addItem, increaseItemInCart, decreaseItemInCart, deleteItemFromCart} from "../redux/ActionCreators/cartActionCreator"
import {signupGoogleError,signupGoogle,signupGoogleLoading,signupLocalPost, checkIsLoggedIn, logoutUser, loginLocalPost} from "../redux/ActionCreators/authActionCreator";

import CartList from "./Cart/CartList";
import Home from "./Home/Home";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import PleaseLogin from "./Layout/PleaseLogin"
import Signup from "./Authentication/Signup";
import Login from "./Authentication/Login";
import Earn from "./Earn/Earn";
import About from "./Pages/About";

import Profile from "./User/Profile"
import AccountActivation from "./User/AccountActivation"

import AddProduct from "./Admin/AddProduct";
import Dashboard from "./Admin/Dashboard";
import AllUsers from "./Admin/AllUsers";

const mapStateToProps = (state) => {
    return {
        dish: state.dish,
        cart: state.cart,
        auth: state.auth,
    }
}

const mapDispatchToProps = (dispatch) => ({
    loginLocalPost: (formData) => dispatch(loginLocalPost(formData)),
    checkIsLoggedIn : () => dispatch(checkIsLoggedIn()),
    logoutUser: () => dispatch(logoutUser()),
    signupGoogle : (userData, token, successMess) => dispatch(signupGoogle(userData, token, successMess)),
    signupLocalPost : (formData) => dispatch(signupLocalPost(formData)),
    signupGoogleError : (error) =>  dispatch(signupGoogleError(error)),
    signupGoogleLoading: () => dispatch(signupGoogleLoading()),
    postDish: (formData) => dispatch(postDish(formData)),
    getAllDishes: () => dispatch(getAllDishes()),
    addItem: (item) => dispatch(addItem(item)),
    increaseItemInCart: (item) => dispatch(increaseItemInCart(item)),
    decreaseItemInCart: (item) => dispatch(decreaseItemInCart(item)),
    deleteItemFromCart: (item) => dispatch(deleteItemFromCart(item))
})

const Main = (props) => {
    useEffect(() => {
        props.getAllDishes();
        props.checkIsLoggedIn();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <Header cartLength={props.cart.number} auth={props.auth} logoutUser={props.logoutUser}/>
            <TransitionGroup>
                {/* <CSSTransition key={props.location.key} classNames="page" timeout={300}> */}
                    <div >
                        <Switch>
                            <Route path="/" component={() => <Home dish={props.dish} addItem={props.addItem} />} exact />
                            <Route path="/cart-list" component={() => <CartList cart={props.cart.cart} increaseItemInCart={props.increaseItemInCart} 
                                                                                decreaseItemInCart={props.decreaseItemInCart} 
                                                                                deleteItemFromCart={props.deleteItemFromCart}
                                                                                />} exact />
                            <Route path="/signup" component={()=><Signup signupGoogleLoading={props.signupGoogleLoading} signupGoogle={props.signupGoogle} auth={props.auth} signupGoogleError={props.signupGoogleError} signupLocalPost={props.signupLocalPost}/>} exact/>
                            <Route path="/login" component={()=><Login signupGoogleLoading={props.signupGoogleLoading} signupGoogle={props.signupGoogle} auth={props.auth} signupGoogleError={props.signupGoogleError} signupLocalPost={props.signupLocalPost} loginLocalPost={props.loginLocalPost}/>} exact/>
                            <Route path="/earn" component={Earn} />
                            <Route path="/about" component={About} />
                            <Route path="/profile" component={()=> <Profile auth={props.auth}/>} />
                            <Route path="/account-activation" component={() => <AccountActivation auth={props.auth} />} />
                            
                            {/* FOR ADMIN */}
                            <Route path="/admin/dashboard" component={()=> props.auth.user.email ? <Dashboard />: <PleaseLogin/>} />
                            <Route path="/admin/users" component={()=> props.auth.user.email ? <AllUsers />: <PleaseLogin/>} />
                            <Route path="/admin/orders" component={()=> <div>Orders</div>}/>
                            <Route path="/admin/dishes" component={()=> <div>Dishes</div>}/>
                            <Route path="/admin/add-product" component={() =>props.auth.user.email ? <AddProduct dish={props.dish} postDish={props.postDish} />: <PleaseLogin/>} />
                            
                            <Redirect to="/" />
                        </Switch>
                    </div>
                {/* </CSSTransition> */}
            </TransitionGroup>
            <Footer />
        </div>
    )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));