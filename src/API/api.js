import {format} from "date-fns";
import {getPriceAction} from "../store/reducers/chart-reducer";

export async function getPrice(coinName) {
  const url = `https://min-api.cryptocompare.com/data/price?fsym=${coinName}&tsyms=USD,JPY,EUR`;
  const response = await fetch(url);
  const { USD } = await response.json();
  return USD;
}

export function startChart() {
  return function (dispatch) {

    const apiKey = "3d56d21db65af18b84abee5efdc4a22a8170b85c4c0d4b485af65d467802f804";

    window.ccStreamer = new WebSocket(`wss://streamer.cryptocompare.com/v2?api_key=${apiKey}`);

    window.ccStreamer.onmessage = function onStreamMessage(event) {
      const message = JSON.parse(event.data);
      if (!message.PRICE) return

      if (message.TYPE === "2") {
        const time = format(new Date(), "HH:mm:ss");
        dispatch(getPriceAction(message.FROMSYMBOL, message.PRICE, time));
      }
    };

  };
}

export function onStreamClose(coinName) {
    const subRequest = {
      action: "SubRemove",
      subs: [`2~Coinbase~${coinName}~USD`],
    };
    window.ccStreamer.send(JSON.stringify(subRequest));
}


export function onStreamOpen(coinName) {
    const subRequest = {
        action: "SubAdd",
        subs: [`2~Coinbase~${coinName}~USD`],
    };
    window.ccStreamer.send(JSON.stringify(subRequest));
};