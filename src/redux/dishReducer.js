import * as ActionTypes from "./ActionTypes";

export const DishReducer = (state = {
        isLoading: false,
        errorMess: null,
        successMess: null,
        dishes: [],
    }, action) =>{
    switch(action.type) {
        case ActionTypes.DISH_LOADING:
            return  {...state, isLoading: true}

        // FOR GETTING DISHES
        case ActionTypes.GET_DISHES:
            return {...state, isLoading: false, errorMess: null, dishes:action.payload}
        case ActionTypes.GET_DISHES_FAIL:
            return {...state, isLoading: false, errorMess:action.payload, dishes:null}

        // FOR ADDING DISHES
        case ActionTypes.ADD_DISH:
            return  {...state, isLoading: false, errorMess: null, successMess: action.payload };
        case ActionTypes.ADD_DISH_FAIL:
            return {...state, isLoading: false, errorMess: action.payload, successMess: null}


        default: 
            return state;
    }
}