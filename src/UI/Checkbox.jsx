import React from "react";
import { Switch } from "@mui/material";

function Checkbox(props) {
  return <Switch {...props} {...props} {...{ inputProps: { "aria-label": "Switch demo" } }} />;
}

export default Checkbox;
