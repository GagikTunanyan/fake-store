import { generateCategoriesData } from "../../../utils";
import {
    START_GET_CATEGORIES,
    SUCCESS_GET_CATEGORIES,
    FAILED_GET_CATEGORIES,
} from "./types";

const startGetCategories = () => {
    return {
        type: START_GET_CATEGORIES,
    }
};

const successGetCategories = (payload) => {
    return {
        type: SUCCESS_GET_CATEGORIES,
        payload
    };
};

const failedGetCategories = (payload) => {
    return {
        type: FAILED_GET_CATEGORIES,
        payload
    };
};

export const getCategories = () => {
    return (dispatch) => {
        dispatch(startGetCategories());
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then((data) => {
                if(data.status === "error") {
                   return dispatch(failedGetCategories(data.message))
                }
                return dispatch(successGetCategories(generateCategoriesData(["all", ...data])))
            })
    }
}