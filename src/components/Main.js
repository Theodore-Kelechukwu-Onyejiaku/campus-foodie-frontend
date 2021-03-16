import React  from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import CartList from "./Cart/CartList";
import Home from "./Home/Home";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Signup from "./Authentication/Signup";
import Login from "./Authentication/Login";

const Main  = () =>{
    return (
        <BrowserRouter>
            <Header/>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/cart-list" component={CartList} exact/>
                    <Route path="/signup" component={Signup} exact/>
                    <Route path="/login" component={Login} exact/>
                    <Redirect to="/" />
                </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default Main;