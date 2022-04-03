import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { coinReducer } from "./reducers/coin-reducer";
import { chartReducer, showChartReducer } from "./reducers/chart-reducer";
import {currentCoinReducer} from "./reducers/current-coin";


const reducers = combineReducers({
    coin: coinReducer,
    chart: chartReducer,
    showChart: showChartReducer,
    currentCoin: currentCoinReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
