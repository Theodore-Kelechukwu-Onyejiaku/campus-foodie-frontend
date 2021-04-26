import * as ActionTypes from "../ActionTypes";
import { baseUrl } from "../../shared/baseUrl";

import history from "../history";


export const signupGoogle = (userData, token, successMess) =>({
    type: ActionTypes.SIGNUP_GOOGLE,
    payload: {userData, token, successMess}
})

export const signupGoogleError = (error) => ({
    type: ActionTypes.SIGNUP_GOOGLE_ERROR,
    payload: error
})

export const signupGoogleLoading = () =>({
    type: ActionTypes.SIGNUP_GOOGLE_LOADING
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


export const signupLocal = (userData, token, successMess) =>({
    type: ActionTypes.SIGNUP_LOCAL,
    payload: {userData, token, successMess}
})

export const signupLocalLoading = () =>({
    type: ActionTypes.SIGNUP_LOCAL_LOADING
})

export const signupLocalError = (error) =>({
    type: ActionTypes.SIGNUP_LOCAL_ERROR,
    payload: error
})

export const signupLocalPost = (formData) => dispatch =>{
    dispatch(signupLocalLoading())
    fetch(baseUrl+"api/auth/local", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {"Content-type": "application/json"}
    })
    .then(response =>{
            return response.json()
    })
    .then(async result =>{
        if(result.token){
            localStorage.setItem("token",result.token);
            await dispatch(signupLocal(result.user, result.token, result.message))
            setTimeout(()=>{
                history.push("/account-activation")
            }, 1500)
        }else{
            dispatch(signupLocalError(result.message));
        }
    })
    .catch(error =>{
        dispatch(signupLocalError(error.message));
    })
}