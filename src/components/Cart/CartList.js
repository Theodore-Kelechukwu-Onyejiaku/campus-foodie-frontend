import React from "react"

export default function Cart() {
    return (
        <div className="container">
            <p></p>
            <div className="row">
                <div className="col s12 m8">
                    <div class="card-panel grey lighten-5 z-depth-1">
                        <div class="row valign-wrapper">
                            <div class="col s6">
                                <img src="https://picsum.photos/100/100" alt="dish" class="circle responsive-img" />
                            </div>
                            <div class="col s10">
                                <h5>Dish Name</h5>
                                <span class="black-text">
                                    This is a square image. Add the "circle" class to it to make it appear circular.
                                </span>
                                <hr/>
                                <button className="btn"><i class="material-icons">add</i></button>
                                <button className="btn"><i class="material-icons">remove</i></button>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    Total = <span></span>
                </div>
            </div>
        </div>
    )
}