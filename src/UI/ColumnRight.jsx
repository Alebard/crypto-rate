import React from "react";
import { Grid } from "@mui/material";

function ColumnRight({ children }) {
  return (
    <Grid item xs={4}>
      {children}
    </Grid>
  );
}

export default ColumnRight;
