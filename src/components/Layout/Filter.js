import React from "react"

const Filter = ({ clearFilteration, filteration, search, onInputSearchKey, searchKey, clearSearchKey}) => {
    return (
        <div className="col s12 m4" style={{ position: "fixed", right: "0%",top:"50px", height: "1000px", overflow:"scroll", zIndex: 1, backgroundColor:"white"}}>
            <nav>
                <div class="nav-wrapper">
                {/* <form> */}
                    <div class="input-field">
                    <input id="search" type="search" required onChange={(e)=>{onInputSearchKey(e)}} value={searchKey}/>
                    <label class="label-icon" onClick={()=>{search()}} for="search" style={{cursor:"pointer"}}><i class="material-icons">search</i></label>
                    <i class="material-icons" onClick={()=> {clearSearchKey()}}>close</i>
                    </div>
                {/* </form> */}
                </div>
            </nav>
            <h5 style={{ fontFamily: "'Tangerine', cursive", display: "flex" }}>
                <button className="btn  waves-light" style={{ marginRight: "10px" }}>Filter <i className="material-icons">filter_list</i></button>
                <button onClick={() => { clearFilteration() }} className="btn  waves-light red">Clear Filter<i className="material-icons left">clear</i></button>
            </h5>
            <div className="row">
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
                        <h6 style={{ fontFamily: "serif" }}>Local Dishes</h6>
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
            </div>
        </div>
    )
}

export default Filter;