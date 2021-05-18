import * as ActionTypes from "./ActionTypes";

export const dashBoardReducer = (state ={
    users: 0,
    products: 0,
    orders:0,
    payments: 0,
    errorMess: ""
}, action) =>{
    switch(action.type){
        case ActionTypes.GET_DASHBOARD:
            return {...state, users: payload.users, products: payload.products}
        
        case ActionTypes.GET_DASHBOARD_ERROR:
            return {...state, users}
    }
}