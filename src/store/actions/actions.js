import {ADD_COIN, DELETE_COIN, START_CHART, STOP_CHART} from "../actionsType/actionsType";
import {getPrice} from "../../API/api";

export function stopChartAction(name) {
    return { type: STOP_CHART, payload: { name } };
}

export function getPriceAction(name, price, time) {
    return { type: START_CHART, payload: { name, price, time } };
}

export function addCoinAction(coin) {
    return { type: ADD_COIN, coin };
}

export function deleteCoinAction(coin) {
    return {type: DELETE_COIN, coin};
}

