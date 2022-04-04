import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { coinReducer } from "./reducers/coin-reducer";
import { chartReducer } from "./reducers/chart-reducer";

const reducers = combineReducers({ chart: chartReducer });

export const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;
