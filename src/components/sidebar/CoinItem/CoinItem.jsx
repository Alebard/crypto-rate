import React from "react";
import btcIcon from "../../../assets/btc.png";
import { CompareIcon, DeleteIcon } from "../../../assets/icons";
import styled from "styled-components";

const Item = styled.li`
  border: 1px solid black;
  display: flex;
  align-items: center;
  padding: 10px;
  margin-top: 10px;
  justify-content: space-around;

  & img {
    width: 30px;
  }

  & button {
    padding: 5px;
    margin-left: 10px;
  }
`;

function CoinItem() {
  return (
    <Item>
      <img src={btcIcon} alt="btc" />
      <div>Bitcoin BTC</div>
      <button>
        <CompareIcon />
      </button>
      <button>
        <DeleteIcon />
      </button>
    </Item>
  );
}

export default CoinItem;
