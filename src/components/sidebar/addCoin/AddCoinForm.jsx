import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addCoin } from "../../../store/reducers/coin-reducer";

const Form = styled.form`
  width: 300px;
  height: 300px;
  background-color: #bba5a5;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  & label {
    margin-top: 10px;
    & input {
      padding: 10px;
    }
  }

  & button {
    width: 100px;
    margin-top: 10px;
    padding: 10px;
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
    <Form>
      <label>
        <input
          onChange={(e) => setCoinName(e.target.value)}
          value={coinName}
          type="text"
        />
      </label>
      <button onClick={saveCoinName}>Add</button>
      <button onClick={showFormHandler}>Close</button>
    </Form>
  );
}

export default AddCoinForm;
