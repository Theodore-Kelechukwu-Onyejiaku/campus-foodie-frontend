import * as ActionTypes from "./ActionTypes";
let userCart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;
let cartNumber = userCart.forEach(element => {
    console.log(element["quantity"]);
    total = total + element["quantity"];
});
cartNumber = total;

export const cartReducer = (state = {
    cart : userCart,
    number : cartNumber
}, action) =>{
    switch(action.type){
        case ActionTypes.ADD_TO_CART:
            var newItem = action.payload.item;
            
            return {...state, cart:state.cart.concat(newItem), number: action.payload.count}

        case ActionTypes.INCREASE_CART_ITEM:
            return {...state, cart:action.payload.newArr, number: action.payload.count}

        case ActionTypes.DECREASE_CART_ITEM:
            return {...state, cart:action.payload}
            
        default:
            return state
    }
}