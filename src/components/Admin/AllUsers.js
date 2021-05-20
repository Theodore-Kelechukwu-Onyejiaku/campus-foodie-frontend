import React, { useEffect, useState } from "react";
import AdminTools from "../Layout/AdminTools"
import { baseUrl } from "../../shared/baseUrl";

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
            <h4>All Users</h4>
            {error !== "" ? <div> Something Went Wrong!</div> : 
            <table className="responsive-table striped highlight">
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Email</th>
                        <th>Orders</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                { result.map(eachUSer =>
                        <tr>
                            
                            {eachUSer.picture ? <td><img src={eachUSer.picture} width="20px" height="alto" alt="social icon"></img></td> : <td>None</td>}
                            <td>{eachUSer.email}</td>
                            <td>{eachUSer.orders.length}</td>
                            <td><button className="btn"><i className="material-icons">remove_red_eye</i></button></td>
                        </tr>
                    )
                }
                </tbody>
            </table>
            }
        </div>
    )
}

export default AllUsers;