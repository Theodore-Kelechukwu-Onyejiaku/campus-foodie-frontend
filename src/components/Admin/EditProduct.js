import React, { useEffect, useState } from "react";
// import { DISH_LOADING } from "../../redux/ActionTypes";
import { baseUrl } from "../../shared/baseUrl";
import M from 'materialize-css/dist/js/materialize.min.js'

import AdminTools from "../Layout/AdminTools"


export default function EditProduct(){
    // const [success, setSuccess] = useState("");
    // const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    
    const [dish, setDish] = useState({ name: "", price: "", description: "", categories: "" });
    
    
    const handleInput = (e, name) => {
        let value = e.target.value;
        console.log(dish)
        setDish(Object.assign({}, dish, {[name]: value}));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsLoading(!isLoading);
        console.log("hello")
        const token = localStorage.getItem("token");
        const id = window.location.pathname.split("/")[window.location.pathname.split("/").length - 2];

        fetch(baseUrl + "api/admin/products/"+id, {
            method: "PUT",
            body: JSON.stringify(dish),
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
                setIsLoading(isLoading);
                M.toast({ html: "Product updated successfully!", classes:"green white-text" })
            })
            .catch(error => {
                console.log(error.message)
                M.toast({ html: error.message, classes:"red white-text" })
            })
    }
    
    useEffect(()=>{
        const token = localStorage.getItem("token");
        const id = window.location.pathname.split("/")[window.location.pathname.split("/").length - 2];
        window.addEventListener('load', function () {
            var elems = document.querySelectorAll('.chips');
            M.Chips.init(elems);
        });

        console.log(id);
        fetch(baseUrl + "api/admin/products/"+id, {
            headers: {
                'Accept': 'application/json',
                "Content-type": "application/json",
                'Authorization': 'Bearer ' + token
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
                setDish(Object.assign({}, dish, result.product))
                console.log("The products:", result.product.description)
                return 
            })
            .catch(error => {
                console.log(error.message)
                // setError(error.message)
            })
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
    return (
        <div className="container row">
            <AdminTools/>
            <div className="col s12 m3 l4"></div>
            <div className="col s12 m6 l4">
                <form action=""  method="POST" onSubmit={(e)=>{handleSubmit(e)}}>
                    <h4 className="center-align" style={{ fontFamily: "'Tangerine', cursive" }}>Edit product!</h4>
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">₦</i>
                            <input id="icon_prefix" type="number" className="validate" placeholder="price" value={dish.price} onChange={(e, name = "price") => { handleInput(e, name) }}/>
                            
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">restaurant</i>
                            <input id="icon_telephone" type="text" className="validate" placeholder="name of dish" value={dish.name}  onChange={(e, name = "name") => { handleInput(e, name) }}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea" placeholder="dish description"  value={dish.description} onChange={(e, name = "description") => { handleInput(e, name) }}></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="categories" className="materialize-textarea" 
                             onChange={(e, name = "categories") => { handleInput(e, name) }}  value={dish.categories} placeholder="categories like breakfast,inter-continental"></textarea>
                        </div>
                    </div>

                    
                    <div className="center-align">
                        {isLoading ? <button className="btn" disabled><i className="fa fa-spinner fa-spin"></i></button>
                           : <button type="submit" className="btn">Update</button>
                        }
                    </div>
                </form>
                <br />
            </div>
            <div className="col s12 m3 l4"></div>
        </div>
    )
}