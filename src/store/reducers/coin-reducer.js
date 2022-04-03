const ADD_COIN = "ADD_COIN";
const DELETE_COIN = "DELETE_COIN";

export function coinReducer(state = ["BTC"], action) {
  switch (action.type) {
    case ADD_COIN:
      if (!state.includes(action.coin.toUpperCase())) {
        return [...state, action.coin.toUpperCase()];
      }
      return state;
    case DELETE_COIN:
      return state.filter((coin) => coin !== action.coin);
    default:
      return state;
  }
}

export function addCoin(coin) {
  return { type: ADD_COIN, coin };
}

export function deleteCoin(coin) {
  return { type: DELETE_COIN, coin };
}
