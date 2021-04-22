import * as ActionTypes from "../ActionTypes";
import { baseUrl } from "../../shared/baseUrl";


export const signup = (userData, token, successMess) =>({
    type: ActionTypes.SIGNUP,
    payload: {userData, token, successMess}
})

export const signupError = (error) => ({
    type: ActionTypes.SIGNUP_ERROR,
    payload: error
})

export const signupLoading = () =>({
    type: ActionTypes.SIGNUP_LOADING
})

export const isLoggedInSuccess = (user) => ({
    type: ActionTypes.IS_LOGGED_IN_SUCCESS,
    payload: user
})

export const IsLoggedInError = (error) =>({
    type: ActionTypes.IS_LOGGED_IN_ERROR,
    payload: error
})

export const checkIsLoggedIn = () => dispatch => {
    const token = localStorage.getItem("token")
    fetch(baseUrl+"api/auth/verify",{
        method: "POST",
        body: JSON.stringify({token: token}),
        headers: {"Content-type": "application/json"}
    })
    .then(response => response.json())
    .then(result => {
        console.log(result)
        if(!result.isAuthenticated){
            dispatch(IsLoggedInError(result.message))
            return
        }
        dispatch(isLoggedInSuccess(result.user))
    })
    .catch(error =>{
        console.log(error.message)
        dispatch(IsLoggedInError(error.message))
    })
}