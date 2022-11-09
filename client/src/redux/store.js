import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducer.js";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));
//se necesita middleware thunk para hacer llamadas al back

export default store;
