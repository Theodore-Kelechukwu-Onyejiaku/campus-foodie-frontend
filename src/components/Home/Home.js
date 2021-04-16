import React from "react";
import FoodList from "../Food/FoodList"

export default function Home({ dish }) {
    if (dish.isLoading) {
        return (<div className="center-align"><div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue-only">
                <div className="circle-clipper left">
                    <div className="circle"></div>
                </div>
                <div className="gap-patch">
                    <div className="circle"></div>
                </div>
                <div className="circle-clipper right">
                    <div className="circle"></div>
                </div>
            </div>
        </div>
        </div>)
    }
    if(dish.dishes !== null){
        return (<div>
                    <h4 className="center-align" style={{ fontFamily: "'Tangerine', cursive" }}>Welcome to Campus-foodie</h4>
                    < FoodList dishes={dish.dishes}/>
                </div>)
    }
    else{
        return (<div>{dish.errorMessage}</div>)
    }
    
}
