import React, { useEffect, useState } from "react";
import btcIcon from "../../../assets/btc.png";
import { useDispatch } from "react-redux";
import Checkbox from "../../../UI/Checkbox";
import DeleteButton from "../../../UI/DeleteButton";
import { ItemCart } from "../../../UI/ItemCart";
import {ccStreamer, onStreamOpen} from "../../../API/api";
import {deleteCoinAction, stopChartAction} from "../../../store/actions/actions";


function CoinItem({ name }) {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (checked) {
        onStreamOpen(name)
    }else{
        if(!ccStreamer.readyState){
            setTimeout(function (){
                dispatch(stopChartAction(name));
            },200);
        }else{
            dispatch(stopChartAction(name));
        }
    }
  }, [checked]);

  function deleteCoinHandler() {
      if (ccStreamer){
          dispatch(stopChartAction(name))
      }
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
