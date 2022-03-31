import { combineReducers } from "redux";
import { ADD_COIN, DELETE_COIN } from "./actionTypes";

//settings -> Editor -> General -> Virtual Space -> Allow placement of caret after end of line

const initialState =  {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  datasets: [
    {
      label: "Bitcoin",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [
        47290.16, 47290.16, 47290.16, 47290.16, 47290.16, 47290.16, 47290.16,
        47290.16, 47290.16, 47290.16,
      ],
    },
  ],
}

export function coinReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_COIN:
      return new Set([...state, action.coin]);
    case DELETE_COIN:
      return [...state].filter((coin) => coin !== action.coin);
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  coins: coinReducer,
});
