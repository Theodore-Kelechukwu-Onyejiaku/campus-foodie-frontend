import React, { useState } from "react";
import { Fade, Stagger } from "react-animation-components";
import naira from "../../images/naira.png"

import Filter from "../Layout/Filter"
import FilterOptions from "../Layout/FilterOptions";

export default function FoodList({ dishes, addItem }) {

    const [dishList, setDishList] = useState(dishes);
    const [noResult, setNoResult] = useState("");
    const [searchKey, setSearchKey] = useState("");
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const filteration = (e) => {
        let filter = []
        
        dishes.forEach((eachDish, index, dishes)=>{
            eachDish.categories.forEach((eachCategory)=>{
                if(eachCategory === e.target.value){
                    filter.push(eachDish)
                }
            })
        })

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

    const onInputSearchKey = (e) =>{
            setSearchKey(e.target.value)
    }

    const search = () =>{
        unCheckRadios();
        setDishList([])
        let searchResult = []
        for (let eachDish of dishes) {
                if (eachDish.name === searchKey) {
                    searchResult.push(eachDish);
                }
        }
        if (searchResult.length) {
            setNoResult("");
            setDishList(searchResult);
        } else {
            setNoResult("No Result Found!");
            setDishList([]);
        }
    }

    // Search for word using Enter button
    const searchForWord = (e) =>{
        e.preventDefault();
        if(e.keyCode === 13){
            search();
        }
    }
    const clearSearchKey = () =>{
        setSearchKey("");
        setNoResult("");
        setDishList(dishes)
    }

    const toggleFilter = () =>{
        setIsFilterOpen(!isFilterOpen)
    }
    return (
        <div className="row">
            <div className="col s12 m8">
                {/* <form> */}
                <div className="hide-on-med-and-up">
                    <div className="input-field col s12">
                        {/* <input  id="search" type="search" required onChange={(e)=>{onInputSearchKey(e)}} value={searchKey} autoComplete="false"/>
                        <button onClick={()=>{search()}} style={{cursor:"pointer"}}><i className="material-icons">clear</i></button> */}
                        <input id="search" type="search" onChange={(e)=>{onInputSearchKey(e)}} onKeyUp={(e)=>{searchForWord(e)}} value={searchKey}/>
                        <label for="search">Search for Dish</label>
                        <i className="material-icons" onClick={()=> {clearSearchKey()}}>close</i>
                    </div>
                    <div className="col s12" >
                        <button  className="btn  waves-light" onClick={()=>{toggleFilter()}}>
                            {isFilterOpen ? <i className="material-icons">filter_list</i>
                                : <i className="material-icons" style={{transform:"scaleY(-1)"}}>filter_list</i>
                            }
                        Filter</button>
                        <button onClick={() => { clearFilteration() }} className="btn  waves-light red">Clear Filter<i className="material-icons left">clear</i></button>
                        {isFilterOpen ? <FilterOptions filteration={filteration}/>
                            : <div>Filter is not open </div>
                        }
                    </div>
                    
                </div>
                <p></p>
                {/* </form> */}
                <Stagger in>
                    {dishList.length ? dishList.map((dish, index) =>
                        <Fade key={index} in="true">
                            <div className="col s12 m6 l4" key={dish._id} height="300px">
                                <div className="card">
                                    <div className="card-image waves-block waves-light">
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
                    ): <div className="red-text"></div>}
                </Stagger>
            </div>
            <div className="red-text center-align">{noResult}</div>
            <div className="hide-on-small-only">
                <Filter clearFilteration={clearFilteration} 
                    filteration={filteration} 
                    searchKey={searchKey} search={search} 
                    onInputSearchKey={onInputSearchKey}
                    clearSearchKey={clearSearchKey}
                    searchForWord={searchForWord}
                />
            </div>
        </div>
    )
}