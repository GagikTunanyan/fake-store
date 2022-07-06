import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers";

export const myStore = createStore(rootReducer, applyMiddleware(thunk, logger));