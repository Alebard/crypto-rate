import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
// import { addCoin } from "../../store/reducers/coin-reducer";
import ModalCart from "../../UI/ModalCart";
import Input from "../../UI/Input";
import { Button } from "@mui/material";
import { addCoin } from "../../store/reducers/chart-reducer";

const Form = styled.form`
  padding: 20px;
  width: 400px;
  background-color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;

  border-radius: 10px;

  & button {
    margin-top: 10px;
    padding: 15px;
  }
`;

function AddCoinForm({ showFormHandler }) {
  const [coinName, setCoinName] = useState("");
  const dispatch = useDispatch();

  function saveCoinName(e) {
    e.preventDefault();
    if (coinName.trim()) {
      dispatch(addCoin(coinName));
    }
  }

  return (
    <ModalCart>
      <Form>
        <Input onChange={(e) => setCoinName(e.target.value)} value={coinName} />
        <Button onClick={saveCoinName} variant="contained">
          Send
        </Button>
        <Button onClick={showFormHandler} variant="outlined">
          Close
        </Button>
      </Form>
    </ModalCart>
  );
}

export default AddCoinForm;
