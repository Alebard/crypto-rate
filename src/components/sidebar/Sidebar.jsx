import React, { useState } from "react";
import CoinSearch from "./coin-search/CoinSearch";
import CoinList from "./coin-list/CoinList";
import styled from "styled-components";
import { AddCoin } from "./addCoin/AddCoinBtn";
import AddCoinForm from "./addCoin/AddCoinForm";

const SidebarWrapper = styled.div`
  height: 80%;
  border-radius: 10px;
  margin: 0 auto;
  text-align: center;
`;

function Sidebar() {
  const [showForm, setShowForm] = useState(false);

  function showFormHandler(e) {
    e.preventDefault();
    setShowForm(!showForm);
  }

  return (
    <SidebarWrapper>
      <CoinSearch />
      <CoinList />
      <AddCoin onClick={showFormHandler}>Add</AddCoin>
      {showForm && <AddCoinForm showFormHandler={showFormHandler} />}
    </SidebarWrapper>
  );
}

export default Sidebar;
