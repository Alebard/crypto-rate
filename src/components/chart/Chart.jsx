import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { startChart } from "../../store/reducers/chart-reducer";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function MyChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  const data = useSelector((state) => state.chart);

  useEffect(() => {
    const coinPrice = data.coins.map((item) => {
      return {
        label: item.name,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [...item.prices],
      };
    });

    const coinsData = {
      labels: [...data.times],
      datasets: [...coinPrice],
    };

    setChartData(coinsData);
  }, [data]);

  return <Line data={chartData} />;
}

/*
* 1 =>
* CLIENT_ID: 2265827
DATA_FORMAT: "JSON"
MESSAGE: "STREAMERWELCOME"
RATELIMIT_MAX_DAY: 10000
RATELIMIT_MAX_HOUR: 1200
RATELIMIT_MAX_MINUTE: 60
RATELIMIT_MAX_MONTH: 20000
RATELIMIT_MAX_SECOND: 30
RATELIMIT_REMAINING_DAY: 9998
RATELIMIT_REMAINING_HOUR: 1198
RATELIMIT_REMAINING_MINUTE: 59
RATELIMIT_REMAINING_MONTH: 19998
RATELIMIT_REMAINING_SECOND: 29
SERVER_NAME: "14"
SERVER_TIME_MS: 1649049811573
SERVER_UPTIME_SECONDS: 23580
SOCKETS_ACTIVE: 2
SOCKETS_REMAINING: 8
SOCKET_ID: "UMezjtXaf4y5+3Mp7xag"
TYPE: "20"*/

/*
* 2 =>
* FLAGS: 1
FROMSYMBOL: "BTC"
HIGH24HOUR: 47469.4
HIGHDAY: 46445.75
HIGHHOUR: 46236.57
LASTTRADEID: "308377509"
LASTUPDATE: 1649049809
LASTVOLUME: 0.00020481
LASTVOLUMETO: 9.461853342
LOW24HOUR: 45760.32
LOWDAY: 45760.32
LOWHOUR: 46034.81
MARKET: "Coinbase"
OPEN24HOUR: 46376.69
OPENDAY: 46422.16
OPENHOUR: 46093.42
PRICE: 46198.2
TOSYMBOL: "USD"
TYPE: "2"
VOLUME24HOUR: 9782.65588716
VOLUME24HOURTO: 453917478.930871
VOLUMEDAY: 2913.98447324
VOLUMEDAYTO: 134075928.009911
VOLUMEHOUR: 84.9068609
VOLUMEHOURTO: 3918463.05513991*/

/*
* 3 =>
* MESSAGE: "SUBSCRIBECOMPLETE"
SUB: "2~Coinbase~BTC~USD"
TYPE: "16"*/

/*4 =>
* INFO: "All your valid subs have been loaded."
MESSAGE: "LOADCOMPLETE"
TYPE: "3"*/

/*5 =>
* FLAGS: 2
FROMSYMBOL: "BTC"
LASTTRADEID: "308377518"
LASTUPDATE: 1649049811
LASTVOLUME: 0.00052169
LASTVOLUMETO: 24.0949621484
MARKET: "Coinbase"
PRICE: 46186.36
TOSYMBOL: "USD"
TYPE: "2"
VOLUME24HOUR: 9782.9173563
VOLUME24HOURTO: 453929555.83586
VOLUMEDAY: 2914.24594238
VOLUMEDAYTO: 134088004.9149
VOLUMEHOUR: 85.16833004
VOLUMEHOURTO: 3930539.96012875*/

// const apiKey =
//   "3d56d21db65af18b84abee5efdc4a22a8170b85c4c0d4b485af65d467802f804";
// const ccStreamer = new WebSocket(
//   `wss://streamer.cryptocompare.com/v2?api_key=${apiKey}`
// );
// ccStreamer.onopen = function onStreamOpen() {
//   const subRequest = {
//     action: "SubAdd",
//     subs: ["2~Coinbase~BTC~USD"],
//   };
//   ccStreamer.send(JSON.stringify(subRequest));
// };
//
// ccStreamer.onmessage = function onStreamMessage(event) {
//   const message = JSON.parse(event.data);
//
//   if (message.TYPE === '2') {
//     console.log(message);
//   }
// };
