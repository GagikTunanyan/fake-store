import {
    START_GET_PRODUCTS,
    SUCCESS_GET_PRODUCTS,
    FAILED_GET_PRODUCTS,
} from "./types";

const startGetProducts = () => {
    return {
        type: START_GET_PRODUCTS,
    }
};

const successGetProducts = (payload) => {
    return {
        type: SUCCESS_GET_PRODUCTS,
        payload
    };
};

const failedGetProducts = (payload) => {
    return {
        type: FAILED_GET_PRODUCTS,
        payload
    };
};

export const getProducts = (category) => {
    return (dispatch) => {
        dispatch(startGetProducts());
        fetch(`https://fakestoreapi.com/products${category === "all" ? "" : `/category/${category}`}`)
            .then(res => res.json())
            .then((data) => {
                if(data.status === "error") {
                   return dispatch(failedGetProducts(data.message))
                }
                return dispatch(successGetProducts(data))
            })
    }
}