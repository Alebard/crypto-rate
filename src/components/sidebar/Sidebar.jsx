import React, { useState } from "react";
import CoinSearch from "./coin-search/CoinSearch";
import CoinList from "./coin-list/CoinList";
import AddCoinForm from "../add-coin-form/AddCoinForm";
import AddCoinBtn from "../../UI/AddCoinBtn";
import SidebarCart from "../../UI/SidebarCart";

function Sidebar() {
  const [showForm, setShowForm] = useState(false);

  function showFormHandler(e) {
    e.preventDefault();
    setShowForm(!showForm);
  }

  return (
    <SidebarCart>
      <CoinSearch />
      <CoinList />
      <AddCoinBtn onClick={showFormHandler} />
      {showForm && <AddCoinForm showFormHandler={showFormHandler} />}
    </SidebarCart>
  );
}

export default Sidebar;
