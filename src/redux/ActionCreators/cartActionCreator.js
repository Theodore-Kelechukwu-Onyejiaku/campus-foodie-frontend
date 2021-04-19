import * as ActionTypes from "../ActionTypes";
import { baseUrl } from "../../shared/baseUrl";
import history from "../history";
import { element } from "prop-types";


const totalCart = (cart)=>{
    let total = 0;
    cart.forEach(element => {
        console.log(element["quantity"]);
        total = total + element["quantity"];
    });
    return total
}


export const addToCart = (item, count)=>({
    type:ActionTypes.ADD_TO_CART,
    payload: {item: item, count: count}
})

export const addItem = (item) => (dispatch) =>{
    let userCart = JSON.parse(localStorage.getItem("cart")) || null;
    if(userCart == null){
        var arr = [];
        item["quantity"] = 1;
        arr.push(item);
        userCart = localStorage.setItem("cart", JSON.stringify(arr));
        var total = 0
        let numberOfItems = arr.forEach(element =>{
            total = total + element["quantity"];
        })
        let count = totalCart(arr)
        dispatch(addToCart(item, count));
        return
    }else{
        var newArr = userCart;
       
        for (let element of newArr){
            if(element._id.toString() === item._id.toString()){
                console.log(element._id, item._id)
                element.quantity = element.quantity + 1;
                console.log("Element existing!")
                localStorage.setItem("cart", JSON.stringify(newArr));
                let count = totalCart(newArr);
                dispatch(increaseItem(newArr, count));
                return
            }
        }
        
        item["quantity"] = 1;
        newArr.push(item)
        console.log("item is not existing")
        localStorage.setItem("cart", JSON.stringify(newArr));
        let count = totalCart(newArr, count);
        dispatch(addToCart(item, count));
    }
    
}

export const increaseItem = (newArr, count)=>({
    type: ActionTypes.INCREASE_CART_ITEM,
    payload: {newArr:newArr, count:count}
})

export const increaseItemInCart=(item) => (dispatch) => {
    let userCart = JSON.parse(localStorage.getItem("cart")) || null;
    if(userCart === "null"){
        return
    }
    
    userCart.forEach(element => {
        if(element._id === item._id){
            console.log(element, item)
            element.quantity = element.quantity + 1;
        }
    });
    let newArr = userCart;
    localStorage.setItem("cart", JSON.stringify(newArr));
    console.log(newArr[0])
    let count = totalCart(newArr);
    dispatch(increaseItem(newArr,count));
}

export const decreaseItem = (newArr)=>({
    type: ActionTypes.DECREASE_CART_ITEM,
    payload: newArr
})

export const decreaseItemInCart=(item) => (dispatch) => {
    let userCart = JSON.parse(localStorage.getItem("cart")) || null;
    console.log("whatever")
    if(userCart === "null"){
        return
    }
    
    userCart.forEach(element => {
        if(element._id === item._id){
            console.log(element, item)
            if(element.quantity === 1){
                console.log("Oga your quantity is 0")
                dispatch(decreaseItem(userCart))
                return 
            }
            element.quantity = element.quantity - 1;
        }
    });
    let newArr = userCart;
    localStorage.setItem("cart", JSON.stringify(newArr));
    console.log(newArr[0])
    let count = totalCart(newArr);
    dispatch(increaseItem(newArr, count));
}