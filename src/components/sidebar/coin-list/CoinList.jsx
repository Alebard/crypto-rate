import React from "react";
import CoinItem from "../CoinItem/CoinItem";
import styled from "styled-components";
import { useSelector } from "react-redux";

const CoinListWrapper = styled.div`
  margin: 0 auto;
  height: 80%;

  & ul {
    overflow-y: auto;
    max-height: 100%;
    padding: 0;
  }
`;

function CoinList() {
  const coinList = useSelector((state) => state.coin);

  return (
    <CoinListWrapper>
      <ul>
        {coinList.map((name) => (
          <CoinItem name={name} key={name} />
        ))}
      </ul>
    </CoinListWrapper>
  );
}

export default CoinList;
