import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { coinReducer } from "./reducers/coin-reducer";
import { chartReducer } from "./reducers/chart-reducer";

const reducers = combineReducers({ chart: chartReducer });

export const store = createStore(reducers,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

window.store = store;
