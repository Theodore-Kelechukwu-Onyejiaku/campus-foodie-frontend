import * as ActionTypes from "./ActionTypes";

export const dishReducer = (state = {
        getDishLoading: true,
        addDishLoading:false,
        errorMess: null,
        addDishError: null,
        addDishsuccessMess:null,
        successMess: null,
        dishes: [],
    }, action) =>{
    switch(action.type) {
        case ActionTypes.DISH_LOADING:
            return  {...state, getDishLoading: true}

        // FOR GETTING DISHES
        case ActionTypes.GET_DISHES:
            return {...state, getDishLoading: false, errorMess: null, dishes:action.payload}
        case ActionTypes.GET_DISHES_FAIL:
            return {...state, getDishLoading: false, errorMess:action.payload, dishes:null}

        // FOR ADDING DISHES
        case ActionTypes.ADD_DISH:
            return  {...state, addDishLoading: false, errorMess: null, addDishsuccessMess: action.payload.message, dishes:[...state.dishes]};
        case ActionTypes.ADD_DISH_FAIL:
            return {...state, addDishLoading: false, addDishError: action.payload, addDishsuccessMess: null}
        case ActionTypes.ADD_DISH_LOADING:
            return {...state, addDishLoading:true}

        default: 
            return state;
    }
}