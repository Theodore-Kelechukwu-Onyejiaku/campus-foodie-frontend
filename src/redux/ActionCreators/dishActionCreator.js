import * as ActionTypes from "../ActionTypes";
import { baseUrl } from "../../shared/baseUrl";
import M from 'materialize-css/dist/js/materialize.min.js'

export const addDishLoading = ()=>({
    type: ActionTypes.ADD_DISH_LOADING
})


export const addDish = (respMess, respData) =>({
    type: ActionTypes.ADD_DISH,
    payload: {message: respMess, dishes: respData}
})

export const addDishFail = (err) =>({
    type: ActionTypes.ADD_DISH_FAIL,
    payload: err
})


export const postDish = (formData) => async (dispatch) => {
    dispatch(addDishLoading)
    fetch(baseUrl+"api/dish/add-dish",{
        method: "POST",
        body: JSON.stringify(formData),
        headers: {"Content-type": "application/json"}
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
        await  dispatch(addDish(result.message, result.dish));
        M.toast({ html: result.message, classes: "green white-text" })    
    })
    .catch(error =>{
        dispatch(addDishFail("Something went wrong!"))
        
            M.toast({ html: "Something went wrong!", classes: "red white-text" })
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
    dispatch(getDishesLoading);
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
        console.log("The dishes are: "+result.dishes)
        dispatch(getDishes(result.dishes));
    })
    .catch(error =>{
        dispatch(getDishesFail("Something went wrong!"))
    })
}
