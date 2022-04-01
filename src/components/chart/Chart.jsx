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

import styled from "styled-components";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartWrapper = styled.div`
  width: 70%;
  padding: 10px;
`;

export function MyChart() {
  const [data, setData] = useState({
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
  });

  useEffect(() => {
    setTimeout(() => {
      fetch(
        "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR"
      )
        .then((res) => res.json())
        .then((res) => {
          const val = res.USD;
          const time = new Date().getSeconds();
          const newSate = {
            labels: [...data.labels.slice(1), time],
            datasets: [
              {
                ...data.datasets[0],
                data: [...data.datasets[0].data.slice(1), val],
              },
            ],
          };
          setData(newSate);
        });
    }, 10000);
  }, [data]);

  return (
    <ChartWrapper>
      <Line data={data} />
    </ChartWrapper>
  );
}
