import React from "react";
import { Grid } from "@mui/material";
import { MyChart } from "../components/chart/Chart";

function ColumnLeft({ children }) {
  return (
    <Grid item xs={8} style={{height: '550px'}} >
      {children}
    </Grid>
  );
}

export default ColumnLeft;
