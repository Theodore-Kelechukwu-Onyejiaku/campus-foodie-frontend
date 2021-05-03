import React from "react";
import FoodList from "../Food/FoodList"
import Loader from "../Layout/Loader"

export default function Home({ dish, addItem }) {
    return(
        <>
        <div>  
            <h4 className="center-align" style={{ fontFamily: "'Tangerine', cursive" }}>Welcome to Campus-foodie</h4>
            {dish.getDishLoading && <Loader/>}
            {(dish.dishes) ? 
                <div>
                    <FoodList addItem={addItem} dishes={dish.dishes}/>
                </div>
                :
                <div className="red white-text center-align errorMessage">{dish.errorMess}</div>
            }
        </div>
        </>
    )
}