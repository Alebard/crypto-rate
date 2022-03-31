import {combineReducers} from "redux";
import {ADD_COIN, DELETE_COIN} from "./actionTypes";


export function coinReducer(state = [], action) {
    switch (action.type){
        case ADD_COIN:
            return new Set([...state, action.coin]);
        case DELETE_COIN:
            return [...state].filter(coin => coin !== action.coin);
    }
}


export const rootReducer = combineReducers({
    coins: coinReducer
})

