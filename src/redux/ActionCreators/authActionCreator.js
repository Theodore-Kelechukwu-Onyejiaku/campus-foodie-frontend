import * as ActionTypes from "../ActionTypes";

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