import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { coinReducer } from "./reducers/coin-reducer";
import { chartReducer } from "./reducers/chart-reducer";
import {coinsShowChart} from "./reducers/coinsShowChart-reducer";


const reducers = combineReducers({ coin: coinReducer, chart: chartReducer, coinsShowChart: coinsShowChart});

export const store = createStore(reducers, applyMiddleware(thunk));
