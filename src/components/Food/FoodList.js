import React, { useState } from "react";
import { Fade, Stagger } from "react-animation-components";
import naira from "../../images/naira.png"

import Filter from "../Layout/Filter"

export default function FoodList({ dishes, addItem }) {

    const [dishList, setDishList] = useState(dishes);
    const [noResult, setNoResult] = useState("");

    const filteration = (e) => {

        let filter = []
        for (let eachDish of dishes) {
            for (let eachCategory of eachDish.categories) {
                if (eachCategory === e.target.value) {
                    filter.push(eachDish);
                }
            }
        }
        if (filter.length) {
            setNoResult("");
            setDishList(filter);
        } else {
            setNoResult("No Result Found!");
            setDishList([]);
        }
    }

    const unCheckRadios = () => {
        let radios = document.forms["filter"].elements.filter;
        for (let i = 0; i < radios.length; i++) {
            radios[i].checked = false;
        }

    }
    const clearFilteration = () => {
        setNoResult("");
        setDishList(dishes)
        unCheckRadios()
    }
    return (
        <div className="row">
            <div className="col s12 m8">
                
                <Stagger in>
                    {dishList && dishList.map((dish, index) =>
                        <Fade key={index} in="true">
                            <div className="col s12 m6 l4" key={dish._id} height="300px">
                                <div className="card">
                                    <div className="card-image waves-effect waves-block waves-light">
                                        <img className="activator" src={dish.dishUrl} alt="dish" />
                                    </div>
                                    <div className="card-body">
                                        <span className="card-title activator grey-text text-darken-4" style={{ fontFamily: "'Tangerine', cursive", color: "white" }}>{dish.name}{" "}<img src={naira} alt="currency" />{dish.price}<i className="material-icons right">more_vert</i></span>
                                        <br />
                                        <button className='btn pulse' onClick={() => { addItem(dish) }}><i className="material-icons left">add_shopping_cart</i>Add</button>
                                        <hr />
                                        <br />
                                        {dish.categories.map((cart, index) =>
                                            <div key={index} className="chip" style={{ fontFamily: "'Tangerine', cursive" }}>{cart}</div>
                                        )}
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
                <div className="red-text center-align" style={{ position: "fixed", left: "20%" }}>{noResult}</div>
            </div>
            <div className="hide-on-small-only">
                <Filter clearFilteration={clearFilteration} filteration={filteration} />
            </div>
        </div>
    )
}