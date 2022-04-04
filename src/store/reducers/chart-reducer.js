import { format } from "date-fns";
import { getPrice } from "../../API/api";

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
      return {
        ...state,
        // datasets: state.datasets.filter(
        //   (item) => item.labels !== action.coinName
        // ),
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

export function startChart(coinName) {
  return function (dispatch) {
    const apiKey =
      "3d56d21db65af18b84abee5efdc4a22a8170b85c4c0d4b485af65d467802f804";
    const ccStreamer = new WebSocket(
      `wss://streamer.cryptocompare.com/v2?api_key=${apiKey}`
    );
    ccStreamer.onopen = function onStreamOpen() {
      const subRequest = {
        action: "SubAdd",
        subs: [`2~Coinbase~${coinName}~USD`],
      };
      ccStreamer.send(JSON.stringify(subRequest));
    };

    ccStreamer.onmessage = function onStreamMessage(event) {
      const message = JSON.parse(event.data);

      if (message.TYPE === "2") {
        const time = format(new Date(), "HH:mm:ss");
        dispatch(getPriceAction(message.FROMSYMBOL, message.PRICE, time));
      }
    };

    ccStreamer.onclose = function onStreamClose() {
      console.log("test");
      const subRequest = {
        action: "SubRemove",
        subs: [`2~Coinbase~${coinName}~USD`],
      };
      ccStreamer.send(JSON.stringify(subRequest));
    };
  };
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

export function stopChartAction(coinName) {
  return { type: STOP_CHART, coinName };
}

function getPriceAction(name, price, time) {
  return { type: START_CHART, payload: { name, price, time } };
}

function addCoinAction(coin) {
  return { type: ADD_COIN, coin };
}

export function deleteCoinAction(coin) {
  return { type: DELETE_COIN, coin };
}
