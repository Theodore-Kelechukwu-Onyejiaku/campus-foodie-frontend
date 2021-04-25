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
        case ActionTypes.IS_LOGGED_IN_SUCCESS:
            return{...state, isLoggedInMessage: "You are logged in already!", isNotLoggedInMessage:"", user: action.payload}
        
        case ActionTypes.IS_LOGGED_IN_ERROR:
            return{...state, isLoggedInMessage: "", isNotLoggedInMessage: "Sorry, you are not logged in", user : {} }

        // GOOGLE SIGNUP
        case ActionTypes.SIGNUP_GOOGLE:
            return{...state, user:action.payload.userData, token: action.payload.token,errorMess: "", successMess:action.payload.successMess, isLoading:false, isAuthenticated: true}

        case ActionTypes.SIGNUP_GOOGLE_LOADING:
            return{...state, isLoading:true, successMess:"", errorMess:""}
             
        case ActionTypes.SIGNUP_GOOGLE_ERROR:
            return{...state,errorMess: action.payload, isLoading:false, successMess:""}
        // END OF GOOGLE SIGNUP


        // LOCAL SIGNUP
        case ActionTypes.SIGNUP_LOCAL:
            return{...state, user:action.payload.userData, token:action.payload.token, errorMess:"", successMess: action.payload.successMess, isLoading:false, isAuthenticated: true}
        
        case ActionTypes.SIGNUP_LOCAL_LOADING:
            return{...state, isLoading:true, successMess:"", errorMess:""}
        
        case ActionTypes.SIGNUP_LOCAL_ERROR:
            return{...state,errorMess: action.payload, isLoading:false, successMess:""}
            
        default:
            return state
    }   
}