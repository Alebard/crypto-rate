const initialState = {
  labels: [],
  datasets: [
    {
      label: "BTC",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [

      ],
    },
  ],
};

export function chartReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
