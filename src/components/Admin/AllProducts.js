import React from "react";
import { Fade, Stagger } from "react-animation-components";
import { NavLink } from "react-router-dom";
import naira from "../../images/naira.png"



const AllProducts = ({dishList}) =>{
    return(
        <div className="container">
            <h4>All Products <small>{dishList.dishes.length}</small></h4>
            <div className="row">
            <div className="col s12 m12">
            <Stagger in>
                    {dishList.dishes && dishList.dishes.map((dish, index) =>
                        <Fade key={index} in="true">
                            <div className="col s12 m6 l4" key={dish._id} height="300px">
                                <div className="card">
                                    <div className="card-image waves-effect waves-block waves-light">
                                        <img className="activator" src={dish.dishUrl} alt="dish" />
                                    </div>
                                    <div className="card-body">
                                        <span className="card-title activator grey-text text-darken-4" style={{ fontFamily: "'Tangerine', cursive", color: "white" }}>{dish.name}{" "}<img src={naira} alt="currency" />{dish.price}<i className="material-icons right">more_vert</i></span>
                                        <br />
                                        
                                        <br />
                                        {dish.categories.map((cart, index) =>
                                            <div key={index} className="chip" style={{ fontFamily: "'Tangerine', cursive" }}>{cart}</div>
                                        )}
                                        <br/>
                                        <NavLink to={"/admin/products/"+dish._id+"/edit"} className="btn"><i className="fa fa-pencil"></i></NavLink>
                                        {" "}<NavLink to="/dadf" className="btn red"><i className="fa fa-trash"></i></NavLink>
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
                    )}
                </Stagger>
            </div>
            
            </div>
        </div>
    )
}

export default AllProducts;