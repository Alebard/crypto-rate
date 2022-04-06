import { format } from "date-fns";
import {getPrice, onStreamClose} from "../../API/api";

const START_CHART = "START_CHART";
const STOP_CHART = "STOP_CHART";

const ADD_COIN = "ADD_COIN";
const DELETE_COIN = "DELETE_COIN";

export const initialState = {
  times: [],
  coins: [
    {
      name: "BTC",
      prices: [],
    },
  ],
};

export function chartReducer(state = initialState, action) {
  switch (action.type) {
    case START_CHART:
      const currentCoinIndex = state.coins.findIndex(
          (coin) => coin.name === action.payload.name
      );

      if (state.times.length < 10) {
        state.coins[currentCoinIndex].prices = [
          ...state.coins[currentCoinIndex].prices,
          action.payload.price,
        ];

        return {
          times: [...state.times, action.payload.time],
          coins: [...state.coins],
        };
      }

      state.coins[currentCoinIndex].prices = [
        ...state.coins[currentCoinIndex].prices.slice(1),
        action.payload.price,
      ];

      return {
        times: [...state.times.slice(1), action.payload.time],
        coins: [...state.coins],
      };

    case STOP_CHART:
      onStreamClose(action.payload.name)

      const stopedCoinIndex = state.coins.findIndex(
          (coin) => coin.name === action.payload.name
      );
      state.coins[stopedCoinIndex].prices = []
      return {
        ...state
      };

    case ADD_COIN:
      const isValue = state.coins.findIndex(
        (item) => item.name === action.coin
      );
      if (isValue === -1) {
        const newCoin = {
          name: action.coin,
          prices: [],
        };
        return {
          ...state,
          coins: [...state.coins, newCoin],
        };
      }
      return state;
    case DELETE_COIN:
      const filterCoins = state.coins.filter(
        (item) => item.name !== action.coin
      );
      return {
        ...state,
        coins: [...filterCoins],
      };

    default:
      return state;
  }
}



export function addCoin(coinName) {
  return async function (dispatch) {
    try {
      const price = await getPrice(coinName);
      if (!price) throw new Error("ERROR DATA");
      dispatch(addCoinAction(coinName));
    } catch (err) {
      console.log(err);
    }
  };
}

// export function stopChart(coinName) {
//   return function (dispatch) {
//     dispatch(stopChartAction(coinName));
//   };
// }

export function stopChartAction(name) {
  return { type: STOP_CHART, payload: { name } };
}

export function getPriceAction(name, price, time) {
  return { type: START_CHART, payload: { name, price, time } };
}

function addCoinAction(coin) {
  return { type: ADD_COIN, coin };
}

export function deleteCoinAction(coin) {
  return { type: DELETE_COIN, coin };
}
