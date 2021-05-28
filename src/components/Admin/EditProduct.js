import React, { useEffect, useState } from "react";
// import { DISH_LOADING } from "../../redux/ActionTypes";
import { baseUrl } from "../../shared/baseUrl";


export default function EditProduct(){
    // const [success, setSuccess] = useState("");
    // const [error, setError] = useState('');
    const [dish, setDish] = useState({});
    const [formData, setFormData] = useState({ dishName: "", price: "", description: "" });
    
    
    const handleInput = (e, name) => {
        let value = e.target.value;
        setFormData(Object.assign({}, formData, { [name]: value }));
    }



    useEffect(()=>{
        const token = localStorage.getItem("token");
        const id = window.location.pathname.split("/")[window.location.pathname.split("/").length - 2];

        console.log(id);
        fetch(baseUrl + "api/admin/products/"+id, {
            method: "UPDATE",
            body: JSON.parse(),
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
                return setDish(result.product)
            })
            .catch(error => {
                console.log(error.message)
                // setError(error.message)
            })
}, [])
    return (
        <div className="container row">
            <div className="col s12 m4"></div>
            <div className="col s12 m4">
                <form action=""  method="POST">
                    <h4 className="center-align" style={{ fontFamily: "'Tangerine', cursive" }}>Edit product!</h4>
                    <div className="row">
                        <div className="input-field col s6">
                            <i className="material-icons prefix">₦</i>
                            <input id="icon_prefix" type="number" className="validate" value={formData.price} onChange={(e, name = "price") => { handleInput(e, name) }}/>
                            
                        </div>
                        <div className="input-field col s6">
                            <i className="material-icons prefix">restaurant</i>
                            <input id="icon_telephone" type="text" className="validate" value={formData.dishName}  onChange={(e, name = "dishName") => { handleInput(e, name) }}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea"  value={formData.description} onChange={(e, name = "description") => { handleInput(e, name) }}></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="categories" className="materialize-textarea" 
                             onChange={(e, name = "categories") => { handleInput(e, name) }}  value={formData.categories}></textarea>
                        </div>
                    </div>

                    
                    <div className="center-align">
                        <button type="submit" className="btn">Update</button>
                    </div>
                </form>
                <br />
            </div>
            <div className="col s12 m4"></div>
        </div>
    )
}