import React from "react";

const FilterOptions = ({filteration}) =>{
    return (
        <form name="filter">
                    {/* MEAL TIME CATEGORY START */}
                    <div className="col s4 m6 l6">

                        <strong style={{ fontFamily: "serif" }}>Meal Time</strong>
                        <p>
                            <label>
                                <input name="filter" type="radio" value="breakfast" onChange={(e) => { filteration(e) }} />
                                <span>breakfast</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="filter" value="lunch" type="radio" onChange={(e) => { filteration(e) }} />
                                <span>Lunch</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="filter" value="dinner" type="radio" onChange={(e) => { filteration(e) }} />
                                <span>Dinner</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="filter" type="radio" value="soup" onChange={(e) => { filteration(e) }} />
                                <span>Soup</span>
                            </label>
                        </p>
                    </div>

                    {/* MEAL TIME CATEGORY END */}

                    {/* SOUP CATEGORY START */}
                    <div className="col s6 m6 l6">
                        <strong style={{ fontFamily: "serif" }}>Local Dishes</strong>
                        <p>
                            <label>
                                <input name="filter" type="radio" value="soup" onChange={(e) => { filteration(e) }} />
                                <span>Soup</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="filter" value="rice" type="radio" onChange={(e) => { filteration(e) }} />
                                <span>Rice</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="filter" value="beans" type="radio" onChange={(e) => { filteration(e) }} />
                                <span>Beans</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="filter" value="yam" type="radio" onChange={(e) => { filteration(e) }} />
                                <span>Yam</span>
                            </label>
                        </p>
                    </div>
                    {/* SOUP CATEGORY ENDS */}

                    {/* MEAT START */}
                    <div className="col s6 m6 l6">
                        <h6 style={{ fontFamily: "serif" }}>Meat</h6>
                        <p>
                            <label>
                                <input name="filter" type="radio" value="soup" onChange={(e) => { filteration(e) }} />
                                <span>Beef</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="filter" value="rice" type="radio" onChange={(e) => { filteration(e) }} />
                                <span>Hot-dog</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="filter" value="beans" type="radio" onChange={(e) => { filteration(e) }} />
                                <span>Suya</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="filter" value="yam" type="radio" onChange={(e) => { filteration(e) }} />
                                <span>Beef</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="filter" value="yam" type="radio" onChange={(e) => { filteration(e) }} />
                                <span>Chicken</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="filter" value="yam" type="radio" onChange={(e) => { filteration(e) }} />
                                <span>Turkey</span>
                            </label>
                        </p>
                    </div>
                    {/* MEAT ENDS */}
                    
                    {/* OTHERS START*/}
                    <div className="col s6 m6 l6">
                        <h6 style={{ fontFamily: "serif" }}>Others</h6>
                        <p>
                            <label>
                                <input name="filter" type="radio" value="soup" onChange={(e) => { filteration(e) }} />
                                <span>Snacks</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="filter" value="rice" type="radio" onChange={(e) => { filteration(e) }} />
                                <span>Inter-continent</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="filter" value="beans" type="radio" onChange={(e) => { filteration(e) }} />
                                <span>Ice-cream</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="filter" value="yam" type="radio" onChange={(e) => { filteration(e) }} />
                                <span>Pizza</span>
                            </label>
                        </p>
                    </div>
                    {/* OTHERS END */}


                </form>
    )
}


export default FilterOptions;