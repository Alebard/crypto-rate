import React from "react";
import CoinItem from "../coin-item/CoinItem";
import { useSelector } from "react-redux";
import CoinListCart from "../../../UI/CoinListCart";

function CoinList() {
  const coinData = useSelector((state) => state.chart.datasets);

  return (
    <CoinListCart>
      {coinData.map((item) => (
        <CoinItem name={item.label} key={item.label} />
      ))}
    </CoinListCart>
  );
}

export default CoinList;
