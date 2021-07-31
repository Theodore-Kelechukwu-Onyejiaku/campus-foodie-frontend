import React from "react";
import FoodList from "../Food/FoodList"
import Loader from "../Layout/Loader"
import Slider from "../Layout/Slider"
// import {baseUrl} from "../../shared/baseUrl";
// import M from 'materialize-css/dist/js/materialize.min.js'


export default function Home({ dish, addItem }) {
    // const [getDishesError, setGetDishesError] = useState("");
    // const [dishes, setDishes] = useState("");

    // useEffect(() => {
    //     fetch(baseUrl + "api/dish/all-dishes")
    //         .then(response => {
    //             return response.json()
    //         })
    //         .then(result => {
    //             console.log(result)
    //             if(result.status === "fail"){
    //                 setGetDishesError(result.message);
    //                 M.toast({ html: result.message, classes: "red white-text" });
    //             }
    //             console.log("The dishes are: " + result);
    //             setDishes(result);
    //         })
    //         .catch(error => {
    //             setGetDishesError(error.message);
    //                 M.toast({ html: error.message, classes: "red white-text" });
    //         })
    // }, [])
    return (
        <>
            <div>
                <div className="row">
                    <div className="col s12 m8 l8">
                        <Slider />
                    </div>
                </div>
                {dish.getDishLoading && <Loader />}
                {(dish.dishes) ?
                    <div>
                        <FoodList addItem={addItem} dishes={dish.dishes} />
                    </div>
                    :
                    <div className="red-text">{dish.errorMess}</div>
                }
            </div>
        </>
    )
}