import {
    START_GET_PRODUCT,
    SUCCESS_GET_PRODUCT,
    FAILED_GET_PRODUCT,
    START_DELETE_PRODUCT,
    SUCCESS_DELETE_PRODUCT,
    FAILED_DELETE_PRODUCT,
    START_UPDATE_PRODUCT,
    SUCCESS_UPDATE_PRODUCT,
    FAILED_UPDATE_PRODUCT,
    START_ADD_PRODUCT,
    SUCCESS_ADD_PRODUCT,
    FAILED_ADD_PRODUCT,
} from "./types";

const startGetProduct = () => {
    return {
        type: START_GET_PRODUCT,
    }
};

const successGetProduct = (payload) => {
    return {
        type: SUCCESS_GET_PRODUCT,
        payload
    };
};

const failedGetProduct = (payload) => {
    return {
        type: FAILED_GET_PRODUCT,
        payload
    };
};

export const getProduct = (id) => {
    return (dispatch) => {
        dispatch(startGetProduct());
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then((data) => {
                if(data.status === "error") {
                   return dispatch(failedGetProduct(data.message))
                }
                return dispatch(successGetProduct(data))
            })
    }
}

const startDeleteProduct = () => {
    return {
        type: START_DELETE_PRODUCT,
    }
};

const successDeleteProduct = (payload) => {
    return {
        type: SUCCESS_DELETE_PRODUCT,
        payload
    };
};

const failedDeleteProduct = (payload) => {
    return {
        type: FAILED_DELETE_PRODUCT,
        payload
    };
};

export const deleteProduct = (id, history) => {
    return (dispatch) => {
        dispatch(startDeleteProduct());
        fetch(`https://fakestoreapi.com/products/${id}`, { method: "DELETE"})
            .then(res => res.json())
            .then((data) => {
                if(data.status === "error") {
                   return dispatch(failedDeleteProduct(data.message))
                }
                history(-1);
                return dispatch(successDeleteProduct(data))
            })
    }
}

const startUpdateProduct = () => {
    return {
        type: START_UPDATE_PRODUCT,
    }
};

const successUpdateProduct = (payload) => {
    return {
        type: SUCCESS_UPDATE_PRODUCT,
        payload
    };
};

const failedUpdateProduct = (payload) => {
    return {
        type: FAILED_UPDATE_PRODUCT,
        payload
    };
};

export const updateProduct = (id, newData) => {
    return (dispatch) => {
        dispatch(startUpdateProduct());
        fetch(`https://fakestoreapi.com/products/${id}`, { method: "PUT", body: JSON.stringify({...newData})})
            .then(res => res.json())
            .then((data) => {
                if(data.status === "error") {
                   return dispatch(failedUpdateProduct(data.message))
                }
                return dispatch(successUpdateProduct(data))
            })
    }
}

const startAddProduct = () => {
    return {
        type: START_ADD_PRODUCT,
    }
};

const successAddProduct = (payload) => {
    return {
        type: SUCCESS_ADD_PRODUCT,
        payload
    };
};

const failedAddProduct = (payload) => {
    return {
        type: FAILED_ADD_PRODUCT,
        payload
    };
};

export const addProduct = (newProduct) => {
    return (dispatch) => {
        dispatch(startAddProduct());
        fetch(`https://fakestoreapi.com/products/`, { method: "POST", body: JSON.stringify(newProduct)})
            .then(res => res.json())
            .then((data) => {
                if(data.status === "error") {
                   return dispatch(failedAddProduct(data.message))
                }
                return dispatch(successAddProduct(data))
            })
    }
}