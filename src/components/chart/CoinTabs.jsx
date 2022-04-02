import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabsCart from "../../UI/TabsCart";

function CoinTabs(props) {
  const tabs = [
    "All",
    "BTC",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Sevens",
    "Sevenss",
  ];

  return (
    <TabsCart>
      {tabs.map((tab) => (
        <Tab onClick={() => console.log(tab)} label={tab} key={tab} />
      ))}
    </TabsCart>
  );
}

export default CoinTabs;
