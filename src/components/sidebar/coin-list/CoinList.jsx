import React from "react";
import CoinItem from "../coin-item/CoinItem";
import { useSelector } from "react-redux";
import CoinListCart from "../../../UI/CoinListCart";

function CoinList() {
  const coinList = useSelector((state) => state.chart.coins);
  return (
    <CoinListCart>
      {coinList.map((item) => (
        <CoinItem name={item.name} key={item.name} />
      ))}
    </CoinListCart>
  );
}

export default CoinList;
