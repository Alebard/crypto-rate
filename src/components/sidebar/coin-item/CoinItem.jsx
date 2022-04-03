import React from "react";
import btcIcon from "../../../assets/btc.png";
import { useDispatch } from "react-redux";
import { deleteCoin } from "../../../store/reducers/coin-reducer";
import Checkbox from "../../../UI/Checkbox";
import DeleteButton from "../../../UI/DeleteButton";
import { ItemCart } from "../../../UI/ItemCart";

function CoinItem({ name }) {
  const dispatch = useDispatch();
  function deleteCoinHandler() {
    dispatch(deleteCoin(name));
  }

  return (
    <ItemCart>
      <img src={btcIcon} alt="btc" />
      <div>{name}</div>
      <Checkbox name={name}/>
      <DeleteButton onClick={deleteCoinHandler} />
    </ItemCart>
  );
}

export default CoinItem;
