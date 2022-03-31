import {ADD_COIN, DELETE_COIN} from "./actionTypes";


export function addCoin(coin) {
    return{
        type: ADD_COIN,
        coin
    }
}


export function deleteCoin(coin) {
    return{
        type: DELETE_COIN,
        coin
    }
}