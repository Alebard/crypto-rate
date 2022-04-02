import React from "react";
import CoinItem from "../CoinItem/CoinItem";
import { useSelector } from "react-redux";
import CoinListCart from "../../../UI/CoinListCart";

function CoinList() {
  const coinList = useSelector((state) => state.coin);

  return (
    <CoinListCart>
      {coinList.map((name) => (
        <CoinItem name={name} key={name} />
      ))}
    </CoinListCart>
  );
}

export default CoinList;
