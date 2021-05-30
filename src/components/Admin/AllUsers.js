import React, { useEffect, useState } from "react";
import AdminTools from "../Layout/AdminTools"
import { baseUrl } from "../../shared/baseUrl";
import { NavLink } from "react-router-dom";

import AdminToolFix from "../Layout/AdminToolFix";


const AllUsers = () => {
    const [result, setResult] = useState([]);
    const [error, setError] = useState("");
    useEffect(() => {
        const token = localStorage.getItem("token");
        fetch(baseUrl + "api/admin/users", {
            headers: {
                'Accept': 'application/json',
                "Content-type": "application/json",
                'Authorization': 'Bearer ' + token,
            }
        })
            .then(response => {
                if (response.ok) return response.json();
                else {
                    const error = new Error()
                    error.message = "Something went wrong!";
                    throw error;
                }
            })
            .then(async (result) => {
                setResult(result.users)
            })
            .catch(error => {
                setError(error.message)
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    


    return (
        <div className="container">
            <AdminTools />
            <h4>All Users <small className="bagde-info"><strong>{result.length}</strong></small></h4>
            {error !== "" ? <div> Something Went Wrong!</div> : 
            <table className="responsive-table highlight">
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Email</th>
                        <th>Orders</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                { result.map(eachUser =>
                        <tr key={eachUser._id}>
                            
                            {eachUser.picture ? <td><img src={eachUser.picture} width="20px" height="alto" alt="social icon"></img></td> : <td><i className="fa fa-user"></i></td>}
                            <td>{eachUser.email}</td>
                            <td>{eachUser.orders.length}</td>
                            <td><NavLink to={"/admin/users/"+eachUser._id} className="btn"><i className="material-icons">remove_red_eye</i></NavLink></td>
                        </tr>
                    )
                }
                </tbody>
            </table>
            }
            <AdminToolFix/>
        </div>
    )
}

export default AllUsers;