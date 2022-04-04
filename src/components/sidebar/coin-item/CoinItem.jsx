import React, { useEffect, useState } from "react";
import btcIcon from "../../../assets/btc.png";
import { useDispatch, useSelector } from "react-redux";
import { deleteCoinAction } from "../../../store/reducers/chart-reducer";
import Checkbox from "../../../UI/Checkbox";
import DeleteButton from "../../../UI/DeleteButton";
import { ItemCart } from "../../../UI/ItemCart";
import { startChart, stopChart } from "../../../store/reducers/chart-reducer";

function CoinItem({ name }) {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (checked) {
      dispatch(startChart(name));
    }
  }, [checked]);

  function deleteCoinHandler() {
    dispatch(deleteCoinAction(name));
  }

  function chartLaunch() {
    setChecked(!checked);
  }

  function stop() {
    dispatch(startChart(name))
  }

  return (
    <ItemCart>
      <img src={btcIcon} alt="btc" />
      <div>{name}</div>
      <Checkbox onChange={chartLaunch} checked={checked} />
      <button onClick={stop}>test</button>
      <DeleteButton onClick={deleteCoinHandler} />
    </ItemCart>
  );
}

export default CoinItem;
