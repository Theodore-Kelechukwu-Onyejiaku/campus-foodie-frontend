import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";
import history from "./history"

export const dishLoading = ()=>({
    type: ActionTypes.DISH_LOADING 
})


export const addDish = (resp) =>({
    type: ActionTypes.ADD_DISH,
    payload: resp
})

export const addDishFail = (err) =>({
    type: ActionTypes.ADD_DISH_FAIL,
    payload: err
})


export const postDish = (formData) => async (dispatch) => {
    dispatch(dishLoading)
    fetch(baseUrl+"api/dish/add-dish",{
        method: "POST",
        body: JSON.stringify(formData),
        headers: {"Content-type": "application/json", 'Access-Control-Allow-Origin':"*"}
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
        console.log("before done")
        await  dispatch(addDish(result.message));
        setTimeout(()=>{
            dispatch(dishLoading)
            history.push("/")
        }, 2000)
        
    })
    .catch(error =>{
        dispatch(addDishFail(error.message))
    })
}

/**
 *  GET ALL DISHES
 */
export const getDishes = (dishes)=>({
    type: ActionTypes.GET_DISHES,
    payload: dishes
})

export const getDishesFail = (err)=>({
    type: ActionTypes.GET_DISHES_FAIL,
    payload: err
})

export const getDishesLoading = ()=>({
    type: ActionTypes.GET_DISHES_LOADING
})

export const getAllDishes = () => (dispatch)=>{
    dispatch(dishLoading);
    fetch(baseUrl+"api/dish/all-dishes")
    .then(response =>{
        if(response.ok)  return response.json()
        else{
            const error = new Error();
            error.message = "Something went wrong!";
            throw error
        }
    })
    .then(result =>{
        dispatch(getDishes(result.dishes));
    })
    .catch(error =>{
        dispatch(getDishesFail(error.message))
    })
}

// export const addComment = (comment) => ({
//     type: ActionTypes.ADD_COMMENT,
//     payload: comment
// });

// export const postComment = (dishId, rating, author, comment) => (dispatch)=> {
//     const newComment = {
//         dishId: dishId,
//         rating: rating,
//         author: author,
//         comment: comment
//     }

//     newComment.date = new Date().toISOString();

//     return fetch(baseUrl + "comments", {
//         method: "POST",
//         body: JSON.stringify(newComment),
//         headers: {
//             "Content-Type": "application/json"
//         },
//         credentials: "same-origin"
//     })
//     .then(response => {
//         if(response.ok){
//             return response
//         }else{
//             var error = new Error("Error "+ response.status + ":" + response.statusText)
//             error.response = response;
//             throw error;
//         }
//     }, 
//     error => { 
//         var errmess = new Error(error.message);
//         throw errmess;
//     })
//     .then(response => response.json())
//     .then(response => dispatch(addComment(response)))
//     .catch(error => { console.log("Post Comments ", error.message)
//         alert("Your comment could not be posted\nError: "+ error.message)
//      })
// }

// export const fetchDishes = () => (dispatch) => {
//     dispatch(dishesLoading(true));

//     return fetch(baseUrl + "dishes")
//             .then(response => {
//                 if(response.ok){
//                     return response
//                 }else{
//                     var error = new Error("Error "+ response.status + ":" + response.statusText)
//                     error.response = response;
//                     throw error;
//                 }
//             }, 
//             error => { 
//                 var errmess = new Error(error.message);
//                 throw errmess;
//             })
//             .then(response => response.json())
//             .then(dishes => dispatch(addDishes(dishes)))
//             .catch(error => dispatch(dishesFailed(error.message)))
// }

// export const dishesLoading = () =>({
//     type: ActionTypes.DISHES_LOADING
// })

// export const dishesFailed = (errmess) => ({
//     type: ActionTypes.DISHES_FAILED,
//     payload: errmess
// })


// export const addDishes = (dishes) => ({
//     type: ActionTypes.ADD_DISHES,
//     payload: dishes
// })

// export const fetchComments = () => (dispatch) => {
//     return fetch(baseUrl + "comments")
//             .then(response => {
//                 if(response.ok){
//                     return response
//                 }else{
//                     var error = new Error("Error "+ response.status + ":" + response.statusText)
//                     error.response = response;
//                     throw error;
//                 }
//             }, 
//             error => { 
//                 var errmess = new Error(error.message);
//                 throw errmess
//             })
//             .then(response => response.json())
//             .then(comments => dispatch(addComments(comments)))
//             .catch(error => dispatch(commentsFailed(error.message)))

// }

// export const commentsFailed = (errmess) => ({
//     type: ActionTypes.COMMENTS_FAILED,
//     payload: errmess
// })


// export const addComments = (comments) => ({
//     type: ActionTypes.ADD_COMMENTS,
//     payload: comments
// })


// export const fetchPromos = () => (dispatch) => {
//     dispatch(promosLoading(true));

//     return fetch(baseUrl + "promotions")
//             .then(response => {
//                 if(response.ok){
//                     return response
//                 }else{
//                     var error = new Error("Error " + response.status + ":" + response.statusText)
//                     error.response = response;
//                     throw error;
//                 }
//             }, 
//             error => { 
//                 var errmess = new Error(error.message);
//                 throw errmess
//             })
//             .then(response => response.json())
//             .then(promos => dispatch(addPromos(promos)))
//             .catch(error => dispatch(promosFailed(error.message)))
// }

// export const promosLoading = () =>({
//     type: ActionTypes.PROMOS_LOADING
// })

// export const promosFailed = (errmess) => ({
//     type: ActionTypes.PROMOS_FAILED,
//     payload: errmess
// })


// export const addPromos = (promos) => ({
//     type: ActionTypes.ADD_PROMOS,
//     payload:promos
// })


// export const fetchLeaders = () => (dispatch) => {
//     dispatch(leadersLoading(true));

//     return fetch(baseUrl + "leaders")
//             .then(response => {
//                 if(response.ok){
//                     return response
//                 }else{
//                     var error = new Error("Error " + response.status + ":" + response.statusText)
//                     error.response = response;
//                     throw error;
//                 }
//             }, 
//             error => { 
//                 var errmess = new Error(error.message);
//                 throw errmess
//             })
//             .then(response => response.json())
//             .then(leaders => dispatch(addLeaders(leaders)))
//             .catch(error => dispatch(leadersFailed(error.message)))
// }

// export const leadersLoading = () =>({
//     type: ActionTypes.LEADERS_LOADING
// })

// export const leadersFailed = (errmess) => ({
//     type: ActionTypes.LEADERS_FAILED,
//     payload: errmess
// })


// export const addLeaders = (leaders) => ({
//     type: ActionTypes.ADD_LEADERS,
//     payload:leaders
// })

// export const addFeedback = (feedback) => ({
//     type: ActionTypes.ADD_FEEDBACK,
//     payload: feedback
// });

// export const postFeedback = (firstname, lastname, telnum, email, agree, contactType, message) => (dispatch)=> {
//     const newFeedback = { 
//         firstname: firstname, 
//         lastname: lastname, 
//         telnum: telnum, 
//         email: email, 
//         agree: agree, 
//         contactType: contactType, 
//         message: message
//     }

//     newFeedback.date = new Date().toISOString();

//     return fetch(baseUrl + "feedback", {
//         method: "POST",
//         body: JSON.stringify(newFeedback),
//         headers: {
//             "Content-Type": "application/json"
//         },
//         credentials: "same-origin"
//     })
//     .then(response => {
//         if(response.ok){
//             return response
//         }else{
//             var error = new Error("Error "+ response.status + ":" + response.statusText)
//             error.response = response;
//             throw error;
//         }
//     }, 
//     error => { 
//         var errmess = new Error(error.message);
//         throw errmess;
//     })
//     .then(response => response.json())
//     .then(response => {
//         alert("Thank you for your feedback:\n" + JSON.stringify(response))
//         return dispatch(addFeedback(response))
//     })
//     .catch(error => { console.log("Post Feedback ", error.message)
//         alert("Your feedback could not be posted\nError: "+ error.message)
//      })
// }
