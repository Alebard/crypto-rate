import { format } from "date-fns";
import {onStreamClose} from "../../API/api";
import {ADD_COIN, DELETE_COIN, START_CHART, STOP_CHART} from "../actionsType/actionsType";

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



