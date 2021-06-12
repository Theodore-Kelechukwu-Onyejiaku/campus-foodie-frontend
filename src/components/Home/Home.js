import React from "react";
import FoodList from "../Food/FoodList"
import Loader from "../Layout/Loader"
import Slider from "../Layout/Slider"

export default function Home({ dish, addItem}) {
    return(
        <>
        <div> 
            <div className="row">
                <div className="col s12 m8 l8">
                    <Slider/>
                </div>
            </div>
            {dish.getDishLoading && <Loader/>}
            {(dish.dishes) ? 
                <div>
                    <FoodList addItem={addItem} dishes={dish.dishes}/>
                </div>
                :
                <div className="red-text">{dish.errorMess}</div>
            }
        </div>
        </>
    )
}