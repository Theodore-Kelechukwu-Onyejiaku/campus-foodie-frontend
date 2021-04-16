import React, { useEffect, useState }  from "react";
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import { connect } from "react-redux";
import {postDish, getAllDishes} from "../redux/ActionCreators";



import CartList from "./Cart/CartList";
import Home from "./Home/Home";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Signup from "./Authentication/Signup";
import Login from "./Authentication/Login";
import Earn from "./Earn/Earn";
import About from "./Pages/About";
import AddProduct from "./Admin/AddProduct";

const mapStateToProps = (state) => {
    return{
        dish: state.dish
    }
}

const mapDispatchToProps = (dispatch)=> ({
    postDish: (formData) => dispatch(postDish(formData)),
    getAllDishes: () => dispatch(getAllDishes())
})

const Main  = (props) =>{    
    useEffect(()=>{
        console.log("hi")
        props.getAllDishes();
    },[])
    
    return (
        <div>
            <Header/>
                <div className="container">
                <Switch>
                    <Route path="/" component={()=> <Home dish={props.dish}/>} exact/>
                    <Route path="/cart-list" component={CartList} exact/>
                    <Route path="/signup" component={Signup} exact/>
                    <Route path="/login" component={Login} exact/>
                    <Route path="/earn" component={Earn} />
                    <Route path="/about" component={About} />
                    <Route path="/add-product" component={()=> <AddProduct dish={props.dish} postDish={props.postDish}/>} />
                    <Redirect to="/" />
                </Switch>
                </div>
            <Footer/>
        </div>
    )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));