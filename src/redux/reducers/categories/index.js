import categoriesState from "../../states/categories";
import {
    START_GET_CATEGORIES,
    SUCCESS_GET_CATEGORIES,
    FAILED_GET_CATEGORIES,
} from "../../actions/categories/types";

const categoriesReducer = (state = categoriesState, action) => {
    const stateCopy = { ...state };
    if (action.type === START_GET_CATEGORIES) {
        stateCopy.isRequest = true;
    }

    if (action.type === SUCCESS_GET_CATEGORIES) {
        stateCopy.isRequest = false;
        stateCopy.data = action.payload;
        stateCopy.error = null;
    }

    if (action.type === FAILED_GET_CATEGORIES) {
        stateCopy.isRequest = false;
        stateCopy.error = action.payload;
    }
    return stateCopy;
};

export default categoriesReducer;