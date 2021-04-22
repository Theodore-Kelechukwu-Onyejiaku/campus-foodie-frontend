import * as ActionTypes from "./ActionTypes";
const browserToken = localStorage.getItem("token") || "";

export const authReducer = (state = {
    isLoading: false,
    token: browserToken,
    user: {},
    errorMess: "",
    successMess: ""
}, action ) =>{
    switch(action.type){
        case ActionTypes.SIGNUP:
            return{...state, user:action.payload.userData, token: action.payload.token, successMess:action.payload.successMess, isLoading:false, isAuthenticated: true}

        case ActionTypes.SIGNUP_LOADING:
            return{...state, isLoading:!state.isLoading}
             
        case ActionTypes.SIGNUP_ERROR:
            return{...state,errorMess: action.payload, isLoading:false, successMess:""}
        default:
            return state
    }   
}