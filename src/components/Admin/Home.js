import React from "react";
import { NavLink } from "react-router-dom";


export default function Home({ result, error }) {
    return (
        <>
            {!result ? <div style={{ textAlign: "center" }}><i className="fa fa-spinner fa-spin"></i></div>
                : <div id="test1" className="col s12" >
                    <h1 style={{ fontFamily: "'Tangerine', cursive", textAlign: "center" }}>Admin Dashboard</h1>
                    {error === "" ?
                        <div>
                            <div className="row">
                                <div className="col s12 m6 ">
                                    <div className="col s12 m6" style={{ width: "100%", margin: "auto", textAlign: "center" }}>
                                        <NavLink to="/admin/add-product" className="btn-large  waves-light action-btn" >Add Product</NavLink>
                                        <p></p>
                                    </div>
                                </div>

                                <div className="col s12 m6">
                                    <div className="col s12 m6" style={{ width: "100%", margin: "auto", textAlign: "center" }}>
                                        <NavLink to="/admin/users" className="btn-large  waves-light action-btn" >
                                            View All Agents<span class="badge-info">4</span>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s12 m6 ">
                                    <div className="col s12 m6" style={{ width: "100%", margin: "auto", textAlign: "center" }}>
                                        <NavLink to="/admin/products" className="btn-large  waves-light action-btn" >
                                            Products
                            <span className="badge-info">
                                                {result.users ? <span class="badge-info"> {result.dishes}</span>
                                                    : <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>}
                                            </span>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col s12 m6">
                                    <div className="col s12 m6" style={{ width: "100%", margin: "auto", textAlign: "center" }}>
                                        <NavLink to="/admin/users" className="btn-large  waves-light action-btn" >
                                            View All Users
                            <span className="badge-info">
                                                {result.users ? <span class="badge-info"> {result.users}</span>
                                                    : <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>}
                                            </span>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : <div>Ooops! Something went wrong!</div>
                    }

                </div>
            }
        </>
    )
}