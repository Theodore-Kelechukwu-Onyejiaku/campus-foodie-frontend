import { createStore, combineReducers, applyMiddleware } from "redux";
// import { createForms } from "react-redux-form";
// import { Dishes} from "./dishes";
// import { Comments} from "./comments";
// import { Promotions} from "./promotions";
// import { Leaders} from "./leaders";
import {DishReducer} from "./dishReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";


export const ConfigureStore = () =>{
    const store = createStore(
       combineReducers({
           dish: DishReducer
       }),
       applyMiddleware(thunk, logger)
    );
    return store;
}
