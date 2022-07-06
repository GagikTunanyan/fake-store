import productsState from "../../states/product";
import {
    START_GET_PRODUCT,
    SUCCESS_GET_PRODUCT,
    FAILED_GET_PRODUCT,
} from "../../actions/product/types";

const productReducer = (state = productsState, action) => {
    const stateCopy = { ...state };
    if (action.type === START_GET_PRODUCT) {
        stateCopy.isRequest = true;
    }

    if (action.type === SUCCESS_GET_PRODUCT) {
        stateCopy.isRequest = false;
        stateCopy.data = action.payload;
        stateCopy.error = null;
    }

    if (action.type === FAILED_GET_PRODUCT) {
        stateCopy.isRequest = false;
        stateCopy.error = action.payload;
    }

    return stateCopy;
};

export default productReducer;