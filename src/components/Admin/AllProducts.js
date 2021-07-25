import React, { useEffect, useState } from "react";
import { Fade, Stagger } from "react-animation-components";
import { NavLink } from "react-router-dom";
import naira from "../../images/naira.png";
import { baseUrl } from "../../shared/baseUrl";
import DeleteModal from "../Layout/Modals/DeleteModal";

import AdminTools from "../Layout/AdminTools";
import AdminToolFix from "../Layout/AdminToolFix";

import M from 'materialize-css/dist/js/materialize.min.js';


const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [answer, setAnswer] = useState(false);
    const [productId, setProductId] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const token = localStorage.getItem("token");

    useEffect(() => {
        fetch(baseUrl + "api/admin/products",
            {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    "Content-type": "application/json",
                    'Authorization': 'Bearer ' + token,
                }
            })
            .then(response => {
                console.log(response)
                if (response.ok) {
                    return response.json()
                }
            })
            .then(result => {
                console.log(result);
                setProducts(result.products);
            })
            .catch(error => {
                M.toast({ html: "Something went wrong!", classes: "red white-text" })
                return
            })

        window.addEventListener('load', function () {
            var elems = document.querySelectorAll('.chips');
            M.Chips.init(elems);
        })
// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const closeModal = () => {
        setIsModalOpen(!isModalOpen);
        console.log("close modal")
    }
    const yesDelete = () => {
        setAnswer(false);
        setIsDeleting(!isDeleting);
        console.log(answer, "productId " + productId)
        console.log(answer, "Product id " + productId);
        fetch(baseUrl + "api/admin/products/" + productId, {
            method: "DELETE",
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
            

                M.toast({ html: "Product deleted successfully!", classes: "green white-text" })
                setProducts(products.filter(element =>
                    element._id !== productId
                ))
                closeModal();
                setIsDeleting(!isDeleting);
            })
            .catch(error => {
                M.toast({ html: error.message, classes: "red white-text" })
            })
    }
    const noDelete = () => {
        setAnswer(true);
        setIsModalOpen(!isModalOpen);
        
    }

    const deleteProduct = (id) => {
        setIsModalOpen(!isModalOpen);
        setProductId(id);
    }

    return (
        <div className="row container">
            <AdminTools />
            <h4>All Products <small>{products.length}</small></h4>
            {
                isModalOpen ? <DeleteModal answer={answer} yesDelete={yesDelete} noDelete={noDelete} closeModal={closeModal} isDeleting={isDeleting}/>
                    : <div></div>
            }

            <div className="row">
                <div className="col s12 m12">
                {products.length ?
                    <Stagger in>
                        {products.map((dish, index) =>
                            <Fade key={index} in="true">
                                <div className="col s12 m6 l4" key={dish._id} height="300px">
                                    <div className="card">
                                        <div className="card-image waves-block waves-light">
                                            <img className="activator" src={dish.dishUrl} alt="dish" />
                                        </div>
                                        <div className="card-body">
                                            <span className="card-title activator grey-text text-darken-4" style={{ fontFamily: "'Tangerine', cursive", color: "white" }}>{dish.name}{" "}<img src={naira} alt="currency" />{dish.price}<i className="material-icons right">more_vert</i></span>
                                            <br />

                                            <br />
                                            {dish.categories.map((cart, index) =>
                                                <div key={index} className="chip" style={{ fontFamily: "'Tangerine', cursive" }}>{cart}</div>
                                            )}
                                            <br />
                                            <NavLink to={"/admin/products/" + dish._id + "/edit"} className="btn"><i className="fa fa-pencil"></i></NavLink>
                                            {" "}<button onClick={() => { deleteProduct(dish._id) }} className="btn red"><i className="fa fa-trash"></i></button>
                                        </div>
                                        <div className="card-reveal">
                                            <span className="card-title grey-text text-darken-4" style={{ fontFamily: "'Tangerine', cursive", textTransform: "uppercase" }}>{dish.name}<i className="material-icons right">close</i></span>
                                            <p>{dish.description}</p>
                                            <hr />
                                            {dish.categories.map((cat, index) =>
                                                <div key={index} className="chip" style={{ fontFamily: "'Tangerine', cursive" }}>{cat}</div>

                                            )}
                                        </div>

                                    </div>
                                </div>
                            </Fade>
                        )
                    }
                    </Stagger>
                                            
                    :
                        <div>
                            <i className="fa fa-spinner fa-spin"></i>
                        </div>
                    }
                        
                </div>

            </div>
            <AdminToolFix />
        </div>
    )
}

export default AllProducts;