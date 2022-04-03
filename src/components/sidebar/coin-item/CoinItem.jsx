import React, { useEffect, useState } from "react";
import btcIcon from "../../../assets/btc.png";
import { useDispatch, useSelector } from "react-redux";
import { deleteCoinAction } from "../../../store/reducers/chart-reducer";
import Checkbox from "../../../UI/Checkbox";
import DeleteButton from "../../../UI/DeleteButton";
import { ItemCart } from "../../../UI/ItemCart";
import {
  startChart,
  stopChartAction,
} from "../../../store/reducers/chart-reducer";

function CoinItem({ name }) {
  const [checked, setChecked] = useState(false);
  const data = useSelector((state) => state.chart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (checked) {
      dispatch(startChart(name));
    }
  }, [checked, data]);

  function deleteCoinHandler() {
    dispatch(deleteCoinAction(name));
  }

  function chartLaunch() {
    setChecked(!checked);
  }

  return (
    <ItemCart>
      <img src={btcIcon} alt="btc" />
      <div>{name}</div>
      <Checkbox onChange={chartLaunch} checked={checked} />
      <DeleteButton onClick={deleteCoinHandler} />
    </ItemCart>
  );
}

export default CoinItem;
