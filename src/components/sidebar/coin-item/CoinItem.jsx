import React, { useEffect, useState } from "react";
import btcIcon from "../../../assets/btc.png";
import { useDispatch, useSelector } from "react-redux";
import {deleteCoinAction, stopChartAction} from "../../../store/reducers/chart-reducer";
import Checkbox from "../../../UI/Checkbox";
import DeleteButton from "../../../UI/DeleteButton";
import { ItemCart } from "../../../UI/ItemCart";
    import {onStreamClose, onStreamOpen, startChart} from "../../../API/api";


function CoinItem({ name }) {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();


  useEffect(() => {
    if (checked) {
        onStreamOpen(name)
    }else{
        if (window.ccStreamer){
            dispatch(stopChartAction(name))
        }
    }
  }, [checked]);

  function deleteCoinHandler() {
      if (window.ccStreamer){
          dispatch(stopChartAction(name))
      }
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
      <DeleteButton onClick={deleteCoinHandler} />
    </ItemCart>
  );
}

export default CoinItem;
