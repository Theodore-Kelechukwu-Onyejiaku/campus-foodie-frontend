import React from "react";

export default function FoodList() {
    return (
        <div className="row">
            <div className="col s12 m4">
                <div class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="https://picsum.photos/100/100" alt="dish"/>
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4" style={{fontFamily: "'Tangerine', cursive"}}>Food Name<i class="material-icons right">more_vert</i></span>
                        <button className='waves-effect waves-light btn'>Add to Cart</button>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4" style={{fontFamily: "'Tangerine', cursive"}}>Food Name<i class="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>
            </div>
            <div className="col s12 m4">
                <div class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="https://picsum.photos/100/100"  alt="dish"/>
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4" style={{fontFamily: "'Tangerine', cursive"}}>Food Name<i class="material-icons right">more_vert</i></span>
                        <button className='btn pulse'>Add to Cart</button>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">Food Name<i class="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>
            </div>
            <div className="col s12 m4">
                <div class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="https://picsum.photos/100/100" alt="dish"/>
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4" style={{fontFamily: "'Tangerine', cursive"}}>Food Name<i class="material-icons right">more_vert</i></span>
                        <button className='btn pulse'>Add to Cart</button>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4" style={{fontFamily: "'Tangerine', cursive"}}>Food Name<i class="material-icons right">close</i></span>
                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}