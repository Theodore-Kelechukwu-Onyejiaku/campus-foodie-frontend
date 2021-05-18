import React, { useEffect, useState } from 'react';
import {baseUrl}  from "../../shared/baseUrl";
import AdminTools from "../Layout/AdminTools";

import Home from "./Home"


const Dashboard = () => {

    const [result, setResult] = useState({});
    const [error , setError] = useState("");
    useEffect(()=>{
    const token = localStorage.getItem("token");
        fetch(baseUrl+"api/admin/dashboard",{
            headers: {
                'Accept': 'application/json',
                "Content-type": "application/json",
                'Authorization': 'Bearer ' + token,
            }
        })
    .then(response => {
        if(response.ok) return response.json();
        else {
            const error=  new Error()
            error.message = "Something went wrong!";
            throw error;
        }
    })
    .then(async (result) =>{
        setResult(result)
    })
    .catch(error =>{
        setError(error.message)
    })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <>
        <div className="row">
            <AdminTools />
            <Home id="test1" result={result} error={error}/>
            <div id="test2">test2</div>
            <div id="test3">test3</div>
            <div id="test4">test4</div>

        </div>
        </>
    )
}

export default Dashboard;