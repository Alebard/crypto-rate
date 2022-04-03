// import { getPrice } from "../../API/api";
//
// const ADD_COIN = "ADD_COIN";
// const DELETE_COIN = "DELETE_COIN";
//
// export function coinReducer(state = ["LUNA"], action) {
//   switch (action.type) {
//     case ADD_COIN:
//       if (!state.includes(action.coin)) {
//         return [...state, action.coin];
//       }
//       return state;
//     case DELETE_COIN:
//       return state.filter((coin) => coin !== action.coin);
//     default:
//       return state;
//   }
// }
//
// function addCoinAction(coin) {
//   return { type: ADD_COIN, coin };
// }
//
// export function deleteCoinAction(coin) {
//   return { type: DELETE_COIN, coin };
// }
//
// export function addCoin(coinName) {
//   return async function (dispatch) {
//     try {
//       const price = await getPrice(coinName);
//       if (!price) throw new Error("ERROR DATA");
//       dispatch(addCoinAction(coinName));
//     } catch (err) {
//       console.log(err);
//     }
//   };
// }
