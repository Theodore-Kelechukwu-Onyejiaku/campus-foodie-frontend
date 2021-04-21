import React from "react";
import {Fade, Stagger} from "react-animation-components";

export default function FoodList({ dishes, addItem }) {
    return (
        <div className="row">
             <Stagger in>
            {dishes && dishes.map((dish, index) =>
                <Fade  key ={index} in>
                <div className="col s12 m6 l4" key={dish._id} height="300px">
                    <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img className="activator" src={dish.dishUrl} alt="dish" />
                        </div>
                        <div className="card-body">
                            <span className="card-title activator grey-text text-darken-4" style={{ fontFamily: "'Tangerine', cursive" }}>{dish.name}{" "}₦{dish.price}<i className="material-icons right">more_vert</i></span>
                            <br/>
                            <button className='btn pulse' onClick={()=>{addItem(dish)}}>Add to Cart</button>
                            <hr/>
                            <br/>
                            {dish.categories.map((cart, index) =>
                                <div key={index} className="chip" style={{ fontFamily: "'Tangerine', cursive" }}>{cart}</div>
                            )}
                        </div>
                        <div className="card-reveal">
                            <span className="card-title grey-text text-darken-4" style={{ fontFamily: "'Tangerine', cursive" }}>{dish.name}<i className="material-icons right">close</i></span>
                            <p>{dish.description}</p>
                            <hr/>
                            {dish.categories.map((cat, index) =>
                                <div key={index} className="chip" style={{ fontFamily: "'Tangerine', cursive" }}>{cat}</div>
                            )}
                        </div>
                    </div>
                </div>
                </Fade>
            )}
            {!dishes && <div>Nothing to display at the moment!</div>}
            </Stagger>
        </div>
    )
}