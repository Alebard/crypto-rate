import React from "react";
import { Grid } from "@mui/material";

function SidebarCart({ children }) {
  return (
    <Grid container direction="column" alignItems="center" spacing={1}>
      {children}
    </Grid>
  );
}

export default SidebarCart;
