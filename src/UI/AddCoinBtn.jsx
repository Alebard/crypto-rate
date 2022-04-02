import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";

function AddCoinBtn(props) {
  return (
    <Box style={{ zIndex: 1 }}>
      <Fab {...props} size="medium" color="secondary">
        <AddIcon />
      </Fab>
    </Box>
  );
}

export default AddCoinBtn;
