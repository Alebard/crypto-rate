import React from "react";
import CoinItem from "../CoinItem/CoinItem";
import styled from "styled-components";

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
  return (
    <CoinListWrapper>
      <ul>
        <CoinItem />
        <CoinItem />
        <CoinItem />
        <CoinItem />
        <CoinItem />
        <CoinItem />
        <CoinItem />
        <CoinItem />
        <CoinItem />
      </ul>
    </CoinListWrapper>
  );
}

export default CoinList;
