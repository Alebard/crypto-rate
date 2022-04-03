import { format } from "date-fns";
import { getPrice } from "../../API/api";

const START_CHART = "START_CHART";
const STOP_CHART = "STOP_CHART";

const ADD_COIN = "ADD_COIN";
const DELETE_COIN = "DELETE_COIN";

export const initialState = {
  labels: [],
  datasets: [],
};

export function chartReducer(state = initialState, action) {
  switch (action.type) {
    case START_CHART:
      let currentCoinIndex;

      const newDatasets = [...state.datasets];

      currentCoinIndex = newDatasets.findIndex(
        (item) => item.label === action.payload.coinName
      );

      if (state.labels.length < 10) {
        newDatasets[currentCoinIndex].data = [
          ...newDatasets[currentCoinIndex].data,
          action.payload.coinValue,
        ];

        return {
          labels: [...state.labels, action.payload.time],
          datasets: [...newDatasets],
        };
      }

      newDatasets[currentCoinIndex].data = [
        ...newDatasets[currentCoinIndex].data.slice(1),
        action.payload.coinValue,
      ];

      return {
        labels: [...state.labels.slice(1), action.payload.time],
        datasets: [...newDatasets],
      };

    case STOP_CHART:
      return {
        ...state,
        datasets: state.datasets.filter(
          (item) => item.labels !== action.coinName
        ),
      };

    case ADD_COIN:
      const val = state.datasets.findIndex(
        (item) => item.label === action.coin
      );
      console.log(action);
      if (val === -1) {
        const newCoin = {
          label: action.coin,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: [],
        };
        return {
          ...state,
          datasets: [...state.datasets, newCoin],
        };
      }
      return state;
    // case DELETE_COIN:
    //   return state.filter((coin) => coin !== action.coin);

    default:
      return state;
  }
}

function startChartAction(coinName, coinValue, time) {
  return { type: START_CHART, payload: { coinName, coinValue, time } };
}

export function stopChartAction(coinName) {
  return { type: STOP_CHART, coinName };
}

export function startChart(coinName) {
  return async function (dispatch) {
    try {
      const price = await getPrice(coinName);
      if (!price) throw new Error("ERROR DATA");
      const time = format(new Date(), "HH:mm:ss");
      const getCoinDataTimeout = setTimeout(() => {
        dispatch(startChartAction(coinName, price, time));
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };
}

function addCoinAction(coin) {
  return { type: ADD_COIN, coin };
}

export function deleteCoinAction(coin) {
  return { type: DELETE_COIN, coin };
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

export function stopChart() {}
