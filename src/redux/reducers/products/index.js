import productsState from "../../states/products";
import {
    START_GET_PRODUCTS,
    SUCCESS_GET_PRODUCTS,
    FAILED_GET_PRODUCTS,
} from "../../actions/products/types";

const productsReducer = (state = productsState, action) => {
    const stateCopy = { ...state };
    if (action.type === START_GET_PRODUCTS) {
        stateCopy.isRequest = true;
    }

    if (action.type === SUCCESS_GET_PRODUCTS) {
        stateCopy.isRequest = false;
        stateCopy.data = action.payload;
        stateCopy.error = null;
    }

    if (action.type === FAILED_GET_PRODUCTS) {
        stateCopy.isRequest = false;
        stateCopy.error = action.payload;
    }
    return stateCopy;
};

export default productsReducer;