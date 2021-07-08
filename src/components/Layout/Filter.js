import React from "react";
import FilterOptions from "./FilterOptions";

const Filter = ({ clearFilteration, filteration, search, onInputSearchKey, searchKey, clearSearchKey, searchForWord}) => {
    
    return (
        <div className="col s12 m4" style={{ position: "fixed", right: "0%",top:"50px", height: "100vh", overflowY:"scroll", zIndex: 1, backgroundColor:"white", padding:"2%"}}>
            <nav>
                <div className="nav-wrapper">
                {/* <form> */}
                    <div className="input-field">
                    <input id="search" type="search" required onChange={(e)=>{onInputSearchKey(e)}} onKeyUp={(e)=>{searchForWord(e)}} value={searchKey}/>
                    <label className="label-icon" onClick={()=>{search()}} for="search" style={{cursor:"pointer"}}><i className="material-icons">search</i></label>
                    <i className="material-icons" onClick={()=> {clearSearchKey()}}>close</i>
                    </div>
                {/* </form> */}
                </div>
            </nav>
            <h5 style={{ fontFamily: "'Tangerine', cursive", display: "flex" }}>
                <button className="btn  waves-light" style={{ marginRight: "10px" }}>Filter<i className="material-icons">filter_list</i></button>
                <button  onClick={() => { clearFilteration() }} className="btn  waves-light red">Clear Filter<i className="material-icons left">clear</i></button>
            </h5>
            <div className="row">
                    <FilterOptions filteration={filteration} />
            </div>
        </div>
    )
}

export default Filter;