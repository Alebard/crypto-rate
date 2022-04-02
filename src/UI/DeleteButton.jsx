import React from "react";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import styled from "styled-components";

const Button = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  margin-left: 10px;
  background-color: #849ee3;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #6c82bb;
  }
`;

function DeleteButton(props) {
  return (
    <Button {...props}>
      <DeleteRoundedIcon sx={{ color: "#fff" }} />
    </Button>
  );
}

export default DeleteButton;
