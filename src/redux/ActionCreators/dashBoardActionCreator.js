import * as ActionTypes from "../ActionTypes";
import { baseUrl } from "../../shared/baseUrl";

export const getDashboard = (info)=>({
    type: ActionTypes.GET_DASHBOARD,
    payload:{
        users:info.users,
        products: info.products
    }
});

export const getDashboardFail = () =>({
    type: ActionTypes.GET_DASHBOARD_ERROR
});


export const getDashboardInfo = async(dispatch)=>{
    fetch(baseUrl+"api/dashboard")
    .then(response => {
        if(response.ok) return response.json();
        else {
            const error=  new Error()
            error.message = "Something went wrong!";
            throw error;
        }
    })
    .then(async (result) =>{
        await  dispatch(getDashboard(result));    
    })
    .catch(error =>{
        dispatch(getDashboardFail("Something went wrong!"))
    })
}