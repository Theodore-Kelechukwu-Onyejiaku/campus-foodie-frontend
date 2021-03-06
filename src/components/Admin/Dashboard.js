import React, { useEffect, useState } from 'react';
import {useHistory} from "react-router-dom"
import {baseUrl}  from "../../shared/baseUrl";
import AdminTools from "../Layout/AdminTools";


import Home from "./Home"


const Dashboard = () => {
    const history = useHistory();
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
        if(result.status){
            history.push("/403")
        }else{
            setResult(result)
        }
    })
    .catch(error =>{
        setError(error.message)
    })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <>
        <div className="row container">
            <AdminTools />
            <Home id="test1" result={result} error={error}/>
            
        </div>
        </>
    )
}

export default Dashboard;