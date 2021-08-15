import React, { useState } from "react";
import PendingOrders from "./PendingOrders";
import EarnForm from "./EarnForm";
import Points from "./Points";



export default function Earn() {
    const [selection, setSelection] = useState("pendingOrders");

    const Selection = ()=>{
        switch (selection) {
            case "Orders":
                return (
                    <PendingOrders />
                )
            case "Points":
                return (
                    <Points />
                )
            default:
                return(
                    <div></div>
                )
        }
    }

    const PageSetter = ()=>{
        return(
            <div>
                    <ul className="collection highlight">
                        <li className="collection-item list-item"><button className="btn-flat" onClick={()=>{titleSetter("Orders")}}>Orders</button></li>
                        <li className="collection-item list-item"><button className="btn-flat" onClick={()=>{titleSetter("Points")}}>Points</button></li>
                        <li className="collection-item list-item"><button className="btn-flat" onClick={()=>{titleSetter("Points")}}>Deliveries</button></li>
                        <li className="collection-item list-item"><button className="btn-flat" onClick={()=>{titleSetter("Points")}}>Nothing</button></li>
                    </ul>
                </div>
        )
    }

    const titleSetter = (title) =>{
        setSelection(title);
    }

    return(
        <div className="container">
            <EarnForm/>
            <div className="row">
                <div className="col s12 m3">
                    <PageSetter/>
                </div>
                <div className="col s12 m9">
                    <h4>{selection}</h4>
                    <Selection/>
                </div>
            </div>
        </div>
    )
}