import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";
const middleware = [thunk];

const store = legacy_createStore(reducer, applyMiddleware(...middleware));

export default store;
