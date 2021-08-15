import React, { useEffect } from "react";
import FoodList from "../Food/FoodList"
import Loader from "../Layout/Loader"
import Slider from "../Layout/Slider"
import Parallax from "../Layout/Parallax"
// import {baseUrl} from "../../shared/baseUrl";
// import M from 'materialize-css/dist/js/materialize.min.js'


export default function Home({ dish, addItem }) {
    useEffect(() => {
        console.log("home re-renders")
    }, [dish])
    return (
        <>
            <div>
                <div className="row">
                    <div className="col s12 m8 l8">
                        <Parallax />
                        <div className="center-align">
                            {/* <Link class="btn" to="#get">Get Started!</Link> */}
                            <p className="animate__animated animate__bounce">Welcome to Campus Foodie!</p>
                        </div>
                        <Slider />
                    </div>
                </div>
                {dish.getDishLoading && <Loader />}
                {(dish.dishes) ?
                    <div>
                        <FoodList addItem={addItem} dishes={dish.dishes} id="get"/>
                    </div>
                    :
                    <div className="red-text">{dish.errorMess}</div>
                }
            </div>
        </>
    )
}