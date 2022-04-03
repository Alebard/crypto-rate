import React, {useEffect, useState} from "react";
import { Switch } from "@mui/material";
import {useDispatch} from "react-redux";
import {hideChartCoinAction, showChartCoinAction} from "../store/reducers/coinsShowChart-reducer";


function Checkbox({name}) {
  const [checked, setChecked] = useState(false)
  const dispatch = useDispatch();


  useEffect(()=>{
    if(checked){
      dispatch(showChartCoinAction(name))
    }else{
      dispatch(hideChartCoinAction(name))
    }
   }, [checked])

  return <Switch onChange={ ()=> {setChecked(!checked);}} {...{ inputProps: { "aria-label": "Switch demo" } }} />;
}

export default Checkbox;
