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
import { useDispatch, useSelector } from "react-redux";
import { startChart } from "../../store/reducers/chart-reducer";
import { format } from "date-fns";

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
  const data = useSelector((state) => state.chart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startChart());
  }, [data]);

  return (
    <ChartWrapper>
      <Line data={data} />
    </ChartWrapper>
  );
}
