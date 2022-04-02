import React from "react";
import { Grid, Paper } from "@mui/material";
import { MyChart } from "../components/chart/Chart";
import Sidebar from "../components/sidebar/Sidebar";

function SimplePaper({ children }) {
  return (
    <Paper
      elevation={5}
      style={{
        display: "flex",
        alignItems: "center",
        width: "1000px",
        height: "700px",
        margin: "50px auto",
        padding: "20px",
      }}
    >
      {children}
    </Paper>
  );
}

function AppScreen({ children }) {
  return (
    <SimplePaper>
      <Grid container spacing={3} alignItems="center">
        {children}
      </Grid>
    </SimplePaper>
  );
}

export default AppScreen;
