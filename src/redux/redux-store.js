import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk"
import albumReducer from "./albumReducer";



let reducers = combineReducers({
    album : albumReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;