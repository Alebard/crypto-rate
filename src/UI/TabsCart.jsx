import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function TabsCart({ children }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons
      aria-label="scrollable prevent tabs example"
      style={{
        border: "1px solid #ccd0d7",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: '40px'
      }}
    >
      {children}
    </Tabs>
  );
}

export default TabsCart;
