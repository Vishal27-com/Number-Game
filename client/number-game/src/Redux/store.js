import { reducer } from "./reducer";
import { applyMiddleware, compose, legacy_createStore } from "redux";
import thunk from 'redux-thunk'
const composer=window._REDUX_DEVTOOL_EXTENSION || compose
export const store=legacy_createStore(reducer,composer(applyMiddleware(thunk)))