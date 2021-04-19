import * as ActionTypes from "../ActionTypes";


const totalCart = (cart)=>{
    let total = 0;
    cart.forEach(element => {
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
        let count = totalCart(arr)
        dispatch(addToCart(item, count));
        return
    }else{
        var newArr = userCart;
       
        for (let element of newArr){
            if(element._id.toString() === item._id.toString()){
                element.quantity = element.quantity + 1;
                localStorage.setItem("cart", JSON.stringify(newArr));
                let count = totalCart(newArr);
                dispatch(increaseItem(newArr, count));
                return
            }
        }
        
        item["quantity"] = 1;
        newArr.push(item)
        localStorage.setItem("cart", JSON.stringify(newArr));
        let count = totalCart(newArr);
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
            element.quantity = element.quantity + 1;
        }
    });
    let newArr = userCart;
    localStorage.setItem("cart", JSON.stringify(newArr));
    let count = totalCart(newArr);
    dispatch(increaseItem(newArr,count));
}

export const decreaseItem = (newArr)=>({
    type: ActionTypes.DECREASE_CART_ITEM,
    payload: newArr
})

export const decreaseItemInCart=(item) => (dispatch) => {
    let userCart = JSON.parse(localStorage.getItem("cart")) || null;
    if(userCart === "null"){
        return
    }
    
    userCart.forEach(element => {
        if(element._id === item._id){
            if(element.quantity === 1){
                dispatch(decreaseItem(userCart))
                return 
            }
            element.quantity = element.quantity - 1;
        }
    });
    let newArr = userCart;
    localStorage.setItem("cart", JSON.stringify(newArr));
    let count = totalCart(newArr);
    dispatch(increaseItem(newArr, count));
}


export const deletFromCart = (newArr, count) =>({
    type: ActionTypes.DELETE_FROM_CART,
    payload: {newArr:newArr, count:count}
})
export const deleteItemFromCart = (item) => (dispatch) =>{
    let userCart = JSON.parse(localStorage.getItem("cart")) || null;
    if(userCart == null){
        return
    }else{
        userCart.forEach((element, index) =>{
            if(element._id === item._id){
                userCart.splice(userCart[index], 1)
            }
        })
    }
    localStorage.setItem("cart", JSON.stringify(userCart));
    let count = totalCart(userCart);
    dispatch(deletFromCart(userCart,count));
}