import { combineReducers } from "redux";
import categoriesReducer from "./categories";
import productsReducer from "./products";
import productReducer from "./product";

const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    product: productReducer,
});

export default rootReducer;