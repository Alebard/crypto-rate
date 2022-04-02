import React from "react";
import { Switch } from "@mui/material";

function Checkbox() {
  return <Switch {...{ inputProps: { "aria-label": "Switch demo" } }} />;
}

export default Checkbox;
