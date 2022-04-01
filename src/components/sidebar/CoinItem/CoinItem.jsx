import React from "react";
import btcIcon from "../../../assets/btc.png";
import { CompareIcon, DeleteIcon } from "../../../assets/icons";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteCoin } from "../../../store/reducers/coin-reducer";

const Item = styled.li`
  border: 1px solid black;
  display: flex;
  align-items: center;
  padding: 10px;
  margin-top: 10px;
  justify-content: space-around;

  & div {
    padding: 5px;
  }

  & img {
    width: 30px;
  }

  & button {
    padding: 5px;
    margin-left: 10px;
    background-color: #fff;
    border: 1px solid black;
    cursor: pointer;

    &:hover {
      background-color: #eee8e8;
    }
  }
`;

function CoinItem({ name }) {
  const dispatch = useDispatch();
  function deleteCoinHandler() {
    dispatch(deleteCoin(name));
  }

  return (
    <Item>
      <img src={btcIcon} alt="btc" />
      <div>{name}</div>
      <button>
        <CompareIcon />
      </button>
      <button onClick={deleteCoinHandler}>
        <DeleteIcon />
      </button>
    </Item>
  );
}

export default CoinItem;
