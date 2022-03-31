import React from "react";
import CoinSearch from "./coin-search/CoinSearch";
import CoinList from "./coin-list/CoinList";
import styled from "styled-components";
import { AddCoin } from "./addCoin/AddCoinBtn";

const SidebarWrapper = styled.div`
  height: 80%;
  border-radius: 10px;
  margin: 0 auto;
  text-align: center;
`;

function Sidebar() {
  return (
    <SidebarWrapper>
      <CoinSearch />
      <CoinList />
      <AddCoin>Add</AddCoin>
    </SidebarWrapper>
  );
}

export default Sidebar;
