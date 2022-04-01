import { format } from "date-fns";

const START_CHART = "START_CHART";

const initialState = {
  labels: [],
  datasets: [
    {
      label: "",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [],
    },
  ],
};

export function chartReducer(state = initialState, action) {
  switch (action.type) {
    case START_CHART:
      if (state.labels.length < 10) {
        return {
          labels: [...state.labels, action.payload.time],
          datasets: [
            {
              ...state.datasets[0],
              label: action.payload.coinName,
              data: [...state.datasets[0].data, action.payload.coinValue],
            },
          ],
        };
      }

      return {
        labels: [...state.labels.slice(1), action.payload.time],
        datasets: [
          {
            ...state.datasets[0],
            label: action.payload.coinName,
            data: [
              ...state.datasets[0].data.slice(1),
              action.payload.coinValue,
            ],
          },
        ],
      };
    default:
      return state;
  }
}

function chartAction(coinName, coinValue, time) {
  return { type: START_CHART, payload: { coinName, coinValue, time } };
}

export function startChart() {
  return async function (dispatch) {
    setTimeout(async () => {
      const response = await fetch(
        "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR"
      );
      const { USD } = await response.json();
      const time = format(new Date(), "HH:mm:ss");
      dispatch(chartAction("BTC", USD, time));
    }, 10000);
  };
}
