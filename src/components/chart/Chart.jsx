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
  const data = useSelector((state) => state.chart);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(startChart());
  }, [data]);

  return <Line data={data} />;
}
