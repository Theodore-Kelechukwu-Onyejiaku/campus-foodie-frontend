import { createStore, combineReducers, applyMiddleware } from "redux";
// import { createForms } from "react-redux-form";
// import { Dishes} from "./dishes";
// import { Comments} from "./comments";
// import { Promotions} from "./promotions";
// import { Leaders} from "./leaders";
import {dishReducer} from "./dishReducer";
import {cartReducer} from "./cartReducer";
import {authReducer} from "./authReducer"
import thunk from "redux-thunk";
import logger from "redux-logger";


export const ConfigureStore = () =>{
    const store = createStore(
       combineReducers({
           dish: dishReducer,
           cart: cartReducer,
           auth: authReducer,
           
       }),
       applyMiddleware(thunk, logger)
    );
    return store;
}
