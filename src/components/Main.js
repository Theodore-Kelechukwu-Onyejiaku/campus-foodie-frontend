import React  from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import CartList from "./Cart/CartList";
import Home from "./Home/Home";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Signup from "./Authentication/Signup";
import Login from "./Authentication/Login";
import Earn from "./Earn/Earn";
import About from "./Pages/About";
import AddProduct from "./Admin/AddProduct"

const Main  = () =>{
    return (
        <BrowserRouter>
            <Header/>
                <div className="container">
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/cart-list" component={CartList} exact/>
                    <Route path="/signup" component={Signup} exact/>
                    <Route path="/login" component={Login} exact/>
                    <Route path="/earn" component={Earn} />
                    <Route path="/about" component={About} />
                    <Route path="/add-product" component={AddProduct} />
                    <Redirect to="/" />
                </Switch>
                </div>
            <Footer/>
        </BrowserRouter>
    )
}

export default Main;