import React from "react";
import { TextField } from "@mui/material";

function Input(props) {
  return (
    <TextField
      helperText=""
      id="demo-helper-text-aligned-no-helper"
      label="Поиск"
      {...props}
    />
  );
}

export default Input;
