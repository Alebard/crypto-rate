import React from "react";
import { Box, Stack } from "@mui/material";

function CoinListCart({ children }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack
        style={{
          height: "500px",
          overflowY: "auto",
          padding: "10px",
          margin: "10px",
        }}
        spacing={2}
      >
        {children}
      </Stack>
    </Box>
  );
}

export default CoinListCart;
