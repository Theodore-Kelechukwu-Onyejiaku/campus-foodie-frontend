import * as ActionTypes from "./ActionTypes";
const browserToken = localStorage.getItem("token") || "";

export const authReducer = (state = {
    isLoading: false,
    token: browserToken,
    user: {},
    errorMess: "",
    successMess: "",
    isAthenticated: false,
    isNotLoggedInMessage: "",
    isLoggedInMessage: "",
}, action ) =>{
    switch(action.type){
        case ActionTypes.SIGNUP:
            return{...state, user:action.payload.userData, token: action.payload.token, successMess:action.payload.successMess, isLoading:false, isAuthenticated: true}

        case ActionTypes.SIGNUP_LOADING:
            return{...state, isLoading:!state.isLoading}
             
        case ActionTypes.SIGNUP_ERROR:
            return{...state,errorMess: action.payload, isLoading:false, successMess:""}

        case ActionTypes.IS_LOGGED_IN_SUCCESS:
            return{...state, isLoggedInMessage: "You are logged in already!", isNotLoggedInMessage:"", user: action.payload}
        
        case ActionTypes.IS_LOGGED_IN_ERROR:
            return{...state, isLoggedInMessage: "", isNotLoggedInMessage: "Sorry, you are not logged in", user : {} }

        default:
            return state
    }   
}